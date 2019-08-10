<template>
  <div class="hero scroll-snap-start">
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
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  .hero-text {
    width: 60%;

    font-size: 3.5em;
    font-weight: var(--font-weight-bold);
    text-align: center;
    color: var(--accent-color);

    line-height: 1.2em;

    cursor: default;
    user-select: none;
  }
}
</style>
