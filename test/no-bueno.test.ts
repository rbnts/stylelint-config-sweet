import stylelint from "stylelint";
import { describe, expect, it } from "vitest";

const { errored, results } = await stylelint.lint({
  files: "./test/no-bueno.scss"
});

describe("no bueno", () => {
  it("found errors", () => {
    expect(errored).toBe(true);
  });

  it("found selector pattern mismatch (vanilla stylelint)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "selector-class-pattern"
    )).toBeDefined();
  });

  it("found wrong property case (@stylistic/stylelint-config)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "@stylistic/property-case"
    )).toBeDefined();
  });

  it("found obsolete property (stylelint-config-standard-scss)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "property-no-deprecated"
    )).toBeDefined();
  });

  it("found unordered ruleset (stylelint-config-recess-order)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "order/properties-order"
    )).toBeDefined();
  });

  it("found unnecessary if not null (stylelint-config-standard-scss)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "scss/at-if-no-null"
    )).toBeDefined();
  });

  it("found unknown property (extra rule of config)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "scss/property-no-unknown"
    )).toBeDefined();
  });

  it("found unknown property value (extra rule of config)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "scss/declaration-property-value-no-unknown"
    )).toBeDefined();
  });

  it("found css features that aren't baseline yet (stylelint-plugin-use-baseline)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "plugin/use-baseline"
    )).toBeDefined();
  });

  it("found badly performing transition properties (stylelint-high-performance-animation)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "plugin/no-low-performance-animation-properties"
    )).toBeDefined();
  });

  it("found multiple whitespaces (@stylistic/stylelint-config)", () => {
    expect(results.at(0)?.warnings.find(
      warning => warning.rule === "@stylistic/no-multiple-whitespaces"
    )).toBeDefined();
  });
});
