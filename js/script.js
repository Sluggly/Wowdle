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
// Race(...), Faction/Affiliation(Horde,Alliance,Neutral,Burning Legion,Other), Gender(Male,Female,Other), Age(Lower,Old), DeathCount(0+), Zone(Continent), InGameFirstApparition(Extensions), Class(Player class), Killable(Can't Attack,Fightable,Killable), Content(None,Open World,Instance Boss)

// New clue?: Can Give Quest?, has hearthstone card? uses a weapon?

function loadAllCharacters() {
    // Horde
    createCharacter("Thrall","Orc","Horde","Male","Lower","0",["Azeroth","Outland","Draenor","Shadowlands"],"Vanilla",["Shaman","Warrior"],"Can't Attack","Open World","src/Thrall.webp");
    createCharacter("Sylvanas Windrunner","Undead","Horde","Female","Lower","3","Shadowlands","Vanilla","Hunter","Fightable",["Open World","Instance"],"src/Sylvanas.png");
    createCharacter("Cairne Bloodhoof","Tauren","Horde","Male","Lower","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Cairne.png");
    createCharacter("Baine Bloodhoof","Tauren","Horde","Male","Lower","0","Azeroth","Vanilla","Warrior","Can't Attack","Open World","src/Baine.png");
    createCharacter("Rexxar",["Orc","Ogre"],"Horde","Male","Lower","0","Azeroth","BC","Hunter","Can't Attack",["Open World","Instance"],"src/Rexxar.png");
    createCharacter("Vol'Jin","Troll","Horde","Male","Lower","1","Azeroth","Vanilla","Shaman","Can't Attack","None","src/Vol'jin.png");
    createCharacter("Zul'Jin","Troll","Horde","Male","Lower","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Zul'jin.png");
    createCharacter("Lor'themar Theron","Elf","Horde","Male","Lower","0","Azeroth","BC","Hunter","Killable","Open World","src/Lor'themar.png");
    createCharacter("Jastor Gallywix","Goblin","Horde","Male","Lower","0","Azeroth","Cataclysm","None","Can't Attack","Open World","src/Gallywix.png");
    createCharacter("Varok Saurfang","Orc","Horde","Male","Lower","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Varok.png");
    createCharacter("Drek'Thar","Orc","Horde","Male","Lower","0","Azeroth","Vanilla","Shaman","Killable",["Open World","Instance"],"src/Drek'Thar.png");
    createCharacter("Garrosh Hellscream","Orc","Horde","Male","Lower","1","Azeroth","BC","Warrior","Fightable","Instance","src/Garrosh.png");
    createCharacter("Grommash Hellscream","Orc","Horde","Male","Lower","1",["Azeroth","Draenor"],"WOD","Warrior","Can't Attack",["Open World","Instance"],"src/Grommash.png");
    createCharacter("Magatha Grimtotem","Tauren","Horde","Female","Lower","0","Azeroth","Vanilla","Shaman","Can't Attack","Open World","src/Magatha.jpg");
    createCharacter("Gazlowe","Goblin","Horde","Male","Lower","0","Azeroth","Vanilla","None","Can't Attack","Open World","src/Gazlowe.png");
    createCharacter("Rokhan","Troll","Horde","Male","Lower","0","Azeroth","Vanilla",["Hunter","Shaman"],"Killable",["Open World","Instance"],"src/Rokhan.jpg");
    createCharacter("Ji Firepaw","Pandaren","Horde","Male","Lower","0","Azeroth","MOP","Monk","Can't Attack","Open World","src/Ji.png");
    createCharacter("Thalyssra","Elf","Horde","Female","Lower","0","Azeroth","Legion","Mage","Can't Attack","Open World","src/Thalyssra.jpg");
    createCharacter("Queen Talanji","Troll","Horde","Female","Lower","0","Azeroth","BFA","Priest","Can't Attack","Open World","src/Talanji.png");
    createCharacter("King Rastakhan","Troll","Horde","Male","Lower","1","Azeroth","BFA","None","Killable","Instance","src/Rastakhan.png");
    createCharacter("Garona Halforcen",["Orc","Draenei"],"Horde","Female","Lower","0","Azeroth","WOTLK","Rogue","Can't Attack","Open World","src/Garona.png");
    createCharacter("Nathanos Blightcaller","Undead","Horde","Male","Lower","1","Azeroth","BFA","Hunter","Fightable","Open World","src/Nathanos.png");
    createCharacter("Lilian Voss","Undead","Horde","Female","Lower","1","Azeroth","Vanilla","Rogue","Fightable",["Open World","Instance"],"src/Lilian.png");

    // Alliance
    createCharacter("Jaina Proudmoore","Human","Alliance","Female","Lower","0",["Azeroth","Shadowlands"],"Vanilla","Mage","Fightable",["Open World","Instance"],"src/Jaina.jpg");
    createCharacter("Daelin Proudmoore","Human","Alliance","Male","Lower","1","None","None",["Paladin","Warrior"],"Can't Attack","None","src/Daelin.webp");
    createCharacter("Khadgar","Human","Alliance","Male","Lower","0",["Azeroth","Draenor","Outland","Argus","Shadowlands"],"Vanilla","Mage","Can't Attack",["Open World","Instance"],"src/Khadgar.png");
    createCharacter("Anduin Wrynn","Human","Alliance","Male","Lower","0",["Azeroth","Shadowlands"],"Vanilla","Priest","Fightable",["Open World","Instance"],"src/Anduin.png");
    createCharacter("Varian Wrynn","Human","Alliance","Male","Lower","1","Azeroth","Vanilla","Warrior","Can't Attack","None","src/Varian.png");
    createCharacter("Muradin Bronzebeard","Dwarf","Alliance","Male","Lower","0",["Azeroth","Argus"],"Vanilla","Warrior","Killable",["Open World","Instance"],"src/Muradin.jpg");
    createCharacter("Brann Bronzebeard","Dwarf","Alliance","Male","Lower","0","Azeroth","Vanilla","None","Can't Attack",["Open World","Instance"],"src/Brann.png");
    createCharacter("Gelbin Mekkatorque","Gnome","Alliance","Male","Lower","0","Azeroth","Vanilla","None","Fightable",["Open World","Instance"],"src/Gelbin.png");
    createCharacter("Tyrande Whisperwind","Elf","Alliance","Female","Higher","0",["Azeroth","Shadowlands"],"Vanilla",["Priest","Hunter"],"Fightable",["Open World","Instance"],"src/Tyrande.jpg");
    createCharacter("Prophet Velen","Draenei","Alliance","Male","Higher","0",["Azeroth","Argus"],"BC","Priest","Can't Attack",["Open World","Instance"],"src/Velen.png");
    createCharacter("Malfurion Stormrage","Elf","Alliance","Male","Higher","0","Azeroth","Vanilla","Druid","Can't Attack",["Open World","Instance"],"src/Malfurion.png");
    createCharacter("Genn Greymane","Worgen","Alliance","Male","Lower","0","Azeroth","Cataclysm","Warrior","Can't Attack",["Open World","Instance"],"src/Genn.png");
    createCharacter("Aysa Cloudsinger","Pandaren","Alliance","Female","Lower","0","Azeroth","MOP","Monk","Can't Attack","Open World","src/Aysa.jpg");
    createCharacter("Turalyon","Human","Alliance","Male","Lower","0",["Azeroth","Argus"],"Legion",["Priest","Paladin"],"Killable",["Open World","Instance"],"src/Turalyon.png");
    createCharacter("Moira Thaurissan","Dwarf","Alliance","Female","Lower","0","Azeroth","Vanilla","Priest","Killable","Open World","src/Moira.png");
    createCharacter("Falstad Wildhammer","Dwarf","Alliance","Male","Lower","0","Azeroth","Vanilla","None","Killable","Open World","src/Falstad.jpg");
    createCharacter("Uther Lightbringer","Human","Alliance","Male","Lower","1",["Azeroth","Shadowlands"],"Shadowlands","Paladin","Can't Attack",["Open World","Instance"],"src/Uther.jpg");
    createCharacter("Terenas Menethil II","Human","Alliance","Male","Lower","1","Azeroth","None","None","Can't Attack","None","src/Terenas.png");
    createCharacter("Alleria Windrunner","Elf","Alliance","Female","Lower","0",["Azeroth","Argus"],"Legion","Hunter","Fightable",["Open World", "Instance"],"src/Alleria.jpg");
    createCharacter("Maiev Shadowsong","Elf","Alliance","Female","Higher","0",["Azeroth","Outland"],"BC","None","Can't Attack",["Open World", "Instance"],"src/Maiev.jpg");
    createCharacter("Tirion Fordring","Human","Alliance","Male","Lower","1","Azeroth","WOTLK","Paladin","Killable",["Open World","Instance"],"src/Tirion.png");
    createCharacter("Yrel","Draenei","Alliance","Female","Lower","0",["Azeroth","Draenor"],"WOD",["Paladin","Priest"],"Can't Fight",["Open World","Instance"],"src/Yrel.png");
    
    // Neutral
    createCharacter("Illidan Stormrage","Elf","None","Male","Higher","0",["Azeroth","Outland","Argus"],"BC","Demon Hunter","Killable",["Open World","Instance"],"src/Illidan.jpg");
    createCharacter("Lorewalker Cho","Pandaren","None","Male","Lower","0","Azeroth","MOP","None","Can't Attack","Open World","src/Cho.png");
    createCharacter("Lady VashJ","Naga","None","Female","Higher","1",["Azeroth","Outland","Shadowlands"],"BC","None","Killable",["Open World","Instance"],"src/VashJ.webp");
    createCharacter("Wrathion","Dragonkin","None","Male","Higher","0","Azeroth","MOP","None","Can't Attack",["Open World","Instance"],"src/Wrathion.png");
    createCharacter("Chromie","Dragonkin","None","Female","Higher","0","Azeroth","BC","Mage","Can't Attack",["Open World","Instance"],"src/Chromie.jpg");
    createCharacter("Ysera","Dragonkin","None","Female","Higher","1","Azeroth","Cataclysm","None","Killable",["Open World","Instance"],"src/Ysera.png");
    createCharacter("Alexstraza","Dragonkin","None","Female","Higher","0","Azeroth","Cataclysm","None","Can't Attack",["Open World","Instance"],"src/Alexstraza.webp");
    createCharacter("Kalecgos","Dragonkin","None","Male","Higher","0","Azeroth","Cataclysm","Mage","Can't Attack",["Open World","Instance"],"src/Kalecgos.jpg");
    createCharacter("Nozdormu","Dragonkin","None","Male","Higher","0","Azeroth","Cataclysm","None","Can't Attack",["Open World","Instance"],"src/Nozdormu.webp");
    createCharacter("Akama","Broken","None","Male","Higher","0","Outland","BC","Shaman","Can't Attack",["Open World","Instance"],"src/Akama.webp");
    createCharacter("Loken","Giant","None","Male","Higher","1","Azeroth","WOTLK","None","Killable",["Open World","Instance"],"src/Loken.png");
    createCharacter("Thorim","Giant","None","Male","Higher","1","Azeroth","WOTLK","Warrior","Killable",["Open World","Instance"],"src/Thorim.png");
    createCharacter("Millhouse Manastorm","Gnome","None","Male","Lower","0","Azeroth","BC","Mage","Fightable",["Open World","Instance"],"src/Millhouse.png");
    createCharacter("Millificent Manastorm","Gnome","None","Female","Lower","0","Azeroth","BC","None","Fightable",["Open World","Instance"],"src/Millificent.png");
    createCharacter("Taran Zhu","Pandaren","Neutral","Male","Lower","0","Azeroth","MOP","Monk","Fightable",["Open World","Instance"],"src/Taran.png");
    createCharacter("Chen Stormstout","Pandaren","None","Male","Lower","0","Azeroth","MOP","Monk","Can't Attack",["Open World","Instance"],"src/Chen.png");
    createCharacter("Lili Stormstout","Pandaren","None","Female","Lower","0","Azeroth","MOP","Monk","Can't Attack","Open World","src/Lili.png");
    createCharacter("Odyn","Giant","None","Male","Higher","0","Azeroth","Legion","Warrior","Fightable",["Open World","Instance"],"src/Odyn.png");
    createCharacter("Medivh","Human","None","Male","Lower","1","Azeroth","None","Mage","Can't Attack","None","src/Medivh.jpg");
    createCharacter("Cenarius","God","None","Male","Higher","2","Azeroth","Legion","Druid","Killable",["Open World","Instance"],"src/Cenarius.webp");
    createCharacter("Grand Magistrix Elisande","Elf","Burning Legion","Female","Higher","1","Azeroth","Legion","None","Killable","Instance","src/Elisande.jpg");
    createCharacter("Argus the Unmaker","Titan","None","Male","Higher","1","Argus","Legion","None","Killable","Instance","src/Argus.png");
    createCharacter("Aggramar","Titan","None","Male","Higher","0","Unknown","Legion","Legion","Fightable","Instance","src/Aggramar.jpg");
    createCharacter("Bwonsamdi","Loa","None","Male","Higher","0",["Azeroth","Shadowlands"],"BFA","None","Fightable",["Open World","Instance"],"src/Bwonsamdi.png");
    createCharacter("Winter Queen","Eternal One","None","Female","Higher","0","Shadowlands","Shadowlands","None","Can't Attack","Open World","src/Winter.png");
    createCharacter("Pelagos","Eternal One","None","Male","Lower","1","Shadowlands","Shadowlands","None","Can't Attack","Open World","src/Pelagos.jpg");
    createCharacter("Draka","Orc","None","Female","Lower","1","Shadowlands","Shadowlands",["Warrior","Rogue"],"Can't Attack","Open World","src/Draka.jpg");
    createCharacter("Golganneth","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","src/Golganneth.png");
    createCharacter("Norgannon","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","src/Norgannon.jpg");
    createCharacter("Eonar","Titan","None","Female","Higher","0","Unknown","Legion","None","Can't Attack","Instance","src/Eonar.png");
    createCharacter("Khaz'goroth","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","src/Khaz.png");
    createCharacter("Bolvar Fordragon","Human","None","Male","Lower","0",["Azeroth","Shadowlands"],"WOTLK","Death Knight","Can't Attack",["Open World","Instance"],"src/Bolvar.png");
    createCharacter("Elune","God","None","Female","Higher","Unknown","Unknown","Never","None","Can't Attack","None","src/Elune.webp");
    createCharacter("Aman'Thul","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","src/Aman.jpg");
    createCharacter("Silas Darkmoon","Gnome","None","Male","Lower","0","Azeroth","Vanilla","None","Can't Attack","Open World","src/Silas.png");
    createCharacter("Sabellian","Dragonkin","None","Male","Higher","0",["Azeroth","Outland"],"BC","Mage","Can't Attack","Open World","src/Sabellian.png");
    createCharacter("Prince Renathal","Venthyr","Venthyr","Male","Higher","0","Shadowlands","Shadowlands","None","Can't Attack","Open World","src/Renathal.png");
    createCharacter("Valeera Sanguinar","Elf","Neutral","Female","Lower","0","Azeroth","Vanilla","Rogue","Can't Attack","Open World","src/Valeera.jpeg");
    createCharacter("A'dal","Naaru","Neutral","Other","Higher","0","Outland","BC","None","Can't Attack","Open World","src/Adal.webp");
    createCharacter("Xe'ra","Naaru","Neutral","Other","Higher","1",["Azeroth","Argus"],"Legion","None","Can't Attack","Open World","src/Xera.webp");
    createCharacter("Nat Pagle","Human","Neutral","Male","Lower","0",["Azeroth","Draenor"],"Vanilla","None","Can't Attack","Open World","src/Nat.png");

    // Evil Boss
    createCharacter("Arthas Menethil","Human","Scourge","Male","Lower","1",["Azeroth","Shadowlands"],"WOTLK",["Death Knight","Paladin"],"Fightable",["Open World","Instance"],"src/Arthas.webp");
    createCharacter("Deathwing/Neltharion","Dragonkin","None","Male","Higher","1","Azeroth","Cataclysm","None","Killable",["Open World","Instance"],"src/Deathwing.jpg");
    createCharacter("Nefarian","Dragonkin","None","Male","Higher","1","Azeroth","Cataclysm","None","Killable","Instance","src/Nefarian.jpg");
    createCharacter("Onyxia","Dragonkin","None","Female","Higher","2","Azeroth","Vanilla","None","Killable","Instance","src/Onyxia.png");
    createCharacter("Kael'Thas Sunstrider","Elf","None","Male","Lower","1",["Azeroth","Outland","Shadowlands"],"BC","Mage","Killable",["Open World","Instance"],"src/Kael.jpg");
    createCharacter("Edwin Vancleef","Human","Defias","Male","Lower","1","Azeroth","Vanilla","Rogue","Can't Attack","None","src/Edwin.webp");
    createCharacter("Emperor Dagran Thaurissan","Dwarf","None","Male","Lower","1","Azeroth","Vanilla","None","Killable","Instance","src/Dagran.jpg");
    createCharacter("Captain Cookie","Murloc","Defias","Male","Lower","1","Azeroth","Vanilla","None","Killable","Instance","src/Cookie.png");
    createCharacter("Princess Theradras","Elemental","None","Female","Higher","1","Azeroth","Vanilla","None","Killable","Instance","src/Theradras.jpg");
    createCharacter("High Inquisitor Whitemane","Human","None","Female","Lower","1","Azeroth","Vanilla",["Priest","Death Knight"],"Killable",["Open World","Instance"],"src/Whitemane.png");
    createCharacter("Baron Titus Rivendare","Human","Scourge","Male","Lower","1","Azeroth","Vanilla","Death Knight","Killable","Instance","src/Baron.png");
    createCharacter("Hogger","Gnoll","None","Male","Lower","1","Azeroth","Vanilla","None","Killable",["Open World","Instance"],"src/Hogger.webp");
    createCharacter("Hakkar","Loa","None","Male","Higher","2",["Azeroth","Shadowlands"],"Vanilla","None","Killable","Instance","src/Hakkar.png");
    createCharacter("Mutanus the Devourer","Murloc","None","Male","Lower","1","Azeroth","Vanilla","None","Killable","Instance","src/Mutanus.png");
    createCharacter("Ragnaros","Elemental","None","Male","Higher","2","Azeroth","Vanilla","None","Killable","Instance","src/Ragnaros.png");
    createCharacter("C'Thun","Old God","None","Other","Higher","1","Azeroth","Vanilla","None","Fightable","Instance","src/Cthun.png");
    createCharacter("Gruul","Gronn","None","Male","Lower","1","Outland","BC","None","Killable","Instance","src/Gruul.png");
    createCharacter("Magtheridon","Demon","Burning Legion","Male","Lower","1","Outland","BC","None","Killable","Instance","src/Magtheridon.png");
    createCharacter("Archimonde","Demon","Burning Legion","Male","Higher","2",["Argus","Azeroth","Twisting-Nether"],"BC","Warlock","Killable","Instance","src/Archimonde.png");
    createCharacter("Kil'Jaeden","Demon","Burning Legion","Male","Higher","2",["Argus","Azeroth","Twisting-Nether"],"BC","Warlock","Killable","Instance","src/Kiljaeden.jpg");
    createCharacter("Anub'arak","Undead","Scourge","Male","Lower","1","Azeroth","WOTLK","None","Killable","Instance","src/Anubarak.webp");
    createCharacter("Jailer/Zovaal","Eternal One","None","Male","Higher","1","Shadowlands","Shadowlands","None","Killable",["Open World","Instance"],"src/Jailer.png");
    createCharacter("Mal'Ganis","Demon","Burning Legion","Male","Lower","3",["Azeroth","Twisting-Nether","Shadowlands"],"WOTLK","None","Killable","Instance","src/Malganis.webp");
    createCharacter("Ner'Zhul","Orc","Scourge","Male","Lower","1",["Azeroth","Outland"],"WOD",["Shaman","Warlock"],"Fightable","Instance","src/Nerzhul.png");
    createCharacter("Varimathras","Demon","Burning Legion","Male","Lower","2",["Azeroth","Twisting-Nether"],"Vanilla","Warlock","Killable","Instance","src/Varimathras.jpg");
    createCharacter("Kel'Thuzad","Undead","Scourge","Male","Lower","2",["Azeroth","Shadowlands"],"WOTLK","Mage","Killable",["Open World","Instance"],"src/Kelthuzad.webp");
    createCharacter("Malygos","Dragonkin","None","Male","Higher","1","Azeroth","WOTLK","None","Killable","Instance","src/Malygos.png");
    createCharacter("Yogg-Saron","Old God","None","Other","Higher","1","Azeroth","WOTLK","None","Killable","Instance","src/Yogg.png");
    createCharacter("Algalon the Observer","Elemental","None","Male","Higher","1","Unknown","WOTLK","None","Fightable","Instance","src/Algalon.png");
    createCharacter("Murozond","Dragonkin","None","Male","Higher","1","Azeroth","Cataclysm","None","Killable","Instance","src/Murozond.png");
    createCharacter("Mannoroth","Demon","Burning Legion","Male","Higher","1",["Azeroth","Outland","Draenor"],"Draenor","None","Killable","Instance","src/Mannoroth.webp");
    createCharacter("Queen Azshara","Naga","None","Female","Higher","0","Azeroth","BFA","Mage","Fightable","Instance","src/Azshara.png");
    createCharacter("Cho'Gall","Ogre","None","Male","Lower","1","Azeroth","Cataclysm",["Mage","Warlock"],"Killable",["Open World","Instance"],"src/Chogall.webp");
    createCharacter("Al'Akir","Elemental","None","Male","Higher","1","Azeroth","MOP","None","Killable","Instance","src/Alakir.webp");
    createCharacter("Lei Shen","Mogu","None","Male","Higher","1","Azeroth","MOP","None","Killable","Instance","src/Leishen.webp");
    createCharacter("Blackhand","Orc","None","Male","Lower","1","Draenor","WOD","Warrior","Killable","Instance","src/Blackhand.jpg");
    createCharacter("Helya","Val'Kyr","None","Female","Higher","0",["Azeroth","Shadowlands"],"Legion","None","Fightable",["Open World","Instance"],"src/Helya.jpg");
    createCharacter("Xavius","Satyr","Burning Legion","Male","Lower","1","Azeroth","Vanilla",["Mage","Warlock"],"Killable",["Open World","Instance"],"src/Xavius.png");
    createCharacter("Gul'Dan","Orc","Burning Legion","Male","Lower","1",["Azeroth","Draenor","Outland"],"WOD","Warlock","Killable",["Open World","Instance"],"src/Guldan.jpg");
    createCharacter("Tichondrius","Demon","Scourge","Male","Lower","1","Azeroth","Cataclysm","None","Killable","Instance","src/Tichondrius.png");
    createCharacter("King Mechagon","Robot","None","Male","Lower","1","Azeroth","BFA","None","Killable","Instance","src/Mechagon.jpg");
    createCharacter("G'huun","Old God","None","Other","Higher","1","Azeroth","BFA","None","Killable","Instance","src/Ghuun.jpg");
    createCharacter("N'Zoth","Old God","None","Other","Higher","1","Azeroth","BFA","None","Killable","Instance","src/Nzoth.webp");
    createCharacter("Y'Shaarj","Old God","None","Other","Higher","1","Azeroth","Never","None","Can't Attack","None","src/Yshaarj.webp");
    createCharacter("Sire Denathrius","Eternal One","None","Male","Lower","1","Shadowlands","Shadowlands","None","Fightable","Instance","src/Denathrius.jpg");
    createCharacter("Razageth","Dragonkin","None","Female","Higher","1","Azeroth","Dragonflight","None","Killable",["Open World","Instance"],"src/Razageth.png");
    createCharacter("Galakrond","Dragonkin","None","Male","Higher","1","Azeroth","Never","None","Can't Attack","None","src/Galakrond.jpg");
    createCharacter("Sargeras","Titan","Burning Legion","Male","Higher","0","Unknown","Legion","None","Can't Attack","None","src/Sargeras.png");
    createCharacter("Teron Gorefiend","Undead","None","Male","Lower","2","Outland","BC","Death Knight","Killable","Instance","src/Teron.jpg");
    createCharacter("Saphiron",["Undead","Dragonkin"],"Scourge","Male","Lower","3",["Azeroth","Shadowlands"],"WOTLK","None","Killable","Instance","src/Saphiron.webp");
    createCharacter("Syndragosa",["Undead","Dragonkin"],"Scourge","Female","Lower","2","Azeroth","WOTLK","None","Killable","Instance","src/Syndragosa.webp");

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
var numberOfGuess = 0;

function resetSeed() {
    numberOfGuess = 0;
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
    let winDiv = document.getElementById("victoryDiv");
    winDiv.style.display = "none";
    let searchDiv = document.getElementById("searchDiv");
    searchDiv.style.opacity = 100;
    searchDiv.style.pointerEvents = "auto";
    displayColorCoding();
}

function compare(a,b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}

function updateSearch(searchValue) {
    searchValue = searchValue.toLowerCase().trim();
    let selectionMenu = document.getElementById("selection-menu");
    selectionMenu.innerHTML = "";
    if (searchValue.length > 0) {
        let searchList = characterList.filter((character) => {
            const name = character.name.toLowerCase();
            return name.includes(searchValue);
        });
        searchList.sort(compare);
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
    selectionMenu.scrollTop = 0;
}

function createBox(guessValue,selectedValue) {
    let boxDiv = document.createElement("div");
    let sizeText;
    if (Array.isArray(guessValue)) {
        let lengthArray = guessValue.length;
        if (lengthArray == 1) { sizeText = "17px"; }
        else if (lengthArray == 2) { sizeText = "16px"; }
        else if (lengthArray == 3) { sizeText = "14px"; }
        else if (lengthArray == 4) { sizeText = "12px"; }
        else if (lengthArray == 5) { sizeText = "10px"; }
        else if (lengthArray == 6) { sizeText = "8px"; }
        else if (lengthArray == 7) { sizeText = "6px"; }
    }
    else {
        sizeText = "17px";
    }
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
        for (const elem of guessValue) {
            let tmpP = document.createElement("p");
            tmpP.innerHTML =  elem;
            tmpP.style.fontSize = sizeText;
            boxDiv.appendChild(tmpP);
        }
    }
    else if ((Array.isArray(guessValue))&&(!Array.isArray(selectedValue))) { // Guess is Array
        if (guessValue.includes(selectedValue)) { boxDiv.className = "info-box partial"; }
        else { boxDiv.className = "info-box false"; }
        for (const elem of guessValue) {
            let tmpP = document.createElement("p");
            tmpP.innerHTML =  elem;
            tmpP.style.fontSize = sizeText;
            boxDiv.appendChild(tmpP);
        }
    }
    else if ((!Array.isArray(guessValue))&&(Array.isArray(selectedValue))) { // Selected is array
        if (selectedValue.includes(guessValue)) { boxDiv.className = "info-box partial"; }
        else { boxDiv.className = "info-box false"; }
        let tmpP = document.createElement("p");
        tmpP.innerHTML = guessValue;
        tmpP.style.fontSize = sizeText;
        boxDiv.appendChild(tmpP);
    }
    else if ((!Array.isArray(guessValue))&&(!Array.isArray(selectedValue))) { // Les deux ne sont pas array
        if (guessValue == selectedValue) { boxDiv.className = "info-box true"; }
        else { boxDiv.className = "info-box false"; }
        let tmpP = document.createElement("p");
        tmpP.innerHTML = guessValue;
        tmpP.style.fontSize = sizeText;
        boxDiv.appendChild(tmpP);
    }
    return boxDiv;
}

function createIconBox(character) {
    let boxDiv = document.createElement("div");
    if (character.name != selectedCharacter.name) { boxDiv.className = "info-box false"; }
    else { boxDiv.className = "info-box true"; }
    let iconBox = document.createElement("img");
    iconBox.src = character.icon;
    boxDiv.setAttribute('onmouseover','showTooltipCharacter("' + character.name + '")');
    boxDiv.setAttribute('onmouseout','hideTooltip()');
    boxDiv.appendChild(iconBox);
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
        newBoxLine.appendChild(createIconBox(character));
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
    let selectionMenu = document.getElementById("selection-menu");
    selectionMenu.innerHTML = "";
    selectionMenu.className = "selection-menu";
    if (character == selectedCharacter) {
        winScreen();
    }
    numberOfGuess++;
    displayColorCoding();
}

const tooltipSpan = document.getElementById("tooltip");
document.addEventListener('mousemove',function(e) {
    tooltipSpan.style.top = (e.clientY + 20) + 'px';
	tooltipSpan.style.left = (e.clientX + 20) + 'px';
});

var headerTooltip = [];
headerTooltip["Character"] = "Icon of the character. Mouseover the icon to show the name.";
headerTooltip["Race"] = "Race of the character, can be multiple if hybrid.";
headerTooltip["Faction"] = "Main affiliation over the game. If multiple then only the latest.";
headerTooltip["Gender"] = "Male, Female, Other or Unknown.";
headerTooltip["Age"] = "Is the character age higher or lower then 10000.";
headerTooltip["Death"] = "How much time has each occurence of the character died lore-wise.";
headerTooltip["Zone"] = "Which Planet has the character travelled to in his life?";
headerTooltip["First"] = "What is the first expansion (if any) in which a player could directly meet the character?";
headerTooltip["Class"] = "Which of the 13 playable class is the closest to the character class? None if nothing similar.";
headerTooltip["Killable"] = "Is the character currently fightable or killable by players? Can't Attack, Fightable or Killable.";
headerTooltip["Content"] = "In which type of content can a player currently meet the character? Open World or Instance";

function showTooltip(header) {
    let tooltipText = headerTooltip[header];
    tooltipSpan.innerHTML = tooltipText;
    tooltipSpan.style.display = "block";
}

function showTooltipCharacter(name) {
    tooltipSpan.innerHTML = name;
    tooltipSpan.style.display = "block";
}

function hideTooltip() {
    tooltipSpan.style.display = "none";
}

function winScreen() {
    let winDiv = document.getElementById("victoryDiv");
    winDiv.style.display = "block";
    let searchDiv = document.getElementById("searchDiv");
    searchDiv.style.opacity = 0;
    searchDiv.style.pointerEvents = "none";
}

function closeVictoryScreen() {
    let winDiv = document.getElementById("victoryDiv");
    winDiv.style.display = "none";
}

function displayColorCoding() {
    if (numberOfGuess > 3) { document.querySelector('.bottom').style.display = 'none'; }
    else { document.querySelector('.bottom').style.display = 'flex'; }
}