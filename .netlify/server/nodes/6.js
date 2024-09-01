

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pages/Stock/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DSAPKXnl.js","_app/immutable/chunks/scheduler.Dp99Kf9S.js","_app/immutable/chunks/index.DobJMaQm.js"];
export const stylesheets = [];
export const fonts = [];
