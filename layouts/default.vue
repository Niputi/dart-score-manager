<template>
  <v-app dark>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-text="title"></v-btn>
      </v-toolbar-items>

      <v-spacer/>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <no-ssr>
        <cookie-law theme="dark-lime"></cookie-law>
      </no-ssr>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import CookieLaw from "vue-cookie-law";

export default {
  components: { CookieLaw },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { icon: "apps", title: "score", to: "/" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" },
        { icon: "person", title: "login", to: "/login" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "dart score manager"
    };
  }
};
</script>
