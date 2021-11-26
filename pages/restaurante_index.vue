<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  justify-content: space-around;
  padding: 20px;
  max-width: 400px;
  height: 355px;
  margin: 20px;
  background-color: #ffc02d;
}


.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  margin-left: 10px;
}

.card-img {
  width: 175px;
  height: 142px;
  margin-left: 60px;
  border-radius: 10%;
  background-color: #b8c6e4;
}

.card-description {
  margin: 10px 0;
  font-size: 14px;
  color: black;
  font-weight: bold;
  font-family: "Lucida Console", "Courier New", monospace;
}

.card-title{
  font-size: 20px;
  color: black;
  font-family: "Lucida Console", "Courier New", monospace;
  letter-spacing: 0.6px;
  margin-left: 2px;
  word-spacing: 1.4px;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: normal;
  font-variant: normal;
  text-transform: capitalize;
}

.card-link {
  margin-top: 20px;
  font-size: 12px;
  color: black;
}

#parra{
font-family: Arial, Helvetica, sans-serif;
font-size: 18px;
letter-spacing: -1.2px;
word-spacing: 2.2px;
color: #000000;
font-weight: 400;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: capitalize;
}
.card-skills {
  display: flex;
  justify-content: space-between;
}
.card-skills .skill {
  font-size: 12px;
  font-weight: 600;
  color: black;
}

.ul{
  list-style-type: none;
}

.ul li{
  list-style: none;
  float: left;
}

.ul li a {
  display: block;
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 16px;
  letter-spacing: 0.6px; word-spacing: 1.4px; 
  color: #000000;
  font-weight: 700; text-decoration: none solid rgb(68, 68, 68);
  font-style: normal; 
  font-variant: normal;
  text-transform: capitalize;
  border-radius: 12px;
  border: 2px solid #000000;
  text-align: center;
  text-decoration: none;
  z-index: 1;
}


</style>


<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ params, store: { dispatch, getters } }) {
      await dispatch('getRestaurantes')
    },
    computed: {
      ...mapState({
        restaurantes: (state) => state.restaurantes.data,
      })
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Restaurants</h3>
   <p id=parra>This category lists three stars michelin restaurants. </p>
   <ul class="ul">
     <li v-for="p of restaurantes" :key="p.slug">
       <div class="card">
          <div>
            <img class="card-img" :src="'/images/restaurante/' + p.image" />
          </div>
          <div class="card-text">
            <h4 class="card-title"><strong> {{ p.name }} </strong></h4>
            <p class="card-description">
			  <span>City: {{p.city}}</span><br>
			  <span>Region: {{p.region}}</span><br>
            
            </p>
            <NuxtLink :to="{ name: 'restaurante-slug', params: { slug: p.slug } }" class="button">
                Details
            </NuxtLink>
          </div>
        </div>
     </li>
   </ul>
   <FooterView />
 </div>
</template>