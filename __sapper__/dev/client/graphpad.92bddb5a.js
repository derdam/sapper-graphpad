import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, u as space, o as text, a as claim_element, b as children, d as detach, p as claim_text, f as attr, g as add_location, E as listen, q as append, h as insert, n as noop, H as run_all, L as onMount, m as globals } from './chunk.b4b1df76.js';
import { i as io } from './chunk.53e2f336.js';
import { Y as YO, h as hC } from './chunk.fe098cd6.js';

/* src/routes/graphpad.svelte generated by Svelte v3.6.7 */
const { document: document_1 } = globals;

const file = "src/routes/graphpad.svelte";

function create_fragment(ctx) {
	var meta, t0, body, div, t1, button0, t2, t3, button1, t4, t5, button2, t6, t7, button3, t8, t9, input0, t10, input1, dispose;

	return {
		c: function create() {
			meta = element("meta");
			t0 = space();
			body = element("body");
			div = element("div");
			t1 = space();
			button0 = element("button");
			t2 = text("Change Node");
			t3 = space();
			button1 = element("button");
			t4 = text("Add Node");
			t5 = space();
			button2 = element("button");
			t6 = text("Clear");
			t7 = space();
			button3 = element("button");
			t8 = text("Clear classes");
			t9 = text("\nLabel: ");
			input0 = element("input");
			t10 = text("\nClass: ");
			input1 = element("input");
			this.h();
		},

		l: function claim(nodes) {
			meta = claim_element(nodes, "META", { name: true, content: true, class: true }, false);
			var meta_nodes = children(meta);

			meta_nodes.forEach(detach);
			t0 = claim_text(nodes, "\n\n\n\n\n\n");

			body = claim_element(nodes, "BODY", { class: true }, false);
			var body_nodes = children(body);

			div = claim_element(body_nodes, "DIV", { class: true, id: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach);
			t1 = claim_text(body_nodes, "\n  ");

			button0 = claim_element(body_nodes, "BUTTON", { class: true }, false);
			var button0_nodes = children(button0);

			t2 = claim_text(button0_nodes, "Change Node");
			button0_nodes.forEach(detach);
			t3 = claim_text(body_nodes, "\n  ");

			button1 = claim_element(body_nodes, "BUTTON", { class: true }, false);
			var button1_nodes = children(button1);

			t4 = claim_text(button1_nodes, "Add Node");
			button1_nodes.forEach(detach);
			t5 = claim_text(body_nodes, "\n  ");

			button2 = claim_element(body_nodes, "BUTTON", { class: true }, false);
			var button2_nodes = children(button2);

			t6 = claim_text(button2_nodes, "Clear");
			button2_nodes.forEach(detach);
			t7 = claim_text(body_nodes, "\n ");

			button3 = claim_element(body_nodes, "BUTTON", { class: true }, false);
			var button3_nodes = children(button3);

			t8 = claim_text(button3_nodes, "Clear classes");
			button3_nodes.forEach(detach);
			t9 = claim_text(body_nodes, "\nLabel: ");

			input0 = claim_element(body_nodes, "INPUT", { class: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t10 = claim_text(body_nodes, "\nClass: ");

			input1 = claim_element(body_nodes, "INPUT", { class: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			body_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document_1.title = "Graphpad";
			attr(meta, "name", "viewport");
			attr(meta, "content", "width=device-width, initial-scale=1.0");
			attr(meta, "class", "svelte-1888aql");
			add_location(meta, file, 30, 1, 341);
			attr(div, "class", "graph svelte-1888aql");
			attr(div, "id", "mynet");
			add_location(div, file, 190, 2, 3489);
			attr(button0, "class", "svelte-1888aql");
			add_location(button0, file, 191, 2, 3528);
			attr(button1, "class", "svelte-1888aql");
			add_location(button1, file, 192, 2, 3581);
			attr(button2, "class", "svelte-1888aql");
			add_location(button2, file, 193, 2, 3628);
			attr(button3, "class", "svelte-1888aql");
			add_location(button3, file, 194, 1, 3669);
			attr(input0, "class", "svelte-1888aql");
			add_location(input0, file, 195, 7, 3731);
			attr(input1, "class", "svelte-1888aql");
			add_location(input1, file, 196, 7, 3765);
			attr(body, "class", "svelte-1888aql");
			add_location(body, file, 189, 0, 3480);

			dispose = [
				listen(window, "unload", ctx.emitUserDisconnect),
				listen(button0, "click", ctx.changeNode),
				listen(button1, "click", ctx.addNode),
				listen(button2, "click", ctx.clear),
				listen(button3, "click", ctx.clearClasses),
				listen(input0, "input", ctx.input0_input_handler),
				listen(input1, "input", ctx.input1_input_handler)
			];
		},

		m: function mount(target, anchor) {
			append(document_1.head, meta);
			insert(target, t0, anchor);
			insert(target, body, anchor);
			append(body, div);
			append(body, t1);
			append(body, button0);
			append(button0, t2);
			append(body, t3);
			append(body, button1);
			append(button1, t4);
			append(body, t5);
			append(body, button2);
			append(button2, t6);
			append(body, t7);
			append(body, button3);
			append(button3, t8);
			append(body, t9);
			append(body, input0);

			input0.value = ctx.label;

			append(body, t10);
			append(body, input1);

			input1.value = ctx.nclass;
		},

		p: function update(changed, ctx) {
			if (changed.label && (input0.value !== ctx.label)) input0.value = ctx.label;
			if (changed.nclass && (input1.value !== ctx.nclass)) input1.value = ctx.nclass;
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			detach(meta);

			if (detaching) {
				detach(t0);
				detach(body);
			}

			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	
  
  var data = {
    nodes: new YO(
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


   
     data.nodes.on('update', function (event, properties, senderId) { 
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


  socket.on("nodeClassUpdated", function(node) {
    console.log("nodeClassUpdated ", node);
    $$invalidate('nclass', nclass = node.class ? node.class : '');
     $$invalidate('label', label = node.label ? node.label : '');
  });

socket.on("nodeLabelUpdated", function(node) {
    console.log("nodeLabelUpdated ", node);
     let newabel = node.label ? node.label : '';
     if (newabel!== node.label) {
         $$invalidate('label', label = newabel);
     }
  });

  function emitUserDisconnect() {
	socket.emit('user disconnect', name); 
  }

  function changeNode() {
    //  console.log("changeNode");
    $$invalidate('nclass', nclass='foo');  
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
   $$invalidate('nclass', nclass="_default");  
  }

let label = '';
  
  
let nclass = '';

	function input0_input_handler() {
		label = this.value;
		$$invalidate('label', label);
	}

	function input1_input_handler() {
		nclass = this.value;
		$$invalidate('nclass', nclass);
	}

	$$self.$$.update = ($$dirty = { label: 1, nclass: 1 }) => {
		if ($$dirty.label) { {
        if (label!='') {
            socket.emit("updateNodeLabel", {id:0, label:label});
        }
    } }
		if ($$dirty.nclass) { {
        if (nclass!='') {
            socket.emit("updateNodeClass", {id:0, class:nclass});
        }
    } }
	};

	return {
		emitUserDisconnect,
		changeNode,
		addNode,
		clear,
		clearClasses,
		label,
		nclass,
		input0_input_handler,
		input1_input_handler
	};
}

class Graphpad extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Graphpad;
