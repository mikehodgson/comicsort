<template>
  <p>
    <label for="selectedFiles">Please select the CSV file containing your comic book collection</label>
  </p>
  <input type="file" class="form-input" ref="selectedFiles" id="selectedFiles" @change="fileChanged" />
</template>
<script lang="ts" setup>
  import type HTMLInputEvent from "@/model/HtmlInputEvent";

  const emits = defineEmits(["file-selected"]);

  const fileChanged = (evt: Event) => {
    const htmlInputEvent = evt as HTMLInputEvent;

    if (typeof htmlInputEvent?.target?.files?.length != "undefined") {
      if (htmlInputEvent?.target?.files?.length > 0) {
        emits("file-selected", htmlInputEvent.target.files[0]);
      }
    }
  };
</script>
