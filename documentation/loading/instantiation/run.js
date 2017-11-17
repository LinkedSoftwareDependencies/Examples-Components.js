async function main() {
// --- start of example ---
const Loader = require('lsd-components').Loader;

const loader = new Loader();
await loader.registerAvailableModuleResources();
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config.jsonld');
// --- end of example ---
};
main();
