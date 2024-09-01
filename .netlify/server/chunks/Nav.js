import { c as create_ssr_component, e as escape, n as null_to_empty, a as subscribe, b as add_attribute, f as each, v as validate_component } from "./ssr.js";
import { g as goto } from "./client.js";
import { t, l as locale, a as locales } from "./i18n.js";
const css = {
  code: ".gradient.svelte-1gkwa0m{--tw-gradient-from:#d53369 var(--tw-gradient-from-position);--tw-gradient-to:rgba(213,51,105,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#daae51 var(--tw-gradient-to-position)}.gradient.svelte-1gkwa0m,.greeny.svelte-1gkwa0m{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.greeny.svelte-1gkwa0m{--tw-gradient-from:#84cc16 var(--tw-gradient-from-position);--tw-gradient-to:rgba(132,204,22,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#86efac var(--tw-gradient-to-position)}.bluey.svelte-1gkwa0m{background-image:linear-gradient(to right,var(--tw-gradient-stops));--tw-gradient-from:#4338ca var(--tw-gradient-from-position);--tw-gradient-to:rgba(67,56,202,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#3b82f6 var(--tw-gradient-to-position)}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let primary = true;\\nexport let secondary = false;\\nexport let green = false;\\nexport let blue = false;\\nexport let center = true;\\nexport let onClick = () => {\\n};\\n;\\nif (secondary) primary = false;\\n<\/script>\\n\\n<div class:flex={center} class=\\"items-center justify-center\\">\\n  <button\\n    on:click={onClick}\\n    class={\`\\n      \${primary ? 'text-gray-800 bg-white' : ''}\\n      \${secondary ? 'text-gray-50 gradient' : ''}\\n      \${green ? 'text-gray-50 greeny' : ''}\\n      \${blue ? 'text-white bluey' : ''}\\n      mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out\\n    \`}\\n  >\\n    <slot>Click me!</slot>\\n  </button>\\n</div>\\n\\n<style>.gradient{--tw-gradient-from:#d53369 var(--tw-gradient-from-position);--tw-gradient-to:rgba(213,51,105,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#daae51 var(--tw-gradient-to-position)}.gradient,.greeny{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.greeny{--tw-gradient-from:#84cc16 var(--tw-gradient-from-position);--tw-gradient-to:rgba(132,204,22,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#86efac var(--tw-gradient-to-position)}.bluey{background-image:linear-gradient(to right,var(--tw-gradient-stops));--tw-gradient-from:#4338ca var(--tw-gradient-from-position);--tw-gradient-to:rgba(67,56,202,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to);--tw-gradient-to:#3b82f6 var(--tw-gradient-to-position)}</style>\\n"],"names":[],"mappings":"AA0BO,wBAAS,CAAC,mBAAmB,wCAAwC,CAAC,iBAAiB,iDAAiD,CAAC,oBAAoB,6CAA6C,CAAC,iBAAiB,sCAAsC,CAAC,wBAAS,CAAC,sBAAO,CAAC,iBAAiB,gBAAgB,EAAE,CAAC,KAAK,CAAC,IAAI,mBAAmB,CAAC,CAAC,CAAC,sBAAO,CAAC,mBAAmB,wCAAwC,CAAC,iBAAiB,iDAAiD,CAAC,oBAAoB,6CAA6C,CAAC,iBAAiB,sCAAsC,CAAC,qBAAM,CAAC,iBAAiB,gBAAgB,EAAE,CAAC,KAAK,CAAC,IAAI,mBAAmB,CAAC,CAAC,CAAC,mBAAmB,wCAAwC,CAAC,iBAAiB,gDAAgD,CAAC,oBAAoB,6CAA6C,CAAC,iBAAiB,sCAAsC"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = true } = $$props;
  let { secondary = false } = $$props;
  let { green = false } = $$props;
  let { blue = false } = $$props;
  let { center = true } = $$props;
  let { onClick = () => {
  } } = $$props;
  if (secondary) primary = false;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0) $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0) $$bindings.secondary(secondary);
  if ($$props.green === void 0 && $$bindings.green && green !== void 0) $$bindings.green(green);
  if ($$props.blue === void 0 && $$bindings.blue && blue !== void 0) $$bindings.blue(blue);
  if ($$props.center === void 0 && $$bindings.center && center !== void 0) $$bindings.center(center);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  $$result.css.add(css);
  return `<div class="${["items-center justify-center", center ? "flex" : ""].join(" ").trim()}"><button class="${escape(
    null_to_empty(`
      ${primary ? "text-gray-800 bg-white" : ""}
      ${secondary ? "text-gray-50 gradient" : ""}
      ${green ? "text-gray-50 greeny" : ""}
      ${blue ? "text-white bluey" : ""}
      mx-auto lg:mx-0 hover:underline font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out
    `),
    true
  ) + " svelte-1gkwa0m"}">${slots.default ? slots.default({}) : `Click me!`}</button> </div>`;
});
const farmer = "/_app/immutable/assets/farmer.Brvt1bwG.png";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  let y;
  let navFloat = false;
  let hambugerEl;
  const navigateTo = (url) => {
    goto();
  };
  navFloat = y > 10;
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `  <nav id="header"${add_attribute(
    "class",
    `
  fixed w-full z-30 top-0 text-white
  ${navFloat ? "bg-white" : ""}
  `,
    0
  )}><div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"><div class="pl-4 flex items-center"><button class="${[
    "no-underline hover:no-underline font-bold text-2xl lg:text-4xl cursor-pointer",
    (navFloat ? "text-gray-800" : "") + " " + (!navFloat ? "text-white" : "")
  ].join(" ").trim()}"><img${add_attribute("src", farmer, 0)} alt="Farmer Icon" class="h-8 inline"> ${escape($t("page.title"))}</button></div> <div class="block lg:hidden pr-4"${add_attribute("this", hambugerEl, 0)}><button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"><svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>${escape($t("menu"))}</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div> <div class="${[
    "hidden w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 text-center",
    "hidden"
  ].join(" ").trim()}" id="nav-content"><ul class="list-reset lg:flex justify-end flex-1 items-center"><li class="mr-3"><button class="inline-block py-2 px-4 text-black font-bold no-underline">${escape($t("login"))}</button></li> <li class="mr-3"><button class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">${escape($t("services"))}</button></li> <li class="mr-3"><button class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">${escape($t("faq"))}</button></li> <li class="mr-3"><p><select>${each(locales, (l) => {
    return `<option${add_attribute("value", l, 0)}>${escape(l)}</option>`;
  })}</select></p></li></ul> <button class="mx-[2px]">${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($t("transport"))}`;
    }
  })}</button> <div class="mx-[2px]">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => navigateTo(),
      secondary: navFloat,
      center: false
    },
    {},
    {
      default: () => {
        return `${escape($t("buy"))}`;
      }
    }
  )}</div> <div class="mx-[2px]">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => navigateTo(),
      secondary: navFloat,
      center: false
    },
    {},
    {
      default: () => {
        return `${escape($t("sell"))}`;
      }
    }
  )}</div></div></div> <hr class="border-b border-gray-100 opacity-25 my-0 py-0"></nav>`;
});
export {
  Button as B,
  Nav as N
};
