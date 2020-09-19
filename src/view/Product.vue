<template>
<div>
    <!--Map Section Start-->
    <section id="Product" class="Product p-0">
        <div class="container-fluid">
            <div class="bottom-section">
                <div class="row">
                    <div class="col-md-12 p-0">
                        <div class="address-bar">
                            <div>
                                <div class="footer-style">
                                    <h3>Today's Investments, Tomorrow's Cures</h3>
                                    <h6>Support the different programs we have below</h6>
                                </div>

                                <ul class="dimoned">
                                    <li class="item1">
                                        <div class="bg">
                                            <i class="fas fa-male icons"></i> <i class="fas fa-female icons"></i>
                                            <p>Ta'alouf</p>
                                            <i class="fas fa-plus"></i>

                                        </div>
                                    </li>
                                    <li class="item2">
                                        <div class="bg">
                                            <i class="fas fa-hand-holding-heart icons"></i>
                                            <p>Zakat</p>
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </li>
                                    <li class="item3">
                                        <div class="bg"><i class="fas fa-heartbeat icons"></i>
                                            <p>A'awen</p>
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </li>
                                    <li class="item4">
                                        <div class="bg"><i class="fas fa-graduation-cap icons"></i>
                                            <p>Scholarships</p>
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </li>
                                    <li class="item5">
                                        <div class="bg"> <i class="fas fa-microscope icons"></i>
                                            <p>Medical Research</p>
                                            <i class="fas fa-plus"></i>

                                            <p></p>
                                        </div>
                                    </li>

                                    </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!--Map Section Ends-->
</div>
</template>

<script>
export default {
    name: 'Map'
}
</script>

<style>
#Product .dimoned {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    /* width: 800px; */
    /* height: 250px; */
    width: 600px;
    height: 150px;
}

#Product .dimoned li {
    list-style: none;
    position: absolute;
    border: 2px solid white;
    width: 180px;
    height: 180px;
    /* background: #000; */
    margin: -84px;
    transform: rotate(45deg);
    transition: .5s;
    overflow: hidden;
    opacity: 1;
}

#Product .dimoned li:hover {
    opacity: 1;
    background: #018695;
}

#Product .dimoned li.item1 {
    top: 0;
    left: 0;
}

#Product .dimoned li.item2 {

    bottom: 0;
    left: 25%;
}

#Product .dimoned li.item3 {
    top: 0;
    left: 50%;
}

#Product .dimoned li.item4 {
    bottom: 0;
    left: 75%;
}

#Product .dimoned li.item5 {
    top: 0;
    left: 100%;
}

#Product .dimoned li .bg {
    width: 100%;
    height: 100%;
    transform: rotate(-45deg) scale(1.42);
}
</style>
