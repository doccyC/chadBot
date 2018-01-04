var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var chadbot = new Discord.Client({
   token: auth.token,
   autorun: true
});
chadbot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(chadbot.username + ' - (' + chadbot.id + ')');
});
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
