// observable itself as the first argument and any options in the second argumen
ko.extenders.bechmark = function(target, value){
   target.subscribe(function(value) {
       console.log(  " bechmark to field " + value);
    });
    return target;
}


function AppViewModel(){
	this.userPassportId = ko.observable("123123")
	//magic here
	.extend({ bechmark: "userPassportId"});
}

ko.applyBindings(new AppViewModel());