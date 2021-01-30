<template>
  <div>
    <!-- @TODO: will be completed if necessary -->
    <base-card>
      <h1>Login</h1>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <p v-if="!formIsValid" class="errors">Sorry, en error occured!</p>
        <div class="actions">
          <button>Add Project</button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 3px solid #f5e2c0;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #bc8f8f;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-color: #35530a;
  border-width: 3px;
  background-color: inherit;
  outline: none;
  text-decoration: none;
  padding: 10px 25px;
  color: inherit;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1.5rem;
}
button:hover {
  background-color: #35530a;
  color: #fff;
}
h1 {
  text-align: center;
}
</style>