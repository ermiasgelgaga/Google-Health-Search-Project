lineD
= d
ent.getElementById('line-chart');
var totalvolume = {
4, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [53457, 54839, 62636, 78665, 80876, 82678, 80375, 106009, 109980, 114186, 114628, 115619, 115693, 117983, ],
Total search volume',
tonexty',
    type: 'scatter',
}; 
data = [totalvolume];

var layout = {
,
 600,
'Total Volume of Searches by Year'
};
(lineDiv, data, layout);
// Hh Volume by Year and Conditionvar lineDiv = document.getElementById('line-chart');
var ocument.getElementById('line-chart2');
var 
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
    y: [1561, 3921, 4527, 6715,
        4511,
        4512,
             
         9346
,       
       
       
       
       
       
       
       
       
        8053,
          814
    };

8621
9572,

7544,

: 'Cardiovascular',
: 'sc atter',
 {
   ape: 'spline',
        smooth ing: 0.5,

}
};

var Depression = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [9581,
        2571,
            
           50
6       8,
       
       
       
       
       
       
       
       
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
 
Diabet es = {
    x: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
    y: [7989,
  
    4880,
   
          11472,
         ,
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
               
                5
2           02,
           
           
           
           
           
           
           
           
           
           
           
                8767,
              4260,
                10818,
          11554,
        6088,
        13233,
        13170,
        14408,
        14354,
        
        
        15272,
    ],
    D
}iarrhea',
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
                9 835,
            12144,
        1087
            10870,
    ],
        
            name: 'Obesity',
    type: 'scatter',
     lne: {
    i
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
  shape: 'spl
ine',      smoothing: 0.
        }
    };
    
var Stroke = {
4, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
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
        13  152,
        12  955,
        1310
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

                 a

    //'us// 
          // http s://github.com/plotly/plotly.js/issues/4116
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
                var z_mid = (z
              _max + z_min) / 2;
                return z_mid;
            }
            // custom fun mid;
      ction}
          un    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                hex = hexace(shorthandRegex, function(m, r, g, b) {
                    return r + r + g + g + b + b;
                });
                var result =#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                var
  r = parseI    var g = parseInt(result[2], 16);
                var b = parseInt(result[3], 16);
                return result ? [r, g, b] : null;
            }
            //
            /
 / //
