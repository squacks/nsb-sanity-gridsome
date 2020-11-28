<template>
<div id="ui-burger"
    :class="{ 'active' : isBurgerActive }"
    @click.prevent="toggle">

  <slot>
    <button type="button" class="burger-button" title="Menu">
      <span class="burger-bar burger-inner-top"></span>
      <span class="burger-bar burger-inner-mid"></span>
      <span class="burger-bar burger-inner-bottom"></span>
    </button>
  </slot>

</div>

</template>

<script>
// export default {
//   data: () => ({
//       isBurgerActive: false
//   }),
//   methods: {
//     toggle() {
//         this.isBurgerActive = !this.isBurgerActive
//     }
//   }
// }
import { store, mutations } from '~/components/store.js'

export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen
    }
    },
    methods: {
      toggle() {
        mutations.toggleNav()
      }
    }
}
</script>

<style lang="scss">
.hidden {
    visibility: hidden;
}

#ui-burger {

}
.burger-button {
  position: relative;
  // height: 30px;
  // width: 32px;  
  height: 4.6rem;
  width: 2.8rem;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  // background-color: royalblue;
  background-color: transparent;
  pointer-events: all;
  transition: transform .6s cubic-bezier(.165,.84,.44,1);
}
.burger-bar {
  background-color: var(--body-color);
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
  
}
.burger-inner-top {
  transform: translateY(-12px);
}
.burger-inner-mid {
  transform-origin: 100% 50%;
  transform: scaleX(.8);
}
.burger-button:hover .burger-inner-mid {
  transform: scaleX(1);
}
.no-touchevents .burger-inner-mid:hover {
  transform: scaleX(1);
}

.burger-inner-bottom {
  transform: translateY(12px);
}

#ui-burger.active .burger-button {
  transform: rotate(-180deg);
}

#uiburger.active .burger-bar {
  background-color: #fff;
}

#ui-burger.active .burger-inner-top {
  transform: rotate(45deg)
}

#ui-burger.active .burger-inner-mid {
  opacity: 0;
}

#ui-burger.active .burger-inner-bottom {
  transform: rotate(-45deg)
}


</style>