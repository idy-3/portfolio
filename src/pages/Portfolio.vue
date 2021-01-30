<template>
  <h1>Portfolio</h1>
  <project-item
    v-for="proj in projects"
    :key="proj.id"
    :img="proj.img"
    :title="proj.title"
    :description="proj.description"
    :code="proj.code"
    :demo="proj.demo"
  ></project-item>
</template>

<script>
import ProjectItem from "../components/portfolio/ProjectItem.vue";
export default {
  components: { ProjectItem },
  computed: {
    projects() {
      return this.$store.getters["portfolio/projects"];
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>