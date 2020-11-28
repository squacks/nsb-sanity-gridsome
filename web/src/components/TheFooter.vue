<template>

  <footer class="footer">
    <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
    <span class="footer__links">
      Powered by
      <a href="//gridsome.org">Gridsome</a> &amp;
      <a href="//www.sanity.io">Sanity.io</a>
    </span>
  </footer>

</template>

<style lang="scss">
.footer {
  height: var(--footer-height);
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;
  > span {
    margin: 0 0.35em;
  }
  a {
    color: currentColor;
  }
}
</style>