const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX ">>";

client.on('ready', () => {
    console.log("Let's go chowder some native chicks down that trail of beers!");
});

bot.user.setStatus('the game, bro');

client.on('message', message => {
    if (message.content === '>>suhbrah') {
    	message.reply('`Suh`');
  	}
    if (message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
})

// no change, bro
client.login(process.env.BOT_TOKEN);
