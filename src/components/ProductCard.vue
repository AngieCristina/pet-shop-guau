
<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">name:</div>
        <div class="text-subtitle2">price</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
      <q-btn round color="secondary" icon="shopping_cart" />
      </q-card-section>
    </q-card>
  </div>

  </template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCard'
})
</script>
