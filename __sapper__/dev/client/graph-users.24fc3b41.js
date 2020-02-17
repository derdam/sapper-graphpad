import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, o as text, a as claim_element, b as children, p as claim_text, d as detach, f as attr, g as add_location, h as insert, q as append, r as set_data, D as create_bidirectional_transition, u as space, E as listen, F as prevent_default, t as transition_in, l as transition_out, C as check_outros, G as destroy_each, H as run_all, J as onMount, m as globals, I as add_render_callback, B as group_outros } from './chunk.0e38c6f1.js';
import { i as io, f as fade } from './chunk.54fb5fdb.js';
import { Y as YO, h as hC } from './chunk.7b6c5703.js';

/* src/routes/graph-users.svelte generated by Svelte v3.6.7 */
const { document: document_1 } = globals;

const file = "src/routes/graph-users.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.message = list[i];
	return child_ctx;
}

// (269:8) {#each messages as message}
function create_each_block(ctx) {
	var li, t_value = ctx.message, t, li_transition, current;

	return {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true }, false);
			var li_nodes = children(li);

			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(li, "class", "svelte-1pxwkss");
			add_location(li, file, 269, 10, 4987);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			append(li, t);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.messages) && t_value !== (t_value = ctx.message)) {
				set_data(t, t_value);
			}
		},

		i: function intro(local) {
			if (current) return;
			add_render_callback(() => {
				if (!li_transition) li_transition = create_bidirectional_transition(li, fade, {}, true);
				li_transition.run(1);
			});

			current = true;
		},

		o: function outro(local) {
			if (!li_transition) li_transition = create_bidirectional_transition(li, fade, {}, false);
			li_transition.run(0);

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
				if (li_transition) li_transition.end();
			}
		}
	};
}

function create_fragment(ctx) {
	var meta, t0, body, div0, t1, div2, div1, ul, t2, form, input, t3, button, t4, t5, p, t6, t7_value = ctx.numUsersConnected == 1 ? 'is' : 'are', t7, t8, t9, t10, t11_value = ctx.numUsersConnected == 1 ? 'user' : 'users', t11, t12, current, dispose;

	var each_value = ctx.messages;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c: function create() {
			meta = element("meta");
			t0 = space();
			body = element("body");
			div0 = element("div");
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			ul = element("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			form = element("form");
			input = element("input");
			t3 = space();
			button = element("button");
			t4 = text("Send");
			t5 = space();
			p = element("p");
			t6 = text("There ");
			t7 = text(t7_value);
			t8 = space();
			t9 = text(ctx.numUsersConnected);
			t10 = space();
			t11 = text(t11_value);
			t12 = text(" currently chatting!");
			this.h();
		},

		l: function claim(nodes) {
			meta = claim_element(nodes, "META", { name: true, content: true, class: true }, false);
			var meta_nodes = children(meta);

			meta_nodes.forEach(detach);
			t0 = claim_text(nodes, "\n\n\n\n\n\n");

			body = claim_element(nodes, "BODY", { class: true }, false);
			var body_nodes = children(body);

			div0 = claim_element(body_nodes, "DIV", { class: true, id: true }, false);
			var div0_nodes = children(div0);

			div0_nodes.forEach(detach);
			t1 = claim_text(body_nodes, "\n  ");

			div2 = claim_element(body_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { id: true, class: true }, false);
			var div1_nodes = children(div1);

			ul = claim_element(div1_nodes, "UL", { id: true, class: true }, false);
			var ul_nodes = children(ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t2 = claim_text(div2_nodes, "\n    ");

			form = claim_element(div2_nodes, "FORM", { action: true, class: true }, false);
			var form_nodes = children(form);

			input = claim_element(form_nodes, "INPUT", { id: true, autocomplete: true, placeholder: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			t3 = claim_text(form_nodes, "\n      ");

			button = claim_element(form_nodes, "BUTTON", { class: true }, false);
			var button_nodes = children(button);

			t4 = claim_text(button_nodes, "Send");
			button_nodes.forEach(detach);
			form_nodes.forEach(detach);
			t5 = claim_text(div2_nodes, "\n\t\t");

			p = claim_element(div2_nodes, "P", { id: true, class: true }, false);
			var p_nodes = children(p);

			t6 = claim_text(p_nodes, "There ");
			t7 = claim_text(p_nodes, t7_value);
			t8 = claim_text(p_nodes, " ");
			t9 = claim_text(p_nodes, ctx.numUsersConnected);
			t10 = claim_text(p_nodes, " ");
			t11 = claim_text(p_nodes, t11_value);
			t12 = claim_text(p_nodes, " currently chatting!");
			p_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			body_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document_1.title = "Chat App";
			attr(meta, "name", "viewport");
			attr(meta, "content", "width=device-width, initial-scale=1.0");
			attr(meta, "class", "svelte-1pxwkss");
			add_location(meta, file, 107, 1, 1544);
			attr(div0, "class", "graph svelte-1pxwkss");
			attr(div0, "id", "mynet");
			add_location(div0, file, 263, 2, 4828);
			attr(ul, "id", "messages");
			attr(ul, "class", "svelte-1pxwkss");
			add_location(ul, file, 267, 6, 4922);
			attr(div1, "id", "chatWindow");
			attr(div1, "class", "svelte-1pxwkss");
			add_location(div1, file, 266, 4, 4894);
			attr(input, "id", "m");
			attr(input, "autocomplete", "off");
			attr(input, "placeholder", placeholder);
			attr(input, "class", "svelte-1pxwkss");
			add_location(input, file, 274, 6, 5088);
			attr(button, "class", "svelte-1pxwkss");
			add_location(button, file, 275, 6, 5165);
			attr(form, "action", "");
			attr(form, "class", "svelte-1pxwkss");
			add_location(form, file, 273, 4, 5065);
			attr(p, "id", "numUsers");
			attr(p, "class", "svelte-1pxwkss");
			add_location(p, file, 277, 2, 5240);
			attr(div2, "class", "main svelte-1pxwkss");
			add_location(div2, file, 264, 2, 4867);
			attr(body, "class", "svelte-1pxwkss");
			add_location(body, file, 262, 0, 4819);

			dispose = [
				listen(window, "unload", ctx.emitUserDisconnect),
				listen(input, "input", ctx.input_input_handler),
				listen(button, "click", prevent_default(ctx.handleSubmit))
			];
		},

		m: function mount(target, anchor) {
			append(document_1.head, meta);
			insert(target, t0, anchor);
			insert(target, body, anchor);
			append(body, div0);
			append(body, t1);
			append(body, div2);
			append(div2, div1);
			append(div1, ul);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append(div2, t2);
			append(div2, form);
			append(form, input);

			input.value = ctx.message;

			append(form, t3);
			append(form, button);
			append(button, t4);
			append(div2, t5);
			append(div2, p);
			append(p, t6);
			append(p, t7);
			append(p, t8);
			append(p, t9);
			append(p, t10);
			append(p, t11);
			append(p, t12);
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.messages) {
				each_value = ctx.messages;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(ul, null);
					}
				}

				group_outros();
				for (i = each_value.length; i < each_blocks.length; i += 1) out(i);
				check_outros();
			}

			if (changed.message && (input.value !== ctx.message)) input.value = ctx.message;

			if ((!current || changed.numUsersConnected) && t7_value !== (t7_value = ctx.numUsersConnected == 1 ? 'is' : 'are')) {
				set_data(t7, t7_value);
			}

			if (!current || changed.numUsersConnected) {
				set_data(t9, ctx.numUsersConnected);
			}

			if ((!current || changed.numUsersConnected) && t11_value !== (t11_value = ctx.numUsersConnected == 1 ? 'user' : 'users')) {
				set_data(t11, t11_value);
			}
		},

		i: function intro(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) transition_in(each_blocks[i]);

			current = true;
		},

		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);
			for (let i = 0; i < each_blocks.length; i += 1) transition_out(each_blocks[i]);

			current = false;
		},

		d: function destroy(detaching) {
			detach(meta);

			if (detaching) {
				detach(t0);
				detach(body);
			}

			destroy_each(each_blocks, detaching);

			run_all(dispose);
		}
	};
}

