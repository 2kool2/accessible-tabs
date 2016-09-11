
#<a href="http://websemantics.uk/articles/accessible-tab-navigation/"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2 accessible tab navigation with <abbr title="Accessible Rich Internet Applications">ARIA</abbr> support</a>

<strong>Demo: <a href="https://codepen.io/2kool2/pen/Kzaddm">WCAG ARIA accessible tab navigation</a></strong>

##Features

* Vanilla JavaScript with no dependencies.
* Meets WCAG 2 level AA and uses ARIA roles.
* Optionally switch on hover.


##To use

Link to styles
```html
<link rel="stylesheet" href="css/styles.css">

```

The links are coded as a normal set of page anchors in a list:
```html
<ul class="tl_list">
    <li><a href="#A">Section A</a></li>
    <li><a href="#B" class="tl_lnk-on">Section B</a></li>
    <li><a href="#C">Section C</a></li>
</ul>
```


Which references the sections
```html
<section id="A" class="tl_section">
    <h2>Heading A</h2>
    <p>Copy A</p>
</section>

<section id="B" class="tl_section">
    <h2>Heading B</h2>
    <p>Copy B</p>
</section>

<section id="C" class="tl_section">
    <h2>Heading C</h2>
    <p>Copy C</p>
</section>
```


Include the JavaScript
```html
<script src="js/accessible-tabs.1.0.js"></script>
```


There's an option to allow mouse hover to activate a tab by adding the class "hoverable" to the  tablist <code>ul</code>.<br>Not sure that's such a good idea though.

CodePen demo: <a href="https://codepen.io/2kool2/pen/Kzaddm">WCAG ARIA accessible tab navigation</a>

Mike Foskett @ <a href="https://websemantics.uk/">webSemantics</a>
