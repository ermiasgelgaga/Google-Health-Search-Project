(function () {

    // ----------
    window.App = _.extend({

        // Ensure these match in app.less
        greenColor: '#7BC752',
        blueColor: '#64BBE4',

        trendColors: ['#131F0C', '#223419', '#324A25', '#436132', '#557940', '#69934E', '#7DAC5C', '#91C76A', '#A7E279', '#BDFE88'],
        chsiColors: ['#0A1E27', '#11333D', '#144856', '#135F6E', '#0A7887', '#0091A0', '#00ACB8', '#00C7D0', '#00E4E8', '#00FFFF'],

        hoverTransTime: 100,

        // ----------
        init: function () {
            var self = this;
            // console.time('init');

            if (!window.console) {
                window.console = {
                    log: function () { },
                    warn: function () { },
                    error: function () { },
                    assert: function () { }
                };
            }

            // detect by width or by very basic userAgent
            this.isMobile = $(window).width() < 769 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            this.urlParams = {};
            _.each(location.search.replace(/^\?/, '').split('&'), function (v, i) {
                var parts = v.split('=');
                self.urlParams[parts[0]] = parts[1];
            });

            this.isTouch = 'ontouchstart' in document.documentElement;
            // this.isTouch = true;
            if (!this.isTouch) {
                $('html').addClass('no_touch');
            }

            this.spinner = new App.Spinner({
                $el: $('.overlay-spinner')
            });
            this.spinner.show();

            this.analytics = new App.Analytics();
            this.data = new App.Data();
            this.filters = new App.Filters();
            this.filterView = new App.FilterView();
            this.mapSection = new App.MapSection();

            this.tooltip = new App.Tooltip();

            this.trendsMapYearly = new App.Map({
                $el: $('.trends-map-yearly-svg'),
                type: 'trends-yearly'
            });

            this.trendsSliderYearly = new App.TimeSlider({
                $el: $('.trends-slider-yearly-svg'),
                colors: self.trendColors
            });

            this.scatterplot = new App.Scatterplot({
                $container: $('.scatterplot-container'),
                $el: $('#scatterplot'),
                $selectWrapper: $('#select-dma-wrapper')
            });

            this.mapSmallMultiples = new App.MapSmallMultiples({
                $elTrends: $('.small-maps.trends'),
                $elHealth: $('.small-maps.health')
            });

            /**
             * Sticky controls
             */
            function createStickyControls() {
                var $app = $('#app'),
                    $controls = $('#global-controls'),
                    controlsTop = $app.offset().top,
                    $win = $(window);

                if (self.isMobile) {
                    $controls.addClass('fixed');
                } else {
                    $('#global-controls-wrapper').height($controls.height()); // set container to same height

                    $win.off('scroll'); // remove any existing scroll handlers, for resize

                    $win.on('scroll', function () {
                        var pinned = $win.scrollTop() >= controlsTop;
                        $controls.toggleClass('fixed', pinned);
                    });
                }
            }

            createStickyControls();

            /**
             * Scroll to anchor links
             */
            $('a[href^="#"]').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    self.scrollTo(target, 400);
                }
            });

            /**
             * Resize
             */
            $(window).on('resize', function () {
                self.mapSection.scaleAll();
                self.trendsMapYearly.scaleMap();
                self.trendsSliderYearly.render(App.data.filterTrendsYearlyForTimeSlider(), 'trendYearly');
                self.scatterplot.render();
                self.mapSmallMultiples.scaleAll();
                createStickyControls();
            });

            /**
             * Scroll to top on reload
             */
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            };

            /**
             * Load
             */
            this.load();
        },

        // ----------
        load: function () {
            var self = this;

            var promises = [
                this.mapSection.load(),
                this.trendsMapYearly.load(),
                this.trendsSliderYearly.load(),
                this.data.load()
            ];

            Promise.all(promises).then(function (results) {
                // self.checkData();
                self.mapSection.update({
                    trend: true,
                    combined: true
                });

                self.trendsMapYearly.colorTrendsYearly();

                self.trendsSliderYearly.render(App.data.filterTrendsYearlyForTimeSlider(), 'trendYearly');

                self.scatterplot.render();

                self.filters.on('change:trend', function () {
                    self.mapSection.update({ trend: true });
                    self.trendsMapYearly.colorTrendsYearly();
                    self.trendsSliderYearly.render(App.data.filterTrendsYearlyForTimeSlider(), 'trendYearly');
                });

                self.filters.on('change:trendYearly', function () {
                    self.trendsMapYearly.colorTrendsYearly();
                    self.trendsSliderYearly.render(App.data.filterTrendsYearlyForTimeSlider(), 'trendYearly');
                });

                self.filters.on('change:combined', function () {
                    self.mapSection.update({ combined: true });
                    self.scatterplot.render();
                });

                // only load small mapSmallMultiples on desktop
                if (self.isMobile) {
                    $('.small-maps-section').remove();
                } else {
                    self.mapSmallMultiples.load();
                }

                self.scatterplot.init();

                self.spinner.hide();
            }, function () {
                console.error('Failed startup');
            });
        },

        // ----------
        checkData: function () {
            var messages = [];
            // var dataCounties = this.data.countyIds();
            // var mapCounties = this.mapSection.trendsMap.countyIds();

            // _.each(dataCounties, function(v, i) {
            //     if (!_.contains(mapCounties, v)) {
            //         console.warn('data county missing from map: ' + v);
            //     }
            // });
            //
            // _.each(mapCounties, function(v, i) {
            //     if (!_.contains(dataCounties, v)) {
            //         console.warn('map county missing from data: ' + v);
            //     }
            // });

            if (messages.length) {
                console.warn(messages.join('\n'));
            }
        },

        // ----------
        colorScale: function (min, max, colors) {
            var d = (max - min) / colors.length;
            var domain = [];
            var i;
            for (i = 1; i < colors.length; i++) {
                domain.push(min + (i * d));
            }

            var colorScale = d3.scale.threshold()
                .domain(domain)
                .range(colors);

            return colorScale;
        },

        // ----------
        chromaScale: function (min, max, colors) {
            var first = _.first(colors);
            var last = _.last(colors);

            var chromaScale = chroma.scale([first, last])
                .domain([min, max], colors.length, 'log')
                .correctLightness();

            return chromaScale;
        },

        // ----------
        template: function (name, config) {
            var rawTemplate = $('#' + name + '-template').text();
            var template = _.template(rawTemplate);
            var html = template(config);
            return $(html);
        },

        // ----------
        scrollTo: function (target, time) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, time);
        }

    });

    // ----------
    $(document).ready(function () {
        App.init();
    });

})();