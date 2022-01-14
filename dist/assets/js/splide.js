let splide = new Splide('.splide', {
    pagination: 'false',
    height: '24rem',
});
let bar = splide.root.querySelector('.my-slider-progress-bar');

// Update the bar width:
splide.on('mounted move', function () {
    var end = splide.Components.Controller.getEnd() + 1;
    bar.style.width = String(100 * (splide.index + 1) / end) + '%';
});

splide.mount();
