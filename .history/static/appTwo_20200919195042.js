// Defnintion of what should be aviable on our webpage when running app.py
function selectInit() {

    // LOCATION NAME FOR COMPARISON 1 AND 2
    // Importing data from all records
    d3.json("/location").then((importData) => {
        // Searching location through json
        var locations = importData.data;

        // selecting tag COMPARISON 1 AND 2
        var select = document.getElementById("selCompareOne");
        var selectTwo = document.getElementById("selCompareThree");

        // 1.1 Dropdown list
        for (var i = 0; i < locations.length; i++) {
            console.log("Loading 1.1 location name dropdown. Give it time!")
            select.innerHTML = select.innerHTML +
                '<option value="' + locations[i].location_id + '">' + locations[i].location + '</option>';
        }

        // 1.2 Dropdown list for the second comparison
        for (var i = 0; i < locations.length; i++) {
            console.log("Loading 1.2 location name dropdown. Give it time!")
            selectTwo.innerHTML = select.innerHTML +
                '<option value="' + locations[i].location_id + '">' + locations[i].location + '</option>';
        }

        // default selection
        var defualtLocationOne = locations[0].location_id;
        var defualtlocationTwo = locations[0].location_id;

        // adding dropdown for default selection quantity
        optionCompareChangedOne(defualtLocationOne);
        optionCompareChangedTwo(defualtlocationTwo);

    });
};

// 1.1 Years SELECTION DROPDOWN ONE
// Execution function for second dropdown acting as a cascading dropdown
function optionCompareChangedOne(select) {
    //Giving select a variable name
    var sel = select

    // Importing data from portionsandweights
    d3.json("/allsearchrecord").then((importData) => {

        // Searching food names through json
        var Years = importData.data;

        //Empty Variable
        var filterSelect = []

        // Filter the search
        filterSelect = Years.filter(d => d.location_id == sel);

        // Location name of filtered data
        var nameOne = filterSelect[0].location;

        // selecting tag for displaying the name
        var SelectLocationName = document.getElementById("nameOne");

        // Clear html display name
        SelectLocationName.innerHTML = "";

        // Create html tag showing food name
        SelectLocationName.innerHTML = SelectLocationName.innerHTML +
            '<h3>' + nameOne + '</h3>';

        // selecting tag for dropdown
        var select = document.getElementById("selCompareTwo");

        //Clear dropdown
        select.innerHTML = "";

        // For loop for drop down. referencing id and seq_num of years
        for (var i = 0; i < filterSelect.length; i++) {
            select.innerHTML = select.innerHTML +
                '<option value="' + filterSelect[i].location_id + ',' + filterSelect[i].seq_num + '">' + filterSelect[i].year + '</option>';

        }

        // default selection
        var defaultPortionID = filterSelect[0].location_id
        var defaultPortionSeq_num = filterSelect[0].seq_num

        // Adding default selection into selection categfory
        optionCompareWeightChangedOne(defaultYearID, defaultYearSeq_num);
        // GAUGE ONE
        gaugeOne(defaultYearID, defaultYearSeq_num);

    });
};

