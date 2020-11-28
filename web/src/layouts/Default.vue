<template>
  <div id="app" class="moat">
  <the-header />



  <div class="moat-content">
    <aside class="sidebar sidebar__left">
      <!-- <SiderLeft /> -->
      Left Sidebar Content
    </aside>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Sidebar>

  
    <main class="main">
      <slot />
    </main>

    <aside class="sidebar sidebar__right">
      <!-- <SiderRight /> -->
      <sidebar-right v-if="showRightsidebar" />
      <!-- <slot name="right-sidebar" /> -->
    </aside>

  </div>



  <the-footer />
  <menu-fixed />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
import MenuFixed from '~/components/MenuFixed'
import HeaderLogo from '~/components/HeaderLogo'
import FeatureMain from '~/components/FeatureMain'
import SiderLeft from '~/components/SiderLeft'
import SidebarRight from '~/components/SidebarRight.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  props: {
    showLogo: {
      type: Boolean,
      default: true
    },
    showRightsidebar: {
      type: Boolean,
      default: true
    }
  },
  components: {
    TheHeader,
    TheFooter,
    MenuFixed,
    HeaderLogo,
    FeatureMain,
    SiderLeft,
    SidebarRight,
    Sidebar
  }
}
</script>

<style lang="scss">
// MOAT is the  name of my page wrapper
.moat {
  // height: 60vh;

  &-content {
    display: grid;
    // grid-template-columns: repeat(3, 1fr);
    grid-template-columns: minmax(0px, 220px) minmax(400px, 876px) minmax(0px, 220px);
    // grid-template-rows: repeat(15, 200px);
    max-width: var(--breakpoint-xl);
    margin: 0 auto;
    // grid-gap: 1em;
  }
}

// Sidebar left and right styling
.sidebar {
  &__left {
    border: 2px solid var(--db8);
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    // width: 220px;
  }
  &__right {
    // border: 2px solid var(--db1);
    grid-column: 3 / 4;
    grid-row: 1 / 4;
    // width: 220px;
  }
}

.main {
  // margin: 0 auto;
  // border: 2px solid purple;
  grid-column: 2 / 3;
  grid-row-start: 3;
  margin-top: var(--space);
  padding: 1.5vw 15px 0;
}

@media screen and (max-width: 1020px) {
  .sidebar__left {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    min-height: 200px;
  }

  .main {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    
  }
}

@media screen and (max-width: 769px) {
  .sidebar__left {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }
  .main {
    grid-column: 1 / 4;
    grid-row: 4 / 5;
  }
  .feature-one {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
  .sidebar__right {
    min-height: 200px;
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }
}
</style>
