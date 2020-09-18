// Defnintion of what should be aviable on our webpage when running app.py
function selectInit() {

    // L FOR COMPARISON 1 AND 2
    // Importing data from nutrientvalue
    d3.json("/nutrientvalue").then((importData) => {