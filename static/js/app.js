var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

canvas = document.getElementByClassName('particles-js-canvas-el');
canvas.setAttribute('width', x);
canvas.setAttribute('height', y);

particlesJS.load('particles-js','../static/js/particles.json', console.log('sup'));
