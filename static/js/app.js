//Health Search Volume by Year
/////////////////////////////////////////////////////
//    Single line chart started here                // 
/////////////////////////////////////////////////////
Plotly.d3.json('/searchbyyear', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var data = rows.data
    console.log(data)

    var allyear = unpack(data, 'year'),
        allsearches = unpack(data, 'searches')
    var lineDiv = document.getElementById('line-chart');
    var totalvolume = {
        x: allyear,
        y: allsearches,
        name: 'Total search volume',
        fill: 'tonexty',
        type: 'scatter',
    };
    var data = [totalvolume];

    var layout = {
        width: 1000,
        height: 600,
        title: 'Total Volume of Searches by Year',
        xaxis: {
            title: 'Years',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Searches',
            showline: false
        }
    };
    Plotly.plot(lineDiv, data, layout);
});

/////////////////////////////////////////////////////
//    Single line chart end here                   // 
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
//    multiple  line chart start here              // 
/////////////////////////////////////////////////////

// Health Search Volume by Year and Conditionvar lineDiv = document.getElementById('line-chart');
Plotly.d3.json('/searchyearandcondition', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var data = rows.data

    var allyear = unpack(data, 'year'),
        cancer = unpack(data, 'cancer'),
        cardiovascular = unpack(data, 'cardiovascular'),
        depression = unpack(data, 'depression'),
        diabetes = unpack(data, 'diabetes'),
        diarrhea = unpack(data, 'diarrhea'),
        obesity = unpack(data, 'obesity'),
        rehab = unpack(data, 'rehab'),
        stroke = unpack(data, 'stroke'),
        vaccine = unpack(data, 'vaccine')

    var lineDiv = document.getElementById('line-chart2');
    var Cancer = {
        x: allyear,
        y: cancer,
        name: 'Cancer',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Cardiovascular = {
        x: allyear,
        y: cardiovascular,
        name: 'Cardiovascular',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Depression = {
        x: allyear,
        y: depression,
        name: 'Depression',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Diabetes = {
        x: allyear,
        y: diabetes,
        name: 'Diabetes',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Diarrhea = {
        x: allyear,
        y: diarrhea,
        name: 'Diarrhea',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Obesity = {
        x: allyear,
        y: obesity,
        name: 'Obesity',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Rehab = {
        x: allyear,
        y: rehab,
        name: 'Rehab',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Stroke = {
        x: allyear,
        y: stroke,
        name: 'Stroke',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Vaccine = {
        x: allyear,
        y: vaccine,
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
        title: 'Total Volume of Searches by year Versus Health Conditions',
        xaxis: {
            title: 'Years',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Searches',
            showline: false
        }
    };

    Plotly.plot(lineDiv, data, layout);
});

/////////////////////////////////////////////////////
//   -multiple  line chart end here--              // 
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
//   Cooreleation Matrix started here             // 
/////////////////////////////////////////////////////
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


/////////////////////////////////////////////////////
//   Cooreleation Matrix end here                  // 
/////////////////////////////////////////////////////
//Cooreleation Matrix




/////////////////////////////////////////////////////
//   Box plot started here                         // 
/////////////////////////////////////////////////////
// box plot
Plotly.d3.json('/searchyearandcondition', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var data = rows.data

    var
        cancer = unpack(data, 'cancer'),
        cardiovascular = unpack(data, 'cardiovascular'),
        depression = unpack(data, 'depression'),
        diabetes = unpack(data, 'diabetes'),
        diarrhea = unpack(data, 'diarrhea'),
        obesity = unpack(data, 'obesity'),
        rehab = unpack(data, 'rehab'),
        stroke = unpack(data, 'stroke'),
        vaccine = unpack(data, 'vaccine')
    var Cancer = {
        y: cancer,
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
        y: cardiovascular,
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
        y: depression,
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
        y: diabetes,
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
        y: diarrhea,
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
        y: obesity,
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
        y: rehab,
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
        y: stroke,
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
        y: vaccine,
        type: 'box',
        name: 'Vaccine',
        boxpoints: 'all',
        marker: {
            color: 'rgba(222, 223, 0, 0.5)',
            size: 3
        }
    };

    var data = [Cancer, Cardiovascular, Depression, Diabetes, Diarrhea, Obesity, Rehab, Stroke, Vaccine];

    var layout = {
        width: 1000,
        height: 600,
        title: 'Boxplot of Health Google Search 2004-2017',
        xaxis: {
            title: 'Condition',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Search',
            showline: false
        }
    };

    Plotly.newPlot('boxDiv', data, layout);
});

/////////////////////////////////////////////////////
//   Box plot end here                         // 
/////////////////////////////////////////////////////





/////////////////////////////////////////////////////
// choropleth map Started Heare                    // 
/////////////////////////////////////////////////////

Plotly.d3.json('/searchbystate', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var data = rows.data

    var
        state = unpack(data, 'postal'),
        searches = unpack(data, 'searches')

    var data = [{
        type: "choroplethmapbox",
        name: "Searches",
        geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
        locations: state,
        z: searches,

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
        mapbox: { style: "dark", center: { lon: -95.712891, lat: 37.090240 }, zoom: 3 },
        width: 800,
        height: 500,
        margin: { t: 0, b: 0 },

    }
    var config = { mapboxAccessToken: "pk.eyJ1IjoiZWdhZ2EiLCJhIjoiY2tmOG51MXY4MGR3NjJ5cnE4N3B2NTl0cCJ9.vVCAwSF-oh9ymZ8-pM-nBQ" };

    Plotly.newPlot('mymapDiv', data, layout, config);
});

/////////////////////////////////////////////////////
// choropleth map end here                         // 
/////////////////////////////////////////////////////



/////////////////////////////////////////////////////
// Bar chart started here                          // 
/////////////////////////////////////////////////////


Plotly.d3.json('/mostsserached', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var data = rows.data

    var state = unpack(data, 'state'),
        cancer = unpack(data, 'cancer'),
        cardiovascular = unpack(data, 'cardiovascular'),
        depression = unpack(data, 'depression'),
        diabetes = unpack(data, 'diabetes'),
        diarrhea = unpack(data, 'diarrhea'),
        obesity = unpack(data, 'obesity'),
        rehab = unpack(data, 'rehab'),
        stroke = unpack(data, 'stroke'),
        vaccine = unpack(data, 'vaccine')

    var barDiv = document.getElementById('bar-chart');

    var Cancer = {
        x: state,
        y: cancer,
        type: 'bar',
        marker: { color: '#448' },
        name: 'Cancer'
    };

    var Cardiovascular = {
        x: state,
        y: cardiovascular,
        type: 'bar',
        marker: { color: '#88C' },
        name: 'Cardiovascular'
    };

    var Depression = {
        x: state,
        y: depression,
        type: 'bar',
        marker: { color: '#CCF' },
        name: 'Depression'
    };
    var Diabetes = {
        x: state,
        y: diabetes,
        type: 'bar',
        name: 'Diabetes',
        marker: { color: '#080' }
    };
    var Diarrhea = {
        x: state,
        y: diarrhea,
        type: 'bar',
        name: 'Diarrhea',
        marker: { color: '#8c8' }

    };


    var Obesity = {
        x: state,
        y: obesity,
        type: 'bar',
        name: 'Obesity',
        marker: { color: '#CFC' }

    };

    var Rehab = {
        x: state,
        y: rehab,
        type: 'bar',
        name: 'Obesity',
        marker: { color: '#880' }

    };

    var Stroke = {
        x: state,
        y: stroke,
        type: 'bar',
        name: 'Stroke',
        marker: { color: '#CC8' }
    };

    var Vaccine = {
        x: state,
        y: vaccine,
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
        xaxis: {
            title: 'States ',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Searches',
            showline: false
        }


    };

    Plotly.plot(barDiv, data, layout);
});


/////////////////////////////////////////////////////
// Bar chart started here                          // 
/////////////////////////////////////////////////////



////////////////////////////////////////////////////
// Radar plot 1 start here                           // 
/////////////////////////////////////////////////////
data = [{
    type: 'scatterpolar',
    r: [179192, 94220, 137010, 167778, 150355, 121874, 137974, 155732, 143489],
    theta: ["Cancer", "Cardiovascular", "Depression", "Diabetes", "Diarrhea", "Obesity", "Rehab", "Stroke", "Vaccine"],
    fill: 'toself'
}]

layout = {
    title: 'The Sum total Volume of Health Condition Searches from 2004- 2017 ',
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



////////////////////////////////////////////////////
// Radar plot 2 start here                           // 
/////////////////////////////////////////////////////


data = [{
    type: 'scatterpolar',
    r: [571, 357.3, 568.3, 308.5, 2574, 229.9, 2282.4, 196.8, 589.5, 171],
    theta: ["Accidents", "Alzheimer ", "Cerebrovascular", "Diabetes", "Diseases of heart", "Influenza and Pneumonia", "Malignant Neoplasms(Tumor)", "Nephrosis ", "Respiratory", "Suicide"],
    fill: 'toself'
}]


layout = {
    title: 'The Sum total Volume of 10 Leading Causes of Death Per 100,000 Population from 2004-2017 ',
    width: 1000,
    height: 300,
    polar: {
        radialaxis: {
            visible: true,
            range: [-2000, 2874]
        }
    },
    showlegend: false
}

Plotly.newPlot("radarmyDiv2", data, layout)


/////////////////////////////////////////////////////
//    multiple  line chart leading causes of death // 
/////////////////////////////////////////////////////

// Health Search Volume by Year and Conditionvar lineDiv = document.getElementById('line-chart');
Plotly.d3.json('/casesleadingdeath', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var data = rows.data


    var year = unpack(data, 'year'),
        accidents = unpack(data, "Accidents"),
        alzheimer = unpack(data, "Alzheimer"),
        cerebrovascular = unpack(data, "Cerebrovascular"),
        ddiabetes = unpack(data, "Diabetes"),
        heart = unpack(data, "Diseases_of_heart"),
        influenza = unpack(data, "Influenza_and_pneumonia"),
        malignant = unpack(data, "Malignant_neoplasms"),
        nephrosis = unpack(data, "Nephrosis"),
        respiratory = unpack(data, "Respiratory"),
        suicide = unpack(data, "Suicide")

    var lineDiv = document.getElementById('line-chart3');
    var Accidents = {
        x: year,
        y: accidents,
        name: 'Accidents',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Alzheimer = {
        x: year,
        y: alzheimer,
        name: 'Alzheimer',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Cerebrovascular = {
        x: year,
        y: cerebrovascular,
        name: 'Cerebrovascular',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Diabetesd = {
        x: year,
        y: ddiabetes,
        name: 'Diabetes',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Heart = {
        x: year,
        y: heart,
        name: 'Diseases of Heart',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Influenza = {
        x: year,
        y: influenza,
        name: 'Influenza and Pneumonia',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Malignant = {
        x: year,
        y: malignant,
        name: 'Malignant Neoplasms',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Nephrosis = {
        x: year,
        y: nephrosis,
        name: 'Nephrosis',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Respiratory = {
        x: year,
        y: respiratory,
        name: 'Respiratory',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var Suicide = {
        x: year,
        y: suicide,
        name: 'Suicide',
        type: 'scatter',
        line: {
            shape: 'spline',
            smoothing: 0.5,

        }
    };

    var data = [Accidents, Alzheimer, Cerebrovascular, Diabetesd, Heart, Influenza, Malignant, Nephrosis, Respiratory, Suicide];
    var layout = {
        width: 1000,
        height: 600,
        xaxis: {
            title: 'Years',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: 'Sum of number of death per 100,000',
            showline: false
        }
    };

    Plotly.plot(lineDiv, data, layout);
});