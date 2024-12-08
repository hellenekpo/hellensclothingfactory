const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Serve static files from the React build folder (if you're building React separately)
//app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route for React Router
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});