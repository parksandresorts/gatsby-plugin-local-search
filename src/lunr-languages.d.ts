/**
 * (c) 2022, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
// Taken from here: https://github.com/microbit-foundation/python-editor-v3/blob/506446c62b9398b4f3a7ef8f295b22d929f7ef87/src/documentation/search/lunr-languages.d.ts
declare module "lunr-languages/lunr.stemmer.support";
declare module "lunr-languages/tinyseg";
declare module "lunr-languages/lunr.multi";

declare module "lunr-languages/lunr.*" {
  import lunr from "lunr";
  function register(l: typeof lunr): void;
  export = register;
}

declare namespace lunr {
  export const sv: Builder.Plugin;
  export const no: Builder.Plugin;
}