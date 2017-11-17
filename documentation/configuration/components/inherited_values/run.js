async function main() {
// --- start of example ---
const Loader = require('lsd-components').Loader;

const loader = new Loader();
await loader.registerModuleResourcesUrl('my-module.jsonld');
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myComponent1', 'config-my-component.jsonld');
// --- end of example ---
};
main();
