//finds and injects the modules used by hrsmbot
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const ms = require ("ms")
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands! Please check the commmands folder at hrsmbot/commands")
    return;
  }

//adds the commands from /hrsmbot/commands into the bot.

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} has been injected into hrsmbot`)
  bot.commands.set(props.help.name, props);
});

});

//turns the bot online and sends the online request to Discord's servers

bot.on("ready", async () => {
  console.log(`${bot.user.username} is now currently online!`);

  bot.user.setActivity("Maintenance", {type: "PLAYING"});

  //bot.user.setGame("with random stuff");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);






});

//uses the token at /hrsmbot/botconfig.json and logs into Discord and displays this on Discord.
bot.login(botconfig.token);
