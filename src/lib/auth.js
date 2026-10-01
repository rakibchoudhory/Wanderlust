import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("wanderlust");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.Google_client_ID,
      clientSecret: process.env.Google_Client_secret,
    },
  },
session:{
  cookieCache:{
    enabled: true,
    strategy: "jwt",
    // max 7 day
    maxAge: 7 * 24 * 60 * 60
  }
},
    plugins: [
        jwt(), 
    ]

});
