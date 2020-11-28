<template>
  <nav class="main-navigation">
  <ul class="menu">

    <li><a href="#">Announcements</a></li>

    <li class="menu-item-has-children"><a href="#">Articles</a>
      <ul class="sub-menu">
        <li><a href="#">Trash Tier Advice</a></li>
        <li><a href="#">Opinions</a></li>
        <li><a href="#">NSFW</a></li>
      </ul>
    </li>

    <li class="menu-item-has-children"><a href="#">Finance 101  </a>
      <ul class="sub-menu">
        <li><a href="#">WTF</a></li>
        <li><a href="#">Scams</a></li>
      </ul>
    </li>

      <li class="menu-item-has-children"><a href="#">Archive</a>
      <ul class="sub-menu">
        <li><a href="#">2021</a></li>
        <li><a href="#">2020</a></li>
      </ul>
    </li>

      <li class="menu-item-has-children"><a href="#">About</a>
      <ul class="sub-menu">
        <li><a href="#">Mission Statement</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Support US</a></li>
      </ul>
    </li>

  </ul>
</nav>
</template>

<style lang="scss">
// Styling ref
// Pretty much ripped
// https://codepen.io/drweb/pen/XWJQKNN

.main-navigation {
  grid-column: 1 / 7;
  grid-row: 2 / 3;
  width: 100%;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  // margin:2em;
  z-index: 1;
}

ul {
  margin: 0; //reset
  padding: 0;
}

.menu {
  display: flex;  
  flex-direction: column;
  

  
  li {
    display: block;
    padding: .44rem;
    // width: 188px;
    list-style-type: none;
    text-transform: uppercase;
  }
  
  li a {
    display: flex;
    text-align: center;
    text-decoration: none;
    // justify-content: space-around;
    justify-content: flex-start;
    font-family: 'Konsole VF', sans-serif;
    font-variation-settings: 'wght' 800, 'wdth' 50;
    text-transform: uppercase;
    color: #777;
    padding: 1rem;
    // transition: opacity 150ms ease-in-out 250ms;
  }
  
  li a:hover {
    background: #777;
    color: #fff;
  }
}

.sub-menu {

}

@media screen and (min-width: 1320px) {
  .main-navigation {
    grid-column: 2 / 6;
  }
}
@media screen and (min-width: 768px) {
  // .main-navigation {
  //   grid-column: 2 / 6;
  // }
  .menu {
    flex-direction: row;
    justify-content: space-evenly;
  }
}

.menu-item-has-children > a:after { 
  content: ' \203A';
  padding: 0 8px;
  transform: rotate(90deg);
}

nav ul ul {
  display: none;
}

@media screen and (min-width: 768px) {
  nav ul ul {
    display: none;
    position: absolute;
  }
}

nav ul li:hover > ul {
  display: block;
  color:#fff;
  padding-left: 2rem;
}

@media screen and (min-width: 768px) {
  nav ul li:hover > ul {
    padding-left: 0;
    background:#777;
  }
  
  nav ul li:hover > ul a{
    color:#fff;
    text-align: left;

  }
  
  .sub-menu {
    li {
      background-color: var(--db9);
      background-color: var(--accent-primary);
      display: flex;
        // padding: 2rem;
    }
    
    li:hover, li a:hover {
      // justify-content: flex-end;
      background:#ddd;
      color:#777;
      width: 100%;
      
    }
  }
  
  nav ul ul ul {
    margin:0 0 0 100%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  }

  .menu-item-has-children li {
    margin: 0;
  }
  
  .menu-item-has-children .menu-item-has-children > a:after{
    content: ' \203A';
    padding: 1px;
    transform: rotate(-90deg);
  }





  .menu li.menu-item-has-children:last-of-type {
    .sub-menu {
      // background-color: pink;
      // display: block;
      margin-left: -4.8rem; // ULTRA-HACKY
      // margin-right: auto!important;
      // justify-content: flex-end;
      li {
        width: 100%;
        padding: 0;
        background-color: var(--accent-primary);
        flex-direction: row-reverse;
        a:hover {
          justify-content: flex-end;
        }
      }
    }
  }
}



</style>