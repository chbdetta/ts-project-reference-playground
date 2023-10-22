// @ts-expect-error can't resolve the d.ts file
import { magicString } from "@my-package/a/src/lib";
// uncomment this relative import and the above statement won't be an error anymore
// import { magicString as relativeMagicString } from "../../A/src/lib";
import { magicNumber } from "@my-package/a/src/util";

const a: number = magicNumber;
const b: string = magicString;
// const c: string = relativeMagicString;

console.log({ a });
console.log({ b });
// console.log({ c });
