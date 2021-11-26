<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getRestaurante', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.restaurantes.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        restaurante: (state) => state.restaurante.data,
        readMore: (state) => state.readMore.data,
        prevNext: (state) => state.prevNext.data,
      })
    }
  }
</script>

<style>
table, th, td {
 
  border: 2px solid #ffc02d;
  background-color: #EEE7DB;
  width: 25%;
  text-align: center;
  border-collapse: collapse;
}

</style>
<template>
  <div class="container">
   <HeaderView />
   <div class="row">
    <div class="three columns">
      <img class="u-max-full-width" :src="'/images/restaurante/'+restaurante.image" alt="po">
    </div>
    <div class="six columns">
     <h3>{{restaurante.name}}</h3>
	 
	   
    <img src="/images/restaurante/michelin.png"
     alt="" width="40%" >
	 
<p> <strong>Michelin Stars: Exceptional cuisine, worth a special journey<br></strong> </p>	 
	 </div>
	 
	  <utteranc/>
	 	 <table >
	  <tr>
    <th colspan="2">About the restaurant</th>
  </tr>
	 
  <tr>
    <th>Foundation year</th>
    <td>{{restaurante.year}}</td>
  </tr>
  <tr>
    <th>City</th>
    <td>{{restaurante.city}}</td>
  </tr>
  <tr>
    <th>Region</th>
    <td>{{restaurante.region}}</td>
  </tr>
  
   <tr>
    <th>Zip Code</th>
     <td>{{restaurante.zipCode}}</td>
  </tr>
  
  <tr>
    <th>Cuisine</th>
     <td>{{restaurante.cuisine}}</td>
  </tr>
  
</table>
	
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>