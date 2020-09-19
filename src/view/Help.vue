<template>
<div>
    <!-- testimonial Section start-->
    <section id="testimonial" class="testimonial">

        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <carousel :className='"testimonial-carousel "' :loop=true :items=2 :nav=true :dots=false :dotsEach=true :autoplay=false :responsive="{0:{items:1,dots:false,nav:true},768:{items:2,dots:false,nav:true},992:{nav:true}}">

                        <div class="testimonial-item">
                            <div class="testimonial-block">
                                <div class="testimonial-avtar">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="testimonial-text">
                                    <h6>TA'ALOUF PROGRAM</h6>
                                    <br />
                                    <h3>200</h3>
                                    <h6>GRADUATES OF DATE</h6>
                                    <P>Ta"alouf program aims to extend its reach across the Emirates addressing the needs of the country</P>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <div class="testimonial-block">
                                <div class="testimonial-avtar">
                                    <i class="fas fa-graduation-cap "></i>
                                </div>
                                <div class="testimonial-text">
                                    <h6>TA'ALOUF PROGRAM</h6>
                                    <br />
                                    <h3>200</h3>
                                    <h6>GRADUATES OF DATE</h6>
                                    <P>Ta"alouf program aims to extend its reach across the Emirates addressing the needs of the country</P>
                                    <p></p>
                                </div>
                                </div>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial Section End -->
</div>
</template>

<script>
// var $ = require('jquery')

// $(document).ready(function ($) {
//     $('.owl-carousel').owlCarousel({
//         nav: true,
//         items: 1,
//         loop: true,
//         center: true,
//         margin: 0,
//         lazyLoad: true,
//         dots: false
//     });
// })
export default {
    name: 'Testimonial',
    mounted() {
        // $('.owl-nav').
    }
}
</script>

<style>

</style>
