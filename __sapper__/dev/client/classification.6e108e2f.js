import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, o as text, a as claim_element, b as children, p as claim_text, d as detach, g as add_location, E as listen, h as insert, q as append, n as noop, u as space, H as run_all, f as attr, x as mount_component, t as transition_in, l as transition_out, z as destroy_component, r as set_data, C as check_outros, J as validate_store, K as subscribe, B as group_outros } from './chunk.b4b1df76.js';
import { w as writable } from './chunk.4ff06fb1.js';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => {},
		decrement: () => {},
		reset: () => {}
	};

}
const count = createCount();


function createLsFin() {
	const { subscribe, set, update } = writable({});

	return {
		subscribe,
		setPrivate: () => update(n=>  n= {...n, clientType:'Private Client'}),
		setProfessional: () => update(n=>  n= {...n, clientType:'Professional Client'}),
		setOption:(option) => update(n=> n = {...n, option:option}),
		reset: () => set({})
	};

}

const lsFin = createLsFin();

/* src/components/privateClient.svelte generated by Svelte v3.6.7 */

const file = "src/components/privateClient.svelte";

function create_fragment(ctx) {
	var div, t0, button, t1, dispose;

	return {
		c: function create() {
			div = element("div");
			t0 = text("Private Client\n    ");
			button = element("button");
			t1 = text("I'm a private Client.");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			t0 = claim_text(div_nodes, "Private Client\n    ");

			button = claim_element(div_nodes, "BUTTON", {}, false);
			var button_nodes = children(button);

			t1 = claim_text(button_nodes, "I'm a private Client.");
			button_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(button, file, 6, 4, 103);
			add_location(div, file, 4, 1, 74);
			dispose = listen(button, "click", lsFin.setPrivate);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, button);
			append(button, t1);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			dispose();
		}
	};
}

class PrivateClient extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

/* src/components/professionalClient.svelte generated by Svelte v3.6.7 */

const file$1 = "src/components/professionalClient.svelte";

function create_fragment$1(ctx) {
	var div, t0, button, t1, dispose;

	return {
		c: function create() {
			div = element("div");
			t0 = text("Professional Client\n    ");
			button = element("button");
			t1 = text("I'm a professional Client.");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			t0 = claim_text(div_nodes, "Professional Client\n    ");

			button = claim_element(div_nodes, "BUTTON", {}, false);
			var button_nodes = children(button);

			t1 = claim_text(button_nodes, "I'm a professional Client.");
			button_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(button, file$1, 6, 4, 108);
			add_location(div, file$1, 4, 1, 74);
			dispose = listen(button, "click", lsFin.setProfessional);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, button);
			append(button, t1);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			dispose();
		}
	};
}

class ProfessionalClient extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$1, safe_not_equal, []);
	}
}

/* src/components/privateClientOptions.svelte generated by Svelte v3.6.7 */

const file$2 = "src/components/privateClientOptions.svelte";

// (36:4) {#if isProfessionalEligible}
function create_if_block(ctx) {
	var p, t0, t1, button0, t2, button0_disabled_value, t3, button1, t4, button1_disabled_value, dispose;

	return {
		c: function create() {
			p = element("p");
			t0 = text("Eligible !");
			t1 = space();
			button0 = element("button");
			t2 = text("I request to be classified as a setProfessional Client.");
			t3 = space();
			button1 = element("button");
			t4 = text("No, thanks.");
			this.h();
		},

		l: function claim(nodes) {
			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			t0 = claim_text(p_nodes, "Eligible !");
			p_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n      ");

			button0 = claim_element(nodes, "BUTTON", { disabled: true }, false);
			var button0_nodes = children(button0);

			t2 = claim_text(button0_nodes, "I request to be classified as a setProfessional Client.");
			button0_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n      ");

			button1 = claim_element(nodes, "BUTTON", { disabled: true }, false);
			var button1_nodes = children(button1);

			t4 = claim_text(button1_nodes, "No, thanks.");
			button1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(p, file$2, 36, 4, 518);
			button0.disabled = button0_disabled_value = !ctx.isProfessionalEligible;
			add_location(button0, file$2, 37, 6, 542);
			button1.disabled = button1_disabled_value = !ctx.isProfessionalEligible;
			add_location(button1, file$2, 38, 6, 683);

			dispose = [
				listen(button0, "click", setProfessional),
				listen(button1, "click", deny)
			];
		},

		m: function mount(target, anchor) {
			insert(target, p, anchor);
			append(p, t0);
			insert(target, t1, anchor);
			insert(target, button0, anchor);
			append(button0, t2);
			insert(target, t3, anchor);
			insert(target, button1, anchor);
			append(button1, t4);
		},

		p: function update(changed, ctx) {
			if ((changed.isProfessionalEligible) && button0_disabled_value !== (button0_disabled_value = !ctx.isProfessionalEligible)) {
				button0.disabled = button0_disabled_value;
			}

			if ((changed.isProfessionalEligible) && button1_disabled_value !== (button1_disabled_value = !ctx.isProfessionalEligible)) {
				button1.disabled = button1_disabled_value;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(p);
				detach(t1);
				detach(button0);
				detach(t3);
				detach(button1);
			}

			run_all(dispose);
		}
	};
}

