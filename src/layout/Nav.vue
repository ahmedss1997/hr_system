<template>
  <div class="navv">
    <v-app-bar
      color="primary navBar accent-4 py-2 px-lg-16 pl-lg-6 px-md-6 "
      dense
      dark
      height="auto !important"
      fixed
    >
      <v-img
        class="d-none d-md-block"
        src="../assets/imgs/logo.png"
        max-height="40"
        max-width="40"
      ></v-img>
      <v-col cols="4" class="mx-0 ml-md-6 mx-md-2 pa-0">
        <v-sheet class="d-flex align-center" color="transparent">
          <div class="justify-space-between d-flex align-center flex-wrap">
            <v-btn icon @click.stop="toggle()">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>

            <v-toolbar-title class="d-none d-md-block"
              >Page title</v-toolbar-title
            >
          </div>
        </v-sheet>
      </v-col>

      <v-col cols="4" class="d-block d-md-none pa-0">
        <v-img
          class="mx-auto"
          src="../assets/imgs/logo.png"
          max-height="40"
          max-width="40"
        ></v-img>
      </v-col>

      <v-spacer class="d-none d-md-block"></v-spacer>
      <v-col cols="4" md="8" class="d-flex justify-end pa-0">
        <v-menu offset-y nudge-bottom="17" min-width="160">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-sheet color="transparent" class="d-flex align-center">
                <span class="mx-1">
                  <v-img
                    src="../assets/imgs/us.png"
                    max-height="25"
                    max-width="25"
                    class=""
                  ></v-img>
                </span>
                <span class="d-none d-md-block">
                  English
                  <v-icon>mdi-chevron-down</v-icon>
                </span>
              </v-sheet>
            </div>
          </template>
          <v-list min-height="40px">
            <v-list-item
              v-for="(min, index) in mins"
              :key="index"
              link
              class="text-h6"
            >
              <v-list-item-title>{{ min.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y nudge-bottom="20" min-width="160">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-sheet
                color="transparent"
                class="d-flex align-center mx-1 mx-md-6 pos"
              >
                <span>
                  <v-icon>mdi-bell-outline</v-icon>
                </span>
                <span class="circ rounded-circle lightPrimary text-center"
                  >3</span
                >
              </v-sheet>
            </div>
          </template>
          <v-list min-height="40px">
            <v-list-item link class="text-h6">
              <v-list-item-title>Intem One</v-list-item-title>
            </v-list-item>
            <v-list-item link class="text-h6">
              <v-list-item-title>Intem tWO</v-list-item-title>
            </v-list-item>
            <v-list-item link class="text-h6">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y nudge-bottom="20" min-width="160">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-sheet
                color="transparent"
                class="d-flex align-center mx-1 mx-md-6 pos"
              >
                <span>
                  <v-icon>mdi-chat-outline</v-icon>
                </span>
                <span class="circ rounded-circle lightPrimary text-center"
                  >8</span
                >
              </v-sheet>
            </div>
          </template>
          <v-list min-height="40px">
            <v-list-item link class="text-h6">
              <v-list-item-title>Intem One</v-list-item-title>
            </v-list-item>
            <v-list-item link class="text-h6">
              <v-list-item-title>Intem tWO</v-list-item-title>
            </v-list-item>
            <v-list-item link class="text-h6">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y nudge-bottom="17" min-width="160">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <v-sheet color="transparent" class="d-flex align-center">
                <span class="mx-1">
                  <v-img
                    src="../assets/imgs/avatar-21.jpg"
                    max-height="30"
                    max-width="30"
                    class="rounded-circle"
                  ></v-img>
                </span>
                <span class="d-none d-md-block">
                  {{ currentbody.fullName }}
                  <v-icon>mdi-chevron-down</v-icon>
                </span>
              </v-sheet>
            </div>
          </template>
          <v-list min-height="40px">
            <v-list-item
              v-for="(min, index) in mins"
              :key="index"
              link
              class="text-h6"
              :to="min.path"
            >
              <v-list-item-title> {{ min.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as models from "@/code/models";
import * as Emp from "@/code/apis/api.employee";
import jwt_decode from "jwt-decode";

export default Vue.extend({
  name: "myNav",
  data: () => ({
    tok: [] as any,
    currentbody: [] as any,
    mins: [
      { title: "My Profile", path: "/profile" },
      { title: "Settings" },
      { title: "Logout", path: "/login" },
    ],
  }),
  methods: {
    toggle() {
      const that = this as any;
      const val = that.$vuetify.breakpoint.name;
      let drawer = Object.assign({}, that.$store.state.drawerAll); // copy of the object
      if (val == "xs" || val == "sm" || val == "md") {
        drawer.view = !drawer.view;
      } else {
        drawer.mini = !drawer.mini;
      }
      that.$store.commit("get_drawer", drawer);
    },
    getIntEmployee: async function () {
      const token = localStorage.getItem("token");
      if (token) {
        const decoded = jwt_decode(token);
        let that = this as any;
        console.log(decoded);
        this.tok = decoded;
        console.log(that.tok.id);
      }
      const result = await Emp.Employee.getonceEmployee(this.tok.id, true);
      if (result.ok && result.body) {
        //
        const body = result.body;
        this.$store.commit("get_intemployees", body);
        this.currentbody = this.$store.state.currentUser;
        console.log(this.currentbody);
      } else {
        // there is something wrong
        console.log("falseee");
      }
    },
  },
  created() {
    this.getIntEmployee();
  },
});
</script>

<style lang="scss">
.navv .navBar {
  z-index: 9999 !important;
}
.sideBar {
  z-index: 8;
}
.v-list-item {
  min-height: 30px;
}

.circ {
  width: 20px;
  height: 20px;
  line-height: 10px;
  position: absolute;
  top: -13px;
  right: -16px;
  padding: 5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
}

.pos {
  position: relative;
}
</style>
