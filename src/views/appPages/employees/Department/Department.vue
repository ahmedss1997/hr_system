<template>
  <div class="depart pb-4 pt-15 mt-6">
    <v-container fluid>
      <v-row class="mb-7 px-3">
        <v-col cols="2" md="6" lg="8">
          <div class="breed-h">
            <h3 class="primary--text text-h6">Department</h3>
            <!-- <v-breadcrumbs :breeds="breeds" divider=">"></v-breadcrumbs> -->
          </div>
        </v-col>
        <v-col
          cols="10"
          md="6"
          lg="4"
          class="d-flex justify-end align-center px-3"
        >
          <!-- Add Dialog -->
          <v-dialog v-model="dialog" persistent max-width="500" class="dig">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="primary txtOnPrimary--text font-weight-bold text-capitalize rounded-xl px-3 py-2"
                height="41"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="txtOnPrimary--text text-h6"
                  >mdi-plus-thick</v-icon
                >
                Add Department
              </v-btn>
            </template>
            <v-card>
              <v-card-actions>
                <v-btn
                  absolute
                  top
                  right
                  class="primary rounded-circle pa-0"
                  @click="dialog = false"
                  height="20"
                  min-width="auto"
                  width="20"
                >
                  <v-icon class="text-caption txtOnPrimary--text"
                    >mdi-close-thick</v-icon
                  >
                </v-btn>
              </v-card-actions>
              <v-card-title class="d-flex justify-center text-h5">
                <h3 class="mt-4">Add Department</h3>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-form ref="addForm">
                    <v-row>
                      <v-col class="px-3 mb-4" cols="12">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Department Name En</span
                        >
                        <v-text-field
                          v-model="newDepart.enName"
                          class=""
                          height="40"
                          solo
                          :hide-details="false"
                          :rules="validationRules.textRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Department Name Ar</span
                        >
                        <v-text-field
                          v-model="newDepart.arName"
                          class=""
                          height="40"
                          solo
                          :hide-details="false"
                          :rules="validationRules.textRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                  <v-btn
                    @click="AddDepartment()"
                    class="primary txtOnPrimary--text text-capitalize font-bold text-h6 my-10 mx-auto pt-3 pb-4 px-10 d-block rounded-pill"
                    height="50"
                    width="200"
                  >
                    Submit
                  </v-btn>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row class="px-3">
        <v-col cols="12">
          <div class="main-table w-full rounded-lg">
            <v-data-table
              :items="
                allDepartments.slice((page - 1) * showNum, showNum * page)
              "
              :headers="headers"
              hide-default-footer
            >
              <template v-slot:[`item.Action`]="props">
                <v-menu bottom left nudge-top="-40" min-width="160">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      icon
                      v-bind="attrs"
                      v-on="on"
                      class="mx-1 my-2 primary"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list>
                      <!-- Edit dialog in tables  -->
                      <v-dialog
                        v-model="dialog2"
                        persistent
                        max-width="500"
                        class="dig"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-list-item
                            v-bind="attrs"
                            v-on="on"
                            @click="sendID(props.item)"
                          >
                            <v-icon class="mx-1 text-h6">
                              mdi-grease-pencil
                            </v-icon>
                            <v-list-item-title> Edit </v-list-item-title>
                          </v-list-item>
                        </template>
                        <v-card>
                          <v-card-actions>
                            <v-btn
                              absolute
                              top
                              right
                              class="primary rounded-circle pa-0"
                              @click="dialog2 = false"
                              height="20"
                              min-width="auto"
                              width="20"
                            >
                              <v-icon class="text-caption txtOnPrimary--text"
                                >mdi-close-thick</v-icon
                              >
                            </v-btn>
                          </v-card-actions>
                          <v-card-title class="d-flex justify-center text-h5">
                            <h3 class="mt-4">Edit Department</h3>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-form ref="editFormDepart">
                                <v-row>
                                  <v-col class="px-3 mb-4" cols="12">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Department Name En</span
                                    >
                                    <v-text-field
                                      v-model="editDepart.enName"
                                      class=""
                                      height="40"
                                      solo
                                      :hide-details="false"
                                      :rules="validationRules.textRules"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Department Name Ar</span
                                    >
                                    <v-text-field
                                      v-model="editDepart.arName"
                                      class=""
                                      height="40"
                                      solo
                                      :hide-details="false"
                                      :rules="validationRules.textRules"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-form>
                              <v-btn
                                class="primary txtOnPrimary--text text-capitalize font-bold text-h6 my-10 mx-auto pt-3 pb-4 px-10 d-block rounded-pill"
                                height="50"
                                width="200"
                                @click="changeDepart()"
                              >
                                Submit
                              </v-btn>
                            </v-container>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                      <!-- dialog in tables Delete -->
                      <v-dialog
                        v-model="dialog3"
                        persistent
                        max-width="560"
                        class="dig"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-list-item v-bind="attrs" v-on="on">
                            <v-icon class="mx-1 text-h6">
                              mdi-delete-forever-outline
                            </v-icon>
                            <v-list-item-title>Delete</v-list-item-title>
                          </v-list-item>
                        </template>
                        <v-card>
                          <v-card-actions>
                            <v-btn
                              absolute
                              top
                              right
                              class="primary rounded-circle pa-0"
                              @click="dialog3 = false"
                              height="20"
                              min-width="auto"
                              width="20"
                            >
                              <v-icon class="text-caption txtOnPrimary--text"
                                >mdi-close-thick</v-icon
                              >
                            </v-btn>
                          </v-card-actions>
                          <v-card-title class="d-flex justify-center text-h5">
                            <h3 class="mt-4">Delete Department</h3>
                          </v-card-title>
                          <v-card-text>
                            <p class="text-center text-base">
                              Are you sure want to delete?
                            </p>
                            <v-container>
                              <v-row no-gutters class="justify-center">
                                <div
                                  @click="DeleteDepartment(props.item.id)"
                                  class="shadow-none border-primary border-solid border hover:bg-primary hover:text-white text-primary transition-all duration-500 ease-in-out flex flex-none justify-center items-center text-capitalize font-bold text-h6 mx-3 rounded-pill w-52 h-12 cursor-pointer"
                                >
                                  Delete
                                </div>
                                <div
                                  @click="dialog3 = false"
                                  class="shadow-none border-primary border-solid border hover:bg-primary hover:text-white text-primary transition-all duration-500 ease-in-out flex flex-none justify-center items-center text-capitalize font-bold text-h6 mx-3 rounded-pill w-52 h-12 cursor-pointer"
                                >
                                  Cancel
                                </div>
                              </v-row>
                            </v-container>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                    </v-list>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </div>
          <div class="foot-table w-full mt-4">
            <v-row no-gutters class="align-center">
              <v-col cols="4" class="d-flex align-center">
                <span class="mx-3">Go</span>
                <v-sheet max-width="60" color="transparent">
                  <v-text-field
                    v-model="page"
                    solo
                    dense
                    hide-details
                    @input="page = parseInt(page)"
                    type="number"
                  ></v-text-field>
                </v-sheet>
              </v-col>
              <v-col cols="4">
                <template>
                  <div class="text-center">
                    <v-pagination
                      v-model="page"
                      :total-visible="5"
                      :length="
                        Math.ceil(allDepartments.length / (showNum || 1))
                      "
                      circle
                    ></v-pagination>
                  </div>
                </template>
              </v-col>
              <v-col cols="4">
                <div
                  class="d-inline-flex align-center justify-center py-4 w-full"
                >
                  <span class="">Show</span>
                  <v-select
                    v-model="showNum"
                    :items="showPerPage"
                    solo
                    dense
                    hide-details
                    class="mx-3 w-20 block flex-none rounded-lg"
                  ></v-select>
                  <span>Entries</span>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" src="./Department"></script>
<style lang="scss" src="./Department.scss"></style>
