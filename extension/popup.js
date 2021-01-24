// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };

// slider code

const $element = $('#safety-input');
const sliderStates = [
  {name: "low", range: _.range(1, 4) },
  {name: "med", range: _.range(4, 7)},
  {name: "high",  range: _.range(7, 10)},
];
var currentState;
var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
      updateState($handle[0], this.value);
    }
  })
  .on('input', function() {
    updateHandle($handle[0], this.value);
    checkState($handle[0], this.value);
  });


const $element2 = $('#effective-input');
var currentState2;
var $handle2;

$element2
  .rangeslider({
    polyfill: false,
    onInit: function() {
      $handle2 = $('.rangeslider__handle', this.$range);
      updateHandle2($handle2[0], this.value);
      updateState2($handle2[0], this.value);
    }
  })
  .on('input', function() {
    updateHandle2($handle2[0], this.value);
    checkState2($handle2[0], this.value);
  });



/*

Other Slider Functions

*/
// Update the value inside the slider handle
function updateHandle(el, val) {
  el.textContent = val;
}

// Check if the slider state has changed
function checkState(el, val) {
  // if the value does not fall in the range of the current state, update that shit.
  if (!_.contains(currentState.range, parseInt(val))) {
    updateState(el, val);
  }
}

// Change the state of the slider
function updateState(el, val) {
  for (var j = 0; j < sliderStates.length; j++){
    if (_.contains(sliderStates[j].range, parseInt(val))) {
      currentState = sliderStates[j];
      // updateSlider();
    }
  }
  // If the state is high, update the handle count to read 50+
  // if (currentState.name == "high") {
  //   updateHandle($handle[0], "50+");
  // }
  // Update handle color
  $handle
    .removeClass (function (index, css) {
    return (css.match (/(^|\s)js-\S+/g) ||   []).join(' ');
  })
    .addClass("js-" + currentState.name);
}


// slider 2

// Update the value inside the slider handle
function updateHandle2(el, val) {
  el.textContent = val;
}

// Check if the slider state has changed
function checkState2(el, val) {
  // if the value does not fall in the range of the current state, update that shit.
  if (!_.contains(currentState2.range, parseInt(val))) {
    updateState2(el, val);
  }
}

// Change the state of the slider
function updateState2(el, val) {
  for (var j = 0; j < sliderStates.length; j++){
    if (_.contains(sliderStates[j].range, parseInt(val))) {
      currentState2 = sliderStates[j];
      // updateSlider();
    }
  }
  // If the state is high, update the handle count to read 50+
  // if (currentState2.name == "high") {
  //   updateHandle2($handle2[0], "50+");
  // }
  // Update handle color
  $handle2
    .removeClass (function (index, css) {
    return (css.match (/(^|\s)js-\S+/g) ||   []).join(' ');
  })
    .addClass("js-" + currentState2.name);
}


// // popup.js
// document.addEventListener('DOMContentLoaded', function() {
// 	// (Inside the click listener)
// 	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
// 	  // Note that sending a message to a content script is different
// 	  chrome.tabs.sendMessage(tabs[0].id, {message:'getPageDOM'}, function(response) {
// 	    // download(response, "download.html", "text/html");
// 	    console.log("here we go!")
// 	    console.log(response)
// 	  });
// });

        //console.log(tabs[0].id);



chrome.tabs.query(
  { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
  function(tabs) {
    // const { id: tabId } = tabs[0].url;
// let code = `document.getElementById('productTitle')`;
    chrome.tabs.executeScript(tabs[0].id, {file: "webscrape.js"}, function (test){
        console.log(test);
    });    
    // http://infoheap.com/chrome-extension-tutorial-access-dom/
  }
);