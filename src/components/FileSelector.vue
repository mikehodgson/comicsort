<template>
  <p>Please select the CSV file containing your comic book collection</p>

  <input
    type="file"
    class="border-solid border-2 border-gray-300 px-2 py-2 my-2 bg-opacity-50"
    ref="selectedFiles"
    @change="fileChanged"
  />
</template>
<script lang="ts" setup>
  interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
  }

  defineProps({
    files: Array,
  });

  const emits = defineEmits(["fileSelected", "fileChanged"]);

  const fileChanged = (evt: Event) => {
    const htmlInputEvent = evt as HTMLInputEvent;

    if (typeof htmlInputEvent?.target?.files?.length != "undefined") {
      if (htmlInputEvent?.target?.files?.length > 0) {
        emits("fileSelected", htmlInputEvent.target.files[0]);
      }
    }
  };
</script>
