<script lang="ts" setup>
/* Client form logic */
import type { FormError, FormSubmitEvent } from "#ui/types";

/* Page logic */
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
/* Page logic */

/* Client form logic */
type Client = {
  name: string;
  email: string;
  phone: string;
  instagram: string;
};

const client = reactive<Client>({
  name: "",
  email: "",
  phone: "",
  instagram: "",
});

const validate = (client: Client): FormError[] => {
  const errors = [];
  if (!client.name) errors.push({ path: "name", message: "Requerido" });
  if (!client.email) errors.push({ path: "email", message: "Requerido" });
  if (!client.phone) errors.push({ path: "phone", message: "Requerido" });
  if (!client.instagram)
    errors.push({ path: "instagram", message: "Requerido" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}
/* Client form logic */

onMounted(() => {
  setTheme();
});
</script>
<template>
  <UContainer>
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
    <br />
    <UDivider size="lg" class="max-w-4xl m-auto" />
    <br />
    <div class="max-w-4xl m-auto mb-10">
      <UForm
        :validate="validate"
        :state="client"
        class="space-y-4"
        @submit="onSubmit"
      >
        <h1 class="text-xl font-bold">Datos de cliente</h1>
        <UFormGroup label="Name" name="name">
          <UInput v-model="client.name" placeholder="Nombre de la marca" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="client.email" placeholder="dirección de correo" />
        </UFormGroup>

        <UFormGroup label="Contacto" name="phone">
          <UInput
            v-model="client.phone"
            placeholder="Número de teléfono. Incluir código de país"
          />
        </UFormGroup>

        <UFormGroup label="Instagram" name="instagram">
          <UInput
            v-model="client.instagram"
            placeholder="Perfil de instagram"
          />
        </UFormGroup>

        <br />
        <h1 class="text-xl font-bold">Preguntas</h1>
        <UFormGroup
          label="Por favor, deme una breve descripción de su negocio, es decir, productos/servicios que ofrece:"
        >
          <UTextarea
            placeholder="Ej: -NOMBRE DE LA EMPRESA- se dedica a ...."
            icon="i-heroicons-envelope"
          />
        </UFormGroup>
        <UFormGroup
          label="¿Cuál es el propósito y significado detrás de lo que haces u ofreces?"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>
        <UFormGroup label="¿Cuáles son los valores fundamentales de tu marca?">
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>
        <UFormGroup
          label="Describe las metas y visiones a futuro para tu marca:"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>
        <UFormGroup label="¿Tienes algún slogan que represente tu marca?">
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>
        <UFormGroup
          label="¿Qué identifica a tu marca? (puede ser un animal, un objeto, etc)"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="¿Cuáles son los colores representativos de tu marca?"
        >
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

        <UFormGroup
          label="¿Qué rango de edad ocupa la mayoría de tus usuarios?"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="¿Cuáles son las 3 palabras que deseas piense su audiencia al ver tu marca?"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="¿Cuál es el problema que resuelve tu producto/marca?"
        >
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
        <h1 class="text-xl font-bold">Sobre el logo/identidad de la marca</h1>

        <UFormGroup
          label="¿Cuál es tu logo actual? (si tienes uno, por favor pégalo a continuación o adjúntalo en un correo electrónico)"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="¿Qué te gusta y qué no te gusta de tu logo actual? (si tienes uno)"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="¿Qué quieres que logre el nuevo logo?*">
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="¿Estás buscando un ícono o una tipografía estilizada para tu logo?*"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <br />
        <h1 class="text-xl font-bold">Preferencias de diseño</h1>

        <UFormGroup label="¿Cuáles son tus preferencias de color?*">
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="¿Cuáles son tus preferencias tipográficas?*">
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup label="En tu opinión, ¿qué define un logo exitoso?*">
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="¿Tienes algún presupuesto adicional para comprar tipografías de fundiciones tipográficas? Si es así, ¿cuánto?"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="Al mirar los logos de otras marcas, ¿cuáles te gustan y por qué?"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <UFormGroup
          label="¿Hay logos de marcas que no te gusten especialmente y por qué?"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <br />
        <h1 class="text-xl font-bold">¿Algo más?</h1>

        <UFormGroup
          label="¿Hay algo más que sientas que no hemos cubierto y que sería beneficioso para el proceso de diseño? ¡Si es así, añádelo aquí!"
        >
          <UTextarea placeholder="Ej: ..." icon="i-heroicons-envelope" />
        </UFormGroup>

        <br />
        <UButton type="submit" block> Enviar </UButton>
        <div class="text-center">
          <p>
            Este formulario está protegido bajo los términos y condiciones de
            google recaptcha
          </p>
        </div>
      </UForm>
    </div>
  </UContainer>
</template>
