<template>
  <v-container class="login" fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style scoped>
.login {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.7) 20%,
      rgba(1, 1, 1, 0.7) 20% 100%
    ),
    url("~@/assets/img/money.jpg");
  background-size: cover;
}
.login-box {
  height: 100%;
}
</style>