function to_rgb_color_list(color_str, Default) {
                if (color_str.includes('rgb')) {
                    ret
        u
        rn color_str.replace(/[^0-9.,]+/g, '').split(',');
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
    //
    // 
}
function get_text_color(colorscale, reversescale) {
        var white = '#FFFFFF';
        var black = '#000000';
        var colorscales = ['Greys', 'Greens', 'Blues', 'YIGnBu', 'YIOrRd', 'RdBu', 'Picnic', 'Jet', 'Hot', 'Blackbody', 'Earth', 'Electric', 'Viridis', 'Cividis'];
        var colorscales_reverse = ['Reds'];
        var min_text_color = black;
        var max_text_color = black;
        if ((colorscales.indexOf(colorscale) > -1) && reversescale) {
            min_text_color = black;
            max_text_col = white;
        } else if ((colorscales.indexOf(colorscale) > -1)) {
            min_textolor = white;
            max_textolor =  black;
        } else if ((orscales_reverse.indexOf(colorscale) > -: n {
 min_text_color        xt_color = black;
lse if ((colorscales_reverse.indexOf(colorscale) > -1)) {
                min_text_color = black;
             max_text_color = white;
            } else if (
            Array.isArray(colorscale)) {
        var _min_col = to_rgb_color_list(colorscale.slice(0)[0][1], [255, 255, 255]);
                    var _max_col = to_rgb_color_list(colorscale.slice(-1)[0][1], [255, 255, 255]);
                    var min_col = _min_col;
                    var max_col = _max_col;
                    if (reversescale) {
                        // swap min max                        max_col = _min_col;
                    }
                if (should_use_black_text(min_col)) {
  min_text_cmin_olor = black;

    min_text_color = white;

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
    //  var text_colors = get_text_color(colorscale);
 var}
 min//
_text_color = text_colors[0];  var max_text_color = text_colors[1];
id =//
 get_z_mid(_z);
ions = [];
= 0; n < _z.length; n++) {
 var row;
         m < row.length; m++) {
        ow[m];
        lor = (val < z_mid) ? min_text_color : max_text_color;
             annotations.push({
            
                
                
                 y: _y[n],
                text: _z
                        font: {
                            famil
y: 'Ari                     size
: 12,             
                        col
or: font_co             
                showarro
            });
        }},
    }
    return a
}


raw Plot
//
var xValues = ['Cancer', 'Cardiovascular', 'Stroke', 'Depression', 'Rehab', 'Vaccine', 'Diarrhea', 'Obesity', 'Diabetes'];
va ['Cancer', 'Cardiovascular', 'Stroke', 'Depression', 'Rehab', 'Vaccine', 'Diarrhea', 'Obesity', 'Diabetes'];
var zValues = [
    [1, 0.47, 0.58, 0.28, 0.43, 0.36, 0.38, 0.30, 0.40],
    [0.47, 1, 0.43, 0.40, 0.51, 0.47, 0.40, 0.49, 0.50],
    .53, 0.49, 0.64, 0.39, 0.64],
    .44, 0.70, 0.61, 0.59, 0.74],
, 1, 0.38, 0.57, 0.31, 0.51],
, 0.38, 1, 0.60, 0.53, 0.69],
[0.38, 0.40, 0.6 0.57, 0.60, 1, 0.46, 0.72],
[0.30, 0.49, 0.39, 0, 0.31, 0.53, 0.46, 1, 0.61],
[0.40, 0.50, 0.64, 0.74, 0.51, 0.69, 0.72, 0.61, 1]


colorscale = [

    [1, '#001f3f']
];
//var colorscale = 'Viridis';
    var data = [
{
    x: xValu
es,

   z: zValues,
     type: 'heatmap',
 colorsc ale: colorscale,
   owscale:  false
}];
{
    w idth: 1000,
    title: 'Correlation Between Health Conditions',
      annotations: make_annotations(xValues, yValues, zValues, colorscale)
};
}P lotly.newPlot('myDiv', data, layout);
   // box plot 
