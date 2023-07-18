const { SlashCommandBuilder } = require('@discordjs/builders');
const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

// module.exports = {
// data: new SlashCommandBuilder()
//     .setName('ban')
//     .setDescription('Kya Dekh Raha He ?'),
// async execute(interaction) {
//     // code
// }

  module.exports = {
    deleted: true,
    name: 'ban',
    description: 'Bans a member!!!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
      {
        name: 'target-user',
        description: 'The user to ban.',
        required: true,
        type: ApplicationCommandOptionType.Mentionable,
      },
      {
        name: 'reason',
        description: 'The reason for banning.',
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],
  
    callback: (client, interaction) => {
      interaction.reply('ban..');
    },
  };