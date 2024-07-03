<template>
    <v-container>
      <v-row>
        <v-col>
          <v-row class="mt-12">
            <h1 class="text-h3">
              <span :style="{color: $vuetify.theme.themes.dark.primary}">Ta</span> ert nästa <br />
              <span :style="{color: $vuetify.theme.themes.dark.primary}">Steg</span> i produktionen
            </h1>
          </v-row>
          <v-row class="py-3">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet repellendus reiciendis quam soluta aliquid. Explicabo maiores repellat mollitia quia voluptatum ducimus nemo a ad unde assumenda, aliquam ullam laudantium dolor.</p>
          </v-row>
          <v-row class="d-md-none">
            <v-col align="center">
            <v-img
            :aspect-ratio="1"
            src="../assets/printer.png"
            width="400"
            cover
            ></v-img>
        </v-col>
          </v-row>

          <v-row class="mt-5">
            <v-col align="center" class="mr-n12">
              <form-panel-1/>
            </v-col>
            <v-col class="ml-n12">
              <form-panel-2/>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="d-none d-md-block">
            <v-img
            :aspect-ratio="1"
            src="../assets/printer.png"
            width="400"
            cover
            ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  