var scene;

var emitterPos;
var mousePos;

var presets = {
  "preset": "Fire",
  "remembered": {
    "Fire": {
      "0": {
        "MAX_PARTICLES": 400,
        "ROTATION_SPEED": 0,
        "ANGLE": -90,
        "ANGLE_VARIANCE": 3,
        "X_VARIANCE": 10,
        "Y_VARIANCE": 2,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": 1.5,
        "SPEED_VARIANCE": 1,
        "LIFE": 1000,
        "LIFE_VARIANCE": 800,
        "SIZE": 50,
        "SIZE_VARIANCE": 10,
        "END_SIZE": 10,
        "END_SIZE_VARIANCE": 5,
        "GRAVITY_X": 0,
        "GRAVITY_Y": 0,
        "COLOR_R": 2.7759823099166523,
        "COLOR_G": 2.81233844563157,
        "COLOR_B": 14.37632135306554,
        "COLOR_A": 0.5,
        "COLOR_R_VARIANCE": 42.18507668447355,
        "COLOR_G_VARIANCE": 0,
        "COLOR_B_VARIANCE": 0,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 255,
        "END_COLOR_G": 77,
        "END_COLOR_B": 0,
        "END_COLOR_A": 0.1,
        "END_COLOR_R_VARIANCE": 0,
        "END_COLOR_G_VARIANCE": 0,
        "END_COLOR_B_VARIANCE": 0,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#ecf0f1",
        "RADIAL": true,
        "RADIAL_SHARPNESS": 65,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "lighter",
        "CLEAR": true
      }
    },
    "Snow": {
      "0": {
        "MAX_PARTICLES": 400,
        "ROTATION_SPEED": 0,
        "ANGLE": -90,
        "ANGLE_VARIANCE": 93.30346372565914,
        "X_VARIANCE": 500,
        "Y_VARIANCE": 500,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": -0.9564018611063236,
        "SPEED_VARIANCE": 0,
        "LIFE": 5074.826638477802,
        "LIFE_VARIANCE": 1900,
        "SIZE": 1,
        "SIZE_VARIANCE": 1,
        "END_SIZE": 8,
        "END_SIZE_VARIANCE": 2.3,
        "GRAVITY_X": 0,
        "GRAVITY_Y": 0,
        "COLOR_R": 255,
        "COLOR_G": 255,
        "COLOR_B": 255,
        "COLOR_A": 0.5,
        "COLOR_R_VARIANCE": 42.18507668447355,
        "COLOR_G_VARIANCE": 0,
        "COLOR_B_VARIANCE": 0,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 255,
        "END_COLOR_G": 255,
        "END_COLOR_B": 255,
        "END_COLOR_A": 0.1,
        "END_COLOR_R_VARIANCE": 0,
        "END_COLOR_G_VARIANCE": 0,
        "END_COLOR_B_VARIANCE": 0,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#666",
        "RADIAL": true,
        "RADIAL_SHARPNESS": 65,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "lighter",
        "CLEAR": true
      }
    },
    "Waterfall": {
      "0": {
        "MAX_PARTICLES": 687.8083157152925,
        "ROTATION_SPEED": 0,
        "ANGLE": -90,
        "ANGLE_VARIANCE": 93.30346372565914,
        "X_VARIANCE": 155.60253699788584,
        "Y_VARIANCE": 0,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": 0,
        "SPEED_VARIANCE": 0,
        "LIFE": 4736.571529245947,
        "LIFE_VARIANCE": 3044.397463002114,
        "SIZE": 46.857659831121836,
        "SIZE_VARIANCE": 11.02877821816302,
        "END_SIZE": 29.388075133551613,
        "END_SIZE_VARIANCE": 14.337411683611926,
        "GRAVITY_X": 0,
        "GRAVITY_Y": 1,
        "COLOR_R": 0,
        "COLOR_G": 0,
        "COLOR_B": 46,
        "COLOR_A": 1,
        "COLOR_R_VARIANCE": 0,
        "COLOR_G_VARIANCE": 0,
        "COLOR_B_VARIANCE": 0,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 42.18507668447355,
        "END_COLOR_G": 42.18507668447355,
        "END_COLOR_B": 167,
        "END_COLOR_A": 1,
        "END_COLOR_R_VARIANCE": 0,
        "END_COLOR_G_VARIANCE": 0,
        "END_COLOR_B_VARIANCE": 0,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#ecf0f1",
        "RADIAL": true,
        "RADIAL_SHARPNESS": 76.42943305186972,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "lighter",
        "CLEAR": true
      }
    },
    "Rain": {
      "0": {
        "MAX_PARTICLES": 687.8083157152925,
        "ROTATION_SPEED": 0,
        "ANGLE": -90,
        "ANGLE_VARIANCE": 0,
        "X_VARIANCE": 400,
        "Y_VARIANCE": 0,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": -9,
        "SPEED_VARIANCE": 0,
        "LIFE": 4736.571529245947,
        "LIFE_VARIANCE": 3044.397463002114,
        "SIZE": 13.010339479579528,
        "SIZE_VARIANCE": 0,
        "END_SIZE": 13,
        "END_SIZE_VARIANCE": 0,
        "GRAVITY_X": 0,
        "GRAVITY_Y": 1,
        "COLOR_R": 53.43443046699983,
        "COLOR_G": 53.43443046699983,
        "COLOR_B": 208.11304497673618,
        "COLOR_A": 1,
        "COLOR_R_VARIANCE": 0,
        "COLOR_G_VARIANCE": 0,
        "COLOR_B_VARIANCE": 0,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 42.18507668447355,
        "END_COLOR_G": 42.18507668447355,
        "END_COLOR_B": 191.23901430294674,
        "END_COLOR_A": 1,
        "END_COLOR_R_VARIANCE": 0,
        "END_COLOR_G_VARIANCE": 0,
        "END_COLOR_B_VARIANCE": 0,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#ecf0f1",
        "RADIAL": true,
        "RADIAL_SHARPNESS": 45.6591418231949,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "source-over",
        "CLEAR": true
      }
    },
    "Smoke": {
      "0": {
        "MAX_PARTICLES": 474.23746338100983,
        "ROTATION_SPEED": 0,
        "ANGLE": -90,
        "ANGLE_VARIANCE": 34.5,
        "X_VARIANCE": 9,
        "Y_VARIANCE": 0,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": 1.5393774451437316,
        "SPEED_VARIANCE": 0,
        "LIFE": 4736.571529245947,
        "LIFE_VARIANCE": 1985.1800792693434,
        "SIZE": 30,
        "SIZE_VARIANCE": 13,
        "END_SIZE": 44,
        "END_SIZE_VARIANCE": 8,
        "GRAVITY_X": 1,
        "GRAVITY_Y": 0,
        "COLOR_R": 30,
        "COLOR_G": 30,
        "COLOR_B": 30,
        "COLOR_A": 1,
        "COLOR_R_VARIANCE": 0,
        "COLOR_G_VARIANCE": 0,
        "COLOR_B_VARIANCE": 0,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 140,
        "END_COLOR_G": 140,
        "END_COLOR_B": 140,
        "END_COLOR_A": 0.1764604514906083,
        "END_COLOR_R_VARIANCE": 0,
        "END_COLOR_G_VARIANCE": 0,
        "END_COLOR_B_VARIANCE": 0,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#ecf0f1",
        "RADIAL": true,
        "RADIAL_SHARPNESS": 5.95554023780803,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "source-over",
        "CLEAR": true
      }
    },
    "Confetti": {
      "0": {
        "MAX_PARTICLES": 400,
        "ROTATION_SPEED": 0,
        "ANGLE": -90,
        "ANGLE_VARIANCE": 9.925900396346718,
        "X_VARIANCE": 0,
        "Y_VARIANCE": 0,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": 3.28117026705222,
        "SPEED_VARIANCE": 1,
        "LIFE": 3971.227813200069,
        "LIFE_VARIANCE": 2316.043425814234,
        "SIZE": 5.367396174392555,
        "SIZE_VARIANCE": 3.3086334654489056,
        "END_SIZE": 7.551094261588833,
        "END_SIZE_VARIANCE": 2.2057556436326036,
        "GRAVITY_X": 0,
        "GRAVITY_Y": 3.7480613475788402,
        "COLOR_R": 129.38689217758986,
        "COLOR_G": 129.38689217758986,
        "COLOR_B": 129.38689217758986,
        "COLOR_A": 1,
        "COLOR_R_VARIANCE": 138.01268498942918,
        "COLOR_G_VARIANCE": 138.01268498942918,
        "COLOR_B_VARIANCE": 134.99224539031533,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 123.74289160778908,
        "END_COLOR_G": 126.55523005342064,
        "END_COLOR_B": 129.36756849905223,
        "END_COLOR_A": 1,
        "END_COLOR_R_VARIANCE": 123.74289160778908,
        "END_COLOR_G_VARIANCE": 126.55523005342064,
        "END_COLOR_B_VARIANCE": 123.74289160778908,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#ecf0f1",
        "RADIAL": false,
        "RADIAL_SHARPNESS": 89.33310356712046,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "source-over",
        "CLEAR": true
      }
    },
    "Starburst": {
      "0": {
        "MAX_PARTICLES": 400,
        "ROTATION_SPEED": 12,
        "ANGLE": 150.00000000000003,
        "ANGLE_VARIANCE": 3,
        "X_VARIANCE": 24.263312079958645,
        "Y_VARIANCE": 5,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": 1.5,
        "SPEED_VARIANCE": 1,
        "LIFE": 2978.6708599000517,
        "LIFE_VARIANCE": 1900,
        "SIZE": 30,
        "SIZE_VARIANCE": 20,
        "END_SIZE": 10,
        "END_SIZE_VARIANCE": 5,
        "GRAVITY_X": 0,
        "GRAVITY_Y": 0,
        "COLOR_R": 2.7759823099166523,
        "COLOR_G": 2.81233844563157,
        "COLOR_B": 14.37632135306554,
        "COLOR_A": 0.5,
        "COLOR_R_VARIANCE": 42.18507668447355,
        "COLOR_G_VARIANCE": 0,
        "COLOR_B_VARIANCE": 0,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 255,
        "END_COLOR_G": 77,
        "END_COLOR_B": 0,
        "END_COLOR_A": 0.1,
        "END_COLOR_R_VARIANCE": 0,
        "END_COLOR_G_VARIANCE": 0,
        "END_COLOR_B_VARIANCE": 0,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#ecf0f1",
        "RADIAL": true,
        "RADIAL_SHARPNESS": 65,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "lighter",
        "CLEAR": false
      }
    },
    "Cloud": {
      "0": {
        "MAX_PARTICLES": 55.143891090815096,
        "ROTATION_SPEED": 0,
        "ANGLE": -90,
        "ANGLE_VARIANCE": 34.5,
        "X_VARIANCE": 99.25900396346717,
        "Y_VARIANCE": 27.571945545407548,
        "DURATION": -1,
        "FOLLOW_MOUSE": false,
        "SPEED": 0,
        "SPEED_VARIANCE": 0,
        "LIFE": 11911.683439600207,
        "LIFE_VARIANCE": 2977.770118904015,
        "SIZE": 100,
        "SIZE_VARIANCE": 9.925900396346716,
        "END_SIZE": 100,
        "END_SIZE_VARIANCE": 19.85180079269343,
        "GRAVITY_X": 0,
        "GRAVITY_Y": 0,
        "COLOR_R": 255,
        "COLOR_G": 255,
        "COLOR_B": 255,
        "COLOR_A": 1,
        "COLOR_R_VARIANCE": 0,
        "COLOR_G_VARIANCE": 0,
        "COLOR_B_VARIANCE": 0,
        "COLOR_A_VARIANCE": 0,
        "END_COLOR_R": 255,
        "END_COLOR_G": 255,
        "END_COLOR_B": 255,
        "END_COLOR_A": 0.1764604514906083,
        "END_COLOR_R_VARIANCE": 0,
        "END_COLOR_G_VARIANCE": 0,
        "END_COLOR_B_VARIANCE": 0,
        "END_COLOR_A_VARIANCE": 0,
        "BACKGROUND_COLOR": "#666",
        "RADIAL": true,
        "RADIAL_SHARPNESS": 48.63691194209891,
        "RADIAL_SHARPNESS_VARIANCE": 0,
        "BLEND_MODE": "source-over",
        "CLEAR": true
      }
    }
  },
  "closed": false,
  "folders": {
    "Emitter": {
      "preset": "Fire",
      "closed": true,
      "folders": {}
    },
    "Particles": {
      "preset": "Fire",
      "closed": true,
      "folders": {}
    },
    "Particle Colors": {
      "preset": "Fire",
      "closed": true,
      "folders": {}
    },
    "Misc. Graphics": {
      "preset": "Fire",
      "closed": true,
      "folders": {}
    }
  }
};

