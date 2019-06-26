const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!args[0]) return message.channel.send("Please specify the command.");
    return message.channel.send("WIP!");
    return;
}

module.exports.help = {
  name: "help"
}
