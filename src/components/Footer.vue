<template>
<v-footer id="home-footer" dark min-height="72">
    <v-container class="white">
        <v-row>
            <v-col cols="12" md="2" v-for="(s, i) in menu" :key="i" class=" pa-1 pa-md-0">
                <h3>{{s.title}}</h3>
                <div v-for="(sub,index) in s.subMenu" :key="index">
                    <a href="#" v-text="sub">

                    </a>
                </div>

            </v-col>
        </v-row>
    </v-container>

    <v-container>

        <v-row>
            <v-col cols="12" md="6">
                <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
                    <template v-for="(s, i) in footer">
                        <a :key="s" class="white--text pa-1 pa-md-0" href="#" v-text="s" />

                        <v-responsive v-if="i < footer.length - 1" :key="`divider-${s}`" class="mx-4 shrink hidden-sm-and-down" max-height="24">
                            <v-divider vertical />
                        </v-responsive>
                    </template>
                </div>
            </v-col>

            <v-col class="text-center text-md-right" cols="12" md="6">
                Copyright &copy; 2016 LinkDev.All Rights Reserved
            </v-col>
        </v-row>
    </v-container>

</v-footer>
</template>

<script>
export default {
    name: 'HomeFooter',

    data() {
        return {
            menu: [{
                    title: 'Who We Are',
                    subMenu: ['About Us', 'Mission, Vission & Goals', 'Our Message', 'Board of Trustess', 'Board of Directors', "FAQ's"]
                },
                {
                    title: 'What we do',
                    subMenu: ['Research', 'Programms', 'Collaborations', 'in2Hc']
                },
                {
                    title: 'Get Involved',
                    subMenu: ['Donate', 'Partners']
                },
                {
                    title: 'Media Center',
                    subMenu: ['Photo Gallery', 'Video Gallery', 'Social Media Hub', 'Events']
                },
                {
                    title: 'Contact Us',
                    subMenu: ['Contact Details', 'Career']
                }
            ],
            footer: [
                'Terms & Conditions',
                'Privacy Policy',
                'User Agreement',
                'Sitemap',
            ],
        }
    },
}
</script>

<style lang="sass">
</style>
