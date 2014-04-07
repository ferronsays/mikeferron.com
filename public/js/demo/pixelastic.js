  $(document).ready(function(){

    $(".pixel").pixelastic({position_x: '75%', position_y: '35%', use_best_css: false});

    $(".radio_fit").change(function(){
      $(".pixel").data("pixelastic").options.fit_type = jQuery(this).val();
      $(".pixel").pixelastic("resize");
    });

    window.setInterval(function()
    {
      var sizes = [150, 175, 200, 225, 250, 275, 300];

      $("#samplewrap").animate({
        width: sizes[Math.floor(Math.random()*sizes.length)],
        height: sizes[Math.floor(Math.random()*sizes.length)]
      },
      {
        duration: 1000,
        step: function(now, fx) {
          $(".pixel").pixelastic("resize");
        }
      });
      }, 5000);
  });
