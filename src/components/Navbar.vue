<template>
<div>

    <b-navbar type="light" class="navbar-light theme-nav fixed-top" toggleable="lg" fixed="top" v-b-scrollspy:nav-scroller>
        <div class="container">
            <b-navbar-brand class="navbar-brand" :href='"/"'><img :src='"../assets/img/logo.png"' alt="logo"></b-navbar-brand>

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-collapse class="default-nav" is-nav id="nav_collapse">
                <b-navbar-nav class="navbar-nav ml-auto" id="mymenu">
                    <b-nav-item href="#/">Home</b-nav-item>
                    <b-nav-item href="#/about">Who We Are</b-nav-item>

                    <b-nav-item-dropdown right-alignment text="What We Do" class="navbar-link">
                        <b-dropdown-item class="navbar-link" target="_blank" >Research</b-dropdown-item>
                        <b-dropdown-item class="navbar-link" target="_blank" >Programmes</b-dropdown-item>
                        <b-dropdown-item class="navbar-link" target="_blank" >Collaborations</b-dropdown-item>
                        <b-dropdown-item class="navbar-link" target="_blank" >in2HC</b-dropdown-item>

                    </b-nav-item-dropdown>
                    <b-nav-item href="">Get Involved</b-nav-item>

                    <b-nav-item-dropdown right-alignment href="#/AllReleases" text="Media Centre" class="navbar-link ">
                        <b-dropdown-item class="navbar-link" target="_blank" >Photo Gallery</b-dropdown-item>
                        <b-dropdown-item class="navbar-link" target="_blank" >Video Gallery</b-dropdown-item>
                        <b-dropdown-item class="navbar-link"  href="#/AllReleases" >Social Media Hub</b-dropdown-item>
                        <b-dropdown-item class="navbar-link" target="_blank" >Events</b-dropdown-item>

                    </b-nav-item-dropdown>
                    <b-nav-item href="#/contact">Contact Us</b-nav-item>

                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</div>
</template>

<script>
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/

export default {
    name: 'Navbar'
}
</script>


