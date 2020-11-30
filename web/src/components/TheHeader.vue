<template>
  <header class="header">
      <!-- <header-logo v-if="showLogo" /> -->
      <g-link class="header-masthead" to="/">
      <h1>No Safe Bets</h1>
      </g-link>
      <!-- <g-image
        alt="No Safe Bets Logo"
        class="nsb__logo"
        src="~/assets/images/no-safe-bets-logo-holo1.0.svg"
        width="180"
        blur="5"
      /> -->

    <the-nav2 />

  </header>
</template>

<script>
import TheNav2 from '~/components/TheNav2'

export default {
  components: {
    TheNav2,
  }
}
</script>


<style lang="scss">
.header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr auto;
  // border: 2px solid lightsalmon;
  border-bottom: 6px solid var(--title-color);
  text-align: center;
  // min-height: var(--header-height);
  // padding: 0 calc(var(--space) / 2);
  // z-index: 999;
  // position: fixed;
  &-masthead {
    margin: 4rem 0 2rem 0;
    grid-column: 1 / 7;
    grid-row: 1 / 2;
    // height: 12.5rem;
    // background-color: rosybrown;
    font-size: 2.6rem;
    text-decoration: none;
    h1 {
      color: var(--accent-primary);
    }    
  }
  @media screen and (max-width: 769px) {
   h1 {
     font-size: 2.4rem;
   }
  }

}


</style>