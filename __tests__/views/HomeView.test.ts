import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

import HomeView from "@/views/HomeView.vue";
import FileSelector from "@/components/FileSelector.vue";
import BookTable from "@/components/BookTable.vue";

describe("App component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should exist", () => {
    expect(HomeView).toBeDefined();
  });

  it("should be mountable", async () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a FileSelector component", async () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        stubs: {
          FileSelector: false
        }
      }
    });
    expect(wrapper.findAllComponents(FileSelector).length).toBe(1);
  });

  it("should not have a BookTable component by default", async () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        stubs: {
          BookTable: false
        }
      }
    });
    expect(wrapper.findAllComponents(BookTable).length).toBe(0);
  });
});
