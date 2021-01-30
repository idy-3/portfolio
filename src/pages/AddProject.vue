<template>
  <!-- @TODO: will be completed if necessary -->
  <base-card>
    <h1>Add a Project</h1>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Project Title</label>
        <input type="text" id="title" v-model.trim="title" />
      </div>
      <div class="form-control">
        <label for="image">Project Image Url</label>
        <input type="text" id="image" v-model.trim="imgUrl" />
      </div>
      <div class="form-control">
        <label for="demo">Demo Url</label>
        <input type="text" id="demo" v-model.trim="demoUrl" />
      </div>
      <div class="form-control">
        <label for="code">Code Url</label>
        <input type="text" id="code" v-model.trim="codeUrl" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="description"
        ></textarea>
      </div>
      <p v-if="!formIsValid" class="errors">Sorry, en error occured!</p>
      <div class="actions">
        <button>Add Project</button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      imgUrl: "",
      demoUrl: "",
      codeUrl: "",
      description: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.title === "" ||
        this.imgUrl === "" ||
        this.demoUrl === "" ||
        this.codeUrl === "" ||
        this.description === ""
      ) {
        this.formIsValid = false;
        return;
      }
      //   const formData = {
      //     title: this.title,
      //     img: this.imgUrl,
      //     demo: this.demoUrl,
      //     code: this.codeUrl,
      //     description: this.description,
      //   };
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