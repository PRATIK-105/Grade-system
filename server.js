const dotenv= require('dotenv');
const app= require('./app');

dotenv.config({
  path:'./config.env'
})

const port = process.env.PORT;
const server= app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


