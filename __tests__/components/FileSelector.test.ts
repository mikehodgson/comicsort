import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

import FileSelector from "@/components/FileSelector.vue";

import { mockCSVFile } from "../mocks";

describe("App component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should exist", () => {
    expect(FileSelector).toBeDefined();
  });

  it("should be mountable", () => {
    const wrapper = shallowMount(FileSelector);
    expect(wrapper.exists()).toBe(true);
  });

  it("should emit a file-selected event when the file is changed", async () => {
    const wrapper = shallowMount(FileSelector);
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, 'files', {
        value: [mockCSVFile],
        writable: false
    });
    await input.trigger('change');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted('file-selected')).toBeTruthy();
  });
});
