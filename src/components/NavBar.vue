
<!--<template>
    <nav>
            <router-link to="/">Home</router-link> |
             <router-link to="/about">About</router-link>
    </nav>
</template>-->

<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/"><router-link to="/about">About</router-link></router-link></b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>





<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon:'fas fa-address-card',to:{name:'Home'} },
                { title: 'About', icon:'fas fa-address-card',to:{name:'About'} }
                ],
            over : false
        }
        
    }
}
</script>