import axios from 'axios';

//Elements

const loginForm= document.querySelector('.form--login');
const qpForm= document.querySelector('.qp');

//Delegations

if(loginForm){
  // console.log(loginForm);
  loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    // console.log('clicked on button')
    location.assign('/question-paper');
  })
}

if(qpForm){
  //console.log(loginForm);
  qpForm.addEventListener('submit', e=>{
    // console.log(e);
    e.preventDefault();
    // const sub= document.getElementById('subName').value;
    // const code= document.getElementById('subCode').value;
    // const date= document.getElementById('examDate').value;

    const formData = new FormData(qpForm); // Create FormData object to collect form data
    
    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });

    axios.post('/grade-question-paper', jsonObject)
            .then(response => {
              // Handle response from the server as needed
              console.log("data sent successfully");
            })
            .catch(error => {
              // Handle error
              console.error('Error:', error);
            });

     location.assign('/grade-question-paper');
  })
  
}