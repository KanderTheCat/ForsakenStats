/*
Template: 
    X, 1, 0px 0px, true
        X, 1, 150px 0px, true
        X, 1, 300px 0px, true
        X, 1, 450px 0px, true
        X, 1, 600px 0px, true //5
        X, 1, 750px 0px, true
        X, 1, 900px 0px, true
        X, 1, 1050px 0px, true
        X, 1, 1200px 0px, true
        X, 1, 1350px 0px, true //10
        X, 1, 1500px 0px, true
        X, 1, 1650px 0px, true
        X, 1, 1800px 0px, true
        X, 1, 0px 150px, true
        X, 1, 150px 150px, true //15
        X, 1, 300px 150px, true
        X, 1, 450px 150px, true
        X, 1, 600px 150px, true
        X, 1, 750px 150px, true
        X, 1, 900px 150px, true //20
        X, 1, 1050px 150px, true
        X, 1, 1200px 150px, true
        X, 1, 1350px 150px, true
        X, 1, 1500px 150px, true
        X, 1, 1650px 150px, true //25
        X, 1, 1800px 150px, true
        X, 1, 0px 300px, true
        X, 1, 150px 300px, true
        X, 1, 300px 300px, true
        X, 1, 450px 300px, true //30
        X, 1, 600px 300px, true
        X, 1, 750px 300px, true
        X, 1, 900px 300px, true
        X, 1, 1050px 300px, true
        X, 1, 1200px 300px, true //35
        X, 1, 1350px 300px, true
        X, 1, 1500px 300px, true
        X, 1, 1650px 300px, true
        X, 1, 1800px 300px, true
        X, 1, 0px 450px, true //40
        X, 1, 150px 450px, true
        X, 1, 300px 450px, true
        X, 1, 450px 450px, true
        X, 1, 600px 450px, true
        X, 1, 750px 450px, true //45
        X, 1, 900px 450px, true
        X, 1, 1050px 450px, true
        X, 1, 1200px 450px, true
        X, 1, 1350px 450px, true
        X, 1, 1500px 450px, true //50
        X, 1, 1650px 450px, true
        X, 1, 1800px 450px, true
        X, 1, 0px 600px, true
        X, 1, 150px 600px, true
        X, 1, 300px 600px, true //55
        X, 1, 450px 600px, true
        X, 1, 600px 600px, true
        X, 1, 750px 600px, true
        X, 1, 900px 600px, true
        X, 1, 1050px 600px, true //60
        X, 1, 1200px 600px, true
        X, 1, 1350px 600px, true
        X, 1, 1500px 600px, true
        X, 1, 1650px 600px, true
        X, 1, 1800px 600px, true //65
        X, 1, 0px 750px, true
        X, 1, 150px 750px, true
        X, 1, 300px 750px, true
        X, 1, 450px 750px, true
        X, 1, 600px 750px, true
        X, 1, 750px 750px, true //70
        X, 1, 900px 750px, true
        X, 1, 1050px 750px, true
        X, 1, 1200px 750px, true
        X, 1, 1350px 750px, true
        X, 1, 1500px 750px, true //75
        X, 1, 1650px 750px, true
        X, 1, 1800px 750px, true

Free spots:
    Shedletsky: 
        1350px 300px (Memoriam)
    Noob:
        1050px 300px (Buttermilk)

SKINS:
8. Milestone
7. Legacy Milestone
6. Exclusive
5. Gamepass
4. Limited Time/Collab
3. Event
    3_1. Christmas
    3_2. Halloween
    3_3. Spring
    3_4. Summer
    3_5. April Fools
    3_6. 4th July
2. Achievements/Special requirement (like awesome ninja shed)
1. Shop Skins
    1_1. Removed Shop Skins

There are 13 skins in each row, ends at 1800px
*/

