<template>
  <search-product v-on:search-text="searchText" />
  <product-card
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import ProductService from "../services/ProductService";
import SearchProduct from "src/components/SearchProduct.vue";
import ProductCard from "src/components/ProductCard.vue";

export default defineComponent({
  name: "PageIndex",
  props: {
    product: {
      type: Object,
    },
    categoryId: {
      type: Number,
    },
    categoryName: {
      type: String,
    },
  },
  components: {
    SearchProduct,
    ProductCard,
  },
  data() {
    return {
      products: null,
      filteredProducts: [],
      categories: [],
      dataProducts:[],
    };
  },
  watch: {
    categoryId() {
      this.productsFiltered();
    },
  },
  mounted() {
    this.products = null;
    ProductService.getProducts(2, this.page)
      .then((response) => {
        this.products = response.data;
        this.dataProducts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.categories = null;
    ProductService.getCategory()
      .then((response) => {
        this.categories = response.data
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    productsFiltered() {
      if (!this.dataProducts|| !this.categoryId){
        return;
      }
      this.products = this.dataProducts.filter(
        (element) => element.category.id === this.categoryId
      );
    },

    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      try {
        const res = await axios.get(
          `http://sva.talana.com:8000/api/product?term=${text}`,
          config
        );
        this.filteredProducts = res.data.results;
        console.log(this.filteredProducts);
      } catch (error) {
        console.log(error);
      }
    },
    onChangeCategory(id, name) {
      console.log('id:',id,'name:',name)
    },
  },
});
</script>
