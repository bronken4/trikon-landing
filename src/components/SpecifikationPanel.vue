<template>
    <v-app>
        <v-container class="mt-10">
            <v-row>
                <v-col class="text-center">
                    <h2 class="text-h4">Specifikationer</h2>
                </v-col>
            </v-row>
            
            <v-row justify="center">
                <v-col md="8" sm="12">
                <v-table :style="{bg: $vuetify.theme.themes.dark.background}" density="compact">
                    <tbody>
                    <tr
                        v-for="item in spec"
                        :key="item.name"
                    >
                        <td class="font-weight-bold text-overline">{{ item.name }}</td>
                        <td class="font-weight-light text-overline">{{ item.answ }}</td>
                    </tr>
                    </tbody>
                </v-table>
            </v-col>    
            </v-row>
            

        </v-container>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {
        spec: [
          {
            name: 'Build Volume',
            answ: '1000*1000*700mm',
          },
          {
            name: 'Product dimensions',
            answ: '1300*1300*800mm'
          },
          {
            name: 'Printing speed',
            answ: '<500mm/s',
          },
          {
            name: 'Acceleration',
            answ: '8000mm/s'
          },
          {
            name: 'Printing Accuracy',
            answ: '100+0,1mm',

          },
          {
            name: 'Layer height',
            answ: '0,1-0,35mm',
          },
          {
            name: 'Filament Diameter',
            answ: '1,75mm',
          },
          {
            name: 'File Transfer',
            answ: 'LAN printing | Cloud printing',
          },
          {
            name: 'Nozzle Diamneter',
            answ: '0,4mm (Default)',
          },
          {
            name: 'Build Surface',
            answ: 'Flexible Build plate',
          },
          {
            name: 'Nozzle Kit',
            answ: 'Heatbreak: Copper | Nozzle: Hardend steel',
          },
          {
            name: 'Nozzle Temperatur',
            answ: '<300c',
          },
          {
            name: 'Headbed Temperatur',
            answ: '<110c',
          },
          {
            name: 'Extruder',
            answ: '“Sprite” direct drive extruder',
          },
          {
            name: 'Supported Filaments',
            answ: 'PLA, PETG, PET, TPU, PLA Wood, ABS, ASA, PA, PLA-CF',
          },
          {
            name: 'UI Languages',
            answ: 'English, Espanol, Deutsche, Francais, Italiano, Svenska',
          },
          {
            name: 'Leveling Mode',
            answ: 'Auto leveling'
          },
          {
            name: 'Display Screen',
            answ: '4,3" touch screen'
          },
          {
            name: 'Mainboard',
            answ: '32-bit mainboard'
          },
          {
            name: 'Connectivity',
            answ: 'Wifi, SD-card'
          },
          {
            name: 'Printable File Formatte',
            answ: 'G code'
          },
          {
            name: 'Power Loss Recovery',
            answ: 'Yes'
          },
          {
            name: 'Filament Runout Sensor',
            answ: 'Yes'
          },
          {
            name: 'Lightning Kit',
            answ: 'Yes'
          },
          {
            name: 'AI LIDAR',
            answ: 'Optional'
          },
          {
            name: 'Camera',
            answ: 'Yes'
          },
          {
            name: 'Rated Voltage',
            answ: '100-120V-200-240V-50/60Hz'
          },
          {
            name: 'Rated Power',
            answ: '350W'
          },
          {
            name: 'Slicing Software',
            answ: 'Cura'
          },
          {
            name: 'Formats for Slicing',
            answ: 'STL, OBJ, 3MF, STEP'
          },
        ],
      }
    },
  }
</script>

<style>


</style>