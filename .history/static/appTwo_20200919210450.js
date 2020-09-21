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
        var defaultYearID = filterSelect[0].location_id
        var defaultYearSeq_num = filterSelect[0].seq_num

        // Adding default selection into selection categfory
        optionCompareWeightChangedOne(defaultYearID, defaultYearSeq_num);
        // GAUGE ONE
        gaugeOne(defaultYearID, defaultYearSeq_num);

    });
};

// 1.2 YEARS SELECTION DROPDOWN TWO
// Execution function for second dropdown acting as a cascading dropdown
function optionCompareChangedTwo(select) {
    //Giving select a variable name
    var sel = select
    // Importing data from portionsandweights
    d3.json("/allsearchrecord").then((importData) => {

        // Searching food names through json
        var years = importData.data;

        //Empty Variable
        var filterSelect = []

        // Filter the search
        filterSelect = years.filter(d => d.location_id == sel);

        // Food name of filtered data
        var nameTwo = filterSelect[0].location;

        // selecting tag for displaying the name
        var SelectLocationName = document.getElementById("nameTwo");

        // Clear html display name
        SelectLocationName.innerHTML = "";

        // Create html tag showing food name
        SelectLocationName.innerHTML = SelectLocationName.innerHTML +
            '<h3>' + nameTwo + '</h3>';

        // selecting tag
        var select = document.getElementById("selCompareFour");

        //Clear dropdown
        select.innerHTML = "";

        // For loop for drop down. referencing id and seq_num of portion size
        for (var i = 0; i < filterSelect.length; i++) {
            select.innerHTML = select.innerHTML +
                '<option value="' + filterSelect[i].location_id + ',' + filterSelect[i].seq_num + '">' + filterSelect[i].year + '</option>';
        }
        // default selection
        var defaultYearID = filterSelect[0].location_id
        var defaultYearSeq_num = filterSelect[0].seq_num

        // Adding default selection into selection categfory
        optionCompareWeightChangedTwo(defaultYearID, defaultYearSeq_num);
        // GAUGE TWO
        gaugeTwo(efaultYearID, defaultYearSeq_num);

    });
};

// 1.1 GRAPH EXECUTION FUNCTION DEFINTION ONE
// Execute function for nutrient info, macro and micro graph, and gauge
function optionCompareWeightChangedOne(id, select) {

    // Nutrient fact initiated
    nutrient_fact_one(id, select);
    // Radar Graph initiated
    macroRadar();
    // Micro Radar Graph initiated
    microRadar();
    // GAUGE ONE
    gaugeOne(id, select)
    // Macro Grouped Bar Chart initiated
    macroGroupBar();
    // Micro Grouped Bar Chart initiated
    microGroupBar();
};


// 1.2 GRAPH EXECUTION FUNCTION DEFINTION TWO
// Execute function for nutrient info, macro and micro graph, and gauge
function optionCompareWeightChangedTwo(id, select) {

    // Nutrient fact initiated
    nutrient_fact_two(id, select);
    // Radar Graph initiated
    macroRadar();
    // Micro Radar Graph initiated
    microRadar();
    // GAUGE ONE
    gaugeTwo(id, select)
    // Grouped Bar Chart initiated
    macroGroupBar();
    // Micro Grouped Bar Chart initiated
    microGroupBar();
};
////////////////////////////////////////////////////////
///////////////GRAPH FUNCTION DEFINITIONS///////////////
////////////////////////////////////////////////////////

// Chart.js requires a defined a variable to store the chart instance 
// (this must be outside of your function)
// This is to clear the visuals from chart.js
var myMacroRadar;
var myMicroRadar;
var myMacroChart;
var myMicroChart;

// 1.1 Search Health Condition Table
//  Search Health Condition to be listed function definition
function health_condition_one(id, select) {
    //Rename variables
    var id_num = id
    var sel = select
    d3.json("/allsearchrecord").then((importData) => {

        // Searching locations through json
        var city= importData.data;

        // Empty list to store location_id data
        getLocationIds = []

        // Use filter() to pass selection as an argument for the location_id
        getLocationIds = city.filter(data => data.location_id == id_num);

        // empty list to get years of location id
        var filterYears = []

        // Using filter to pass sequence number selection
        filterYears = getLocationIds.filter(data => data.seq_num == sel)

        //calculation of attributes
        yearfilterd = filterYears[0]
        // Year list to use in our calculation
        active_year = yearfilterd.year

        // Empty object
        portionSelection = {}

        // For loop to run the calculation of portion size
        for (i in food) {
            if (i == 'food_code' || i == 'main_food_description' || i == 'seq_num' || i == 'portion_description' || i == 'portion_weight_g') {
                portionSelection[i] = food[i];
            }
            else {
                var calvalue = (food[i] * grams) / 100
                portionSelection[i] = calvalue;
            }
        }

        // selecting tag for table id
        var select = document.getElementById("nutrient-panel-one");

        //************************** */

        //Clear dropdown
        select.innerHTML = "";

        //Loop through Nutrient array to find nutrient List
        Object.entries(portionSelection).forEach(([key, value]) => {
            if (key !== 'food_code' && key !== 'main_food_description' && key !== 'seq_num' && key !== 'portion_description') {
                // Removing underscores
                newKey = key.replace(/_/g, " ")
                var num = parseFloat(value).toFixed(2)
                select.innerHTML = select.innerHTML +
                    '<li class="list-group-item text-capitalize font-italic">' + newKey + ':    ' + num + '</li>';
            }

        });
        //************************** */

    })

};