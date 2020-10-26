<template>
  <div class="title_section dark">
    <h1>{{ title }}</h1>
    h2
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Section_title',
  props: ['title', 'subtitle'],
}
</script>

<style lang="scss" scoped>
.title_section {
  height: 200px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include desktop {
    margin-top: 30px;
  }

  h1 {
    color: #fafafa;
    padding-top: 30px;
  }

  p {
    color: $grey-texte;
  }
}
</style>
