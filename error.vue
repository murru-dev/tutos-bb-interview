<template>
  <UContainer>
    <div
      class="max-w-4xl m-auto mt-10 flex flex-col items-center justify-between"
    >
      <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl">Oooops.</p>
      <p class="mt-7">{{ error.message }}</p>
    </div>
  </UContainer>
</template>
<script lang="ts" setup>
defineProps(["error"]);
</script>
