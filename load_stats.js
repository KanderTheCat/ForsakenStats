//STATS
const StatsFile = `
Joined Forsaken - 02.07.2025 (Only got badge from joining friend)
Started playing Forsaken - 27.09.2025
Time Played: 33 days, 22 hours, 11 minutes and 37 seconds

Survivor Wins: 3861
Survivor Losses: 3300
Objectives Completed As Survivor: 10376

Killer Wins: 1800
Killer Losses: 561
Total Kills: 11501

Player Points ($): 69589$
Net Worth: 942137$
R$ Spent: 0 R$
`;

//KILLERS
const KillerFile = `
Slasher, Slasher.png, 258
C00lkidd, C00lkidd.png, 213
John Doe, JohnDoe.png, 279
Noli, Noli.png, 146
1x1x1x1, 1x1x1x1.png, 221
Guest 666, Guest666.png, 155
Nosferatu, Nosferatu.png, 156
`;

//SURVIVORS
const SurvivorFile = `
Shedletsky, Shedletsky.png, 153
Elliot, Elliot.png, 138
Noob, Noob.png, 203
Jane Doe, JaneDoe.png, 101
Builderman, Builderman.png, 101
007n7, 007n7.png, 104
Two Time, TwoTime.png, 341
Guest 1337, Guest1337.png, 125
Taph, Taph.png, 202
Dusekkar, Dusekkar.png, 105
Veeronica, Veeronica.png, 201
Chance, Chance.png, 102
`;

function Stats(TargetElement, DataText) {
    const lines = DataText.split(/\r?\n/).map(line => line.trim());
    let HtmlOutput = '\n';
    lines.forEach(line => {
        HtmlOutput += (line === '') ? `<div></div>\n` : `<p>${line}</p>\n`;
    });
    TargetElement.innerHTML = `\n <h2>My Stats</h2>` + HtmlOutput;
}

function Characters(TargetElement, DataText, FolderName) {
    const lines = DataText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let HtmlOutput = '\n';
    lines.forEach(line => {
        const [name, render, level] = line.split(',').map(item => item.trim());
        HtmlOutput +=
            `<section>
                <img src="assets/renders/${FolderName}/${render}" alt="${name}">
                <div>
                    <h3>${name}</h3>
                    <h3>Level: ${level}</h3>
                </div>
            </section>\n`;
    });
    TargetElement.innerHTML = HtmlOutput;
}

window.addEventListener('DOMContentLoaded', () => {
    const AsideTag = document.querySelector('aside');
    const KillerTag = document.getElementById('killers');
    const SurvivorTag = document.getElementById('survivors');
    if (AsideTag && StatsFile) {
        Stats(AsideTag, StatsFile);
    }
    if (KillerTag && KillerFile) {
        Characters(KillerTag, KillerFile, 'killers');
    }
    if (SurvivorTag && SurvivorFile) {
        Characters(SurvivorTag, SurvivorFile, 'survivors');
    }
});
