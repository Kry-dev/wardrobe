var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function () {
    $(".menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('#overlay').fadeToggle( "slow", "swing" );
    });

    $('#overlay').click(function() {
        $('#overlay').fadeOut('slow');
        $('#wrapper').toggleClass('toggled');
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
    })

});