var Cancer = { 
      
  y: [9220,


        13203,
        13437,
        12181,
        13146,
        12269,
        12747,
        13428,
        15211,
        13578,




: 'Cancer',
oints: 'all',

marker: {
    color: 'rgba(255, 144, 14, 0.5)',
        size: 3
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
}


    name: 'Cardiovascular',
          box
   points: 'al',
    marker: {
      color: 'rgba(44, 160, 101, 0.5)',
        size: 3
    line: {
            width: 1
    },
  
    
};
var ession 
    y: [,
    2571,
    5068,
    8179,
        6722,
    4488,
        5863,
    12418,
    14572
    14484
    13302
    13804
    12764,
    13194,
],
ox',
name: 'Dep
ression',
'all',
 marker: {

     color: 'rgba(255, 65, 54, 0.5)',
   size: 3,

   l         width: 1
      }, 
        }

;
    
var Diabetes = {
: [7 989 ,         4880,
                     825                          12                14204,
        12978,
                                      
                                    14966,
        15111,
           16343                        , 
        16235,
           ],                             
      type                                  : 'box',
                                 name       : 'Diabetes',
    boxp                                    oints: 'all',
    mark                                    er: {
                                            color: 'rgba(207, 114, 255, 0.5)',
                                            size: 3,
                                            line: {
                                                width: 1
        },
    }
                                        };   var Diarrhea = {
                                            y: [3419,
                                         5202,
                                     8767,
                             4260,
                     10818,        11554,
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
        color: 'rgba(127, 96, 0, 0.         5)',
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
      7055,         };

        8082,             1131=9{
,                     1141,
0,        9835,4519,
        12144,   
        10870,
        10870,
    ],                 
    type                                : 'b,
ox',    name                 : 'Ob
esity',    boxp                 oints:
 'all',    mark                 er: {
                         color
: 'rgba(255, 14                         size: 
3,                         line: 
{                             wi
dth: 1                       
  },                     }
};name
              var {boxpoint
                                    y: [3967,
                         5003,
                 6457,
                                        7237: {
 ,        12044,
                                        8903,
                                        11848,
                            1309};6,
                                       12243
                     ,        11096
  ,        7,5003
                     11767,
                     10681,
                                 15,120
                                    ],
                              type: 'box
                              ',    name: 'Reh
                            ab',    boxpoints:
                           'all'    marker: {
                                      color:
    'r                                  size: 
    3,                               line: 
       {                                    wi
     dth                              
        },                         }
                              };
                                
        var Stro                        ke = {
            y: [                        3705,
                                     9370,
                               5149widt
        11611,
        12728,
                                        11
                                    600,
        8973,
                                            12485,
                       12838,y:[,
                                                14230
                       ,                      12867,
                                            

          11952,                            13348,
                                            14876,
         ],                             
                                     type   : 'box',
                                 name       : 'Str
                       o    boxp            oints: 'all',
                       mark                 er: {
                                            color:
                                            size: 3,
                                            line: {
                                                width: 1
                                            },
                                        }
                   };                 
              var                       Vaccine =
          {                            y: [6820,
                                            6162,
                                            8012,

        5062                              ,
                                     }7444,
                                                9535,
                                            12169,
                      11967,y:[
                         13152,
                                            12955
,
                          13101,        1322 7,
                                            15288,
                                       ], 
                                   type     : 'box',
                              name          : 'Vaccine',
                          boxp              oints: 'all',
                     mark                   er: {
                                            color: 'rgba(222, 223, 0, 0.5)',
                                            size: 3
                                       } 
                               };     
                                    
                      var               data = [Cancer, Cardiovascular, Depression, Diabetes, Diarrhea, Obesity, Rehab, Vaccine];
                                    
             var                        layout = {
                                      width: 1000,
    heig                                    ht: 600,
    titl                                    e: 'Box
pl};                                 }

Plo                            

// Map                       var 
var data = [{                               
                                    
                                        type: "choroplethmapbox",
                                name: "Searches",
                              geoj

son: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
                         loca
                                 zmin: 2555,
    zmax: 98134,
                                 
                                     colorbar: { y: 0, yanchor: "bottom", title: { text: "Seaches", side: "right" } },
                             colorsca       le: [
                                 [0,         '#131f0c'],
                               [1           , '#bdfe88']
                         ],            

                      autoco       
                        }];         

                        
                            var layout      = {
                              scope: "usa",        style: "dark"],, center: { lon: -110, lat: 50 }, zoom: 0.8 },
    wid    height: 500                          ,

    margin: { t: 0, b: 

}var config = { m apboxAccessToken: "pk.eyJ1IjoiZWdhZ2EiLCJhIjoiY2tmOG51MXY4MGR3NjJ5cnE4N3B2NTl0cCJ9.vVCAwSF-oh9ymZ8-pM-nBQ" };

P                            lotly.newPlot('mymapDiv', data, layout, config);
Plotly.newPlot('mymapDiv', data, layout, config);
                                            Plotly.newP
                                        lot('mymapDiv', data, layout, config);
                                            Plotly.newPlot('mymapDiv', data, layout, config);
                                        
var b                                       arDiv = document.getEleentById('bar-chart');

