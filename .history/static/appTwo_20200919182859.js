// Defnintion of what should be aviable on our webpage when running app.py
function selectInit() {

    // LOCATION NAME FOR COMPARISON 1 AND 2
    // Importing data from all records
    d3.json("/").then((importData) => {
        // Searching location through json
        var locations = importData.data;
        // selecting tag COMPARISON 1 AND 2
        var select = document.getElementById("selCompareOne");
        var selectTwo = document.getElementById("selCompareThree");
        // 1.1 Dropdown list
        for (var i = 0; i < locations.length; i++) {
            console.log("Loading 1.1 location name dropdown. Give it time!")
            select.innerHTML = select.innerHTML +
                '<option value="' + locations[i].location_id + '">' + locations[i].detail + '</option>';
        }
        // 1.2 Dropdown list for the second comparison
        for (var i = 0; i < locations.length; i++) {
            console.log("Loading 1.2 location name dropdown. Give it time!")
            selectTwo.innerHTML = select.innerHTML +
                '<option value="' + locations[i].location_id + '">' + locations[i].detail + '</option>';
        }
        // default selection
        var defualtLocationOne = locations[0].location_id;
        var defualtlocationTwo = locations[0].location_id;

        // adding dropdown for default selection quantity
        optionCompareChangedOne(defualtLocationOne);
        optionCompareChangedTwo(defualtlocationTwo);

    });
};
// 1.1 PORTION SELECTION DROPDOWN ONE
// Execution function for second dropdown acting as a cascading dropdown
function optionCompareChangedOne(select) {
    //Giving select a variable name
    var sel = select

    // Importing data from portionsandweights
    d3.json("/allsearchrecord").then((importData) => {

        // Searching location names through json
        var portions = importData.data;

        //Empty Variable
        var filterSelect = []

        // Filter the search
        filterSelect = portions.filter(d => d.location_id == sel);

        // Food name of filtered data
        var nameOne = filterSelect[0].detail;

        // selecting tag for displaying the name
        var selectlocationName = document.getElementById("nameOne");

        // Clear html display name
        selectlocationName.innerHTML = "";

        // Create html tag showing food name
        selectlocationName.innerHTML = selectlocationName.innerHTML +
            '<h3>' + nameOne + '</h3>';

        // selecting tag for dropdown
        var select = document.getElementById("selCompareTwo");

        //Clear dropdown
        select.innerHTML = "";

        // For loop for drop down. referencing id and seq_num of portion size
        for (var i = 0; i < filterSelect.length; i++) {
            select.innerHTML = select.innerHTML +
                '<option value="' + filterSelect[i].location_id + ',' + filterSelect[i].seq_num + '">' + filterSelect[i].portion_description + '</option>';

        }

        // default selection
        var defaultPortionID = filterSelect[0].location_id
        var defaultPortionSeq_num = filterSelect[0].seq_num

        // Adding default selection into selection categfory
        optionCompareWeightChangedOne(defaultPortionID, defaultPortionSeq_num);
        // GAUGE ONE
        gaugeOne(defaultPortionID, defaultPortionSeq_num);

    });
};


// 1.2 PORTION SELECTION DROPDOWN TWO
// Execution function for second dropdown acting as a cascading dropdown
function optionCompareChangedTwo(select) {
    //Giving select a variable name
    var sel = select
    // Importing data from portionsandweights
    d3.json("/portionsandweights").then((importData) => {

        // Searching food names through json
        var portions = importData.data;

        //Empty Variable
        var filterSelect = []

        // Filter the search
        filterSelect = portions.filter(d => d.food_code == sel);

        // Food name of filtered data
        var nameTwo = filterSelect[0].main_food_description;

        // selecting tag for displaying the name
        var selectFoodName = document.getElementById("nameTwo");

        // Clear html display name
        selectFoodName.innerHTML = "";

        // Create html tag showing food name
        selectFoodName.innerHTML = selectFoodName.innerHTML +
            '<h3>' + nameTwo + '</h3>';

        // selecting tag
        var select = document.getElementById("selCompareFour");

        //Clear dropdown
        select.innerHTML = "";

        // For loop for drop down. referencing id and seq_num of portion size
        for (var i = 0; i < filterSelect.length; i++) {
            select.innerHTML = select.innerHTML +
                '<option value="' + filterSelect[i].food_code + ',' + filterSelect[i].seq_num + '">' + filterSelect[i].portion_description + '</option>';
        }
        // default selection
        var defaultPortionID = filterSelect[0].food_code
        var defaultPortionSeq_num = filterSelect[0].seq_num

        // Adding default selection into selection categfory
        optionCompareWeightChangedTwo(defaultPortionID, defaultPortionSeq_num);
        // GAUGE TWO
        gaugeTwo(defaultPortionID, defaultPortionSeq_num);

    });
};