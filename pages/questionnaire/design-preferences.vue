<template>
  <UForm
    :validate="validate"
    :state="designPreferences"
    class="space-y-4"
    @submit="onSubmit"
  >
    <h1 class="text-xl font-bold">Preferencias de diseño</h1>

    <UFormGroup label="¿Cuáles son tus preferencias de color?*" name="colors">
      <UTextarea
        v-model="designPreferences.colors"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="¿Cuáles son tus preferencias tipográficas?*"
      name="typographicPreferences"
    >
      <UTextarea
        v-model="designPreferences.typographicPreferences"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="En tu opinión, ¿qué define un logo exitoso?*"
      name="brandILike"
    >
      <UTextarea
        v-model="designPreferences.brandILike"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="¿Tienes algún presupuesto adicional para comprar tipografías de fundiciones tipográficas? Si es así, ¿cuánto?"
      name="typographyBudget"
    >
      <UTextarea
        v-model="designPreferences.typographyBudget"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="Al mirar los logos de otras marcas, ¿cuáles te gustan y por qué?"
      name="otherLogosLikes"
    >
      <UTextarea
        v-model="designPreferences.otherLogosLikes"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>

    <UFormGroup
      label="¿Hay logos de marcas que no te gusten especialmente y por qué?"
      name="dislikeLogos"
    >
      <UTextarea
        v-model="designPreferences.dislikeLogos"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
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
setProgress(80);

type DesignPreference = {
  colors: string;
  typographicPreferences: string;
  brandILike: string;
  typographyBudget: string;
  otherLogosLikes: string;
  dislikeLogos: string;
};

const designPreferences = reactive<DesignPreference>({
  colors: "",
  typographicPreferences: "",
  brandILike: "",
  typographyBudget: "",
  otherLogosLikes: "",
  dislikeLogos: "",
});

const validate = (client: Client): FormError[] => {
  const errors = [];
  if (!designPreferences.colors)
    errors.push({ path: "likesAndDislikes", message: "Requerido" });
  return errors;
};

const router = useRouter();
const goBack = () => {
  router.push("/questionnaire/company");
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  router.push("/questionnaire/something-else");
}
</script>
