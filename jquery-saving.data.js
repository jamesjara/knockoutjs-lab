function Pet(data) {
    this.name = ko.observable(data.name); 
}

function PetsListViewModel() {
    // Data
    var self = this;
    self.pets  = ko.observableArray([]);
    self.newPetText = ko.observable();
    self.incompletePets = ko.computed(function() {
        return ko.utils.arrayFilter(self.Pets(), function(pet) { return !pet.isDone() && !pet._destroy });
    });

    // Operations
    self.addPet = function() {
        self.pets.push(new Pet({ name: this.newPetText() })); 
    };
    self.removePet = function(pet) { self.pets.destroy(pet) };
    self.save = function() {
        $.ajax("/pets", {
            data: ko.toJSON({ pets: self.pets }),
            type: "post", contentType: "application/json",
            success: function(result) { alert(result) }
        });
    };
 
    $.getJSON("/pets", function(allData) {
        var mappedPets = $.map(allData, function(item) { return new Pet(item) });
        self.pets(mappedPets);
    });    
}

ko.applyBindings(new PetListViewModel());