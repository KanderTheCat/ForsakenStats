//STATS
const StatsFile = `
Joined Forsaken - 02.07.2025 (Played one round cause friend told me to play, then left after lol. Also <a href="https://www.youtube.com/watch?v=5bo2k4DvEng">the video of it</a>)
Started playing Forsaken - 27.09.2025
Time Played: 42 days, 8 hours, 15 minutes and 56 seconds
Achievements: 109/110

Survivor Wins: 4840
Survivor Losses: 3984
Objectives Completed As Survivor: 12786

Killer Wins: 2259
Killer Losses: 636
Total Kills: 14167

Player Points ($): 91708$
Net Worth: 1163135$
R$ Spent: 1297 R$
`;

//GAMEPASSES
const GamepassFile = `
V.I.P, VIP.png
2x Emotes, 2xEmotes.png
Spec Ops Pack, SpecOpsPack.png
Emote Pack #1, EmotePack1.png
Azure Pack, AzurePack.png
Emote Pack #2, EmotePack2.png
Viral Emote Pack #1, ViralEmotePack1.png
Skin Pack #3, SkinPack3.png
Forsaken Boombox, ForsakenBoombox.png
Boombox - Golden Curse, GoldenCurse.png
Boombox - Spectre, Spectre.png
Playlist - Underground Cabin, UndergroundCabin.png
`;

//KILLERS
const KillerFile = `
C00lkidd, C00lkidd.png, 233
Slasher, Slasher.png, 275
John Doe, JohnDoe.png, 296
Noli, Noli.png, 165
1x1x1x1, 1x1x1x1.png, 239
Guest 666, Guest666.png, 173
Nosferatu, Nosferatu.png, 200
Azure, Azure.png, 114
Stalker, stalker_joke.png, -99
`;

//SURVIVORS
const SurvivorFile = `
Shedletsky, Shedletsky.png, 162
Elliot, Elliot.png, 141
Noob, Noob.png, 220
Jane Doe, JaneDoe.png, 119
Builderman, Builderman.png, 112
007n7, 007n7.png, 149
Two Time, TwoTime.png, 403
Guest 1337, Guest1337.png, 131
Taph, Taph.png, 217
Dusekkar, Dusekkar.png, 144
Veeronica, Veeronica.png, 210
Chance, Chance.png, 112
Ringmaster, ringmaster_joke.gif, -99
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
