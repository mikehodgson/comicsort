import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

import MainHeader from "@/components/MainHeader.vue";
import AppConstants from "@/data/constants";

describe("App component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should exist", () => {
    expect(MainHeader).toBeDefined();
  });

  it("should be mountable", async () => {
    const wrapper = shallowMount(MainHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the correct title", async () => {
    const wrapper = shallowMount(MainHeader);
    expect(wrapper.get("#app-title").text()).toContain(AppConstants.appName);
  });
});
