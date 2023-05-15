<script setup lang="ts">
    import { useMessageStore } from '../stores/messages';

    const messageStore = useMessageStore()
</script>

<template>
  <ul class="text-white p-0 m-0">
    <li v-for="message in messageStore.messages" :key="message.id"
      class="p-0 m-0 mb-2 last:mb-0 px-2 py-4 rounded"
      :class='{ "bg-gray-800" : message.user }'
    > {{ message.text }} </li>
  </ul>
</template>

<style scoped>
</style>
