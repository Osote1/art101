/*
 * Author: Angela Rangel
 * Email: anvrange@ucsc.edu
 * Date: November 2
 * License: Public Domain
 */
function sortUserName(inputName) {
  var userName = inputName;

  var nameArray = userName.split('');

  var sortedArray = nameArray.sort();

  var sortedName = sortedArray.join('')

  return(sortedName);
}


var buttonEl = document.getElementById("my-button");

var outputEl = document.getElementById("output");


buttonEl.addEventListener('click', function(){
  var inputVal = document.getElementById('user-name').value;
  var sortedNewName = sortUserName(inputVal);
  outputEl.innerHTML = sortedNewName;
});
