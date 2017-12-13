const jwt = require('jsonwebtoken');
const secretKey = "s-117";
const token = jwt.sign({ kitty: "fluffles" }, secretKey, { algorithm: 'RS256'} );

try {
  const result = jwt.veryify(token, secretKey)
  console.log('All good', result)
} catch (err) {
  console.log('No good')
}
