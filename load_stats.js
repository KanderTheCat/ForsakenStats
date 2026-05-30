//STATS
const StatsFile = `
Joined Forsaken - 02.07.2025 (Only got badge from joining friend)
Started playing Forsaken - 27.09.2025
Time Played: 34 days, 4 hours, 46 minutes and 13 seconds

Survivor Wins: 3892
Survivor Losses: 3322
Objectives Completed As Survivor: 10451

Killer Wins: 1815
Killer Losses: 563
Total Kills: 11587

Player Points ($): 74587$
Net Worth: 949385$
R$ Spent: 0 R$
`;

//KILLERS
const KillerFile = `
Slasher, Slasher.png, 261
C00lkidd, C00lkidd.png, 213
John Doe, JohnDoe.png, 279
Noli, Noli.png, 146
1x1x1x1, 1x1x1x1.png, 222
Guest 666, Guest666.png, 155
Nosferatu, Nosferatu.png, 157
`;

//SURVIVORS
const SurvivorFile = `
Shedletsky, Shedletsky.png, 154
Elliot, Elliot.png, 138
Noob, Noob.png, 203
Jane Doe, JaneDoe.png, 101
Builderman, Builderman.png, 102
007n7, 007n7.png, 104
Two Time, TwoTime.png, 344
Guest 1337, Guest1337.png, 126
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
