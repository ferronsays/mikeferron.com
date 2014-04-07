var scene;

var DATOptions = function()
{
  this.FIRE_DELAY = 0;
  this.ROTATION_SPEED = 1;
  this.PARTICLE_SPEED = 1;
  this.SIZE = 12;
  this.SATURATION = 0.5;
  this.LIGHTNESS = 0.5;
}, options;

var settings = new DATOptions();

function initialize() {
  scene = new Pollock({
    canvasID: "c",
    clear: false
  });

  scene.addChild(new ColorWipe({
    position: new Vector2D(scene.width/2, scene.height/2),
  }));
}

ColorWipe = (function() {
  function ColorWipe(options) {
    this.settings = {
      position: new Vector2D(0,0),
      angle: 0
    };

    Pollock.extend(this.settings, options, true);

    this.alive = true;
    this.loaded = true;

    var that = this;

    var timeoutCallback = function()
    {
      that.timeOut = setTimeout(function()
      {
        that.loaded = true;
        timeoutCallback();
      }, settings.FIRE_DELAY);
    }

    timeoutCallback();

    this.entities = [];
  };

  ColorWipe.prototype.update = function(dt) {
    this.settings.angle += settings.ROTATION_SPEED*(Math.PI/180);

    var len = this.entities.length;
    while (len--) {
      var entity = this.entities[len];
      entity.update(dt);
      if (!entity.alive) {
        this.entities.splice(len, 1);
      }
    }

    this.fire();
  };

  ColorWipe.prototype.draw = function(context) {
    var len = this.entities.length;
    while (len--) {
      var entity = this.entities[len];
      entity.draw(context);
    }
  };

  ColorWipe.prototype.fire = function()
  {
    if(!this.loaded)
    return;

    var p = this.settings.position.duplicate();
    var proj = new Projectile({
      position: p,
      velocity: new Vector2D(Math.cos(this.settings.angle), Math.sin(this.settings.angle)).multiply(settings.PARTICLE_SPEED)
    });

    this.entities.push(proj);

    this.loaded = false;
  };

  return ColorWipe;
})();



Projectile = (function() {
  function Projectile(options) {
    this.settings = {
      position: new Vector2D(0,0),
      velocity: new Vector2D(0,0)
    };

    Pollock.extend(this.settings, options, true);

    this.alive = true;
  };

  Projectile.prototype.update = function(dt) {
    this.settings.position = this.settings.position.add(this.settings.velocity);

    if(!this.inBounds())
    {
      this.kill();
    }
  };

  Projectile.prototype.draw = function(context) {
    var time = Date.now() * 0.00005;
    var h = ( 360 * ( 1.0 + time ) % 360 );
    h = h.toFixed(0);

    context.beginPath();
    context.fillStyle = 'hsl('+h+', '+settings.SATURATION*100+'%, '+settings.LIGHTNESS*100+'%)';
    context.arc(this.settings.position.x, this.settings.position.y, settings.SIZE, 0, 2 * Math.PI, false);

    context.fill();
  };

  Projectile.prototype.inBounds = function() {
    if(this.settings.position.x < 0 || this.settings.position.x > scene.canvas.width)
    return false;

    if(this.settings.position.y < 0 || this.settings.position.y > scene.canvas.height)
    return false;

    return true;
  };

  Projectile.prototype.kill = function(){
    this.alive = false;
  };

  return Projectile;
})();


window.onload = function() {


  var gui = new dat.GUI({
    autoPlace: false
  });


  var customContainer = document.querySelectorAll(".container-full")[0];
  customContainer.appendChild(gui.domElement);

  gui.add(settings, 'ROTATION_SPEED').min(0).max(12);
  gui.add(settings, 'PARTICLE_SPEED').min(1).max(30);
  gui.add(settings, 'SIZE').min(1).max(50);
  gui.add(settings, 'SATURATION').min(0).max(1);
  gui.add(settings, 'LIGHTNESS').min(0).max(1);
  gui.add(settings, 'FIRE_DELAY').min(0).max(2000);

  gui.closed = true;

  initialize();
};
