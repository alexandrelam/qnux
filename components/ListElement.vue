<template lang="pug">
  div(@mouseover="isHover=true" @mouseleave="isHover=false").flex.gap-4.items-center
    input(type="checkbox" v-model="isChecked" @change="$emit('check', isChecked)")
    input(type="text" v-model="textvalue" @change="changeText({category_id: category_id, id: id, text: textvalue})").focus_outline-none
    div(@click="remove({category_id, id})").h-5.w-5
      svg(v-show="isHover" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")

</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    isCheckedProp: { Boolean, default: false },
    textvalueProp: { String, default: "" },
    id: Number,
    category_id: Number
  },
  data() {
    return {
      isHover: false,
      isChecked: this.isCheckedProp,
      textvalue: this.textvalueProp
    };
  },
  methods: {
    ...mapMutations(["changeText", "remove"])
  }
};
</script>
