$(document).ready(function(){
    //tooltip script
    // $('[data-toggle="tooltip"]').tooltip();
    //carousel slide change interval
    $("#mycarousel").carousel( { interval: 2000 } );
    // $("#carousel-pause").click(function(){
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carousel-play").click(function(){
    //     $("#mycarousel").carousel('cycle');
    // });
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
            $("#carouselButton").removeClass("btn-danger");
            $("#carouselButton").addClass("btn-success");
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
            $("#carouselButton").removeClass("btn-success");
            $("#carouselButton").addClass("btn-danger");
        }
    });

    $("#reservationButton").click(function(){
        $("#reservationModal").modal();
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal();
    });


  });