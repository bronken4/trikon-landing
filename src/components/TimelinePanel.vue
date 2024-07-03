<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                    <h2 class="text-h4">{{ $t("how.titleH1") }}</h2>
                </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="8">
            <v-timeline align="start">
        <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            fill-dot
            >
            <v-card class="bg-blue-grey-darken-4">
                <v-card-title :class="['text-h6', `bg-${item.color}`]">
                {{ item.title }}
                </v-card-title>
                <v-card-text class="text--primary">
                <p class="mt-2">{{ item.text }}</p>
                </v-card-text>
            </v-card>
          </v-timeline-item>
      </v-timeline>
          </v-col>
        </v-row>
        <v-row class="mt-8" justify="center">
          <v-btn :style="{background: $vuetify.theme.themes.dark.secondary}">Intresserad</v-btn>
          </v-row>

    </v-container>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: this.$t("how.title1"),
          text: this.$t("how.text1"),  
          color: 'yellow-darken-2',
          icon: 'mdi-form-select',
        },
        {
          title: this.$t("how.title2"),
          text: this.$t("how.text2"),  
          color: 'yellow-darken-2',
          icon: 'mdi-printer-3d',
        },
        {
          title: this.$t("how.title3"),
          text: this.$t("how.text3"),  
          color: 'yellow-darken-2',
          icon: 'mdi-truck-fast',
        },
        {
          title: this.$t("how.title4"),
          text: this.$t("how.text4"),  
          color: 'yellow-darken-2',
          icon: 'mdi-frequently-asked-questions',
        },
      ]
    };
  },
};
</script>