<script setup lang="ts">

defineProps<{ headerMsg: string }>()

</script>

<template>
    <div class="text-white">
        <ul class="list-none last:border-b last:border-gray-600">
            <li class="border p-2 rounded border-b-0 border-gray-600">
                <a href="javascript:void();">+ New</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>
