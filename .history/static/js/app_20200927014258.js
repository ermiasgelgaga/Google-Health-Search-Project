function importData()
{ 
    d3.json('searchbyyear',function(data){
console
    })

//Health Search Volume by Year
var lineDiv = document.getElementById('line-chart');
var totalvolume = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [53457, 54839, 62636, 78665, 80876, 82678, 80375, 106009, 109980, 114186, 114628, 115619, 115693, 117983, ],
    name: 'Total search volume',
    fill: 'tonexty',
    type: 'scatter',
};
var data = [totalvolume];

var layout = {
    width: 1000,
    height: 600,
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
    y: [1561, 3921, 4527, 6715, 4511, 4512, 9346, 8053, 8146, 7588, 8621, 9572, 9603, 7544, ],
    name: 'Cardiovascular',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};

var Depression = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [9581,
        2571,
        5068,
        8179,
        6722,
        4488,
        5863,
        12418,
        14572,
        14484,
        13302,
        13804,
        12764,
        13194,
    ],
    name: 'Depression',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Diabetes = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [7989,
        4880,
        8258,
        11472,
        9585,
        12846,
        8521,
        14204,
        12978,
        14390,
        14966,
        15111,
        16343,
        16235,
    ],
    name: 'Diabetes',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Diarrhea = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [3419,
        5202,
        8767,
        4260,
        10818,
        11554,
        6088,
        13233,
        13170,
        14408,
        14354,
        14590,
        15220,
        15272,
    ],
    name: 'Diarrhea',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Obesity = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [7195,
        4519,
        6063,
        7393,
        5969,
        9150,
        7055,
        8082,
        11319,
        11410,
        9835,
        12144,
        10870,
        10870,
    ],
    name: 'Obesity',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Rehab = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [3967,
        5003,
        6457,
        7237,
        12044,
        8903,
        11848,
        13096,
        12243,
        11096,
        12517,
        11767,
        10681,
        11115,
    ],
    name: 'Rehab',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};

var Stroke = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [3705,
        9370,
        5149,
        11611,
        12728,
        11600,
        8973,
        12485,
        12838,
        14230,
        12867,
        11952,
        13348,
        14876,
    ],
    name: 'Stroke',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};
var Vaccine = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [6820,
        6162,
        8012,
        8595,
        5062,
        7444,
        9535,
        12169,
        11967,
        13152,
        12955,
        13101,
        13227,
        15288,
    ],
    name: 'Vaccine',
    type: 'scatter',
    line: {
        shape: 'spline',
        smoothing: 0.5,

    }
};



var data = [Cancer, Cardiovascular, Depression, Diabetes, Diarrhea, Obesity, Rehab, Stroke, Vaccine];

var layout = {
    width: 1000,
    height: 600,
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
// 
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
//
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
    width: 1000,
    height: 600,
    title: 'Correlation Between Health Conditions',
    annotations: make_annotations(xValues, yValues, zValues, colorscale)
};
Plotly.newPlot('myDiv', data, layout);
// box plot
var Cancer = {
    y: [9220,
        13211,
        10335,
        13203,
        13437,
        12181,
        13146,
        12269,
        12747,
        13428,
        15211,
        13578,
        13637,
        13589,
    ],
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
    y: [1561,
        3921,
        4527,
        6715,
        4511,
        4512,
        9346,
        8053,
        8146,
        7588,
        8621,
        9572,
        9603,
        7544,
    ],
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
    y: [9581,
        2571,
        5068,
        8179,
        6722,
        4488,
        5863,
        12418,
        14572,
        14484,
        13302,
        13804,
        12764,
        13194,
    ],
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
    y: [7989,
        4880,
        8258,
        11472,
        9585,
        12846,
        8521,
        14204,
        12978,
        14390,
        14966,
        15111,
        16343,
        16235,
    ],
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
    y: [3419,
        5202,
        8767,
        4260,
        10818,
        11554,
        6088,
        13233,
        13170,
        14408,
        14354,
        14590,
        15220,
        15272,
    ],
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
    y: [7195,
        4519,
        6063,
        7393,
        5969,
        9150,
        7055,
        8082,
        11319,
        11410,
        9835,
        12144,
        10870,
        10870,
    ],
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
    y: [3967,
        5003,
        6457,
        7237,
        12044,
        8903,
        11848,
        13096,
        12243,
        11096,
        12517,
        11767,
        10681,
        11115,
    ],
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
    y: [3705,
        9370,
        5149,
        11611,
        12728,
        11600,
        8973,
        12485,
        12838,
        14230,
        12867,
        11952,
        13348,
        14876,
    ],
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
    y: [6820, 6162, 8012, 8595, 5062, 7444, 9535, 12169, 11967, 13152, 12955, 13101, 13227, 15288, ],
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
    width: 1000,
    height: 600,
    title: 'Boxplot of Health Google Search 2004-2016'
};

