function init(){
    const entryButton = document.getElementById('entrybutton');
    const entryInput = document.getElementById('entryinput');
    const textOutput = document.getElementById('textoutput');
  
    // Add click event listener to the "Alert Me" button
    entryButton.addEventListener('click', function () {
      const inputValue = entryInput.value;
  
      // Show alert with your name and the input value
      alert('Aahil Penwalla: ' + inputValue);
  
      // Change the h2 element to match the input value
      textOutput.textContent = inputValue;
    });
  }

window.addEventListener('load', init);
