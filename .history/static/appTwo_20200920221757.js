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