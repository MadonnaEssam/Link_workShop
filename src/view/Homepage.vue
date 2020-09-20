<template>
<v-app>
    <Navbar />
    <Carousel />
    <Help />
    <Product/>
    <Releases/>
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
        Footer: () => import('@/components/Footer')

    },
}
</script>
