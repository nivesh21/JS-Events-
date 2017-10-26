var eventModule = (function(inputelement, classSelector){

	var obj = {};
	// input element selector
	if(classSelector === 'classSelector'){
		var inputelement = $("."+inputelement);
	}else{
		var inputelement= $("#"+inputelement);
	}

	obj.focusInEvent = function(){
		this.focusEventBinder = setTimeout(function(){ 
			alert("Focus event Triggered!!!");
		}, 5000);
	};

	obj.focusOutEvent = function(){
		clearTimeout(this.focusEventBinder);
	};

	obj.mouseenterEvent = function(){
		this.mouseEventBinder = setTimeout(function(){ 
			alert("Mouse enter event Triggered!!!");
		}, 5000);
	};

	obj.mouseleaveEvent = function(){
		clearTimeout(this.mouseEventBinder);
	};

	// Events Binding
	obj.eventBind = function(){
		inputelement.on('focusin', obj.focusInEvent);
		inputelement.on('focusout', obj.focusOutEvent);

		inputelement.on('mouseenter', obj.mouseenterEvent);
		inputelement.on('mouseleave', obj.mouseleaveEvent);
	};

	// bind all the events
	obj.eventBind();
	
	return obj;
});

var instance1 = eventModule('textbox', 'classSelector');
var instance2 = eventModule('textbox', 'idSelector');

var instance3 = eventModule('passwordTxt', 'idSelector');
var instance4 = eventModule('password', 'classSelector');

var instance5 = eventModule('skillLevel', 'idSelector');
var instance6 = eventModule('selectBox', 'classSelector');
				