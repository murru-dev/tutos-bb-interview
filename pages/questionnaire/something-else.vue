<template>
  <UForm
    :validate="validate"
    :state="somethingElse"
    class="space-y-4"
    @submit="onSubmit"
  >
    <h1 class="text-xl font-bold">¿Algo más?</h1>

    <UFormGroup
      label="¿Hay algo más que sientas que no hemos cubierto y que sería beneficioso para el proceso de diseño? ¡Si es así, añádelo aquí!"
      name="somethingElse"
    >
      <UTextarea
        v-model="somethingElse.text"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <br />
    <div class="flex items-center gap-4">
      <UButton type="button" class="flex-1" @click="goBack" block>
        Volver
      </UButton>
      <UButton type="submit" class="flex-1" block> Terminar </UButton>
    </div>
  </UForm>
</template>
<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "questionnaire",
});
const { setProgress } = useProgress();
setProgress(100);

type SomethingElse = {
  text: string;
};

const somethingElse = reactive<SomethingElse>({
  text: "",
});

const validate = (somethingElse: SomethingElse): FormError[] => {
  const errors = [];
  if (!somethingElse.text)
    errors.push({ path: "likesAndDislikes", message: "Requerido" });
  return errors;
};

const router = useRouter();
const goBack = () => {
  router.push("/questionnaire/design-preferences");
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  router.push("/questionnaire/finish");
}
</script>
