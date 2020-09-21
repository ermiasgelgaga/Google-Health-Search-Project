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



var data = [Cancer, Cardiovascular, Depression, Diabetes, Diarrhea, Obesity, Rehab, Stroke, Vaccine];

var layout = {
    title: 'Total Volume of Searches by year Versus Health Conditions'
};
Plotly.plot(lineDiv, data, layout);


//Cooreleation Matrix
'use strict';
// 
// https://github.com/plotly/plotly.js/issues/4116
// [Feature][Proposal] create_annotated_heatmap for JS
//
/*
  
   src: https://github.com/plotly/plotly.py/blob/master/packages/python/plotly/plotly/figure_factory/_annotated_heatmap.py
*/
//
//
//
function get_z_mid(z) {
    var z_max = Math.max.apply(
        null,
        z.map(function(row) {
            return Math.max.apply(Math, row);
        })
    );
    var z_min = Math.min.apply(
        null,
        z.map(function(row) {
            return Math.min.apply(Math, row);
        })
    );
    var z_mid = (z_max + z_min) / 2;
    return z_mid;
}
// custom function
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return result ? [r, g, b] : null;
}
//
// copied from _annotated_heatmap.py
//
function to_rgb_color_list(color_str, Default) {
    if (color_str.includes('rgb')) {
        return color_str.replace(/[^0-9.,]+/g, '').split(',');
    } else if (color_str.includes('#')) {
        return hexToRgb(color_str);
    } else {
        return Default;
    }
}
//
// copied from _annotated_heatmap.py
//
function should_use_black_text(background_color) {
    return (
        background_color[0] * 0.299 +
        background_color[1] * 0.587 +
        background_color[2] * 0.114
    ) > 186;
}
//
// 
//
function get_text_color(colorscale, reversescale) {
    var white = '#FFFFFF';
    var black = '#000000';
    var colorscales = ['Greys', 'Greens', 'Blues', 'YIGnBu', 'YIOrRd', 'RdBu', 'Picnic', 'Jet', 'Hot', 'Blackbody', 'Earth', 'Electric', 'Viridis', 'Cividis'];
    var colorscales_reverse = ['Reds'];
    var min_text_color = black;
    var max_text_color = black;
    if ((colorscales.indexOf(colorscale) > -1) && reversescale) {
        min_text_color = black;
        max_text_color = white;
    } else if ((colorscales.indexOf(colorscale) > -1)) {
        min_text_color = white;
        max_text_color = black;
    } else if ((colorscales_reverse.indexOf(colorscale) > -1) && reversescale) {
        min_text_color = white;
        max_text_color = black;
    } else if ((colorscales_reverse.indexOf(colorscale) > -1)) {
        min_text_color = black;
        max_text_color = white;
    } else if (Array.isArray(colorscale)) {
        var _min_col = to_rgb_color_list(colorscale.slice(0)[0][1], [255, 255, 255]);
        var _max_col = to_rgb_color_list(colorscale.slice(-1)[0][1], [255, 255, 255]);
        var min_col = _min_col;
        var max_col = _max_col;
        if (reversescale) {
            // swap min max
            min_col = _max_col;
            max_col = _min_col;
        }
        if (should_use_black_text(min_col)) {
            min_text_color = black;
        } else {
            min_text_color = white;
        }
        if (should_use_black_text(max_col)) {
            max_text_color = black;
        } else {
            max_text_color = white;
        }
    }
    return [min_text_color, max_text_color];
}
//
//  create annotated_heatmap
//
function make_annotations(_x, _y, _z, colorscale) {
    var text_colors = get_text_color(colorscale);
    var min_text_color = text_colors[0];
    var max_text_color = text_colors[1];
    var z_mid = get_z_mid(_z);
    var annotations = [];
    for (var n = 0; n < _z.length; n++) {
        var row = _z[n];
        for (var m = 0; m < row.length; m++) {
            var val = row[m];
            var font_color = (val < z_mid) ? min_text_color : max_text_color;
            annotations.push({
                xref: 'x1',
                yref: 'y1',
                x: _x[m],
                y: _y[n],
                text: _z[n][m],
                font: {
                    family: 'Arial',
                    size: 12,
                    color: font_color
                },
                showarrow: false
            });
        }
    }
    return annotations;
}
//
// Draw Plot
//
var xValues = ['Cancer', 'Cardiovascular', 'Stroke', 'Depression', 'Rehab', 'Vaccine', 'Diarrhea', 'Obesity', 'Diabetes'];
var yValues = ['Cancer', 'Cardiovascular', 'Stroke', 'Depression', 'Rehab', 'Vaccine', 'Diarrhea', 'Obesity', 'Diabetes'];
var zValues = [
    [1, 0.47, 0.58, 0.28, 0.43, 0.36, 0.38, 0.30, 0.40],
    [0.47, 1, 0.43, 0.40, 0.51, 0.47, 0.40, 0.49, 0.50],
    [0.58, 0.43, 1, 0.49, 0.53, 0.49, 0.64, 0.39, 0.64],
    [0.28, 0.40, 0.49, 1, 0.44, 0.70, 0.61, 0.59, 0.74],
    [0.43, 0.51, 0.53, 0.44, 1, 0.38, 0.57, 0.31, 0.51],
    [0.36, 0.47, 0.49, 0.70, 0.38, 1, 0.60, 0.53, 0.69],
    [0.38, 0.40, 0.64, 0.61, 0.57, 0.60, 1, 0.46, 0.72],
    [0.30, 0.49, 0.39, 0.59, 0.31, 0.53, 0.46, 1, 0.61],
    [0.40, 0.50, 0.64, 0.74, 0.51, 0.69, 0.72, 0.61, 1]

];
var colorscale = [
    [0, '#3D9970'],
    [1, '#001f3f']
];
//var colorscale = 'Viridis';
var data = [{
    x: xValues,
    y: yValues,
    z: zValues,
    type: 'heatmap',
    colorscale: colorscale,
    showscale: false
}];
var layout = {
    title: 'Correlation Between Health Conditions ',
    annotations: make_annotations(xValues, yValues, zValues, colorscale)
};
Plotly.newPlot('myDiv', data, layout);
