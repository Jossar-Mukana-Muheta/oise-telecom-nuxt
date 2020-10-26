<template>
  <article>
    <header>
      <div class="texte_presentaion">
        <h1>Vente || Réparation || Achat<br /></h1>
        <p>
          Retrouver nos 2 boutiques de Creil et Clermont, pour la réparation,
          achat et vente de vos smartphone, pc et tablette
        </p>
        <div class="button">
          <Button titre="Nos Boutiques" lien="/Boutique" />
        </div>
      </div>
      <div class="image">
        <ImageHeartbeat />
      </div>
    </header>
    <section>
      <h2>
        Nous sommes spécialisé dans la réparation de
        <span class="colored">tous vos appareils</span> à Creil et Clermont
      </h2>
      <article>
        <PresentationCard />
      </article>
    </section>
  </article>
</template>

<script>
import Button from '@/components/layouts/Button.vue'
import ImageHeartbeat from '@/components/ImageHeartbeat.vue'
import PresentationCard from '@/components/PresentationCard.vue'

export default {
  components: { Button, ImageHeartbeat, PresentationCard },
}
</script>
<style lang="scss" scoped>
@import '../assets/variables.scss';

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1518117946207-d26b51185902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  height: 300px;
  justify-content: center;
  @include desktop {
    flex-direction: row;
    min-height: 80vh;
    justify-content: flex-start;
  }
}

.texte_presentaion {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  @include desktop {
    padding-right: 300px;
    align-items: flex-start;
  }
}

//Animation Texte slider

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
.image {
  display: none;
  @include desktop {
    display: block;
  }
}

h1 {
  font-size: 20px;
  margin-bottom: 100px;
  @include desktop {
    margin-bottom: 0px;
    font-size: 60px;
    animation: slider 4s 1;
    animation-direction: alternate;
  }
}

p {
  margin-bottom: 30px;
  animation: slider 5s;
  animation-direction: alternate;
  animation-delay: 1s;
  color: $black !important;
  display: none;
  @include desktop {
    display: inline;
  }
}

.button {
  animation: slider 5s;
  animation-direction: alternate;
  animation-delay: 1s;
}
h2 {
  text-align: center;
  @include desktop {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

.colored {
  color: $red-custom;
}
</style>
