const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Importing cors
const app = express();
const PORT = 3000;

// Use cors middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const code = req.body.code;

    // Debugging: Log the request body
    console.log('Received code:', code);

    // Validate the request body
    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    // Write the code to a temporary file
    const tempFilePath = path.join(__dirname, 'temp.py');
    fs.writeFileSync(tempFilePath, code);

    // Execute the Python code
    exec(`python ${tempFilePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error('Error executing Python code:', stderr);
            res.json({ output: stderr });
        } else {
            console.log('Python code executed successfully:', stdout);
            res.json({ output: stdout });
        }
        // Clean up the temporary file
        fs.unlinkSync(tempFilePath);
    });
});

app.get('/submit', (req, res) => {
    res.send("demo");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
