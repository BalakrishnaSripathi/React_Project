const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors');


const app = express();

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
const JWT_Token_secret="thisisasecretkeyforsigningtoken"

const portalUsers = {
    "Prasad": {
        ID: 1,
        name: 'Prasad',
        role: 'faculty',
        password: 'prasad'
    },
    "Balu": {
        ID: 2,
        name: 'Balu',
        role: 'Student',
        password: 'balu'
    }
}

const authenticateFaculty=(req,res,next)=>{
    const bearerToken=req.headers.authorization;
    console.log('Bearer Token from client: ',bearerToken);
    if (!bearerToken || !bearerToken.startsWith('Bearer')){
        res.status(401).send('Bearer TOken Missing')
    }
    const token=bearerToken.split('Bearer ')[1]
    console.log('Line 36: ',token)
    const payloadInToken=token.split('.')[1]
    const decodedVersion=jwt.verify(token,JWT_Token_secret)
    console.log('Decoded Version:',decodedVersion)
    if (decodedVersion.user_role!=='faculty'){
        res.status(401).send('You are not authorized to see the data')
    }
    else{
        next();
    }
   

}


app.get('/', (req, res) => {
    res.send('Hi, This is the default routes')
})



app.post('/login', (req, res) => {
    console.log("body:", req.body)

    const { username, password } = req.body || {};

    let user = portalUsers[username];
    console.log('user:', user);

    if (!user) {
        return res.status(404).send('user not found')
    }

    if (user.password === password) {
        const userPayload={
            user_ID:user.ID,
            user_role:user.role
        }
        const token=jwt.sign(userPayload,JWT_Token_secret,{expiresIn:'1h'})
        res.status(200).send({message:'user successfully Logged In',token:token})
    } else {
        return res.status(401).send('login failed')
    }
})

app.get('/anyone-can-access',(req,res)=>{
    res.send("welcome! anyone can access this route")
})

app.get('/student-attendance',authenticateFaculty,(req,res)=>{
    const students={
        'Balu':'75%',
        'student2':'85%'
    }
    res.status(200).send({data:students,message:'only Faculty Can access this data'})
})

app.listen(3000, () => {
    console.log('server started running on port 3000')
})