var DATOptions = function()
{
  this.ROTATION_SPEED = 0;
  this.ANGLE = 270;
  this.ANGLE_VARIANCE = 3;
  this.X_VARIANCE = 20;
  this.Y_VARIANCE = 5;
  this.MAX_PARTICLES = 400;
  this.SPEED = 1.5;
  this.SPEED_VARIANCE = 1;
  this.LIFE = 2000;
  this.LIFE_VARIANCE = 1900;
  this.SIZE = 30;
  this.SIZE_VARIANCE = 20;
  this.END_SIZE = 10;
  this.END_SIZE_VARIANCE = 5;
  this.COLOR_R = 0;
  this.COLOR_G = 0;
  this.COLOR_B = 25;
  this.COLOR_A = .5;
  this.COLOR_R_VARIANCE = 0;
  this.COLOR_G_VARIANCE = 0;
  this.COLOR_B_VARIANCE = 0;
  this.COLOR_A_VARIANCE = 0;
  this.END_COLOR_R = 255;
  this.END_COLOR_G = 77;
  this.END_COLOR_B = 0;
  this.END_COLOR_A = .1;
  this.END_COLOR_R_VARIANCE = 0;
  this.END_COLOR_G_VARIANCE = 0;
  this.END_COLOR_B_VARIANCE = 0;
  this.END_COLOR_A_VARIANCE = 0;
  this.RADIAL_SHARPNESS = 65;
  this.RADIAL_SHARPNESS_VARIANCE = 0;
  this.GRAVITY_X = 0;
  this.GRAVITY_Y = 0;
  this.RADIAL = true;
  this.BLEND_MODE = "lighter";
  this.BACKGROUND_COLOR = "#333";
  this.DURATION = -1;
  this.FOLLOW_MOUSE = false;
  this.MOUSE_POSITION = null;
  this.CLEAR = true;

  this.RESET = function()
  {
    //this assumes there is just one...
    scene.emitter.disable();
    scene.emitter.enable();
  };

}, options;

