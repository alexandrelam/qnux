<template lang="pug">
  div(@mouseover="isHover=true" @mouseleave="isHover=fasle").flex.gap-4.items-center
    input(type="checkbox" v-model="isChecked" @change="$emit('check', isChecked)")
    input(type="text" v-model="textvalue").focus_outline-none
    div(v-show="isHover")
      svg(xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")

</template>
<script>
export default {
  props: {
    isCheckedProp: { Boolean, default: false },
    textvalueProp: { String, default: "" }
  },
  data() {
    return {
      isHover: false,
      isChecked: this.isCheckedProp,
      textvalue: this.textvalueProp
    };
  }
};
</script>
