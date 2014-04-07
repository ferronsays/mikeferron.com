Planet = (function() {
  function Planet(options) {
    this.settings = {
      position: new Vector3D(0, 0, 0),
      fLen: 320, // field of view
      zMax: 318,
      atmosphere: {
        color: '#ecf0f1',
        radius: 170,
        size: 8,
        count: 200,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      },
      earth: {
        color: '#27ae60',
        radius: 150,
        size: 15,
        count: 200,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      },
      water: {
        color: '#2980b9',
        radius: 140,
        size: 20,
        count: 300,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      },
    };

    this.alive = true;

    Pollock.extend(this.settings, options, true);

    this.staticPoints = [];
    this.dynamicPoints = [];

    var that = this;

    function letThereBe(config) {
      for (var i = 0; i < config.count; i++) {
        theta = Math.random() * 2 * Math.PI;
        phi = Math.acos(Math.random() * 2 - 1);
        x0 = config.radius * Math.sin(phi) * Math.cos(theta);
        y0 = config.radius * Math.sin(phi) * Math.sin(theta);
        z0 = config.radius * Math.cos(phi);
        var sign = Math.random() > 0.5 ? 1 : -1;

        var velocity = new Vector3D();

        var sPoint = new RadialPoint({
          position: new Vector3D(x0, y0, z0),
          velocity: velocity,
          color: config.color,
          size: config.size,
          theta: theta,
          phi: phi,
          rotateX: config.rotateX,
          rotateY: config.rotateY,
          rotateZ: config.rotateZ,
          fLen: that.settings.fLen,
          zMax: that.settings.zMax
        });

        that.staticPoints.push(sPoint);
      }
    }

    letThereBe(this.settings.atmosphere);
    letThereBe(this.settings.water);
    letThereBe(this.settings.earth);
  };

  Planet.prototype.update = function(dt) {
    for (var i in this.staticPoints) {
      this.staticPoints[i].update(dt);
    }

    for (i in this.dynamicPoints) {
      this.dynamicPoints[i].update(dt);
    }
  };

  Planet.prototype.draw = function(context) {
    var allPoints = this.staticPoints.concat(this.dynamicPoints);

    allPoints.sort(zSort);

    for (var i in allPoints) {
      allPoints[i].draw(context);
    }
  };

  return Planet;
})();
