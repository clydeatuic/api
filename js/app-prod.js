"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppDemo3 = function () {
	function AppDemo3() {
		_classCallCheck(this, AppDemo3);
	}

	_createClass(AppDemo3, [{
		key: "page1",
		value: function page1() {
			var html = "\n\t\t\t  <div class=\"row\">\n\t\t\t    <div class=\"col s12\">\n\t\t\t      <ul class=\"tabs\">\n\t\t\t        <li class=\"tab col s3\"><a href=\"#test1\"> <i class=\"material-icons\">add</i>Test 1</a></li>\n\t\t\t        <li class=\"tab col s3\"><a class=\"active\" href=\"#test2\">Test 2</a></li>\n\t\t\t        <li class=\"tab col s3 disabled\"><a href=\"#test3\">Disabled Tab</a></li>\n\t\t\t        <li class=\"tab col s3\"><a href=\"#test4\">Test 4</a></li>\n\t\t\t      </ul>\n\t\t\t    </div>\n\t\t\t    <div id=\"test1\" class=\"col s12\">\n\t\t\t\t      <div class=\"row\">\n\t\t\t\t        <div class=\"col s12 m7\">\n\t\t\t\t          <div class=\"card\">\n\t\t\t\t            <div class=\"card-image\">\n\t\t\t\t              <img src=\"img/sample-1.jpg\">\n\t\t\t\t              <span class=\"card-title\">Card Title</span>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"card-content\">\n\t\t\t\t              <p>I am a very simple card. I am good at containing small bits of information.\n\t\t\t\t              I am convenient because I require little markup to use effectively.</p>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"card-action\">\n\t\t\t\t              <a href=\"#\">This is a link</a>\n\t\t\t\t            </div>\n\t\t\t\t          </div>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"row\">\n\t\t\t\t        <div class=\"col s12 m7\">\n\t\t\t\t          <div class=\"card\">\n\t\t\t\t            <div class=\"card-image\">\n\t\t\t\t              <img src=\"img/sample-1.jpg\">\n\t\t\t\t              <span class=\"card-title\">Card Title</span>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"card-content\">\n\t\t\t\t              <p>I am a very simple card. I am good at containing small bits of information.\n\t\t\t\t              I am convenient because I require little markup to use effectively.</p>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"card-action\">\n\t\t\t\t              <a href=\"#\">This is a link</a>\n\t\t\t\t            </div>\n\t\t\t\t          </div>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t    <div id=\"test2\" class=\"col s12\">Test 2</div>\n\t\t\t    <div id=\"test3\" class=\"col s12\">Test 3</div>\n\t\t\t    <div id=\"test4\" class=\"col s12\">Test 4</div>\n\t\t\t  </div>      \n\t\t";
			document.querySelector("#appdemo3").innerHTML = html;
		}
	}]);

	return AppDemo3;
}();

var app = new AppDemo3();
app.page1();
