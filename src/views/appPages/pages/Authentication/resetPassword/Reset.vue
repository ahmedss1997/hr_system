<template>
  <div>
    <v-img
      src="@/assets/imgs/logo2.png"
      contain
      max-width="100"
      class="mx-auto"
    ></v-img>
    <v-card class="mx-auto my-12 py-8 px-3" max-width="500">
      <v-sheet max-width="440" class="mx-auto">
        <v-icon
          v-if="currentIcon"
          v-text="currentIcon"
          class="ico rounded-circle d-block mx-auto my-2 mb-6 text-center"
          color="white"
        ></v-icon>
        <h1 class="text-center text-h6" v-html="currentTitle"></h1>

        <v-card-text class="py-2 px-0 text-subtitle-1 text-center">{{
          currentPargraph
        }}</v-card-text>
        <v-window v-model="step">
          <v-window-item :value="1">
            <v-form ref="createAccount">
              <span class="font-weight-bold d-inline-block px-0 my-3"
                >Email</span
              >
              <v-text-field
                label="Enter Email"
                solo
                v-model="CheckEmail.email"
                :rules="validRules.emailRules"
              ></v-text-field>

              <v-btn block class="py-6 primary" @click="SendEmail()">
                Reset Password
              </v-btn>
              <v-card-actions class="justify-center">
                <span class="px-0">Already have an account?</span>
                <v-btn
                  color="warning"
                  text
                  href="/Login"
                  class="px-0 text-capitalize"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-window-item>

          <v-window-item :value="2">
            <v-form ref="createAccount">
              <v-sheet class="my-2 mx-auto" max-width="80%">
                <v-otp-input
                  length="6"
                  :hide-details="false"
                  v-model="CheckEmail.verifyCode"
                  :rules="validRules.numberRules"
                ></v-otp-input>
              </v-sheet>

              <v-btn
                block
                min-width="50% !important"
                class="py-6 mx-auto my-3 primary"
                @click="Verify()"
              >
                Verify Code
              </v-btn>
              <v-card-actions class="justify-center">
                <span class="px-0">Already have an account?</span>
                <v-btn
                  color="warning"
                  text
                  href="/Login"
                  class="px-0 text-capitalize"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-window-item>

          <v-window-item :value="3">
            <v-form ref="createAccount">
              <span class="font-weight-bold d-inline-block px-0 my-3"
                >New Password</span
              >
              <v-text-field
                label="Enter Email"
                solo
                v-model="CheckEmail.password"
                :rules="validRules.passowrdRules"
              ></v-text-field>
              <span class="font-weight-bold d-inline-block px-0 my-3"
                >Repeat Password</span
              >
              <v-text-field
                label="Enter Email"
                solo
                :rules="repeatPasswordRules"
              ></v-text-field>

              <v-btn block class="py-6 primary" @click="ChangePassword()">
                Change Password
              </v-btn>
              <v-card-actions class="justify-center">
                <span class="px-0">Already have an account?</span>
                <v-btn
                  color="warning"
                  text
                  href="/Login"
                  class="px-0 text-capitalize"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-window-item>
          <v-window-item :value="4">
            <v-form ref="createAccount">
              <v-sheet class="my-2 mx-auto" max-width="80%">
                <v-btn block class="py-6 primary" href="/Login">
                  Let's go to login
                </v-btn>
              </v-sheet>
              <v-card-actions class="justify-center">
                <span class="px-0">Don't have account?</span>
                <v-btn
                  color="warning"
                  text
                  href="/signUp"
                  class="px-0 mx-2 text-capitalize"
                >
                  Register
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-window-item>
        </v-window>
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
        The Password Changed successfully
        <v-icon class="mx-2">mdi-check-bold</v-icon>
      </div>
    </v-snackbar>
  </div>
</template>

<script lang="ts" src="./reset"></script>

<style lang="scss">
.ico {
  width: 40px;
  height: 40px;
  line-height: 34px !important;
  background-color: #53b257;
  color: #fff !important;
}
</style>
