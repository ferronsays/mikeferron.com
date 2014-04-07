RadialPoint = (function() {

  function RadialPoint(options) {
    this.settings = {
      position: new Vector3D(0, 0, 0),
      velocity: new Vector3D(0, 0, 0),
      color: "#000",
      size: 2,
      theta: 0,
      phi: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      fLen: 320,
      zMax: 318
    };

    Pollock.extend(this.settings, options, true);
  };

  RadialPoint.prototype.update = function(dt) {
    this.rotateX(this.settings.rotateX);
    this.rotateY(this.settings.rotateY);
    this.rotateZ(this.settings.rotateZ);
  };

  RadialPoint.prototype.draw = function(context) {

    x3d = this.settings.position.x;
    y3d = this.settings.position.y;
    z3d = this.settings.position.z;
    var scale = this.settings.fLen / (this.settings.fLen + z3d);
    var x2d = (x3d * scale) + context.canvas.width / 2;
    var y2d = (y3d * scale) + context.canvas.height / 2;

    context.save();
    context.fillStyle = this.settings.color;
    context.beginPath();
    context.arc(x2d, y2d, Math.abs(scale * this.settings.size), 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
    context.restore();
  };

  RadialPoint.prototype.rotateY = function(angle) {
    x = this.settings.position.x;
    z = this.settings.position.z;

    cosRY = Math.cos(angle);
    sinRY = Math.sin(angle);
    tempz = z;
    tempx = x;


    x = (tempx * cosRY) + (tempz * sinRY);
    z = (tempx * -sinRY) + (tempz * cosRY);
    this.settings.position.x = x;
    this.settings.position.z = z;
  };

  RadialPoint.prototype.rotateX = function(angle) {
    y = this.settings.position.y;
    z = this.settings.position.z;

    cosRY = Math.cos(angle);
    sinRY = Math.sin(angle);
    tempz = z;
    tempy = y;


    y = (tempy * cosRY) + (tempz * sinRY);
    z = (tempy * -sinRY) + (tempz * cosRY);
    this.settings.position.y = y;
    this.settings.position.z = z;
  };

  RadialPoint.prototype.rotateZ = function(angle) {
    x = this.settings.position.x;
    y = this.settings.position.y;

    cosRY = Math.cos(angle);
    sinRY = Math.sin(angle);
    tempy = y;
    tempx = x;


    x = (tempx * cosRY) + (tempy * sinRY);
    y = (tempx * -sinRY) + (tempy * cosRY);
    this.settings.position.x = x;
    this.settings.position.y = y;
  };

  return RadialPoint;
})();
