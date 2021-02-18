<template>
  <div class="person">
    <div class="person__row" v-for="person in data.employee" :key="person.id">
      <img class="person__img" :src="person.img" />
      <div class="person__name-email">
        <div class="person__name-email--name">
          <p>{{ person.name }}</p>
        </div>
        <div class="person__name-email--email">
          <a href="mailto:">{{ person.email }}</a>
        </div>
      </div>
      <div class="person__location">
        <svg
          class="person__location--icon"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <path
            d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257
			c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22
			C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34
			C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180
			C406.1,207.121,398.689,233.688,384.866,256.818z"
          />

          <path
            d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z
			 M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2
			C316.1,212.683,289.784,240.2,256,240.2z"
          />
        </svg>
        <p>{{ person.location }}</p>
      </div>
      <div class="person__team">
        <svg
          class="person__team--icon"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background:new 0 0 512 512;"
          xml:space="preserve"
        >
          <path
            d="M460.425,109.764h-111.01V89.219c0-26.237-21.345-47.583-47.582-47.583h-78.609c-26.237,0-47.582,21.346-47.582,47.583
			v20.544H51.575C23.136,109.764,0,132.9,0,161.338v257.452c0,28.438,23.136,51.575,51.575,51.575h408.85
			c28.438,0,51.575-23.137,51.575-51.575V161.338C512,132.9,488.863,109.764,460.425,109.764z M205.655,89.219
			c0-9.688,7.881-17.57,17.569-17.57h78.609c9.688,0,17.569,7.882,17.569,17.57v20.544H205.655V89.219z M70.856,440.35H51.575
			c-11.89,0.001-21.562-9.672-21.562-21.561V161.338c0-11.889,9.672-21.562,21.562-21.562h19.281V440.35z M413.233,440.351H100.869
			V139.776h312.365V440.351z M481.987,418.789c0,11.889-9.673,21.562-21.562,21.562h-17.179V139.776h17.179
			c11.889,0,21.562,9.673,21.562,21.562V418.789z"
          />
        </svg>

        <p>{{ person.team }}</p>
      </div>
      <div class="person__time">
        <svg
          class="person__time--icon"
          id="Capa_1"
          enable-background="new 0 0 443.294 443.294"
          height="512"
          viewBox="0 0 443.294 443.294"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"
          />
          <path
            d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"
          />
        </svg>
        <div v-for="tech in data.employee.techList" :key="tech">
          {{ tech.react }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "/static/data.json";
export default {
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
.person {
  justify-content: center;
  flex-wrap: wrap;
  display: inline-flex;
  @media (min-width: 1200px) {
    width: 80%;
  }
  &__row {
    width: 839px;
    height: 73px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 5px #00000029;
    border-radius: 4px;
    margin-top: 8px;
    display: inline-flex;
  }

  &__img {
    background-color: transparent;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    margin-top: 14px;
    margin-bottom: 14px;
    margin-left: 25px;
    background-size: cover;
  }

  &__name-email {
    display: flex;
    left: 0;
    flex-wrap: wrap;
    width: 39%;
    align-items: flex-start;
    flex-direction: column;
    &--name {
      font-size: 18px;
      color: var(--color-black);
      font-weight: 700;
      margin-left: 28px;
      margin-bottom: -5%;
    }
    &--email a {
      font-size: 14px;
      color: var(--color-gray-text);
      text-decoration: none;
      margin-left: 28px;
    }
  }
  &__location {
    fill: var(--color-gray-text);
    width: 20%;
    color: var(--color-gray-text);
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    &--icon {
      width: 15px;
      margin: 5px;
    }
  }
  &__team {
    fill: var(--color-gray-text);
    width: 20%;
    color: var(--color-gray-text);
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    &--icon {
      width: 15px;
      margin: 5px;
    }
  }
  &__time {
    background-color: var(--color-primary);
    fill: #fff;
    border-radius: 15px;
    width: 70px;
    height: 25px;
    color: var(--color-gray-text);
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    margin-top: 22px;

    &--icon {
      width: 15px;
      margin: 5px;
    }
  }
}
</style>
