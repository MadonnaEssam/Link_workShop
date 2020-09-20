<template>
<div>

    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="blog-item">
                        <div class="blog-block">
                            <div class="blog-box">
                                <div class="overflow-hidden">
                                    <a href="#">
                                        <!-- <img :src='"../assets/images/blog/blog-details.jpg"' alt="blog" class="img-fluid"> -->
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="blog-text">
                            <h6>25 january 2018</h6>
                            <a href="#">
                                <h3 class="blog-head">There are many variations of passages of Lorem Ipsum available, </h3>
                            </a>
                            <div class="blog-divider"></div>
                            <div class="blog-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h5>Mark jkcno</h5>
                                <h5 class="pull-right"> 10 <i class="fa fa-heart-o"></i>, 50 <i class="fa fa-comments-o"></i></h5>
                            </div>
                        </div>
                    </div>
                    <div class="blog-divider"></div>
                    <div class="reply-comment">
                        <div class="media">
                            <!-- <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment.jpg"' alt="blog"> -->
                            <div class="media-body">
                                <a href="#">
                                    <h5 class="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                                </a>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Donec sed odio dui.</p>
                            </div>
                        </div>
                        <div class="media">
                            <!-- <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment-two.jpg"' alt="blog"> -->
                            <div class="media-body">
                                <a href="#">
                                    <h5 class="mt-0">Lorem Ipsum has been the</h5>
                                </a>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.Donec sed odio dui.</p>
                            </div>
                        </div>
                        <div class="media">
                            <!-- <img class="align-self-top mr-3" :src='"../assets/images/blog/blog-comment-three.jpg"' alt="blog"> -->
                            <div class="media-body">
                                <a href="#">
                                    <h5 class="mt-0">all the Lorem Ipsum Generator</h5>
                                </a>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            </div>
                        </div>
                    </div>
                    <div class="blog-divider"></div>

                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import json from '../../newsapi.json'
// import moment from "moment";
export default {
    name: 'Blog_details',
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
               if(id==this.myJson.articles[i].id){
                   this.articles.push(this.myJson.articles[i])
               }

        }
    }
}}
</script>
