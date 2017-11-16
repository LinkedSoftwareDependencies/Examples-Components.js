async function main() {
const Loader = require('lsd-components').Loader;

const loader = new Loader();
await loader.registerModuleResourcesUrl('my-module.jsonld');
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config-extension.jsonld');
};
main();
