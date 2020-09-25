url ='./searchbyyear'
xl=[]
yl=[]

var lineDiv=document.getElementById('line_chart3')
plotly


//Health Search Volume by Year
var lineDiv = document.getElementById('line-chart');
var totalvolume = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [160914, 164517, 187908, 235995, 242628, 248034, 241125, 318027, 329940, 342558, 343884, 346857, 347079, 353949],
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
    y: [27660, 39633, 31005, 39609, 40311, 36543, 39438, 36807, 38241, 40284, 45633, 40734, 40911, 40767],
    name: 'Cancer',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};

var Cardiovascular = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [4683, 11763, 13581, 20145, 13533, 13536, 28038, 24159, 24438, 22764, 25863, 28716, 28809, 22632],
    name: 'Cardiovascular',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};

var Depression = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [28743, 7713, 15204, 24537, 20166, 13464, 17589, 37254, 43716, 43452, 39906, 41412, 38292, 39582],
    name: 'Depression',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Diabetes = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [23967, 14640, 24774, 34416, 28755, 38538, 25563, 42612, 38934, 43170, 44898, 45333, 49029, 48705],
    name: 'Diabetes',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Diarrhea = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [10257, 15606, 26301, 12780, 32454, 34662, 18264, 39699, 39510, 43224, 43062, 43770, 45660, 45816],
    name: 'Diarrhea',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Obesity = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [21585, 13557, 18189, 22179, 17907, 27450, 21165, 24246, 33957, 34230, 29505, 36432, 32610, 32610],
    name: 'Obesity',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Rehab = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [11901, 15009, 19371, 21711, 36132, 26709, 35544, 39288, 36729, 33288, 37551, 35301, 32043, 33345],
    name: 'Rehab',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};

var Stroke = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [11115, 28110, 15447, 34833, 38184, 34800, 26919, 37455, 38514, 42690, 38601, 35856, 40044, 44628],
    name: 'Stroke',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Vaccine = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [20460, 18486, 24036, 25785, 15186, 22332, 28605, 36507, 35901, 39456, 38865, 39303, 39681, 45864],
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
        z.map(function (row) {
            return Math.max.apply(Math, row);
        })
    );
    var z_min = Math.min.apply(
        null,
        z.map(function (row) {
            return Math.min.apply(Math, row);
        })
    );
    var z_mid = (z_max + z_min) / 2;
    return z_mid;
}
// custom function
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
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
    title: 'Correlation Between Health Conditions',
    annotations: make_annotations(xValues, yValues, zValues, colorscale)
};
Plotly.newPlot('myDiv', data, layout);
// box plot
var Cancer = {
    y: [27660, 39633, 31005, 39609, 40311, 36543, 39438, 36807, 38241, 40284, 45633, 40734, 40911, 40767],
    type: 'box',
    name: 'Cancer',
    boxpoints: 'all',

    marker: {
        color: 'rgba(255, 144, 14, 0.5)',
        size: 3
    },
    line: {
        width: 1
    },
};


var Cardiovascular = {
    y: [4683, 11763, 13581, 20145, 13533, 13536, 28038, 24159, 24438, 22764, 25863, 28716, 28809, 22632],
    type: 'box',
    name: 'Cardiovascular',
    boxpoints: 'all',
    marker: {
        color: 'rgba(44, 160, 101, 0.5)',
        size: 3,
        line: {
            width: 1
        },
    }
};
var Depression = {
    y: [28743, 7713, 15204, 24537, 20166, 13464, 17589, 37254, 43716, 43452, 39906, 41412, 38292, 39582],
    type: 'box',
    name: 'Depression',
    boxpoints: 'all',
    marker: {
        color: 'rgba(255, 65, 54, 0.5)',
        size: 3,
        line: {
            width: 1
        },
    }
};
var Diabetes = {
    y: [23967, 14640, 24774, 34416, 28755, 38538, 25563, 42612, 38934, 43170, 44898, 45333, 49029, 48705],
    type: 'box',
    name: 'Diabetes',
    boxpoints: 'all',
    marker: {
        color: 'rgba(207, 114, 255, 0.5)',
        size: 3,
        line: {
            width: 1
        },
    }
};
var Diarrhea = {
    y: [10257, 15606, 26301, 12780, 32454, 34662, 18264, 39699, 39510, 43224, 43062, 43770, 45660, 45816],
    type: 'box',
    name: 'Diarrhea',
    boxpoints: 'all',
    marker: {
        color: 'rgba(127, 96, 0, 0.5)',
        size: 3,
        line: {
            width: 1
        },
    }
};

