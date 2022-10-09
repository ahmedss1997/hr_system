<template>
  <div class="depart py-4 mt-6">
    <v-container fluid>
      <v-row no-gutters class="mb-7 px-3">
        <v-col cols="2" md="6" lg="8">
          <div class="breed-h">
            <h3 class="font-medium text-2xl primary--text">Department</h3>
            <!-- <v-breadcrumbs :breeds="breeds" divider=">"></v-breadcrumbs> -->
          </div>
        </v-col>
        <v-col
          cols="10"
          md="6"
          lg="4"
          class="d-flex justify-end align-center px-3"
        >
          <v-btn
            class="primary txtOnPrimary--text font-weight-bold text-capitalize rounded-xl px-3 py-2"
            height="41"
            @click="overlay = !overlay"
          >
            <v-icon class="txtOnPrimary--text text-h6">mdi-plus-thick</v-icon>
            Add Department
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters class="px-3">
        <div class="d-inline-flex align-center py-4 w-full">
          <span>Show</span>
          <v-select
            v-model="showNum"
            :items="showPerPage"
            solo
            dense
            hide-details
            class="mx-3 w-24 block flex-none rounded-lg"
          ></v-select>
          <span>Entries</span>
        </div>
        <div class="main-table w-full rounded-lg">
          <table class="w-full txtOnPrimary rounded-lg">
            <thead class="h-14">
              <tr>
                <th class="text-left px-6">#</th>
                <th class="text-left px-3 primary--text">Department Name</th>
                <th class="text-right px-6 primary--text">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(dessert, i) in desserts.slice(
                  (page - 1) * showNum,
                  showNum * page
                )"
                :key="i"
                class="h-14"
              >
                <th class="text-left px-6">{{ dessert.num }}</th>
                <th class="text-left px-3">{{ dessert.departeName }}</th>
                <th class="text-right px-6">
                  <v-menu bottom left nudge-top="-40" min-width="160">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        dark
                        icon
                        v-bind="attrs"
                        v-on="on"
                        class="mx-1 my-2 primary"
                      >
                        <v-icon>{{ dessert.icon }}</v-icon>
                      </v-btn>
                    </template>

                    <v-list>
                      <v-list-item v-for="(list, i) in lists" :key="i" link>
                        <v-icon class="mx-1 text-h6"> {{ list.iconn }} </v-icon>
                        <v-list-item-title>{{ list.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="foot-table w-full mt-4">
          <v-row no-gutters>
            <v-col cols="6" class="">
              <!-- <p>Showing 1 to 6 of 6 entries</p> -->
              <span>Showing {{ page * numPages - (numPages - 1) }}</span>
              <span class="mx-1">To {{ page * numPages }}</span>
              <span class="mx-1">Of {{ desserts.length }}</span>
              <span>Entries</span>
            </v-col>
            <v-col cols="6">
              <v-sheet
                class="d-flex align-center justify-end"
                color="transparent"
              >
                <v-sheet
                  class="d-flex rounded border border-solid border-border-gray"
                >
                  <v-btn text @click="page--" :disabled="page <= 1"
                    >Previous</v-btn
                  >
                  <v-btn
                    class="fill-height primary px-3 txtOnPrimary--text rounded-0"
                    min-width="30"
                  >
                    {{ page }}
                  </v-btn>
                  <v-btn text @click="page++" :disabled="page >= numPages"
                    >Next</v-btn
                  >
                </v-sheet>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" src="./Department"></script>
<style lang="scss" src="./Department.scss"></style>
