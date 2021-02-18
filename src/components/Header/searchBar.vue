<template>
  <div class="search-bar">
    <div class="search-bar__headline">
      <h2>Who knows?</h2>
    </div>
    <div class="search-bar__underline">
      <p>Find Novicells most experienced employee</p>
    </div>
    <div class="search-bar__bar">
      <input
        class="search-bar__input"
        placeholder="React, Site, Umbraco e.g."
      />
      <svg
        class="search-bar__icon"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512.005 512.005"
        style="enable-background:new 0 0 512.005 512.005;"
        xml:space="preserve"
      >
        <path
          d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
        />
      </svg>
    </div>
    <Tags />
  </div>
</template>

<script>
import Tags from "@/components/Header/tags.vue";

export default {
  name: "searchBar",
  components: {
    Tags,
  },
  data() {
    return {
      logo: require("@/assets/loupe.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  background: var(--color-primary);
  background: linear-gradient(
    180deg,
    rgba(200, 0, 70, 1) 0%,
    rgba(124, 4, 53, 1) 87%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: 15px;

  &__headline {
    font-size: 2em;
    h1 {
      margin: 0;
    }
  }
  &__underline {
    font-size: 1.2em;
    letter-spacing: 0px;

    p {
      margin: 0;
      margin-bottom: 25px;
    }
  }

  &__bar {
    position: relative;
    width: 100%;
    display: flex;
    @media (min-width: 768px) {
      width: 475px;
    }
  }

  &__input {
    width: 100%;
    height: 50px;
    border-style: none;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    box-shadow: 0px 3px 15px var(--color-secondary);
    padding-right: 70px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    &:focus {
      border-style: none;
    }
  }
  &__icon {
    top: 14px;
    width: 20px;
    height: 20px;
    right: 31px;
    fill: var(--color-green);
    position: absolute;
  }
}
i.fas {
  font-size: 2em;
  margin: 10px;
}
</style>
