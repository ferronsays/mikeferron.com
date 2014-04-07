StarField = (function() {
    function StarField(options) {
        this.settings = {
            count: 150,
            width: 300,
            height: 300
        };

        this.alive = true;
        Pollock.extend(this.settings, options, true);

        var tempC = document.createElement('canvas'),
            tmpCtx = tempC.getContext('2d'),
            cw = tempC.width = this.settings.width;
        ch = tempC.height = this.settings.height;

        for (var j = 0; j < this.settings.count; j++) {

            var brightness = Pollock.randomInRange(30, 70) / 100;
            tmpCtx.beginPath();
            tmpCtx.fillStyle = "rgba(255,255,255," + brightness + ")";
            tmpCtx.arc(Pollock.randomInRange(0, this.settings.width), Pollock.randomInRange(0, this.settings.height), Math.random() * 1.5, 0, Math.PI * 2, true);
            tmpCtx.fill();
        }

        scene.canvas.style.backgroundImage = "url('" + tempC.toDataURL() + "')";

        tmpCtx.clearRect(0, 0, cw, ch);
    };

    StarField.prototype.update = function(dt) {
        return;
    };

    StarField.prototype.draw = function(context) {
        return;
    };

    return StarField;
})();
