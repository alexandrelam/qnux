<template lang="pug">
    div
      input(type="text" :value="title").text-lg.font-bold.mb-4.focus_outline-none
      div 
        ListElement(v-for="(program) in list" :isCheckedProp="program.isChecked" :textvalueProp="program.title" :key="program.id" :id="program.id" :category_id="category_id")
        p(@click="addProgram").text-blue-link.text-sm.cursor-pointer.hover_underline.ml-7.mt-1 add
</template>
<script>
import { mapMutations } from "vuex";
import ListElement from "./ListElement";

export default {
  components: {
    ListElement
  },
  props: {
    category_id: { type: Number, required: true },
    title: { type: String, required: true },
    list: { type: Array, required: true }
  },
  methods: {
    ...mapMutations(["addEmpty"]),
    addProgram() {
      const new_id =
        this.$store.getters.getLastCategoryItem(this.category_id) + 1;
      this.addEmpty({ category_id: this.category_id, new_id: new_id });
    }
  }
};
</script>
