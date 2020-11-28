<template>
  <nav class="main-navigation">
    <ul class="menu">
      <li><g-link class="nav__link" exact to="/announcements/">Announcements</g-link></li>
      
      <li class="menu-item-has-children"><a href="#">Articles</a></li>
        <ul class="sub-menu">
          <li><a href="#">Trash Tier Advice</a></li>
          <li><a href="#">Opinions</a></li>
          <li><a href="#">NSFW</a></li>
        </ul>

      <li class="menu-item-has-children"><a href="#">Finance 101</a>
        <ul class="sub-menu">
          <li>Scams</li>
          <li>WTF</li>
        </ul>
      </li>

      <li><g-link class="nav__link" exact to="/archive/">Archive</g-link></li>
      
      <li class="menu-item-has-children"><a href="#">About</a></li>
        <ul class="sub-menu">
          <li>Disclaimer</li>
          <li><a href="#">Mission Statement</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Support Us</a></li>
        </ul>
    </ul>
  </nav>
</template>

<style lang="scss">
.main-navigation {
  border: 1px solid var(--db1);
  padding: 1em;
}
nav {
  grid-column: 2 / 6;
  grid-row: 2 / 3;
  width: 100%;
  & ul {
    margin: 0;
    padding: 0;
    background-color: tomato;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  & li {
    display: block;
    padding: .44rem;
    width: 188px;
    background-color: pink;
  }
  & a {
    text-decoration: none;
    text-align: center;
    font-family: 'Konsole VF', sans-serif;
    font-variation-settings: 'wght' 800, 'wdth' 50;
    text-transform: uppercase;
    // transition: opacity 150ms ease-in-out 250ms;
  }
  & a:hover {
    // background:#777;
    // color:#fff;
  }
}
li > .nav__link {
    color: var(--accent-secondary);  
}
.menu-item-has-children > a:after{
  content: ' \203A';
  padding:1px;
}

// nav ul ul {
//     display: none;
// }

@media (min-width: 768px) {
  nav ul ul {
    display: none;
    position:absolute;
  }
}

nav ul li:hover > ul {
  display:block;
  color:#fff;
  padding-left:2rem;
}

@media (min-width: 800px) {
  nav ul li:hover > ul {
    padding-left:0;
    background:#777;
  }
  
  nav ul li:hover > ul a{
    color:#fff;
  }
  
  .sub-menu{
    li{
      display:flex;
      padding-right:2em;
    }
    
    li:hover, li a:hover{
      background:#ddd;
      color:#777;
    }
  }
  
  nav ul ul ul{
    margin:0 0 0 100%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  }
  
  .menu-item-has-children .menu-item-has-children > a:after{
    content: '\203A';
    padding:1px;
    transform: rotate(-90deg);
  }
  
}






@media (min-width: 768px ) {
  nav ul ul {
    display: none;
    position:absolute;
  }
}













// @media screen and (max-width: 768px ) {
//   nav {
//     grid-column: 1 / 7;
//     ul {
//       flex-direction: column;
//       li {
//         width: 100%;
//       }
//     }
//   }
// }
// @media screen and (max-width: 1320px ) { 
//   nav {
//     grid-column: 1 / 7;
//   }
// }
</style>