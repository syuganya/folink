var mainlayout = function(config) {};


/*carousel code*/
var intervals = {};
intervals["Interval"] = carousel_slider();
var item;
var i = 1;
$('#carousel1').fadeIn();
$("#indicator1").addClass('activeSlider');
$("#pagination1").addClass('activeindicator');

function carousel_slider() {
  stopcarousel_slider();
  item = setTimeout(function() {
    new mainlayout().carousel();
  }, 5000);
  return item;
}

function stopcarousel_slider(intervalArr) {
  for (i in intervalArr) {
    clearTimeout(item);
  }
}
mainlayout.prototype.init = function() {
  $('ul > li').click(function() {
    $(this).children('a').addClass('active');
    $(this).siblings('li').children('a').removeClass('active');
  });

};
mainlayout.prototype.carousel = function() {

  if (i == 3) {
    $("#carousel" + i + "").fadeOut();
    $("#carousel1").fadeIn();
    $("#indicator" + i + "").removeClass('activeSlider');
    $("#indicator1").addClass('activeSlider');
    $("#pagination" + i + "").removeClass('activeindicator');
    $("#pagination1").addClass('activeindicator');
    i = 0;
  } else {
    $("#carousel" + i + "").fadeOut();
    $("#carousel" + i + "").next().fadeIn();
    $("#indicator" + i + "").removeClass('activeSlider');
    $("#pagination" + i + "").removeClass('activeindicator');
  }
  if (i < 4) {
    i++;
    $("#indicator" + i + "").addClass('activeSlider');
    $("#pagination" + i + "").addClass('activeindicator');
  }
  carousel_slider();
};
