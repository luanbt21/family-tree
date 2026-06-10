import Module from "node:module";

const {
  createRequire: originalCreateRequire,
} = Module;

export function createRequire(filename: string | URL) {
  // If path is undefined or null (e.g. from import.meta.url in workerd), fallback to a safe file URL.
  return originalCreateRequire(filename || "file:///index.js");
}

export const {
  SourceMap,
  builtinModules,
  findSourceMap,
  syncBuiltinESMExports,
} = Module;

export default Module;
