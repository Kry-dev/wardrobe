var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function () {
    $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").removeClass("toggled");
        $('#overlay').fadeIn( "slow", "swing" );
    });

    $('#overlay').click(function() {
        $('#overlay').fadeOut('slow');
        $('#wrapper').addClass('toggled');
        $('#mobile-filter').removeClass('filter-toggled');
    });
    $('#mobileSearch').hide();
    $('#showMobileSearch').click(function () {
        $('#mobileSearch').show();
    });
    $('#mobile-search-filter').click(function (e) {
        e.preventDefault();
        $('#mobileSearch').hide();
        $('#mobile-filter').addClass("filter-toggled");
        $('#overlay').fadeIn( "slow", "swing" );
    });
    $('.dropdown-menu').on('click', function(event) {
        event.stopPropagation();
    });

    // $('.selectpicker').selectpicker({
    //     container: 'body';
    // });

    $('body').on('click', function(event) {
        var target = $(event.target);
        if (target.parents('.bootstrap-select').length) {
            event.stopPropagation();
            $('.bootstrap-select.open').removeClass('open');
        }
    });
    $(".dropdown-menu__wrap > .close").on('click' , function () {
        console.log('click');
        $(this).closest('.dropdown-menu').dropdown("toggle");
    });
    $(".clear-selected").hide();
    $(".btn-dark").click(function (e) {
        var currentForm = $(this).closest('.dropdown-menu__wrap');
        var currentRadio = currentForm .find("input[name='radio']:checked");
        var currentVal = currentRadio.val();
        var filterName = currentForm.closest('li').find('.dropdown-toggle > span');
        var filterNameVal = filterName.text();
        e.preventDefault();
        if(filterNameVal != currentVal){
            $(filterName).addClass('selected');
            //$(".clear-selected").show();
        }else {
            $(".clear-selected").hide();
        }
        $(filterName).html(currentVal);
    });

});