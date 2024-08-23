<template>
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
      <UInput v-model="client.instagram" placeholder="Perfil de instagram" />
    </UFormGroup>

    <br />
    <UButton type="submit" block> Siguiente </UButton>
  </UForm>
</template>
<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "questionnaire",
});
const { setProgress } = useProgress();
setProgress(20);

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

const router = useRouter();
async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  router.push("/questionnaire/company");
}
</script>
