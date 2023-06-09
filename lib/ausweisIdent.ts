import jwt from 'jsonwebtoken';

import secureHash from '@/lib/secureHashTM';

const requestedAttributes = [
  'openid',
  'GivenNames',
  'FamilyNames',
  'DateOfBirth',
].join(' ');

export default {
  id: process.env.OIDC_ID,
  name: 'AusweisIDent',
  type: 'oauth',
  wellKnown: 'https://ausweisident.governikus.de/ausweis-ident/.well-known/openid-configuration',
  authorization: { params: { scope: requestedAttributes } },
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  profile(profile) {
    const hash = secureHash({
      givenName: profile.given_name,
      familyName: profile.family_name,
      birthdate: profile.birthdate,
    });
    return {
      id: profile.sub,
      name: hash,
    };
  },
  userinfo: {
    url: 'https://ausweisident.governikus.de/ausweis-ident/oic/user-info',
    async request(context) {
      const res = await fetch('https://ausweisident.governikus.de/ausweis-ident/oic/user-info', {
        headers: {
          Authorization: `Bearer ${context.tokens.access_token}`,
        },
      });
      const data = await res.text();
      return jwt.decode(data);
    },
  },
};
