const fs= require('fs');

exports.getLoginForm= (req, res)=>{
  res.status(200).render('login',{
    title:'Log into your Account'
  })
}

exports.getQPForm= (req, res)=>{
  res.status(200).render('questionPaper',{
    title:'Set Question Paper'
  })
}

exports.getGradeQPForm= (req, res)=>{

  console.log(req.body);

  fs.writeFileSync(`${__dirname}/../public/data/data.txt`, JSON.stringify(req.body));  
 

  res.status(200).json(
    {
      status:'success',
    }
  )
}


exports.getGradeQPForm1=  (req, res)=>{

  const readData= JSON.parse(fs.readFileSync(`${__dirname}/../public/data/data.txt`, 'utf8'))

 res.status(200).render('gradeQuestionPaper',{
    title:'Grade Question Paper',
    data:readData
  })
}