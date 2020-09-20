<template>
<v-app>
    <Navbar />
    <Carousel />
    <Help />
    <Product/>
    <Releases/>
    <AllReleases/>
    <Footer />

</v-app>
</template>

<script>
export default {
    name: 'HomeLayout',

    components: {
        Navbar: () => import('@/components/Navbar'),
        Carousel: () => import('./Carousel'),
        Help: () => import('./Help'),
        Product:()=>import('./Product'),
        Releases:()=>import ('./Releases'),
        AllReleases:()=>('./AllReleases'),
        Footer: () => import('@/components/Footer')

    },
}
</script>
