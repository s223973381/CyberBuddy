const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const signupFile = process.env.SIGNUP_FILE || 'signups.txt'; // <-- configurable

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  const { name, email } = req.body;
  const userData = `${name}, ${email}\n`;
  try {
    fs.appendFileSync(signupFile, userData);
    res.render('thankyou', { name });
  } catch (err) {
    console.error('Error writing file:', err);
    res.status(500).send('Something went wrong!');
  }
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}