const SkinFile = {
    "Shedletsky":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        VIP, 5, 600px 0px, true
        Earth Day, 5, 750px 0px, false
        The Guide, 4, 900px 0px, true
        Turking, 4, 1050px 0px, true
        Targetman, 4, 1200px 0px, true
        Bloxy, 4, 1350px 0px, false
        Anniversary, 3, 1500px 0px, true
        Holiday Hen, 3_1, 1650px 0px, true
        Santa, 3_1, 1800px 0px, true
        Tree Cutter, 3_1, 0px 150px, true
        Zombieletsky, 3_2, 150px 150px, true
        Angel of Death, 3_2, 300px 150px, true
        The Guy, 3_4, 450px 150px, true
        Buster, 3_4, 600px 150px, true
        Voice Acted, 3_5, 750px 150px, true
        Independence Chicken, 3_6, 900px 150px, true
        Awesome Ninja, 2, 1050px 150px, true
        Modern, 1, 1200px 150px, true
        Fencer, 1_1, 1350px 150px, true
        Classic, 1, 1500px 150px, true
        Street Stunter, 1_1, 1650px 150px, true
        "John Forsaken", 1, 1800px 150px, true
        Chicken, 1, 0px 300px, true
        Whales, 1_1, 150px 300px, true
        Chef, 1, 300px 300px, true
        Turkey Day, 1_1, 450px 300px, true
        BrightEyes, 1, 600px 300px, true
        Fire Ninja, 1, 750px 300px, true
        Light Ninja, 1, 900px 300px, true
        Shadow Ninja, 1, 1050px 300px, true
        Mcgillavry, 1, 1200px 300px, true
        
        yksteldehS, 1_1, 1500px 300px, true
        Skyfleet, 1_1, 1650px 300px, true
        Vampire, 1, 1800px 300px, true
        Hotdog, 1, 0px 450px, true
        The Heartbroken, 1, 150px 450px, true
        Ironclad, 1_1, 300px 450px, true
        Olivia, 1, 450px 450px, true
        Figures, 1, 600px 450px, true
        Knight, 1_1, 750px 450px, true
        Rockstar, 1, 900px 450px, true
        Pirate, 1, 1050px 450px, true
        Sunderland, 1, 1200px 450px, true
        Y2K, 1, 1350px 450px, true
        Rockin', 1, 1500px 450px, true
        Fischer, 1, 1650px 450px, true
        luisgamercool23, 1, 1800px 450px, true
        Bloodedge, 1_1, 0px 600px, true
        Buff, 1, 150px 600px, true
        Retro, 1, 300px 600px, true
        Toon, 1, 450px 600px, true
        Vagabond, 1, 600px 600px, true
        Snyfort, 1, 750px 600px, true
        Specialist, 1, 900px 600px, true
        Guardian Angel, 1_1, 1050px 600px, true
        Telamon, 1, 1200px 600px, true
        Mamaletsky, 1_1, 1350px 600px, true
        5 More Shedletskys, 1, 1500px 600px, true
        10 More Shedletskys, 1, 1650px 600px, true
        Golden, 1, 1800px 600px, true
    `,
    "Elliot":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Culinary Commander, 5, 600px 0px, true
        VIP, 5, 750px 0px, true
        Ovenbot, 5, 900px 0px, true
        Treehugger, 5, 1050px 0px, false
        Spirit Animal, 4, 1200px 0px, true
        Mr. Meyer, 4, 1350px 0px, true
        Chef, 4, 1500px 0px, true
        Monster, 4, 1650px 0px, true
        Medic, 4, 1800px 0px, true
        Anniversary, 3, 0px 150px, true
        Rudolph, 3_1, 150px 150px, true
        Gingerbrea-delivery, 3_1, 300px 150px, true
        Single-Handed Elf, 3_1, 450px 150px, true
        Vampire, 3_2, 600px 150px, true
        Brainz Dizpatch, 3_2, 750px 150px, true
        Mercurial, 3_3, 900px 150px, true
        Voice Acted, 3_5, 1050px 150px, true
        Firework Fanatic, 3_6, 1200px 150px, true
        Zombie Cat, 2, 1350px 150px, true
        Legacy Paperpal, 2, 1500px 150px, true
        Lulu, 1, 1650px 150px, true
        Milkman, 1, 1800px 150px, true
        Supplier, 1_1, 0px 300px, true
        Pizza Man, 1, 150px 300px, true
        Barista, 1_1, 300px 300px, true
        Bobo, 1, 450px 300px, true
        Cake, 1_1, 600px 300px, true
        Two Sided, 1, 750px 300px, true
        Uni, 1_1, 900px 300px, true
        Bandit, 1_1, 1050px 300px, true
        Casual, 1, 1200px 300px, true
        Paperpal, 1, 1350px 300px, true
        Baker, 1, 1500px 300px, true
        Manager, 1, 1650px 300px, true
        Gardener, 1_1, 1800px 300px, true
        Neo, 1, 0px 450px, true
        Shopkeeper (CI), 1, 150px 450px, true
        Cashier, 1, 300px 450px, true
        Signature Recipe, 1, 450px 450px, true
        Toy, 1_1, 600px 450px, true
        Caretaker, 1, 750px 450px, true
        Picnic Date, 1, 900px 450px, true
        Scenecore, 1, 1050px 450px, true
        Bumble Bee, 1, 1200px 450px, true
        Celebration, 1_1, 1350px 450px, true
        Jordan, 1, 1500px 450px, true
        Sally, 1, 1650px 450px, true
        Retro, 1, 1800px 450px, true
        Summer, 1_1, 0px 600px, true
        Trusty Crewmate, 1, 150px 600px, true
        Alien, 1, 300px 600px, true
        Courier, 1_1, 450px 600px, true
        Dued1, 1, 600px 600px, true
        Medic (Isle), 1, 750px 600px, true
        Nyan, 1, 900px 600px, true
        Supermarket, 1_1, 1050px 600px, true
        Usher, 1_1, 1200px 600px, true
        Messanger, 1, 1350px 600px, true
        Ellioto Spaghetti, 1, 1500px 600px, true
        Parlor Gubby, 1, 1650px 600px, true
        Pastry Chef, 1, 1800px 600px, true
        Series, 1_1, 0px 750px, true
        Shopkeeper, 1_1, 150px 750px, true
        Tom, 1_1, 300px 750px, true
        Chef Gecko, 1_1, 450px 750px, true
        Master Chef, 1, 600px 750px, true
        Dog, 1, 750px 750px, true
        Monstar Merchant, 1, 900px 750px, true
        Friend, 1, 1050px 750px, true
        Fish Dealer, 1, 1200px 750px, true
        Gummy, 1, 1350px 750px, true
    `,
    "Noob":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Legacy Milestone IV, 7, 600px 0px, true
        Legacy Milestone III, 7, 750px 0px, true
        Legacy Milestone II, 7, 900px 0px, true
        Legacy Milestone I, 7, 1050px 0px, true
        VIP, 5, 1200px 0px, true
        Astrocat, 5, 1350px 0px, true
        Runaway, 4, 1350px 150px, true, //THIS IS MOVED
        Anniversary, 3, 1500px 0px, true
        Cold Outside, 3_1, 1650px 0px, true
        Elf, 3_1, 1800px 0px, true
        Tangled Lights, 3_1, 0px 150px, true
        Low-Effort Phantom, 3_2, 150px 150px, true
        Scarecrow, 3_2, 300px 150px, true
        Easter, 3_3, 450px 150px, true
        Scaredey, 3_4, 600px 150px, true
        Voice Acted, 3_5, 750px 150px, true
        American Sweetheart, 3_6, 900px 150px, true
        Sixer, 2, 1050px 150px, true
        Wrong, 1, 1200px 150px, true, //MOVED BELOW
        Inverted, 1_1, 1500px 150px, true, //MOVED ABOVE
        Trapped, 1, 1650px 150px, true
        Fancy, 1_1, 1800px 150px, true
        Cadi, 1_1, 0px 300px, true
        Combat Dummy, 1, 150px 300px, true
        Classic, 1, 300px 300px, true
        Nooby, 1, 450px 300px, true
        Steampunk, 1_1, 600px 300px, true
        Bloxy, 1, 750px 300px, true
        Pajama Pirate, 1, 900px 300px, true
        
        Ennakon, 1_1, 1200px 300px, true
        GASA4 Player, 1_1, 1350px 300px, true
        Little Nightmare, 1_1, 1500px 300px, true
        Spiders, 1, 1650px 300px, true
        Willyandgaming, 1_1, 1800px 300px, true
        Worker, 1, 0px 450px, true
        Retro, 1, 150px 450px, true
        Subject_1, 1, 300px 450px, true
        Supa Fly, 1_1, 450px 450px, true
        Supa Dupa Fly, 1_1, 600px 450px, true
        Scoutpot, 1_1, 750px 450px, true
        Toy, 1_1, 900px 450px, true
        Jard, 1, 1050px 450px, true
        Night Out, 1, 1200px 450px, true
        Taunt, 1, 1350px 450px, true
        Lucas, 1_1, 1500px 450px, true
        Innovation, 1_1, 1650px 450px, true
        Spotter, 1, 1800px 450px, true
        Pride, 1, 0px 600px, true
        Campsite Victims, 1, 150px 600px, true
        Roommate, 1, 300px 600px, true
        Sunny Day, 1, 450px 600px, true
        Token, 1, 600px 600px, true
        Genesis, 1, 750px 600px, true
        Outlawed, 1, 900px 600px, true
        Shallow End, 1, 1050px 600px, true
        Calico, 1, 1200px 600px, true
        FUDZ, 1, 1350px 600px, true
    `,
    "Jane Doe":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        MLG, 5, 300px 300px, true, //THIS MOVED
        Retro Defense, 4, 600px 0px, true
        Sleepwalker23, 4, 750px 0px, true
        Killer Rabbit, 3_4, 900px 0px, true
        Casual, 1_1, 1050px 0px, true
        Contrast, 1, 1200px 0px, true
        Masque, 1, 1350px 0px, true
        Heavy Sleeper, 1, 1500px 0px, true
        Chilling Pirate, 1, 1650px 0px, true
        Lampshade, 1, 1800px 0px, true
        Investigator, 1, 0px 150px, true
        Apocalypse, 1, 150px 150px, true
        Business, 1, 300px 150px, true
        Investigator Iris, 1, 450px 150px, true
        Blossom, 1_1, 600px 150px, true
        Elegant, 1, 750px 150px, true
        Doe, 1, 900px 150px, true
        Office, 1, 1050px 150px, true
        Musicist, 1, 1200px 150px, true
        Noir, 1, 1350px 150px, true
        Divine Flame, 1, 1500px 150px, true
        Musketeer, 1_1, 1650px 150px, true
        Calico, 1, 1800px 150px, true
        Retro, 1, 0px 300px, true
        Victorian, 1, 150px 300px, true
    `,
    "Builderman":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Green Day, 5, 600px 0px, false
        Innovator, 4, 750px 0px, false
        Technician, 4, 900px 0px, true
        Guiltridden, 4, 1050px 0px, true
        Buildersnowman, 3_1, 1200px 0px, true
        Festive, 3_1, 1350px 0px, true
        Snowball Fight Specialist, 3_1, 1500px 0px, true
        Jingle Edition, 3_1, 1650px 0px, true
        Mad Scientist, 3_2, 1800px 0px, true
        Egghead, 3_3, 0px 150px, true
        Voice Acted, 3_5, 150px 150px, true
        Engineer, 2, 300px 150px, true
        Modern, 1, 450px 150px, true
        Paintball, 1_1, 600px 150px, true
        Cool Guy, 1_1, 750px 150px, true
        Skeletal, 1, 900px 150px, true
        Agent, 1, 1050px 150px, true
        Bazooka, 1, 1200px 150px, true
        Builder's Club, 1, 1350px 150px, true
        David, 1, 1500px 150px, true
        Party, 1_1, 1650px 150px, true
        Steampunk, 1_1, 1800px 150px, true
        Tester, 1, 0px 300px, true
        Construction Worker, 1_1, 150px 300px, true
        Fixer Upper, 1, 300px 300px, true
        JJ5x5, 1, 450px 300px, true
        Highschool, 1, 600px 300px, true
        Outrageous Builder's Club, 1, 750px 300px, true
        Space Pirate, 1, 900px 300px, true
        Turbo Builder's Club, 1, 1050px 300px, true
        BSOD, 1, 1200px 300px, true
        ZDAY, 1_1, 1350px 300px, true
        Toy, 1_1, 1500px 300px, true
        Astronaut, 1, 1650px 300px, true
        Bob, 1, 1800px 300px, true
        Orinthian Architect, 1, 0px 450px, true
        Cat Rocker, 1, 150px 450px, true
        Retro, 1, 300px 450px, true
        Carepad, 1, 450px 450px, true
        BrawlR Builder, 1, 600px 450px, true
        Yard Defender, 1_1, 750px 450px, true
        Oh Noes, 1, 900px 450px, true
        Operator, 1, 1050px 450px, true
        Punk, 1_1, 1200px 450px, true
        Stalkalek, 1, 1350px 450px, true
        M4CH1N4, 1, 1500px 450px, true
        dragondudes3, 1, 1650px 450px, true
        Astro Architect, 1, 1800px 450px, true
        C.H.R.I.S., 1, 0px 600px, true
        Gadgeteer 2700, 1, 150px 600px, true
        Mad Scientist Rat, 1, 300px 600px, true
        Y2K, 1, 450px 600px, true
    `,
    "007n7":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Clean Gent, 5, 600px 0px, false
        Red-Nosed Reindeer, 3_1, 750px 0px, true
        Reindeer, 3_1, 900px 0px, true
        Toasty Marshmallow, 3_1, 1050px 0px, true
        Count Duble'O VII, 3_2, 1200px 0px, true
        Yolker, 3_3, 1350px 0px, true
        Swap, 3_4, 1500px 0px, true
        Clown, 3_4, 1650px 0px, true
        Voice Acted, 3_5, 1800px 0px, true
        Disasters, 1_1, 0px 150px, true
        C00l, 1, 150px 150px, true
        Pizza Delivery, 1, 300px 150px, true
        Dad, 1, 450px 150px, true
        118o8, 1, 600px 150px, true
        226w6, 1, 750px 150px, true
        Mailman, 1, 900px 150px, true
        Agent, 1, 1050px 150px, true
        Burger, 1, 1200px 150px, true
        Burger King, 1_1, 1350px 150px, true
        Hilton, 1_1, 1500px 150px, true
        Anonymous, 1, 1650px 150px, true
        Disco, 1, 1800px 150px, true
        Slendy, 1, 0px 300px, true
        Son of Man, 1_1, 150px 300px, true
        Yumi, 1, 300px 300px, true
        Onesie, 1, 450px 300px, true
        Summer, 1, 600px 300px, true
        Windows, 1, 750px 300px, true
        Subject_3, 1, 900px 300px, true
        World Investigator, 1, 1050px 300px, true
        Decoy, 1, 1200px 300px, true
        224o4, 1, 1350px 300px, true
        tr0l07n, 1, 1500px 300px, true
        Sm4rt3st0uppy, 1, 1650px 300px, true
        Dummy, 1, 1800px 300px, true
        Alien, 1, 0px 450px, true
        Anonymous Father, 1_1, 150px 450px, true
        Cecil, 1_1, 300px 450px, true
        Deivydoestutorials33, 1, 450px 450px, true
        Idiot, 1, 600px 450px, true
        Magic Ninja, 1, 750px 450px, true
        Raincoat, 1, 900px 450px, true
        Classic, 1, 1500px 450px, true, //THIS MOVED
        Scripter, 1, 1050px 450px, true
        Fishbowl, 1_1, 1200px 450px, true
        Comic, 1, 1350px 450px, true
    `,
    "Two Time":`
        Nightshade, 8, 1200px 0px, true, //THIS IS MOVED
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Legacy Milestone IV, 7, 600px 0px, false
        Legacy Milestone III, 7, 750px 0px, false
        Legacy Milestone II, 7, 900px 0px, false
        Legacy Milestone I, 7, 1050px 0px, false, //MOVED BELOW
        Stealth Virtuoso, 5, 1350px 0px, true, //MOVED ABOVE
        Frigid Planes, 5, 1500px 0px, true
        Ghost, 4, 1650px 0px, false
        Snow Time, 3_1, 1800px 0px, true
        Ice Assassin, 3_1, 0px 150px, true
        Super Stabby Elf, 3_1, 150px 150px, true
        Frankentime, 3_2, 300px 150px, true
        Spring, 3_3, 450px 150px, true
        Yin and Yang, 3_4, 600px 150px, true
        Mosquito, 3_4, 750px 150px, true
        Voice Acted, 3_5, 900px 150px, true
        Bald, 1, 1050px 150px, true
        Double Life, 1, 1200px 150px, true
        Fancy, 1, 1350px 150px, true
        Phoenix, 1, 1500px 150px, true
        Party, 1, 1650px 150px, true
        Jock, 1, 1800px 150px, true
        Prince, 1, 0px 300px, true
        Princess, 1, 150px 300px, true
        Soulmates, 1, 300px 300px, true
        Punk, 1, 450px 300px, true
        Silverthorn, 1, 600px 300px, true
        Spiral, 1, 750px 300px, true
        Sleepy, 1, 900px 300px, true
        10th Time Doctor, 1, 1050px 300px, true
        Anubis, 1, 1200px 300px, true
        Assassin, 1, 1350px 300px, true
        Dr. Ludwig, 1, 1500px 300px, true
        Pride, 1, 1650px 300px, true
        Honestly, 1, 1800px 300px, true
        Jester, 1, 0px 450px, true
        Monitoring, 1, 150px 450px, true
        Blossom, 1, 300px 450px, true
        Boss, 1, 450px 450px, true
        Kitty Cat, 1, 600px 450px, true
        Celeste, 1, 750px 450px, true
        Ghost Detective, 1, 900px 450px, true
        Snake, 1, 1050px 450px, true
        Autumn, 1, 1200px 450px, true
        Cloak, 1, 1350px 450px, true
        Tazuna, 1, 1500px 450px, true
        Plush, 1, 1650px 450px, true
        Weeping, 1, 1800px 450px, true
        Yorick, 1, 0px 600px, true
        Ghoul, 1, 150px 600px, true
        Invicta, 1, 300px 600px, true
    `,
    "Guest 1337":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        SoyG, 6, 600px 0px, true
        Furtive GI, 5, 750px 0px, true
        Greenbelt, 5, 900px 0px, false
        Panda, 5, 1050px 0px, true
        MLG, 5, 1350px 750px, true, //THIS MOVED
        Gunner, 4, 1200px 0px, true
        Paintballer, 4, 1350px 0px, true
        Juggernaut, 4, 1500px 0px, true
        Gunsonnect76, 4, 1650px 0px, true
        xXDARKSLAYERJONJESXx, 4, 1800px 0px, true
        Burnt Gingerbread, 4, 0px 150px, false
        Deathbringer, 4, 150px 150px, true
        Anniversary, 3, 300px 150px, true
        Gingerbread, 3_1, 450px 150px, true
        Christmas Camo, 3_1, 600px 150px, true
        Tough Santa, 3_1, 750px 150px, true
        Guest Who Cried Wolf, 3_2, 900px 150px, true
        Street Brawler, 3_4, 1050px 150px, true
        DX, 3_4, 1200px 150px, true
        Movies, 3_5, 1350px 150px, true
        Voice Acted, 3_5, 1500px 150px, true
        American Commando, 3_6, 1650px 150px, true
        Ultrakill, 2, 1800px 150px, true
        Matt, 1, 0px 300px, true
        Molly, 1, 150px 300px, true
        Modern, 1, 300px 300px, true
        Scoutmaster, 1_1, 450px 300px, true
        Camo, 1_1, 600px 300px, true
        Agent, 1, 750px 300px, true
        Captain Clobber, 1, 900px 300px, true
        Off-Duty, 1, 1050px 300px, true
        Classic, 1, 1200px 300px, true
        Gladiator, 1_1, 1350px 300px, true
        Steampunk, 1, 1500px 300px, true
        Girl, 1, 1650px 300px, true
        Boy, 1, 1800px 300px, true
        Counter, 1, 0px 450px, true
        Inception's Centurion, 1, 150px 450px, true
        Deep Sleep, 1, 300px 450px, true
        Tony the Terrible, 1, 450px 450px, true
        Hospital Patient, 1, 600px 450px, true
        Little Brother, 1, 750px 450px, true
        Modern Matt, 1, 900px 450px, true
        Sailor, 1, 1050px 450px, true
        Bombo, 1, 1200px 450px, true
        Commando, 1, 1350px 450px, true
        Alien, 1, 1500px 450px, true
        Jake, 1, 1650px 450px, true
        Kay-o, 1, 1800px 450px, true
        Bouncer Guest, 1_1, 0px 600px, true
        Biker, 1_1, 150px 600px, true
        Invincible, 1, 300px 600px, true
        Leon, 1, 450px 600px, true
        Nacho, 1_1, 600px 600px, true
        Red Carpet, 1_1, 750px 600px, true
        Soy, 1_1, 900px 600px, true
        Rangers, 1_1, 1050px 600px, true
        Tommy, 1, 1200px 600px, true
        Barbarian, 1, 1350px 600px, true
        Clobberbones, 1, 1500px 600px, true
        Block, 1, 1650px 600px, true
        Swashbuckler, 1_1, 1800px 600px, true
        Toon, 1, 0px 750px, true
        Guard, 1, 150px 750px, true
        Bobby, 1, 300px 750px, true
        Gene, 1, 450px 750px, true
        Rebel, 1, 600px 750px, true
        Ally that only kills zombies not you, 1, 750px 750px, true
        Son Guest, 1, 900px 750px, true
        Dragon Guest, 1, 1050px 750px, true
        Sorcerer, 1, 1200px 750px, true
        Golden, 1, 1500px 750px, true
    `,
    "Taph":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Trapper, 4, 600px 0px, true
        Ninja, 4, 750px 0px, true
        Warhead, 4, 900px 0px, true
        Xx_Rumblefan95_xX, 4, 1050px 0px, true
        Ninja Santa, 3_1, 1200px 0px, true
        Specialist Elf, 3_1, 1350px 0px, true
        Winter Conjuror, 3_1, 1500px 0px, true
        Arctic, 3_1, 1650px 0px, true
        Elf, 3_1, 1800px 0px, true
        Hooded Raven, 3_2, 0px 150px, true
        Vectordella, 3_4, 150px 150px, true
        Diver, 3_4, 300px 150px, true
        Mumble, 3_5, 450px 150px, true
        Wayward, 2, 600px 150px, true
        Deadly Dark, 1_1, 750px 150px, true
        Viridian, 1, 900px 150px, true
        Overseer, 1, 1050px 150px, true
        Spacelord, 1, 1200px 150px, true
        Shady Mercenary, 1, 1350px 150px, true
        Astral Isles, 1_1, 1500px 150px, true
        Deep Winter, 1, 1650px 150px, true
        Inaba, 1, 1800px 150px, true
        Mousetaph'd, 1, 0px 300px, true
        Demolitionist, 1, 150px 300px, true
        ROBLOX-U Scoundrel, 1, 300px 300px, true
        Sneaky-Sand Schemer, 1_1, 450px 300px, true
        Venus Fly-Taph, 1, 600px 300px, true
        Toy, 1_1, 750px 300px, true
        Tropical Trapper, 1_1, 900px 300px, true
        Y2K, 1, 1050px 300px, true
        Darkage Ninja, 1_1, 1200px 300px, true
        Laughy Taphy, 1, 1350px 300px, true
        The Dark Reaper, 1, 1500px 300px, true
        Nevermoor, 1, 1650px 300px, true
        Banana, 1, 1800px 300px, true
        Schmuck, 1, 0px 450px, true
        Minesweeper, 1, 150px 450px, true
        Solomon the Scareable, 1, 300px 450px, true
        Superballer, 1, 450px 450px, true
        Intelligence, 1, 600px 450px, true
        Plush, 1, 750px 450px, true
        ZeekytheHBomb, 1, 900px 450px, true
    `,
    "Dusekkar":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        MLG, 5, 750px 600px, true, //THIS MOVED
        Soul Sitter, 4, 600px 0px, true
        Catseye, 4, 750px 0px, false
        Anniversary, 3, 900px 0px, true
        Snowsekkar, 3_1, 1050px 0px, true
        Jolly Evergreen, 3_1, 1200px 0px, true
        Jack, 3_2, 1350px 0px, true
        Toil and Trouble, 3_2, 1500px 0px, true
        Headless, 3_2, 1650px 0px, true
        Sleepy, 3_4, 1800px 0px, true
        Voice Acted, 3_5, 0px 150px, true
        Uncle Zom, 3_6, 150px 150px, true
        Medic, 2, 300px 150px, true
        Ghosdeeri, 1, 450px 150px, true
        Doomsekkar, 1, 600px 150px, true
        It Came From The Mansion, 1_1, 750px 150px, true
        Pumpkin Spice, 1_1, 900px 150px, true
        FilesOfTheLord, 1, 1050px 150px, true
        PotSekkar, 1_1, 1200px 150px, true
        Blizzaria, 1, 1350px 150px, true
        Y2K, 1, 1500px 150px, true
        Doothekkar, 1, 1650px 150px, true
        Sacred Harvest, 1_1, 1800px 150px, true
        Toy, 1_1, 0px 300px, true
        Team Beacon, 1_1, 150px 300px, true
        Stone, 1, 300px 300px, true
        Umdum, 1, 450px 300px, true
        ToaZuku, 1, 600px 300px, true
        Infernal Sorcerer, 1_1, 750px 300px, true
        Butler, 1, 900px 300px, true
        Beachsandar, 1_1, 1050px 300px, true
        DuGuittar, 1_1, 1200px 300px, true
        Oveerseer, 1, 1350px 300px, true
        Sage Of The Manor, 1, 1500px 300px, true
        Dress, 1, 1650px 300px, true
        Forest Mage, 1, 1800px 300px, true
        Marisa, 1, 0px 450px, true
        Librarian, 1, 150px 450px, true
        Glow In The Dark, 1, 300px 450px, true
        Bloodchrome, 1_1, 450px 450px, true
        Witch Pirate, 1, 600px 450px, true
        Darkseed, 1, 750px 450px, true
        Snow Witch, 1, 900px 450px, true
        Hollow Hotshot, 1_1, 1050px 450px, true
        Headrowmancer, 1, 1200px 450px, true
        Candy Maestro, 1, 1350px 450px, true
        Great Mage, 1_1, 1500px 450px, true
        2009, 1, 1650px 450px, true
        LOVESHOT!, 1, 1800px 450px, true
        Phantom, 1, 0px 600px, true
        Dumsekkah, 1, 150px 600px, true
        Toothy Deer, 1, 300px 600px, true
        Combat Wizard, 1, 450px 600px, true
        Plushekkar, 1, 600px 600px, true
        Golden, 1, 900px 600px, true
    `,
    "Helperbot":`
        Milestone IV, 8, 0px 0px, false
        Milestone III, 8, 150px 0px, false
        Milestone II, 8, 300px 0px, false
        Milestone I, 8, 450px 0px, true
        MLGBot, 5, 600px 0px, true
        Backup, 1, 750px 0px, true
        Eco, 1, 900px 0px, true
        GPP, 1, 1050px 0px, true
        Look Mom!, 1, 1200px 0px, true
        Classy, 1, 1350px 0px, true
        Homemade Robot, 1, 1500px 0px, true
        Gr1efer, 1, 1650px 0px, true
        Scouter, 1, 1800px 0px, true
        Tradebot, 1, 0px 150px, true
        Point, 1, 150px 150px, true
        Robot Friend, 1, 300px 150px, true
        Cyclops Droid, 1, 450px 150px, true
        Robot Wizard, 1, 600px 150px, true
        SWAT, 1, 750px 150px, true
        Table Manners, 1, 900px 150px, true
        Trapper, 1, 1050px 150px, true
        Hazmat, 1, 1200px 150px, true
        Favorite Toy, 1, 1350px 150px, true
        Postal, 1, 1500px 150px, true
        Lovestruck, 1, 1650px 150px, true
        Captain Bot Beard, 1, 1800px 150px, true
        Bloxy, 1, 0px 300px, true
        Gadgeteer's Perfection, 1, 150px 300px, true
        IBot, 1, 300px 300px, true
        HelperCat, 1, 450px 300px, true
    `,
    "Veeronica":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        DJ, 4, 600px 0px, true
        Web Surfer, 4, 750px 0px, true
        Trendhopper, 4, 900px 0px, true
        Explorer, 3_4, 1050px 0px, true
        Innovation Reporter, 3_4, 1200px 0px, true
        Apocalypse, 3_4, 1350px 0px, true
        Man Face, 3_5, 1500px 0px, true
        Voice Acted, 3_5, 1650px 0px, true
        Skater, 1_1, 1800px 0px, true
        IPad, 1, 0px 150px, true
        Vintage, 1, 150px 150px, true
        Musical, 1_1, 300px 150px, true
        Stylish, 1_1, 450px 150px, true
        TJ, 1, 600px 150px, true
        Flannel, 1_1, 750px 150px, true
        Kitty Pop, 1, 900px 150px, true
        Bloxaide, 1, 1050px 150px, true
        Corrupted, 1, 1200px 150px, true
        Solar, 1, 1350px 150px, true
        Emo, 1, 1500px 150px, true
        Tropical, 1, 1650px 150px, true
        Angel, 1, 1800px 150px, true
        Bunny, 1, 0px 300px, true
        Veese, 1, 150px 300px, true
        Apple, 1, 300px 300px, true
        Wolfy, 1, 450px 300px, true
        Radical, 1, 600px 300px, true
        Alien, 1, 750px 300px, true
        Mecha, 1, 900px 300px, true
        Hunted, 1, 1050px 300px, true
        Trickstar, 1, 1200px 300px, true
        Lovebug, 1, 1350px 300px, true
        Nyan, 1, 1500px 300px, true
        Drako, 1, 1650px 300px, true
        Moe, 1, 1800px 300px, true
        Overheat, 1, 0px 450px, true
        Cabby, 1, 150px 450px, true
    `,
    "Chance":`
        Fool, 8, 600px 0px, true, //THIS IS MOVED
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true, //MOVED BELOW
        Soldier's Gambit, 5, 750px 0px, true, //MOVED ABOVE
        Mrs. Big Buckz, 5, 900px 0px, true
        Diamond, 5, 1050px 0px, true
        Crook Boss, 4, 1200px 0px, true
        BrawlR Specialist, 4, 1350px 0px, true
        Sniper, 4, 1500px 0px, true
        Hyperlaser, 4, 1650px 0px, true
        Binary Breacher, 4, 1800px 0px, true
        Luckroll, 4, 0px 150px, true
        Serpent, 4, 150px 150px, true
        Anniversary, 3, 300px 150px, true
        Kris Kringle's Right Hand, 3_1, 450px 150px, true
        Sophisticated Snowman, 3_1, 600px 150px, true
        Nutcracker, 3_1, 750px 150px, true
        Devil's Deeds, 3_2, 900px 150px, true
        Voice Acted, 3_5, 1050px 150px, true
        American Cowboy, 3_6, 1350px 600px, true, //MOVED HERE
        Mirror, 2, 1200px 150px, true
        MLGChance, 2, 1350px 150px, true
        Ultrakill, 2, 1500px 150px, true
        King Of Pranks, 2, 1650px 150px, true
        Homeless, 1, 1800px 150px, true
        Agent, 1, 0px 300px, true
        Blue Day, 1, 150px 300px, true
        Pink Day, 1, 300px 300px, true
        Double Crossed, 1_1, 450px 300px, true
        Dawg, 1_1, 600px 300px, true
        Workclock, 1, 750px 300px, true
        LMaD, 1, 900px 300px, true
        Donald P. Sullivan, 1_1, 1050px 300px, true
        Fast Food, 1_1, 1200px 300px, true
        Lods of Emone, 1, 1350px 300px, true
        Toppin' Troll, 1, 1500px 300px, true
        Pirate, 1_1, 1650px 300px, true
        Mysterious Sheriff, 1, 1800px 300px, true
        Plaid Poet, 1_1, 0px 450px, true
        Fanciful Pirate, 1, 150px 450px, true
        Take A Chance, 1, 300px 450px, true
        Federation, 1, 450px 450px, true
        Alien, 1, 600px 450px, true
        Dog, 1, 750px 450px, true
        Mr. Worldwide, 1, 900px 450px, true
        Pride, 1, 1050px 450px, true
        Sinister Staker, 1, 1200px 450px, true
        Bartholomew P. Sullivan, 1, 1350px 450px, true
        Bun-zee, 1, 1500px 450px, true
        Dos Vidas, 1, 1650px 450px, true
        High-Roller Classic, 1_1, 1800px 450px, true
        Revolver, 1, 0px 600px, true
        Brainiac, 1, 150px 600px, true
        Merchant, 1, 300px 600px, true
        Nayn, 1, 450px 600px, true
        Pilgrim, 1_1, 600px 600px, true
        Smiff, 1, 750px 600px, true
        Victor the Violent, 1, 900px 600px, true
        Multi-Colored Bettor, 1, 1050px 600px, true
        Outlaw, 1, 1200px 600px, true, //MOVED BELOW
        Big Game Hunter, 1, 1500px 600px, true, //MOVED ABOVE
        Cool Bones, 1_1, 1650px 600px, true
        Loveshot, 1, 1800px 600px, true
        Pico, 1_1, 0px 750px, true
        Avian Sight, 1, 150px 750px, true
        Plushy, 1, 300px 750px, true
        Chanceton, 1, 450px 750px, true
        Flipnote, 1, 600px 750px, true
        Retro, 1, 750px 750px, true
        Really Rich Chance, 1, 900px 750px, true
        Golden, 1, 1050px 750px, true
    `,
    "Ringmaster":`
        ?, 1, 0px 0px, false
    `,
    "c00lkidd":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        c00kiekidd, 3_1, 600px 0px, true
        Gourd, 3_2, 750px 0px, true
        Krystal, 3_4, 900px 0px, true
        c0llabk1dd, 3_5, 1050px 0px, true
        C00ler, 1, 1200px 0px, true
        b4ll3rkidd, 1, 1350px 0px, true
        Cosplayer, 1, 1500px 0px, true
        K00lkidd, 1, 1650px 0px, true
        P4j4m4k1dd, 1, 1800px 0px, true
        p00lkidd, 1, 0px 150px, true
        Original, 1, 150px 150px, true
        Weirdly Strict, 1, 300px 150px, true
        N1GH7M4R33, 1, 450px 150px, true
        wh1ms1c4l, 1, 600px 150px, true
        pr3typriincess, 1, 750px 150px, true
        Cultist, 1, 900px 150px, true
        sch00lkidd, 1, 1050px 150px, true
        DIVADAYO, 1, 1200px 150px, true
        The C00l One, 1, 1350px 150px, true
        THE K1DD, 1, 1500px 150px, true
        FF9CAE, 1, 1650px 150px, true
        bluudud, 1, 1800px 150px, true
        Celebration, 1, 0px 300px, true
        c00lskeleton95, 1, 150px 300px, true
        Mafioso, 1, 300px 300px, true
        P4rtyPwny, 1, 450px 300px, true
        PH0NK1DD, 1, 600px 300px, true
    `,
    "Slasher":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        VIP, 5, 600px 0px, true
        Slaughter at Arms, 5, 750px 0px, true
        Pest, 4, 900px 0px, true
        The Shining, 3_1, 1050px 0px, true
        Horsemann, 3_2, 1200px 0px, true
        The Shape, 3_2, 1350px 0px, true
        The Easter Marauder, 3_3, 1500px 0px, true
        XD, 3_4, 1650px 0px, true
        Insane Streamer, 3_5, 1800px 0px, true
        Builder Sam, 3_6, 0px 150px, true
        White Pumpkin, 2, 150px 150px, true
        Mystic, 2, 300px 150px, true
        Camp Conselor, 1, 450px 150px, true
        Farmboy, 1, 600px 150px, true
        michel, 1, 750px 150px, true
        Hockey Star, 1, 900px 150px, true
        Lumberjack, 1, 1050px 150px, true
        Party, 1, 1200px 150px, true
        Scenecore, 1, 1350px 150px, true
        Weightson, 1, 1500px 150px, true
        Duck, 1, 1650px 150px, true
        Cereal Killer, 1, 1800px 150px, true
        Delirious, 1, 0px 300px, true
        Retro, 1, 150px 300px, true
        Lovesick, 1, 300px 300px, true
        Barber, 1, 450px 300px, true
        Deep Sleep, 1, 600px 300px, true
        Evil Teacher, 1, 600px 450px, true, //THIS MOVED
        Executioner, 1, 750px 300px, true
        Hitbox Accurate, 1, 900px 300px, true
        Nun, 1, 1050px 300px, true
        Combat Initiation, 1, 1200px 300px, true
        Butcher, 1, 1350px 300px, true
        Stichhare, 1, 1500px 300px, true
        Vanity, 1, 1650px 300px, true
        Killer Kyle, 1, 1800px 300px, true
        Homerunner, 1, 0px 450px, true
        Alfred Drevis, 1, 150px 450px, true
        Persuer, 1, 300px 450px, true
        Subject_0, 1, 450px 450px, true
    `,
    "John Doe":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Legacy Milestone IV, 7, 600px 0px, false
        Legacy Milestone III, 7, 750px 0px, true
        Legacy Milestone II, 7, 900px 0px, true
        Legacy Milestone I, 7, 1050px 0px, true
        MLG, 5, 150px 450px, true, //THIS MOVED
        Treachstone, 4, 1200px 0px, true
        Santa, 3_1, 1350px 0px, true
        Crystalized, 3_1, 1500px 0px, true
        Screamer, 3_2, 1650px 0px, true
        Poached, 3_3, 1800px 0px, true
        Obby, 3_4, 0px 150px, true
        John Dough, 3_5, 150px 150px, true
        Butcher's Hook, 1, 300px 150px, true
        Pedro.EXE, 1, 450px 150px, true
        2017, 1, 600px 150px, true
        Baker, 1, 750px 150px, true
        Overgrown, 1, 900px 150px, true
        All-Star, 1_1, 1050px 150px, true
        John Dog, 1, 1200px 150px, true
        John Flow, 1, 1350px 150px, true
        Toon, 1, 1500px 150px, true
        RetRoe, 1, 1650px 150px, true
        Rockslide, 1, 1800px 150px, true
        Plagued, 1, 0px 300px, true
        Sharkmelon, 1, 150px 300px, true
        TV, 1, 300px 300px, true
        Ancient Megalodon, 1, 450px 300px, true
        Demon King, 1, 600px 300px, true
        Script Builder, 1, 750px 300px, true
        Morph Magic, 1, 900px 300px, true
        Noir, 1, 1050px 300px, true
        Geometry, 1, 1200px 300px, true
        Oozing Oscar, 1, 1350px 300px, true
        Annhilation, 1, 1500px 300px, true
        Gasharpoon, 1, 1650px 300px, true
        Living Legend, 1, 1800px 300px, true
        Abberant, 1, 0px 450px, true
    `,
    "1x1x1x1":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Legacy Milestone IV, 7, 600px 0px, true
        Legacy Milestone III, 7, 750px 0px, true
        Legacy Milestone II, 7, 900px 0px, true
        Legacy Milestone I, 7, 1050px 0px, true
        Guardian, 5, 1200px 0px, false
        Eye of The Abyss, 5, 1350px 0px, true
        Martyr, 4, 1500px 0px, true
        Crazyblox, 4, 1650px 0px, true
        Digital Rider, 4, 1800px 0px, true
        4x4x4x4, 4, 0px 150px, true
        Jack Frost, 3_1, 150px 150px, true
        [CLASSIC] Jack Frost, 3_1, 300px 150px, false
        One Scoop, 3_1, 450px 150px, true
        Pincushion, 3_2, 600px 150px, true
        Gatito, 3_4, 750px 150px, true
        1Eggs, 3_5, 900px 150px, true
        Hacklord, 2, 1050px 150px, true
        Primordial, 1, 1200px 150px, true
        Betrayed, 1, 1350px 150px, true
        Crew Leader, 1_1, 1500px 150px, true
        Evil Green Skeleton, 1, 1650px 150px, true
        Green Guest, 1_1, 1800px 150px, true
        Soccer Legend, 1_1, 0px 300px, true
        Toy, 1, 150px 300px, true
        16th Night, 1, 300px 300px, true
        Pride, 1, 450px 300px, true
        Green Envy, 1_1, 600px 300px, true
        Infernum, 1, 750px 300px, true
        Darkness, 1, 900px 300px, true
        Illumina, 1, 1050px 300px, true
        xX4ceOfSpadesXx, 1, 1200px 300px, true
        Fleskhjerta, 1, 1350px 300px, true
        Bluesteel, 1_1, 1500px 300px, true
        Monochrome, 1, 1650px 300px, true
        Voidbound, 1, 1800px 300px, true
        Classic, 1, 0px 450px, true
        Counterfeit, 1, 150px 450px, true
        Timeless, 1, 300px 450px, true
        Toon, 1, 450px 450px, true
        The Pestilence, 1, 600px 450px, true
        Diva, 1, 750px 450px, true
    `, //UP TO FINISH ^^^^ Images Only
    "Noli":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Metronette, 4, 600px 0px, true
        Narrator, 4, 750px 0px, true
        Conductor, 3_1, 900px 0px, true
        Sinister, 3_2, 1050px 0px, true
        Aero, 3_4, 1200px 0px, true
        The Admin, 2, 1350px 0px, true
        ASPX, 1, 1500px 0px, true
        Toolbox, 1, 1650px 0px, true
        Robert, 1, 1800px 0px, true
        Day of The Dead, 1, 0px 150px, true
        Ephialtes, 1, 150px 150px, true
        MissingNo., 1_1, 300px 150px, true
        Saggital, 1, 450px 150px, true
        Messiah, 1, 600px 150px, true
        Red Room Curse, 1, 750px 150px, true
        Exilium, 1, 900px 150px, true
        Devesto, 1, 1050px 150px, true
        Chimera, 1_1, 1200px 150px, true
        Starry Night, 1, 1350px 150px, true
        Meta, 1, 1500px 150px, true
        Umbra, 1, 1650px 150px, true
        Trolli, 1, 1800px 150px, true
        YAAI, 1, 0px 300px, true
        The Possessed, 1, 150px 300px, true
        Vira, 1, 300px 300px, true
        Artful, 1, 450px 300px, true
    `,
    "Guest 666":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Comeuppance, 4, 600px 0px, true
        Krampus, 3_1, 750px 0px, true
        Incognito, 3_4, 900px 0px, true
        Confused, 3_5, 1050px 0px, true
        Guest 333, 1, 1200px 0px, true
        EVIL DUCK, 1, 1350px 0px, true
        Guest 999, 1, 1500px 0px, true
        Template, 1, 1650px 0px, true
        Jack-O-Lantern, 1, 1800px 0px, true
        Toon, 1, 0px 150px, true
        Memories, 1, 150px 150x, true
        Godmother, 1, 300px 150px, true
        Symbol, 1, 450px 150px, true
        Hungry, 1, 600px 150px, true
        Sakura, 1, 750px 150px, true
        Rave, 1, 900px 150px, true
        The Dweller, 1, 1050px 150px, true
        Infected, 1, 1200px 150px, true
        Apollyon, 1, 1350px 150px, true
        Photoshop, 1, 1500px 150px, true
    `,
    "Nosferatu":`
        Snowy Owl, 3_1, 150px 0px, true
        Gluttony, 3_2, 0px 0px, true
        RIA, 3_4, 1200px 0px, true
        Vecnas, 1, 300px 0px, true
        Mowl, 1, 450px 0px, true
        Werewolf, 1, 600px 0px, true
        Classic, 1, 750px 0px, true
        Arachnid, 1, 900px 0px, true
        Heritage, 1, 1050px 0px, true
    `,
    "Azure":`
        Milestone IV, 8, 0px 0px, true
        Milestone III, 8, 150px 0px, true
        Milestone II, 8, 300px 0px, true
        Milestone I, 8, 450px 0px, true
        Skulldog, 5, 600px 0px, true
        Toxic Wasteland, 5, 750px 0px, true
        RDC, 3_4, 150px 300px, true
        Red String Theory, 1, 900px 0px, true
        Jester, 1, 1050px 0px, true
        Lunar Wizard, 1, 1200px 0px, true
        Apophis, 1, 1350px 0px, true
        Metamorphosis, 1, 1500px 0px, true
        Flytrap, 1, 1650px 0px, true
        Broken Heart, 1, 1800px 0px, true
        Wonderland, 1, 0px 150px, true
        Sugar Mage, 1, 150px 150px, true
        Timekeeper, 1, 300px 150px, true
        Cowboy, 1, 450px 150px, true
        Squizure, 1, 600px 150px, true
        Sorrow Knight, 1, 750px 150px, true
        Nightfall, 1, 900px 150px, true
        Nevermoor, 1, 1050px 150px, true
        Void, 1, 1200px 150px, true
        Bride, 1, 1350px 150px, true
        Traffic, 1, 1500px 150px, true
        FunnyBrushez, 1, 1650px 150px, true
        First Born, 1, 1800px 150px, true
        Deceiver, 1, 0px 300px, true
    `,
    "Stalker":`
        ?, 1, 0px 0px, false
    `
};

