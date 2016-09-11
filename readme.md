
#<a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/">Accessible modal dialog pop-up iframe (v4)</a>

Uses an anchor to launch a modal pop-up which is then populated with an <code>iframe</code> in an accessible manner.<br>
This version allows modal source, title and description to be user-defined in the HTML.

<strong>Demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a></strong>

<br>
##Features

* All customisations are via inline HTML attributes and CSS. No need to edit JavaScript.
* <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2 level AA with <abbr title="Accessible Rich Internet Applications">ARIA</abbr> support
* Fully responsive, mobile-first approach.<br>Modal and <code>iframe</code> resize with the window.
* Lightweight, less than 1.8 KB to the browser with 1.5 KB CSS.
* When opening; the focus is moved to modal content.
* When closing; the focus is moved back to the activating link.
* While open; the <kbd>Tab</kbd> scope is limited to the modal content.
* While open; the document body is frozen (no scroll, no keychain).
* While open; the <kbd>Esc</kbd> key closes the modal while on any focusable object (but not while inside the <code>iframe</code>).
* Clicking on the lightbox also closes the modal.
* Just a link is presented when JavaScript is unavailable.


<br>
##To use

Link to the stylesheet:
```html
<link rel="stylesheet" href="css/styles.css">
```

Define SVGs for the "close" and "loading" icons:
```html
<svg style="display:none">
  <defs>
    <symbol viewBox="0 0 38 38" id="icon-cross">
      <path d="M19 17.6l5.3-5.4 1.4 1.4-5.3 5.4 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.2-5.3-5.2-5.3 1.4-1.4 5.3 5.3z"/>
    </symbol>
    <symbol viewBox='0 0 150 130' id="icon-loading">
      <title>Loading</title>
      <path d='M81.5 33l30.8-32.8c0.3-0.3 0.5-0.2 0.3 0.3 -1.8 5.2-1.7 15.3-1.7 15.3 -0.1 6.8-0.8 11.7-6.6 17.9L74.8 65.1c-0.2 0.2-0.4 0-0.3-0.2 1.5-5.1 1.2-15.1 1.2-15.1C75.4 45.6 76.4 38.4 81.5 33M105.9 54.8l43.8 10.3c0.4 0.1 0.4 0.4-0.2 0.4 -5.4 1-14.1 6.1-14.1 6.1 -6 3.3-10.5 5.2-18.8 3.2l-41.9-9.9c-0.3-0.1-0.2-0.3 0-0.4 5.2-1.3 13.7-6.5 13.7-6.5C92 55.9 98.7 53.1 105.9 54.8M99.4 86.3l13 43.2c0.1 0.4-0.1 0.5-0.4 0.1 -3.6-4.2-12.4-9.2-12.4-9.2 -5.8-3.5-9.7-6.5-12.2-14.6L75 64.5c-0.1-0.3 0.2-0.4 0.3-0.2 3.7 3.9 12.5 8.6 12.5 8.6C91.5 74.8 97.3 79.2 99.4 86.3M68.7 97l-30.8 32.8c-0.3 0.3-0.5 0.2-0.3-0.3 1.8-5.2 1.7-15.3 1.7-15.3 0.1-6.8 0.8-11.7 6.6-17.9l29.5-31.4c0.2-0.2 0.4 0 0.3 0.2 -1.5 5.1-1.2 15.1-1.2 15.1C74.8 84.4 73.8 91.6 68.7 97M44.1 75.8L0.3 65.4C-0.1 65.3-0.1 65 0.5 65c5.4-1 14.1-6.1 14.1-6.1 6-3.3 10.5-5.2 18.8-3.2l41.9 9.9c0.3 0.1 0.2 0.3 0 0.4 -5.2 1.3-13.7 6.5-13.7 6.5C58.1 74.7 51.3 77.5 44.1 75.8M50.2 43.8l-13-43.2c-0.1-0.4 0.1-0.5 0.4-0.1C41.2 4.7 50 9.7 50 9.7c5.8 3.5 9.7 6.5 12.2 14.6l12.4 41.3c0.1 0.3-0.2 0.4-0.3 0.2 -3.7-3.9-12.5-8.6-12.5-8.6C58.1 55.4 52.4 50.9 50.2 43.8'/>
    </symbol>
  </defs>
</svg>
```

