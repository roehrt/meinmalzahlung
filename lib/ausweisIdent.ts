export default {
  id: "oidc-ausweis-ident",
  name: "AusweisIDent",
  type: "oauth",
  wellKnown: "https://ausweisident.governikus.de/ausweis-ident/.well-known/openid-configuration",
  authorization: { params: { scope: "openid FamilyNames DateOfBirth" } },
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  idToken: true,
  profile(profile) {
    console.log(profile);
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    }
  },
};
