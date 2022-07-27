import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.cloudinary.com/v1_1/dsf48vuu9/resources/image",
  mode: "no-cors",
  credentials: "same-origin",
  headers: {
    Authorization: `Basic ${Buffer.from(
      process.env.CLOUDINARY_API_KEY + ":" + process.env.CLOUDINARY_API_SECRET
    ).toString("base64")}`,
  },
  cache: new InMemoryCache(),
});
