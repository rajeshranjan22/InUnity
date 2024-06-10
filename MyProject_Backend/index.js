const express = require("express")
const app = express()
const mongoose = require("mongoose");
app.use(express.json())
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// MongoDB connection URL
const mongoUrl = "mongodb+srv://sharmarajeshranjan2000:admin@cluster0.yild9pd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// JWT secret key
const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe";

// Connect to MongoDB
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });
require("./UserDetails");
const User = mongoose.model("UserInfo");

// Routes
app.get("/",(req,res)=>{
    res.send({status:"started"})
})

// User registration
app.post("/register", async (req, res) => {
  const {  email, password  } = req.body;
  console.log(req.body);

  const oldUser = await User.findOne({ email: email });

  if (oldUser) {
    return res.send({ data: "User already exists!!" });
  }
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      email: email,
      password: encryptedPassword,
    });
    res.send({ status: "ok", data: "User Created" });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});


  
// User login
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.send({ data: "User doesn't exist" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.send({ data: "Incorrect password" });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET);

  if (token) {
    return res.send({
      status: "ok",
      data: token,
    });
  } else {
    return res.send({ error: "Failed to generate token" });
  }
});

 

// User data

app.post("/userdata", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;

    User.findOne({ email: useremail }).then((data) => {
      return res.send({ status: "Ok", data: data });
    });
  } catch (error) {
    return res.send({ error: error });
  }
});

// Start server

app.listen(8080,()=>{
    console.log("Running at port 8080")
})