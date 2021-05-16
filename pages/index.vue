<template lang="pug">
  div.flex.flex-col.h-screen.bg-blue-bg.overflow-y-scroll
    Navbar
    Card.flex-grow
</template>

<script>
import Navbar from "~/components/Navbar";
import Card from "~/components/Card";

export default {
  components: {
    Navbar,
    Card
  }
};
</script>

<style lang="sass"></style>
