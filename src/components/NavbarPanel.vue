<template>
    <v-container fluid>
        <v-row>
        <v-col class="text-start pl-12 d-none d-sm-block" md="8" sm="4">
            <h1>Trikon</h1>
        </v-col>
        <v-col class="text-center d-sm-none" md="8" sm="4">
            <h1>Trikon</h1>
        </v-col>
        <v-col class="text-center align-center">
            <!-- <nav>
                <RouterLink to="/">Produkten</RouterLink> |
                <RouterLink to="/about">Om  oss</RouterLink>
            </nav> -->
            <v-col>
        </v-col>
        </v-col>
        <v-col class="text-end pr-12 d-none d-sm-block" md="2" sm="4">
            <a href="https://www.natillverkning.se/" target=”_blank”>
              <v-icon color="white" class="mr-3 ">mdi-shopping</v-icon>  
            </a>
            <a href="https://www.instagram.com/" target=”_blank”>
              <v-icon color="white" class="mr-3 ">mdi-instagram</v-icon>  
            </a>
        </v-col>
        <v-col align="end" class="mr-4">
            <v-icon @click="toggleLang">mdi-translate</v-icon>
        </v-col>
    </v-row>

    </v-container>
    
   
</template>

<script>
export default {
  methods: {
    toggleLang() {
      if (localStorage.getItem('locale') === 'EN') {
        localStorage.setItem('locale', 'SV');
      } else {
        localStorage.setItem('locale', 'EN');
      }
      location.reload();
    }
  }
};
</script>

<style scoped>
RouterLink {
    color: white;
}
</style>