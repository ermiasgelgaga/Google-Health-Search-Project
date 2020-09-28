var tableData = undefined;
var tbody = d3.select("tbody");

d3.json('./allsearchrecord').then(function(data) {
    console.log("table data")
    console.log(data)
    tableData = data.table

})

function tableBuilder(data) {

    tbody.selectAll("tr").remove();
    console.log(data)

    data.forEach(function(record) {

        var row = tbody.append("tr");

        Object.values(record).forEach(function(recordValue) {

            var td = row.append("td")

            td.text(recordValue)
        });

    });

};

var findButton = d3.select("#filter-btn");

findButton.on("click", function() {

    console.log("Button")

    var inputYear = d3.select("#year").property("value")
    var inputState = d3.select("#state").property("value")
    var inputCity = d3.select("#city").property("value")

    var filteredData = tableData.filter(function(rec) {


        var yearFlag = true;
        var stateFlag = true;
        var cityFlag = true;

        if (inputYear !== "") {

            yearFlag = rec["type"] === inputYear;
        };

        if (inputState !== "") {

            stateFlag = rec["state"] === inputState;
        };

        if (inputCity !== "") {

            cityFlag = rec["city"] === inputCity;
        };
        return yearFlag & cityFlag & stateFlag;
    });


    tableBuilder(filteredData);


});

