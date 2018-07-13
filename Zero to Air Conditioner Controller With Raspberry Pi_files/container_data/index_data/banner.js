'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var fontA = new FontFaceObserver('Ciutadella-Regular'),
    fontB = new FontFaceObserver('Ciutadella-Medium'),
    fontC = new FontFaceObserver('CiutadellaRounded-Rg');

var size = '300x600',
    bg1 = void 0,
    bg2 = void 0,
    tl = void 0,
    imagesLoaded = false,
    backup = false,
    priceCopy = void 0,
    jsonUrl = void 0,
    clickTag = void 0,
    backupClicktag = void 0,
    airline = false,
    partnership = true,
    mb = true,
    soa = false,
    com = false,
    dark = true,
    light = false,
    copyCenterTop = true,
    copyCenterCenter = false,
    rolodex = false,
    rolodexIcons = true,
    replay = false;

function politeInit() {

    Enabler.setProfileId(10043631);
    var devDynamicContent = {};

    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1 = [{}];
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]._id = 0;
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].id = 1;
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].reporting = "QANTWW0163_default";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].is_default = true;
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].active = true;
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].show_price = true;
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].show_rotator = true;
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].json = "https://www.qantas.com/api/flightOffers/v2/offers?departureAirport=CGK&arrivalAirport=BNE&travelClass=ECONOMY&includeDisclaimers=false&user=QANTWW0137";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].dynamic_price = false;
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].exit = "http:\/\/www.qantas.com\/id\/en\/promotions\/wheres-mike.html";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].cta = "See More";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].rotator_copy = "Entertainment, Meals, Baggage, Points";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].short_terms = "";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].long_terms = "";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_300x250_frame1 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/1\/300x250.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_300x250_frame2 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/2\/300x250.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame1_text_300x250 = "<span style=\"font-size: 24px;\">Make every<br>moment magical<\/span>";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame2_text_300x250 = '<span style="font-size: 24px;">and enjoy Brisbane\u2019s outdoor lifestyle</span>';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame3_text_300x250 = '<span style="font-size: 25px;">Come explore Queensland with Australia\u2019s favourite airline</span>';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].end_text_300x250 = "The best way to fly to Queensland";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_300x600_frame1 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/1\/300x600.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_300x600_frame2 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/2\/300x600.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame1_text_300x600 = "Make every<br>moment magical";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame2_text_300x600 = 'and enjoy Brisbane\u2019s outdoor lifestyle';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame3_text_300x600 = 'Come explore Queensland with Australia\u2019s favourite airline';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].end_text_300x600 = "The best way to fly to Queensland";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_160x600_frame1 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/1\/160x600.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_160x600_frame2 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/2\/160x600.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame1_text_160x600 = "<span style=\"font-size: 23px;\">Make every<br>moment magical<\/span>";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame2_text_160x600 = '<span style="font-size: 23px;">and enjoy Brisbane\u2019s outdoor lifestyle</span>';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame3_text_160x600 = '<span style="font-size: 23px;">Come explore Queensland with Australia\u2019s favourite airline</span>';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].end_text_160x600 = "The best way to fly to Queensland";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_728x90_frame1 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/1\/728x90.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].bkgd_728x90_frame2 = "https:\/\/s3-ap-southeast-2.amazonaws.com\/qantww2017\/qantww0153\/brisbane\/2\/728x90.jpg";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame1_text_728x90 = "Make every moment magical";
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame2_text_728x90 = '<span style="font-size: 23px;">and enjoy Brisbane\u2019s outdoor lifestyle</span>';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].frame3_text_728x90 = '<span style="font-size: 23px;">Come explore Queensland with<br>Australia\u2019s favourite airline</span>';
    devDynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].end_text_728x90 = "The best way to fly to Queensland";
    Enabler.setDevDynamicContent(devDynamicContent);

    console.log(size + ' data:', dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]);

    clickTag = dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].exit;
    priceCopy = dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].show_price;
    backupClicktag = dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].backup_clicktag;

    $('#f1 p').html(dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]['frame1_text_' + size]);
    $('#f2 p').html(dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]['frame2_text_' + size]);
    $('#f3 p').html(dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]['frame3_text_' + size]);
    $('.copy-end').html(dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]['end_text_' + size]);

    $('.tcs span').html(dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].short_terms);
    $('.tcs-txt').html(dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].long_terms);

    bg1 = dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]['bkgd_' + size + '_frame1'];
    bg2 = dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0]['bkgd_' + size + '_frame2'];

    $('.bg-1').attr('src', bg1);
    $('.bg-2').attr('src', bg2);

    Promise.all([fontA.load(), fontB.load(), fontC.load()]).then(function () {
        preloadAssets();
    });
}

