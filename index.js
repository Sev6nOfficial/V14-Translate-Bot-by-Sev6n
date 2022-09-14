const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle, SelectMenuBuilder } = require('discord.js');
const translate = require("@iamtraction/google-translate")
module.exports = {
	name: 'translate',
  description: "Translates any text into English",
  usage: "translate",
  category: "freemium",
	userPerms: ['VIEW_CHANNELS', 'SEND_MESSAGES],
	botPerms: ['ADMINISTRATOR'],
	cooldown: 3,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ChatInput,
   options: [
		{
			name: "text",
			description: "The Sentence To Translate",
			type: 3,
			required: true,
		}, 
   ],
  
	run: async (client, interaction) => {
 
    try{ 
       const query = interaction.options.getString("text");
      const translated = await translate(query, { to: 'en' })

        const transEmbed = new EmbedBuilder()
            
           .setColor(0x0099FF)
          .addFields(
		{ name: 'Text To Translate', value: "```" + query + "```" },
		{ name: 'Translated Text', value: "```" + translated.text + "```" },
		
	)
            .setTimestamp()
      	.setFooter({ text: 'Milenium - The Best Discord Bot Premium alternative since december 2021!', iconURL: 'iconurl' });

        interaction.reply({ embeds: [transEmbed] })
    } catch (error){
      client.slash_err(client, interaction, error);
    }
	}
};
