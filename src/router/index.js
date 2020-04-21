import Vue from 'vue';
import Router from 'vue-router';
import BuildSidebar from '../components/sidebars/SidebarBuild.vue';
import HomePage from '../components/home/HomePage.vue';
import BrowseSidebar from '../components/sidebars/SidebarBrowse.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';
import StandardSidebar from '../components/sidebars/SidebarStandard.vue';
import CartSidebar from '../components/sidebars/SidebarCart.vue';
import ShoppingCart from '../components/cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: StandardSidebar,
      },
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      components: {
        default: ShoppingCart,
        sidebar: CartSidebar,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: BuildSidebar,
      },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      components: {
        default: BrowseParts,
        sidebar: BrowseSidebar,
      },
      children: [
        {
          path: '/heads',
          name: 'RobotHeads',
          component: RobotHeads,
        },
        {
          path: '/arms',
          name: 'RobotArms',
          component: RobotArms,
        },
        {
          path: '/torsos',
          name: 'RobotTorsos',
          component: RobotTorsos,
        },
        {
          path: '/bases',
          name: 'RobotBases',
          component: RobotBases,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartInfo,
      props: true,
    },
  ],
});
