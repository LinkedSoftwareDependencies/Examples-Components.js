async function main() {
  // --- start of example ---
  const { ComponentsManager } = require("componentsjs");

  const manager = await ComponentsManager.build({
    mainModulePath: __dirname, // Path to your npm package's root
  });
  await manager.configRegistry.register("config.jsonld");
  const myInstance = await manager.instantiate("http://example.org/myInstance");
  // --- end of example ---
};
main();
