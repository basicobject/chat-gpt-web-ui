<script setup lang="ts">
    import { useMessageStore } from '../stores/messages';
    import { computed } from 'vue';

    const messageStore = useMessageStore()
    const messages = computed(() => messageStore.currentThread?.messages ?? [])
</script>

<template>
  <ul class="p-0 m-0 text-white">
    <li v-for="message in messages" :key="message.id"
      class="p-0 px-2 py-4 m-0 mb-2 rounded last:mb-0"
      :class='{ "bg-gray-800" : message.user }'
    > {{ message.text }} </li>
  </ul>
</template>

<style scoped>
</style>
