import axios from "axios";
import apiStatics from  '../services/api'

const country = 'spain';

async function getStatics(){
    const api=apiStatics.staticsCountry + country
    try {
      let  result = await axios.get(api)
  
      if( result.data.length > 0 )
      {
       console.log(result)
      }else{
       console.log('sin resultados',result)
      }
    } catch (error) {
      console.log(error);
    }
    finally{
     
    }
  }

export default{
    getStatics

}