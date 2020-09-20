


import Vue from "vue";
import Router from "vue-router";

import "bootstrap/dist/css/bootstrap.css";

Vue.use(Router)


const Home = () => import("../view/Homepage.vue");
const ReleasesDetails=() => import ("../view/ReleasesDetails")


export default new Router({
    mode: "hash", // Demo is living in GitHub.io, so required!
    linkActiveClass: "is-active",
    scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: "/", component: Home },
    {path:"/ReleasesDetails", component:ReleasesDetails}
    // Just use them normally in the route config
    // { path: "/survey", component: Survey },
    // {
    //   path: "/save-survey/:id",
    //   name: "SaveSurvey",
    //   component: SaveSurvey,
    // },
    // {
    //   path: "/table",
    //   name: "table",
    //   component: table,
    // },

    // multiple parameters, `/` should not be encoded. The name is also important
    // https://github.com/vuejs/vue-router/issues/2719
    // { path: '/a/:tags*', name: 'tagged', component: () => new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({
    //       template: `<div>
    //         <h2>Lazy with params</h2>
    //         <pre id="tagged-path">{{ $route.path }}</pre>
    //       </div>`
    //     })
    //   }, 200)
    // }) },
    // Bar and Baz belong to the same root route
    // and grouped in the same async chunk.
    //   { path: "/creator", component: Creator },
    //   { path: "/exportpdf", component: ExportToPDF },
    //   { path: "/analytics", component: Analytics }
  ],
});


