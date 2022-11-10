import { createApp } from "vue";
import App from "./App";

import { router } from "./routes/index";

const app = createApp(App);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(router);
app.mount("#app");