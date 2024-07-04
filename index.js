import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  console.log(message);
  const name = message.author.globalName;
  const firstName = name.split(" ")[0];
  message.reply({
    content: `Hello,${firstName}`,
  });
});

client.login(process.env.DISCORD_LOGIN_TOKEN);
