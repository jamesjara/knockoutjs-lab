// Class to represent a pet in the list
function pet(row) {
    var self = this;
    self.name = ko.observable(row['name']);
    self.type = ko.observable(row['type']);
    self.age = ko.observable(row['age']);
    
    //computed funcs
    self.humanAge = ko.computed(function() {
        var age = self.age;
        return age * 7;
    });
}

 
function PetsViewModel() {
    var self = this;
 
    // shoudl come from rest
    self.data = [
        { name: "wiki", type: "dog", age: 12 },
        { name: "puky", type: "cat", age: 5  }
    ];    

    // DATA FROM ARRAY
    self.pets = ko.observableArray([
        new pet(self.data[0]),
        new pet(self.data[1])
    ]);
    
    // CRUD
    self.addPet = function() {
        self.pets.push(new pet({ name: "flier", type: "snake", age: 12 }));
    }
    
    self.removePet = function(pet) { self.pets.remove(pet) }
    
}

ko.applyBindings(new PetsViewModel());


/*
@jamesjara
 ======= HTML ===========
 
  
<table> 
    <tbody data-bind="foreach: pets">
        <tr>
            <td data-bind="text: name"></td> 
            <td data-bind="text: type"></td> 
            <td data-bind="text: age"></td> 
            <td data-bind="text: humanAge"></td>
            <td><a href="#" data-bind="click: $root.removePet">Remove</a></td>
        </tr>    
    </tbody>
</table>

<button data-bind="click: addPet">add a pet</button>


*/