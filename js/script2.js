$( function() {
var $form1 = $('#firstname');
var $form2 = $('#lastname');
var $form3 = $('#address');
var $formInput = $('input');
// при ховере

// $form1.hover(function(event){
// $('.firstNameHelp').animate({opacity: 1}, 800);
// }, function(){
// $('.firstNameHelp').animate({opacity: 0}, 800);
// });
//
// $form2.hover(function(){
// $('.lastNameHelp').animate({opacity: 1}, 800)
// }, function(){
// $('.lastNameHelp').animate({opacity: 0}, 800)
// });
//
// $form3.hover(function(){
// $('.addressHelp').animate({opacity: 1}, 800)
// }, function(){
// $('.addressHelp').animate({opacity: 0}, 800)
// });

$formInput.hover(function(){
   $(this).next().stop(true, false).animate({opacity: 1}, 800);
}, function(){
  $(this).next().stop(true, false).animate({opacity: 0}, 800);
});


// при нажатии на клавишу

$('button').on('click', function() {
  // $('.tooltip').css('display','block');
  $('.tooltip').animate({opacity: 1}, 800)
})

// при табе

$form1.focus(function(){
$('.firstNameHelp').animate({opacity: 1}, 800)
$('.firstNameHelp').css('display','block');
});
$form1.blur(function(){
$('.firstNameHelp').css('display','none');
});

$form2.focus(function(){
  $('.lastNameHelp').animate({opacity: 1}, 800)
$('.lastNameHelp').css('display','block');
});
$form2.blur(function(){
$('.lastNameHelp').css('display','none');
});

$form3.focus(function(){
  $('.addressHelp').animate({opacity: 1}, 800)
$('.addressHelp').css('display','block');
});
$form3.blur(function(){
$('.addressHelp').css('display','none');
});




  } );
