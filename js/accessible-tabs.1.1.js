/*
Simple Accessible Tab control v6.1.1 19-03-2017
Author: Mike Foskett
Incept: 09-03-2016
Article: http://websemantics.uk/articles/accessible-tab-navigation/
Furtherence of: Heydon Pickering - http://heydonworks.com/practical_aria_examples/#tab-interface

  Uses ARIA attributes (via CSS) to control what's visible.

  Requires (tested):
    addEventListener (IE8+)
    preventDefault (IE9+)
    classList (IE10+)
    querySelectorAll (IE9+)

  Required parameter:
    none

  Optional parameters:

    tabListClass : "tl_list" (default)

    onClass : "ON" (default)
            Customisable, set default tab on.
            Used for initialisation only.

    hoverableClass : "tl-hoverable" (default)
            Customisable, allow mouse-hover to switch tabs.
            Apply to the navigation ul.

  Version 6.1.1 - 19-03-2017 - Added: up/down arrow keys; nested tablists
  Version 6.1 - 16-08-2016
  Version 6 - 10-07-2016
  Version 5.2 - 17-03-2016
  Version 5 - 09-03-2016
  Version 4 - 27-01-2012
  Version 3 - 25-01-2012
  Version 1 - 27-05-2010
*/

var accessibleTabs6=function(){"use strict";var t,e,a,s=document,n=function(t){for(var e=t.tabs.length;e--;)i(t.tabs[e],!1)},i=function(t,e){t&&t.panelId&&(s.getElementById(t.panelId).setAttribute("aria-hidden",!e),t.setAttribute("aria-selected",e),t.setAttribute("tabindex",e?"0":"-1"))},l=function(t){var e=t.target;t.preventDefault&&(t.preventDefault(),n(e.tabList),i(e,!0),s.getElementById(e.panelId).children[0].focus())},r=function(t){var e=t.target,a=-1,s=e.tabList.tabs,l=s.length-1;37!==t.keyCode&&38!==t.keyCode||(a=0===e.no?l:e.no-1),39!==t.keyCode&&40!==t.keyCode||(a=e.no===l?0:e.no+1),a>-1&&(n(e.tabList),i(s[a],!0),s[a].focus())},o=function(t){var e=t.target,s=e.tabList.classList.contains(a);s&&l(t)},b=function(t){t.addEventListener("click",l,!1),t.addEventListener("keydown",r,!1),t.addEventListener("mouseover",o,!1)},d=function(t){var e=s.getElementById(t.panelId);t.parentNode.setAttribute("role","presentation"),t.setAttribute("role","tab"),t.setAttribute("aria-controls",t.panelId),e.setAttribute("role","tabpanel"),e.setAttribute("aria-labelledby",t.id),e.children[0].setAttribute("tabindex","0")},c=function(s){t=s.tabListClass||"tl_list",e=s.onClass||"ON",a=s.hoverableClass||"tl-hoverable"},u=function(t,e,a){t.no=a,t.id="tab-"+e,t.panelId=e,d(t),b(t)},f=function(t){var a,l,r,o=0;if(t){for(t.setAttribute("role","tablist"),t.tabs=t.getElementsByTagName("a"),r=t.tabs.length;r--;)t.tabs[r].tabList=t,a=t.tabs[r].href.slice(t.tabs[r].href.lastIndexOf("#")+1),l=s.getElementById(a),l&&(u(t.tabs[r],a,r),t.tabs[r].classList.contains(e)&&(o=r,t.tabs[r].classList.remove(e),s.getElementById(a).classList.remove(e)));n(t),t.tabs[o]&&t.tabs[o].panelId&&i(t.tabs[o],!0)}},v=function(){return"function"==typeof s.querySelectorAll&&s.addEventListener&&!!s.documentElement.classList},L=function(e){var a,n;if(v())for(c(e),a=s.getElementsByClassName(t),n=a.length;n--;)f(a[n])};return{init:L}}();

accessibleTabs6.init({tabListClass:"tl_list",onClass:"ON",hoverableClass:"tl-hoverable"});
