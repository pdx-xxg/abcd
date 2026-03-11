
import OrangeTopNav from './src/components/OrangeTopNav/index.vue'
import bottomNav from './src/components/bottomNav/bottomNav.vue'

declare module 'vue' {
  export interface GlobalComponents {
    OrangeTopNav: typeof OrangeTopNav
    bottomNav: typeof bottomNav
  }
}
