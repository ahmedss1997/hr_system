<template>
  <div class="log fill-height">
    <div class="overlay py-6 pb-15">
      <v-img
        src="@/assets/imgs/logo.png"
        contain
        max-width="100"
        class="mx-auto my-8"
      ></v-img>
      <v-card class="mx-auto py-8 px-3" max-width="500">
        <v-sheet max-width="440" class="mx-auto">
          <h1 class="text-center secondary--text text-h6 font-weight-medium">
            Login
          </h1>

          <v-card-text
            class="py-2 px-0 text-h6 text-center secondary--text font-weight-medium"
            >Access to our dashboard</v-card-text
          >
          <v-form ref="createAccount">
            <span class="font-weight-bold px-0 my-2 d-block">Email</span>
            <v-text-field
              label="Enter Email"
              solo
              v-model="SameAccount.email"
              :rules="validRules.emailRules"
            ></v-text-field>

            <div class="d-flex mb-2">
              <span class="font-weight-bold px-0 flex-grow-1 my-2"
                >Password</span
              >
              <router-link to="/reset">Forgot password?</router-link>
            </div>
            <v-text-field
              label="Enter Password"
              solo
              v-model="SameAccount.password"
              :rules="validRules.passowrdRules"
              type="password"
            ></v-text-field>

            <v-btn block class="py-6 primary" @click="LoginAccount()">
              Login
            </v-btn>
            <v-card-actions class="justify-center">
              <span class="px-0 secondary--text">Don't have account?</span>
              <router-link to="/signUp">
                <v-btn color="primary" text class="px-0 text-capitalize mx-2">
                  Register
                </v-btn>
              </router-link>
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
    </div>
  </div>
</template>

<script lang="ts" src="./logIn"></script>

<style lang="scss">
.log {
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

a {
  text-decoration: none;
}
</style>
