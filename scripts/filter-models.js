
var EverythingModel = function(items, filters) {
    var self = this;

    self.items = ko.observableArray(items);
    self.filters = ko.observableArray();

    for(var i = 0; i < filters.length ; i++){
        self.filters.push(new FilterModel(filters[i]));
    }

    self.filteredItems = ko.computed(function() {
        return ko.utils.arrayFilter(self.items(), function(item) {
            //console.log(self.activeFilteroptions());
            // the item has to have all of the active filter options

            for(var j = 0; j < self.filters().length; j ++) {
                var currentFilter = self.filters()[j];

                console.log("filter is " + self.filters()[j].displayText);
                console.log(self.filters()[j].selectedOptions());
                for(var i = 0; i < currentFilter.selectedOptions().length; i ++) {
                    if(item.tags.indexOf(currentFilter.selectedOptions()[i].value)< 0) {
                        console.log("could not find " + currentFilter.selectedOptions()[i].value + " in " + item.name + " so we're excluding it from the items.")
                        return false;
                    }
                }


            }


            return true;
            //return prod.genre == self.currentFilter();
        });
    });
}

// represents a filter
var FilterModel = function(filter) {
    var self = this;

    self.displayText = filter.displayText;
    self.options = ko.observableArray();
    for(var i = 0; i < filter.options.length; i ++ ) {
        self.options.push(new FilterOptionModel(filter.options[i]));
    }

    self.selectedOptions = ko.computed(function() {
        console.log(self.options());
        var selectedItems = ko.utils.arrayFilter(self.options(), function(item) {
            return item.selected();
        });
        console.log(selectedItems);
        return selectedItems;
    });

}

// represents an option on a filter
var FilterOptionModel = function(option) {
    var self = this;

    self.displayText = option.displayText;
    self.value = option.value;
    self.selected = ko.observable(false);
    self.optionClasses = ko.computed(function() {
        var classes = "option "; 
        if(self.selected()) {
            classes += "selected";
        }
        return classes;
    });
}