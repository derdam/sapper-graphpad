import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import http from 'http';
import io from 'socket.io';

import { v4 as uuidv4 } from 'uuid';
import { isUndefined } from 'util';
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = http.createServer();

polka({ server }) // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

let numUsers = 0;
let users = [];
let userGraph = {nodes:[{id:0}], edges:[]};

function updateGraph(socket) {
    //  console.log("changeNode");
    socket.broadcast.emit("userGraph", userGraph);
	socket.emit("userGraph", userGraph);
  }




io(server).on('connection', function(socket) {
	++numUsers;
	let message = 'Server: A new user has joined the chat';
	socket.emit('user joined', { message, numUsers });
	socket.broadcast.emit('user joined', { message, numUsers });

	socket.emit('userGraph', userGraph);
	
	socket.on('message', function(msg) {
		socket.broadcast.emit('message', msg);
	})


	socket.on('login', function(msg) {	
		users.push(msg);
		const id = msg; //uuidv4();
		const node = {id:id, label:msg};

		userGraph.nodes.push(node);
		userGraph.edges.push({id: uuidv4(), from: 0, to: id});

		socket.broadcast.emit('logged', node);
		socket.emit('logged', {...node, color:'gold', isMe:true});

		//socket.broadcast.emit('message', "login: "+msg);
	})

	socket.on('disconnect', function() {
		--numUsers;
		socket.broadcast.emit('user left', numUsers);
	})

	socket.on('message', function (msg) {
		console.log("message", msg);
	});


	socket.on("addNode", function() {
		let nodeId = uuidv4();
		userGraph.nodes =  [...userGraph.nodes, {id: nodeId, label: 'New'}];
		let edgeId = uuidv4();
		userGraph.edges = [...userGraph.edges, { id: edgeId, from:0, to: nodeId}]
		updateGraph(socket);
	});

	let nodeStyles= {
		foo: {shape:'triangle', color:'red'},
		bar: {shape:'diamond', color:'green'},
		_default: {shape:null, color:null, font:null}
	}

	socket.on('updateNodeClass', function(node) {
		//	socket.emit("message", "nodeUpdated "+JSON.stringify(node))
			let snode = userGraph.nodes.find(e => e.id === node.id);
			
				let style = nodeStyles[node.class ? node.class:'_default'];
				if (style===undefined) {
					style = nodeStyles._default;
				}
				snode = {...snode, id: node.id, class:node.class, ...style}; //, ...style}
				socket.emit("message" ,JSON.stringify(snode));
				userGraph.nodes =  [...userGraph.nodes, snode];
				// notify all users that the whole graph has been updated
				updateGraph(socket);

				// notify all users but the sender that this node class has changed
				socket.broadcast.emit("nodeClassUpdated", snode);

		});

	socket.on('updateNodeLabel', function(node) {
	//	socket.emit("message", "nodeUpdated "+JSON.stringify(node))
		let snode = userGraph.nodes.find(e => e.id === node.id);
			snode = {...snode, id: node.id, label:node.label}; //, ...style}
			//socket.emit("message" ,JSON.stringify(snode));
			userGraph.nodes =  [...userGraph.nodes, snode];
			updateGraph(socket);

			// notify all users but the sender that this node class has changed
			socket.broadcast.emit("nodeLabelUpdated", snode);

	});

	socket.on('clear', function() {
		//	socket.emit("message", "nodeUpdated "+JSON.stringify(node))
			userGraph.nodes=[];
			userGraph.edges=[];	
			socket.emit("clear");
			socket.broadcast.emit("clear");
    
		});

	socket.on('user disconnect', function(name) {	
		socket.broadcast.emit('message', `Server: ${name} has left the chat.`)
		/*userGraph.nodes = userGraph.nodes.filter(n=>n.id != name);
		socket.broadcast.emit("userGraph",userGraph); */
	})

   
	
});