function create_fragment$2(ctx) {
	var div, t0, label0, input0, t1, t2, label1, input1, t3, t4, dispose;

	var if_block = (ctx.isProfessionalEligible) && create_if_block(ctx);

	return {
		c: function create() {
			div = element("div");
			t0 = text("Options\n\n");
			label0 = element("label");
			input0 = element("input");
			t1 = text("\n\tOne scoop");
			t2 = space();
			label1 = element("label");
			input1 = element("input");
			t3 = text("\n\tTwo scoops");
			t4 = space();
			if (if_block) if_block.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			t0 = claim_text(div_nodes, "Options\n\n");

			label0 = claim_element(div_nodes, "LABEL", {}, false);
			var label0_nodes = children(label0);

			input0 = claim_element(label0_nodes, "INPUT", { type: true, value: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach);
			t1 = claim_text(label0_nodes, "\n\tOne scoop");
			label0_nodes.forEach(detach);
			t2 = claim_text(div_nodes, "\n\n");

			label1 = claim_element(div_nodes, "LABEL", {}, false);
			var label1_nodes = children(label1);

			input1 = claim_element(label1_nodes, "INPUT", { type: true, value: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach);
			t3 = claim_text(label1_nodes, "\n\tTwo scoops");
			label1_nodes.forEach(detach);
			t4 = claim_text(div_nodes, "\n \n    ");
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			ctx.$$binding_groups[0].push(input0);
			attr(input0, "type", "radio");
			input0.__value = 1;
			input0.value = input0.__value;
			add_location(input0, file$2, 26, 1, 330);
			add_location(label0, file$2, 25, 0, 321);
			ctx.$$binding_groups[0].push(input1);
			attr(input1, "type", "radio");
			input1.__value = 2;
			input1.value = input1.__value;
			add_location(input1, file$2, 31, 1, 409);
			add_location(label1, file$2, 30, 0, 400);
			add_location(div, file$2, 22, 1, 303);

			dispose = [
				listen(input0, "change", ctx.input0_change_handler),
				listen(input1, "change", ctx.input1_change_handler)
			];
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, t0);
			append(div, label0);
			append(label0, input0);

			input0.checked = input0.__value === ctx.option;

			append(label0, t1);
			append(div, t2);
			append(div, label1);
			append(label1, input1);

			input1.checked = input1.__value === ctx.option;

			append(label1, t3);
			append(div, t4);
			if (if_block) if_block.m(div, null);
		},

		p: function update(changed, ctx) {
			if (changed.option) input0.checked = input0.__value === ctx.option;
			if (changed.option) input1.checked = input1.__value === ctx.option;

			if (ctx.isProfessionalEligible) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			ctx.$$binding_groups[0].splice(ctx.$$binding_groups[0].indexOf(input0), 1);
			ctx.$$binding_groups[0].splice(ctx.$$binding_groups[0].indexOf(input1), 1);
			if (if_block) if_block.d();
			run_all(dispose);
		}
	};
}

function setProfessional() {
  lsFin.setProfessional();
  lsFin.setOption("professional");
}

function deny() {
  lsFin.setOption("deny");
}

function instance($$self, $$props, $$invalidate) {
	let option = 0;

	const $$binding_groups = [[]];

	function input0_change_handler() {
		option = this.__value;
		$$invalidate('option', option);
	}

	function input1_change_handler() {
		option = this.__value;
		$$invalidate('option', option);
	}

	let isProfessionalEligible;

	$$self.$$.update = ($$dirty = { option: 1 }) => {
		if ($$dirty.option) { $$invalidate('isProfessionalEligible', isProfessionalEligible = 
        option > 0); }
	};

	return {
		option,
		isProfessionalEligible,
		input0_change_handler,
		input1_change_handler,
		$$binding_groups
	};
}

class PrivateClientOptions extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment$2, safe_not_equal, []);
	}
}

/* src/routes/classification.svelte generated by Svelte v3.6.7 */

const file$3 = "src/routes/classification.svelte";

