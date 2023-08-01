// const session = require("express-session");

// const createHttpCookie = async (req, res, next) => {
//   try {
//     session({
//       resave: false,
//       saveUninitialized: false,
//       // genid: function (req) {
//       //   return genuuid(); // use UUIDs for session IDs
//       // },
//       secret: "sessionss",
//       cookie: {
//         maxAge: 1000 * 60 * 60,
//         sameSite: "lax",
//         // httpOnly: false,
//         secure: false,
//       },
//     });
//     next();
//   } catch (err) {
//     res.status(500).json({ auth: false, error: err.message });
//   }
// };

// module.exports = { verifyToken };