function preloadAssets() {

    var i = [bg1, bg2, '1-entertainment.svg', '2-meals.svg', '3-baggage.svg', '4-points.svg', 'qp.svg'];

    preloadimages(i).done(function (images) {
        imagesLoaded = true;

        if (dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].show_price) {
            loadFeed();
        } else {
            backupAnimation();
        }
    });
}

function initBanner() {

    if (!Enabler.isVisible()) {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, initAnimation);
    } else {
        initAnimation();
    }
}

function initAnimation() {
    initCSS();
    start();
    settings();
    adjust();
}

function backupAnimation() {
    backup = true;
    // clickTag = backupClicktag;
    priceCopy = false;

    if (imagesLoaded) {
        initBanner();
    } else {
        var si = setInterval(function () {
            if (imagesLoaded) {
                initBanner();
                clearInterval(si);
            }
        }, 250);
    }
}

function loadFeed() {

    $.ajax({
        type: 'GET',
        url: dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].json,
        async: false,
        contentType: 'application/json',
        beforeSend: function beforeSend(xhr) {
            xhr.setRequestHeader('Accept-Language', 'en-AU');
        },
        dataType: 'json',
        success: function success(json) {

            if (json.error) {
                backupAnimation();
                return;
            }

            var deal = json.offers['0'];

            if (json.offers.length === 0) {
                console.log('no deals');
                backupAnimation();
                return;
            }

            var dest = deal.route.to.name,
                fromAirport = deal.route.from.name;

            function removeBrackets(string) {
                return string.replace(/\(|\)/g, '');
            }

            $('.from').html('Fly from ' + removeBrackets(fromAirport) + ' to');
            $('.dest').html(dest);

            var priceCopy = deal.price.amountFormatted;

            $('.price-inner').html(deal.price.symbol + priceCopy + '<span class=\'asterisk\'>*</span>');

            if (priceCopy.length > 5) {
                $('.pricing .price').css('fontSize', '40px');
            }

            if (dest.length > 25) {
                $('#destination').css('fontSize', '16px');
            }

            if (dest.indexOf('(') > -1) {

                if (dest.length > 22) {
                    $('.dest').css('fontSize', '23px');
                    $('.dest').css('line-height', '33px');
                } else if (dest.indexOf('(') > -1 && dest.length > 22) {
                    $('.dest').css('fontSize', '22px');
                    $('.dest').css('line-height', '24px');
                } else {
                    $('.dest').css('fontSize', '34px');
                }
            }

            var rightcopy = '';

            if (deal.travelClass.indexOf('ECO') > -1) rightcopy = 'Economy ';

            if (deal.travelClass.indexOf('BUS') > -1) rightcopy = 'Business ';

            if (deal.travelClass.indexOf('PRE') > -1) rightcopy = 'Premium Economy ';

            if (deal.travelClass.indexOf('FIR') > -1) rightcopy = 'First class ';

            rightcopy += deal.tripType_i18n;

            $('.price-r').html(rightcopy);

            if (imagesLoaded) {
                initBanner();
            } else {
                var si = setInterval(function () {
                    if (imagesLoaded) {
                        initBanner();
                        clearInterval(si);
                    }
                }, 250);
            }
        },
        error: function error(e) {
            console.log('error');
            console.log(e);
            backupAnimation();
        }

    });
}

function initCSS() {

    $('.banner').hover(function () {
        return $('#cta').addClass('hover');
    }, function () {
        return $('#cta').removeClass('hover');
    });

    if ($('.tcs-txt').text().length > 0) {
        $('.tcs').click(function (e) {
            e.stopPropagation();
            $('.tco').fadeIn();
            $('.tcs').fadeOut();
        });
        $('.tco-btn').click(function (e) {
            e.stopPropagation();
            $('.tco').fadeOut();
            $('.tcs').fadeIn();
        });
    }

    $('.banner').click(function () {
        return Enabler.exitOverride('clickthrough', clickTag);
    });
}

