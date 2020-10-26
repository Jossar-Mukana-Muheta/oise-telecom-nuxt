<template>
  <v-app>
    <main>
      <TheNavbar />
      <v-container>
        <nuxt />
      </v-container>
      <AppFooter />
    </main>
  </v-app>
</template>

<script>
import TheNavbar from '@/components/layouts/TheNavbar.vue'
import AppFooter from '@/components/layouts/AppFooter.vue'
export default {
  components: { TheNavbar, AppFooter },
  data() {
    return {}
  },
}
</script>
<style lang="scss">
main {
  display: grid;
  grid-gap: 20px;
  background-color: #ffffff;
  grid-template-rows: 100px auto 100px;
  min-height: 100vh;
}

p {
  color: $grey-texte !important;
}

h1,
h2,
h3 {
  color: $black;
}

section {
  margin-top: 30px;
}
</style>
