import { ActivityType, Client, ClientOptions, REST, Routes } from "discord.js";
import * as path from "path";
import * as fs from "fs";

const config = require("./config.json");
console.log(config);

console.log("Bot is starting...");

const client = new Client({
    intents: [ "MessageContent", "GuildMessages", "Guilds" ]
});

client.user?.setStatus("dnd");
client.user?.setPresence({ activities: [{name: "games on ChoacuryOS", type: ActivityType.Playing}]});

const commands = [];
const _commands: any[] = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON());
        _commands.push({ name: command.data.name, execute: command.execute });
    }
}

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(config.clientId, config.guildId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    console.log(_commands);

    for (let i = 0; i < _commands.length; i++) {
        if(_commands[i].name == interaction.commandName) {
            await _commands[i].execute(interaction);
            return;
        }
    }

    interaction.reply("There was an error");
});


client.login(config.token);