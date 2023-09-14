import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('lazyload', {
  mounted(el: HTMLImageElement, binding: any, vnode) {
    let parent: any = el.parentNode; 
    if (!parent.lazyLoadItemObserver) {
      console.log("creating new observer");
    }
    parent.lazyLoadItemObserver =
    parent.lazyLoadItemObserver ||
      new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage: any = entry.target;
            console.log("loading", lazyImage);

            // set data-srcset as image srcset
            lazyImage.src = binding.value;

            // add class after image has loaded
            lazyImage.addEventListener("load", () => {
              lazyImage.classList.add("is-lazyloaded");
            });
            // unobserve after
            parent.lazyLoadItemObserver.unobserve(lazyImage);
          }
        });
      });
    console.log("observing", el);
    parent.lazyLoadItemObserver?.observe(el);
  },
  unmounted(el) {
    console.log("unobserving", el);
    el.parentNode.lazyLoadItemObserver.unobserve(el);
  },
});

app.mount('#app')
