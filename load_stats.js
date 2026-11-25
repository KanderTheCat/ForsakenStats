//STATS
const StatsFile = `
Joined Forsaken - 02.07.2025 (Played one round cause friend told me to play, then left after lol. Also <a href="https://www.youtube.com/watch?v=5bo2k4DvEng">the video of it</a>)
Started playing Forsaken - 27.09.2025
Time Played: 49 days, 22 hours, 42 minutes and 54 seconds
Achievements: 111/111

Survivor Wins: 5532
Survivor Losses: 4768
Objectives Completed As Survivor: 14107

Killer Wins: 2680
Killer Losses: 689
Total Kills: 16474

Player Points ($): 64558$
Net Worth: 1311114$
R$ Spent: 1646 R$
`;

//GAMEPASSES
const GamepassFile = `
V.I.P, VIP.png
2x Emotes, 2xEmotes.png
Spec Ops Pack, SpecOpsPack.png
Azure Pack, AzurePack.png
Skin Pack #3, SkinPack3.png
Skin Pack #4, SkinPack4.png
Emote Pack #1, EmotePack1.png
Emote Pack #2, EmotePack2.png
Emote Pack #3, EmotePack3.png
Viral Emote Pack #1, ViralEmotePack1.png
Halloween Music Emote Pack, HalloweenMusicEmotePack.png
Forsaken Boombox, ForsakenBoombox.png
Golden Curse (Boombox), GoldenCurse.png
Spectre (Boombox), Spectre.png
Underground Cabin (Playlist), UndergroundCabin.png
`;

//KILLERS
const KillerFile = `
c00lkidd, c00lkidd.png, 270
Slasher, Slasher.png, 300
John Doe, JohnDoe.png, 303
Noli, Noli.png, 204
1x1x1x1, 1x1x1x1.png, 252
Guest 666, Guest666.png, 196
Nosferatu, Nosferatu.png, 228
Azure, Azure.png, 131
Stalker, Stalker.png, null
`;

//SURVIVORS
const SurvivorFile = `
Elliot, Elliot.png, 144
Noob, Noob.png, 251
Shedletsky, Shedletsky.png, 166
Jane Doe, JaneDoe.png, 129
007n7, 007n7.png, 158
Builderman, Builderman.png, 123
Guest 1337, Guest1337.png, 154
Two Time, TwoTime.png, 439
Dusekkar, Dusekkar.png, 157
Taph, Taph.png, 227
Helperbot, Helperbot.png, 101
Veeronica, Veeronica.png, 214
Chance, Chance.png, 117
Ringmaster, Ringmaster.png, null
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
