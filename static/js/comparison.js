Plotly.d3.json('/allsearchrecord', function(rows) {
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
        vaccine = unpack(data, 'vaccine'),
        city = unpack(data, 'city'),

        listofCities = [],
        cancer_search = [],
        cardiovascular_search = [],
        depression_search = [],
        diabetes_search = [],
        diarrhea_search = [],
        obesity_search = [],
        rehab_search = [],
        stroke_search = [],
        vaccine_search = [],
        serched_years = [];


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
            }
        }
    };
    // Default city Data
    setBarPlot('Abilene-Sweetwater');

    function setBarPlot(chosenCity) {
        getCityData(chosenCity)
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
            width: 1000,
            height: 600,
            title: 'Total Volume of Searches by year Versus Health Conditions',
            barmode: 'stack',
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

        Plotly.plot('comparison-1', data, layout);

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