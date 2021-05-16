<template lang="pug">
    div.flex.justify-center.mt-5
      div.bg-white.rounded-t-lg.max-w-card.flex-grow.mx-5.shadow.flex.justify-evenly.flex-wrap.pt-14.px-10.content-start
        CategoryList(v-for="(category, index) in category_list" :title="category.category_title" :list="category.content").mb-10
</template>

<script>
import CategoryList from "./CategoryList";

export default {
  components: {
    CategoryList
  },
  data() {
    return {
      category_list: this.$store.state.list
    };
  }
};
</script>
