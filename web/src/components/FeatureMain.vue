<template>
<div class="feature-main">
  this is a content block for a main feature or the most recent article.
</div>
</template>


<script>
export default {
  props: {
    showFeature: Boolean
  }
}
</script>

<style lang="scss">
.feature-main {
  border: 2px solid lightgreen;
  height: 240px;
  padding: calc(var(--space) / 2) 1rem;

}
</style>