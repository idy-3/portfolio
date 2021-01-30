<template>
  <footer>
    <nav class="links">
      <ul>
        <li>
          <base-underline
            ><a
              href="https://github.com/idy-3"
              target="_blank"
              rel="noopener noreferrer"
              >Github</a
            >
          </base-underline>
        </li>
        <li>
          <base-underline
            ><a
              href="https://www.linkedin.com/in/idy-3"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            ></base-underline
          >
        </li>
        <li>
          <base-underline
            ><a
              href="#https://stackoverflow.com"
              target="_blank"
              rel="noopener noreferrer"
              >Stackoverflow</a
            >
          </base-underline>
        </li>
        <li>
          <base-underline
            ><a href="#https://codesandbox.io" target="_blank">Codesandbox</a>
          </base-underline>
        </li>
        <li>
          <base-underline
            ><a href="#https://repl.it" rel="noopener noreferrer">Repl.it</a>
          </base-underline>
        </li>
      </ul>
    </nav>
    <div class="copyright">&#xa9; {{ currentYear }} idy Udoh</div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 5rem;
  background-color: #35530a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: "Permanent Marker";

  flex-shrink: 0;
}

footer nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 62rem;
}

footer ul {
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
  /* cursor: pointer; */
  text-decoration: none;
  color: #fff;
}
.copyright {
  margin-top: 1.5rem;
  font-family: initial;
}
</style>