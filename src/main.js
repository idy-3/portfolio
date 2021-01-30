import { createApp } from "vue";
import App from "./App.vue";

import router from "./router.js";
import store from "./store/index.js";

import BaseCard from "./components/ui/BaseCard.vue";
import BaseUnderline from "./components/ui/BaseUnderline.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-underline", BaseUnderline);

app.config.devtools = true;
app.mount("#app");
