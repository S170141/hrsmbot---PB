const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mUser) return message.channel.send("Couldn't find user.");
  let mreason = args.join(" ").slice(22);
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
  if(mUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be muted!");
  if(!mreason) return message.channel.send("Please tell me a reason to mute them.");

  let muteEmbed = new Discord.RichEmbed()
  .setDescription("~Mute~")
  .setColor("#042251")
  .addField("Muted User", `${mUser} with ID: ${mUser.id}`)
  .addField("Muted By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", mreason);

  let mRole = message.guild.roles.find(`name`, "Muted");
  let mutechannel = message.guild.channels.find(`name`, "incidents");
  if(!mutechannel) return message.channel.send("Couldn't find incidents channel.");

  mUser.addRole(mRole.id)
  message.delete().catch(O_o=>{});
  mutechannel.send(muteEmbed);
  console.log("works");

  return;
}

module.exports.help = {
  name: "mute"
}
