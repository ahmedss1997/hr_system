<template>
  <div class="content-emp">
    <v-container fluid pt-10>
      <v-row no-gutters></v-row>
      <v-row no-gutters class="px-4">
        <v-col cols="12" class="txtOnPrimary rounded-lg borderr">
          <v-row no-gutters class="relative">
            <v-dialog v-model="dialog4" persistent max-width="800" class="dig">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  icon
                  class="mx-1 my-2 primary"
                  absolute
                  top
                  right
                  v-bind="attrs"
                  v-on="on"
                  height="30"
                  width="30"
                >
                  <v-icon class="text-button">mdi-grease-pencil</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-actions>
                  <v-btn
                    absolute
                    top
                    right
                    class="primary rounded-circle pa-0"
                    @click="dialog4 = false"
                    height="20"
                    min-width="auto"
                    width="20"
                  >
                    <v-icon class="text-caption txtOnPrimary--text"
                      >mdi-close-thick</v-icon
                    >
                  </v-btn>
                </v-card-actions>
                <v-card-title
                  class="d-block justify-center text-h5 text-center"
                >
                  <h3 class="mt-4 mb-6">Profile Information</h3>
                  <v-sheet class="relative mb-3">
                    <v-avatar size="120" class="mt-3 mr-4 ml-2">
                      <img
                        alt="user"
                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                      />
                      <div
                        class="w-full bg-black txtOnPrimary--text opacity-50 bottom-0 absolute"
                      >
                        <span class="text-base inline-block mb-1.5">Edit</span>
                      </div>
                      <input
                        type="file"
                        class="absolute opacity-0 w-full bottom-0"
                      />
                    </v-avatar>
                  </v-sheet>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row no-gutters>
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
                          :hide-details="true"
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
                          :hide-details="true"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Birth Date</span
                        >
                        <v-menu
                          v-model="menu"
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
                            @input="menu = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Gender</span
                        >
                        <v-select
                          :items="items"
                          label="Select Designation"
                          solo
                          :hide-details="true"
                          height="50"
                        ></v-select>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Address</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="true"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >State</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="true"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Country</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="true"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Pin Code</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="true"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Phone Number</span
                        >
                        <v-text-field
                          class=""
                          height="40"
                          label="Solo"
                          solo
                          :hide-details="true"
                        ></v-text-field>
                      </v-col>
                      <v-col class="px-3 mb-4" cols="12" md="6">
                        <span
                          class="mb-2 d-inline-block font-medium textOnThirdy--text"
                          >Department
                        </span>
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
                          >Designation
                        </span>
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
                          >Reports To
                        </span>
                        <v-select
                          :items="itemss"
                          label="Select Designation"
                          solo
                          :hide-details="true"
                          height="50"
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-btn
                      class="primary txtOnPrimary--text text-capitalize font-bold text-h6 my-10 mx-auto pt-3 pb-4 px-10 d-block rounded-pill"
                      height="50"
                      width="200"
                      >Submit</v-btn
                    >
                  </v-container>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-col cols="12" sm="12" md="6" class="pa-4">
              <div
                class="half-info text-center text-sm-center text-md-left d-sm-block d-md-flex border-r-2 border-dashed border-dashbord-gray md:border-r-0 md:border-b-2 md:border-dashed md:border-dashbord-gray"
              >
                <v-avatar size="120" class="mt-3 mr-4 ml-2">
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
                <v-card-text class="pt-0">
                  <h2 class="text-h5 font-weight-medium">
                    {{ currentbody.fullName }}
                  </h2>
                  <p
                    class="text-body-2 font-weight-medium textOnSecondary--text"
                  >
                    UI/UX Design Team
                  </p>
                  <p
                    class="text-body-2 font-weight-medium textOnSecondary--text"
                  >
                    Web Designer
                  </p>
                  <h3 class="text-subtitle-2 font-weight-medium">
                    Employee ID : FT-0001
                  </h3>
                  <p
                    class="text-body-2 font-weight-medium textOnSecondary--text"
                  >
                    Date of Join : 1st Jan 2013
                  </p>
                  <v-btn depressed color="primary" class="text-capitalize"
                    >Send Message</v-btn
                  >
                </v-card-text>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div class="another-info">
                <ul class="mt-5">
                  <li class="d-flex mb-3">
                    <v-sheet class="w-1/4 md:w-2/5 font-weight-medium"
                      >Phone:</v-sheet
                    >
                    <v-sheet
                      class="w-3/4 md:w-3/5 md:text-sm font-weight-medium primary--text"
                    >
                      9876543210
                    </v-sheet>
                  </li>
                  <li class="d-flex mb-3">
                    <v-sheet class="w-1/4 md:w-2/5 font-weight-medium"
                      >Email:</v-sheet
                    >
                    <v-sheet
                      class="w-3/4 md:w-3/5 md:text-sm font-weight-medium primary--text"
                    >
                      {{ currentbody.email }}
                    </v-sheet>
                  </li>
                  <li class="d-flex mb-3">
                    <v-sheet class="w-1/4 md:w-2/5 font-weight-medium"
                      >Birthday:</v-sheet
                    >
                    <v-sheet
                      class="w-3/4 md:w-3/5 md:text-sm font-weight-medium textOnSecondary--text"
                    >
                      24th July
                    </v-sheet>
                  </li>
                  <li class="d-flex mb-3">
                    <v-sheet class="w-1/4 md:w-2/5 font-weight-medium"
                      >Address:</v-sheet
                    >
                    <v-sheet
                      class="w-3/4 md:w-3/5 md:text-sm font-weight-medium textOnSecondary--text"
                    >
                      1861 Bayonne Ave, Manchester Township, NJ, 08759
                    </v-sheet>
                  </li>
                  <li class="d-flex mb-3">
                    <v-sheet class="w-1/4 md:w-2/5 font-weight-medium"
                      >Gender:</v-sheet
                    >
                    <v-sheet
                      class="w-3/4 md:w-3/5 md:text-sm font-weight-medium textOnSecondary--text"
                    >
                      Male
                    </v-sheet>
                  </li>
                  <li class="d-flex mb-3">
                    <v-sheet class="w-1/4 md:w-2/5 font-weight-medium"
                      >Reports to:</v-sheet
                    >
                    <v-sheet class="w-3/4 md:w-3/5 md:text-sm">
                      <v-avatar size="30" class="mr-2">
                        <img
                          alt="user"
                          src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                        />
                      </v-avatar>
                      <span class="primary--text font-weight-medium">
                        Jeffery Lalor
                      </span>
                    </v-sheet>
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters class="px-4">
        <v-col cols="12" class="txtOnPrimary rounded-lg borderr">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <v-tab
              v-for="item in items"
              :key="item"
              class="flex-grow-0 text-capitalize"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-10">
        <v-col cols="12">
          <v-tabs-items v-model="tab" class="bgColor">
            <v-tab-item>
              <v-row no-gutters>
                <v-col cols="12" sm="12" md="6" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <ul class="mt-5">
                      <h3 class="mb-4">Personal Informations</h3>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Phone:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium primary--text"
                          width="75%"
                          >9876543210</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Email:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium primary--text"
                          width="75%"
                          >johndoe@example.com</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Birthday:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >24th July</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Address:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >1861 Bayonne Ave</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Gender:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >Male</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Reports to:</v-sheet
                        >
                        <v-sheet class="text-info" width="75%">test</v-sheet>
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Address:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >1861 Bayonne Ave</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Gender:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >Male</v-sheet
                        >
                      </li>
                    </ul>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <ul class="mt-5">
                      <h3 class="mb-4">Personal Informations</h3>
                      <h4 class="mb-3">Primary</h4>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Phone:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium primary--text"
                          width="75%"
                          >9876543210</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Email:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium primary--text"
                          width="75%"
                          >johndoe@example.com</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Birthday:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >24th July</v-sheet
                        >
                      </li>
                      <v-progress-linear
                        height="2"
                        buffer-value="90"
                        value="90"
                        class="my-5"
                      ></v-progress-linear>
                      <h4 class="mb-3">Secondary</h4>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Address:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >1861 Bayonne Av</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Gender:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >Male</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Reports to:</v-sheet
                        >
                        <v-sheet class="text-info" width="75%">testing</v-sheet>
                      </li>
                    </ul>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row no-gutters class="mb-5">
                <v-col cols="12" sm="12" md="6" class="px-4">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <ul class="mt-5">
                      <h3 class="mb-4">Personal Informations</h3>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Phone:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium primary--text"
                          width="75%"
                          >9876543210</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Email:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium primary--text"
                          width="75%"
                          >johndoe@example.com</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Birthday:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >24th July</v-sheet
                        >
                      </li>
                      <li class="d-flex mb-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Address:</v-sheet
                        >
                        <v-sheet
                          class="text-info font-weight-medium textOnSecondary--text"
                          width="75%"
                          >1861 Bayonne Av</v-sheet
                        >
                      </li>
                    </ul>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="px-4">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr pl-5"
                    height="100%"
                  >
                    <h3 class="mb-4 mt-5">Personal Informations</h3>
                    <v-progress-linear
                      height="1"
                      buffer-value="90"
                      value="90"
                      class="my-5"
                    ></v-progress-linear>
                    <ul class="d-flex pl-0">
                      <li class="d-inline mb-3 ml-3">
                        <v-sheet class="title-info font-weight-bold" width="25%"
                          >Phone</v-sheet
                        >
                      </li>
                      <li class="d-inline mb-3 ml-8">
                        <v-sheet class="title-info font-weight-bold" width="25%"
                          >Email</v-sheet
                        >
                      </li>
                      <li class="d-inline mb-3 ml-8">
                        <v-sheet class="title-info font-weight-bold" width="25%"
                          >Birthday</v-sheet
                        >
                      </li>
                      <li class="d-inline mb-3 ml-8">
                        <v-sheet class="title-info font-weight-bold" width="25%"
                          >Address</v-sheet
                        >
                      </li>
                    </ul>
                    <v-progress-linear
                      height="1"
                      buffer-value="90"
                      value="90"
                      class="my-3"
                    ></v-progress-linear>
                    <ul class="d-flex pl-0">
                      <li class="d-inline mb-3 ml-3">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Phone</v-sheet
                        >
                      </li>
                      <li class="d-inline mb-3 ml-8">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Email</v-sheet
                        >
                      </li>
                      <li class="d-inline mb-3 ml-8">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Birthday</v-sheet
                        >
                      </li>
                      <li class="d-inline mb-3 ml-8">
                        <v-sheet
                          class="title-info font-weight-medium"
                          width="25%"
                          >Address</v-sheet
                        >
                      </li>
                    </ul>
                  </v-sheet>
                </v-col>
              </v-row>
              <v-row no-gutters class="mb-5">
                <v-col cols="12" sm="12" md="6" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <ul class="mt-5">
                      <h3 class="mb-4">Personal Informations</h3>
                      <v-timeline dense>
                        <v-timeline-item
                          small
                          fill-dot
                          class="d-flex justify-end"
                        >
                          <h3 class="textOnThirdy--text">
                            International College of Arts and Science (UG)
                          </h3>
                          <p class="mb-0 textOnSecondary--text">
                            Bsc Computer Science
                          </p>
                          <span class="text-caption textOnSecondary--text"
                            >2000 - 2003</span
                          >
                        </v-timeline-item>
                        <v-timeline-item
                          small
                          fill-dot
                          class="d-flex justify-end"
                        >
                          <h3 class="textOnThirdy--text">
                            International College of Arts and Science (UG)
                          </h3>
                          <p class="mb-0 textOnSecondary--text">
                            Bsc Computer Science
                          </p>
                          <span class="text-caption textOnSecondary--text"
                            >2000 - 2003</span
                          >
                        </v-timeline-item>
                      </v-timeline>
                    </ul>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <ul class="mt-5 timeline-three">
                      <h3 class="mb-4">Personal Informations</h3>
                      <v-timeline dense>
                        <v-timeline-item
                          small
                          fill-dot
                          class="d-flex justify-end"
                        >
                          <h3 class="textOnThirdy--text">
                            International College of Arts and Science (UG)
                          </h3>
                          <p class="mb-0 textOnSecondary--text">
                            Bsc Computer Science
                          </p>
                        </v-timeline-item>
                        <v-timeline-item
                          small
                          fill-dot
                          class="d-flex justify-end"
                        >
                          <h3 class="textOnThirdy--text">
                            International College of Arts and Science (UG)
                          </h3>
                          <p class="mb-0 textOnSecondary--text">
                            Bsc Computer Science
                          </p>
                        </v-timeline-item>
                        <v-timeline-item
                          small
                          fill-dot
                          class="d-flex justify-end"
                        >
                          <h3 class="textOnThirdy--text">
                            International College of Arts and Science (UG)
                          </h3>
                          <p class="mb-0 textOnSecondary--text">
                            Bsc Computer Science
                          </p>
                        </v-timeline-item>
                      </v-timeline>
                    </ul>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <v-row no-gutters class="mb-5">
                <v-col cols="12" sm="12" md="3" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <v-card>
                      <v-card-text>
                        <v-sheet flat color="" class="text-right btn-holder">
                          <v-menu bottom left nudge-top="-40" min-width="160">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                dark
                                icon
                                v-bind="attrs"
                                v-on="on"
                                class="my-2 primary"
                              >
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item
                                v-for="(list, i) in lists"
                                :key="i"
                                link
                              >
                                <v-icon class="mx-1 text-h6">
                                  {{ list.iconn }}
                                </v-icon>
                                <v-list-item-title>{{
                                  list.title
                                }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-sheet>
                        <h3 class="text-h6 mb-2 black--text">
                          Office Management
                        </h3>
                        <h6 class="textOnSecondary--text text-subtitle-2 mb-4">
                          <span class="black--text">1 </span>
                          open tasks,
                          <span class="black--text">9 </span>
                          tasks completed
                        </h6>
                        <p class="textOnSecondary--text text-subtitle-2">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Deadline:</span
                          >
                          <span class="value d-block textOnSecondary--text"
                            >17 Apr 2019</span
                          >
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Project Leader :</span
                          >
                          <v-tooltip top>
                            <span>Top tooltip</span>
                            <template v-slot:activator="{ on, attrs }">
                              <v-sheet class="value" width="50">
                                <v-avatar
                                  size="25"
                                  class=""
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                  />
                                </v-avatar>
                              </v-sheet>
                            </template>
                          </v-tooltip>
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Team :</span
                          >
                          <span class="value">
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-avatar size="25" class="mr-2 primary">
                              <!-- <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg" > -->
                              <span
                                class="txtOnPrimary--text font-weight-medium"
                                style="font-size: 10px"
                                >+15</span
                              >
                            </v-avatar>
                          </span>
                        </p>
                        <div class="prog d-flex mb-4">
                          <span
                            class="flex-grow-1 black--text font-weight-medium"
                            >Progress</span
                          >
                          <span class="primary--text">40% </span>
                        </div>
                        <v-progress-linear value="40"></v-progress-linear>
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="12" md="3" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <v-card>
                      <v-card-text>
                        <v-sheet flat color="" class="text-right btn-holder">
                          <v-menu bottom left nudge-top="-40" min-width="160">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                dark
                                icon
                                v-bind="attrs"
                                v-on="on"
                                class="my-2 primary"
                              >
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item
                                v-for="(list, i) in lists"
                                :key="i"
                                link
                              >
                                <v-icon class="mx-1 text-h6">
                                  {{ list.iconn }}
                                </v-icon>
                                <v-list-item-title>{{
                                  list.title
                                }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-sheet>
                        <h3 class="text-h6 mb-2 black--text">
                          Office Management
                        </h3>
                        <h6 class="textOnSecondary--text text-subtitle-2 mb-4">
                          <span class="black--text">1 </span>open tasks,<span
                            class="black--text"
                          >
                            9 </span
                          >tasks completed
                        </h6>
                        <p class="textOnSecondary--text text-subtitle-2">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Deadline:</span
                          >
                          <span class="value d-block textOnSecondary--text"
                            >17 Apr 2019
                          </span>
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Project Leader :</span
                          >
                          <v-tooltip top>
                            <span>Top tooltip</span>
                            <template v-slot:activator="{ on, attrs }">
                              <v-sheet class="value" width="50">
                                <v-avatar
                                  size="25"
                                  class=""
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                  />
                                </v-avatar>
                              </v-sheet>
                            </template>
                          </v-tooltip>
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Team :</span
                          >
                          <span class="value">
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-avatar size="25" class="mr-2 primary">
                              <!-- <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg" > -->
                              <span
                                class="txtOnPrimary--text font-weight-medium"
                                style="font-size: 10px"
                                >+15</span
                              >
                            </v-avatar>
                          </span>
                        </p>
                        <div class="prog d-flex mb-4">
                          <span
                            class="flex-grow-1 black--text font-weight-medium"
                            >Progress
                          </span>
                          <span class="primary--text">40% </span>
                        </div>
                        <v-progress-linear value="40"></v-progress-linear>
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="12" md="3" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <v-card>
                      <v-card-text>
                        <v-sheet flat color="" class="text-right btn-holder">
                          <v-menu bottom left nudge-top="-40" min-width="160">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                dark
                                icon
                                v-bind="attrs"
                                v-on="on"
                                class="my-2 primary"
                              >
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item
                                v-for="(list, i) in lists"
                                :key="i"
                                link
                              >
                                <v-icon class="mx-1 text-h6">
                                  {{ list.iconn }}
                                </v-icon>
                                <v-list-item-title>{{
                                  list.title
                                }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-sheet>
                        <h3 class="text-h6 mb-2 black--text">
                          Office Management
                        </h3>
                        <h6 class="textOnSecondary--text text-subtitle-2 mb-4">
                          <span class="black--text">1 </span>open tasks,<span
                            class="black--text"
                          >
                            9 </span
                          >tasks completed
                        </h6>
                        <p class="textOnSecondary--text text-subtitle-2">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Deadline:</span
                          >
                          <span class="value d-block textOnSecondary--text"
                            >17 Apr 2019
                          </span>
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Project Leader :</span
                          >
                          <v-tooltip top>
                            <span>Top tooltip</span>
                            <template v-slot:activator="{ on, attrs }">
                              <v-sheet class="value" width="50">
                                <v-avatar
                                  size="25"
                                  class=""
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                  />
                                </v-avatar>
                              </v-sheet>
                            </template>
                          </v-tooltip>
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Team :</span
                          >
                          <span class="value">
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-avatar size="25" class="mr-2 primary">
                              <!-- <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg" > -->
                              <span
                                class="txtOnPrimary--text font-weight-medium"
                                style="font-size: 10px"
                                >+15</span
                              >
                            </v-avatar>
                          </span>
                        </p>
                        <div class="prog d-flex mb-4">
                          <span
                            class="flex-grow-1 black--text font-weight-medium"
                            >Progress
                          </span>
                          <span class="primary--text">40% </span>
                        </div>
                        <v-progress-linear value="40"></v-progress-linear>
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-col>
                <v-col cols="12" sm="12" md="3" class="px-4 mb-5">
                  <v-sheet
                    class="another-info txtOnPrimary rounded-lg borderr"
                    height="100%"
                  >
                    <v-card>
                      <v-card-text>
                        <v-sheet flat color="" class="text-right btn-holder">
                          <v-menu bottom left nudge-top="-40" min-width="160">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                dark
                                icon
                                v-bind="attrs"
                                v-on="on"
                                class="my-2 primary"
                              >
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item
                                v-for="(list, i) in lists"
                                :key="i"
                                link
                              >
                                <v-icon class="mx-1 text-h6">
                                  {{ list.iconn }}
                                </v-icon>
                                <v-list-item-title>{{
                                  list.title
                                }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-sheet>
                        <h3 class="text-h6 mb-2 black--text">
                          Office Management
                        </h3>
                        <h6 class="textOnSecondary--text text-subtitle-2 mb-4">
                          <span class="black--text">1 </span>open tasks,<span
                            class="black--text"
                          >
                            9 </span
                          >tasks completed
                        </h6>
                        <p class="textOnSecondary--text text-subtitle-2">
                          Lorem Ipsum is simply dummy text of the and
                          typesetting industry. When an unknown printer took a
                          galley of type and scrambled it...
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Deadline:</span
                          >
                          <span class="value d-block textOnSecondary--text"
                            >17 Apr 2019
                          </span>
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Project Leader :</span
                          >
                          <v-tooltip top>
                            <span>Top tooltip</span>
                            <template v-slot:activator="{ on, attrs }">
                              <v-sheet class="value" width="50">
                                <v-avatar
                                  size="25"
                                  class=""
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                  <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                  />
                                </v-avatar>
                              </v-sheet>
                            </template>
                          </v-tooltip>
                        </p>
                        <p>
                          <span
                            class="name d-block black--text font-weight-medium"
                            >Team :</span
                          >
                          <span class="value">
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-tooltip top>
                              <span>Top tooltip</span>
                              <template v-slot:activator="{ on, attrs }">
                                <span class="value">
                                  <v-avatar
                                    size="25"
                                    class="mr-2"
                                    v-bind="attrs"
                                    v-on="on"
                                  >
                                    <img
                                      alt="user"
                                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                  </v-avatar>
                                </span>
                              </template>
                            </v-tooltip>
                            <v-avatar size="25" class="mr-2 primary">
                              <!-- <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg" > -->
                              <span
                                class="txtOnPrimary--text font-weight-medium"
                                style="font-size: 10px"
                                >+15</span
                              >
                            </v-avatar>
                          </span>
                        </p>
                        <div class="prog d-flex mb-4">
                          <span
                            class="flex-grow-1 black--text font-weight-medium"
                            >Progress
                          </span>
                          <span class="primary--text">40% </span>
                        </div>
                        <v-progress-linear value="40"></v-progress-linear>
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" src="./Profile"></script>
<!-- <style lang="scss" src="./Profile.scss"></style> -->

<style lang="scss">
.borderr {
  border: 1px solid #ededed !important;
}

.another-info {
  .title-info {
    @media (max-width: 991px) {
      width: 40% !important;
    }
  }
  .text-info {
    @media (max-width: 991px) {
      width: 60% !important;
      font-size: 14px;
    }
  }
  .v-timeline {
    &::before {
      height: 85%;
      left: 9px !important;
      background-color: #4d77ff;
    }
    .v-timeline-item {
      position: relative;
      bottom: 30px;
      .v-timeline-item__body {
        padding-left: 24px;
      }
      .v-timeline-item__divider {
        min-width: 20px;
        .v-timeline-item__dot {
          position: relative;
          bottom: 25px;
          left: 0px;
          width: 14px;
          height: 14px;
        }
      }
    }
  }
  .timeline-three {
    .v-timeline-item__dot {
      bottom: 14px !important;
    }
  }
}

.v-tabs-slider-wrapper {
  color: #4d77ff;
}

.v-input__prepend-outer {
  position: absolute;
  right: 8px;
  z-index: 10;
  i {
    color: #4d77ff !important;
  }
}
</style>
