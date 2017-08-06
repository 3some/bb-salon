$(document).ready(function() {
  var heightProduct = $(window).height() - 75;
  $('#content-4').css('height', heightProduct);

  $('.btn-sum').bind('tapone', function () {
    if ($("#cartform tbody tr").length) {
      $(this).parents('th').hide();
      $(".wrap-product").hide();
      $('label[for="nav-trigger"]').hide();
      $(".fa-trash").hide();
      $(".fa-back").show();
      $(".fa-delete").hide();
      $(".wrap-checkout").show();
      $(".remove-cart-item").hide();
      $(".update_number").attr("disabled", "disabled");
      jQuery("#purchase-form").show();
      jQuery("#checkoutsuccess").hide();
      jQuery('.wrap-cart-checkout').addClass('active');
    }
  });

  $('.fa-back').bind('tapone', function () {
    $('.fa-back').hide();
    $(".wrap-checkout").hide();
    $(".wrap-product").show();
    $('label[for="nav-trigger"]').show();
    $(".fa-trash").show();
    $(".btn-sum").parents('th').show();
    $(".fa-delete").show();
    $(".remove-cart-item").show();
    $(".update_number").removeAttr("disabled");
    jQuery('.wrap-cart-checkout').removeClass('active');
    $('html, body').animate({
      scrollLeft: 0
    }, 800);
  });

})
