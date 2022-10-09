<template>
  <div class="darkPrimary py-6 fill-height">
    <v-img
      src="@/assets/imgs/logo.png"
      contain
      max-width="80"
      class="mx-auto"
    ></v-img>
    <v-card
      class="mx-auto mt-6 py-3 px-3 txtOnPrimary--text"
      elevation="24"
      color="primary"
      max-width="500"
      rounded="xl"
    >
      <v-sheet max-width="440" class="mx-auto" color="transparent">
        <h1 class="text-center txtOnPrimary--text">Register</h1>

        <v-card-text
          class="pb-3 pt-0 px-0 txtOnPrimary--text text-subtitle-1 text-center"
          >Access to our dashboard</v-card-text
        >
        <v-form ref="createAccount">
          <!--<span class="font-weight-bold px-0">First Name</span>-->
          <v-text-field
            label="First Name"
            v-model="newAccount.firstName"
            :rules="validationRules.textRules"
            filled
            flat
            dense
            rounded
            background-color="txtOnPrimary"
          ></v-text-field>
          <v-text-field
            label="Last Name"
            filled
            v-model="newAccount.lastName"
            :rules="validationRules.textRules"
            flat
            dense
            rounded
            background-color="txtOnPrimary"
          ></v-text-field>
          <v-text-field
            label="Enter Email"
            v-model="newAccount.email"
            :rules="validationRules.emailRules"
            filled
            flat
            dense
            rounded
            background-color="txtOnPrimary"
          ></v-text-field>
          <v-text-field
            label="Enter Password"
            v-model="newAccount.password"
            type="password"
            :rules="validationRules.passowrdRules"
            filled
            flat
            dense
            rounded
            background-color="txtOnPrimary"
          ></v-text-field>
          <v-text-field
            label="Repeat Password"
            v-model="newAccount.repeatPass"
            :rules="repeatPasswordRules"
            type="password"
            filled
            flat
            dense
            rounded
            background-color="txtOnPrimary"
          ></v-text-field>
          <v-btn
            block
            rounded
            class="py-6 lightSupport"
            @click="createAccount()"
          >
            Register
          </v-btn>
          <v-card-actions class="justify-center txtOnPrimary--text">
            <span class="px-0">Already have an account?</span>
            <v-btn
              color="darkPrimary"
              text
              href="Login/"
              class="px-0 text-capitalize"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-sheet>
    </v-card>

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
  </div>
</template>

<script lang="ts" src="./signUp"></script>

<style></style>