var settings = new DATOptions();


Scene = function(canvas_id) {
  this.init(canvas_id);
};

Scene.prototype.init = function(canvas_id) {

  this.current_time = new Date().getTime();

  this.dt = 0;

  this.canvas = document.getElementById(canvas_id);

  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;

  this.width = this.canvas.width;
  this.height = this.canvas.height;

  this.ctx = this.canvas.getContext('2d');

  //this.entities = [];

  emitterPos = new Vector(this.width/2, this.height/2);

  this.emitter = new Emitter(
    emitterPos,
    this.ctx
  );

  //this.entities.push(emitter);
};

Scene.prototype.getCanvasContext = function() {
  return this.ctx;
};

Scene.prototype.enable = function() {
  var that = this;

  window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame
    })();

  this.animate(new Date().getTime());

  function doResize()
  {
    that.canvasResize();
  }

  var endResize;

  window.onresize = function(e) {
    clearTimeout(endResize);
    endResize = setTimeout(doResize, 100);
  };

  document.getElementById("c").onmousemove = function(e){
    var mouseX, mouseY;
    if(e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if(e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }

    mousePos = new Vector(mouseX, mouseY);
  }


  return this;
};

Scene.prototype.animate = function(time)
{
    var that = this;
    this.animationFrame = requestAnimFrame( function(){ that.animate(new Date().getTime());} );
    this.update(time);
};

