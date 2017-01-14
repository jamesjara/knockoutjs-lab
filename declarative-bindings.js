/*This is a *view* - HTML markup that defines the appearance of your UI

<p>First name: <strong data-bind="text: name"> </strong></p>
<p>Last name: <strong  data-bind="text: type"> </strong></p>

<input data-bind="value: name" /></p>

*/

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.name = ko.observable("wiki");
    this.type = ko.observable("dog");

    this.info = ko.computed(function() {
        return this.name() + " " + this.type();
    }, this);
    
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

/*  
illustrate some of the key points of MVVM:
 - clean, object-oriented representation of your UI's data and behaviors (your viewmodel)
 - declarative representation of how it should be displayed visibly (your view)
 */