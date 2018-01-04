const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Let's go chowder some native chicks down that trail of beers!");
});

client.User.setGame('the game, bro');

client.on('message', message => {
    if (message.content === '>>suhbrah') {
    	message.reply('```Suh```');
  	}
});

// no change, bro
client.login(process.env.BOT_TOKEN);
