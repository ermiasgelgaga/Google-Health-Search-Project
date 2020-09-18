d3.csv('multiline_data.csv', function (error, data) {
    data.forEach(function (d) {
        d.year = +d.year;
        d.variableA = +d.variableA;
        d.variableB = +d.variableB;
        d.variableC = +d.variableC;
        d.variableD = +d.variableD;
    });

    var chart = makeLineChart(data, 'year', {
        'Variable A': { column: 'variableA' },
        'Variable B': { column: 'variableB' },
        'Variable C': { column: 'variableC' },
        'Variable D': { column: 'variableD' }
    }, { xAxis: 'Years', yAxis: 'Amount' });
    chart.bind("#chart-line1");
    chart.render();

});