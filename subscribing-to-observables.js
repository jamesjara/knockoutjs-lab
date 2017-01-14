function SelfViewModel() {
    var self = this;
 
    self.name = ko.observable('james');
    self.age = ko.observable(26);
    
    self.fullName = ko.computed(function() {
        return self.name() + " " + self.age();
    }); // notes that we are using self, and only fn as unique parament.
}


function ThisViewModel() {
    var self = this;
 
    this.name = ko.observable('james');
    this.age = ko.observable(26);
    // and Notes that we are using pureComputed:  declared to be pure (i.e., its evaluator does not directly modify other objects or state), 
    this.fullName = ko.pureComputed(function() {
        return this.name() + " " + this.age();
    }, this);  // notes, that we NEED to pass this as second parameter
}