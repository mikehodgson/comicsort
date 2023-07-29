<template>
  <p>Please select the CSV file containing your comic book collection</p>

  <input
    type="file"
    class="border-solid border-2 border-gray-300 px-2 py-2 my-2 bg-opacity-50"
    ref="selectedFiles"
    @change="fileChanged"
  />
</template>
<script lang="ts">
export default {
  data() {
    return {
      files: [],
    };
  },
  emits: ["fileSelected"],
  methods: {
    fileChanged: function (evt: Event) {
      if (typeof evt.target != "undefined") {
        if (evt.target.files.length > 0) {
          this.$emit("fileSelected", evt.target.files[0]);
        }
      }
    },
  },
};
</script>