const placeholder = "Type your message here...";

function updateScroll() {
		const chatWindow = document.getElementById('chatWindow');
		setTimeout(() => {
			chatWindow.scrollTop = chatWindow.scrollHeight;			
		}, 0);
}

function instance($$self, $$props, $$invalidate) {
	
  
  var data = {
    nodes: new YO([
      {id:0, label:'Hello'}]
      ),
    edges: new YO()
  };

  let network;

  onMount(async () => {
    // create a network
    var container = document.getElementById('mynet');
    network = new hC(container, data, {});    
    network.on("select", function (params) {
      // nodeSelection.selectNode(params.nodes[0]);
      //  selection = params;
    });


    setTimeout(() => {
         // network.fit();
        }, 1000);
  
  });
  
	const socket = io();
	const greeting = `You have joined the chat. Use '/nick your_nickname' to set your nickname!`;
  let messages = [greeting];
	let message = "";
	let name = 'Anonymous';
  let numUsersConnected = 0;

  socket.on("message", function(message) {	
    if (message) { 	
      $$invalidate('messages', messages = messages.concat(message));
      updateScroll();
    }
	
  });
  
  socket.on("logged", function(message) {		
   // messages = messages.concat(message);
    
    if (message.isMe) 
    {
      // replace default node with received node from server
      message.id = 0; 
    }
    data.nodes.update(message);


    if (!message.isMe) {
      data.edges.add({from: message.id, to:0});
    }

	});
	
	socket.on("user joined", function({message, numUsers}) {
		$$invalidate('messages', messages = messages.concat(message));
    $$invalidate('numUsersConnected', numUsersConnected = numUsers);
  //  data.nodes.add({label: message})
		updateScroll();
	});

	socket.on("user left", function(numUsers) {
		$$invalidate('numUsersConnected', numUsersConnected = numUsers);
		updateScroll();
  });
 
  socket.on("userGraph", function(g) {

    data.nodes.update(g.nodes);
    data.edges.update(g.edges);
  });

	function emitUserDisconnect() {
		socket.emit('user disconnect', name); 
	}

  function handleSubmit() {
		$$invalidate('message', message = message.trim());
		
		if (message == '') {
			return;
		}

		let messageString = `${name}: ${message}`;

		if (message.slice(0, 5) == '/nick') {
			let newName = message.slice(6);
      messageString = `Server: ${name} changed their nickname to ${newName}`;
    
      name = newName;
        socket.emit("login", name);
      
		}

    $$invalidate('messages', messages = messages.concat(messageString));
    
		socket.emit("message", messageString);

		updateScroll();

		$$invalidate('message', message = "");
	}

	function input_input_handler() {
		message = this.value;
		$$invalidate('message', message);
	}

	return {
		messages,
		message,
		numUsersConnected,
		emitUserDisconnect,
		handleSubmit,
		input_input_handler
	};
}

class Graph_users extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Graph_users;
