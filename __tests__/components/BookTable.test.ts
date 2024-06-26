import { it, describe, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

import BookTable from "@/components/BookTable.vue";

import { mockBookArray } from "../mocks";
import type Book from "@/model/book";

describe("App component", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should exist", () => {
    expect(BookTable).toBeDefined();
  });

  it("should be mountable", () => {
    const wrapper = shallowMount(BookTable);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have a books prop with a default", () => {
    const wrapper = shallowMount(BookTable);
    expect(wrapper.props().books).toBeDefined();
    expect(wrapper.props().books).toEqual([] as Book[]);
  });

  it("should have a title prop with a default", () => {
    const wrapper = shallowMount(BookTable);
    expect(wrapper.props().title).toBeDefined();
    expect(wrapper.props().title).toEqual("");
  });

  it("should not display the book table by default", () => {
    const wrapper = shallowMount(BookTable);
    expect(wrapper.findAll("#book-table").length).toBe(0);
  });

  it("should display the no-data-loaded div by default", () => {
    const wrapper = shallowMount(BookTable);
    expect(wrapper.findAll("#no-data-loaded").length).toBe(1);
  });

  it("should display the book table when an array of books is provided", () => {
    const wrapper = shallowMount(BookTable, {
      props: {
        books: mockBookArray,
      },
    });
    expect(wrapper.findAll("#book-table").length).toBe(1);
  });
  it("should display a row for every book", () => {
    const wrapper = shallowMount(BookTable, {
      props: {
        books: mockBookArray,
      },
    });
    expect(wrapper.findAll("#book-table > tbody > tr").length).toBe(mockBookArray.length);
  });
});
