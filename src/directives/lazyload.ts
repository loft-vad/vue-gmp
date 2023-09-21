const imagesLazyload = {
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
    parent.lazyLoadItemObserver?.observe(el);
  },
  unmounted(el) {
    el.parentNode.lazyLoadItemObserver.unobserve(el);
  },
}

export default imagesLazyload;