document.addEventListener('DOMContentLoaded', function () {
    const sumbtn = document.getElementById('twosum');
    const waterbtn = document.getElementById('container');
    const fibbtn = document.getElementById('fibonacci');
    const revbtn = document.getElementById('reverse');



    const descriptionDiv = document.getElementById('description-div');
    const codeInput =document.getElementById('codeInput')
  const title=document.getElementById("title-id")
   //2 sum
    sumbtn.addEventListener('click', function () {
        // Load data from the data.json file using a relative path
        fetch('./static/twosum.py')
        .then(response => response.text())
            .then(code => {
                // Manipulate the data and update the description div
                title.innerHTML=`TWO SUM`
                descriptionDiv.innerHTML =`<div>
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
                codeInput.innerHTML=code;
            })
            .catch(error => {
                console.error("Error loading data:", error);
            });
    });


//container
waterbtn.addEventListener('click', function () {
    // Load data from the data.json file using a relative path
    fetch('./static/container.py')
    .then(response => response.text())
        .then(code => {
            // Manipulate the data and update the description div
            title.innerHTML=`Container with Most Water`
            descriptionDiv.innerHTML =``;
            codeInput.innerHTML=code;
        })
        .catch(error => {
            console.error("Error loading data:", error);
        });
});

//fibonacci
fibbtn.addEventListener('click', function () {
    // Load data from the data.json file using a relative path
    fetch('./static/fibonacci.py')
    .then(response => response.text())
        .then(code => {
            // Manipulate the data and update the description div
            title.innerHTML=`Fibonacci`
            descriptionDiv.innerHTML =``;
            codeInput.innerHTML=code;
        })
        .catch(error => {
            console.error("Error loading data:", error);
        });
});

//
revbtn.addEventListener('click', function () {
    // Load data from the data.json file using a relative path
    fetch('./static/reverse.py')
    .then(response => response.text())
        .then(code => {
            // Manipulate the data and update the description div
            title.innerHTML=`Reverse a String in Python`
            descriptionDiv.innerHTML =``;
            codeInput.innerHTML=code;
        })
        .catch(error => {
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
