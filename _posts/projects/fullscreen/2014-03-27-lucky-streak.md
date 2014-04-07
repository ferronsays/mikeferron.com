---
layout: project-full
title:  "Lucky Streak"
date:   2014-03-28 20:00:23
categories: projects fullscreen
description: My entry in the 2013 Js13kGames competition.
project_url: /projects/lucky-streak
extra_js:
- demo/lucky-streak.js
extra_css:
- demo/lucky-streak.css
---
<div id='gameWindow'>
<div class="menu center" id="title">
LUCKY STREAK
</div>
<div class="menu center" id="instructions">
<div>
You're a block. You're naked (don't worry, it's censored). You're out for a jog. Run and jump as far as you can. Avoid stepping on cracks in the sidewalk or your luck may run out as the earth opens up to swallow you whole. Good luck!
</div>
<ul>
<li>Move Left:
<div class="key">
<span>a</span>
</div>or
<div class="key">
<span>&#8592;</span>
</div>
</li>
<li>Move Right:
<div class="key">
<span>d</span>
</div>or
<div class="key">
<span>&#8594;</span>
</div>
</li>
<li>Jump:
<div class="key">
<span>w</span>
</div>,
<div class="key space">
<span>Space</span>
</div>or
<div class="key">
<span>&#8593;</span>
</div>
</li>
<li>Toggle Pause:
<div class="key">
<span>p</span>
</div>
</li>
<li>Toggle Fullscreen:
<div class="key">
<span>f</span>
</div>
</li>
<li>
Mobile Controls: Buttons appear on screen!
</li>
</ul>
</div>
<div class="menu center hud" id="start">
Start Game
</div>
<div class="hud center" id="resume">
Resume Game
</div>
<div class="hud center" id="restart">
Go Again
</div>
<div class="hud center" id="scorecard">
Score:
<span id="score"></span>
<div id="highscore">New High Score!</div>
</div>
<div id="btnLeft" class="key button ">
<span>&#8592;</span>
</div>
<div id="btnJump" class="key button ">
<span>&#8593;</span>
</div>
<div id="btnRight" class="key button ">
<span>&#8594;</span>
</div>
<canvas id="c"></canvas>
</div>
