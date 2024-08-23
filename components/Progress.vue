<template>
  <UProgress color="emerald" indicator :value="getProgress()" />
</template>
<script lang="ts" setup>
const { getProgress } = useProgress();
</script>
