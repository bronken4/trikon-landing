<template>
    <div class="pa-4 text-center">
      <v-dialog v-model="dialog" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="pr-5"  
            :style="{background: $vuetify.theme.themes.dark.secondary}"
            v-bind="attrs"
            v-on="on"
            @click="dialog = true"
          >
          {{ $t("header.intrested") }}
          </v-btn>
        </template>
  
        <v-form @submit.prevent="onSubmit">
          <v-card prepend-icon="mdi-email" :title="$t('modal.title2')">
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    :label="$t('modal.name')"
                    v-model="form.name"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
                </v-col>
  
                <v-col cols="12" class="mt-n2">
                  <v-text-field
                    :label="$t('modal.bus')"
                    v-model="form.business"
                  ></v-text-field>
                </v-col>
  
                <v-col cols="12" class="mt-n2">
                  <v-text-field
                    :label="$t('modal.email')"
                    v-model="form.email"
                    :rules="[rules.required, rules.email]"
                    required
                  ></v-text-field>
                </v-col>
  
                <v-col cols="12" class="mt-n2">
                  <v-select
                    :items="[$t('modal.c1'), $t('modal.c2'), $t('modal.c3'), $t('modal.c4')]"
                    label="Meddelande*"
                    v-model="form.message"
                    :rules="[rules.required]"
                    required
                  ></v-select>
                </v-col>
  
                <v-col cols="12" class="mt-n2">
                  <v-textarea
                    :label="$t('modal.freetext')"
                    v-model="form.freeMessage"
                  ></v-textarea>
                </v-col>
              </v-row>
              <small class="text-caption text-medium-emphasis">{{ $t("modal.obli") }}</small>
            </v-card-text>
  
            <v-divider></v-divider>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn variant="plain" @click="dialog = false">{{ $t("modal.close") }}</v-btn>
              <v-btn disabled color="yellow-darken-2" type="submit" variant="tonal">{{ $t("modal.send") }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    data() {
      return {
        dialog: false,
        form: reactive({
          name: '',
          business: '',
          email: '',
          message: '',
          freeMessage: ''
        }),
        rules: {
          required: value => !!value || 'Obligatoriskt fält.',
          email: value => /.+@.+\..+/.test(value) || 'Ogiltig mejladress.'
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('Form submitted with:', this.form);
        // Clear form fields
        this.form.name = '';
        this.form.business = '';
        this.form.email = '';
        this.form.message = '';
        this.form.freeMessage = '';
        this.dialog = false; // Close dialog after submission
      }
    }
  };
  </script>
  
  <style scoped>
  .bg-primary {
    background-color: var(--v-primary-base);
    color: white;
  }
  </style>
  