function adjust() {}

var percentFill = 80,
    duration = 1.5;

function start() {

    $('.container').show();
    $('.pre').hide();

    TweenMax.set($('#blue-o-l'), { alpha: 1, rotation: 50, scaleX: .4, scaleY: .4, x: 60, y: 80, overwrite: 'none', force3D: false });
    TweenMax.set($('#blue-o-s'), { alpha: 1, rotation: -20, scaleX: .2, scaleY: .2, x: 140, y: 83, overwrite: 'none', force3D: false });
    TweenMax.set($('#mask'), { rotation: 30, scaleX: .3, scaleY: .3, x: -2235, y: -1270, overwrite: 'none', force3D: false });
    TweenMax.set($('#shapes'), { rotation: 160, transformOrigin: '50% 50%', overwrite: 'none', force3D: false });

    TweenMax.set($('#red-gradient'), { rotation: 0, x: -20, y: 50, scale: 1 });
    TweenMax.set($('#white-shape-s'), { x: -5, y: 24 });
    TweenMax.set($('.bg-2'), { alpha: 0 });

    var bannerWidth = $('.container').width(),
        bannerHeight = $('.container').height();

    tl = new TimelineLite();
    timeline();

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (copyCenterTop) {
        var _copyCenterTop = function _copyCenterTop(containerHeight, elementHeight, element) {
            var offset = (containerHeight - elementHeight) / 2;
            $(element).css('top', offset);
        };

        var frameHeight = $('.copy').outerHeight();

        _copyCenterTop(300, frameHeight, '#f1');
        _copyCenterTop(300, frameHeight, '#f2');
        _copyCenterTop(300, frameHeight, '#f3');
        _copyCenterTop(300, frameHeight, '#f4');
    }

    if (copyCenterCenter) {
        var _copyCenterCenter = function _copyCenterCenter(containerHeight, element) {
            var elementHeight = $(element).outerHeight();
            var offset = (containerHeight - elementHeight) / 2;
            $(element).css('top', offset);
        };

        _copyCenterCenter(300, '#f1');
        _copyCenterCenter(300, '#f2');
        _copyCenterCenter(300, '#f3');
        _copyCenterCenter(300, '#f4');
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.replay').click(function (e) {
        e.stopPropagation();
        replayBanner();
    });

    if (airline) {

        if (light) {
            tl.to('#white-grad-small-stop-01', 2.5, { stopOpacity: .9, stopColor: '#FFF', ease: Power1.easeInOut }, '1.6');
            tl.to('#white-grad-small-stop-02', 2, { stopOpacity: .8, stopColor: '#FFF', ease: Power1.easeInOut }, '1.3');
            tl.to('#white-grad-small-stop-03', 1.5, { stopOpacity: .5, stopColor: '#FFF', ease: Power1.easeInOut }, '1');
        }
        if (dark) {
            tl.to('#white-grad-small-stop-01', 2.5, { stopOpacity: .2, stopColor: '#000', ease: Power1.easeInOut }, '1.6');
            tl.to('#white-grad-small-stop-02', 2, { stopOpacity: .5, stopColor: '#000', ease: Power1.easeInOut }, '1.3');
            tl.to('#white-grad-small-stop-03', 1.5, { stopOpacity: .9, stopColor: '#000', ease: Power1.easeInOut }, '1');
        }
    }

    if (partnership) {

        tl.from('#white-shape-s', 2.5, { autoAlpha: .4, rotation: 90, x: 55, scaleY: 1.2, ease: Power1.easeOut }, '.2');

        if (light) {
            tl.to('#white-grad-small-stop-01', 2.5, { stopOpacity: .9, stopColor: '#FFF', ease: Power1.easeInOut }, '1.6');
            tl.to('#white-grad-small-stop-02', 2, { stopOpacity: .8, stopColor: '#FFF', ease: Power1.easeInOut }, '1.3');
            tl.to('#white-grad-small-stop-03', 1.5, { stopOpacity: .5, stopColor: '#FFF', ease: Power1.easeInOut }, '1');
        }
        if (dark) {
            tl.to('#white-grad-small-stop-01', 2.5, { stopOpacity: .2, stopColor: '#000', ease: Power1.easeInOut }, '1.6');
            tl.to('#white-grad-small-stop-02', 2, { stopOpacity: .5, stopColor: '#000', ease: Power1.easeInOut }, '1.3');
            tl.to('#white-grad-small-stop-03', 1.5, { stopOpacity: .9, stopColor: '#000', ease: Power1.easeInOut }, '1');
        }
    }

    tl.from('#f1', 2, { alpha: 0, y: 10, ease: Power1.easeInOut }, '1');
    tl.from('.bg-1', 1, { alpha: 0, ease: Power1.easeInOut }, '0');
    tl.from('#logos', 1.7, { alpha: 0, y: 10, ease: Power1.easeInOut }, '1');
    tl.to('#red-gradient', 3, { rotation: -90, autoAlpha: 0, x: -140, y: -500, scale: 1, ease: Power2.easeInOut }, '0');

    tl.to('#shapes', 2, { alpha: 1, rotation: -20, transformOrigin: '50% 50%' }, '0');
    tl.to('#mask', 1.2, { rotation: 0, scaleX: 1.1, scaleY: 1.1, x: -2140, y: -1315, ease: Sine.easeInOut }, '0');
    tl.to('#blue-o-s', 1, { autoAlpha: 0, rotation: 90, scaleX: .2, scaleY: .2, x: 200, y: 15, ease: Sine.easeInOut }, '.3');
    tl.to('#blue-o-l', 1, { rotation: -90, scaleX: 1.2, scaleY: 1.2, x: 5, y: 130, ease: Sine.easeInOut }, '.3');
    tl.to('#mask', .6, { rotation: 0, scaleX: 3.8, scaleY: 3.8, x: -1760, y: -1355, ease: Power2.easeIn }, '1.1');
    tl.to('#blue-o-l', .5, { rotation: -180, autoAlpha: 0, scaleX: 1.3, scaleY: 1.3, x: -170, y: 415, ease: Power2.easeIn }, '1.2');

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tl.add('fr2', 4);

    tl.to('#f1', .8, { alpha: 0, y: 0, ease: Power1.easeInOut }, 'fr2+=.5');
    tl.from('#f2', 2, { alpha: 0, y: 10, ease: Power1.easeInOut }, 'fr2+=1');

    tl.to('.bg-2', 2, { alpha: 1, ease: Power1.easeInOut }, 'fr2+=.5');

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tl.add('fr2Red', 8);

    tl.to('#f2', .8, { alpha: 0, y: 0, ease: Power1.easeInOut }, 'fr2Red+=.5');
    tl.from('#f3', 2, { alpha: 0, y: 10, ease: Power1.easeInOut }, 'fr2Red+=1');

    tl.to('.bg', 2, { alpha: 0, ease: Power1.easeInOut }, 'fr2Red');
    tl.to('#red-gradient', 4, { autoAlpha: 1, rotation: -30, x: -130, y: 20, scale: 1, ease: Power1.easeInOut }, 'fr2Red-=.5');

    if (airline) {
        tl.to('#qantas, #com, #soa', 2, { fill: '#fff' }, 'fr2Red+=.5');
        tl.to('#partnership', 2, { alpha: 0, ease: Power1.easeInOut }, 'fr2Red');
        tl.to('#airline', 2, { alpha: 1, ease: Power1.easeInOut }, 'fr2Red');
        tl.to('#white-grad-small-stop-01', 1.5, { stopOpacity: 0, ease: Power1.easeInOut }, 'fr2Red+=.3');
        tl.to('#white-grad-small-stop-02', 1.5, { stopOpacity: 0, ease: Power1.easeInOut }, 'fr2Red+=.3');
        tl.to('#white-grad-small-stop-03', 1.5, { stopOpacity: 0, ease: Power1.easeInOut }, 'fr2Red+=.3');
    }

    if (partnership) {
        tl.to('#qantas, #com, #soa', 2, { fill: '#323232' }, 'fr2Red+=.5');
        tl.to('#white-grad-small-stop-01', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr2Red+=.3');
        tl.to('#white-grad-small-stop-02', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr2Red+=.3');
        tl.to('#white-grad-small-stop-03', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr2Red+=.3');
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    tl.add('fr3', 12);

    if (dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].show_rotator) {
        tl.add('rd', 'fr3+=1.5');
        tl.from('.r1', .55, { autoAlpha: 0, ease: Sine.easeInOut, force3D: true }, 'rd');
        tl.to('.r1', .55, { rotationX: 90, ease: Sine.easeInOut, force3D: true }, 'rd+=.6');
        tl.from('.r2', .55, { rotationX: -90, alpha: 0, ease: Sine.easeInOut, force3D: true }, 'rd+=.6');
        tl.to('.r2', .55, { rotationX: 90, ease: Sine.easeInOut, force3D: true }, 'rd+=1.2');
        tl.from('.r3', .55, { rotationX: -90, alpha: 0, ease: Sine.easeInOut, force3D: true }, 'rd+=1.2');
        tl.to('.r3', .55, { rotationX: 90, ease: Sine.easeInOut, force3D: true }, 'rd+=1.8');
        tl.from('.r4', .55, { rotationX: -90, alpha: 0, ease: Sine.easeInOut, force3D: true }, 'rd+=1.8');
        tl.to('.r4', .55, { rotationX: 90, ease: Sine.easeInOut, force3D: true }, 'rd+=2.4');
        tl.from('.r5', .55, { rotationX: -90, alpha: 0, ease: Sine.easeInOut, force3D: true }, 'rd+=2.4');
        tl.to('.r5', 1, { autoAlpha: 0, y: -10, ease: Power1.easeInOut }, 'rd+=4');

        tl.to('#f3', .8, { alpha: 0, ease: Power1.easeInOut }, 'fr3+=1');

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        tl.add('fr4', 17);

        if (priceCopy) {
            if (airline) {
                $('#f4').css('top', '135px');
            }
            if (partnership) {
                $('#f4').css('top', '105px');
            }
            $('.copy-end').hide();
            $('#f4').append('<button id=\'cta\'>' + dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].cta + '</button>');

            tl.to('#f3', .8, { alpha: 0, y: -10, ease: Power1.easeInOut }, 'fr4+=.5');
            tl.from('#f4', 2, { alpha: 0, y: 10, ease: Power1.easeInOut }, 'fr4+=1');

            tl.from('.price-l', 2, { alpha: 0, ease: Power2.easeInOut }, 'fr4+=.9');
            tl.from('.price-inner', 2, { y: 50, ease: Power1.easeInOut }, 'fr4+=.9');
            tl.from('.price-r', 2, { alpha: 0, y: 10, ease: Power2.easeInOut }, 'fr4+=1.6');
        } else {
            $('.price-end').hide();
            $('.copy-end').append('<button id=\'cta\'>' + dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].cta + '</button>');

            tl.to('#f3', .8, { alpha: 0, y: -10, ease: Power1.easeInOut }, 'fr4+=.5');
            tl.from('.copy-end', 2, { alpha: 0, y: 10, ease: Power1.easeInOut }, 'fr4+=1');
        }

        if (airline) {
            if ($('.tcs span').text().length > 0) {
                tl.to('#logos', 2, { y: -45, ease: Power1.easeInOut }, 'fr4+=1');
            } else {
                tl.to('#logos', 2, { y: -10, ease: Power1.easeInOut }, 'fr4+=1');
            }
        }

        if (partnership) {
            if ($('.tcs span').text().length > 0) {
                tl.to('#logos', 2, { x: -38, y: -5, scale: .8, ease: Power1.easeInOut }, 'fr4+=1');
                tl.to('#white-shape-s', 2, { autoAlpha: 1, x: -300, y: 10, scaleX: 2.2, ease: Power1.easeIn }, 'fr4');
                tl.fromTo('#white-shape-l', 3, { x: 40, y: 75, rotation: 20 }, { x: 40, y: 60, rotation: 0, ease: Power2.easeInOut }, 'fr4-=.5');
            } else {
                tl.to('#logos', 2, { x: -38, y: 10, scale: .8, ease: Power1.easeInOut }, 'fr4+=1');
                tl.to('#white-shape-s', 2, { autoAlpha: 1, x: -300, y: 20, scaleX: 2.2, ease: Power1.easeIn }, 'fr4');
                tl.fromTo('#white-shape-l', 3, { x: 40, y: 75, rotation: 20 }, { x: 40, y: 75, rotation: 0, ease: Power2.easeInOut }, 'fr4-=.5');
            }
        }

        tl.from('.replay', 2, { alpha: 0, ease: Power1.easeOut }, 'fr4+=2');
        tl.from('.qp', 1.5, { alpha: 0, ease: Power1.easeInOut }, 'fr4+=1.5');
        tl.from('#line', 1.5, { alpha: 0, scaleY: 0, transformOrigin: '50% 100%', ease: Power1.easeInOut }, 'fr4+=1');
        tl.from('#cta', 2, { alpha: 0, ease: Power2.easeInOut }, 'fr4+=1.5');
        tl.fromTo('.tcs', 1.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut }, 'fr4+=2.5');

        tl.to('#red-gradient', 3, { y: -100, scale: 1, ease: Power1.easeInOut }, 'fr4');
        tl.to('#red-gradient', 3, { rotation: 60, x: -150, ease: Power1.easeInOut }, 'fr4+=1');

        tl.to('#white-grad-stop-01', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=.5');
        tl.to('#white-grad-stop-02', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=1');
        tl.to('#white-grad-stop-03', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=1.7');
        tl.to('#white-grad-small-stop-02', 1, { stopOpacity: 0, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=2');
    } else {
        $('.rolodex').hide();

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        tl.add('fr4', 12);

        if (priceCopy) {
            if (airline) {
                $('#f4').css('top', '135px');
            }
            if (partnership) {
                $('#f4').css('top', '105px');
            }
            $('.copy-end').hide();
            $('#f4').append('<button id=\'cta\'>' + dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].cta + '</button>');

            tl.to('#f3', .8, { alpha: 0, y: -10, ease: Power1.easeInOut }, 'fr4+=.5');
            tl.from('#f4', 2, { alpha: 0, y: 10, ease: Power1.easeInOut }, 'fr4+=1');

            tl.from('.price-l', 2, { alpha: 0, ease: Power2.easeInOut }, 'fr4+=.9');
            tl.from('.price-inner', 2, { y: 50, ease: Power1.easeInOut }, 'fr4+=.9');
            tl.from('.price-r', 2, { alpha: 0, y: 10, ease: Power2.easeInOut }, 'fr4+=1.6');
        } else {
            $('.price-end').hide();
            $('.copy-end').append('<button id=\'cta\'>' + dynamicContent.QANTWW0163_SEA_INDO_TEQ_Sheet1[0].cta + '</button>');

            tl.to('#f3', .8, { alpha: 0, y: -10, ease: Power1.easeInOut }, 'fr4+=.5');
            tl.from('.copy-end', 2, { alpha: 0, y: 10, ease: Power1.easeInOut }, 'fr4+=1');
        }

        if (airline) {
            if ($('.tcs span').text().length > 0) {
                tl.to('#logos', 2, { y: -45, ease: Power1.easeInOut }, 'fr4+=1');
            } else {
                tl.to('#logos', 2, { y: -10, ease: Power1.easeInOut }, 'fr4+=1');
            }
        }

        if (partnership) {
            if ($('.tcs span').text().length > 0) {
                tl.to('#logos', 2, { x: -38, y: -5, scale: .8, ease: Power1.easeInOut }, 'fr4+=1');
                tl.to('#white-shape-s', 2, { autoAlpha: 1, x: -300, y: 10, scaleX: 2.2, ease: Power1.easeIn }, 'fr4');
                tl.fromTo('#white-shape-l', 3, { x: 40, y: 75, rotation: 20 }, { x: 40, y: 60, rotation: 0, ease: Power2.easeInOut }, 'fr4-=.5');
            } else {
                tl.to('#logos', 2, { x: -38, y: 10, scale: .8, ease: Power1.easeInOut }, 'fr4+=1');
                tl.to('#white-shape-s', 2, { autoAlpha: 1, x: -300, y: 20, scaleX: 2.2, ease: Power1.easeIn }, 'fr4');
                tl.fromTo('#white-shape-l', 3, { x: 40, y: 75, rotation: 20 }, { x: 40, y: 75, rotation: 0, ease: Power2.easeInOut }, 'fr4-=.5');
            }
        }

        tl.from('.replay', 2, { alpha: 0, ease: Power1.easeOut }, 'fr4+=2');
        tl.from('.qp', 1.5, { alpha: 0, ease: Power1.easeInOut }, 'fr4+=1.5');
        tl.from('#line', 1.5, { alpha: 0, scaleY: 0, transformOrigin: '50% 100%', ease: Power1.easeInOut }, 'fr4+=1');
        tl.from('#cta', 2, { alpha: 0, ease: Power2.easeInOut }, 'fr4+=1.5');
        tl.fromTo('.tcs', 1.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut }, 'fr4+=2.5');

        tl.to('#red-gradient', 3, { y: -100, scale: 1, ease: Power1.easeInOut }, 'fr4');
        tl.to('#red-gradient', 3, { rotation: 60, x: -150, ease: Power1.easeInOut }, 'fr4+=1');

        tl.to('#white-grad-stop-01', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=.5');
        tl.to('#white-grad-stop-02', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=1');
        tl.to('#white-grad-stop-03', 1.5, { stopOpacity: 1, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=1.7');
        tl.to('#white-grad-small-stop-02', 1, { stopOpacity: 0, stopColor: '#FFFFFF', ease: Power1.easeInOut }, 'fr4+=2');
    }
}

function settings() {

    if (mb) {
        $('#com, #soa').hide();
    }
    if (soa) {
        $('#com').hide();
    }
    if (com) {
        $('#soa').hide();
    }
    if (!replay) {
        $('.replay').hide();
    }
    if (!rolodexIcons) {
        $('.face-inner img').hide();
    }

    if (airline) {
        $('#logoPartner, #white-shape-l, .qp, #line').hide();
        $('.tcs').css({ 'color': '#fff', 'textAlign': 'center' });
        $('#logos').css('left', '64px');
        if (mb) {
            $('#logoQantas').css({ 'width': '220px', 'left': '-5px', 'top': '-15px' });$('#o-w').css('top', '33px');
        }
        if (soa) {
            $('#logos').css('bottom', '105px');$('#logoQantas').css({ 'width': '220px', 'top': '-13px', 'left': '-5px' });$('#o-w').css('top', '45px');
        }
        if (com) {
            $('#logos').css('bottom', '95px');$('#logoQantas').css({ 'width': '190px', 'left': '-9px', 'top': '-17px' });$('#o-w').css('top', '30px');
        }
        if (dark) {
            $('#qantas, #soa, #com').css('fill', '#fff');
        }
    }

    if (partnership) {
        $('#airline, #o-w').hide();
        if (mb) {
            $('#line').css('top', '6px');$('.qp').css('top', '3px');
        }
        if (soa) {
            $('#logos').css('bottom', '87px');$('#line').css('top', '11px');$('.qp').css('top', '10px');
        }
        if (com) {
            $('#logoQantas').css('width', '200px');$('#logos').css({ 'left': '48px', 'bottom': '85px' });$('.qp').css('left', '223px');$('#line').css({ 'left': '211px', 'top': '3px' });
        }
        if (dark) {
            $('#qantas, #soa, #com').css('fill', '#fff');
        }
    }

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {} else {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

        if (isChrome) {
            $('button').css('padding', '7px 18px 7px');
        }
    }

    if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Tridexnt/) || navigator.userAgent.match(/rv:11/)) || typeof $.browser !== 'undefined' && $.browser.msie == 1 || navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('button').css('padding', '7px 18px 8px');
    }
}

function replayBanner() {
    tl.play(0);
    $('#video-el').get(0).play();
}

function timeline() {

    if (location.hostname === 'localhost') {

        var paused = false;

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 32 || event.which === 32) {
                if (paused) {
                    tl.play();
                    paused = false;
                } else {
                    tl.pause();
                    paused = true;
                }
            }
        });

        var seekMap = {
            '`': 0.001,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            0: 10,
            q: 11,
            w: 12,
            e: 13,
            r: 14,
            t: 15,
            y: 16,
            u: 17,
            i: 18,
            o: 19,
            p: 20,
            a: 21,
            s: 22,
            d: 23,
            f: 24,
            g: 25,
            h: 26,
            j: 27,
            k: 28,
            l: 29
        };

        document.addEventListener('keypress', function (event) {
            if (seekMap[event.key]) {
                tl.seek(seekMap[event.key]);
            }
        });
    }
}

function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0;
    var postaction = function postaction() {};
    arr = (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) != 'object' ? [arr] : arr;

    function imageloadpost() {
        loadedimages++;
        if (loadedimages == arr.length) {
            postaction(newimages);
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
        newimages[i].onload = function () {
            imageloadpost();
        };
        newimages[i].onerror = function () {
            imageloadpost();
        };
    }
    return {
        done: function done(f) {
            postaction = f || postaction;
        }
    };
}