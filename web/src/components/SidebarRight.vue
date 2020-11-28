<template>
  <div class="menu__right">

    <burger class="menu__right-burger" />


    <div class="social-items">   
      <span><a href="https://www.instagram.com/no.safe.bets/"><SvgPathIcon name="ico-instagram" class="icon" /></a></span>
      <span><a href="https://www.facebook.com/NoSafeBets/"><SvgPathIcon name="ico-facebook" class="icon" /></a></span>
      <span><a href="https://twitter.com/NoSafeBets"><SvgPathIcon name="ico-twitter" class="icon" /></a></span>
    </div>

    <div class="disclaimer">*Not Valid Financial, Legal, Life, or Any Advice.</div>

    <toggle-theme class="sunny-moon"/>

  </div>
  
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme'
import Burger from '~/components/Burger'

export default {
  props: {
    showRightsidebar: Boolean
  },
    components: {
    ToggleTheme,
    Burger
  }
}
</script>

<style lang="scss">
.menu__right {
  display: grid;
  grid-template-rows: 100px auto 340px;
  // grid-template-columns: 110px 110px;
  grid-template-columns: minmax(60px, 110px) minmax(60px, 110px);
  height: 100vh;
  position: sticky;
  top: 0;
  // sider items based off the max-width of 1320px / 6 columns
  // sider is 220px wide
  &-burger {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .social-items {
    display: flex;
    flex-direction: column;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    // grid-template-rows: auto;
    align-self: flex-end;
    .icon {
      width: 32px;
      height: 32px;
    }
    span {
      // border: 1px solid gold;
      margin-bottom: 1rem;
    }
  }
  .disclaimer {
    justify-content: end;
    height: 20px;
    width: 18ch;
    // border: 1px red solid;
    display: block;
    position: absolute;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    // position: relative;
    top: 15.6rem;
    font-size: 16px;
    font-family: 'Konsole VF', sans-serif;
    font-variation-settings: "wght" 400, "wdth" 85;
    transform-origin: 0 0;
    transform: translateY(.6rem) rotate(-90deg);
  }
  .sunny-moon {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    align-self: end;
    // margin-bottom: 1.6em;
    position: sticky;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .menu__right {
    display: none;
  }
}

</style>