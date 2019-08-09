<template>
  <div class="hero">
    <div class="hero-text">Hello! I'm just testing this hero text out.</div>
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

  background-color: #000;

  .hero-text {
    width: 60%;

    font: 3.5rem "Space Mono", system-ui, sans-serif;
    font-weight: 800;
    text-align: center;
    color: rgb(252, 76, 2);
    // -webkit-text-stroke: 1px white;

    // letter-spacing: -0.02rem;
    // word-spacing: -0.2rem;
    line-height: 1.2em;

    cursor: default;
    user-select: none;
  }
}
</style>
