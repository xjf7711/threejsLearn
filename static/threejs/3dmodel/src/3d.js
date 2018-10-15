
ThreeDroom = function(param) {

	this.container = param.container;
	this.loadCallback = param.loadCallback;
	this.loadProgressCallback = param.loadProgressCallback;
	this.mouseOverCallback = param.mouseOverCallback;
	this.mouseOutCallback = param.mouseOutCallback;
	this.mouseUpCallback = param.mouseUpCallback;
	this.warningstatus= false;
}

ThreeDroom.Scene = new Vizi.Object;


ThreeDroom.prototype.go = function() {
	this.viewer = new Vizi.Viewer({ container : this.container, showGrid : true});
	this.loadURL(ThreeDroom.URL);
	this.viewer.run();
}

ThreeDroom.prototype.loadURL = function(url) {

	var that = this;
	
	var loader = new Vizi.Loader;
	loader.addEventListener("loaded", function(data) { that.onLoadComplete(data, loadStartTime); }); 
	loader.addEventListener("progress", function(progress) { that.onLoadProgress(progress); }); 

	var loadStartTime = Date.now();
	loader.loadScene(url);	
}

ThreeDroom.prototype.onLoadComplete = function(data, loadStartTime)
{
	 var that = this;
	ThreeDroom.Scene = data.scene;
	 this.viewer.replaceScene(data);
	ThreeDroom.Scene.map(/^bottom_Mesh(.*)/,function(o){
		 console.log("found node!");
		 var highlight=new Vizi.HighlightBehavior({highlightColor:0x88eeff});
		 o.addComponent(highlight);
		 var picker = new Vizi.Picker;
		 picker.addEventListener("mouseover", function (event) {
			 that.onMouseOver("over", event);
			 if(!that.warningstatus)
			 {highlight.on();}
		 });
		 picker.addEventListener("mouseout", function (event) {
			 that.onMouseOut("out", event);
			  if(!that.warningstatus)
			  {highlight.off();}
		 });
		 picker.addEventListener("mouseup", function (event) {
			 that.onMouseUp("up", event);
		 });
		 o.addComponent(picker);
	 });


	// Tell the page we're loaded
	if (this.loadCallback) {
		var loadTime = (Date.now() - loadStartTime) / 1000;
		this.loadCallback(loadTime);
	}
}

ThreeDroom.prototype.onLoadProgress = function(progress)
{
	// Update the laoder bar
	var percentProgress = progress.loaded / progress.total * 100;
	if (this.loadProgressCallback)
		this.loadProgressCallback(percentProgress);
}


ThreeDroom.prototype.warningon = function(target) {
	this.warningstatus =true;
 	ThreeDroom.Scene.map(target,function(obj){

		var fader=new Vizi.Component;
		var red=new Vizi.Component;
		fader=obj.getComponent(Vizi.FadeBehavior);
		red=obj.getComponent(Vizi.HighlightBehavior);
		if(!fader) {
			var fader=new Vizi.FadeBehavior({duration:0.5,opacity:.8,loop:true});
			obj.addComponent(fader);
			fader.start();
		}
		if(!red){
			var red=new Vizi.HighlightBehavior({highlightColor:0xff0000});
			obj.addComponent(fader);
			red.on();
		}
		red.highlightColor=0xff0000;
		red.on();
		fader.start();

	});

	console.log("startwarning!!");
}

ThreeDroom.prototype.warningoff = function(target) {
	this.warningstatus = false
	ThreeDroom.Scene.map(target,function(obj){
		var fader=new Vizi.Component;
		var red=new Vizi.Component;
		red=obj.getComponent(Vizi.HighlightBehavior);
		fader=obj.getComponent(Vizi.FadeBehavior);
		fader.stop();
		red.highlightColor=0x88eeff;
		red.off();
	});
	console.log("stopwarning!!");
}

ThreeDroom.prototype.onMouseOver = function(what, event) {
	if (this.mouseOverCallback)
	this.mouseOverCallback(what, event);

}

ThreeDroom.prototype.onMouseOut = function(what, event) {
	if (this.mouseOutCallback)
		this.mouseOutCallback(what, event);
}

ThreeDroom.prototype.onMouseUp = function(what, event) {
	if (this.mouseUpCallback)
		this.mouseUpCallback(what, event);
}

ThreeDroom.URL = "models/3dmin.DAE";