var Obesity = {
    y: [21585, 13557, 18189, 22179, 17907, 27450, 21165, 24246, 33957, 34230, 29505, 36432, 32610, 32610],
    type: 'box',
    name: 'Obesity',
    boxpoints: 'all',
    marker: {
        color: 'rgba(255, 140, 184, 0.5)',
        size: 3,
        line: {
            width: 1
        },
    }
};
var Rehab = {
    y: [11901, 15009, 19371, 21711, 36132, 26709, 35544, 39288, 36729, 33288, 37551, 35301, 32043, 33345],
    type: 'box',
    name: 'Rehab',
    boxpoints: 'all',
    marker: {
        color: 'rgba(79, 90, 117, 0.5)',
        size: 3,
        line: {
            width: 1
        },
    }
};

var Stroke = {
    y: [11115, 28110, 15447, 34833, 38184, 34800, 26919, 37455, 38514, 42690, 38601, 35856, 40044, 44628],
    type: 'box',
    name: 'Stroke',
    boxpoints: 'all',
    marker: {
        color: 'rgba(222, 223, 0, 0.5)',
        size: 3,
        line: {
            width: 1
        },
    }
};
var Vaccine = {
    y: [20460, 18486, 24036, 25785, 15186, 22332, 28605, 36507, 35901, 39456, 38865, 39303, 39681, 45864],
    type: 'box',
    name: 'Vaccine',
    boxpoints: 'all',
    marker: {
        color: 'rgba(222, 223, 0, 0.5)',
        size: 3
    }
};

var data = [Cancer, Cardiovascular, Depression, Diabetes, Diarrhea, Obesity, Rehab, Vaccine];

var layout = {
    title: 'Boxplot of Health Google Search 2004-2016'
};

Plotly.newPlot('boxDiv', data, layout);

// Map

var data = [{
    type: "choroplethmapbox",
    name: "Searches",
    geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
    locations: ["NE", "CT", "ND",
        "WA",
        "MS",
        "SD",
        "CO",
        "MO",
        "MT",
        "NV",
        "LA",
        "PA",
        "SC",
        "OH",
        "OR",
        "KS",
        "TN",
        "VA",
        "IL",
        "MA",
        "IA",
        "NM",
        "KY",
        "OK",
        "ID",
        "ME",
        "AK",
        "AL",
        "AR",
        "AZ",
        "FL",
        "GA",
        "WV",
        "NY",
        "MN",
        "MD",
        "NC",
        "WI",
        "IN",
        "WY",
        "CA",
        "UT",
        "TX",
        "MI",
        "HI",
        "NH",
        "VT"
    ],
    z: [23859, 6568, 12587, 17104, 40802, 13050, 16895, 39160, 32212, 10720, 36367, 39719, 24643, 55656, 22755, 17978, 31771, 37967, 37390, 18807, 25804, 6009, 20093, 24128, 18444, 20752, 15823, 25755, 26217, 11807, 53592, 43646, 27302, 61798, 20884, 18444, 31417, 37555, 37994, 6028, 64598, 5742, 98134, 44093, 5555, 6236, 6457],

    zmin: 2555,
    zmax: 98134,
    colorbar: { y: 0, yanchor: "bottom", title: { text: "Seaches", side: "right" } },
    colorscale: [
        [0, '#131f0c'],
        [1, '#bdfe88']
    ],
    autocolorscale: false,



}];


var layout = {
    mapbox: { style: "dark", center: { lon: -110, lat: 50 }, zoom: 0.8 },
    width: 1200,
    height: 500,
    margin: { t: 0, b: 0 },
}



var config = { mapboxAccessToken: "pk.eyJ1IjoiZWdhZ2EiLCJhIjoiY2tmOG51MXY4MGR3NjJ5cnE4N3B2NTl0cCJ9.vVCAwSF-oh9ymZ8-pM-nBQ" };

Plotly.newPlot('mymapDiv', data, layout, config);
Plotly.newPlot('mymapDiv', data, layout, config);
Plotly.newPlot('mymapDiv', data, layout, config);
Plotly.newPlot('mymapDiv', data, layout, config);