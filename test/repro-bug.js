import { parser } from "../src/GeneratedLang.js";

describe("Lezer bug repro", () => {
  it("should not resolve a negative base", () => {
    parser.configure({}).parse("0:(,0");
  });
});
