<script setup lang="ts">

defineProps<{ headerMsg: string }>()

</script>

<template>
    <div class="text-white p-2">
        <ul class="list-none">
            <li class="border mb-2 p-2 rounded border-gray-600 hover:bg-gray-900">
                <a href="javascript:void();">+ New</a>
            </li>
            <li class="p-2 rounded border border-gray-600 hover:bg-gray-900">
                <a href="javascript:void();">+ New</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
