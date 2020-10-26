<template>
  <div class="card">
    <v-card
      class="mr-5 mb-5"
      max-width="300"
      v-for="(item, key) in Services"
      :key="key"
      elevation="20"
    >
      <v-img class="white--text align-end" height="200px" :src="item.image">
        <v-card-title>{{ item.titre }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0 grey--text">
        {{ item.titre }}
      </v-card-subtitle>

      <v-card-text class="grey--text">
        <div>{{ item.texte }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>
          <RouterLink :to="item.lien">
            {{ item.titre }}
          </RouterLink>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PresentationCard',
  data() {
    return {
      Services: [
        {
          titre: 'Réparation',
          texte: 'écrans, boutons, diagnotic ...',
          image:
            'https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          lien: '/Services',
        },
        {
          titre: 'Vente',
          texte: 'smartphones,verre trempés, chargeurs ...',
          image:
            'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          lien: '/Contact',
        },
        {
          titre: 'Reprise',
          texte: 'smartphones, tablettes ...',
          image:
            'https://images.unsplash.com/photo-1566728595333-75a1d7cae961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          lien: '/Contact',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  display: flex;
  @include desktop {
    flex-direction: row;
    justify-content: space-between;
  }
}

a {
  text-decoration: none;
  color: $black;
}
</style>