// (23:4) {#if $lsFin.clientType === undefined}
function create_if_block_1(ctx) {
	var t, current;

	var privateclient = new PrivateClient({ $$inline: true });

	var professionalclient = new ProfessionalClient({ $$inline: true });

	return {
		c: function create() {
			privateclient.$$.fragment.c();
			t = space();
			professionalclient.$$.fragment.c();
		},

		l: function claim(nodes) {
			privateclient.$$.fragment.l(nodes);
			t = claim_text(nodes, "\n        ");
			professionalclient.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(privateclient, target, anchor);
			insert(target, t, anchor);
			mount_component(professionalclient, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			transition_in(privateclient.$$.fragment, local);

			transition_in(professionalclient.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(privateclient.$$.fragment, local);
			transition_out(professionalclient.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			destroy_component(privateclient, detaching);

			if (detaching) {
				detach(t);
			}

			destroy_component(professionalclient, detaching);
		}
	};
}

// (28:4) {#if $lsFin.clientType === "Private Client"}
function create_if_block$1(ctx) {
	var current;

	var privateclientoptions = new PrivateClientOptions({ $$inline: true });

	return {
		c: function create() {
			privateclientoptions.$$.fragment.c();
		},

		l: function claim(nodes) {
			privateclientoptions.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(privateclientoptions, target, anchor);
			current = true;
		},

		i: function intro(local) {
			if (current) return;
			transition_in(privateclientoptions.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(privateclientoptions.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			destroy_component(privateclientoptions, detaching);
		}
	};
}

function create_fragment$3(ctx) {
	var div, h3, t0, t1, p0, t2, t3, p1, t4, t5_value = ctx.$lsFin.clientType, t5, t6, p2, t7, t8_value = ctx.$lsFin.clientType, t8, t9, t10, current;

	var if_block0 = (ctx.$lsFin.clientType === undefined) && create_if_block_1();

	var if_block1 = (ctx.$lsFin.clientType === "Private Client") && create_if_block$1();

	return {
		c: function create() {
			div = element("div");
			h3 = element("h3");
			t0 = text("Classification");
			t1 = space();
			p0 = element("p");
			t2 = text(ctx.$count);
			t3 = space();
			p1 = element("p");
			t4 = text("Client type ");
			t5 = text(t5_value);
			t6 = space();
			p2 = element("p");
			t7 = text("Options ");
			t8 = text(t8_value);
			t9 = space();
			if (if_block0) if_block0.c();
			t10 = space();
			if (if_block1) if_block1.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			h3 = claim_element(div_nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t0 = claim_text(h3_nodes, "Classification");
			h3_nodes.forEach(detach);
			t1 = claim_text(div_nodes, "\n    ");

			p0 = claim_element(div_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, ctx.$count);
			p0_nodes.forEach(detach);
			t3 = claim_text(div_nodes, "\n    ");

			p1 = claim_element(div_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t4 = claim_text(p1_nodes, "Client type ");
			t5 = claim_text(p1_nodes, t5_value);
			p1_nodes.forEach(detach);
			t6 = claim_text(div_nodes, "\n        ");

			p2 = claim_element(div_nodes, "P", {}, false);
			var p2_nodes = children(p2);

			t7 = claim_text(p2_nodes, "Options ");
			t8 = claim_text(p2_nodes, t8_value);
			p2_nodes.forEach(detach);
			t9 = claim_text(div_nodes, "\n\n    ");
			if (if_block0) if_block0.l(div_nodes);
			t10 = claim_text(div_nodes, "\n\n    ");
			if (if_block1) if_block1.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h3, file$3, 17, 4, 403);
			add_location(p0, file$3, 18, 4, 431);
			add_location(p1, file$3, 19, 4, 451);
			add_location(p2, file$3, 20, 8, 498);
			attr(div, "class", "classification svelte-10oju08");
			add_location(div, file$3, 16, 0, 370);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, h3);
			append(h3, t0);
			append(div, t1);
			append(div, p0);
			append(p0, t2);
			append(div, t3);
			append(div, p1);
			append(p1, t4);
			append(p1, t5);
			append(div, t6);
			append(div, p2);
			append(p2, t7);
			append(p2, t8);
			append(div, t9);
			if (if_block0) if_block0.m(div, null);
			append(div, t10);
			if (if_block1) if_block1.m(div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed.$count) {
				set_data(t2, ctx.$count);
			}

			if ((!current || changed.$lsFin) && t5_value !== (t5_value = ctx.$lsFin.clientType)) {
				set_data(t5, t5_value);
			}

			if ((!current || changed.$lsFin) && t8_value !== (t8_value = ctx.$lsFin.clientType)) {
				set_data(t8, t8_value);
			}

			if (ctx.$lsFin.clientType === undefined) {
				if (!if_block0) {
					if_block0 = create_if_block_1();
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div, t10);
				} else {
									transition_in(if_block0, 1);
				}
			} else if (if_block0) {
				group_outros();
				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});
				check_outros();
			}

			if (ctx.$lsFin.clientType === "Private Client") {
				if (!if_block1) {
					if_block1 = create_if_block$1();
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div, null);
				} else {
									transition_in(if_block1, 1);
				}
			} else if (if_block1) {
				group_outros();
				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});
				check_outros();
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},

		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let $count, $lsFin;

	validate_store(count, 'count');
	subscribe($$self, count, $$value => { $count = $$value; $$invalidate('$count', $count); });
	validate_store(lsFin, 'lsFin');
	subscribe($$self, lsFin, $$value => { $lsFin = $$value; $$invalidate('$lsFin', $lsFin); });

	return { $count, $lsFin };
}

class Classification extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$3, safe_not_equal, []);
	}
}

export default Classification;
