<template>
  <v-container fluid class="bg-yellow-darken-2">      
      <v-col cols="12" class="text-center mb-5">
        <v-row>
          <v-col>
            <h4 class="text-h7">{{ $t("footer.title") }}</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center mt-n5">
            <h5>{{ $t("footer.subtitle") }}</h5>
          </v-col>
        </v-row>


          <!-- <v-row>
            <v-col>
              <v-form @submit.prevent="onSubmit">
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                type="email"
                label="Mejladress..."
                required
              ></v-text-field>
              <v-btn class="mt-2" type="submit" block>Lägg till mig</v-btn>
            </v-form>
            </v-col>
          </v-row> -->
        </v-col>
        <v-row class="mb-4" justify="center">
          <form-panel-3/>
          </v-row>
  </v-container>

  <v-footer>
    <v-row>
      <v-col class="text-center">
        <p>© 2024 Trikon Trading AB</p>
      </v-col>
    </v-row>
  </v-footer>
  
</template>

<script>
import FormPanel3 from './FormPanel2.vue';

  export default {
    components: {
      FormPanel3
    },
  }
</script>

<style>

</style>
