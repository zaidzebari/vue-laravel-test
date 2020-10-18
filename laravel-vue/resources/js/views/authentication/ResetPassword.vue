<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Reset Password</div>

          <div class="card-body">
            <form autocomplete="off" v-on:submit.prevent="resetPassword">
              <div class="text-center">
                <h3>Set the code</h3>
                <p>
                  Visit your email that you entered and write code here
                </p>
              </div>
              <div class="form-group row">
                <div class="col-12">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value=""
                    placeholder="Enter email address"
                    v-model="user.email"
                  />
                  <div class="invalid-feedback" v-if="errors.email">
                    {{ errors.email[0] }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12">
                  <input
                    id="verification_code"
                    type="number"
                    class="form-control"
                    name="virificationCode"
                    value=""
                    placeholder="Enter verification Code"
                    v-model="user.verification_code"
                  />
                  <div class="invalid-feedback" v-if="errors.verification_code">
                    {{ errors.verification_code[0] }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    value=""
                    placeholder="Enter new password"
                    v-model="user.password"
                  />
                  <div class="invalid-feedback" v-if="errors.password">
                    {{ errors.password[0] }}
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12">
                  <input
                    id="passwordConfirmation"
                    type="password"
                    class="form-control"
                    name="password"
                    value=""
                    placeholder="Confirm Password"
                    v-model="user.password_confirmation"
                  />
                  <div class="invalid-feedback" v-if="errors.password_confirmation">
                    {{ errors.password_confirmation[0] }}
                  </div>
                </div>
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-primary btn-block" ref="btnSubmit">
                  Reset
                </button>
              </div>
              <div class="text-center m-3">
                <router-link to="/login">login ?</router-link><br />
                <router-link to="/register">Register ?</router-link><br>
                 <router-link to='/reset-password-request'
                  >Resend Verification Code</router-link
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
  name: "resetPassword",
  data() {
    return {
      user: {
        email: "",
        // email:this.$route.params.email,//this is also work no need beforeRouteEntry
        verification_code:'',
        password:'',
        password_confirmation:'',
      },
      btnOldHtml:'',
      errors: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.user.email = to.params.email;//send by parameter to here and we will sign email to email in the user object in the above but is has easer than doing this
    });
  },
  methods: {
    resetPassword: async function () {
      try {
        this.disableSubmission(this.$refs.btnSubmit);
        this.errors = {};
        const response = await auth.resetPassword(this.user);
         this.flashMessage.success({
          message:response.data.message,
          time: 5000,
        });
        this.$router.push('/login');
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
            case 401:
            this.errors = error.response.data.errors;
            break;
          default:
            console.log(error.response.status);
            this.flashMessage.error({
              message: "error happen please try again",
              time: 5000,
            });
            break;
        }
         this.enableSubmission(this.$refs.btnSubmit);
      }
    },
    disableSubmission(btn) {
      btn.setAttribute('disabled', 'disabled');
      this.btnOldHtml = btn.innerHTML;
      btn.innerHTML = '<span class="fa fa-spinner fa-spin"></span> please wait...';
    },
    enableSubmission(btn) {
      btn.removeAttribute('disabled');
      btn.innerHTML=  this.btnOldHtml;
    },
  },
  created() {
    console.log(this.$route.params.email);//we can write param route with out to write param in router if we don not want to display it from url
    document.querySelector("body").style.backgroundColor = "#DDDDFA";
  },
};
</script>