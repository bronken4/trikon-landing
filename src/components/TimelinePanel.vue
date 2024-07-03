<template>
    <v-container>
        <v-row>
            <v-col class="text-center">
                    <h2 class="text-h4">Hur går det till?</h2>
                </v-col>
        </v-row>

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

    </v-container>

</template>

<script>
  export default {
    components: {
      
    },
    data: () => ({
      items: [
        {
          title: 'Kontakta oss',
          text: 'Klicka på knappen nedan och fyll i dina uppgifter. Vi bokar därefter in ett digitaltmöte där vi håller en presentation av vad vi kan erbjuda er.',  
          color: 'yellow-darken-2',
          icon: 'mdi-form-select',
        },
        {
          title: 'Skriv avtal',
          text: 'Efter att avtalen är påskrivna påbörjar vi er order och förbereder skrivaren inför leverans.',  
          color: 'yellow-darken-2',
          icon: 'mdi-printer-3d',
        },
        {
          title: 'Leverans',
          text: 'Vi utför personlig leverans och montering av alla våra 3D printers, det gör att vi kan garantera er en smidig start med er nya printer.',  
          color: 'yellow-darken-2',
          icon: 'mdi-truck-fast',
        },
        {
          title: 'Återkoppling',
          text: 'Efter att printern är levererad och ni har haft tid att komma igång med produktionen finns vi här för eventuella frågor som uppkommit.',  
          color: 'yellow-darken-2',
          icon: 'mdi-frequently-asked-questions',
        },
      ],
    }),
  }
</script>