const URLParams = new URLSearchParams(window.location.search);
const CharacterName = URLParams.get('character'); 
const TargetString = SkinFile[CharacterName];

window.addEventListener('DOMContentLoaded', () => {
    const Heading = document.querySelector('h1');
    if (Heading) Heading.innerHTML = `Character: ${CharacterName}`;
    RenderSkinCollection(TargetString);
});

function RenderSkinCollection(DataText) {
    const lines = DataText.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    let obtainedOutput = '';
    let obtainableOutput = '';
    const character_skins = `assets/renders/skins/${CharacterName}.png`; 
    const frames = `assets/SkinFrames/`; 
    lines.forEach(line => {
        const parts = line.split(',').map(item => item.trim());
        const name = parts[0];
        const frame_name = parts[1];
        const position = parts[2];
        const is_obtained = parts[3];
        const prefix = position.split(' ');
        const x_pos = prefix[0];
        const y_pos = prefix[1];
        const fix_pos = `-${x_pos} -${y_pos}`;
        const frame_path = `${frames}${frame_name}.png`;
        const item = `
            <section class="skin_card">
                <div class="skin_wrapper">
                    <div class="skin_icon" style="
                        background-image: url('${character_skins}');
                        background-position: ${fix_pos};
                    "></div>
                    <img class="skin_frame" src="${frame_path}">
                </div>
                <div>
                    <h3>${name}</h3>
                </div>
            </section>`;
        if (is_obtained == "true") {
            obtainedOutput += item;
        } else {
            obtainableOutput += item;
        }
    });
    const obtainedContainer = document.getElementById('obtained');
    const obtainableContainer = document.getElementById('obtainable');
    if (obtainedContainer) obtainedContainer.innerHTML = obtainedOutput;
    if (obtainableContainer) obtainableContainer.innerHTML = obtainableOutput;
}
