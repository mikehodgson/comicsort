import { it, describe, expect } from "vitest";
import router from "@/router";

describe("Router", () => {
  it("should have a home route", () => {
    expect(router.hasRoute("home")).toEqual(true);
  });
});
