//STATS
const StatsFile = `
Joined Forsaken - 02.07.2025 (Only got badge from joining friend)
Started playing Forsaken - 27.09.2025
Time Played: 35 days, 14 hours, 56 minutes and 36 seconds

Survivor Wins: 4065
Survivor Losses: 3430
Objectives Completed As Survivor: 10806

Killer Wins: 1894
Killer Losses: 574
Total Kills: 12044

Player Points ($): 13506$
Net Worth: 989371$
R$ Spent: 0 R$
`;

//GAMEPASSES
const GamepassFile = `
V.I.P, VIP.png
2x Emotes, 2xEmotes.png
Spec Ops Pack, SpecOpsPack.png
Emote Pack #1, EmotePack1.png
`;

//KILLERS
const KillerFile = `
Slasher, Slasher.png, 266
C00lkidd, C00lkidd.png, 217
John Doe, JohnDoe.png, 282
Noli, Noli.png, 147
1x1x1x1, 1x1x1x1.png, 227
Guest 666, Guest666.png, 156
Nosferatu, Nosferatu.png, 171
Azure, Azure.png, 0
`;

//SURVIVORS
const SurvivorFile = `
Shedletsky, Shedletsky.png, 154
Elliot, Elliot.png, 138
Noob, Noob.png, 203
Jane Doe, JaneDoe.png, 101
Builderman, Builderman.png, 103
007n7, 007n7.png, 104
Two Time, TwoTime.png, 359
Guest 1337, Guest1337.png, 128
Taph, Taph.png, 205
Dusekkar, Dusekkar.png, 116
Veeronica, Veeronica.png, 201
Chance, Chance.png, 102
`;

function Stats(TargetElement, DataText) {
    const lines = DataText.split(/\r?\n/).map(line => line.trim());
    let HtmlOutput = '\n';
    lines.forEach(line => {
        HtmlOutput += (line === '') ? `<div class="white_line"></div>\n` : `<p>${line}</p>\n`;
    });
    TargetElement.innerHTML = `\n <h2>My Stats</h2>` + HtmlOutput;
}

function Gamepasses(TargetElement, DataText) {
    const lines = DataText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let HtmlOutput = '\n';
    lines.forEach(line => {
        const [name, icon, level] = line.split(',').map(item => item.trim());
        HtmlOutput +=
            `<section>
                <img src="assets/gamepasses/${icon}" alt="${name}">
                <div>
                    <h4>${name}</h4>
                </div>
            </section>\n`;
    });
    TargetElement.innerHTML = `\n <h2>Owned Gamepasses</h2><div class="white_line"></div>` + HtmlOutput;
}

function Levels(TargetElement, DataText, FolderName) {
    const lines = DataText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let HtmlOutput = '\n';
    lines.forEach(line => {
        const [name, render, level] = line.split(',').map(item => item.trim());
        HtmlOutput +=
            `<section>
                <img src="assets/renders/${FolderName}/${render}" onerror="this.src='assets/renders/PlaceholderCharacter.png';" alt="${name}">
                <div>
                    <h3>${name}</h3>
                    <h3>Level: ${level}</h3>
                    <button type="button" onclick="ToSkins('${name}')">Skins</button>
                </div>
            </section>\n`;
    });
    TargetElement.innerHTML = HtmlOutput;
}

window.addEventListener('DOMContentLoaded', () => {
    const StatsTag = document.getElementById('stats');
    const GamepassTag = document.getElementById('gamepasses');
    const KillerTag = document.getElementById('killers');
    const SurvivorTag = document.getElementById('survivors');
    Stats(StatsTag, StatsFile);
    Gamepasses(GamepassTag, GamepassFile);
    Levels(KillerTag, KillerFile, 'killers');
    Levels(SurvivorTag, SurvivorFile, 'survivors');
});
