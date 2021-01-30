<template>
  <div class="container">
    <the-header></the-header>
    <router-view></router-view>
  </div>
  <the-footer class=""></the-footer>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader";
import TheFooter from "./components/layouts/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Quando&display=swap");

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

html {
  font-family: Quando, Avenir, Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
  background-color: #f1f1dc;
  color: #2f460c;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1 0 auto;
}
* {
  scrollbar-width: thin;
  scrollbar-color: #bc8f8f #2f460c;
}
*::-webkit-scrollbar {
  width: 0.5rem;
}
*::-webkit-scrollbar-track {
  background: #2f460c;
}
*::-webkit-scrollbar-thumb {
  background-color: #bc8f8f;
  border-radius: 20px;
  border: 1px solid #2f460c;
}
</style>
