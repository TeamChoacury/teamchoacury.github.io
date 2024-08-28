import { SlashCommandBuilder } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Update the website files (Authorised developers only)'),
    async execute(interaction: any) {
        await interaction.reply('Updating the website files...');
    },
};