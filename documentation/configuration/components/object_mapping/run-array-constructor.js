async function main() {
// --- start of example ---
const Loader = require('componentsjs').Loader;

const loader = new Loader();
await loader.registerModuleResourcesUrl('my-module.jsonld');
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config-array-constructor.jsonld');
// --- end of example ---
};
main().catch(console.error);
