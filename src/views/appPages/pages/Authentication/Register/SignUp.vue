<template>
  <div class="signin primary fill-height">
    <div class="overlay py-6">
      <v-img
        src="@/assets/imgs/logo.png"
        contain
        max-width="80"
        class="mx-auto"
      ></v-img>
      <v-card
        class="mx-auto mt-6 py-3 px-3 txtOnPrimary--text"
        elevation="24"
        color="txtOnPrimary"
        max-width="500"
        rounded="xl"
      >
        <v-sheet max-width="440" class="mx-auto" color="transparent">
          <h1 class="text-center secondary--text">Register</h1>

          <v-card-text
            class="pb-3 pt-0 px-0 secondary--text text-subtitle-1 text-center"
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
              background-color=""
            ></v-text-field>
            <v-text-field
              label="Last Name"
              filled
              v-model="newAccount.lastName"
              :rules="validationRules.textRules"
              flat
              dense
              rounded
              background-color=""
            ></v-text-field>
            <v-text-field
              label="Enter Email"
              v-model="newAccount.email"
              :rules="validationRules.emailRules"
              filled
              flat
              dense
              rounded
              background-color=""
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
              background-color=""
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
              background-color=""
            ></v-text-field>
            <v-btn
              block
              rounded
              class="py-6 secondary"
              @click="createAccount()"
            >
              Register
            </v-btn>
            <v-card-actions class="justify-center secondary--text">
              <span class="px-0">Already have an account?</span>
              <router-link to="/logIn">
                <v-btn color="primary" text class="px-0 text-capitalize">
                  Login
                </v-btn>
              </router-link>
            </v-card-actions>
          </v-form>
        </v-sheet>
      </v-card>
    </div>

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

<style lang="scss">
.signin {
  background: url("../../../../../assets/imgs/back.jpg");
  background-size: cover;
  .overlay {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(17, 1, 31, 0.9)
    );
  }
}
</style>
