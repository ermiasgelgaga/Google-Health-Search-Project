Plotly.d3.json('/searchbycity', function(rows) {
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var data = rows.data

    var allCityName = unpack(data, 'city'),
        searches = unpack(data, 'searches'),
        state = unpack(data, 'state'),
        listofCities = [],
        activesearches = [],
        activestate = [];

    for (var i = 0; i < allCityName.length; i++) {
        if (listofCities.indexOf(allCityName[i]) === -1) {
            listofCities.push(allCityName[i]);
        }
    }

    function getCountryData(chosenCity) {
        activesearches = [];
        activestate = [];
        for (var i = 0; i < allCityName.length; i++) {
            if (allCityName[i] === chosenCity) {
                activesearches.push(searches[i]);
                activestate.push(state[i]);
            }
        }
    };

    // Default Country Data
    setBubblePlot('Abilene-Sweetwater');

    function setBubblePlot(chosenCity) {
        getCountryData(chosenCity);

        var trace1 = {
            x: activesearches,
            y: activestate,
            mode: 'lines+markers',
            marker: {
                size: 12,
                opacity: 0.5
            }
        };

        var data = [trace1];

        var layout = {
            title: 'GDP per cap according to Country<br>' + chosenCity + ' GDP'
        };

        Plotly.newPlot('plotdiv', data, layout, { showSendToCloud: true });
    };

    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        citySelector = innerContainer.querySelector('.countrydata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofCountries, citySelector);

    function updateCountry() {
        setBubblePlot(citySelector.value);
    }

    citySelector.addEventListener('change', updateCountry, false);
});
