const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "_";

Client.on("ready", () => {
    console.log("[c] Le Bot est en ligne !")
    Client.user.setStatus("online");
    Client.user.setActivity("_help");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        //lban
        if(message.content.startsWith(prefix + "ban")){
            message.delete();
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send("Le membre a bien été banni du serveur")
                }
                else {
                    message.reply("Impossible de bannir ce membre .")
                }
            }
        }
        //lkick
        else if(message.content.startsWith(prefix + "kick")){
            message.delete();
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send("Le membre a bien été kické du serveur");
                }
                else {
                    message.reply("Impossible de kicker ce membre .")
                }
            }
        }
    }
});


Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;


    

    if(message.content.startsWith("_userinfo")){
    
    
        const userEmbed = new Discord.MessageEmbed()
    .setColor('#FEE300')
    .setTitle('Informations sur **'+ message.author.username + '**')
    .setURL('https://sites.google.com/view/likebot/accueil')
    .setAuthor('LikeBot - UserInfo', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png')
    .setDescription('Voici les Informations sur toi')
    .setThumbnail()
    .addFields(
        { name: 'Pseudo 🔠:', value: message.author.username , inline: true },
        { name: 'ID 🆔:', value: message.author.id , inline: true },
        { name: 'Avatar 🖼️: ', value: (message.author.displayAvatarURL()), inline: true },
        { name: 'Compte crée le 📅:', value: message.author.createdAt , inline: true },
        { name: 'Tag #️⃣:', value: message.author.tag , inline: true },
	)
    
    .setImage((message.author.displayAvatarURL()))
    .setTimestamp()
    .setFooter('Userinfo by LikeBot', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png');
    message.delete();
    message.channel.send(userEmbed);
    
    
    
    }


    //linvite
    if(message.content.startsWith("_invite")){
    
    
        const inviteEmbed = new Discord.MessageEmbed()
    .setColor('#FEE300')
    .setTitle('Tien, '+ message.author.username + ' voici le lien 🖇:' )
    .setURL('https://discord.com/api/oauth2/authorize?client_id=725211522292383784&permissions=8&scope=bot')
    .setAuthor('LikeBot - Invite', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png')
    .setDescription('Lien d\'invitation')
    .setThumbnail()
    .addFields(
        { name: 'Lien :',value: 'https://discord.com/api/oauth2/authorize?client_id=725211522292383784&permissions=8&scope=bot'},
        { name: 'Serveur Support :',value: 'https://discord.gg/cf3S77g'},
	)
    
    .setImage()
    .setTimestamp()
    .setFooter('Invite by LikeBot', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png');
    message.delete();
    message.channel.send(inviteEmbed);
    
    
    
    }

    //lah
    if(message.content == prefix + "ah"){
        message.delete();
        message.channel.send("https://tenor.com/view/ah-denis-brognart-tf1-koh-gif-7256068");
    }


    //lcheh
    if(message.content == prefix + "cheh"){
        message.delete();
        message.channel.send("https://tenor.com/view/conasse-french-dans-ta-gueule-gif-12369176");
    }

    //lcoffin-dance
    if(message.content == prefix + "coffin-dance"){
        message.delete();
        message.channel.send("https://tenor.com/view/dancing-coffin-coffin-dance-funeral-funny-farewell-gif-16737844");
    }

    //lah
    if(message.content == prefix + "nyancat"){
        message.delete();
        message.channel.send("https://gph.is/Vwznl1");
    }


    //lah
    if(message.content == prefix + "crazynet"){
        message.delete();
        message.channel.send("https://gph.is/1a3X5tQ");
    }


    if(message.content.startsWith("_serverlist")){

        const listEmbed = new Discord.MessageEmbed()
	.setColor('#FEE300')
    .setTitle('ServerList')
	.setURL('https://sites.google.com/view/likebot/accueil')
	.setAuthor('LikeBot - ServerList', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png')
	.setDescription('ServerList')
	.setThumbnail()
	.addFields(
		{ name: 'Liste des serveurs :', value: (Client.guilds.cache.map(r => r.name + ` | **${r.memberCount}** membres`)), inline: true },
	)
	.setImage()
	.setTimestamp()
    .setFooter('Serverlist by LikeBot', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png');
    message.delete();
    message.channel.send(listEmbed);



    }

 
    

    if(message.content.startsWith("_serverstats")){
        let onlines = message.guild.members.cache.filter(({ presence }) => presence.status !== "offline").size;
        let totalmembers = message.guild.members.cache.size;
        let totalbots = message.guild.members.cache.filter(member => member.user.bot).size;
        let nameserver = (`${message.guild.name}`)

        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#FEE300')
    .setTitle('Statistiques du serveur '+ nameserver )
	.setURL('https://sites.google.com/view/likebot/accueil')
	.setAuthor('LikeBot - Stats', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png')
	.setDescription('Voici les stats')
	.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLTxkNp_X8pay5GR26ZdGc_HDxkgiemPtxGQ&usqp=CAU')
	.addFields(
		{ name: 'Nombre total de membres 👨:', value: totalmembers, inline: true },
		{ name: 'Membres connectés 🎮:', value: onlines, inline: true },
        { name: 'Nombre de bots 🤖:', value: totalbots, inline: true },
        { name: 'Nom du serveur :', value: nameserver, inline: true },
	)
	.setImage()
	.setTimestamp()
    .setFooter('Stats by LikeBot', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png');
    message.delete();
    message.channel.send(exampleEmbed);



    }





    if(message.content.startsWith("_help")){
    
    
        const helpEmbed = new Discord.MessageEmbed()
    .setColor('#FEE300')
    .setTitle('Commandes du bot :')
    .setURL('https://sites.google.com/view/likebot/accueil')
    .setAuthor('LikeBot - Help - V 1.4', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png')
    .setDescription('Voici les commandes du bot')
    .setThumbnail()
    .addFields(
        { name: '__Modération 👮__', value: '`_ban _kick`' },
		{ name: '__Autres ♾__', value: '`_invite _help _userinfo _serverstats _serverlist`' },
		//{ name: '__Fun 🎉__', value: '`Aucune commande définie`', inline: true },
        { name: '__Memes 👍__', value: '`_ah _coffin-dance _crazynet _nyancat _cheh _troll`', inline: true },
        { name: 'Serveur Support :', value: 'https://discord.gg/cf3S77g', inline: true },
	)
    
    .setImage()
    .setTimestamp()
    .setFooter('Help by LikeBot', 'https://media.discordapp.net/attachments/721961000080900148/726298135168548973/704695162697285752.png');
    message.delete();
    message.channel.send(helpEmbed);
    
    
    
    }


    if(message.content == prefix + "troll"){
        message.delete();
        message.channel.send("https://tenor.com/view/troll-stick-figure-dancing-gif-5259835");
    }
    

    
});





Client.login("process.env.TOKEN")
