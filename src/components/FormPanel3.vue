<template>
  <div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
          <v-btn
          class="text-white"
          text="Sign Up"
          v-bind="activatorProps"
        ></v-btn>
        
      </template>
      <v-form @submit.prevent="onSubmit">
        <v-card
        prepend-icon="mdi-email"
        title="Gå med i vår mejllista för exklusiva erbjudanden"
      >
        
      <v-card-text>
          <v-row dense>
              <v-text-field
                v-model="form.email"
                :rules="emailRules"
                type="email"
                label="Mejladress..."
                required
              ></v-text-field>

          </v-row>

          <small class="text-caption text-medium-emphasis">*obligatoriskt fält</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Stäng"
            variant="plain"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            color="yellow-darken-2"
            type="submit"
            text="Skicka"
            variant="tonal"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>