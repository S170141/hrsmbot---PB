const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let unmuteMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let unmutePermRole = message.guild.roles.find(`name`, "Muted"); //set Perm Muted to your perm mute role
	if(!unmuteMute) return message.reply("Couldn't find user.");
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
	if(!unmuteMute.roles.has(unmutePermRole.id)) return message.reply("They are not muted?");


	if (unmutePermRole){
		try {
			unmuteMute.removeRole(unmutePermRole.id);{}
			message.channel.send(`<@${unmuteMute.id}> has had their mute revoked.`);
		} catch(e) {
			console.log(e.stack);
		}
	}
}

module.exports.help = {
	name: "unmute"
}
