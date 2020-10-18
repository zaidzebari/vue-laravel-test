(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "resetPasswordRequest",
  data: function data() {
    return {
      user: {
        email: ""
      },
      btnOldHtml: '',
      errors: {}
    };
  },
  methods: {
    resetPasswordRequest: function () {
      var _resetPasswordRequest = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.disableSubmission(this.$refs.btnSubmit);
                this.errors = {}; // const response = await auth.resetPasswordRequest(this.user);
                //  this.flashMessage.success({
                //   message:response.data.message,
                //   time: 5000,
                // });

                this.$router.push({
                  name: 'reset-password',
                  params: {
                    email: this.user.email
                  }
                });
                _context.next = 17;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 11 : 13;
                break;

              case 11:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 16);

              case 13:
                console.log(_context.t0.response.status);
                this.flashMessage.error({
                  message: "error happen please try again",
                  time: 5000
                });
                return _context.abrupt("break", 16);

              case 16:
                this.enableSubmission(this.$refs.btnSubmit);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function resetPasswordRequest() {
        return _resetPasswordRequest.apply(this, arguments);
      }

      return resetPasswordRequest;
    }(),
    disableSubmission: function disableSubmission(btn) {
      btn.setAttribute('disabled', 'disabled');
      this.btnOldHtml = btn.innerHTML;
      btn.innerHTML = '<span class="fa fa-spinner fa-spin"></span> please wait...';
    },
    enableSubmission: function enableSubmission(btn) {
      btn.removeAttribute('disabled');
      btn.innerHTML = this.btnOldHtml;
    }
  },
  created: function created() {
    document.querySelector("body").style.backgroundColor = "#DDDDFA";
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-5" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Reset Password Request")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: { autocomplete: "off" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.resetPasswordRequest($event)
                  }
                }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.email,
                          expression: "user.email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "email",
                        type: "email",
                        name: "email",
                        value: "",
                        placeholder: "Enter email address"
                      },
                      domProps: { value: _vm.user.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.errors.email[0]) +
                              "\n                "
                          )
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group text-center" }, [
                  _c(
                    "button",
                    {
                      ref: "btnSubmit",
                      staticClass: "btn btn-primary btn-block",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("\n                Reset\n              ")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center m-3" },
                  [
                    _c("router-link", { attrs: { to: "/login" } }, [
                      _vm._v("login ?")
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("router-link", { attrs: { to: "/register" } }, [
                      _vm._v("Register ?")
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h3", [_vm._v("Forget your Passwrod?")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                Enter your email address and we will send you instructions on\n                how to reset your password\n              "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/authentication/ResetPasswordRequest.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPasswordRequest.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordRequest.vue?vue&type=template&id=7b948766& */ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&");
/* harmony import */ var _ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordRequest.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/ResetPasswordRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordRequest.vue?vue&type=template&id=7b948766& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/ResetPasswordRequest.vue?vue&type=template&id=7b948766&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordRequest_vue_vue_type_template_id_7b948766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);