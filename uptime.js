// Replace "bot" with your client identifier.
let days = Math.floor(bot.uptime / 86400000);
let hours = Math.floor(bot.uptime / 3600000) % 24;
let minutes = Math.floor(bot.uptime / 60000) % 60;
let seconds = Math.floor(bot.uptime / 1000) % 60;

// Regular commands, such as s!uptime
message.reply(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);



// Interaction commands

if (interaction.commandName === 'uptime') {
		await interaction.reply({ content: `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`, ephemeral: true });
	}
// Set ephemeral to false if you DONT want a "Only you can see this" message
