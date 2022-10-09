<template>
  <v-navigation-drawer
    v-model="$store.state.drawerAll.view"
    :mini-variant.sync="miniSide"
    mini-variant-width="60"
    class="sideBar pt-12 darkPrimary"
    fixed
    @mouseover.native="open()"
    @mouseleave.native="close()"
    :class="miniSide ? 'hide-scroll' : ''"
  >
    <v-list color="transparent" dense class="mt-6 pb-0">
      <div style="max-height: calc(100vh - 60px)">
        <span
          v-if="!miniSide"
          class="d-block px-5 support--text my-2 font-weight-bold"
          >Main</span
        >
        <v-list-item
          class="sideBar-item mb-1 mx-0 py-0 px-5 transparent txtOnPrimary--text"
          v-for="(item, i) in items"
          :key="'item' + item.title + i"
          :to="!item.includeList ? { name: item.path || '' } : ''"
          active-class="active"
          link
          dense
        >
          <template v-if="!item.includeList">
            <v-list-item-icon class="mx-1">
              <v-icon color="txtOnPrimary" v-text="item.action"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-if="!miniSide"
                class="d-flex align-center justify-space-between"
              >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-else>
            <v-expansion-panels
              accordion
              tile
              class="elevation-0"
              :value="$route.path.includes(item.path) ? 0 : false"
            >
              <v-expansion-panel
                class="transparent elevation-0 txtOnPrimary--text"
              >
                <v-expansion-panel-header class="pa-0 px-2">
                  <v-row align="center">
                    <v-list-item-icon class="mx-1">
                      <v-icon
                        color="txtOnPrimary"
                        v-text="item.action"
                      ></v-icon>
                    </v-list-item-icon>
                    <span v-if="!miniSide" class="text-body-2">{{
                      item.title
                    }}</span>
                  </v-row>

                  <template v-slot:actions>
                    <v-icon small color="txtOnPrimary" v-show="!miniSide"
                      >mdi-chevron-down</v-icon
                    >
                  </template>
                </v-expansion-panel-header>

                <v-expansion-panel-content
                  class="ma-0 pa-0 transition-all duration-500 delay-1000 ease-in-out"
                  v-if="!miniSide"
                >
                  <v-list dense class="overflow-hidden">
                    <v-list-item
                      class="sideBar-item mb-1"
                      v-for="(li, i) in item.list"
                      :key="'item' + li.title + i"
                      :to="li.path"
                      exact-active-class="primary--text"
                      exact
                      dense
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          class="text-capitalize d-flex align-center justify-space-between"
                        >
                          <a class="txtOnPrimary--text">{{ li.title }}</a>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-list-item>

        <span
          v-if="!miniSide"
          class="d-block px-5 support--text my-2 font-weight-bold"
          >Employees</span
        >
        <v-list-item
          class="sideBar-item mx-0 py-0 px-5 transparent txtOnPrimary--text"
          v-for="(board, i) in boards"
          :key="'board2' + board.title + i"
          :to="!board.includeList ? { name: board.path || '' } : ''"
          active-class="active"
          link
          dense
          :class="{ 'mt-0': !miniSide, 'mt-6': i == 0 && miniSide }"
        >
          <template v-if="!board.includeList">
            <v-list-item-icon class="mx-1">
              <v-icon color="txtOnPrimary" v-text="board.action"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-if="!miniSide"
                class="d-flex align-center justify-space-between"
              >
                {{ board.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-else>
            <v-expansion-panels
              accordion
              tile
              class="elevation-0"
              :value="$route.path.includes(board.path) ? 0 : false"
            >
              <v-expansion-panel
                class="transparent elevation-0 txtOnPrimary--text"
              >
                <v-expansion-panel-header class="pa-0 px-2">
                  <v-row align="center">
                    <v-list-item-icon class="mx-1">
                      <v-icon
                        color="txtOnPrimary"
                        v-text="board.action"
                      ></v-icon>
                    </v-list-item-icon>
                    <span v-if="!miniSide" class="text-body-2">{{
                      board.title
                    }}</span>
                  </v-row>

                  <template v-slot:actions>
                    <v-icon small color="txtOnPrimary" v-show="!miniSide"
                      >mdi-chevron-down</v-icon
                    >
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ma-0 pa-0" v-if="!miniSide">
                  <v-list dense class="overflow-hidden">
                    <v-list-item
                      class="sideBar-item mb-1"
                      v-for="(li, i) in board.list"
                      :key="'board' + li.title + i"
                      :to="li.path"
                      exact-active-class="primary--text"
                      exact
                      dense
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          class="text-capitalize d-flex align-center justify-space-between"
                        >
                          <a class="txtOnPrimary--text">{{ li.title }}</a>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-list-item>

        <span
          v-if="!miniSide"
          class="d-block px-5 support--text my-2 font-weight-bold"
          >Pages</span
        >
        <v-list-item
          class="sideBar-item mx-0 py-0 px-5 transparent txtOnPrimary--text"
          v-for="(board, i) in boards"
          :key="'board3' + board.title + i"
          :to="!board.includeList ? { name: board.path || '' } : ''"
          active-class="active"
          link
          dense
          :class="{ 'mt-0': !miniSide, 'mt-6': i == 0 && miniSide }"
        >
          <template v-if="!board.includeList">
            <v-list-item-icon class="mx-1">
              <v-icon color="txtOnPrimary" v-text="board.action"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-if="!miniSide"
                class="d-flex align-center justify-space-between"
              >
                {{ board.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-else>
            <v-expansion-panels
              accordion
              tile
              class="elevation-0"
              :value="$route.path.includes(board.path) ? 0 : false"
            >
              <v-expansion-panel
                class="transparent elevation-0 txtOnPrimary--text"
              >
                <v-expansion-panel-header class="pa-0 px-2">
                  <v-row align="center">
                    <v-list-item-icon class="mx-1">
                      <v-icon
                        color="txtOnPrimary"
                        v-text="board.action"
                      ></v-icon>
                    </v-list-item-icon>
                    <span v-if="!miniSide" class="text-body-2">{{
                      board.title
                    }}</span>
                  </v-row>

                  <template v-slot:actions>
                    <v-icon small color="txtOnPrimary" v-show="!miniSide"
                      >mdi-chevron-down</v-icon
                    >
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="ma-0 pa-0" v-if="!miniSide">
                  <v-list dense class="overflow-hidden">
                    <v-list-item
                      class="sideBar-item mb-1"
                      v-for="(li, i) in board.list"
                      :key="'board' + li.title + i"
                      :to="li.path"
                      exact-active-class="primary--text"
                      exact
                      dense
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          class="text-capitalize d-flex align-center justify-space-between"
                        >
                          <a class="txtOnPrimary--text">{{ li.title }}</a>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  name: "sidebar",
  data: () => ({
    miniSide: false,
    items: [
      {
        action: "mdi-account-multiple",
        title: "Dashboard",
        path: "/test",
        includeList: true,
        list: [
          { title: "Admin Dashboard", path: "/gergt" },
          { title: "Employee Dashboard", path: "/geet" },
        ],
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        title: "Apps",
        includeList: true,
        list: [{ title: "All employees", path: "/page" }],
      },
    ],
    boards: [
      {
        action: "mdi-account-tie",
        title: "employees",
        // path: "/",
        includeList: true,
        list: [
          { title: "All employees", path: "/employees/all" },
          { title: "Department", path: "/Department" },
        ],
      },
      {
        action: "mdi-account-group",
        active: true,
        title: "Clients",
        includeList: false,
      },
      {
        action: "mdi-rocket-launch-outline",
        title: "Projects",
        // path: "/",
        includeList: true,
        list: [
          { title: "All employees", path: "/page11" },
          { title: "All employees", path: "/page11" },
        ],
      },
      {
        action: "mdi-account-multiple",
        title: "Leads",
        // path: "/",
        includeList: false,
      },
      {
        action: "mdi-ticket-outline",
        title: "Tickets",
        // path: "/",
        includeList: false,
      },
    ],
  }),
  watch: {
    "$store.state.drawerAll": {
      deep: true, // for arrays and objects
      handler() {
        const that = this as any;
        that.miniSide = that.$store.state.drawerAll.mini;
      },
    },
    "$vuetify.breakpoint.name": {
      immediate: true, // بتشتغل اول ما الصفحة تحمل
      deep: true, // for arrays and objects
      handler(): any {
        const that = this as any;
        const val = that.$vuetify.breakpoint.name;
        let drawer = Object.assign({}, that.$store.state.drawerAll); // copy of the object

        if (val == "xs" || val == "sm" || val == "md") {
          drawer.view = false;
        } else {
          drawer.view = true;
        }
        that.$store.commit("get_drawer", drawer);
      },
    },
  },
  methods: {
    open() {
      const that = this as any;
      const drawer = that.$store.state.drawerAll;
      if (drawer.mini) {
        that.miniSide = false;
      }
    },
    close() {
      const that = this as any;
      const drawer = that.$store.state.drawerAll;
      if (drawer.mini) {
        that.miniSide = true;
      }
    },
    // changg() {
    //   const width = window.innerWidth;
    //   if (width <= 991) {

    //   }
    // }
  },
};
</script>

<style lang="scss">
.sideBar {
  transition: all 0.5s ease;
  &.hide-scroll .v-navigation-drawer__content {
    overflow: hidden;
  }
}

.sideBar .v-list-item__icon {
  margin-right: 16px !important;
}

.sideBar .v-expansion-panel::before {
  box-shadow: none !important;
}

.sideBar .v-expansion-panel-content__wrap {
  padding: 0 !important;
  .v-list {
    .sideBar-item {
      margin-bottom: 12px !important;
      &::before {
        width: 80%;
        left: auto;
        right: auto;
      }
      .v-list-item__content {
        padding: 0 !important;
        .v-list-item__title {
          justify-content: center !important;
          a {
            padding-right: 50px;
          }
        }
      }
    }
  }
}

.sideBar .v-expansion-panel > .v-expansion-panel-header,
.sideBar .v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 35px !important;
}

.widd {
  width: 0px !important;
}
</style>
