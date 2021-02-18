<template>
  <div class="header">
    <img class="header__logo" :src="logo" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/novicell-logo-white-web.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
// :root {
//   --primary-color: "";
// }
.header {
  width: 100%;
  height: 60px;
  background-color: var(--color-primary);
  padding: 15px;
  &__logo {
    display: flex;
    margin-left: 100px;
  }
}
</style>
