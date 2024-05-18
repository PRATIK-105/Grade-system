const path= require('path');
const express= require('express');
const viewRouter= require('./routes/viewRoutes');


const app= express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// global middleware
//serve static files on the server
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({
  limit: '10kb'
}));

app.use(express.urlencoded({
  extended:true,
  limit:'10kb'
}));

app.use('/', viewRouter);



app.post('/submit', (req, res) => {
  const grades = req.body;
  console.log(grades); // Process the grades as needed

  // Redirect to the thank you page
  res.redirect('/thankyou');
});

// Route for the thank you page
app.get('/thankyou', (req, res) => {
  res.render('thankyou');
});

module.exports= app;