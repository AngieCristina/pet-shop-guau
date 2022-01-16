<template>
  <q-layout view="lHh Lpr lFf" color="primary">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Guau! </q-toolbar-title>
        <q-input
          dense
          rounded
          outlined
          v-model="text"
          label="Buscar productos y categorias"
        >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template>
        </q-input>
        <q-btn round color="secondary" icon="shopping_cart" />
      </q-toolbar>
    </q-header>
    <q-icon name="search" />
    <q-drawer
      style="background-color: #e1f1f2; color: #252f48"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header> Categorias </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "src/components/Categories.vue";
import ProductService from "../services/ProductService";

const linksList = [
  {
    title: "Alimentos",
    icon: "takeout_dining",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Juguetes",
    icon: "smart_toy",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Gatos",
    icon: "pets",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Perros",
    icon: "pets",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Medicamentos",
    icon: "health_and_safety",
    link: "https://facebook.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      categories: null,
      totalCategories: 0,
    };
  },
  mounted() {
    this.categories = null;
    ProductService.getCategory()
      .then((response) => {
        this.categories = response.data;
        console.log(this.categories);
        this.totalCategories = response.headers["x-total-count"];
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>
<style lang="scss">
.q-toolbar-title {
  color: #252f48;
}
</style>
