<template>
  <h1 class="heading-1">Inputs</h1>
  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="First name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="Your e-mail"
      name="email"
      placeholder="E-mail"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />
    <Input
      label="Your password"
      name="password"
      placeholder="Password"
      v-model:value="passwordField"
      type="password"
    />
    <Input
      label="Confirm password"
      name="confirm"
      placeholder="Confirm password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
      type="password"
    />
    <Input
      label="Christmas message"
      name="christmas"
      placeholder="Type Christmas here"
      v-model:value="v.christmasField.$model"
      :error="v.christmasField.$errors"
    />
    <Button label="Submit" color="primary" />
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
} from "@vuelidate/validators";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");
const christmasField = ref("");

const mustBeChristmas = (value) => value.includes("Christmas");

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      `Veuillez entrer au moins 3 caractères`,
      minLength(3)
    ),
  },
  emailField: {
    email: helpers.withMessage(
      `Veuillez entrer une adresse e-mail valide`,
      email
    ),
  },
  luckyField: {
    maxLength: helpers.withMessage(
      `La valeur maximale est fixée à 99`,
      maxLength(2)
    ),
    numeric: helpers.withMessage(
      `Vous pouvez uniquement saisir des valeurs numériques`,
      numeric
    ),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      `Les 2 mots de passe ne sont pas identiques`,
      sameAs(passwordField.value)
    ),
  },
  christmasField: {
    christmasField: helpers.withMessage(
      `Ce champ doit contenir le mot "Christmas"`,
      mustBeChristmas
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
  christmasField,
});

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert("Form submitted");
};
</script>
