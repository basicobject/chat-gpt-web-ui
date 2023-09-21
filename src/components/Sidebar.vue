<script setup lang="ts">
import { useMessageStore } from '../stores/messages';
import { computed } from 'vue';

const messageStore = useMessageStore()
const threads = computed(() => messageStore.threads)

defineProps<{ headerMsg: string }>()

const addNewThread = () => {
    messageStore.addEmptyThread();
}

const setCurrentThread = (id: string) => messageStore.setCurrentThread(id);

</script>

<template>
    <div class="p-2 text-white">
        <a @click="addNewThread()" class="inline-block w-full p-2 mb-2 text-center border border-gray-600 rounded hover:bg-gray-900">+ New thread</a>
        <ul class="list-none">
            <li v-for="thread in threads" :key="thread.id"
                class="p-2 mb-2 border border-gray-600 rounded hover:bg-gray-900"
                :class="{'border-white': (thread.id === messageStore.currentThreadId)}"
            >
                <a @click="setCurrentThread(thread.id)">T-{{ thread.id }} ({{ thread.messages.length }})</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
