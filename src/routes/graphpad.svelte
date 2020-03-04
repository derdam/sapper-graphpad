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
    height:600px;
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
    nodes: new vis.DataSet(
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
  let nodeUpdating = false;

  onMount(async () => {
    // create a network
    var container = document.getElementById('mynet');
    network = new vis.Network(container, data, {});    
    network.on("select", function (params) {
      // nodeSelection.selectNode(params.nodes[0]);
      //  selection = params;
    });


   
     data.nodes.on('update', function (event, properties, senderId) { 
       
     if (!nodeUpdating) {
         nodeUpdating = true;

       nodeUpdating = false;
     }
    });

    setTimeout(() => {
         // network.fit();
        }, 1000);
  
    });
  
	const socket = io();

  
  //let nodeMe={};


	
	
  socket.on("message", function (msg) {
       console.log("server message", msg);
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
    nclass='foo';  
  }

  function addNode() {
    //  console.log("changeNode");
    socket.emit("addNode");
  }

  function clear() {
    //console.log("clear");
    socket.emit("clear");
  }

  function clearClasses() {
   nclass="_default";  
  }

let label = '';

$: {
    if (label!='') {
        socket.emit("updateNodeLabel", {id:0, label:label})
    }
}
  
  
let nclass = '';

$: {
    if (nclass!='') {
        socket.emit("updateNodeClass", {id:0, class:nclass})
    }
}
</script>

<body>
  <div class="graph" id="mynet"></div>
  <button on:click={changeNode}>Change Node</button>
  <button on:click={addNode}>Add Node</button>
  <button on:click={clear}>Clear</button>
 <button on:click={clearClasses}>Clear classes</button>
 <p>Label: <input bind:value={label}>
    Class: <input bind:value={nclass}>
</p>


</body>
