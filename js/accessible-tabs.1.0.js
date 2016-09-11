/*
Simple Accessible Tab control v6 11-07-2016
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

  Version 6.1 - 16-08-2016
  Version 6 - 10-07-2016
  Version 5.2 - 17-03-2016
  Version 5 - 09-03-2016
  Version 4 - 27-01-2012
  Version 3 - 25-01-2012
  Version 1 - 27-05-2010
*/
var accessibleTabs6 = (function () {

  "use strict";

  var d = document;
  var tabListClass;
  var tabs;
  var onClass;
  var hoverableClass;
  //var useHover;

  var _setTab = function (tab, switchOn) {
    d.getElementById(tab.panelId).setAttribute("aria-hidden", !switchOn);
    tab.setAttribute("aria-selected", switchOn);
    tab.setAttribute("tabindex", switchOn ? "0" : "-1");
  };

  var _setTabsOff = function () {
    var i = tabs.length;
    while (i--) {
      _setTab(tabs[i], false);
    }
  };

  var _activateTab = function (e) {
    var tab = e.target;
    if (e.preventDefault) {
      e.preventDefault();
      _setTabsOff();
      _setTab(tab, true);
      d.getElementById(tab.panelId).children[0].focus();
    }
  };

  var _keypressed = function (e) {

    var tab = e.target;
    var newNo = -1;
    var maxNo = tabs.length - 1;

    if (e.keyCode === 37) { // left arrow
      newNo = (tab.no === 0) ? maxNo : tab.no - 1;
    }
    if (e.keyCode === 39) { // right arrow
      newNo = (tab.no === maxNo) ? 0 : tab.no + 1;
    }
    if (newNo > -1) {
      _setTabsOff();
      _setTab(tabs[newNo], true);
      tabs[newNo].focus();
    }
  };

  var _tabHovered = function (e) {
    var a = e.target;
    var useHover = a.tabList.classList.contains(hoverableClass);
    if (useHover) {
      _activateTab(e);
    }
  };

  var _events = function (tab) {
    tab.addEventListener("click", _activateTab, false);
    tab.addEventListener("keydown", _keypressed, false);
    tab.addEventListener("mouseover", _tabHovered, false);
  };

  var _initialiseAriaAttributes = function (tab) {

    var tabPanel = d.getElementById(tab.panelId);

    tab.parentNode.setAttribute("role", "presentation");
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", tab.panelId);

    tabPanel.setAttribute("role", "tabpanel");
    tabPanel.setAttribute("aria-labelledby", tab.id);

    // Make first <section> object keyboard focussable
    // preferably a heading
    tabPanel.children[0].setAttribute("tabindex", "0");
  };

  var _setUpConfig = function (cfg) {
    tabListClass = cfg.tabListClass || "tl_list";
    onClass = cfg.onClass || "tl_link-on";
    hoverableClass = cfg.hoverableClass || "tl-hoverable";
  };

  var _setUpTab = function (tab, panelId, count) {
    tab.no = count;
    tab.id = "tab-" + panelId;
    tab.panelId = panelId;
    _initialiseAriaAttributes(tab);
    _events(tab);
  };


  var _initialiseTabList = function (tabList) {

    var defaultTab = 0;
    var panelId;
    var tabPanel;
    var i;

    if (tabList) {

      tabList.setAttribute("role", "tablist");
      tabs = tabList.getElementsByTagName("a");
      i = tabs.length;

      while (i--) {

        tabs[i].tabList = tabList;

        panelId = tabs[i].href.slice(tabs[i].href.lastIndexOf("#") + 1);
        tabPanel = d.getElementById(panelId);

        if (tabPanel) {
          _setUpTab(tabs[i], panelId, i);
          if (tabs[i].classList.contains(onClass)) {
            defaultTab = i;

            // onClass only used to declare intial state, so remove from DOM
            tabs[i].classList.remove(onClass);
            d.getElementById(panelId).classList.remove(onClass);
          }
        }
      }
      _setTabsOff();
      _setTab(tabs[defaultTab], true);
    }
  };

  var _isMustardCut = function (e) {
    // check browser feature support (IE10+)
    return (
      (typeof d.querySelectorAll === "function") &&
      d.addEventListener &&
      !!d.documentElement.classList // IE10+
    );
  };

  var init = function (cfg) {
    var tabLists;
    var i;

    if (_isMustardCut()) {
      _setUpConfig(cfg);
      tabLists = d.getElementsByClassName(tabListClass);
      i = tabLists.length;
      while (i--) {
        _initialiseTabList(tabLists[i]);
      }
    }
  };

  return {
    init: init
  };

}());


accessibleTabs6.init({
  tabListClass : "tl_list",         // default, may omit
  onClass : "tl_link-on",            // default, may omit
  hoverableClass : "tl-hoverable"   // default, may omit
});