var                                   Cancer = {
    x: ["Texas", "New Y                 ork", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [13063, 9015, 8956, 8107, 7834, 6112, 6067, 5711, 5341, 5324],
                                            type: 'bar',
                                            marker: { color: '#448' }, 
                                            name: 'Cancer'
                                  };

 v                                          ar Cardiovascular = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
                                            y: [7347, 3727, 4267, 3664, 4577, 2810, 3859, 2713, 3090, 3886],
                                             type: 'bar',
       marker: { color:                      '#8
          8C' },                           
                                               name: 
                       '                        Cardiovascular'
                                                };
                                            
                                        

var Depression = {
                                            x: ["Texas", "New     y: [10105, 6849, 7136, 6175, 4838, 5582, 4306, 4283, 4180, 3947],
                                                type: 'bar',
                                              marker: { color: '#CCF' },
                                                name: 'Depression'
                                            };
var Diabetes = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
                                                    y: [1399    type: 'bar',
                                                    n
                                 a              me: '
D                                               iabet
e                                               s',
                                               
                                               
                                               
                                               
                                               
                                               marker: { color: '#080' }
                                            };
                                            var Diarrhea = {
    x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
                                                    y: [1 199
                                                    4, 7370, 7494, 7014, 6045, 4938, 4753, 4577, 4567, 4616],
    type: 'bar',
    name: 'Diarrhea',
                                                        m arke
                                                    r: { col or: 
                                                 8c8Ca' }
                                               
                                                     
                                                };
                                                        
                                                            
                                                       
                                                    
                                              y:[1
                                                 
                                                        var Obesity = {
    x:                                           ["Texas", "
                                        New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
    y: [8243, 6231, 6529, 5062, 4300, 3692, 4283, 3769, 4058, 4387],
                                            ty pe: 'bar',
                                            name: 'Obesity',
    marker: { color: '#CFC' }

};

                                        var Rehab = {
                                                x: ["Texas", "New York", "California", "Ohio", "Florida", "Michigan", "Georgia", "Pennsylvania", "Missouri", "Mississippi"],
                                             
                                              y: 
                                           [11494
                                           , 6224
                                           , 6332
                                           , 5949
                                           , 6895
                                           , 4550
                                           , 5031
                                           , 4668, 3983, 4668],
                                            type: 'bar',
                                           name: 'Obesity',
                                            marker: { color: '#880' }

};

v                                       ar Stroke = {
                                                x : ["
                                            Texas",  "New
                                             York", "C alif
                                            orni a", 
                                            "Ohio",  "Fl
                                            orida",  "Mic
                                            higan",  "Ge
                                            orgia", "Pen nsyl
                                            vania",  "Mis
                                            souri", "Mi ssissippi"],
                                                y:
                                            [1079
                                           5, 732
                                           6, 776
                                           7,  6538, 6
                                           838, 5746, 5204, 4552, 4644, 4872],
                                               
                                            type:
                                            'bar'
                                           ,
                                           
                                            name: 'St roke',
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
                                                    title: 'Health Searche
                                                s       barmode: 'scatter',
                                                        bargap: 0.25,
    bargroupgap: 0.1,
                                                      

                  barnorm: 'percent'         
                                                   
                                                   
                                                   
                                                   
                                                   
                                                   
Plotly.plot(barDiv, data, layout);
                                                

       data                                              = [{
    ype:                                                l  'scatterpolar',
                                                         
    17919                                                   b2rg a, 94220,  1 37010, 167778, 150355, 121874, 137974, 155732, 143489],
                                                            theta: ["Cancer",  "Cardiovascular", "Depression", "Diabetes", "Diarrhea", "Obesity", "Rehab", "Stroke", "Vaccine"],
                                                            fill: 'toself'
                                                    }] 

                                                    layout = {
                                                    
    title: 'Total Volume of Health Searches ',
    width: 1000,
                                                heigh t :    polar: {
                                                            radialaxis: {
                                                      vi9[sib
                                                        le : true ,
                                                             range: [0, 179192]
                                                              }    
    },
                                                        showleg
end: false
                                                  }
                                                Plotly.newPlot("radarmyDiv", data, layout)                                                                                                                                                                     
                                                                                                
                                                          },                                                                                                                                                                      
                                                                                                                                                                             



y:[                };
typbrname:'Diabetes',
marker:{color:'#080'}
};
varDiarrhea={
x:Florida","
Mcign""
  
                                                         
                                                         
                                                                                                                 
                                                         
                                                                                                      };
                                            
                                     
       CC8'};



    
                                                                                                                          
                                              
                                             
                                                                 fill:'toself'
                                  
                                     
                                                                                                                                    
                                        
                                    
                                     
                                
                                  