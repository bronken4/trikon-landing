<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
        variant="outlined" 
        :style="{color: $vuetify.theme.themes.dark.primary}" 
        @click="dialog = true" 
        v-bind="attrs" 
        v-on="on">
        {{ $t("header.offers") }}
        </v-btn>
      </template>
      <v-form @submit.prevent="onSubmit">
        <v-card prepend-icon="mdi-email" :title="$t('modal.title1')">
          <v-card-text>
            <v-row dense>
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                type="email"
                :label="$t('modal.email')"
                required
              ></v-text-field>
            </v-row>
            <small class="text-caption text-medium-emphasis">{{ $t("modal.obli") }}</small>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="plain" @click="dialog = false">{{ $t("modal.close") }}</v-btn>
            <v-btn color="yellow-darken-2" type="submit" variant="tonal">{{ $t("modal.send") }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      form: {
        email: ''
      },
      emailRules: [
        v => !!v || 'Mejladress är obligatoriskt',
        v => /.+@.+\..+/.test(v) || 'Mejladress måste vara giltig'
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log('Form submitted with:', this.form.email);
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
.text-white {
  color: white;
}
</style>
