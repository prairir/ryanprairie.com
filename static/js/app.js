var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

particlesJS.load('particles-js','../static/js/particles.json', console.log('sup'));

var ctx = document.getElementsByTagName('canvas')[0];
ctx.width = x;
ctx.height =y;
