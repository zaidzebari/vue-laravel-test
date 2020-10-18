<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Reset Password Request</div>

          <div class="card-body">
            <form autocomplete="off" v-on:submit.prevent="resetPasswordRequest">
              <div class="text-center">
                <h3>Forget your Passwrod?</h3>
                <p>
                  Enter your email address and we will send you instructions on
                  how to reset your password
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
              <div class="form-group text-center">
                <button type="submit" class="btn btn-primary btn-block" ref="btnSubmit">
                  Reset
                </button>
              </div>
              <div class="text-center m-3">
                <router-link to="/login">login ?</router-link><br />
                <router-link to="/register">Register ?</router-link>
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
  name: "resetPasswordRequest",
  data() {
    return {
      user: {
        email: "",
      },
      btnOldHtml:'',
      errors: {},
    };
  },
  methods: {
    resetPasswordRequest: async function () {
      try {
        this.disableSubmission(this.$refs.btnSubmit);
        this.errors = {};
        // const response = await auth.resetPasswordRequest(this.user);
        //  this.flashMessage.success({
        //   message:response.data.message,
        //   time: 5000,
        // });
        this.$router.push({name:'reset-password',params: {email: this.user.email}});
      } catch (error) {
        switch (error.response.status) {
          case 422:
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
    document.querySelector("body").style.backgroundColor = "#DDDDFA";
  },
};
</script>