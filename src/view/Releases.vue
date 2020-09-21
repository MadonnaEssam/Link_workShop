<template>
<div>

    <section>
        <h6> Our Latest </h6>
        <h3 @click="showAllRelease"> Press Releases</h3>
        <div class="review-block">
            <div class="container">
                <div class="row">
                    <div class="column" v-for="(article,index) in articles" :key=" index ">
                        <div class="review-box" v-if="index<4" :style="{ background:`linear-gradient(rgb(0 0 0 / 47%), rgb(0, 0, 0, 0.4)),url(${article.urlToImage})`  }">

                            <h5 v-html="article.publishedAt.split(' ')[0]"></h5>
                            <h5 v-html="article.publishedAt.split(' ')[1]"></h5>
                            <h5 v-html="article.publishedAt.split(' ')[2]"></h5>

                            <div class="review-message">
                                <p>{{article.title}}</p>
                            </div>
                            <div class="form-button">
                                <button type="button" class="btn btn-custom theme-color" @click="readMore(article.id)">Read More</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import json from '../../newsapi.json'
import moment from "moment";

export default {
    name: 'Releases',
    data() {
        return {
            myJson: json,
            articles: []

        }
    },
    mounted() {
        this.getRelease()
    },
    methods: {
        showAllRelease() {
            this.$router.push({name: 'AllReleases'})
        },
        readMore(id) {
            this.$router.push({
                name: 'ReleasesDetails',
                params: {
                    id: id
                }
            })
        },
        getRelease() {

            for (var i = 0; i < this.myJson.articles.length; i++) {
                if (this.myJson.articles[i].showOnHomepage == true) {
                    this.myJson.articles[i].date = moment(this.myJson.articles[i].publishedAt).format('YYYY-MM-DD hh:mm:ss')
                    console.log(this.myJson.articles[i].date)
                    this.myJson.articles[i].publishedAt = moment(this.myJson.articles[i].publishedAt).format('DD MMMM dddd,YYYY')
                    this.articles.push(this.myJson.articles[i])
                }

            }
            this.articles = this.articles.sort((a, b) => b.date - a.date)

        }
    },
}
</script>

<style>
.review-box:hover {
    background: greenyellow !important;
}
</style>
