import Lenis from "lenis";

let lenis: Lenis;

export function initSmoothScroll() {
  lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export function getLenis() {
  return lenis;
}
