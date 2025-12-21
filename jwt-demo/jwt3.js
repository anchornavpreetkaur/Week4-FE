const jwt = require("jsonwebtoken");

// ✅ Define the payload
const payload = {
  userId: 123,
  username: "navpreet",
};

// ✅ Define the secret key
const secret = "mySuperSecretKey";

// ✅ Create and verify the token
const newToken = jwt.sign(payload, secret, { expiresIn: "1h" });
const decoded = jwt.verify(newToken, secret);

console.log("Token:", newToken);
console.log("Decoded:", decoded);
