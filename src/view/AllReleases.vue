<template>
<div>
    <v-app id="inspire">
        <Navbar />

        <div class="page-margin">

            <div class="breadcrumb-bg">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-6 col-text-center">
                            <nav aria-label="breadcrumb" class="blog-bradcrumb ">
                                <ol class="breadcrumb bg-transparent mb-0">

                                    <li class="breadcrumb-item"><a href='#/'>Home</a></li>
                                    <li class="breadcrumb-item active"><a href='#/AllReleases'>MediaCenter</a></li>

                                    <li class="breadcrumb-item active"><a href='#/'>Press Release</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <v-container>

                    <h3 class="text-left"> Press Releases</h3>
                    <v-row>
                        <v-col cols="4">

                            <v-select v-model="select" @change='changedLabel(select)' :items="items" item-text="name" item-value="id" label="Category" outlined></v-select>
                        </v-col>
                        <v-col cols="6">

                            <v-autocomplete v-model="searchString" :items="Titles" solo chips @change="pushOrRemoveStates(searchString)" color="orange" label="Search" item-text="name" item-value="name" clearable append-icon="search" />

                        </v-col>
                    </v-row>
                    <div class="review-block">
                        <div class="container">
                            <div class="row  margin-bottom">
                                <div class="col-lg-3 col-md-6" v-for="(article,index) in articles" :key=" index">
                                    <div class="review-box" :style="{ backgroundImage:`linear-gradient(rgb(0 0 0 / 47%), rgb(0, 0, 0, 0.4)),url(${article.urlToImage})`  }">

                                        <h5>{{article.publishedAt}}</h5>

                                        <div class="review-message">
                                            <p>{{article.title}}</p>
                                        </div>
                                        <div class="form-button">
                                            <button type="button" class="btn btn-custom theme-color" @click="readMore(article.id)">Read More</button>
                                        </div>
                                    </div>

                                </div>
                                <button type="button" class="btn btn-custom theme-color" @click="seeAll(id=8)">Read More</button>

                            </div>
                        </div>
                    </div>
                </v-container>
            </section>
            <Footer />
        </div>
    </v-app>
</div>
</template>

<script>
import json from '../../newsapi.json'
import moment from "moment";

export default {
    name: 'Releases',
    components: {
        Navbar: () => import('@/components/Navbar'),
        Footer: () => import('@/components/Footer')
    },
    data() {

        return {
            myJson: json,
            articles: [],
            items: [],
            select: {
                id: 1,
                name: "Category"
            },
            searchString: '',
            Titles: []

        }
    },
    mounted() {
        this.getRelease();
        this.getDropDown();
        this.getAllTitles()
    },
    methods: {
        seeAll(id) {
            // this.articles = []
            // this.getRelease()
            var y = this.articles;
            // this.articles = []
            for (var i = 0; i < y.length; i++) {
                if (y[i].id > id) {
                    y[i].publishedAt = moment(y[i].publishedAt).format('DD MMMM dddd,YYYY')
                    this.articles.push(y[i])

                }
            }
        },
        pushOrRemoveStates(item) {
            this.getRelease()
            var y = this.articles;
            this.articles = []
            for (var i = 0; i < y.length; i++) {
                if (y[i].title == item) {
                    y[i].publishedAt = moment(y[i].publishedAt).format('DD MMMM dddd,YYYY')

                    this.articles.push(y[i])
                }
                if (item === undefined) {
                    this.getRelease()

                }
            }
        },
        changedLabel(e) {
            this.getRelease()
            console.log('e.name' + e.name + 'e.id' + e.id)
            var y = this.articles;
            this.articles = []
            for (var i = 0; i < y.length; i++) {
                if (y[i].sourceID == e) {
                    y[i].publishedAt = moment(y[i].publishedAt).format('DD MMMM dddd,YYYY')

                    this.articles.push(y[i])
                }
            }

        },

        readMore(id) {
            this.$router.push({
                name: 'ReleasesDetails',
                params: {
                    id: id
                }
            })
        },
        getDropDown() {
            for (var y = 0; y < this.myJson.sourceCategory.length; y++) {
                this.items.push(this.myJson.sourceCategory[y])
            }
        },
        getAllTitles() {
            for (var y = 0; y < this.myJson.articles.length; y++) {
                this.Titles.push(this.myJson.articles[y].title)
            }
        },
        getRelease() {
            for (var i = 0; i < this.myJson.articles.length; i++) {

                this.myJson.articles[i].date = moment(this.myJson.articles[i].publishedAt).format('YYYY-MM-DD hh:mm:ss')
                console.log(this.myJson.articles[i].date)
                this.myJson.articles[i].publishedAt = moment(this.myJson.articles[i].publishedAt).format('DD MMMM dddd,YYYY')
                this.articles.push(this.myJson.articles[i])

            }
            this.articles = this.articles.sort((a, b) => b.date - a.date)

        }
    },
}
</script>

<style>
.input-group .form-control {
    min-height: 58px;
}
</style>>
