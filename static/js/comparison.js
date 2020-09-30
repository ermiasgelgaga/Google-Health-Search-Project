Plotly.d3.json('/allsearchrecord', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    function sum(input) {

        if (toString.call(input) !== "[object Array]")
            return false;

        var total = 0;
        for (var i = 0; i < input.length; i++) {
            if (isNaN(input[i])) {
                continue;
            }
            total += Number(input[i]);
        }
        return total;
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
        vaccine = unpack(data, 'vaccine'),
        city = unpack(data, 'city'),
        state = unpack(data, 'postal'),
        sum_cancer = sum(cancer),
        sum_cardiovascular = sum(cardiovascular),
        sum_depression = sum(depression),
        sum_diabetes = sum(diabetes),
        sum_diarrhea = sum(diarrhea),
        sum_obesity = sum(obesity),
        sum_rehab = sum(rehab),
        sum_stroke = sum(stroke),
        sum_vaccine = sum(vaccine),




        listofCities = [],
        searched_state = [],
        cancer_search = [],
        cardiovascular_search = [],
        depression_search = [],
        diabetes_search = [],
        diarrhea_search = [],
        obesity_search = [],
        rehab_search = [],
        stroke_search = [],
        vaccine_search = [],
        serched_years = [],
        sum_cancer_search = [],
        sum_cardiovascular_search = [],
        sum_depression_search = [],
        sum_diabetes_search = [],
        sum_diarrhea_search = [],
        sum_obesity_search = [],
        sum_rehab_search = [],
        sum_stroke_search = [],
        sum_vaccine_search = [];
    sum_total_search = [];





    for (var i = 0; i < city.length; i++) {
        if (listofCities.indexOf(city[i]) === -1) {
            listofCities.push(city[i]);
        }
    }

    function getCityData(chosenCity) {
        serched_years = [];
        cancer_search = [];
        cardiovascular_search = [];
        depression_search = [];
        diabetes_search = [];
        diarrhea_search = [];
        obesity_search = [];
        rehab_search = [];
        stroke_search = [];
        vaccine_search = [];
        searched_state = [];
        sum_cancer_search = [];
        sum_cardiovascular_search = [];
        sum_depression_search = [];
        sum_diabetes_search = [];
        sum_diarrhea_search = [];
        sum_obesity_search = [];
        sum_rehab_search = [];
        sum_stroke_search = [];
        sum_vaccine_search = [];
        sum_total_search = [];


        for (var i = 0; i < city.length; i++) {
            if (city[i] === chosenCity) {
                serched_years.push(allyear[i]);
                cancer_search.push(cancer[i]);
                cardiovascular_search.push(cardiovascular[i]);
                depression_search.push(depression[i]);
                diabetes_search.push(diabetes[i]);
                diarrhea_search.push(diarrhea[i]);
                obesity_search.push(obesity[i]);
                rehab_search.push(rehab[i]);
                stroke_search.push(stroke[i]);
                vaccine_search.push(vaccine[i]);
                searched_state.push(state[i]);
                sum_cancer_search.push(sum_cancer);
                sum_cardiovascular_search.push(sum_cardiovascular);
                sum_depression_search.push(sum_depression);
                sum_diabetes_search.push(sum_diabetes);
                sum_diarrhea_search.push(sum_diarrhea);
                sum_obesity_search.push(sum_obesity);
                sum_rehab_search.push(sum_rehab);
                sum_stroke_search.push(sum_stroke);
                sum_vaccine_search.push(sum_vaccine);
                sum_total_search.push(sum_vaccine);




            }
        }
    };
    // Default city Data
    setBarPlot('Abilene-Sweetwater');

    function setBarPlot(chosenCity) {
        getCityData(chosenCity);
        var Cancer = {
            x: serched_years,
            y: cancer_search,
            name: 'Cancer',
            type: 'bar',
            marker: { color: '#448' }

        };

        var Cardiovascular = {
            x: serched_years,
            y: cardiovascular_search,
            name: 'Cardiovascular',
            type: 'bar',
            marker: { color: '#88C' }

        };

        var Depression = {
            x: serched_years,
            y: depression_search,
            name: 'Depression',
            type: 'bar',
            marker: { color: '#CCF' }

        };

        var Diabetes = {
            x: serched_years,
            y: diabetes_search,
            name: 'Diabetes',
            type: 'bar',
            marker: { color: '#080' }

        };

        var Diarrhea = {
            x: serched_years,
            y: diarrhea_search,
            name: 'Diarrhea',
            type: 'bar',
            marker: { color: '#8c8' }

        };

        var Obesity = {
            x: serched_years,
            y: obesity_search,
            name: 'Obesity',
            type: 'bar',
            marker: { color: '#CFC' }

        };

        var Rehab = {
            x: serched_years,
            y: rehab_search,
            name: 'Rehab',
            type: 'bar',
            marker: { color: '#880' }

        };

        var Stroke = {
            x: serched_years,
            y: stroke_search,
            name: 'Stroke',
            type: 'bar',
            marker: { color: '#CC8' }

        };

        var Vaccine = {
            x: serched_years,
            y: vaccine_search,
            name: 'Vaccine',
            type: 'bar',
            marker: { color: '#FFC' }

        };

        var data = [Cancer, Cardiovascular, Depression, Diabetes, Diarrhea, Obesity, Rehab, Stroke, Vaccine];
        var layout = {
            width: 800,
            height: 700,
            title: 'Total Volume of Searches by year Versus Health Conditions',
            barmode: 'stack',
            type: "column",
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

        Plotly.newPlot('comparison-1', data, layout);
        var Diarrhea_c = {
            x: serched_years,
            y: diarrhea_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Diarrhea'

        };

        var Diabetes_c = {
            x: serched_years,
            y: diabetes_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Diabetes'

        };

        var data = [Diarrhea_c, Diabetes_c];

        var layout = {
            title: 'Diarrhea vs. Diabetes',
            width: 410,
            height: 450,

        };

        Plotly.newPlot('scatter1', data, layout);

        var Depression_c = {
            x: serched_years,
            y: depression_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Depression'

        };

        var Diabetes_c = {
            x: serched_years,
            y: diabetes_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Diabetes'

        };

        var data = [Depression_c, Diabetes_c];

        var layout = {
            title: 'Depression vs. Diabetes',
            width: 410,
            height: 450,

        };

        Plotly.newPlot('scatter2', data, layout);
        var Vaccine_c = {
            x: serched_years,
            y: vaccine_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Vaccine'

        };

        var Diabetes_c = {
            x: serched_years,
            y: diabetes_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Diabetes'

        };

        var data = [Vaccine_c, Diabetes_c];

        var layout = {
            title: 'Vaccine vs. Diabetes',
            width: 410,
            height: 450,

        };

        Plotly.newPlot('scatter3', data, layout);

        var Vaccine_c = {
            x: serched_years,
            y: vaccine_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Vaccine'

        };

        var Depression_c = {
            x: serched_years,
            y: depression_search,
            mode: 'markers',
            type: 'scatter',
            marker: { size: 12 },
            name: 'Depression'

        };

        var data = [Vaccine_c, Depression_c];

        var layout = {
            title: 'Vaccine vs. Depression',
            width: 410,
            height: 450,

        };

        Plotly.newPlot('scatter4', data, layout);


        var data = [{
            type: "choroplethmapbox",
            name: "Searches",
            geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json",
            locations: searched_state,
            z: sum_total_search,

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
            width: 400,
            height: 630,
            margin: { t: 0, b: 0 },

        }
        var config = { mapboxAccessToken: "pk.eyJ1IjoiZWdhZ2EiLCJhIjoiY2tmOG51MXY4MGR3NjJ5cnE4N3B2NTl0cCJ9.vVCAwSF-oh9ymZ8-pM-nBQ" };

        Plotly.newPlot('IntermapDiv', data, layout, config);


        var data = [{
            type: "indicator",
            mode: "gauge+number+delta",
            value: 420,
            title: { text: "Speed", font: { size: 24 } },
            delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
            gauge: {
                axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
                bar: { color: "darkblue" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                    { range: [0, 250], color: "cyan" },
                    { range: [250, 400], color: "royalblue" }
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: 490
                }
            }
        }];

        var layout = {
            width: 300,
            height: 400,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            paper_bgcolor: "lavender",
            font: { color: "darkblue", family: "Arial" }
        };

        Plotly.newPlot('mygageDiv', data, layout);



    };
    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        citySelector = innerContainer.querySelector('.citydata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofCities, citySelector);

    function updateCity() {
        setBarPlot(citySelector.value);
    }

    citySelector.addEventListener('change', updateCity, false);


});