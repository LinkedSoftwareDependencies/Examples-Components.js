async function main() {
// --- start of example ---
const Loader = require('lsd-components').Loader;

const loader = new Loader();
await loader.registerModuleResourcesUrl('my-module.ttl');
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config-my-component.ttl');
// --- end of example ---
};
main();
