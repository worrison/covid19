<template>
  <div class="home mt-4 container d-flex flex-row justify-content-around flex-wrap align-content-center" >
          <Card  v-for="(item,index) in paises" :key="index" 
            :title="item.Country"
            :descripcion="item.Country"
             />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card'
import { mapState , mapActions  } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['getAllCountries']),
    allCountries(){
      this.getAllCountries()
    }

  },
  created() {
    this.allCountries();
  },
  computed: {
    ...mapState(['paises']),
  },
  components: {
    Card
  }
}
</script>


 <!--<Card  v-for="(item,index) in paises" :key="index" 
            :titulo="item.Country"/>-->