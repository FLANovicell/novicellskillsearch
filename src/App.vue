<template>
  <div id="app">
    <HeaderLogo />
    <SearchBar />
    <div class="container">
      <Person />
      <Location />
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/Header/headerLogo.vue";
import SearchBar from "@/components/Header/searchBar.vue";
import Person from "@/components/Content/person.vue";
import Location from "@/components/Content/location.vue";

export default {
  name: "App",
  components: {
    HeaderLogo,
    SearchBar,
    Person,
    Location,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f2f2f2 0% r0% no-repeat padding-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100%;
}
.app-wrap {
  display: flex;
}
</style>
