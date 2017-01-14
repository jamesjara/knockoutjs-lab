

// the common issue, multiple UI update frezeen the app can be avoid it with this
function AppViewModel() { 
    this.data = ko.observableArray([
        { a: 'a', b: 'b', c: 'c' },
        { a: 'a', b: 'b', c: 'c' }
    ]);
    this.updateDataRows = function () {
        // big data change by rows
    }
}

//must enable deferUpdates
ko.options.deferUpdates = true;
 
ko.applyBindings(new AppViewModel());