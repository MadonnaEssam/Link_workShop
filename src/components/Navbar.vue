<template>
   <b-navbar type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top"  v-b-scrollspy:nav-scroller>
    <div class="container">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand class="navbar-brand" :href='"/tovo"'><img :src='"../assets/img/logo.png"' alt="logo"></b-navbar-brand>
    <b-collapse class="default-nav"  is-nav id="nav_collapse">
      <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#about">Who We Are</b-nav-item>
         
          <b-nav-item-dropdown right-alignment text="What We Do" class="navbar-link">
                  <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/sign-in"'>Research</b-dropdown-item>
            <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/sign-up"' >Programmes</b-dropdown-item>
            <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/forget-Password"' >Collaborations</b-dropdown-item>
            <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/thank-you"' >in2HC</b-dropdown-item>
		  
          </b-nav-item-dropdown>
                    <b-nav-item href="#team">Get Involved</b-nav-item>

          <b-nav-item-dropdown right-alignment href="#Other_page" text="Media Centre" class="navbar-link ">
		    <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/blog-list"'>Photo Gallery</b-dropdown-item>
            <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/blog-details"'>Video Gallery</b-dropdown-item>
            <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/blog-leftside"'>Social Media Hub</b-dropdown-item>
            <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/blog-rightside"'>Events</b-dropdown-item>
            <!-- <b-dropdown-item class="navbar-link" target="_blank" :href='"/tovo/blog-left-sidebar"'>FAQ's</b-dropdown-item> -->
           
          </b-nav-item-dropdown>
                    <b-nav-item href="#contact">Contact Us</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/

  export default {
   name:'Navbar'
  }
</script>
<style >
.navbar-brand img{
  width:100px;
  height: 100px;
}
</style>