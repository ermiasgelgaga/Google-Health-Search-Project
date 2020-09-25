var tableData = undefined;
var tbody = d3.select("tbody");

d3.json('/allsearchrecord').then(function(data) {
    console.log("table data")
    console.log(data)
    tableData = data.table

    tableBuilder(tableData);
})