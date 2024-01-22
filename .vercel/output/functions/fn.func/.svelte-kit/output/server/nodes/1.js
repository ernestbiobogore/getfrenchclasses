

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6jo4BvL3.js","_app/immutable/chunks/scheduler.QXWZqJaJ.js","_app/immutable/chunks/index.LdncDNkQ.js","_app/immutable/chunks/entry.kneDehs7.js"];
export const stylesheets = [];
export const fonts = [];
