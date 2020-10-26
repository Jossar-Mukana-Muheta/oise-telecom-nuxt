<template>
  <div>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
          :elevation="hover ? 24 : 6"
          height="600px"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" width="400" :src="image"></v-img>

          <v-card-title>{{ ville }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div>
              {{ description }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Horraire d'ouverture</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>{{ ouverture }}</v-chip>

              <v-chip>{{ fermeture }}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <a :href="`tel:${telephone}`">
              <v-icon> mdi-phone </v-icon>
            </a>
          </v-card-actions>
        </v-card>
      </template>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'BoutiqueCard',
  data: () => ({
    loading: false,
    selection: 1,
  }),
  props: [
    'ville',
    'description',
    'ouverture',
    'fermeture',
    'image',
    'telephone',
  ],

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
a {
  text-decoration: none !important;
}
</style>
