document.addEventListener("DOMContentLoaded", function () {
  const sumbtn = document.getElementById("twosum");
  const waterbtn = document.getElementById("container");
  const fibbtn = document.getElementById("fibonacci");
  const revbtn = document.getElementById("reverse");
  const descriptionDiv = document.getElementById("description-div");
  const codeInput = document.getElementById("codeInput");
  const title = document.getElementById("title-id");
  const opArea =document.querySelector(".area")
  //2 sum
  sumbtn.addEventListener("click", function () {
    // Load data from the data.json file using a relative path
    fetch("./static/twosum.py")
      .then((response) => response.text())
      .then((code) => {
        // Manipulate the data and update the description div
        opArea.innerHTML=''
        title.innerHTML = `TWO SUM`;
        descriptionDiv.innerHTML = `<div>
                You're given a list of integers called nums and an integer target. Your task is to find two numbers in the list such that they add up to the target. You can assume that each input would have exactly one solution, and you cannot use the same element twice.

However, there seems to be an issue with the following code, which is supposed to solve this problem:
</div>
<br>
<div>
The function should return a list of two indices, but it doesn't seem to work as expected. Your task is to identify the problem in the code and provide a corrected version.

Instructions:

Identify the issue in the code provided.
Provide the corrected version of the code that correctly solves the "Two Sum" problem.

</div>`;
        codeInput.innerHTML = code;
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  });

  //container
  waterbtn.addEventListener("click", function () {
    // Load data from the data.json file using a relative path
    fetch("./static/container.py")
      .then((response) => response.text())
      .then((code) => {
        // Manipulate the data and update the description div
        opArea.innerHTML=''
        title.innerHTML = `Container with Most Water`;
        descriptionDiv.innerHTML = `<div>
            You have been provided with a Python function for solving the "Container With Most Water" problem. However, there's a bug in the code, and the function does not work as expected. Your task is to identify and correct the issue in the code.

Problem Statement:

Given an array of non-negative integers height where each element represents the height of a vertical line on a chart, find two lines that, together with the x-axis, forms a container that can hold the most water.

The function you have been given takes the height list as input and should return the maximum amount of water that can be trapped in such a container. However, the code currently has a bug, and it doesn't return the correct result.
</div>

<br></br>
<div>

Identify the issue in the code provided.
Provide the corrected version of the code that correctly calculates the maximum amount of water that can be trapped in the container.
Explain the problem you found and how your corrected code addresses it.


</div>

`;
        codeInput.innerHTML = code;
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  });

  //fibonacci
  fibbtn.addEventListener("click", function () {
    // Load data from the data.json file using a relative path
    fetch("./static/fibonacci.py")
      .then((response) => response.text())
      .then((code) => {
        opArea.innerHTML=''
        // Manipulate the data and update the description div
        title.innerHTML = `Fibonacci`;
        descriptionDiv.innerHTML = `<div>
            
            You have been provided with a Python function for generating the Fibonacci sequence. However, there's a bug in the code, and the function does not work as expected. Your task is to identify and correct the issue in the 
            
                        </div>
                        <br></br>
                        <div>
            
            
            Your Task:
            
            Identify the issue in the code provided.
            Provide the corrected version of the code that correctly generates the Fibonacci sequence.
            Explain the problem you found and how your corrected code addresses it.
            
                        </div>
                        `;
        codeInput.innerHTML = code;
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  });

  //
  revbtn.addEventListener("click", function () {
    // Load data from the data.json file using a relative path
    fetch("./static/reverse.py")
      .then((response) => response.text())
      .then((code) => {
        opArea.innerHTML=''
        // Manipulate the data and update the description div
        title.innerHTML = `Reverse a String in Python`;
        descriptionDiv.innerHTML = `
             <div>
             You have been provided with a Python function for reversing a string. However, there's a bug in the code, and the function does not work as expected. Your task is to identify and correct the issue in the code.


             </div>
             <br></br>

             <div>
             Identify the issue in the code provided.
Provide the corrected version of the code that correctly reverses the string.
Explain the problem you found and how your corrected code addresses it.

             </div>
             `;
        codeInput.innerHTML = code;
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  });

  // button.addEventListener('click', function () {
  //     // Load data from the data.json file using a relative path
  //     fetch('./static/code.py')
  //     .then(response => response.text())
  //         .then(code => {
  //             // Manipulate the data and update the description div

  //             descriptionDiv.innerHTML =``;
  //             codeInput.innerHTML=code;
  //         })
  //         .catch(error => {
  //             console.error("Error loading data:", error);
  //         });
  // });
});
