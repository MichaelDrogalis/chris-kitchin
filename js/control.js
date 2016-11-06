
function hide() {
  $('section').hide();
}

function training() {
  hide();
  $('.s-training').show();
}

function pricing() {
  hide();
  $('.s-pricing').show();
}

function contact() {
  hide();
  $('.s-contact').show();
}

//Change views
$('#training-li').on('click', function(event) {
  event.preventDefault();
  training();
});

$('#pricing-li').on('click', function(event) {
  event.preventDefault();
  pricing();
});

$('#contact-li').on('click', function(event) {
  event.preventDefault();
  contact();
});

// Credential View Button
$('.credential-list').hide('fast');
$('#cred-b').on('click', function(event) {
  event.preventDefault();
  $('.credential-list').show('slow');
  $('#cred-b').hide('fast');
});

//Hover binding for profile image
$('#km-profile').hover(function() {
  $('#km-profile').attr('src', './img/km-filtered-1.png');
}, function() {
  $('#km-profile').attr('src', './img/km-profile.png');
});

//Contact info injection
$('#contact-b').on('click', function(event) {
  event.preventDefault();
  $(this).hide('100', function() {
    $('.contact-overview').append('<a href="mailto:kitch_kitchin@yahoo.com?Subject=KitchinMade%20Inquiry" target="_top">Click to Email</a><br><br><p>Cell: 206-390-0052');
  });;
});

//LinkedIn Icon click
$('#linkedin-footer').hover(function() {
  $(this).css('cursor', 'pointer');
}).on('click', function(event) {
  event.preventDefault();
  window.open('https://www.linkedin.com/in/c-kitchin-1326638a', '_blank');
});
