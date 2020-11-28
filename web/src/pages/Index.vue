<template>
  <Layout :show-logo="false" >

    <!-- Show optional features section -->
    <feature class="feature-one">
      <feature-main v-if="showFeature" />
    </feature>

    <!-- Show optional pinned content section -->
    <!-- <feature class="feature-pinned">
      Maybe two pinned articles????
    </feature> -->

    <!-- Author intro -->
    <!-- <author-card :show-title="true" /> -->

    <div class="cats">
    <the-categories />
    </div>

    <!-- List posts -->
    <div class="posts">
      <post-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
        :metadata="$page.metadata"
      />
    </div>
    
    <!-- Paginate -->
    <div class="pagination">
      Pagination block goes here.
    <!-- <Pager :info="$page.posts.pageInfo" linkClass="pager" /> -->
    </div>

    
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityPost(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        _rawExcerpt
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
      }
    }
  }
}

</page-query>

<script>
import { Pager } from 'gridsome'
import AuthorCard from '~/components/AuthorCard'
import PostCard from '~/components/PostCard'
import TheCategories from '~/components/TheCategories'
import FeatureMain from '~/components/FeatureMain'

export default {
    props: {
    showFeature: {
      type: Boolean,
      default: true
    }
  },
  components: {
    AuthorCard,
    PostCard,
    TheCategories,
    FeatureMain,
    Pager
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang='scss'>

.feature-one {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
}
// .feature-two {
//   grid-column: 2 / 3;
// }
.cats {
  grid-row: 3 / 4;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 50px 0;
  width: 100%;
  height: 80px;
  border: 1px solid var(--title-color);
  border-radius: var(--radius);
}

.pager {
  background-color: var(--bg-color);
  font-size: var(--fs-3);
  // border: 1px solid var(--border-color);
  color: currentColor;
  text-decoration: none;
  padding: .25em .75em;
  border-radius: var(--radius);
}
@media screen and (max-width: 1020px) {
  .sidebar__left {
    grid-row: 2 / 3;
    background-color: aqua;
  }
  // .feature-one {
  //   grid-row: 1 / 2!important;
  // }
}
</style>
