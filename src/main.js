import DefaultLayout from "~/layouts/Default.vue";
import "@/assets/_globals.scss";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href: "https://use.typekit.net/blv1xtl.css",
    defer: true
  });
}
