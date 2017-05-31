'use strict';

var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function (data) {
  console.log(data);
  var html = '';
  html += '\n  <nav class="nav-extended">\n    <div class="nav-wrapper">\n      <a href="#" class="brand-logo">Logo</a>\n      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\n      <ul id="nav-mobile" class="right hide-on-med-and-down">\n        <li><a href="sass.html">Sass</a></li>\n        <li><a href="badges.html">Components</a></li>\n        <li><a href="collapsible.html">JavaScript</a></li>\n      </ul>\n      <ul class="side-nav" id="mobile-demo">\n        <li><a href="sass.html">Sass</a></li>\n        <li><a href="badges.html">Components</a></li>\n        <li><a href="collapsible.html">JavaScript</a></li>\n      </ul>\n    </div>\n    <div class="nav-content">\n      <ul class="tabs tabs-transparent">\n        <li class="tab"><a href="#test1">Test 1</a></li>\n        <li class="tab"><a class="active" href="#test2">Test 2</a></li>\n        <li class="tab disabled"><a href="#test3">Disabled Tab</a></li>\n        <li class="tab"><a href="#test4">Test 4</a></li>\n      </ul>\n    </div>\n  </nav>\n  <div id="test1" class="col s12">' + data.title + '</div>\n  <div id="test2" class="col s12">Test 2</div>\n  <div id="test3" class="col s12">Test 3</div>\n  <div id="test4" class="col s12">Test 4</div>\n  ';
  $('#app').html(html);
  $(".button-collapse").sideNav();
  $('ul.tabs').tabs();
});