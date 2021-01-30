<template>
  <header>
    <nav>
      <h1>
        <base-underline>
          <router-link to="/portfolio">Idy.one </router-link>
        </base-underline>
      </h1>
      <ul>
        <li>
          <base-underline>
            <router-link to="/contact">Contact </router-link>
          </base-underline>
        </li>
        <li>
          <base-underline>
            <router-link to="/about"> About</router-link>
          </base-underline>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #35530a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: "Permanent Marker";
}

header nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 62rem;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 1.2rem;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>