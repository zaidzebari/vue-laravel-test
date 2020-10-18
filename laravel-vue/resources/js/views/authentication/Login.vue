<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form autocomplete="off" v-on:submit.prevent="login">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label"
                  >E-mail</label
                >
                <div class="invalid-feedback" v-if="errors.email">
                  {{ errors.email[0] }}
                </div>
                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    v-model="user.email"
                    class="form-control"
                    name="email"
                    value=""
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label"
                  >Password</label
                >
                <div class="invalid-feedback" v-if="errors.password">
                  {{ errors.password[0] }}
                </div>
                <div class="col-md-6">
                  <input
                    id="password"
                    v-model="user.password"
                    type="password"
                    class="form-control"
                    name="password"
                  />
                </div>
              </div>
              <div class="form-group text-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="user.remember_me"
                  name="remember"
                  id="remember"
                />
                <label class="form-check-label" for="remember">
                  Rememver me
                </label>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </div>
              <div class="text-center m-3">
                <router-link to="/register">Register ?</router-link><br />
                <router-link to='/reset-password-request'
                  >Forget password ?</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as auth from "../../services/auth_service";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember_me: false,
      },
      errors: {},
    };
  },
  methods: {
    login: async function () {
      try {
        const response = await auth.login(this.user);
        console.log(response.data);
        this.errors = {};
        this.$router.push("/home"); //push user to home
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 500:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000,
            });
            break;
          case 401:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000,
            });
            break;
          default:
            console.log(error.response.status);
            this.flashMessage.error({
              message: "error happen please try again",
              time: 5000,
            });
            break;
        }
      }
    },
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#DDDDFA";
  },
};
</script>