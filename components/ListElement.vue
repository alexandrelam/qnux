<template lang="pug">
  div.flex.gap-4.items-center
    input(type="checkbox" v-model="isChecked" @change="$emit('check', isChecked)")
    input(type="text" v-model="textvalue").focus_outline-none
    div(v-if="textvalue!==''")
      svg(xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")

</template>
<script>
export default {
  props: {
    isChecked: { Boolean, default: false },
    textvalue: { String, default: "" }
  }
};
</script>
