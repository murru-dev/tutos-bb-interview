<template>
  <UContainer>
    <ClientOnly>
      <div class="max-w-4xl m-auto mt-4">
        <Progress />
      </div>
    </ClientOnly>
    <div class="max-w-4xl m-auto mt-10 flex items-center justify-between">
      <h1 class="text-3xl font-bold">CUESTIONARIO DE MARCA</h1>
      <UButton
        :icon="icon"
        size="sm"
        color="gray"
        square
        variant="ghost"
        @click="setTheme"
      />
    </div>
    <div class="max-w-4xl m-auto my-20">
      <NuxtPage />
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const icon = ref<string>("");
const setTheme = () => {
  if (icon.value === "heroicons:sun-16-solid") {
    icon.value = "heroicons:moon-16-solid";
    colorMode.value = "dark";
  } else {
    icon.value = "heroicons:sun-16-solid";
    colorMode.value = "light";
  }
};

setTheme();
</script>
