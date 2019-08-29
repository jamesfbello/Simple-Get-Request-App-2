"use strict";
//Pass numInput, which represents an integer as an argument
function getDogImage(numInput) {
  if  (numInput > 50) {
      return alert("Please choose a number equal to or less than 50");
  }
  else {
      fetch (`https://dog.ceo/api/breeds/image/random/${numInput}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  // Option 1 gives 404 Error
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  // Option 2
  // $('.results-img').html('');
  // responseJson.message.forEach(renderedImg => {
  //   $('.results-img').append(`<img src="${renderedImg}" class="results-img">`)
  // });

  //display the results section
  $('.results').removeClass('hidden');
}

function watchUserInput() {
  $("#dog-num-form").submit(e => {
    event.preventDefault();
    let userNumInput = $("#num-dog").val();
    //Pass the number value to getDogImage
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchUserInput();
});

