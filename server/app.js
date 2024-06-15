// const express = require('express');
// const bodyParser = require('body-parser');
// const { exec } = require('child_process');

// const app = express();
// const port = 3000;

// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/', (req, res) => {
//   const submittedCode = req.body.code || '';
//   console.log(submittedCode)
//   // Write the submitted code to a file named 'demo.py'
//   require('fs').writeFileSync('demo.py', submittedCode);

//   // Execute the code.py file and capture the output and errors
//   exec('python demo.py', (error, stdout, stderr) => {
//     const output = stdout + stderr; // Concatenate stdout and stderr
//     // res.send(output);
//     console.log("calcukating",output)
//   });
// });

// app.get('/', (req, res) => {

//   res.send("heyy")
// });


// app.get("/routess",(req,res)=>{
//     console.log("heyyyyy")
// })
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'static'))); // Serve static files from the 'static' directory

// // app.post('/', (req, res) => {
// //     const { code } = req.body;
// //     // Process the code and generate output
// //     const output = runCode(code); // Assuming runCode is a function that processes the code
// //     res.send(output);
// // });

// // function runCode(code) {
// //     // Dummy function to simulate code execution
// //     return `Output for the code: ${code}`;
// // }

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

// Other middleware and routes
app.use(express.json());

// Example POST handler for /submit
app.post('/submit', (req, res) => {
    const { code } = req.body;
  console.log(code)
});
app.get('/submit',(req,res)=>{
  res.send("demo")
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
