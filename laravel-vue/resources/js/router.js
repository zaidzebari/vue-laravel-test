import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import * as auth from './services/auth_service';

Vue.use(Router);

const routes = [
    {
        path: '/home',//make / is better than /home or change to dashboard is alot better
        // name: 'dashboard',//because we need dashboard
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import(/* webpackPrefetch: true */'./views/Dashboard.vue'),
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import(/* webpackPrefetch: true */'./views/Categories.vue'), // Vue we just created
                beforeEnter(to, from, next) {
                    if (auth.getUserRole() === 'administrator') {
                        next();
                    } else {
                        next('/404');
                        //return false; if we want to return usre to back
                    }
                }
            },
            {
                path: 'products',
                name: 'products',
                component: () => import(/* webpackPrefetch: true */'./views/Products.vue'), // Vue we just created
                beforeEnter(to, from, next) {
                    if (auth.getUserRole() === 'user') {
                        next();
                    } else {
                        next('/404');
                        //return false; if we want to return usre to back

                    }
                }
            },
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoaggedIn()) {
                next('/login');
                        //return false; if we want to return usre to back

            } else {
                next();
            }
        }
    },

    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackPrefetch: true */'./views/authentication/Register.vue'), // Vue we just created
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackPrefetch: true */'./views/authentication/Login.vue'), // Vue we just created
        beforeEnter(to, from, next) {
            if (!auth.isLoaggedIn()) {
                next();
                        //return false; if we want to return usre to back

            } else {
                next('/home');
            }
        }
    },
    {
        path: '/reset-password-request',
        name: 'reset-password-request',
        component: () => import(/* webpackPrefetch: true */'./views/authentication/ResetPasswordRequest.vue'), // Vue we just created
        beforeEnter(to, from, next) {
            if (!auth.isLoaggedIn()) {
                next();
                        //return false; if we want to return usre to back

            } else {
                next('/home');
            }
        }
    },
    {
        path: '/reset-password/:email',//if we don not write email is will be better becuase here it will show email in the uri browser just delete this and you will not get any error inside that component!
        name: 'reset-password',
        component: () => import(/* webpackPrefetch: true */'./views/authentication/ResetPassword.vue'), // Vue we just created
        beforeEnter(to, from, next) {
            if (!auth.isLoaggedIn()) {
                next();
                        //return false; if we want to return usre to back

            } else {
                next('/home');
            }
        }
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackPrefetch: true */'./views/404.vue'), // Vue we just created
    },
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;