<template>
  <h1>Contact</h1>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="message">Message</label>
        <textarea rows="5" id="message" v-model.trim="message"></textarea>
      </div>
      <p class="errors" v-if="!formIsValid">
        Please, enter a valid email and message.
      </p>
      <div class="actions">
        <button>Send Message</button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      }
      window.location.href =
        "mailto:idorenyinokonudoh@gmail.com?subject=" +
        this.email +
        "&body=" +
        this.message;
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