// Simple Base64 Encode/Decode (not URL-safe)
// Good for understanding the concept, but not robust for JWT
function base64Encode(data) {
  return Buffer.from(data).toString("base64");
}

function base64Decode(base64) {
  return Buffer.from(base64, "base64").toString();
}

// Test
console.log(base64Encode("hello")); // aGVsbG8=
console.log(base64Decode("aGVsbG8=")); // hello