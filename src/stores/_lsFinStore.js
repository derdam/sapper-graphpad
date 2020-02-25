
import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => {},
		decrement: () => {},
		reset: () => {}
	};

}
export const count = createCount();


function createLsFin() {
	const { subscribe, set, update } = writable({});

	return {
		subscribe,
		setPrivate: () => update(n=>  n= {...n, clientType:'Private Client'}),
		setProfessional: () => update(n=>  n= {...n, clientType:'Professional Client'}),
		reset: () => set({})
	};

}

export const lsFin = createLsFin();