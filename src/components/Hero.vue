<template>
  <div class="hero size-fill-viewport display-flex-column scroll-snap-start">
    <div class="hero-text user-select-none">Hello! I'm just testing this hero text out.</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero {
  .hero-text {
    width: 60%;

    font-size: 3.5rem;
    font-weight: var(--font-weight-bold);
    text-align: center;
    color: var(--accent-color);

    line-height: 1.2em;
  }
}
</style>
