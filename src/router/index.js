import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/dashboard/ecommerce/Ecommerce.vue"),
      meta: {
        pageTitle: "Home",
        breadcrumb: [
          {
            text: "Home",
            active: true,
          },
        ],
      },
    },
    {
      path: "/shop-products",
      name: "shop-products",
      component: () => import("@/views/shop/ShopProducts.vue"),
      meta: {
        contentRenderer: "sidebar-left-detached",
        contentClass: "ecommerce-application",

        pageTitle: "Shop Products",
        breadcrumb: [
          {
            text: "Shop Products",
            active: true,
          },
        ],
      },
    },
    {
      //shop-products-product-details
      path: "/shop-products/:slug",
      name: "shop-product-details",
      component: () =>
        import("@/views/shop/shop-product-details/ShopProductDetails.vue"),
      meta: {
        pageTitle: "Product Details",
        // ecommerce-application
        contentClass: "shop-application",
        breadcrumb: [
          {
            text: "Shop Products",
            to: "/shop-products",
          },
          {
            text: "Product Details",
            active: true,
          },
        ],
      },
    },
    {
      path: "/events",
      name: "events",
      component: () => import("@/views/Events.vue"),
      meta: {
        pageTitle: "Events",
        breadcrumb: [
          {
            text: "Events",
            active: true,
          },
        ],
      },
    },
    {
      path: "/coupons",
      name: "coupons",
      component: () => import("@/views/Coupons.vue"),
      meta: {
        pageTitle: "Coupons",
        breadcrumb: [
          {
            text: "Coupons",
            active: true,
          },
        ],
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/Settings.vue"),
      meta: {
        pageTitle: "Settings",
        breadcrumb: [
          {
            text: "Settings",
            active: true,
          },
        ],
      },
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("@/views/Orders.vue"),
      meta: {
        pageTitle: "Orders",
        breadcrumb: [
          {
            text: "Orders",
            active: true,
          },
        ],
      },
    },
    {
      path: "/wallet",
      name: "wallet",
      component: () => import("@/views/Wallet.vue"),
      meta: {
        pageTitle: "Wallet",
        breadcrumb: [
          {
            text: "Wallet",
            active: true,
          },
        ],
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register.vue"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "/error-404",
      name: "error-404",
      component: () => import("@/views/error/Error404.vue"),
      meta: {
        layout: "full",
      },
    },
    {
      path: "*",
      redirect: "error-404",
    },
  ],
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
