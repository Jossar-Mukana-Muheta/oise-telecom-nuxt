<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="white lighten-2"
      dark
      disable-resize-watcher
    >
      <v-toolbar-title class="name"
        >Oise <span style="color: #fa2021">Télécom</span></v-toolbar-title
      >

      <v-list nav dense>
        <v-list-item-group color="secondary">
          <v-list-item v-for="(items, item) in drawerItems" :key="item">
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="items.link">
                  {{ items.name }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-spacer></v-spacer>
    </v-navigation-drawer>
    <v-app-bar
      prominent
      height="100px"
      dense
      class="align-center"
      color="#21A0CD"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title class="white--text align-self-center"
        >Oise <span style="color: #fa2021">Télécom</span></v-toolbar-title
      >

      <v-spacer></v-spacer>
      <div>
        <v-btn
          v-for="(navItem, elt) in drawerItems"
          :key="elt"
          depressed
          class="hidden-sm-and-down mt-8"
          text
        >
          <router-link :to="navItem.link">
            {{ navItem.name }}
          </router-link>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      drawer: false,
      drawerItems: [
        { name: 'Accueil', link: '/' },
        { name: 'Nos boutiques', link: '/Boutique' },
        { name: 'Services', link: '/Services' },
        { name: 'Contact', link: '/Contact' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  @include desktop {
    position: fixed;
    z-index: 22;
  }
}

a {
  text-decoration: none;
  color: $black !important;

  @include desktop {
    color: white !important;
    transition: all 300ms ease-in-out;
  }

  &:hover {
    color: $red-custom !important;
    transform: scale(1.1);
  }
}
</style>
