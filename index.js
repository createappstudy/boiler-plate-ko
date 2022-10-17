const express = require('express')
const app = express()
const port = 5000
const  bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

//bodyparser : 클라이언트에서 오는  정보를 서버에서 분석해서 가지고올 수 있도록 함 
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json()); 

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 안녕하세요 ~ 새해복 많이 받으세용!!'))


app.post('/register', (req, res) => {
    //회원가입을 위한 라우트
    //회원가입 할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다
    const user = new User(req.body)

    user.save((err, userinfo) => {
      if(err) return res.json({sucess: false, err})
      return res.status(200).json({
        sucess: true
      })
    })

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
