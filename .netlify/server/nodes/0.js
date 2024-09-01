

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.XES2EqbU.js","_app/immutable/chunks/scheduler.Dp99Kf9S.js","_app/immutable/chunks/index.DobJMaQm.js"];
export const stylesheets = ["_app/immutable/assets/0.Cz5RuMGt.css"];
export const fonts = [];
