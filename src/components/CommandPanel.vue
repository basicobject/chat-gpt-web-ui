<script setup lang="ts">

  import { ref } from 'vue';
  import { useMessageStore } from '../stores/messages';

  const isActive = ref(true);
  const inputMessage = ref<string>("")
  const messageStore = useMessageStore();

  function resize(ev: Event) {
      if(ev.target instanceof HTMLElement) {
        if(ev.target.scrollHeight < 200) {
          ev.target.style.height = "auto";
          ev.target.style.height = ev.target.scrollHeight + "px";
        }
      }
  }

  function keydown(ev: KeyboardEvent) {
    if (ev.key === "Enter" && ev.metaKey) {
      formSubmit();
    }
  }

  function formSubmit() {
    isActive.value = false;
    messageStore.addMessage(inputMessage.value)
    setTimeout(() => isActive.value = true, 3000)
    isActive.value = false;
    inputMessage.value = ""
    return;
  }

</script>

<template>
  <form @submit.prevent="formSubmit()" class="w-full flex justify-between border border-gray-600 rounded-md shadow-md shadow-black">
    <textarea v-model="inputMessage"
      rows="1"
      class="flex-1 ml-6 my-4 p-0 bg-transparent outline-none resize-none text-gray-300 max-h-[200px] h-auto scroll-m-0"
      placeholder="Send a message"
      @input="resize($event)"
      @keydown="keydown($event)"></textarea>
    <button :disabled="!isActive" class="self-end h-14 w-12 text-gray-400">
      <span v-if="isActive">Go</span>
      <span v-else
        class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </span>
    </button>
  </form>
</template>

<style scoped>
</style>
