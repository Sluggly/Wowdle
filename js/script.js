var characterList = []; // List of guessable characters
var characterDict = []; // Dicitonnary of characters: String(name) -> Character

class Character {
    constructor(name,race,affiliation,gender,age,deathCount,zone,iga,playerClass,killable,content,icon) {
        this.name = name;
        this.race = race;
        this.affiliation = affiliation;
        this.gender = gender;
        this.age = age;
        this.deathCount = deathCount;
        this.zone = zone;
        this.iga = iga;
        this.playerClass = playerClass;
        this.killable = killable;
        this.content = content;
        this.icon = icon;
    }
}

function createCharacter(name,race,affiliation,gender,age,deathCount,zone,iga,playerClass,killable,content,icon) {
    let raceArray = [];
    let affiliationArray = [];
    let zoneArray = [];
    let playerClassArray = [];
    let contentArray = [];
    if (Array.isArray(race)) { raceArray = raceArray.concat(race); } else { raceArray.push(race); }
    if (Array.isArray(affiliation)) { affiliationArray = affiliationArray.concat(affiliation); } else { affiliationArray.push(affiliation); }
    if (Array.isArray(zone)) { zoneArray = zoneArray.concat(zone); } else { zoneArray.push(zone); }
    if (Array.isArray(playerClass)) { playerClassArray = playerClassArray.concat(playerClass); } else { playerClassArray.push(playerClass); }
    if (Array.isArray(content)) { contentArray = contentArray.concat(content); } else { contentArray.push(content); }
    let character = new Character(name,raceArray,affiliationArray,gender,age,deathCount,zoneArray,iga,playerClassArray,killable,contentArray,icon);
    characterList.push(character);
    let dictName = name.toLowerCase().trim();
    characterDict[dictName] = character;
}

// Potential clue:
// Race(...), Faction/Affiliation(Horde,Alliance,Neutral,Burning Legion,Other), Gender(Male,Female,Other), Age(Young,Old), DeathCount(0+), Zone(Continent), InGameFirstApparition(Extensions), Class(Player class), Killable(Can't Attack,Fightable,Killable), Content(None,Open World,Instance Boss)

// New clue?: Can Give Quest?

