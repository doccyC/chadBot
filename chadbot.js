const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
chadbot.on('message', function (user, userID, channelID, message, evt) {
// >> is the prefix
    if (message.substring(0, 2) == '>>') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            case 'suhbrah':
                chadbot.sendMessage({
                    to: channelID,
                    message: 'Suh'
                });
            break;
            //continuation of case commands from here on out
         }
     }
});
