<template>
  <div class="the-categories">
    <ul>
      <li><a href="#">WTF</a></li>
      <li><a href="#">Scams</a></li>
      <li><a href="#">Stocks</a></li>
      <li><a href="#">Opinions</a></li>
      <li><a href="#">Trash Tier Advice</a></li>
      
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.the-categories {
  z-index: 998;
  display: flex;
  margin-top: var(--space);
  padding: 1em;
  // width: 800px;
  // height: 50px;
  // background-color: lightcoral;
  // margin-bottom: 200px;
  justify-content: center;
  ul {
    margin-left: 0;
    display: inline-flex;
    flex-wrap: wrap;
    
    
    // background-color: var(--bg-color);
    list-style: none;
  }
  li a {
    justify-content: center;
    text-transform: uppercase;
    padding: 5px 12px;
    margin-right: 10px;
    font-size: 0.65rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    color: var(--bg-color);
    background-color: var(--link-color);
    text-decoration: none;


    
  }
}
</style>
