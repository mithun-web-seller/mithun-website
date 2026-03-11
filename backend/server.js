const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("../"));

app.post("/contact", async (req,res)=>{

const {name,email,message} = req.body

let transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:"b7077906014@gmail.com",
pass:"prrs tije zgty btdp"
}

})

let mailOptions={

from:email,
to:"b7077906014@gmail.com",
subject:"New Website Client",
text:`
Name: ${name}
Email: ${email}
Message: ${message}
`

}

await transporter.sendMail(mailOptions)

res.json({message:"Message Sent Successfully"})

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})