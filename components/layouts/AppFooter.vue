<template>
  <div>
    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card
        flat
        tile
        width="100%"
        class="lighten-1 text-center"
        color="black"
      >
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon color="white" size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Oise Télécom</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    icons: ['mdi-home', 'mdi-email', 'mdi-phone'],
    items: ['default', 'absolute', 'fixed'],
    padless: false,
    variant: 'default',
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>

<style lang="scss" scoped>
footer {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
