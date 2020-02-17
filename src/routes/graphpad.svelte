<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    font: 13px "Noto Sans";
    background:black;
  }



  ::placeholder {
    color: #fff8b8;
  }



  .graph {
    background-color: black;;
    height:300px;
    width:100%;
  }
</style>

<svelte:head>
  <title>Graphpad</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<svelte:window on:unload={emitUserDisconnect}/>

<script>

  import { onMount } from 'svelte';
  import * as vis from 'vis-network';
  import io from "socket.io-client";
  import { fade } from "svelte/transition";	
  import Heading from "../components/Heading.svelte";
  
  var data = {
    nodes: new vis.DataSet([
      {id:0, label:'Hello'}]
      ),
    edges: new vis.DataSet()
  };

  let options = {
    physics:{
    enabled: true,
    }, 
   autoResize: true,
            height: '100%',
            width: '100%',
    interaction: { multiselect: true },
    nodes:{
      font: {color: '#ffffff'},
      shapeProperties: {
              useBorderWithImage:false,
              interpolation:true
      },
      //color:'#0077C8' 
      color: '#33333333'
    }, edges: {
      color: "0077C8"
      ,smooth: { enabled: true}
    }
  };

  let network;

  onMount(async () => {
    // create a network
    var container = document.getElementById('mynet');
    network = new vis.Network(container, data, {});    
    network.on("select", function (params) {
      // nodeSelection.selectNode(params.nodes[0]);
      //  selection = params;
    });


    setTimeout(() => {
         // network.fit();
        }, 1000);
  
  });
  
	const socket = io();

  
  let nodeMe={};

 
  
  socket.on("logged", function(message) {		
   // messages = messages.concat(message);
    
    if (message.isMe) 
    {
      // replace default node with received node from server
      message.id = 0 
    };

    data.nodes.update(message);


    if (!message.isMe) {
      data.edges.add({from: message.id, to:0});
    }

	});
	
	
   socket.on("message", function (msg) {
       console.log("message", msg);
   });

  socket.on("userGraph", function(g) {
  //  console.log("userGraph", g);
    data.nodes.update(g.nodes);
    data.edges.update(g.edges);
  });

  socket.on("clear", function() {
    console.log("clear");
    data.nodes.clear();
    data.edges.clear();    
     });

  function emitUserDisconnect() {
	socket.emit('user disconnect', name); 
  }

  function changeNode() {
    //  console.log("changeNode");
    socket.emit("updateNode", {id:0, color:'gold'});
    
  }

   function addNode() {
    //  console.log("changeNode");
    socket.emit("addNode");
    
  }

   function clear() {
    //console.log("clear");
    socket.emit("clear");
    
  }
  
</script>

<body>
  <div class="graph" id="mynet"></div>
  <button on:click={changeNode}>Change Node</button>
  <button on:click={addNode}>Add Node</button>
  <button on:click={clear}>Clear</button>

</body>
