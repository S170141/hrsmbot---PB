const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Lol no.");
  if(!args[0]) return message.channel.send("Please tell me how many messages to delete.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));

});

}

module.exports.help = {
  name: "clear"
}
