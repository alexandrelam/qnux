<template lang="pug">
  div.flex.flex-col.h-screen.bg-blue-bg.overflow-y-scroll
    Navbar
    Card.flex-grow
    Button.absolute.bottom-14.right-28
</template>

<script>
import Navbar from "~/components/Navbar";
import Card from "~/components/Card";
import Button from "~/components/Button";

export default {
  components: {
    Navbar,
    Card,
    Button
  }
};
</script>
