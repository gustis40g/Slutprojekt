// // Function to update the switch state based on the stored value
// function updateSwitchState() {
//   var isChecked = localStorage.getItem('switchState') === 'true';
//   $('.switch3 input[type="checkbox"]').prop('checked', isChecked);
//   handleSwitchChange.call($('.switch3 input[type="checkbox"]'));
// }

// // Function to handle the switch change event
// function handleSwitchChange() {
//   var isChecked = $(this).is(':checked');
//   var dad = $(this).parent();
//   if (isChecked) {
//     dad.addClass('switch3-checked');
//     $("body").css("background-color", "#393E46")
//     $(".links a").css('color', '#EEEEEE');
//     $("#nav").css('background-color', '#222831').css('color', '#EEEEEE');
//   } else {
//     dad.removeClass('switch3-checked');
//     $("body").css("background-color", "#F2F2F2")
//     $(".links a").css('color', '#000000');
//     $("#nav").css('background-color', '#FFFFFF').css('color', '#000000');
//   }
//   // Store the switch state in localStorage
//   localStorage.setItem('switchState', isChecked);
// }

// // Bind the switch change event
// $('.switch3 input[type="checkbox"]').on('change', handleSwitchChange);

// // Update the switch state when the page loads
// updateSwitchState();

function updateSwitchState() {
  var isChecked = localStorage.getItem('switchState') === 'true';
  $('.switch3 input[type="checkbox"]').prop('checked', isChecked);
  handleSwitchChange.call($('.switch3 input[type="checkbox"]'));
}

function handleSwitchChange() {
  var isChecked = $(this).is(':checked');
  var dad = $(this).parent();
  if (isChecked) {
    dad.addClass('switch3-checked');
    $("body").css("background-color", "#393E46");
    $(".links a").css('color', '#EEEEEE');
    $("#nav").css('background-color', '#222831').css('color', '#EEEEEE');
  } else {
    dad.removeClass('switch3-checked');
    $("body").css("background-color", "#F2F2F2");
    $(".links a").css('color', '#000000');
    $("#nav").css('background-color', '#FFFFFF').css('color', '#000000');
  }

  // Update the text color within the Facebook iframe
  changeFacebookTextColor(isChecked ? '#EEEEEE' : '#000000');

  // Store the switch state in localStorage
  localStorage.setItem('switchState', isChecked);
}

// Function to modify the text color in the Facebook iframe
function changeFacebookTextColor(color) {
  // Access the Facebook iframe element
  var iframe = document.getElementById('facebook');

  // Check if the iframe exists
  if (iframe) {
    // Access the iframe's content window
    var iframeWindow = iframe.contentWindow;

    // Check if the iframe has loaded
    if (iframeWindow && iframeWindow.postMessage) {
      // Send a postMessage to the iframe with the text color data
      iframeWindow.postMessage(color, '*');
    }
  }
}

// Bind the switch change event
$('.switch3 input[type="checkbox"]').on('change', handleSwitchChange);

// Update the switch state when the page loads
updateSwitchState();