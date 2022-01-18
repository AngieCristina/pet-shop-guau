<template lang="">
  <div>
    <form @submit.prevent="searchProducts">
    <q-input
        dense
        rounded
        outlined
        v-model="text"
        label="Buscar productos y categorias"
        value="Search Products"
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
      </form>
  </div>
</template>
<script>
export default {
  name:'SearchProduct',
  props: {
    product: { type: Object },
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    searchProducts(){
      this.$emit('search-text',this.text)
      this.text = ''
    }
  },
}
</script>