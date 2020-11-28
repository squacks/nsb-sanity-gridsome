<template>
  <div class="sider__left">

    <!-- <div class="merch">
      <span> Merch 1 </span>
      <span> Merch 2 </span>
      <span> Merch 3 </span>
    </div> -->
    <slot>
      <div class="shop"></div>
    </slot>
    <slot>
      <div class="donate"></div>
    </slot>
    <slot>
      <div class="discord"></div>
    </slot>

  </div>
</template>


<style lang="scss">
.sider__left {
  
  
  .merch {

    display: grid;
    grid-gap: 1rem;
      span {
        justify-self: center;
        width: 120px;
        height: 120px;
        border: 1px solid black;
        border-radius: 100%;
        text-align: center;
        background-color: #eaeaea;
      }
  }

}
</style>