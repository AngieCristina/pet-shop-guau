
<template>
   <div class="q-pa-md row ">
    <q-card class="my-card col-xs-12 col-sm-6 col-md-4">
      <img :src="product.photo" alt="pet" />

      <q-card-section>
        <div class="text-h6">name:{{ product.name }}</div>
        <div class="text-subtitle2">{{ product.price }}</div>
        <div class="text-subtitle2">{{ product.category.name }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div style="display: flex">
          <div>-</div>
          <input type="number" />
          <div>+</div>
        </div>
        <q-btn round color="secondary" icon="shopping_cart" />
      </q-card-section>
    </q-card>
  </div>

  </template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCard',
   props: {
    product: {
      type: Object,
    },
  },
})
</script>
