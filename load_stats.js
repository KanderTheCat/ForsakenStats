//STATS
const StatsFile = `
Joined Forsaken - 02.07.2025 (Played one round cause friend told me to play, then left after lol. Also <a href="https://www.youtube.com/watch?v=5bo2k4DvEng">the video of it</a>)
Started playing Forsaken - 27.09.2025
Time Played: 42 days, 19 hours, 21 minutes and 45 seconds
Achievements: 109/110

Survivor Wins: 4893
Survivor Losses: 4023
Objectives Completed As Survivor: 12921

Killer Wins: 2283
Killer Losses: 640
Total Kills: 14315

Player Points ($): 245$
Net Worth: 1173199$
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
C00lkidd, C00lkidd.png, 236
Slasher, Slasher.png, 276
John Doe, JohnDoe.png, 296
Noli, Noli.png, 166
1x1x1x1, 1x1x1x1.png, 240
Guest 666, Guest666.png, 175
Nosferatu, Nosferatu.png, 201
Azure, Azure.png, 117
Stalker, stalker_joke.png, -99
`;

//SURVIVORS
const SurvivorFile = `
Shedletsky, Shedletsky.png, 163
Elliot, Elliot.png, 141
Noob, Noob.png, 228
Jane Doe, JaneDoe.png, 119
Builderman, Builderman.png, 114
007n7, 007n7.png, 149
Two Time, TwoTime.png, 403
Guest 1337, Guest1337.png, 132
Taph, Taph.png, 219
Dusekkar, Dusekkar.png, 145
Veeronica, Veeronica.png, 211
Chance, Chance.png, 113
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
