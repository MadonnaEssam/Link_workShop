<template>
<div id="app">
    <section id="home" class="p-0">
    
        <div class="container">
            <div class="row ">
             
                <div class="col-sm-12">
                    <div>
                        <carousel :className='"team-carousel"' :loop=true  :items=1  :nav= true :dots=false :dotsEach=true :autoplay=false :responsive="{0:{items:1,margin:5},600:{items:1,margin:5},768:{items:1},992:{items:1},1000:{items:1}}">
                            <div class="team-item">
                                <div class="team-block">
                                    <div class="team-box">
                                        <div>
                                            <img :src='"../assets/img/slide1.jpg"' alt="">
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>

                            <div class="team-item">
                                <div class="team-block">
                                    <div class="team-box">
                                        <div>
                                            <img :src='"../assets/img/slide1.jpg"' alt="">
                                        </div>
                                     
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="team-item">
                                <div class="team-block">
                                    <div class="team-box">
                                        <div >
                                            <img :src='"../assets/img/slide1.jpg"' alt="">
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                            <div class="team-item">
                                <div class="team-block">
                                    <div class="team-box">
                                        <div >
                                            <img :src='"../assets/img/slide1.jpg"' alt="">
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: 'Team'
}
</script>
