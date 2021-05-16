<template lang="pug">
    div
      input(type="text" :value="title").text-lg.font-bold.mb-4.focus_outline-none
      div 
        ListElement(v-for="(program, index) in list" :isChecked="program.isChecked" :textvalue="program.title")
</template>
<script>
import { mapMutations } from "vuex";
import ListElement from "./ListElement";

export default {
  components: {
    ListElement
  },
  props: {
    title: { type: String, required: true },
    list: { type: Array, required: true }
  },
  methods: {
    test(e) {
      console.log(e);
    }
  }
};
</script>
