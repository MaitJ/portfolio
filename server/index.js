const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const imageHandler = require('./imageHandler');
const nodemailer = require("nodemailer")

app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "portfooliotest@gmail.com",
    pass: "lambitest",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Valmis saatma");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "portfooliotest@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

app.get('/getimages', (req, res, next) =>{
    req.pics = imageHandler.getImageArray();
    next();
}, (req, res) =>{
    res.json(req.pics);
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(3001, () => {
    console.log("Server is running");
});