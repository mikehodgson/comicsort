import { it, describe, expect, beforeEach, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

import HomeView from "@/views/HomeView.vue";
import FileSelector from "@/components/FileSelector.vue";
import BookTable from "@/components/BookTable.vue";
import { useBookCollectionStore } from "@/stores/useBookCollectionStore";

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
          FileSelector: false,
        },
      },
    });
    expect(wrapper.findAllComponents(FileSelector).length).toBe(1);
  });

  it("should not have a BookTable component by default", async () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        stubs: {
          BookTable: false,
        },
      },
    });
    expect(wrapper.findAllComponents(BookTable).length).toBe(0);
  });

  describe("Clear Collection button", () => {
    it("should call the clearCollection action on the store", async () => {
      const wrapper = shallowMount(HomeView);
      const bookCollectionStore = useBookCollectionStore();
      const spy = vi.spyOn(bookCollectionStore, "clearCollection");
      await wrapper.find("#clear-collection-button").trigger("click");
      expect(spy).toHaveBeenCalled();
    });
  });
});
