var myPetModel = {
    petName: ko.observable('yikil'),
    petAge: ko.observable(12)
};

document.write(myPetModel.petName());

// les fire msg changin name
var subs = myPetModel.petName.subscribe(function(newValue) {
    alert("The pet is changing of name to " + newValue);
});


myPetModel.petName("ṕulili");
document.write(myPetModel.petName());

// lets remove the subs
subs.dispose(); 


// new name will not be notified
myPetModel.petName("secret_name");
document.write(myPetModel.petName());