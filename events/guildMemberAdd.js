const Discord = require("discord.js");

module.exports = async (bot, member) => {
  const channel = member.guild.systemChannel;
  if (!channel) {
    console.error(`[LaCorbeille - guildMemberAdd] Le canal par défaut n'a pas été trouvé pour le membre ${member.user.username}`);
    return;
  } else {
    channel.send(`Bienvenue sur le serveur, ${member}!`);
    channel.send(`https://tenor.com/view/welcome-welcome-to-the-team-minions-gif-21749603`);
  }
}