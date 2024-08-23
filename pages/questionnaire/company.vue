<template>
  <UForm
    :validate="validate"
    :state="brand"
    class="space-y-4"
    @submit="onSubmit"
  >
    <h1 class="text-xl font-bold">Preguntas</h1>
    <UFormGroup
      label="Por favor, deme una breve descripción de su negocio, es decir, productos/servicios que ofrece:"
      name="description"
    >
      <UTextarea
        v-model="brand.description"
        placeholder="Ej: -NOMBRE DE LA EMPRESA- se dedica a ...."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>
    <UFormGroup
      label="¿Cuál es el propósito y significado detrás de lo que haces u ofreces?"
      name="purpose"
    >
      <UTextarea
        v-model="brand.purpose"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>
    <UFormGroup
      label="¿Cuáles son los valores fundamentales de tu marca?"
      name="values"
    >
      <UTextarea
        v-model="brand.values"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>
    <UFormGroup
      label="Describe las metas y visiones a futuro para tu marca:"
      name="goals"
    >
      <UTextarea
        v-model="brand.goals"
        placeholder="Ej: ..."
        icon="i-heroicons-envelope"
      />
    </UFormGroup>
    <UFormGroup label="¿Tienes algún slogan que represente tu marca?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup
      label="¿Qué identifica a tu marca? (puede ser un animal, un objeto, etc)"
    >
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="¿Cuáles son los colores representativos de tu marca?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup
      label="¿Con qué estilo se identifica mejor tu marca?, Moderno o Tradicional, Amigable o Serio, Costoso o Asequible."
    >
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="¿Quién es tu público objetivo?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="¿Qué rango de edad ocupa la mayoría de tus usuarios?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup
      label="¿Cuáles son las 3 palabras que deseas piense su audiencia al ver tu marca?"
    >
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="¿Cuál es el problema que resuelve tu producto/marca?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="¿Cuáles son las marcas competencia de tu área?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup
      label="¿Qué es lo que atrae a los clientes a comprar tu producto?"
    >
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="¿Cuáles son los puntos débiles de tu marca?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup label="¿Cuáles son los puntos fuertes de tu marca?">
      <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
    </UFormGroup>

    <UFormGroup
      label="¿Qué preocupaciones consideras tienes acerca de tu marca?"
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
setProgress(40);

type Brand = {
  description: string;
  purpose: string;
  values: string;
  goals: string;
};

const brand = reactive<Brand>({
  description: "",
  purpose: "",
  values: "",
  goals: "",
});

const validate = (brand: Brand): FormError[] => {
  const errors = [];
  if (!brand.description)
    errors.push({ path: "description", message: "Requerido" });
  if (!brand.purpose) errors.push({ path: "purpose", message: "Requerido" });
  if (!brand.values) errors.push({ path: "values", message: "Requerido" });
  if (!brand.goals) errors.push({ path: "goals", message: "Requerido" });
  return errors;
};

const router = useRouter();
const goBack = () => {
  router.push("/questionnaire/client");
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  router.push("/questionnaire/logo");
}
</script>
