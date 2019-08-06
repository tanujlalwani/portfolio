<template>
  <div class="hero">
    <div class="hero-text">Hello</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgb(223, 69, 22);

    .hero-text {
      width: 60%;
      // height: 100%;
      // flex-basis: 100%;

      font: 4rem "Inter UI", system-ui, sans-serif;
      font-weight: 650;
      text-align: center;
      color: #000;

      letter-spacing: -0.02rem;
      line-height: 1.1em;

      cursor: default;
    }
  }
</style>
