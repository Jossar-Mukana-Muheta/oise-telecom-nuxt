<template>
  <div>
    <img
      class="heartbeat pl-20"
      src="../static/iphone-transparence.png"
      alt="iphone"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageHeartbeat',
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

div {
  padding-bottom: 8px;
}

img {
  height: 150px;

  @include desktop {
    height: 300px;
  }
}

.heartbeat {
  animation: heartbeat 2s infinite alternate;
}

@keyframes heartbeat {
  100% {
    transform: scale(1.1);
  }
}
</style>
