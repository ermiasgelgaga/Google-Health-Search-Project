//Health Search Volume by Year
var lineDiv = document.getElementById('line-chart');
var totalvolume = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [53457, 54839, 62636, 78665, 80876, 82678, 80375, 106009, 109980, 114186, 114628, 115619, 115693, 117983],
    name: 'Total search volume',
    fill: 'tonexty',
    type: 'scatter',


};
var data = [totalvolume];

var layout = {
    title: 'Total Volume of Searches by Year'
};
Plotly.plot(lineDiv, data, layout);

// Health Search Volume by Year and Conditionvar lineDiv = document.getElementById('line-chart');
var lineDiv = document.getElementById('line-chart2');
var Cancer = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [9220, 13211, 10335, 13203, 13437, 12181, 13146, 12269, 12747, 13428, 15211, 13578, 13637, 13589],
    name: 'Cancer',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};

var Cardiovascular = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [1561, 3921, 4527, 6715, 4511, 4512, 9346, 8053, 8146, 7588, 8621, 9572, 9603, 7544],
    name: 'Cardiovascular',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Depression = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [9581, 2571, 5068, 8179, 6722, 4488, 5863, 12418, 14572, 14484, 13302, 13804, 12764, 13194],
    name: 'Depression',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Diabetes = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [7989, 4880, 8258, 11472, 9585, 12846, 8521, 14204, 12978, 14390, 14966, 15111, 16343, 16235],
    name: 'Diabetes',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Diarrhea = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [3419, 5202, 8767, 4260, 10818, 11554, 6088, 13233, 13170, 14408, 14354, 14590, 15220, 15272],
    name: 'Diarrhea',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Obesity = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [7195, 4519, 6063, 7393, 5969, 9150, 7055, 8082, 11319, 11410, 9835, 12144, 10870, 10870],
    name: 'Obesity',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Rehab = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [7195, 4519, 6063, 7393, 5969, 9150, 7055, 8082, 11319, 11410, 9835, 12144, 10870, 10870],
    name: 'Rehab',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};

var Stroke = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [7195, 4519, 6063, 7393, 5969, 9150, 7055, 8082, 11319, 11410, 9835, 12144, 10870, 10870],
    name: 'Stroke',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Vaccine = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [6820, 6162, 8012, 8595, 5062, 7444, 9535, 12169, 11967, 13152, 12955, 13101, 13227, 15288],
    name: 'Vaccine',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};


var data = [Cancer, Cardiovascular, Diabetes, Diarrhea, Obesity, Rehab, Stroke, Vaccine];

var layout = {
    title: 'Total Volume of Searches by year Versus Health Conditions'
};
Plotly.plot(lineDiv, data, layout);

//Ploting Map