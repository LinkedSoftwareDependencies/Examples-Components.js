async function main() {
// --- start of example ---
const Loader = require('lsd-components').Loader;

const loader = new Loader();
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config-complex.jsonld');
// --- end of example ---
};
main().catch(console.error);
