import { createApp } from "vue";
import type { App } from "vue";
import { createPinia } from "pinia";

import app from "./App.vue";
import "./assets/main.css";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let root: App;

function render(props: any) {
  const { container } = props;
  root = createApp(app);
  root.use(createPinia());
  const c = container
    ? container.querySelector("#app")
    : document.getElementById("app");
  root.mount(c);
}

console.log('Loading micro-app');

renderWithQiankun({
  mount(props) {
    console.log("micro-app mount");
    render(props);
  },
  bootstrap() {
    console.log("micro-app bootstrap");
  },
  unmount(props: any) {
    console.log("micro-app unmount");
    root.unmount();
  },
  update(props: any) {
    console.log("micri-app update");
    console.log(props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
