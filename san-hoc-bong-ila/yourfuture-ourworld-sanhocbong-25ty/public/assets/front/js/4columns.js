(function($, window, document, undefined) {
    'use strict';

    $('#business-container').cubeportfolio({
        filters: '#js-filters-mosaic',
        loadMore: '#js-loadMore-mosaic',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        sortToPreventGaps: true,
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
    });

    $('#creativeHome').cubeportfolio({
        filters: '#js-filters-mosaic',
        loadMore: '#js-loadMore-mosaic',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        sortToPreventGaps: true,
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
    });


    // init cubeportfolio
    $('#eventsHome').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: true,
        scrollByPage: true,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1680,
            cols: 5
        }, {
            width: 1350,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 45,
        caption: '',
        displayType: 'fadeIn',
        displayTypeSpeed: 400,
        singlePageDelegate: null,
    });

    // init cubeportfolio
    $('#personalHome').cubeportfolio({
        filters: '#js-filters-mosaic',
        loadMore: '#js-loadMore-mosaic',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        sortToPreventGaps: true,
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
    });


    // init cubeportfolio
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        loadMore: '#js-loadMore-mosaic',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        sortToPreventGaps: true,
        mediaQueries: [{
            width: 1500,
            cols: 2
        }, {
            width: 1100,
            cols: 2
        }, {
            width: 800,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 20,
        gapVertical: 20,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
    });

    $('#js-grid-3-col').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode:'grid',
        gridAdjustment: 'responsive',
        caption: 'zoom',
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }]
    });
    $('#js-mason-2-col').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode:'grid',
        gridAdjustment: 'responsive',
        caption: 'zoom',
        mediaQueries: [{
            width: 1500,
            cols: 2
        }, {
            width: 1100,
            cols: 2
        }, {
            width: 800,
            cols: 2
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }]
    });

$('#js-mason-2-col-G').cubeportfolio({
    filters: '#js-filters-mosaic',
    layoutMode:'mosaic',
    gridAdjustment: 'responsive',
    caption: 'zoom',
    gapHorizontal: 0,
    gapVertical: 0,
    mediaQueries: [{
        width: 1500,
        cols: 2
    }, {
        width: 1100,
        cols: 2
    }, {
        width: 800,
        cols: 2
    }, {
        width: 480,
        cols: 1
    }, {
        width: 320,
        cols: 1
    }]
});
$('#js-mason-3-col-G').cubeportfolio({
    filters: '#js-filters-mosaic',
    layoutMode:'mosaic',
    gridAdjustment: 'responsive',
    caption: 'zoom',
    gapHorizontal: 0,
    gapVertical: 0,
    mediaQueries: [{
        width: 1500,
        cols: 3
    }, {
        width: 1100,
        cols: 3
    }, {
        width: 800,
        cols: 2
    }, {
        width: 480,
        cols: 1
    }, {
        width: 320,
        cols: 1
    }]
});
    $('#js-grid-3-col-S2').cubeportfolio({
        filters: '#js-filters-agency',
        loadMore: '#js-loadMore-agency',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideLeft',
        gapHorizontal: 35,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        singlePageDelegate: null
    });

    // init cubeportfolio
    var singlePage = $('#js-singlePage-container').children('div');
    $('#js-grid-slider-projects').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: false,
        rewindNav: false,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 25,
        caption: 'overlayBottomReveal',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageAnimation: 'fade',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var indexElement = $(element).parents('.cbp-item').index(),
                item = singlePage.eq(indexElement);

            this.updateSinglePage(item.html());
        },
    });
    // init cubeportfolio
    $('#portfolio_details2').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: true,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: false,
        rewindNav: true,
        scrollByPage: true,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: '',
        displayType: 'fadeIn',
        displayTypeSpeed: 400,
        singlePageDelegate: null,

        plugins: {
            slider: {
                pagination: '#js-pagination-slider',
                paginationClass: 'cbp-pagination-active',
            }
        }
    });
    // init cubeportfolio
    $('#js-grid-clients').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: true,
        autoTimeout: 3000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: true,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 1
        }, {
            width: 1100,
            cols: 6
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 5,
        caption: 'opacity',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
        singlePageDelegate: null,
    });
    // init cubeportfolio
    $('#js-grid-client2').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: true,
        autoTimeout: 3000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: true,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 1
        }, {
            width: 1100,
            cols: 1
        }, {
            width: 800,
            cols: 1
        }, {
            width: 480,
            cols: 1
        }, {
            width: 320,
            cols: 1
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: 'opacity',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
        singlePageDelegate: null,
    });
})(jQuery, window, document);
