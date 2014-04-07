var scene;

    function initialize() {

        //initialize the scene
        //this is a simple class that manages the canvas we're using
        scene = new Pollock({
            canvasID: "c", //give it the id of the canvas element
        });

        var fireDirection = -Math.PI/2;
        var fireDirectionVariance = 6*Math.PI/180;
        //create a 'fire' emitter
        scene.addChild(new ParticleEmitter({
            position: new Vector2D(scene.width / 5, scene.height * 4 / 5),
            context: scene.context,
            blendMode: "lighter",
            radial: true,
            sharpness: 60,
            sharpnessVariance: 0,
            maxParticles: 100,
            alive: true,
            positionVariance: new Vector2D(1, 1),
            radius: 0,
            circularDistribution: false,
            direction: fireDirection,
            directionVariance: fireDirectionVariance,
            speed: 0.5,
            speedVariance: 0.4,
            size: 30,
            sizeVariance: 10,
            endSize: 1,
            endSizeVariance: 0,
            life: 800,
            lifeVariance: 500,
            color: [3, 3, 14, 0.5],
            colorVariance: [42, 0, 0, 0],
            endColor: [255, 77, 0, 0.1],
            endColorVariance: [0, 0, 0, 0],
            duration: -1,
            gravitate: false
        }));

        //setting a wind force for the smoke emitter
        //this accelerates them, so you'll want small numbers here
        var wind = new Vector2D(.002, 0);
        var smokeDirection = -Math.PI/2;
        var smokeDirectionVariance = 5*Math.PI/180;
        //create a 'smoke' emitter
        scene.addChild(new ParticleEmitter({
            position: new Vector2D(scene.width / 5, scene.height * 4 / 5),
            context: scene.context,
            radial: true,
            sharpness: 50,
            sharpnessVariance: 0,
            maxParticles: 125,
            alive: true,
            positionVariance: new Vector2D(1, 1),
            radius: 0,
            circularDistribution: false,
            direction: smokeDirection,
            directionVariance: smokeDirectionVariance,
            speed: 0.4,
            speedVariance: 0.25,
            size: 10,
            sizeVariance: 5,
            endSize: 120,
            endSizeVariance: 20,
            life: 8000,
            lifeVariance: 1000,
            color: [0, 0, 0, 0.75],
            colorVariance: [0, 0, 0, 0],
            endColor: [255, 255, 255, 0.1],
            endColorVariance: [0, 0, 0, 0],
            duration: -1,
            gravitate: true,
            forceVector: wind
        }));

        scene.enable();
    }
    window.onload = function() {
        initialize();
    };
