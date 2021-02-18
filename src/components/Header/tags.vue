<template>
  <div class="tags">
    <div class="techs" v-for="tag in data.tags" :key="tag.id">
      <a href="#" class="tags__link"> {{ tag.tech }}</a>
    </div>
  </div>
</template>

<script>
import data from "/static/tags.json";
export default {
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: inline-flex;
  margin: 5px;
  height: 50px;
  margin-top: 50px;
  flex-wrap: wrap;
  &__link {
    margin: 5px;
    padding: 5px;
    color: #fff;
    text-decoration: none;
    background: var(--color-secondary);
    border-radius: 25px;
  }
}
</style>