Add data attributes to the link.
<br><code>data-modal</code> is a requirement, it only needs populating with a value if it's different to the <code>href</code> (Google maps or YouTube videos).
<br><code>data-modalTitle</code> is optional and will be populated form the link text or image alt text if undefined.
<br><code>data-modalDesc</code> is optional and defaults to "Tab or Shift + Tab to move focus".
```html
<a
  class="lnk_modal-open"
  href="https://www.google.com/maps/place/147+Wardour+St,+Soho,+London+W1F+8WD,+UK/@51.514197,-0.134724,16z/data=!4m5!3m4!1s0x487604d357825039:0xf0c170d8fa918a9b!8m2!3d51.5141967!4d-0.1347244?hl=en-GB"
  data-modal="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4175.8218601402605!2d-0.1390235133502716!3d51.51397674271494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d357825039%3A0xf0c170d8fa918a9b!2s147+Wardour+St%2C+Soho%2C+London+W1F+8WD%2C+UK!5e0!3m2!1sen!2sin!4v1468326690641"

  data-modalTitle="Map location"
  data-modalDesc=""
>
  Interactive map
</a>
```

Add the script:
```html
<script src="js/accessible-popup.4.1.min.js"></script>
```


<br>
##Caveats

* This method neither raises or lowers accessibility barriers caused by the <code>iframe</code> content.
* Be absolutely certain the <code>iframe</code> <b>doesn't trap the keyboard.</b>


<br>
##Current status

14/08/2016 - In cross-browser, cross-platform and cross-device testing.<br>
To be followed with full access testing by <a href="http://www.digitalaccessibilitycentre.org/">Digital Accessibility Centre</a>.

Currently resolving modal width & height for pop-up images, and video doesn't pause / stop on modal close.
<br>Investigating&hellip;
<br>In the meantime, for video, use this instead:
  <a href="http://codepen.io/2kool2/pen/dXEwEd">Embed video iframe</a>.


<br>
##Based on the workings of:

* Greg Kraus: <a href="https://accessibility.oit.ncsu.edu/training/aria/modal-window/version-3/">The incredible accessible modal window v3</a>
* Marco Zehe: <a href="https://www.marcozehe.de/2015/02/05/advanced-aria-tip-2-accessible-modal-dialogs/">Accessible modal dialogs</a>
* Heydonworks: <a href="http://heydonworks.com/practical_aria_examples/#warning-dialog">Warning dialog</a>



<br>
##Alternatives

Let's mention alternate versions of modal pop-ups out there:

* <a href="http://www.humaan.com/modaal/">Modaal</a> - The best I've seen though kicks in at 17 KB. Does it all except allow for different link <code>href</code> to a modal <code>iframe</code> src (as per this example). If you need Accessibility with bells &amp; whistles this is <strong>recommended</strong>. [Nicked some of your feature docs, thanks].

* <a href="https://robinparisi.github.io/tingle/">Tingle js</a> - Love the UX feel of this one but Accessibility not the strong point. Code weight (3 kb loaded) and a style I'm envious of. Appreciated the prototype technique over my purely functional. [Nicked the lightbox <code>cursor</code>, thanks].

* <a href="http://thephuse.github.io/vanilla-modal/">Vanilla modal</a> - Loved the lightweight (&lt; 4 KB loaded inc CSS) simplicity, hated the modals loading before interaction, sadly ignores keyboard-only users too.

* <a href="https://frend.co/components/dialogmodal/">DialogModal</a> - Very basic modal dialog but with good Accessibility. Everything preloaded loaded in the HTML and uses ES2015.

* This version 4 (&lt; 4 KB inc CSS). Uses <code>classList</code> so limited to IE10+.



<br>
All in all nothing is ever perfect, just avoid using a heavy weight library / framework for something this simple.



CodePen demo: <a href="https://codepen.io/2kool2/pen/LkaXay">WCAG ARIA accessible pop-up iframe modal dialog (v4)</a>

Encapuslated with external configuration and instantiation: <a href="https://websemantics.uk/articles/accessible-modal-dialog-popup-iframe/demo/">Modal Dialog demo</a>.

Mike Foskett @ <a href="https://websemantics.uk/">webSemantics</a>
