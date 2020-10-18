<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form autocomplete="off" v-on:submit.prevent="register">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label"
                  >Enter Full Name:</label
                >
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
                <div class="col-md-6">
                  <input
                    id="name"
                    v-model="user.name"
                    type="text"
                    class="form-control"
                    name="full-name"
                    value=""
                  />
                </div>
              </div>

              <!-- <div class="col-md-6">
                <div class="form-group">
                  <div class="form-lable-group">
                    <input type="email" name="emal" id="email" v-model="user.email" class="form-control" placeholder="Email address">
                  </div>
                </div>
              </div> -->

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
                    v-model="user.email"
                    type="email"
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
              <div class="form-group row">
                <label for="password confirm" class="col-md-4 col-form-label"
                  >Password-confirm</label
                >
<div class="invalid-feedback" v-if="errors.password">
                  {{ errors.password[0] }}
                </div>
                <div class="col-md-6">
                  <input
                    id="password-confirm"
                    v-model="user.password_confirmation"
                    type="password"
                    class="form-control"
                    name="password-confirm"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
              <div class="text-center m-3">
                <router-link to="/login">Login ?</router-link><br />
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
  name: "Register", //this is good for vue dev tool to display and many
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    register: async function () {
      try {
        await auth.register(this.user);
        this.errors ={};//remove error from object
        this.$router.push('/login')
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 500:
             this.flashMessage.error({
              message:error.response.data.message ,
              time: 5000,
            });
            break;
          default:
            this.flashMessage.error({
              message: "Some error occurred, Please try again!",
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