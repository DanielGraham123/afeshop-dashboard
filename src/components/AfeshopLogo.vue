<template>
  <b-link class="brand-logo" href="/">
    <!-- <vuexy-logo /> -->
    <img
      src="@/assets/images/logo/afeshop-logo.png"
      alt="afeshop-logo"
      class="img-fluid mb-3"
      width="50"
      style="margin-right: 5px"
    />

    <h2 class="brand-text">
      <span class="fp">
        <span>A</span>
        <i>F</i>
      </span>
      <span class="sp"><i>eshop</i></span>
      <small class="fs d-block">storefront</small>
    </h2>
  </b-link>
</template>

<script>
import { BLink } from "bootstrap-vue";

export default {
  components: {
    BLink,
  },
};
</script>

<style scoped>
h2.brand-text {
  font-size: 30px !important;
}

.fp {
  text-transform: uppercase;
  color: rgba(236, 51, 18, 0.61);
  font-weight: 800 !important;
}

.sp {
  color: #ffa300;
}

.fs {
  color: rgb(11, 166, 255);
  font-weight: 800 !important;
  margin-left: 2em !important;
  margin-top: -0.3em;
}
</style>