async function main() {
// --- start of example ---
const Loader = require('componentsjs').Loader;

const loader = new Loader();
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config-single.jsonld');
// --- end of example ---
};
main().catch(console.error);
