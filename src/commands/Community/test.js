const { SlashCommandBuilder } = require("discord.js")
// const PREFIX = '/';
// const tournaments = new Map();

// module.exports ={
//     data: new SlashCommandBuilder()
//     .setName('ping')
//     .setDescription('This Is Testing South'),
//     async execute(interaction,client){
//         await interaction.reply ({content:"the command is working"})
         
//     }

// } 

module.exports = {
    name: 'ping',
    description: 'Replies with the bot ping!',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
  
      const reply = await interaction.fetchReply();
  
      const ping = reply.createdTimestamp - interaction.createdTimestamp;
  
      interaction.editReply(
        `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
      );
    },
  };
  