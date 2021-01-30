import { createStore } from "vuex";

import portfolioModule from "./modules/portfolio.js";
import authModule from "./modules/auth.js";

const store = createStore({
  modules: {
    portfolio: portfolioModule,
    auth: authModule,
  },
});

export default store;