Plotly.newPlot('boxDiv', data, layout);

// Map

var data = [{
    type: "choroplethmapbox",
    name: "Searches",
    geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
    locations: ["NE", "CT", "ND", "WA", "MS", "SD", "CO", "MO", "MT", "NV", "LA", "PA", "SC", "OH", "OR", "KS", "TN", "VA", "IL", "MA", "IA", "NM", "KY", "OK", "ID", "ME", "AK", "AL", "AR", "AZ", "FL", "GA", "WV", "NY", "MN", "MD", "NC", "WI", "IN", "WY", "CA", "UT", "TX", "MI", "HI", "NH", "VT"],
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
    scope: "usa",
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

var barDiv = document.getElementById('bar-chart');

var Cancer = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [13063, 9015, 8956, 8107, 7834, 6112, 6067, 5711, 5341, 5324],
    type: 'bar',
    marker: { color: '#448' },
    name: 'Cancer'
};

var Cardiovascular = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [7347, 3727, 4267, 3664, 4577, 2810, 3859, 2713, 3090, 3886],
    type: 'bar',
    marker: { color: '#88C' },
    name: 'Cardiovascular'
};

var Depression = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [10105, 6849, 7136, 6175, 4838, 5582, 4306, 4283, 4180, 3947],
    type: 'bar',
    marker: { color: '#CCF' },
    name: 'Depression'
};
var Diabetes = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [13996, 7568, 8436, 7185, 6785, 5659, 5710, 4882, 5011, 5371],
    type: 'bar',
    name: 'Diabetes',
    marker: { color: '#080' }
};
var Diarrhea = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [11994, 7370, 7494, 7014, 6045, 4938, 4753, 4577, 4567, 4616],
    type: 'bar',
    name: 'Diarrhea',
    marker: { color: '#8c8' }

};


var Obesity = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [8243, 6231, 6529, 5062, 4300, 3692, 4283, 3769, 4058, 4387],
    type: 'bar',
    name: 'Obesity',
    marker: { color: '#CFC' }

};

var Rehab = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [11494, 6224, 6332, 5949, 6895, 4550, 5031, 4668, 3983, 4668],
    type: 'bar',
    name: 'Obesity',
    marker: { color: '#880' }

};

var Stroke = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [10795, 7326, 7767, 6538, 6838, 5746, 5204, 4552, 4644, 4872],
    type: 'bar',
    name: 'Stroke',
    marker: { color: '#CC8' }
};

var Vaccine = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [11097, 7488, 7681, 5962, 5480, 5004, 4433, 4564, 4286, 3731],
    type: 'bar',
    name: 'Vaccine',
    marker: { color: '#FFC' }

};

var data = [Cancer, Cardiovascular, Depression, Diabetes, Diarrhea, Obesity, Rehab, Stroke, Vaccine];

var layout = {
    width: 1000,
    height: 600,
    title: 'Health Searches by States ',
    barmode: 'scatter',
    bargap: 0.25,
    bargroupgap: 0.1,
    barnorm: 'percent'
};

Plotly.plot(barDiv, data, layout);


data = [{
    type: 'scatterpolar',
    r: [179192, 94220, 137010, 167778, 150355, 121874, 137974, 155732, 143489],
    theta: ["Cancer", "Cardiovascular", "Depression", "Diabetes", "Diarrhea", "Obesity", "Rehab", "Stroke", "Vaccine"],
    fill: 'toself'
}]

layout = {
    title: 'Total Volume of Health Searches ',
    width: 1000,
    height: 700,
    polar: {
        radialaxis: {
            visible: true,
            range: [0, 179192]
        }
    },
    showlegend: false
}

Plotly.newPlot("radarmyDiv", data, layout)