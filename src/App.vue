<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import CommandPanel from './components/CommandPanel.vue'
import OutputPanel from './components/OutputPanel.vue'

</script>

<template>
  <div class="flex h-screen w-full bg-gray-900">
    <section class="sidebar flex-none bg-gray-800 h-full w-[260px]">
      <Sidebar header-msg="AI-Terminal" />
    </section>
    <section class="main flex-1 max-w-[1024px] h-full p-2 m-auto">
      <div class="flex flex-col h-full w-full justify-between">
        <section class="output-panel w-3/4 mx-auto mt-6 rounded overflow-y-auto">
          <OutputPanel />
        </section>
        <section class="command-panel w-3/4 mx-auto my-6">
          <CommandPanel />
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
