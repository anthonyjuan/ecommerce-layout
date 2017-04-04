
      $(document).ready(function(){


        $('#brands-sub').hide();
        $('#atasan-sub').hide();
        $('#bawahan-sub').hide();
        $('#sepatu-sub').hide();
        $('.cart').hide();
        $('.checkout').hide();

        //details
        $('.is-primary').click(() => {
          $('.modal').addClass('is-active');
        })

        //close details
        $('.delete').click(() => {
          $('.modal').removeClass('is-active');
        })

        //cart
        $('#cart').click(() => {
          $('.checkout').hide(300);
          $('.cart').toggle(300);
        })
        //checkout
        $('#checkout').click(() => {
          $('.cart').hide(300);
          $('.checkout').show(300);
        })

        //cancel
        $('.cancel').click(() => {
          $('.checkout').hide(300)
        })

        //continue shopping
        $('.cont').click(() => {
          $('.cart').hide(300)
        })





        //brands
        $('#brands').mouseover(() => {
          $('#brands-sub').show();
          $('#atasan-sub').hide();
          $('#bawahan-sub').hide();
          $('#sepatu-sub').hide();
        })
        $('#brands-sub').hover(() => {
          $('#brands-sub').show();
        },() => {
          $('#brands-sub').hide();
        })

        //atasan
        $('#atasan').mouseover(() => {
          $('#atasan-sub').show();
          $('#brands-sub').hide();
          $('#bawahan-sub').hide();
          $('#sepatu-sub').hide();
        })
        $('#atasan-sub').hover(() => {
          $('#atasan-sub').show();
        },() => {
          $('#atasan-sub').hide();
        })

        //bawahan
        $('#bawahan').mouseover(() => {
          $('#bawahan-sub').show();
          $('#brands-sub').hide();
          $('#atasan-sub').hide();
          $('#sepatu-sub').hide();
        })
        $('#bawahan-sub').hover(() => {
          $('#bawahan-sub').show();
        },() => {
          $('#bawahan-sub').hide();
        })

        //sepatu
        $('#sepatu').mouseover(() => {
          $('#brands-sub').hide();
          $('#atasan-sub').hide();
          $('#bawahan-sub').hide();
          $('#sepatu-sub').show();
        })
        $('#sepatu-sub').hover(() => {
          $('#sepatu-sub').show();
        },() => {
          $('#sepatu-sub').hide();
        })


        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
      });
