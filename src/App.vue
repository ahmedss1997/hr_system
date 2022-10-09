<template>
  <v-app>
    <navbar v-if="$route.meta && $route.meta.navSide"></navbar>
    <sidebar v-if="$route.meta && $route.meta.navSide"></sidebar>
    <v-main
      class="bgColor pt-12 transition-all duration-500 ease-in-out"
      :class="
        $route.meta &&
        $route.meta.navSide &&
        $store.state.drawerAll.mini &&
        $store.state.drawerAll.view
          ? 'miniSide-padding'
          : $route.meta && $route.meta.navSide && $store.state.drawerAll.view
          ? 'sidebar-space'
          : ''
      "
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import navbar from "@/layout/Nav.vue";
import sidebar from "@/layout/Sidebar.vue";
import jwt_decode from "jwt-decode";

/*
props with type
1- string / number / boolean (can not be edited inside children)
2- array / object (can be edited inside children)
we can change what inside the array and object => not the array itself or object itself
 */

export default Vue.extend({
  name: "App",
  components: { navbar, sidebar },
  data: () => ({
    tok: [] as any,
  }),
  watch: {
    $route: {
      immediate: true, // بتشتغل اول ما الصفحة تحمل
      deep: true, // for arrays and objects
      handler() {
        // 1- I get the page route
        // 2- check if page needs authentication
        // 3- if it needs auth => check token
        // 4- if token is not found => return to login page

        // 1
        let page = this.$route;
        // 2
        if (page.meta && page.meta.auth) {
          // 3
          const token = localStorage.getItem("token");
          if (token) {
            const decoded = jwt_decode(token);
            // let that = this as any;
            // console.log(that.decoded.id);
            this.tok = decoded;
            // console.log(this.tok.id);
            const tokDate = new Date(this.tok.exp * 1000);
            const nowDate = new Date();
            if (nowDate >= tokDate) {
              console.log("done");
              this.$router.push("/login");
            }
          } else {
            // 4
            this.$router.push("/login");
          }
        }
      },
    },
  },
  created() {
    // بتشتغل اول ما الصفحة تحمل
  },
});
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>
