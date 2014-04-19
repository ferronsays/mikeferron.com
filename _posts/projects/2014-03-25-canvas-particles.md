---
layout: project
title:  "Canvas-Particles"
date:   2014-01-01 00:00:58
categories: projects
description: An HTML5, JavaScript, and Canvas particle&nbsp;engine.
thumbnail: canvasparticles.png
extra_js:
  - Vector2D.min.js
  - Pollock.min.js
  - Particle.min.js
  - ParticleEmitter.min.js
  - demo/particles.js
---
<canvas id="c" style="background: #333;"></canvas>
<p class="linkContainer">
    <a href="/projects/fullscreen/canvas-particles">Demo</a>
    <a href="http://github.com/ferronsays/Canvas-Particles">Download</a>
</p>
Canvas-Particles is a highly customizable JavaScript 2D particle engine. It's particularly useful for HTML5 games.  It is showcased on [Chrome Experiments][chrome-ex].

The engine generates a large amount of objects --particles-- and simulates organic systems with them.  It can be used to generate a range of effects like fire, smoke, explosions, sparks, snow, and&nbsp;more.

### Documentation ###
For now, the [source][emitter-source] illustrates all the available options with their descriptions and default values.

Below is an example configuration that results in the fire emitter above, showing many of the optional parameters:
{% highlight javascript %}
var emitter = new ParticleEmitter({
    context: context, //canvas drawing context
    blendMode: "lighter", //canvas global composite operation
    radial: true, //radial gradient
    sharpness: 60, //sharpness, if radial = true
    sharpnessVariance: 0,
    maxParticles: 100
    position: new Vector2D(scene.width / 5, scene.height * 4 / 5),
    positionVariance: new Vector2D(1, 1),
    direction: -Math.PI/2, //in radians
    directionVariance: 6*Math.PI/180,
    speed: 0.5, //how fast particles go
    speedVariance: 0.4,
    size: 30, //how big the particles are when spawned
    sizeVariance: 10,
    endSize: 1, //how big the particles are before they die
    endSizeVariance: 0,
    life: 800, //how long the particles live, in milliseconds
    lifeVariance: 500,
    color: [3, 3, 14, 0.5], //start color
    colorVariance: [42, 0, 0, 0],
    endColor: [255, 77, 0, 0.1],
    endColorVariance: [0, 0, 0, 0],
    duration: -1, //milliseconds emitter lasts. -1 is infinite
});
{% endhighlight %}

It is much simpler than it looks.  Apart from the visual options, all an emitter needs is a canvas context and something to call its <code>update(dt)</code> and <code>draw(context)</code>&nbsp;methods.

### Demo ###
Check out the [fullscreen editor demo][particles-full] to play around and design unique emitters.  (The editor is not optimized for mobile devices.)

The editor also differs slightly from the released code.  This is for ease of use with the dat-gui&nbsp;controller.

### Dependencies ###
I've written the included example with [Pollock.js][pollock-mf] ([GitHub][pollock-gh]) but it could easily be modified not to.  Feel free to contact me on [twitter][twitter-mf] if you'd like to use this project without Pollock.js, and have questions on how to do&nbsp;so.

Canvas-Particles also uses [Vector2D.js][vector-gh], a simple 2D vector&nbsp;class.

### Download ###
You can download it, tell me about bugs, or make a feature request at the [GitHub repo][particles-gh].

[![This is a Chrome Experiment](/public/img/badge-white_white.png)][chrome-ex]

[particles-gh]: http://github.com/ferronsays/Canvas-Particles
[emitter-source]: https://github.com/ferronsays/Canvas-Particles/blob/master/js/ParticleEmitter.js
[vector-gh]: http://github.com/ferronsays/Vector2D.js
[pollock-gh]: http://github.com/ferronsays/Pollock.js
[pollock-mf]: /projects/pollock
[particles-full]: /projects/fullscreen/canvas-particles
[chrome-ex]: http://www.chromeexperiments.com/detail/canvas-particle-emitter/?f=
[twitter-mf]: http://twitter.com/ferronsays