Scene.prototype.disable = function() {

  window.cancelAnimationFrame(this.animationFrame);

  return this;
};

Scene.prototype.canvasResize = function()
{
  this.canvas = document.getElementById("c");
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;

  this.width = this.canvas.width;
  this.height = this.canvas.height;

  emitterPos = new Vector(this.width/2, this.height/2);

  this.ctx.clearRect(0, 0, this.width, this.height);
  //this.entities = new Array();

};

Scene.prototype.update = function(time) {
  this.draw();

  this.dt = time - this.current_time;
  this.current_time = time;

  document.body.style.background = settings.BACKGROUND_COLOR;

  //for (var i = 0; i < this.entities.length; i++) {

    this.emitter.step(this.dt);

    this.emitter.draw();
  //}


};

Scene.prototype.draw = function()
{
  if(settings.CLEAR)
  {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = 'transparent';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
};



Emitter = function(position, ctx){
  this.init(position, ctx);
};

Emitter.prototype.init = function(position, ctx)
{
  this.particles = [];

  this.active = true;
  this.pos = position.duplicate();
  this.origPosition = this.pos.duplicate();
  this.positionVariance = new Vector();

  this.angle = degreesToRadians(settings.ANGLE);

  this.emitCounter = 0;
  this.elapsedTime = 0;

  this.duration = settings.DURATION;

  this.ctx = ctx;

  this.w = 0;
  this.h = 0;
};

Emitter.prototype.fire = function()
{

  var r_Pos = this.pos.duplicate();
  r_Pos.x = r_Pos.x + this.positionVariance.x*randomPosNeg();
  r_Pos.y = r_Pos.y + this.positionVariance.y*randomPosNeg();

  var r_Angle = this.angle + degreesToRadians(settings.ANGLE_VARIANCE*randomPosNeg());
  var r_Speed = settings.SPEED + settings.SPEED_VARIANCE*randomPosNeg();

  var r_Dir = new Vector(Math.cos(r_Angle), Math.sin(r_Angle)).multiply(r_Speed);

  var r_Size = settings.SIZE + settings.SIZE_VARIANCE*randomPosNeg();
  r_Size = r_Size < 0 ? 0 : ~~r_Size;

  var r_EndSize = settings.END_SIZE + settings.END_SIZE_VARIANCE*randomPosNeg();
  r_EndSize = r_EndSize < 0 ? 0 : ~~r_EndSize;

  var r_Life = settings.LIFE + settings.LIFE_VARIANCE*randomPosNeg();

  var r_DeltaSize = (r_EndSize - r_Size) / r_Life;

  var r_Sharp = settings.RADIAL_SHARPNESS + settings.RADIAL_SHARPNESS_VARIANCE*randomPosNeg();
  r_Sharp = r_Sharp > 100 ? 100 : r_Sharp < 0 ? 0 : r_Sharp;

  var r_Inner = ~~( ( r_Size / 200 ) * r_Sharp);


  var start = [
      settings.COLOR_R + settings.COLOR_R_VARIANCE * randomPosNeg(),
      settings.COLOR_G + settings.COLOR_G_VARIANCE * randomPosNeg(),
      settings.COLOR_B + settings.COLOR_B_VARIANCE * randomPosNeg(),
      settings.COLOR_A + settings.COLOR_A_VARIANCE * randomPosNeg()
    ];

    var end = [
      settings.END_COLOR_R + settings.END_COLOR_R_VARIANCE * randomPosNeg(),
      settings.END_COLOR_G + settings.END_COLOR_G_VARIANCE * randomPosNeg(),
      settings.END_COLOR_B + settings.END_COLOR_B_VARIANCE * randomPosNeg(),
      settings.END_COLOR_A + settings.END_COLOR_A_VARIANCE * randomPosNeg()
    ];

  var r_Color = start;

  var r_DeltaColor = [];
  r_DeltaColor[ 0 ] = ( end[ 0 ] - start[ 0 ] ) / r_Life;
  r_DeltaColor[ 1 ] = ( end[ 1 ] - start[ 1 ] ) / r_Life;
  r_DeltaColor[ 2 ] = ( end[ 2 ] - start[ 2 ] ) / r_Life;
  r_DeltaColor[ 3 ] = ( end[ 3 ] - start[ 3 ] ) / r_Life;



  //var p = this.pos.duplicate();
  //var a_vec = new Vector(Math.cos(r_Angle)* this.w, Math.sin(r_Angle) * this.w);
  //var barrel_pos = p.add(a_vec);

  var proj = new Particle(
    r_Pos,
    r_Dir,
    r_Size,
    r_DeltaSize,
    r_Life,
    r_Sharp,
    r_Inner,
    r_Color,
    r_DeltaColor,
    this.ctx
  );

  this.particles.push(proj);
};

Emitter.prototype.step = function(dt)
{
  this.pos = emitterPos;

  if(settings.FOLLOW_MOUSE)
    this.pos = mousePos;
  else
    this.pos = emitterPos;

  if(settings.ROTATION_SPEED != 0)
    this.angle += settings.ROTATION_SPEED*(Math.PI/180);
  else
    this.angle = degreesToRadians(settings.ANGLE);

  this.angle = wrapAngle(this.angle);
  settings.ANGLE = radiansToDegrees(this.angle);

  this.emissionRate = settings.MAX_PARTICLES / settings.LIFE;

  this.positionVariance.x = settings.X_VARIANCE;
  this.positionVariance.y = settings.Y_VARIANCE;

  this.duration = settings.DURATION;

  if(this.active && this.emissionRate > 0)
  {
    var rate = 1 / this.emissionRate;
    this.emitCounter += dt;

    while(this.particles.length < settings.MAX_PARTICLES && this.emitCounter > rate)
    {
      this.fire();
      this.emitCounter -= rate;
    }

    this.elapsedTime += dt;
    if( this.duration != -1 && this.duration < this.elapsedTime ){
        this.disable();
    }
  }

  for (var i = this.particles.length;i--;) {
    if(this.particles[i].dead)
    {
      this.particles.splice(i, 1);
      continue;
    }

    this.particles[i].step(dt);

    this.particles[i].draw();
  }
};

Emitter.prototype.draw = function(){

  //this.ctx.beginPath();
  //this.ctx.arc(this.pos.x, this.pos.y, 10, 0, 2 * Math.PI, false);
  //this.ctx.fillStyle = "#333";
  //this.ctx.fill();

};

Emitter.prototype.disable = function()
{
  this.active = false;
  this.elapsedTime = 0;
  this.emitCounter = 0;
}

Emitter.prototype.enable = function()
{
  this.active = true;
}


Particle = function(position, velocity, size, deltaSize, life, sharpness, inner, color, deltaColor, ctx){
  this.init(position, velocity, size, deltaSize, life, sharpness, inner, color, deltaColor, ctx);
};

Particle.prototype.init = function(position, velocity, size, deltaSize, life, sharpness, inner, color, deltaColor, ctx){
  this.pos = position.duplicate();
  this.velocity = velocity.duplicate();
  this.size = size;
  this.deltaSize = deltaSize;
  this.lifeTime = life;
  this.color = color;
  this.drawColor = "";
  this.deltaColor = deltaColor;
  this.sharpness = sharpness;
  this.inner = inner;

  this.ctx = ctx;

  this.birth = Date.now();
  this.age = 1;
};

Particle.prototype.step = function(dt)
{
  this.age += dt;

  if(this.age > this.lifeTime)
  {
    this.dead = true;
    return;
  }

  this.velocity = this.velocity.add(this.gravitate());
  this.pos = this.pos.add(this.velocity);

  //kill it if our movement brought it out of the picture
  if(this.outOfBounds())
  {
    this.dead = true;
    return;
  }

  //update our sizes
  this.size += this.deltaSize*dt;
  if(settings.RADIAL)
    this.inner = ~~( ( this.size / 200 ) * this.sharpness);

  //linear easing the color...
  //would be cool to add different easing options, but that would require a lot more processing
  //as the delta would not be constant...
  var r = this.color[0] += ( this.deltaColor[0] * dt );
  var g = this.color[1] += ( this.deltaColor[1] * dt );
  var b = this.color[2] += ( this.deltaColor[2] * dt );
  var a = this.color[3] += ( this.deltaColor[3] * dt );

  //clamp 'em
  r = ( r > 255 ? 255 : r < 0 ? 0 : ~~r ),
  g = ( g > 255 ? 255 : g < 0 ? 0 : ~~g ),
  b = ( b > 255 ? 255 : b < 0 ? 0 : ~~b ),
  a = (a > 1 ? 1 : a < 0 ? 0 : a.toFixed( 2 ) );

  this.drawColor = 'rgba('+r+','+g+','+b+','+a+')';
  this.drawColorTransparent = 'rgba('+r+','+g+','+b+', 0)';
};

Particle.prototype.gravitate = function()
{
  var g = new Vector();

  g.add(new Vector(settings.GRAVITY_X/100, settings.GRAVITY_Y/100));

  return g;
};

Particle.prototype.outOfBounds = function()
{
  var xMin = yMin = 0 - this.size;
  var xMax = this.ctx.canvas.width + this.size;
  var yMax = this.ctx.canvas.height + this.size;

  if(this.pos.x < xMin || this.pos.x > xMax)
      return true;

  if(this.pos.y < yMin || this.pos.y > yMax)
    return true;

  return false;
};

Particle.prototype.draw = function(){

  if(this.dead)
    return;

  if(settings.RADIAL)
  {
    var halfSize = this.size >> 1;
    var x = ~~(this.pos.x - halfSize);
    var y = ~~(this.pos.y - halfSize);

    var radgrad = this.ctx.createRadialGradient( x + halfSize, y + halfSize, this.inner, x + halfSize, y + halfSize, halfSize);
    radgrad.addColorStop( 0, this.drawColor );
    radgrad.addColorStop( 1, this.drawColorTransparent );

    this.ctx.save();
    this.ctx.globalCompositeOperation = settings.BLEND_MODE;
    this.ctx.fillStyle = radgrad;
    this.ctx.fillRect( x, y, this.size,  this.size );
    this.ctx.restore();

  }else{
    this.ctx.save();
    this.ctx.globalCompositeOperation = settings.BLEND_MODE;
    this.ctx.beginPath();
    this.ctx.fillStyle = this.drawColor;
    this.ctx.arc(this.pos.x, this.pos.y, this.size/2, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.restore();
  }

};


function initialize() {
  scene = new Scene("c");
  scene.enable();
}

window.onload = function() {

  mousePos = new Vector(-9001,0); //over 9000!  just starting it off the screen

  var gui = new dat.GUI({
    load: presets,
    autoPlace: false
  });

  var customContainer = document.querySelectorAll(".container-full")[0];
  customContainer.appendChild(gui.domElement);

  gui.remember(settings);

  var f1 = gui.addFolder('Emitter');
  var f2 = gui.addFolder('Particles');
  var f4 = gui.addFolder('Particle Colors');
  var f3 = gui.addFolder('Misc. Graphics');

  f1.add(settings, 'MAX_PARTICLES').min(0).max(1000);
  f1.add(settings, 'ROTATION_SPEED').min(-12).max(12);
  f1.add(settings, 'ANGLE').min(-180).max(180).listen();
  f1.add(settings, 'ANGLE_VARIANCE').min(0).max(180);
  f1.add(settings, 'X_VARIANCE').min(0).max(500);
  f1.add(settings, 'Y_VARIANCE').min(0).max(500);

  f1.add(settings, 'DURATION').min(-1).max(10000);
  f1.add(settings, 'FOLLOW_MOUSE');
  f1.add(settings, 'RESET');


  f2.add(settings, 'SPEED').min(-10).max(10);
  f2.add(settings, 'SPEED_VARIANCE').min(0).max(30);
  f2.add(settings, 'LIFE').min(1).max(30000);
  f2.add(settings, 'LIFE_VARIANCE').min(0).max(30000);
  f2.add(settings, 'SIZE').min(1).max(100);
  f2.add(settings, 'SIZE_VARIANCE').min(0).max(100);
  f2.add(settings, 'END_SIZE').min(1).max(100);
  f2.add(settings, 'END_SIZE_VARIANCE').min(0).max(100);
  f2.add(settings, 'GRAVITY_X').min(-30).max(30);
  f2.add(settings, 'GRAVITY_Y').min(-30).max(30);


  f4.add(settings, 'COLOR_R').min(0).max(255);
  f4.add(settings, 'COLOR_G').min(0).max(255);
  f4.add(settings, 'COLOR_B').min(0).max(255);
  f4.add(settings, 'COLOR_A').min(0).max(1);
  f4.add(settings, 'COLOR_R_VARIANCE').min(0).max(255);
  f4.add(settings, 'COLOR_G_VARIANCE').min(0).max(255);
  f4.add(settings, 'COLOR_B_VARIANCE').min(0).max(255);
  f4.add(settings, 'COLOR_A_VARIANCE').min(0).max(1);
  f4.add(settings, 'END_COLOR_R').min(0).max(255);
  f4.add(settings, 'END_COLOR_G').min(0).max(255);
  f4.add(settings, 'END_COLOR_B').min(0).max(255);
  f4.add(settings, 'END_COLOR_A').min(0).max(1);
  f4.add(settings, 'END_COLOR_R_VARIANCE').min(0).max(255);
  f4.add(settings, 'END_COLOR_G_VARIANCE').min(0).max(255);
  f4.add(settings, 'END_COLOR_B_VARIANCE').min(0).max(255);
  f4.add(settings, 'END_COLOR_A_VARIANCE').min(0).max(1);


  f3.addColor(settings, 'BACKGROUND_COLOR');
  f3.add(settings, 'RADIAL');
  f3.add(settings, 'RADIAL_SHARPNESS').min(0).max(90);
  f3.add(settings, 'RADIAL_SHARPNESS_VARIANCE').min(0).max(100);
  //not giving all composite options since they won't all have an effect
  f3.add(settings, 'BLEND_MODE', ['source-over', 'lighter', 'darker', 'xor']);
  var clear = f3.add(settings, 'CLEAR');

  gui.closed = true;

  //kill the particles so it doesn't muck up the screen here
  clear.onChange(function(value) {
    //assuming there is just one
    scene.emitter.particles = [];
  });

  initialize();
};


/* support functions */
randomPosNeg = function()
{
  return Math.random()*2-1;
}

degreesToRadians = function (degrees)
{
  return (degrees*Math.PI)/180;
}

radiansToDegrees = function (radians)
{
  return (radians*180)/Math.PI;
}

wrapAngle = function(angle)
{
  while (angle < -Math.PI)
  {
        angle += Math.PI*2;
  }
  while (angle > Math.PI)
  {
      angle -= Math.PI*2;
  }

  return angle;
}

//vector object adapted from https://github.com/hornairs/blog/blob/master/assets/coffeescripts/flocking/vector.coffee
Vector = (function() {
  var name, _fn, _i, _len, _ref;

  _ref = ['add', 'subtract', 'multiply', 'divide'];

  _fn = function(name) {
    return Vector[name] = function(a, b) {
      return a.duplicate()[name](b);
    };
  };

  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    _fn(name);
  }

  function Vector(x, y) {

    if (x == null)
      x = 0;

    if (y == null)
      y = 0;

    this.x = x, this.y = y;
  }

  Vector.prototype.duplicate = function() {
    return new Vector(this.x, this.y);
  };

  Vector.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  Vector.prototype.normalize = function() {
    var m;

    m = this.magnitude();

    if (m > 0)
      this.divide(m);

    return this;
  };

  Vector.prototype.limit = function(max) {
    if (this.magnitude() > max) {
      this.normalize();

      return this.multiply(max);
    } else {

      return this;
    }
  };

  Vector.prototype.heading = function() {
    return -1 * Math.atan2(-1 * this.y, this.x);
  };

  Vector.prototype.eucl_distance = function(other) {
    var dx, dy;

    dx = this.x - other.x;
    dy = this.y - other.y;

    return Math.sqrt(dx * dx + dy * dy);
  };

  Vector.prototype.distance = function(other, dimensions) {
    var dx, dy;

    if (dimensions == null)
      dimensions = false;


    dx = Math.abs(this.x - other.x);
    dy = Math.abs(this.y - other.y);

    if (dimensions) {
      dx = dx < dimensions.width / 2 ? dx : dimensions.width - dx;
      dy = dy < dimensions.height / 2 ? dy : dimensions.height - dy;
    }

    return Math.sqrt(dx * dx + dy * dy);
  };

  Vector.prototype.subtract = function(other) {
    this.x -= other.x;
    this.y -= other.y;

    return this;
  };

  Vector.prototype.add = function(other) {
    this.x += other.x;
    this.y += other.y;

    return this;
  };

  Vector.prototype.divide = function(n) {
    this.x = this.x/n, this.y = this.y/n;

    return this;
  };

  Vector.prototype.multiply = function(n) {
    this.x = this.x*n, this.y = this.y*n;

    return this;
  };

  Vector.prototype.dot = function(other) {
    return this.x * other.x + this.y * other.y;
  };

  Vector.prototype.projectOnto = function(other) {
    return other.duplicate().multiply(this.dot(other));
  };

  Vector.prototype.wrapRelativeTo = function(position, dimensions) {
    var a, d, key, map_d, v, _ref1;

    v = this.duplicate();
    _ref1 = {
      x: "width",
      y: "height"
    };

    for (a in _ref1) {
      key = _ref1[a];
      d = this[a] - position[a];
      map_d = dimensions[key];
      if (Math.abs(d) > map_d / 2) {
        if (d > 0) {
          v[a] = (map_d - this[a]) * -1;
        } else {
          v[a] = this[a] + map_d;
        }
      }
    }
    return v;
  };

  Vector.prototype.invalid = function() {
    return (this.x === Infinity) || isNaN(this.x) || this.y === Infinity || isNaN(this.y);
  };

  return Vector;

})();
