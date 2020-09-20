<template>
<div>

    <Navbar />

    <div class="page-margin">

        <div class="breadcrumb-bg">
            <div class="container">
                <div class="row">

                    <div class="col-md-6 col-sm-6 col-text-center">
                        <nav aria-label="breadcrumb" class="blog-bradcrumb ">
                            <ol class="breadcrumb bg-transparent mb-0">
                                <li class="breadcrumb-item"><a :href='"/"'>Home</a></li>
                                <li class="breadcrumb-item active"><a href="#">MediaCenter</a></li>
                                <li class="breadcrumb-item active"><a href="#">Press Release</a></li>
                                <li class="breadcrumb-item active"><a href="#">Press Release</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <v-container>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="blog-item">
                                <div class="blog-block">
                                    <div class="blog-box">
                              
                                        <div class="overflow-hidden">
                                            <a href="#">
                                                <h3 class="text-left"> Press Releases</h3>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-text">
                                    <div class="row">
                                     <img :src='articles[0].urlToImage' alt="blog" class="img-fluid col-md-6">
                                    <div class="col-md-6">
                                      <h3 class="blog-head">{{articles[0].title}} </h3>
                                       
                                    <h6>{{articles[0].publishedAt}}</h6>
                                    </div>
                                    </div>
                                   
                                    <div class="blog-description">
                                        <p v-html="articles[0].content"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-divider"></div>

                        </div>
                    </div>
                </div>
            </v-container>
        </section>
        <Footer />

    </div>

</div>
</template>

<script>
import json from '../../newsapi.json'
// import moment from "moment";
export default {
    name: 'Blog_details',
    components: {
        Navbar: () => import('@/components/Navbar'),
        Footer: () => import('@/components/Footer')
    },
    data() {
        return {
            myJson: json,
            articles: []

        }
    },
    mounted() {
        this.getRelease(this.$route.params.id)
    },
    methods: {
        getRelease(id) {

            for (var i = 0; i < this.myJson.articles.length; i++) {
                if (id == this.myJson.articles[i].id) {
                    this.articles.push(this.myJson.articles[i])
                }

            }
        }
    }
}
</script>
