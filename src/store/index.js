import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import apiStatics from  '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datos:[{
      pais:'',
      muertesDiarias:0,
      nuevosCasosDiarios:0,
      muertesTotales:0,
      casosTotales:0
    }],
    paises:[{}]

  },
  mutations: {
    allCountries(state,paises){
      state.paises = paises;
    }
  },
  actions: {
    async getAllCountries({commit},paises){
      const api=apiStatics.allCountries
      try {
        let  result = await axios.get(api)
    
        if( result.data.length > 0 )
        {
          commit('allCountries',result.data)
          console.log(result.data[0].Country,this.paises)
        }else{
         console.log('sin resultados',result)
        }
      } catch (error) {
        console.log(error);
      }
      finally{
       
      }
    }
  },
  modules: {
  }
})