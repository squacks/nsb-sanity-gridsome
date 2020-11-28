<template>
  <div class="menu__fixed">
      <div class="ui-menu-fixed">   
        <div class="menu-item"><a href="/"><SvgPathIcon name="ico-home" class="menu-item icon" /></a></div>
        <div class="menu-item"><a href="#"><SvgPathIcon name="ico-share" class="menu-item icon" /></a></div>
        <div class="menu-item"><burger class="menu__fixed-burger" /></div>
        <!-- <span class="menu-item"><a href="#"><SvgPathIcon name="ico-share" class="icon" /></a></span> -->
    </div>
  </div>


</template>

<script>
import Burger from '~/components/Burger'

export default {
  components: {
    Burger
  }
}
</script>

<style lang="scss">


.ui-menu-fixed {
  display: flex;
  z-index: 100;
  width: 100%;
  height: 3.3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--fixed-color);
  
}
// WARNING
// WARNING
// VERY HACKY
.menu__fixed {
  .burger-button {
    // display: none;
    margin-left: 33%;
    // background-color: blue;
    span {
      background-color: var(--bg-color);
    }
    .burger-bar {
      height: 3px;
    }
  }
}

.menu-item {
  flex-grow: 1;
  text-align: center;
  transition: opacity .2s ease-in-out;
  align-self: center;
  width: 60px;
  .icon {
    height: 30px;
    color: var(--bg-color);
  }
}







@media screen and (min-width: 769px) {
  .menu__fixed {
    display: none;
  }
}

</style>
