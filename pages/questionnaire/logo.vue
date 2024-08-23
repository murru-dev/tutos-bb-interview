<template>
  <UForm
    :validate="validate"
    :state="logoData"
    class="space-y-4"
    @submit="onSubmit"
  >
    <h1 class="text-xl font-bold">Sobre el logo/identidad de la marca</h1>

    <UFormGroup
      label="¿Cuál es tu logo actual? (si tienes uno, por favor pégalo a continuación o adjúntalo en un correo electrónico)"
      name="actualLogo"
    >
      <UTextarea
        v-model="logoData.actualLogo"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="¿Qué te gusta y qué no te gusta de tu logo actual? (si tienes uno)"
      name="likesAndDislikes"
    >
      <UTextarea
        v-model="logoData.likesAndDislikes"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="¿Qué quieres que logre el nuevo logo?*"
      name="achievements"
    >
      <UTextarea
        v-model="logoData.achievements"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="¿Estás buscando un ícono o una tipografía estilizada para tu logo?*"
    >
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <br />
    <div class="flex items-center gap-4">
      <UButton type="button" class="flex-1" @click="goBack" block>
        Volver
      </UButton>
      <UButton type="submit" class="flex-1" block> Siguiente </UButton>
    </div>
  </UForm>
</template>
<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "questionnaire",
});
const { setProgress } = useProgress();
setProgress(60);

type Logo = {
  actualLogo: string;
  likesAndDislikes: string;
  achievements: string;
};

const logoData = reactive<Logo>({
  actualLogo: "",
  likesAndDislikes: "",
  achievements: "",
});

const validate = (client: Client): FormError[] => {
  const errors = [];
  if (!logoData.likesAndDislikes)
    errors.push({ path: "likesAndDislikes", message: "Requerido" });
  if (!logoData.achievements)
    errors.push({ path: "achievements", message: "Requerido" });
  return errors;
};

const router = useRouter();
const goBack = () => {
  router.push("/questionnaire/company");
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  router.push("/questionnaire/design-preferences");
}
</script>
