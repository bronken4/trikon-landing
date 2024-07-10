<template>
  <v-app>
    <v-main>
      <status-panel/>
      <navbar-panel/>
      <hero-panel/>
      <information/>
      <timeline-panel/>
      <sammarbeten-panel/>
      <specifikation-panel/>
      <app-footer/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    const lang = localStorage.getItem('locale')
    console.log(lang)
    this.$i18n.locale = lang;
  },
}

</script>
