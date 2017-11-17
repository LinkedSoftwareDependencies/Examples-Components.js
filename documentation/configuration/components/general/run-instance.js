async function main() {
const Loader = require('componentsjs').Loader;

const loader = new Loader();
await loader.registerModuleResourcesUrl('my-module.jsonld');
const myComponent = await loader.instantiateFromUrl(
    'http://example.org/myInstance', 'config-instance.jsonld');
console.log(myComponent);
};
main();
