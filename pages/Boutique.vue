<template>
  <article>
    <header>
      <PageTitle title="Nos Magasins" subtitle="Creil || Clermont" />
    </header>
    <section>
      <h2>Retrouver nos 2 boutiques</h2>
      <article>
        <div class="cardBoutique">
          <BoutiqueCard
            v-for="(elt, item) in boutiques"
            :key="item"
            :ville="elt.ville"
            :description="elt.description"
            :ouverture="elt.ouverture"
            :fermeture="elt.fermeture"
            :image="elt.image"
            :telephone="elt.telephone"
          />
        </div>
      </article>
    </section>
  </article>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import BoutiqueCard from '@/components/BoutiqueCard.vue'
export default {
  name: 'Boutique',
  components: { PageTitle, BoutiqueCard },
  data() {
    return {
      boutiques: [
        {
          ville: 'Creil',
          description: 'Face à la gare de Creil',
          telephone: '0951407179',
          ouverture: '09H00',
          fermeture: '21H00',
          image: require('../static/magasin.jpeg'),
        },
        {
          ville: 'Clermont',
          description: '',
          telephone: '0951407179',
          ouverture: '09H00',
          fermeture: '21H00',
          image: require('../static/magasin2.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.cardBoutique {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  animation: slider 3s ease-in-out;
  animation-delay: 4s;
}

h2 {
  text-align: center;
  animation: slider 3s ease-in-out;
  margin-bottom: 100px;
}

@keyframes slider {
  0% {
    transform: translateX(-500px);
  }
  25% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0px);
  }
}
/////////////////////////////
</style>
