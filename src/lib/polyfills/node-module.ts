import Module from "node:module";
import processModule from "node:process";
import bufferModule from "node:buffer";
import utilModule from "node:util";
import eventsModule from "node:events";
import streamModule from "node:stream";
import pathModule from "node:path";
import stringDecoderModule from "node:string_decoder";
import assertModule from "node:assert";

const builtins: Record<string, any> = {
  "node:process": processModule,
  "process": processModule,
  "node:buffer": bufferModule,
  "buffer": bufferModule,
  "node:util": utilModule,
  "util": utilModule,
  "node:events": eventsModule,
  "events": eventsModule,
  "node:stream": streamModule,
  "stream": streamModule,
  "node:path": pathModule,
  "path": pathModule,
  "node:string_decoder": stringDecoderModule,
  "string_decoder": stringDecoderModule,
  "node:assert": assertModule,
  "assert": assertModule,
};

const { createRequire: originalCreateRequire } = Module;

export function createRequire(filename: string | URL) {
  const requireFn = originalCreateRequire(filename || "file:///index.js");
  return function customRequire(id: string) {
    if (id in builtins) {
      return builtins[id];
    }
    return requireFn(id);
  };
}

export const { SourceMap, builtinModules, findSourceMap, syncBuiltinESMExports } = Module;

export default Module;
