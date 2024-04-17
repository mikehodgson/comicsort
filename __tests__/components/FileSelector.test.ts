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
    Object.defineProperty(input.element, "files", {
      value: [mockCSVFile],
      writable: false,
    });
    await input.trigger("change");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("file-selected")).toBeTruthy();
  });

  it("should not emit a file-selected event when the file is changed and the list is empty", async () => {
    const wrapper = shallowMount(FileSelector);
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, "files", {
      value: [],
      writable: false,
    });
    await input.trigger("change");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("file-selected")).toBeFalsy();
  });

  it("should not emit a file-selected event if the files array does not exist", async () => {
    const wrapper = shallowMount(FileSelector);
    const input = wrapper.find('input[type="file"]');
    Object.defineProperty(input.element, "files", {
      value: undefined,
      writable: false,
    });
    await input.trigger("change");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("file-selected")).toBeFalsy();
  });
});
