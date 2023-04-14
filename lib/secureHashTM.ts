import crypto from "crypto";

function hash({
                givenName,
                familyName,
                birthdate,
              }) {
  return crypto.createHash('sha256').update(
    `${givenName.toLowerCase()}:${familyName.toLowerCase()}:${birthdate}`
  ).digest('hex');
}

export default hash;