function loadAllCharacters() {
    // Horde
    createCharacter("Thrall","Orc","Horde","Male","Young","0","Azeroth","Vanilla",["Shaman","Warrior"],"Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Sylvanas Windrunner","Undead","Horde","Female","Young","3","Shadowlands","Vanilla","Hunter","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Cairne Bloodhoof","Tauren","Horde","Male","Young","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Baine Bloodhoof","Tauren","Horde","Male","Young","0","Azeroth","Vanilla","Warrior","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Rexxar",["Orc","Ogre"],"Horde","Male","Young","0","Azeroth","BC","Hunter","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Vol'Jin","Troll","Horde","Male","Young","1","Azeroth","Vanilla","Shaman","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Zul'Jin","Troll","Horde","Male","Young","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Lor'themar Theron","Elf","Horde","Male","Young","0","Azeroth","BC","Hunter","Killable","Open World","src/Ragnaros.png");
    createCharacter("Jastor Gallywix","Goblin","Horde","Male","Young","0","Azeroth","Cataclysm","None","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Varok Saurfang","Orc","Horde","Male","Young","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Drek'Thar","Orc","Horde","Male","Young","0","Azeroth","Vanilla","Shaman","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Garrosh Hellscream","Orc","Horde","Male","Young","1","Azeroth","BC","Warrior","Fightable","Instance","src/Ragnaros.png");
    createCharacter("Grommash Hellscream","Orc","Horde","Male","Young","1",["Azeroth","Draenor"],"WOD","Warrior","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Magatha Grimtotem","Tauren","Horde","Female","Young","0","Azeroth","Vanilla","Shaman","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Gazlowe","Goblin","Horde","Male","Young","0","Azeroth","Vanilla","None","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Rokhan","Troll","Horde","Male","Young","0","Azeroth","Vanilla",["Hunter","Shaman"],"Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Ji Firepaw","Pandaren","Horde","Male","Young","0","Azeroth","MOP","Monk","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Thalyssra","Elf","Horde","Female","Young","0","Azeroth","Legion","Mage","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Queen Talanji","Troll","Horde","Female","Young","0","Azeroth","BFA","Priest","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("King Rastakhan","Troll","Horde","Male","Young","1","Azeroth","BFA","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Garona Halforcen",["Orc","Draenei"],"Horde","Female","Young","0","Azeroth","WOTLK","Rogue","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Nathanos Blightcaller","Undead","Horde","Male","Young","1","Azeroth","BFA","Hunter","Fightable","Open World","src/Ragnaros.png");

    // Alliance
    createCharacter("Jaina Proudmoore","Human","Alliance","Female","Young","0",["Azeroth","Shadowlands"],"Vanilla","Mage","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Daelin Proudmoore","Human","Alliance","Male","Young","1","None","None",["Paladin","Warrior"],"Can't Attack","None","src/Ragnaros.png");
    createCharacter("Khadgar","Human","Alliance","Male","Young","0",["Azeroth","Draenor","Outland","Argus"],"Vanilla","Mage","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Anduin Wrynn","Human","Alliance","Male","Young","0",["Azeroth","Shadowlands"],"Vanilla","Priest","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Varyan Wrynn","Human","Alliance","Male","Young","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Muradin Bronzebeard","Dwarf","Alliance","Male","Young","0",["Azeroth","Argus"],"Vanilla","Warrior","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Brann Bronzebeard","Dwarf","Alliance","Male","Young","0","Azeroth","Vanilla","None","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Gelbin Mekkatorque","Gnome","Alliance","Male","Young","0","Azeroth","Vanilla","None","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Tyrande Whisperwind","Elf","Alliance","Female","Old","0",["Azeroth","Shadowlands"],"Vanilla",["Priest","Hunter"],"Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Prophet Velen","Draenei","Alliance","Male","Old","0",["Azeroth","Argus"],"BC","Priest","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Malfurion Stormrage","Elf","Alliance","Male","Old","0","Azeroth","Vanilla","Druid","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Genn Greymane","Worgen","Alliance","Male","Young","0","Azeroth","Cataclysm","Warrior","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Aysa Cloudsinger","Pandaren","Alliance","Female","Young","0","Azeroth","MOP","Monk","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Turalyon","Human","Alliance","Male","Young","0",["Azeroth","Argus"],"Legion",["Priest","Paladin"],"Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Moira Thaurissan","Dwarf","Alliance","Female","Young","0","Azeroth","Vanilla","Priest","Killable","Open World","src/Ragnaros.png");
    createCharacter("Falstad Wildhammer","Dwarf","Alliance","Male","Young","0","Azeroth","Vanilla","None","Killable","Open World","src/Ragnaros.png");
    createCharacter("Uther Lightbringer","Human","Alliance","Male","Young","1",["Azeroth","Shadowlands"],"Shadowlands","Paladin","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Terenas Menethil II","Human","Alliance","Male","Young","1","Azeroth","None","None","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Alleria Windrunner","Elf","Alliance","Female","Young","0",["Azeroth","Argus"],"Legion","Hunter","Fightable",["Open World", "Instance"],"src/Ragnaros.png");
    createCharacter("Maiev Shadowsong","Elf","Alliance","Female","Old","0",["Azeroth","Outland"],"BC","None","Can't Attack",["Open World", "Instance"],"src/Ragnaros.png");
    createCharacter("Tirion Fordring","Human","Alliance","Male","Young","1","Azeroth","WOTLK","Paladin","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Yrel","Draenei","Alliance","Female","Young","0",["Azeroth","Draenor"],"WOD",["Paladin","Priest"],"Can't Fight",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Lilian Voss","Undead","Horde","Female","Young","1","Azeroth","Vanilla","Rogue","Fightable",["Open World","Instance"],"src/Ragnaros.png");

    // Neutral
    createCharacter("Illidan Stormrage","Elf","None","Male","Old","0",["Azeroth","Outland","Argus"],"BC","Demon Hunter","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Lorewalker Cho","Pandaren","None","Male","Young","0","Azeroth","MOP","None","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Lady VashJ","Naga","None","Female","Old","1",["Azeroth","Outland","Shadowlands"],"BC","None","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Wrathion","Dragonkin","None","Male","Old","0","Azeroth","MOP","None","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Chromie","Dragonkin","None","Female","Old","0","Azeroth","BC","Mage","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Ysera","Dragonkin","None","Female","Old","1","Azeroth","Cataclysm","None","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Alexstraza","Dragonkin","None","Female","Old","0","Azeroth","Cataclysm","None","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Kalecgos","Dragonkin","None","Male","Old","0","Azeroth","Cataclysm","Mage","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Nozdormu","Dragonkin","None","Male","Old","0","Azeroth","Cataclysm","None","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Akama","Broken","None","Male","Old","0","Outland","BC","Shaman","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Loken","Giant","None","Male","Old","1","Azeroth","WOTLK","None","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Thorim","Giant","None","Male","Old","1","Azeroth","WOTLK","Warrior","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Millhouse Manastorm","Gnome","None","Male","Young","0","Azeroth","BC","Mage","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Millificent Manastorm","Gnome","None","Female","Young","0","Azeroth","BC","None","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Taran Zhu","Pandaren","Neutral","Male","Young","0","Azeroth","MOP","Monk","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Chen Stormstout","Pandaren","None","Male","Young","0","Azeroth","MOP","Monk","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Lili Stormstout","Pandaren","None","Female","Young","0","Azeroth","MOP","Monk","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Odyn","Giant","None","Male","Old","0","Azeroth","Legion","Warrior","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Medivh","Human","None","Male","Young","1","Azeroth","None","Mage","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Cenarius","God","None","Male","Old","2","Azeroth","Legion","Druid","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Grand Magistrix Elisande","Elf","Burning Legion","Female","Old","1","Azeroth","Legion","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Argus the Unmaker","Titan","None","Male","Old","1","Argus","Legion","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Aggramar","Titan","None","Male","Old","0","Unknown","Legion","Legion","Fightable","Instance","src/Ragnaros.png");
    createCharacter("Bwonsamdi","Loa","None","Male","Old","0",["Azeroth","Shadowlands"],"BFA","None","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Winter Queen","Eternal One","None","Female","Old","0","Shadowlands","Shadowlands","None","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Pelagos","Eternal One","None","Male","Young","1","Shadowlands","Shadowlands","None","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Draka","Orc","None","Female","Young","1","Shadowlands","Shadowlands",["Warrior","Rogue"],"Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Golganneth","Titan","None","Male","Old","0","Unknown","Legion","None","Can't Attack","Instance","src/Ragnaros.png");
    createCharacter("Norgannon","Titan","None","Male","Old","0","Unknown","Legion","None","Can't Attack","Instance","src/Ragnaros.png");
    createCharacter("Eonar","Titan","None","Female","Old","0","Unknown","Legion","None","Can't Attack","Instance","src/Ragnaros.png");
    createCharacter("Khaz'goroth","Titan","None","Male","Old","0","Unknown","Legion","None","Can't Attack","Instance","src/Ragnaros.png");
    createCharacter("Bolvar Fordragon","Human","None","Male","Young","0",["Azeroth","Shadowlands"],"WOTLK","Death Knight","Can't Attack",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Elune","God","None","Female","Old","Unknown","Unknown","Never","None","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Aman'Thul","Titan","None","Male","Old","0","Unknown","Legion","None","Can't Attack","Instance","src/Ragnaros.png");
    createCharacter("Silas Darkmoon","Gnome","None","Male","Young","0","Azeroth","Vanilla","None","Can't Attack","Open World","src/Ragnaros.png");
    createCharacter("Sabellian","Dragonkin","None","Male","Old","0","Azeroth","Vanilla","Mage","Can't Attack","Open World","src/Ragnaros.png");

    // Evil Boss
    createCharacter("Arthas Menethil","Human","Scourge","Male","Young","1",["Azeroth","Shadowlands"],"WOTLK",["Death Knight","Paladin"],"Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Deathwing/Neltharion","Dragonkin","None","Male","Old","1","Azeroth","Cataclysm","None","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Nefarian","Dragonkin","None","Male","Old","1","Azeroth","Cataclysm","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Onyxya","Dragonkin","None","Female","Old","2","Azeroth","Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Kael'Thas Sunstrider","Elf","None","Male","Young","1",["Azeroth","Outland","Shadowlands"],"BC","Mage","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Edwin Vancleef","Human","None","Male","Young","1","Azeroth","Vanilla","Rogue","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Emperor Dagran Thaurissan","Dwarf","None","Male","Young","1","Azeroth","Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Captain Cookie","Murloc","None","Male","Young","1","Azeroth","Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("King Gordok","Ogre","None","Male","Young","1","Azeroth","Vanilla","Warrior","Killable","Instance","src/Ragnaros.png");
    createCharacter("Princess Theradras","Elemental","None","Female","Old","1","Azeroth","Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("High Inquisitor Whitemane","Human","None","Female","Young","1","Azeroth","Vanilla",["Priest","Death Knight"],"Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Lord Aurius Rivendare","Human","Scourge","Male","Young","1","Azeroth","Vanilla",["Death Knight","Paladin"],"Killable","Instance","src/Ragnaros.png");
    createCharacter("Baron Titus Rivendare","Human","Scourge","Male","Young","1","Azeroth","Vanilla","Death Knight","Killable","Instance","src/Ragnaros.png");
    createCharacter("Hogger","Gnoll","None","Male","Young","1","Azeroth","Vanilla","None","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Hakkar","Loa","None","Male","Old","2",["Azeroth","Shadowlands"],"Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Mutanus the Devourer","Murloc","None","Male","Young","1","Azeroth","Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Ragnaros","Elemental","None","Male","Old","2","Azeroth","Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("C'Thun","Old God","None","Other","Old","1","Azeroth","Vanilla","None","Fightable","Instance","src/Ragnaros.png");
    createCharacter("Gruul","Gronn","None","Male","Young","1","Outland","BC","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Magtheridon","Demon","Burning Legion","Male","Young","1","Outland","BC","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Archimonde","Demon","Burning Legion","Male","Old","2",["Argus","Azeroth","Twisting Nether"],"BC","Warlock","Killable","Instance","src/Ragnaros.png");
    createCharacter("Kil'Jaeden","Demon","Burning Legion","Male","Old","2",["Argus","Azeroth","Twisting Nether"],"BC","Warlock","Killable","Instance","src/Ragnaros.png");
    createCharacter("Anub'arak","Undead","Scourge","Male","Young","1","Azeroth","WOTLK","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Jailer","Eternal One","None","Male","Old","1","Shadowlands","Shadowlands","None","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Mal'Ganis","Demon","Burning Legion","Male","Young","3",["Azeroth","Twisting Nether","Shadowlands"],"WOTLK","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Ner'Zhul","Orc","Scourge","Male","Young","1",["Azeroth","Outland"],"WOD",["Shaman","Warlock"],"Fightable","Instance","src/Ragnaros.png");
    createCharacter("Varimathras","Demon","Burning Legion","Male","Young","2",["Azeroth","Twisting Nether"],"Vanilla","Warlock","Killable","Instance","src/Ragnaros.png");
    createCharacter("Kel'Thuzad","Undead","Scourge","Male","Young","2",["Azeroth","Shadowlands"],"WOTLK","Mage","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Malygos","Dragonkin","None","Male","Old","1","Azeroth","WOTLK","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Yogg-Saron","Old God","None","Other","Old","1","Azeroth","WOTLK","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Algalon the Observer","Elemental","None","Male","Old","1","Unknown","WOTLK","None","Fightable","Instance","src/Ragnaros.png");
    createCharacter("Murozond","Dragonkin","None","Male","Old","1","Azeroth","Cataclysm","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Mannoroth","Demon","Burning Legion","Male","Old","1",["Azeroth","Outland","Draenor"],"Draenor","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Queen Azshara","Naga","None","Female","Old","0","Azeroth","BFA","Mage","Fightable","Instance","src/Ragnaros.png");
    createCharacter("Cho'Gall","Ogre","None","Male","Young","1","Azeroth","Cataclysm",["Mage","Warlock"],"Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Al'Akir","Elemental","None","Male","Old","1","Azeroth","MOP","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Lei Shen","Mogu","None","Male","Old","1","Azeroth","MOP","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Blackhand","Orc","None","Male","Young","1","Draenor","WOD","Warrior","Killable","Instance","src/Ragnaros.png");
    createCharacter("Helya","Val'Kyr","None","Female","Old","0",["Azeroth","Shadowlands"],"Legion","None","Fightable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Xavius","Satyr","Burning Legion","Male","Young","1","Azeroth","Vanilla",["Mage","Warlock"],"Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Gul'Dan","Orc","Burning Legion","Male","Young","1",["Azeroth","Draenor","Outland"],"WOD","Warlock","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Tichondrius","Demon","Scourge","Male","Young","1","Azeroth","Cataclysm","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("King Mechagon","Robot","None","Male","Young","1","Azeroth","BFA","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("G'huun","Old God","None","Other","Old","1","Azeroth","BFA","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("N'Zoth","Old God","None","Other","Old","1","Azeroth","BFA","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("Y'Shaarj","Old God","None","Other","Old","1","Azeroth","Never","None","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Sire Denathrius","Eternal One","None","Male","Young","1","Shadowlands","Shadowlands","None","Fightable","Instance","src/Ragnaros.png");
    createCharacter("Razageth","Dragonkin","None","Female","Old","1","Azeroth","Dragonflight","None","Killable",["Open World","Instance"],"src/Ragnaros.png");
    createCharacter("Galakrond","Dragonkin","None","Male","Old","1","Azeroth","Never","None","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Sargeras","Titan","Burning Legion","Male","Old","0","Unknown","Legion","None","Can't Attack","None","src/Ragnaros.png");
    createCharacter("Teron Gorefiend","Undead","None","Male","Young","2","Outland","BC","Death Knight","Killable","Instance","src/Ragnaros.png");

}

loadAllCharacters();

function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}

function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

var seed = cyrb128(new Date().toDateString());
var rand = mulberry32(seed[0]);
var randValue = rand();
var numero = Math.trunc(randValue*1000)%characterList.length;

var selectedCharacter = characterList[numero];
console.log(selectedCharacter);

function resetSeed() {
    characterDict = [];
    characterList = [];
    loadAllCharacters();
    let guessDiv = document.getElementById("guessZone");
    guessDiv.innerHTML = "";
    seed = cyrb128(new Date().toDateString()+seed[0]);
    rand = mulberry32(seed[0]);
    randValue = rand();
    numero = Math.trunc(randValue*1000)%characterList.length;
    selectedCharacter = characterList[numero];
    console.log(selectedCharacter);
}

function updateSearch(searchValue) {
    searchValue = searchValue.toLowerCase().trim();
    let selectionMenu = document.getElementById("selection-menu");
    selectionMenu.innerHTML = "";
    if (searchValue.length > 0) {
        const searchList = characterList.filter((character) => {
            const name = character.name.toLowerCase();
            return name.includes(searchValue);
        });
        if (searchList.length > 0) {
            let tmpUl = document.createElement("ul");
            for (let character of searchList) {
                let tmpLi = document.createElement("li");
                let tmpIcon = document.createElement("img");
                tmpIcon.src = character.icon;
                let tmpSpan = document.createElement("span");
                tmpSpan.innerHTML = character.name;
                tmpLi.addEventListener("click", function() {
                    const spanContent = this.querySelector("span").textContent;
                    let searchBar = document.getElementById("searchGuess");
                    searchBar.value = spanContent;
                    let selectionMenu = document.getElementById("selection-menu");
                    selectionMenu.className = "selection-menu";
                });
                tmpLi.appendChild(tmpIcon);
                tmpLi.appendChild(tmpSpan);
                tmpUl.appendChild(tmpLi);
            }
            selectionMenu.appendChild(tmpUl);
            selectionMenu.className = "selection-menu show";
        }
    }
    else {
        selectionMenu.className = "selection-menu";
    }
}

function createBox(guessValue,selectedValue) {
    let boxDiv = document.createElement("div");
    let tmpP = document.createElement("p");
    if ((Array.isArray(guessValue))&&(Array.isArray(selectedValue))) { // Les deux sont des arrays
        let isPartial = false;
        let isSame = true;
        if (guessValue.length != selectedValue.length) { isSame = false; }
        for (const elem of guessValue) {
            if (!selectedValue.includes(elem)) { isSame = false; }
            else { isPartial = true; }
        }
        if (isSame) { boxDiv.className = "info-box true"; }
        else if (isPartial) { boxDiv.className = "info-box partial"; }
        else { boxDiv.className = "info-box false"; }
        let tmpText = "";
        for (const elem of guessValue) {
            tmpText = tmpText + elem + " ";
        }
        tmpP.innerHTML = tmpText;
    }
    else if ((Array.isArray(guessValue))&&(!Array.isArray(selectedValue))) { // Guess is Array
        if (guessValue.includes(selectedValue)) { boxDiv.className = "info-box partial"; }
        else { boxDiv.className = "info-box false"; }
        let tmpText = "";
        for (const elem of guessValue) {
            tmpText = tmpText + elem + " ";
        }
        tmpP.innerHTML = tmpText;
    }
    else if ((!Array.isArray(guessValue))&&(Array.isArray(selectedValue))) { // Selected is array
        if (selectedValue.includes(guessValue)) { boxDiv.className = "info-box partial"; }
        else { boxDiv.className = "info-box false"; }
        tmpP.innerHTML = guessValue;
    }
    else if ((!Array.isArray(guessValue))&&(!Array.isArray(selectedValue))) { // Les deux ne sont pas array
        if (guessValue == selectedValue) { boxDiv.className = "info-box true"; }
        else { boxDiv.className = "info-box false"; }
        tmpP.innerHTML = guessValue;
    }
    boxDiv.appendChild(tmpP);
    return boxDiv;
}

function guessCharacter() {
    let searchValue = document.getElementById("searchGuess").value;
    searchValue = searchValue.toLowerCase().trim();
    let character = characterDict[searchValue];
    if (character != undefined) {
        let guessZone = document.getElementById("guessZone");
        let newBoxLine = document.createElement("div");
        newBoxLine.className = "character-info";
        let boxDiv = document.createElement("div");
        boxDiv.className = "info-box false";
        let iconBox = document.createElement("img");
        iconBox.src = character.icon;
        boxDiv.appendChild(iconBox);
        newBoxLine.appendChild(boxDiv);
        newBoxLine.appendChild(createBox(character.race,selectedCharacter.race));
        newBoxLine.appendChild(createBox(character.affiliation,selectedCharacter.affiliation));
        newBoxLine.appendChild(createBox(character.gender,selectedCharacter.gender));
        newBoxLine.appendChild(createBox(character.age,selectedCharacter.age));
        newBoxLine.appendChild(createBox(character.deathCount,selectedCharacter.deathCount));
        newBoxLine.appendChild(createBox(character.zone,selectedCharacter.zone));
        newBoxLine.appendChild(createBox(character.iga,selectedCharacter.iga));
        newBoxLine.appendChild(createBox(character.playerClass,selectedCharacter.playerClass));
        newBoxLine.appendChild(createBox(character.killable,selectedCharacter.killable));
        newBoxLine.appendChild(createBox(character.content,selectedCharacter.content));
        guessZone.insertBefore(newBoxLine, guessZone.firstChild);
        for (let i=0;i<characterList.length;i++) {
            if (characterList[i] == character) {
                characterList.splice(i,1);
                break;
            }
        }
        delete characterDict[character.name.toLowerCase().trim()];
    }
    document.getElementById("searchGuess").value = "";
}