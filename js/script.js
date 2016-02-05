$(document).ready(function(){
  //sliding images
  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    mode: 'fade',
    auto: true,
    captions: true
  });



  //etkinlik table
  $.ajax({
    url: "etkinlikler.json",
    success: function (data) {
        var etkinlikler = JSON.parse(data);
    }
});
  $("table.etkinlik").append("<tr></tr>");

  $("table.etkinlik tr").append("<td class="+'e1'+"></td>");

  $("table.etkinlik td.e1").append("<img src='Etkinlikler/1.jpg'></img>");




});
