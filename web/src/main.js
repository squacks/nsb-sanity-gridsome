// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Layouts, but lets SLOT it up
// import RightSidebar from '~/layouts/RightSidebar.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'

// Import path iconn globally
import SvgPathIcon from '~/components/SvgPathIcon.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  // Vue.component('RightSidebar', RightSidebar),
  Vue.component('SvgPathIcon', SvgPathIcon)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
}
