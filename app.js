const logo = document.querySelector(".logo-container");
const portfolios = document.querySelector("#folios");
const boxes = document.querySelector(".box-container");
const devBox = document.querySelector(".dev-box");
const photoBox = document.querySelector(".photo-box");
const footer = document.querySelector("footer");

const timeline = new TimelineMax();

timeline
  .fromTo(logo, 2, { top: "-100%" }, { top: "100%", ease: Power2.easeOut })
  .fromTo(
    portfolios,
    2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeOut },
    "-=1.8"
  )
  .fromTo(devBox, 2, { y: "300%" }, { y: "0%", ease: Power2.easeOut }, "-=2")
  .fromTo(
    photoBox,
    2,
    { y: "300%" },
    { y: "0%", ease: Power2.easeOut },
    "-=1.8"
  )
  .fromTo(
    footer,
    1.5,
    { y: "2000%" },
    { y: "0%", ease: Power2.easeOut },
    "-=1.5"
  );
