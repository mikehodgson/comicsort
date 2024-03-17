import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

import App from "@/App.vue";
import AppConstants from "@/data/constants";

describe("App component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should exist", () => {
    expect(App).toBeDefined();
  });

  it("should be mountable", async () => {
    const wrapper = shallowMount(App);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the correct title", async () => {
    expect(document.title).toContain(AppConstants.APPNAME);
  });
});
