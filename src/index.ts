import express from "express";
import http from "http";
import datasource from "./lib/datasource";
import { buildSchema } from "type-graphql";
import Countryresolver from "./resolvers/country.resolver";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


const app = express();
const httpServer = http.createServer(app);

async function startServer() {
  try {
    await datasource.initialize();
    console.log("✅ Connexion à la base de données établie");
  } catch (error) {
    console.error("❌ Erreur de connexion à la base de données:", error);
    return;
  }

const schema = await buildSchema({
  resolvers: [Countryresolver],
});
  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
  });

  console.log(`🚀 Serveur GraphQL prêt à l'adresse: ${url}`);
}

startServer().catch((err) => {
  console.error("Erreur lors du démarrage du serveur :", err);
});