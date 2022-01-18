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
        <div
          v-for="(category, categoryKey) in categories"
          :key="categoryKey"
          @click="onChangeCategory(category)"
        >
          {{ category.name }}
        </div>
      </q-list>
    </q-drawer>
  <q-page-container>
    <q-page><index :onChangeCategory="onChangeCategory"/></q-page>
  </q-page-container>
  </q-layout>
</template>

<script>
import ProductService from "../services/ProductService";
import Index from "src/pages/Index.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  props: {
    name: { type: String },
  },

  components: {
    Index,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      products: null,
      categories: null,
    };
  },
  mounted() {
    this.categories = null;
    ProductService.getCategory()
      .then((response) => {
        this.categories = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onChangeCategory(category) {
      this.$emit("onChangeCategory", category.id, category.name);
    },
  },
});
</script>
<style lang="scss">
.q-toolbar-title {
  color: #252f48;
}
</style>
