


import Vue from "vue";
import Router from "vue-router";

import "bootstrap/dist/css/bootstrap.css";

Vue.use(Router)


const Home = () => import("../view/Homepage.vue");
const ReleasesDetails=() => import ("../view/ReleasesDetails")
const AllReleases =() => import ("../view/AllReleases")
const contact =() => import ("../view/Contact_us")
const about=()=> import("../view/about")
export default new Router({
    mode: "hash", // Demo is living in GitHub.io, so required!
    linkActiveClass: "is-active",
    scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: "/", component: Home },
    {path:"/ReleasesDetails", component:ReleasesDetails,name:'ReleasesDetails'},
    {path:"/AllReleases", component:AllReleases,name:'AllReleases'},
    {path:"/contact", component:contact,name:'contact'},
    {path:"/about", component:about,name:'about'}
    

    
  ],
});


