import { writable } from "svelte/store";

const selectedTopic = writable<string | undefined>(undefined);

export { selectedTopic };
