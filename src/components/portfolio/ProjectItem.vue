<template>
  <base-card>
    <div class="content">
      <h1>{{ title }}</h1>
      <div class="divider">
        <img :src="require(`@/assets/${img}`)" alt="project image" />

        <div>
          {{ description }}
        </div>
      </div>

      <ul>
        <li v-if="code">
          <a :href="code" target="_blank"> Code> </a>
        </li>
        <li v-if="demo">
          <a :href="demo" target="_blank"> Project> </a>
        </li>
      </ul>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ["img", "title", "description", "code", "demo"],
};
</script>

<style scoped>
.content {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.content ul {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
}
li {
  margin: 0 0.99rem 0 0;
}
a {
  color: inherit;
}
.divider {
  display: flex;
  flex-direction: column;
}
.divider > div {
  padding-top: 1.2rem;
}
@media screen and (min-width: 480px) {
  .divider {
    flex-direction: row;
  }
  .divider > img {
    width: 50%;
  }

  .divider > div {
    padding-top: 0;
    width: 50%;
    text-align: left;
    padding-left: 1.2rem;
  }
}
</style>