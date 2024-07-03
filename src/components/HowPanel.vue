<template>
        <v-container class="mt-14">
            <v-row>
                <v-col class="text-center">
                    <h2 class="text-h4">Hur går det till?</h2>
                </v-col>
            </v-row>
            <v-row>
                
                <v-col class="mx-2" cols="12">
                    <v-row >
                        <v-col class="text-center">
                           <h3>Steg 1</h3> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <v-icon size="x-large" :style="{color: $vuetify.theme.themes.dark.primary}" class="text-center">mdi-form-select</v-icon>
                        </v-col>
                    </v-row>
                    <v-row>
                        <p>Klicka på knappen nedan och fyll i dina uppgifter.  Vi bokar därefter in ett digitaltmöte där vi håller en presentation av vad vi kan erbjuda er.</p>
                    </v-row>
                </v-col>

                <v-col class="mx-2" cols="12">
                    <v-row >
                        <v-col class="text-center">
                           <h3>Steg 2</h3> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <v-icon size="x-large" :style="{color: $vuetify.theme.themes.dark.primary}" class="text-center">mdi-printer-3d</v-icon>
                        </v-col>
                    </v-row>
                    <v-row>
                        <p>Efter att avtalen är påskrivna påbörjar vi er order och förbereder skrivaren inför leverans.</p>
                    </v-row>
                </v-col>

                <v-col class="mx-2" cols="12">
                    <v-row >
                        <v-col class="text-center">
                           <h3>Steg 3</h3> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <v-icon size="x-large" :style="{color: $vuetify.theme.themes.dark.primary}" class="text-center">mdi-truck-fast</v-icon>
                        </v-col>
                    </v-row>
                    <v-row>
                        <p>Vi utför personlig leverans och montering av alla våra 3D printers, det gör att vi kan garantera er en smidig start med er nya printer.</p>
                    </v-row>
                </v-col>

                <v-col cols="12">
                    <v-row >
                        <v-col class="text-center">
                           <h3>Steg 4</h3> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <v-icon size="x-large" :style="{color: $vuetify.theme.themes.dark.primary}" class="text-center">mdi-frequently-asked-questions</v-icon>
                        </v-col>
                    </v-row>
                    <v-row>Efter att printern är levererad och ni har haft tid att komma igång med produktionen finns vi här för eventuella frågor som uppkommit.
                        <p></p>
                    </v-row>
                </v-col>

            </v-row>

            <v-row>
                    <v-col class="text-center pt-12">
                        <v-btn :style="{background: $vuetify.theme.themes.dark.secondary}">Boka ett möte</v-btn>
                    </v-col>
                </v-row>

        </v-container>
</template>