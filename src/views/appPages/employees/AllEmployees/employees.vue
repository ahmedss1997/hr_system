<template>
  <div class="content-emp transition-all duration-500 ease-in-out pt-15">
    <v-container fluid class="pt-8">
      <v-row no-gutters class="mb-7 px-3">
        <v-col cols="2" md="6" lg="8">
          <div class="breed-h">
            <h3>Employee</h3>
            <!-- <v-breadcrumbs :breeds="breeds" divider=">"></v-breadcrumbs> -->
          </div>
        </v-col>
        <v-col
          cols="10"
          md="6"
          lg="4"
          class="d-flex justify-end align-center px-3"
        >
          <div class="replacee px-4 py-2">
            <a
              @click="defalt()"
              class="bg-white pa-2 mr-3 rounded-lg text-lg border border-solid border-border-gray"
            >
              <v-icon class="primary--text">mdi-apps</v-icon>
            </a>
            <a
              @click="togglee()"
              class="bg-white pa-2 mr-1 rounded-lg text-lg border border-solid border-border-gray"
            >
              <v-icon class="primary--text">mdi-view-sequential</v-icon>
            </a>
          </div>
          <!-- Add Dialog -->
          <v-dialog v-model="dialog" persistent max-width="800" class="dig">
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
                Add Employee
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
                <h3 class="mt-4">Add Employee</h3>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-form ref="addForm">
                    <v-row>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >First Name</span
                        >
                        <v-text-field
                          v-model="newEmployee.firstName"
                          class=""
                          height="40"
                          label="Frist Name"
                          solo
                          :hide-details="false"
                          :rules="validationRules.textRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Last Name
                        </span>
                        <v-text-field
                          v-model="newEmployee.lastName"
                          class=""
                          height="40"
                          label="Last Name"
                          solo
                          :hide-details="false"
                          :rules="validationRules.textRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Username</span
                        >
                        <v-text-field
                          v-model="newEmployee.fulltName"
                          class=""
                          height="40"
                          label="Username"
                          solo
                          :hide-details="false"
                          :rules="validationRules.textRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Email</span
                        >
                        <v-text-field
                          v-model="newEmployee.email"
                          class=""
                          height="40"
                          label="Your Email"
                          solo
                          :hide-details="false"
                          :rules="validationRules.emailRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Password</span
                        >
                        <v-text-field
                          v-model="newEmployee.password"
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="false"
                          :rules="validationRules.passowrdRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Confirm Password</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="false"
                          :rules="repeatPasswordRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Employee ID</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="false"
                          :rules="validationRules.numberRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Joining Date</span
                        >
                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              label="Picker without buttons"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              solo
                              :hide-details="true"
                              class="relative"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            @input="menu2 = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Phone</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="false"
                          :rules="validationRules.numberRules"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Company</span
                        >
                        <v-select
                          :items="itemss"
                          label="Select Designation"
                          solo
                          :hide-details="true"
                          height="50"
                        ></v-select>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Department</span
                        >
                        <v-select
                          :items="itemss"
                          label="Select Designation"
                          solo
                          :hide-details="true"
                          height="50"
                        ></v-select>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Designation</span
                        >
                        <v-select
                          :items="itemss"
                          label="Select Designation"
                          solo
                          :hide-details="true"
                          height="50"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-form>

                  <v-btn
                    @click="addEmployee()"
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
      <v-row no-gutters class="my-4">
        <v-col cols="12" sm="6" md="3" class="px-3 mb-4">
          <v-text-field
            height="50"
            label="Employee ID"
            outlined
            dense
            :hide-details="true"
            class="txtOnPrimary"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="px-3 mb-4">
          <v-text-field
            height="50"
            label="employee Name"
            outlined
            dense
            :hide-details="true"
            class="txtOnPrimary"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="px-3 mb-4">
          <v-select
            :items="itemss"
            label="Select Designation"
            solo
            :hide-details="true"
            height="50"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="px-3 mb-4">
          <v-sheet
            class="primary pa-4 text-center d-flex justify-center align-center rounded"
            height="90%"
          >
            <a href="" class="text-uppercase txtOnPrimary--text">search</a>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        class="mb-4"
        :class="{ active: isActive, active2: !isActive }"
      >
        <v-col
          v-for="(infoEmployee, i) in infoEmployees"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="px-3 mb-8 rounded-xl"
        >
          <v-card width="400" height="auto">
            <v-sheet flat color="" class="text-right absolute right-2.5 top-0">
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
                    <!-- Edit dialog in boxes -->
                    <v-dialog
                      v-model="dialog2"
                      persistent
                      max-width="800"
                      class="dig"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-list-item
                          v-bind="attrs"
                          v-on="on"
                          @click="sendID(infoEmployee)"
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
                          <h3 class="mt-4">Edit Employee</h3>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-form ref="editFormBoxes">
                              <v-row>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >First Name</span
                                  >
                                  <v-text-field
                                    v-model="editEmployee.firstName"
                                    class=""
                                    height="40"
                                    label="Frist Name"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Last Name</span
                                  >
                                  <v-text-field
                                    v-model="editEmployee.lastName"
                                    class=""
                                    height="40"
                                    label="Solo"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Username</span
                                  >
                                  <v-text-field
                                    v-model="editEmployee.fullName"
                                    class=""
                                    height="40"
                                    label="Solo"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Email</span
                                  >
                                  <v-text-field
                                    v-model="editEmployee.email"
                                    class=""
                                    height="40"
                                    label="Solo"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Password</span
                                  >
                                  <v-text-field
                                    v-model="editEmployee.password"
                                    class=""
                                    height="40"
                                    label="Solo"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Confirm Password</span
                                  >
                                  <v-text-field
                                    v-model="editEmployee.password"
                                    class=""
                                    height="40"
                                    label="Solo"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Employee ID</span
                                  >
                                  <v-text-field
                                    class=""
                                    height="40"
                                    label="Solo"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Joining Date</span
                                  >
                                  <v-menu
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                                  >
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-text-field
                                        v-model="date"
                                        label="Picker without buttons"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                        solo
                                        :hide-details="false"
                                        class="relative"
                                      ></v-text-field>
                                    </template>
                                    <v-date-picker
                                      v-model="date"
                                      @input="menu2 = false"
                                    ></v-date-picker>
                                  </v-menu>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Phone</span
                                  >
                                  <v-text-field
                                    class=""
                                    height="40"
                                    label="Solo"
                                    solo
                                    :hide-details="false"
                                  ></v-text-field>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Company</span
                                  >
                                  <v-select
                                    :items="itemss"
                                    label="Select Designation"
                                    solo
                                    :hide-details="false"
                                    height="50"
                                  ></v-select>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Department</span
                                  >
                                  <v-select
                                    :items="itemss"
                                    label="Select Designation"
                                    solo
                                    :hide-details="false"
                                    height="50"
                                  ></v-select>
                                </v-col>
                                <v-col class="px-3 mb-4" cols="12" md="6">
                                  <span
                                    class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                    >Designation</span
                                  >
                                  <v-select
                                    :items="itemss"
                                    label="Select Designation"
                                    solo
                                    :hide-details="false"
                                    height="50"
                                  ></v-select>
                                </v-col>
                              </v-row>
                            </v-form>
                            <v-btn
                              class="primary txtOnPrimary--text text-capitalize font-bold text-h6 my-10 mx-auto pt-3 pb-4 px-10 d-block rounded-pill"
                              height="50"
                              width="200"
                              @click="changeData()"
                            >
                              Submit
                            </v-btn>
                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                    <!-- Delete Dialogs in Boxes -->
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
                          <h3 class="mt-4">Delete Employee</h3>
                        </v-card-title>
                        <v-card-text>
                          <p class="text-center text-base">
                            Are you sure want to delete?
                          </p>
                          <v-container>
                            <v-row no-gutters class="justify-center">
                              <div
                                @click="deleteEmployee(infoEmployee.id)"
                                class="shadow-none border-primary border-solid border hover:bg-primary hover:text-white text-primary transition-all duration-500 ease-in-out flex flex-none justify-center items-center text-capitalize font-bold text-h6 mx-3 rounded-pill w-52 h-12 cursor-pointer"
                              >
                                Delete
                              </div>
                              <div
                                @click="dialog2 = false"
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
            </v-sheet>

            <v-card-title class="white--text pa-2 d-flex justify-center">
              <v-avatar size="80" class="mt-6">
                <img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                />
              </v-avatar>
            </v-card-title>

            <v-card-text class="text-center">
              <h3 class="text-regal-blue">{{ infoEmployee.fullName }}</h3>
              <p>unKnown</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        class="mb-4 px-3"
        :class="{ active: !isActive, active2: isActive }"
      >
        <v-col cols="12">
          <div class="main-table w-full rounded-lg">
            <v-data-table
              :items="infoEmployees.slice((page - 1) * showNum, showNum * page)"
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
                        max-width="800"
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
                            <h3 class="mt-4">Edit Employee</h3>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-form ref="editFormBoxes">
                                <v-row>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >First Name</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label=""
                                      solo
                                      :hide-details="false"
                                      v-model="editEmployee.firstName"
                                      :rules="validationRules.textRules"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Last Name</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label="Solo"
                                      solo
                                      :hide-details="false"
                                      v-model="editEmployee.lastName"
                                      :rules="validationRules.textRules"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Username</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label="Solo"
                                      solo
                                      :hide-details="false"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Email</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label="Solo"
                                      solo
                                      :hide-details="false"
                                      v-model="editEmployee.email"
                                      :rules="validationRules.emailRules"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Password</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label="Solo"
                                      solo
                                      :hide-details="false"
                                      v-model="editEmployee.password"
                                      :rules="validationRules.passowrdRules"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Confirm Password</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label="Solo"
                                      solo
                                      :hide-details="false"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Employee ID</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label="Solo"
                                      solo
                                      :hide-details="false"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Joining Date</span
                                    >
                                    <v-menu
                                      v-model="menu2"
                                      :close-on-content-click="false"
                                      :nudge-right="40"
                                      transition="scale-transition"
                                      offset-y
                                      min-width="auto"
                                    >
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <v-text-field
                                          v-model="date"
                                          label="Picker without buttons"
                                          prepend-icon="mdi-calendar"
                                          readonly
                                          v-bind="attrs"
                                          v-on="on"
                                          solo
                                          :hide-details="false"
                                          class="relative"
                                        ></v-text-field>
                                      </template>
                                      <v-date-picker
                                        v-model="date"
                                        @input="menu2 = false"
                                      ></v-date-picker>
                                    </v-menu>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Phone</span
                                    >
                                    <v-text-field
                                      class=""
                                      height="40"
                                      label="Solo"
                                      solo
                                      :hide-details="false"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Company</span
                                    >
                                    <v-select
                                      :items="itemss"
                                      label="Select Designation"
                                      solo
                                      :hide-details="false"
                                      height="50"
                                    ></v-select>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Department</span
                                    >
                                    <v-select
                                      :items="itemss"
                                      label="Select Designation"
                                      solo
                                      :hide-details="false"
                                      height="50"
                                    ></v-select>
                                  </v-col>
                                  <v-col class="px-3 mb-4" cols="12" md="6">
                                    <span
                                      class="mb-2 d-inline-block font-medium textOnThirdy--text"
                                      >Designation</span
                                    >
                                    <v-select
                                      :items="itemss"
                                      label="Select Designation"
                                      solo
                                      :hide-details="false"
                                      height="50"
                                    ></v-select>
                                  </v-col>
                                  <v-btn
                                    class="primary txtOnPrimary--text text-capitalize font-bold text-h6 my-10 mx-auto pt-3 pb-4 px-10 d-block rounded-pill"
                                    height="50"
                                    width="200"
                                    @click="changeData()"
                                  >
                                    Submit
                                  </v-btn>
                                </v-row>
                              </v-form>
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
                            <h3 class="mt-4">Delete Employee</h3>
                          </v-card-title>
                          <v-card-text>
                            <p class="text-center text-base">
                              Are you sure want to delete?
                            </p>
                            <v-container>
                              <v-row no-gutters class="justify-center">
                                <div
                                  @click="deleteEmployee(props.item.id)"
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
                      :length="Math.ceil(infoEmployees.length / (showNum || 1))"
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
        <v-snackbar v-model="error.displayError" multi-line>
          <div v-if="error.errorCode" class="text-center">
            <v-chip color="error" size="20">{{ error.errorCode }}</v-chip>
            <span class="mx-2">{{ error.msg }}</span>
          </div>
          <div v-else class="text-center">
            <span class="mx-2">Something Went Wrong!</span>
          </div>

          <template v-slot:action="{ attrs }">
            <v-btn
              color="red"
              text
              v-bind="attrs"
              @click="error.displayError = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>

        <v-snackbar
          :timeout="2000"
          :value="true"
          fixed
          bottom
          color="success"
          elevation="24"
          v-model="dialoges.success"
        >
          <div class="text-center">
            Saved successfully <v-icon class="mx-2">mdi-check-bold</v-icon>
          </div>
        </v-snackbar>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" src="./employees"></script>
<style lang="scss" src="./employees.scss"></style>

<!-- .slice( (page - 1) * showNum, showNum * page) -->
