const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#15f153")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt);

  return message.channel.send(botembed);
  console.log("works");
}

module.exports.help = {
  name: "botinfo"
}
