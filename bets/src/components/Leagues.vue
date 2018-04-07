<template>
  <div id="leagues">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Leagues</h4></li>
      <li v-for="league in leagues" v-bind:key="league.id" class="collection-item">
        <!-- <router-link to="/dashboard">{{league.name}} </router-link> -->
         <router-link v-bind:to="{ name: 'ViewLeague', params: { leagueId: league.id }}">{{league.name}}</router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'AddLeague'}" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import db from './firebase/firebaseInit'
  
  export default {
    name: 'leagues',
    data () {
      return {
        leagues: [],
        loading: true
      }
    },
    created () {
      db.collection('leagues').orderBy('name').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            }
          this.leagues.push(data)
        })
      })
    }
  }
</script>

