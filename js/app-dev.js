"use strict";

class AppDemo3{
	constructor(){
	}

	page1(){
		let html = `
			  <div class="row">
			    <div class="col s12">
			      <ul class="tabs">
			        <li class="tab col s3"><a href="#test1"> <i class="material-icons">add</i> Test 1</a></li>
			        <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
			        <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
			        <li class="tab col s3"><a href="#test4">Test 4</a></li>
			      </ul>
			    </div>
			    <div id="test1" class="col s12">
				      <div class="row">
				        <div class="col s12 m7">
				          <div class="card">
				            <div class="card-image">
				              <img src="img/sample-1.jpg">
				              <span class="card-title">Card Title</span>
				            </div>
				            <div class="card-content">
				              <p>I am a very simple card. I am good at containing small bits of information.
				              I am convenient because I require little markup to use effectively.</p>
				            </div>
				            <div class="card-action">
				              <a href="#">This is a link</a>
				            </div>
				          </div>
				        </div>
				      </div>
				      <div class="row">
				        <div class="col s12 m7">
				          <div class="card">
				            <div class="card-image">
				              <img src="img/sample-1.jpg">
				              <span class="card-title">Card Title</span>
				            </div>
				            <div class="card-content">
				              <p>I am a very simple card. I am good at containing small bits of information.
				              I am convenient because I require little markup to use effectively.</p>
				            </div>
				            <div class="card-action">
				              <a href="#">This is a link</a>
				            </div>
				          </div>
				        </div>
				      </div>
			    </div>
			    <div id="test2" class="col s12">Test 2</div>
			    <div id="test3" class="col s12">Test 3</div>
			    <div id="test4" class="col s12">Test 4</div>
			  </div>      
		`;
		document.querySelector("#appdemo3").innerHTML = html;
	}

}

let app = new AppDemo3();
app.page1();




