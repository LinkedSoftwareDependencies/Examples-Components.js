async function main() {
// --- start of example ---
const Loader = require('lsd-components').Loader;

const loader = new Loader();
await loader.registerModuleResourcesUrl('components/components.jsonld');
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config-my-component.jsonld');
// --- end of example ---
};
main();
