// Defnintion of what should be aviable on our webpage when running app.py
function selectInit() {

    // LOCATION NAME FOR COMPARISON 1 AND 2
    // Importing data from all records
    d3.json("/allsearchrecord").then((importData) => {
        // Searching location through json
        var names = importData.data;
        // selecting tag COMPARISON 1 AND 2
        var select = document.getElementById("selCompareOne");
        var selectTwo = document.getElementById("selCompareThree");
        // 1.1 Dropdown list
        for (var i = 0; i < names.length; i++) {
            console.log("Loading 1.1 location name dropdown. Give it time!")
            select.innerHTML = select.innerHTML +
                '<option value="' + names[i].location_id + '">' + names[i].main_food_description + '</option>';
        }