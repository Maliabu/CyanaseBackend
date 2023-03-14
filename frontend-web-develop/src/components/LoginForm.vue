<template>
  <v-form
    ref="form"
    class="px-3 px-sm-10 mx-sm-10 py-12 login-form"
    v-model="valid"
    lazy-validation
  >
    <h2 class="display-2 white--text text-center mb-4">Log In</h2>
    <v-alert
      v-model="displayError"
      dismissible
      type="error"
      transition="scroll-y-transition"
      >Invalid phone number or password</v-alert
    >
    <v-text-field
      id="login-email-field"
      class="headline mb-6"
      outlined
      prepend-inner-icon="mdi-email"
      dark
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>
    <v-text-field
      id="login-password-field"
      class="headline"
      dark
      outlined
      prepend-inner-icon="mdi-lock"
      v-model="password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="passwordRules(6)"
      :type="show ? 'text' : 'password'"
      label="Password"
      @click:append="show = !show"
      required
    ></v-text-field>
    <v-row justify="center">
      <v-col cols="12" md="5" class="mb-4">
        <v-btn
          link
          rounded
          large
          @click="login"
          depressed
          color="green accent-3"
          :loading="isLoading"
          block
          class="title login-btn"
          :disabled="!valid"
        >
          <i class="mdi mdi-login"></i> &nbsp;login
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "login-form",
  data: () => ({
    displayError: false,
    loading: false,
    valid: false,
    show: false,
    phoneNumber: "",
    email: "",
    emailRules: [
      email => !!email || "E-mail is required",
      email => /.+@.+\..+/.test(email) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: len => [
      passwordField =>
        (passwordField || "").length >= len ||
        `Password too short, requires at least ${len} characters`,
      password => !!password || "Password is required"
    ],
    required: [field => !!field || "This field is required"]
  }),
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("login", data)
        .then(() => {
          if (this.isLoggedIn == true) {
            this.$router.replace("/home");
          } else {
            this.displayError = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["loginError", "isLoading", "isLoggedIn"])
  },

  updated() {
    if (this.email === "" || this.password === "") this.valid = false;
  }
};
</script>
<style>
.login-form {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
}
.login-btn {
  opacity: 0.6;
}
</style>
