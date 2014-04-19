---
layout: project
title:  "Pixelastic.js"
date:   2014-01-01 00:00:45
categories: projects
description: A jQuery plugin for reactive&nbsp;images.
thumbnail: beach.jpg
extra_css:
  - demo_pixelastic.css
extra_js:
  - jquery.min.js
  - jquery.pixelastic.min.js
  - demo/pixelastic.js
---
A simple image plugin for jQuery that uses CSS3's background-size function --or pretends to-- if the browser doesn't support it.

<div id="democontain">
  <div id="samplewrap">
    <div class="pixel sample">
      <img src="/public/img/beach.jpg"/>
    </div>
  </div>
</div>
###### Demo Controls ######
<div id="controlcontain">
  <ul id="controllist">
    <li>
      <label><input type="radio" name="fit_type" class="radio_fit" value="cover" checked="checked"/> Cover</label>
    </li>
    <li>
      <label><input type="radio" name="fit_type" class="radio_fit" value="focus"/> Focus</label>
    </li>
    <li>
      <lable><input type="radio" name="fit_type" class="radio_fit" value="contain"/> Contain</label>
    </li>
    <li>
      <label><input type="radio" name="fit_type" class="radio_fit" value="width"/> Width</label>
    </li>
    <li>
      <label><input type="radio" name="fit_type" class="radio_fit" value="height"/> Height</label>
    </li>
  </ul>
</div>

### Basic Markup ###
Just put an <code>&lt;img&gt;</code> inside a <code>&lt;div&gt;</code> and run the initializer.
Make sure your <code>&lt;div&gt;</code> gets a height and width somehow or somewhere, because in most cases pixelastic will clean up that <code>&lt;img&gt;</code> element, leaving you with an empty container.
###### HTML ######
{% highlight html %}
<div class="myclass">
  <img src="myimage.png"/>
</div>
{% endhighlight %}
###### JavaScript ######
{% highlight javascript %}
$(document).ready(function(){
  $(".myclass").pixelastic();
});
{% endhighlight %}
### Options ###
Defaults are in _italics_.

- **use\_best\_css**

  Use background-size property values cover and contain over manual background-size calculations. This option will be overridden in older browsers to preserve functionality.

  Possible values: _1_, 0 (true, false)

- **constrain**

  Limit the element from exceeding the source image's native dimensions. A use\_best\_css value of 1 may overwrite this depending on your fit_type.

  Possible values: _1_, 0 (true, false)

- **fit_type**

  Define how the image will fit inside the element. The demo above lets you see how each of these behave.

  Possible values: _cover_, contain, focus, width, height

- **position_x**

  Sets the x starting position of the image. Useful when using the cover or focus fit types. The demo above uses this to keep the palm tree always visible.

  Possible values: x%, xpx, left, _center_, right

- **position_y**

  Sets the y starting position of the image. Useful when using the cover or focus fit types. The demo above uses this to keep the palm tree always visible.

  Possible values: y%, ypx, top, _center_, bottom

- **overlay**

  Insert an overlay, a solid black box covering the image area, while the image is loaded. The overlay is given a class of pixelastic-overlay and will fade upon completion.

  Possible values: _1_, 0 (true, false)

- **bind_resize**

  Bind a listener to the window resize event to automatically reprocess the image as the window changes. With use\_best\_css, this will occur via CSS for the cover and contain fit_types.

  Possible values: _1_, 0 (true, false)

- **clean**

  Remove the <code>&lt;img&gt;</code> tag from inside the element. This option will be overridden in older browsers to preserve functionality.

  Possible values: _1_, 0 (true, false)

- **position**

  Use this property to have pixelastic set the CSS position for you. See the second demo above for an example.

  Possible values: _relative_, absolute

- **background_color**

  Set a background color for the element. Background color may be visible when using the "contain", width" or "height" fit_types. See the demo above for an example.

  Possible values: Any valid CSS color code. (_#000_, white, rgb(255, 0, 0), ...)

#### Combining custom options ####
You can override one or many of the options when initializing.
{% highlight javascript %}
$("#pixelement").pixelastic({
	constrain       : 1,
	fit_type        : 'cover',
	use_best_css    : 1,
	position_x      : 'center',
	position_y      : 'center',
	overlay         : 1,
	bind_resize     : 0,
	clean           : 1,
	background_color: "#000"
});
{% endhighlight %}

### Methods ###
There are a few functions so you can interact with your pixelastic elements after initialization.

- **resize**

  Resize/re-fit the image.

- **bindListener**

  Bind to the window resize event to resize the pixelastic element.

- **unbindListener**

  Unbind the listener on the window resize event.

These are called using the following syntax:
{% highlight javascript %}
$("#pixelement").pixelastic("resize");
{% endhighlight %}

### Download ###

You can download it at the [GitHub repo][pixelastic-gh].


HT: [Wallpaper77][image-source] for the image

[pixelastic-gh]: https://github.com/ferronsays/Pixelastic.js
[image-source]: http://www.wallpaper77.com/DesktopWallpapers/462/Lonely+Palm/1280/800/
