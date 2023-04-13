import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export default {
  id: process.env.OIDC_ID,
  name: "AusweisIDent",
  type: "oauth",
  wellKnown: "https://ausweisident.governikus.de/ausweis-ident/.well-known/openid-configuration",
  authorization: { params: { scope: "openid RestrictedID " } },
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  profile(profile) {
    const restrictedId = profile['http://ausweisident.governikus.de/restrictedId'];
    return {
      id: profile.sub,
      hash: crypto.createHash('sha256').update(restrictedId).digest('hex'),
    }
  },
  userinfo: {
    url: "https://ausweisident.governikus.de/ausweis-ident/oic/user-info",
    // The result of this method will be the input to the `profile` callback.
    async request(context) {
      const res = await fetch("https://ausweisident.governikus.de/ausweis-ident/oic/user-info", {
        headers: {
          Authorization: `Bearer ${context.tokens.access_token}`,
        }
      });
      const data = await res.text();
      return jwt.decode(data);
    }
  },
};
