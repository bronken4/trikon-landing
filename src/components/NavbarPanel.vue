<template>
    <v-container fluid>
        <v-row>
        <v-col class="text-start pl-12 d-none d-sm-block" cols="8">
            <h1>Trikon</h1>
        </v-col>
        <v-col class="text-center d-sm-none" cols="8">
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
        <v-col class="text-end pr-12 d-none d-sm-block" cols="2">
            <a href="https://www.natillverkning.se/" target=”_blank”>
              <v-icon color="white" class="mr-3 ">mdi-shopping</v-icon>  
            </a>
            <a href="https://www.instagram.com/" target=”_blank”>
              <v-icon color="white" class="mr-3 ">mdi-instagram</v-icon>  
            </a>
        </v-col>
        <v-col>
            <v-icon @click="toggleLang">mdi-translate</v-icon>
        </v-col>
    </v-row>

    </v-container>
    
   
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    toggleLang() {
      if (this.$i18n.locale === 'EN') {
        this.$i18n.locale = 'SV';
      } else {
        this.$i18n.locale = 'EN';
      }
    }
  }
};
</script>

<style scoped>
RouterLink {
    color: white;
}
</style>