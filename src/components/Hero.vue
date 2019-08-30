<template>
  <section class="hero size-fill-viewport display-flex-column scroll-snap-start">
    <div class="hero-text user-select-none">
      They said give your website some personality.
      <br />So he gave it
      <span class="hero-text-italic">a</span> personality.
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero {
  background-color: var(--primary-color);
  justify-content: flex-start;

  .hero-text {
    width: 80%;
    margin: 3em;

    font-size: 2.1rem;
    font-weight: var(--font-weight-bold);
    color: var(--primary-color-text);

    line-height: 1.3em;

    .hero-text-italic {
      font-weight: var(--font-weight-normal);
      font-style: italic;
    }
  }
}
</style>
