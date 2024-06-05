const express = require("express"),
  app = express(),
  cors = require("cors"),
  User = require("./models/user.model"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStratergy = require("passport-local"),
  blogsRouter = require("./routes/blogs.router"),
  userRouter = require("./routes/user.router"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  MemoryStore = require("memorystore")(session);

require("dotenv").config();

//==========================================================================
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// Passport Configuration
passport.use(
  new LocalStratergy({ usernameField: "username" }, User.authenticate())
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  });

//===========================================================================
// Routes
app.use("/api/blogs", blogsRouter);
app.use("/api/users", userRouter);

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
