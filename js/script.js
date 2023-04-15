var characterList = []; // List of guessable characters
var characterDict = []; // Dicitonnary of characters: String(name) -> Character
var options; // Classe Options de l'utilisateur
const tooltipSpan = document.getElementById("tooltip");

class Character {
    constructor(name,race,affiliation,gender,age,deathCount,zone,iga,playerClass,killable,content,quest,hearthstone,weapon,icon) {
        this.name = name;
        this.informations = [];
        this.informations["Race"] = race;
        this.informations["Faction"] = affiliation;
        this.informations["Gender"] = gender;
        this.informations["Age"] = age;
        this.informations["Death"] = deathCount;
        this.informations["Zone"] = zone;
        this.informations["First"] = iga;
        this.informations["Class"] = playerClass;
        this.informations["Killable"] = killable;
        this.informations["Content"] = content;
        this.informations["Quest"] = quest;
        this.informations["Hearthstone"] = hearthstone;
        this.informations["Weapon"] = weapon;
        this.icon = icon;
    }
}

class Options {
    constructor() {
        this.clues = [];
        this.cluesText = [];
        this.headerTooltip = [];
        this.numberSelectedOptions = 10;
        this.maxClue = 10;
        this.minClue = 5;
        this.gameStarted = false;
        this.loadClues();
        this.loadCluesText();
        this.loadHeaderTooltip();
    }

    loadClues() {
        this.clues["Race"] = true;
        this.clues["Faction"] = true;
        this.clues["Gender"] = true;
        this.clues["Age"] = true;
        this.clues["Death"] = true;
        this.clues["Zone"] = true;
        this.clues["First"] = true;
        this.clues["Class"] = true;
        this.clues["Killable"] = true;
        this.clues["Content"] = true;
        this.clues["Quest"] = false;
        this.clues["Hearthstone"] = false;
        this.clues["Weapon"] = false;
    }

    loadCluesText() {
        this.cluesText["Race"] = "Race";
        this.cluesText["Faction"] = "Faction";
        this.cluesText["Gender"] = "Gender";
        this.cluesText["Age"] = "Age";
        this.cluesText["Death"] = "Death Count";
        this.cluesText["Zone"] = "Zone";
        this.cluesText["First"] = "First Meeting";
        this.cluesText["Class"] = "Class";
        this.cluesText["Killable"] = "Killable";
        this.cluesText["Content"] = "Content";
        this.cluesText["Quest"] = "Quest";
        this.cluesText["Hearthstone"] = "Hearthstone";
        this.cluesText["Weapon"] = "Weapon";
    }

    loadHeaderTooltip() {
        this.headerTooltip["Character"] = "Icon of the character. Mouseover the icon to show the name.";
        this.headerTooltip["Race"] = "Race of the character, can be multiple if hybrid.";
        this.headerTooltip["Faction"] = "Main affiliation over the game. If multiple then only the latest.";
        this.headerTooltip["Gender"] = "Male, Female, Other or Unknown.";
        this.headerTooltip["Age"] = "Is the character age higher or lower than 10000.";
        this.headerTooltip["Death"] = "How much time has each occurence of the character died lore-wise.";
        this.headerTooltip["Zone"] = "Which Planet/Dimension has the character been to?";
        this.headerTooltip["First"] = "What is the first expansion (if any) in which a player could directly meet the character?";
        this.headerTooltip["Class"] = "Which of the 13 playable class is the closest to the character class? None if nothing similar.";
        this.headerTooltip["Killable"] = "Is the character currently fightable or killable by players? (Dragonflight Expansion) Can't Attack, Fightable or Killable.";
        this.headerTooltip["Content"] = "In which type of content can a player currently meet the character? (Dragonflight Expansion) Open World or Instance";
        this.headerTooltip["Quest"] = "Can the character currently give players a Quest? (Dragonflight Expansion) Yes or No";
        this.headerTooltip["Hearthstone"] = "Does the character have an Hearthstone card of him? Yes or No";
        this.headerTooltip["Weapon"] = "What type of weapon does the character currently fight with? (Last known weapon if dead) Sword, Axe, Staff ect...";
    }
}

function createCharacter(name,race,affiliation,gender,age,deathCount,zone,iga,playerClass,killable,content,quest,hearthstone,weapon,icon) {
    let raceArray = [];
    let affiliationArray = [];
    let zoneArray = [];
    let playerClassArray = [];
    let contentArray = [];
    let weaponArray = [];
    if (Array.isArray(race)) { raceArray = raceArray.concat(race); } else { raceArray.push(race); }
    if (Array.isArray(affiliation)) { affiliationArray = affiliationArray.concat(affiliation); } else { affiliationArray.push(affiliation); }
    if (Array.isArray(zone)) { zoneArray = zoneArray.concat(zone); } else { zoneArray.push(zone); }
    if (Array.isArray(playerClass)) { playerClassArray = playerClassArray.concat(playerClass); } else { playerClassArray.push(playerClass); }
    if (Array.isArray(content)) { contentArray = contentArray.concat(content); } else { contentArray.push(content); }
    if (Array.isArray(weapon)) { weaponArray = weaponArray.concat(weapon); } else { weaponArray.push(weapon); }
    let character = new Character(name,raceArray,affiliationArray,gender,age,deathCount,zoneArray,iga,playerClassArray,killable,contentArray,quest,hearthstone,weaponArray,icon);
    characterList.push(character);
    let dictName = name.toLowerCase().trim();
    characterDict[dictName] = character;
}

// Potential clue:
// Race(...), Faction/Affiliation(Horde,Alliance,Neutral,Burning Legion,Other), Gender(Male,Female,Other), Age(Lower,Old), DeathCount(0+), Zone(Continent), InGameFirstApparition(Extensions), Class(Player class), Killable(Can't Attack,Fightable,Killable), Content(None,Open World,Instance Boss)

// New clue?: Can Give Quest?, has hearthstone card? uses a weapon?

function loadAllCharacters() {
    // Horde
    createCharacter("Thrall","Orc","Horde","Male","Lower","0",["Azeroth","Outland","Draenor","Shadowlands"],"Vanilla",["Shaman","Warrior"],"Can't Attack","Open World","Yes","Yes",["Axe","Hammer"],"src/Thrall.webp");
    createCharacter("Sylvanas Windrunner","Undead","Horde","Female","Lower","3","Shadowlands","Vanilla","Hunter","Fightable",["Open World","Instance"],"Yes","Yes",["Bow","Dagger"],"src/Sylvanas.png");
    createCharacter("Cairne Bloodhoof","Tauren","Horde","Male","Lower","1","Azeroth","Vanilla","Warrior","Can't Attack","None","Yes","Yes","Axe","src/Cairne.png");
    createCharacter("Baine Bloodhoof","Tauren","Horde","Male","Lower","0","Azeroth","Vanilla","Warrior","Can't Attack","Open World","Yes","Yes","Axe","src/Baine.png");
    createCharacter("Rexxar",["Orc","Ogre"],"Horde","Male","Lower","0","Azeroth","BC","Hunter","Can't Attack",["Open World","Instance"],"Yes","Yes","Axe","src/Rexxar.png");
    createCharacter("Vol'Jin","Troll","Horde","Male","Lower","1","Azeroth","Vanilla","Shaman","Can't Attack","None","Yes","Yes","Blade","src/Vol'jin.png");
    createCharacter("Lor'themar Theron","Elf","Horde","Male","Lower","0","Azeroth","BC","Hunter","Killable","Open World","Yes","Yes","Sword","src/Lor'themar.png");
    createCharacter("Jastor Gallywix","Goblin","Horde","Male","Lower","0","Azeroth","Cataclysm","None","Can't Attack","Open World","Yes","Yes","Staff","src/Gallywix.png");
    createCharacter("Varok Saurfang","Orc","Horde","Male","Lower","1","Azeroth","Vanilla","Warrior","Can't Attack","None","Yes","Yes","Axe","src/Varok.png");
    createCharacter("Drek'Thar","Orc","Horde","Male","Lower","0","Azeroth","Vanilla","Shaman","Killable",["Open World","Instance"],"Yes","Yes","Axe","src/Drek'Thar.png");
    createCharacter("Garrosh Hellscream","Orc","Horde","Male","Lower","1",["Azeroth","Outland","Draenor","Shadowlands"],"BC","Warrior","Fightable",["Open World","Instance"],"Yes","Yes","Axe","src/Garrosh.png");
    createCharacter("Grommash Hellscream","Orc","Horde","Male","Lower","1",["Azeroth","Draenor"],"WOD","Warrior","Can't Attack",["Open World","Instance"],"Yes","Yes","Axe","src/Grommash.png");
    createCharacter("Magatha Grimtotem","Tauren","Horde","Female","Lower","0","Azeroth","Vanilla","Shaman","Can't Attack","Open World","Yes","No","Staff","src/Magatha.jpg");
    createCharacter("Gazlowe","Goblin","Horde","Male","Lower","0","Azeroth","Vanilla","None","Can't Attack","Open World","Yes","Yes","Robot","src/Gazlowe.png");
    createCharacter("Rokhan","Troll","Horde","Male","Lower","0","Azeroth","Vanilla",["Hunter","Shaman"],"Killable",["Open World","Instance"],"Yes","No","Blade","src/Rokhan.jpg");
    createCharacter("Ji Firepaw","Pandaren","Horde","Male","Lower","0","Azeroth","MOP","Monk","Can't Attack","Open World","Yes","No","None","src/Ji.png");
    createCharacter("Thalyssra","Elf","Horde","Female","Lower","0","Azeroth","Legion","Mage","Can't Attack","Open World","Yes","No","Staff","src/Thalyssra.jpg");
    createCharacter("Queen Talanji","Troll","Horde","Female","Lower","0","Azeroth","BFA","Priest","Can't Attack","Open World","Yes","Yes","Staff","src/Talanji.png");
    createCharacter("King Rastakhan","Troll","Horde","Male","Lower","1","Azeroth","BFA","None","Killable","Instance","Yes","No","Sword","src/Rastakhan.png");
    createCharacter("Garona Halforcen",["Orc","Draenei"],"Horde","Female","Lower","0","Azeroth","WOTLK","Rogue","Can't Attack","Open World","Yes","No","Dagger","src/Garona.png");
    createCharacter("Nathanos Blightcaller","Undead","Horde","Male","Lower","1","Azeroth","BFA","Hunter","Fightable","Open World","Yes","Yes","Bow","src/Nathanos.png");
    createCharacter("Lilian Voss","Undead","Horde","Female","Lower","1","Azeroth","Vanilla","Rogue","Fightable",["Open World","Instance"],"Yes","Yes","Dagger","src/Lilian.png");

    // Alliance
    createCharacter("Jaina Proudmoore","Human","Alliance","Female","Lower","0",["Azeroth","Shadowlands"],"Vanilla","Mage","Fightable",["Open World","Instance"],"Yes","Yes","Staff","src/Jaina.jpg");
    createCharacter("Daelin Proudmoore","Human","Alliance","Male","Lower","1","None","None",["Paladin","Warrior"],"Can't Attack","None","No","No","Sword","src/Daelin.webp");
    createCharacter("Khadgar","Human","Alliance","Male","Lower","0",["Azeroth","Draenor","Outland","Argus","Shadowlands"],"Vanilla","Mage","Can't Attack",["Open World","Instance"],"Yes","Yes","Staff","src/Khadgar.png");
    createCharacter("Anduin Wrynn","Human","Alliance","Male","Lower","0",["Azeroth","Shadowlands"],"Vanilla","Priest","Fightable",["Open World","Instance"],"Yes","Yes","Sword","src/Anduin.png");
    createCharacter("Varian Wrynn","Human","Alliance","Male","Lower","1", ["Azeroth","Draenor"],"Vanilla","Warrior","Can't Attack","None","Yes","Yes","Sword","src/Varian.png");
    createCharacter("Muradin Bronzebeard","Dwarf","Alliance","Male","Lower","0",["Azeroth","Argus"],"Vanilla","Warrior","Killable",["Open World","Instance"],"Yes","No","Hammer","src/Muradin.jpg");
    createCharacter("Brann Bronzebeard","Dwarf","Alliance","Male","Lower","0","Azeroth","Vanilla","None","Can't Attack",["Open World","Instance"],"Yes","Yes","Gun","src/Brann.png");
    createCharacter("Gelbin Mekkatorque","Gnome","Alliance","Male","Lower","0","Azeroth","Vanilla","None","Fightable",["Open World","Instance"],"Yes","Yes",["Robot","Hammer"],"src/Gelbin.png");
    createCharacter("Tyrande Whisperwind","Elf","Alliance","Female","Higher","0",["Azeroth","Shadowlands"],"Vanilla",["Priest","Hunter"],"Fightable",["Open World","Instance"],"Yes","Yes",["Bow","Dagger"],"src/Tyrande.jpg");
    createCharacter("Prophet Velen","Draenei","Alliance","Male","Higher","0",["Azeroth","Argus"],"BC","Priest","Can't Attack",["Open World","Instance"],"Yes","Yes","Staff","src/Velen.png");
    createCharacter("Malfurion Stormrage","Elf","Alliance","Male","Higher","0","Azeroth","Vanilla","Druid","Can't Attack",["Open World","Instance"],"Yes","Yes","Staff","src/Malfurion.png");
    createCharacter("Genn Greymane","Worgen","Alliance","Male","Lower","0","Azeroth","Cataclysm","Warrior","Can't Attack",["Open World","Instance"],"Yes","Yes","None","src/Genn.png");
    createCharacter("Aysa Cloudsinger","Pandaren","Alliance","Female","Lower","0","Azeroth","MOP","Monk","Can't Attack","Open World","Yes","No","None","src/Aysa.jpg");
    createCharacter("Turalyon","Human","Alliance","Male","Lower","0",["Azeroth","Argus"],"Legion",["Priest","Paladin"],"Killable",["Open World","Instance"],"Yes","Yes","Sword","src/Turalyon.png");
    createCharacter("Moira Thaurissan","Dwarf","Alliance","Female","Lower","0","Azeroth","Vanilla","Priest","Killable","Open World","Yes","No","None","src/Moira.png");
    createCharacter("Falstad Wildhammer","Dwarf","Alliance","Male","Lower","0","Azeroth","Vanilla","None","Killable","Open World","Yes","No","Hammer","src/Falstad.jpg");
    createCharacter("Uther Lightbringer","Human","Alliance","Male","Lower","1",["Azeroth","Shadowlands"],"Shadowlands","Paladin","Can't Attack",["Open World","Instance"],"Yes","Yes","Hammer","src/Uther.jpg");
    createCharacter("Terenas Menethil II","Human","Alliance","Male","Lower","1","Azeroth","None","None","Can't Attack","None","No","No","None","src/Terenas.png");
    createCharacter("Alleria Windrunner","Elf","Alliance","Female","Lower","0",["Azeroth","Argus"],"Legion","Hunter","Fightable",["Open World", "Instance"],"Yes","No","Bow","src/Alleria.jpg");
    createCharacter("Maiev Shadowsong","Elf","Alliance","Female","Higher","0",["Azeroth","Outland"],"BC","None","Can't Attack",["Open World", "Instance"],"Yes","Yes","Chakram","src/Maiev.jpg");
    createCharacter("Tirion Fordring","Human","Alliance","Male","Lower","1","Azeroth","WOTLK","Paladin","Killable",["Open World","Instance"],"Yes","Yes","Sword","src/Tirion.png");
    createCharacter("Yrel","Draenei","Alliance","Female","Lower","0",["Azeroth","Draenor"],"WOD",["Paladin","Priest"],"Can't Attack",["Open World","Instance"],"Yes","Yes","Hammer","src/Yrel.png");
    createCharacter("Leeroy Jenkins","Human","Alliance","Male","Lower","0",["Azeroth","Draenor"],"WOD","Paladin","Can't Attack",["Open World","Instance"],"No","Yes","Sword","src/Leeroy.png");
    
    // Neutral
    createCharacter("Zul'Jin","Troll","Neutral","Male","Lower","1","Azeroth","Vanilla","Warrior","Can't Attack","None","No","Yes","Blade","src/Zul'jin.png");
    createCharacter("Illidan Stormrage","Elf","None","Male","Higher","0",["Azeroth","Outland","Argus"],"BC","Demon Hunter","Killable",["Open World","Instance"],"Yes","Yes","Warglaive","src/Illidan.jpg");
    createCharacter("Lorewalker Cho","Pandaren","None","Male","Lower","0","Azeroth","MOP","None","Can't Attack","Open World","Yes","Yes","None","src/Cho.png");
    createCharacter("Lady VashJ","Naga","None","Female","Higher","1",["Azeroth","Outland","Shadowlands"],"BC","None","Killable",["Open World","Instance"],"No","Yes","Bow","src/VashJ.webp");
    createCharacter("Wrathion","Dragonkin","None","Male","Higher","0","Azeroth","MOP","None","Can't Attack",["Open World","Instance"],"Yes","Yes","Dagger","src/Wrathion.png");
    createCharacter("Chromie","Dragonkin","None","Female","Higher","0","Azeroth","BC","Mage","Can't Attack",["Open World","Instance"],"Yes","No","None","src/Chromie.jpg");
    createCharacter("Ysera","Dragonkin","None","Female","Higher","1","Azeroth","Cataclysm","None","Killable",["Open World","Instance"],"Yes","Yes","None","src/Ysera.png");
    createCharacter("Alexstraza","Dragonkin","None","Female","Higher","0","Azeroth","Cataclysm","None","Can't Attack",["Open World","Instance"],"Yes","Yes","None","src/Alexstraza.webp");
    createCharacter("Kalecgos","Dragonkin","None","Male","Higher","0","Azeroth","Cataclysm","Mage","Can't Attack",["Open World","Instance"],"Yes","Yes","None","src/Kalecgos.jpg");
    createCharacter("Nozdormu","Dragonkin","None","Male","Higher","0","Azeroth","Cataclysm","None","Can't Attack",["Open World","Instance"],"Yes","Yes","None","src/Nozdormu.webp");
    createCharacter("Akama","Broken","None","Male","Higher","0","Outland","BC","Shaman","Can't Attack",["Open World","Instance"],"Yes","Yes","Scythe","src/Akama.webp");
    createCharacter("Loken","Giant","None","Male","Higher","1","Azeroth","WOTLK","None","Killable",["Open World","Instance"],"Yes","No","None","src/Loken.png");
    createCharacter("Thorim","Giant","None","Male","Higher","1","Azeroth","WOTLK","Warrior","Fightable",["Open World","Instance"],"Yes","No","Hammer","src/Thorim.png");
    createCharacter("Millhouse Manastorm","Gnome","None","Male","Lower","0","Azeroth","BC","Mage","Fightable",["Open World","Instance"],"No","Yes","Staff","src/Millhouse.png");
    createCharacter("Millificent Manastorm","Gnome","None","Female","Lower","0","Azeroth","BC","None","Fightable",["Open World","Instance"],"No","No","Sword","src/Millificent.png");
    createCharacter("Taran Zhu","Pandaren","Neutral","Male","Lower","0","Azeroth","MOP","Monk","Fightable",["Open World","Instance"],"Yes","No","Stick","src/Taran.png");
    createCharacter("Chen Stormstout","Pandaren","None","Male","Lower","0","Azeroth","MOP","Monk","Can't Attack",["Open World","Instance"],"Yes","No","Stick","src/Chen.png");
    createCharacter("Lili Stormstout","Pandaren","None","Female","Lower","0","Azeroth","MOP","Monk","Can't Attack","Open World","Yes","No","Stick","src/Lili.png");
    createCharacter("Odyn","Giant","None","Male","Higher","0","Azeroth","Legion","Warrior","Fightable",["Open World","Instance"],"Yes","No","None","src/Odyn.png");
    createCharacter("Medivh","Human","None","Male","Lower","1","Azeroth","None","Mage","Can't Attack","None","No","Yes","Staff","src/Medivh.jpg");
    createCharacter("Cenarius","God","None","Male","Higher","2","Azeroth","Legion","Druid","Killable",["Open World","Instance"],"Yes","Yes","None","src/Cenarius.webp");
    createCharacter("Grand Magistrix Elisande","Elf","Burning Legion","Female","Higher","1","Azeroth","Legion","None","Killable","Instance","No","No","None","src/Elisande.jpg");
    createCharacter("Argus the Unmaker","Titan","None","Male","Higher","1","Argus","Legion","None","Killable","Instance","No","No","Scythe","src/Argus.png");
    createCharacter("Aggramar","Titan","None","Male","Higher","0","Unknown","Legion","Legion","Fightable","Instance","No","No","Sword","src/Aggramar.jpg");
    createCharacter("Bwonsamdi","Loa","None","Male","Higher","0",["Azeroth","Shadowlands"],"BFA","None","Fightable",["Open World","Instance"],"Yes","Yes","None","src/Bwonsamdi.png");
    createCharacter("Winter Queen","Eternal One","None","Female","Higher","0","Shadowlands","Shadowlands","None","Can't Attack","Open World","Yes","No","None","src/Winter.png");
    createCharacter("Pelagos","Eternal One","None","Male","Lower","1","Shadowlands","Shadowlands","None","Can't Attack","Open World","Yes","Yes","None","src/Pelagos.jpg");
    createCharacter("Draka","Orc","None","Female","Lower","1","Shadowlands","Shadowlands",["Warrior","Rogue"],"Can't Attack","Open World","Yes","Yes","Dagger","src/Draka.jpg");
    createCharacter("Golganneth","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","No","No","None","src/Golganneth.png");
    createCharacter("Norgannon","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","No","No","None","src/Norgannon.jpg");
    createCharacter("Eonar","Titan","None","Female","Higher","0","Unknown","Legion","None","Can't Attack","Instance","No","No","None","src/Eonar.png");
    createCharacter("Khaz'goroth","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","No","No","None","src/Khaz.png");
    createCharacter("Bolvar Fordragon","Human","None","Male","Lower","0",["Azeroth","Shadowlands"],"WOTLK","Death Knight","Can't Attack",["Open World","Instance"],"Yes","Yes","Hammer","src/Bolvar.png");
    createCharacter("Elune","God","None","Female","Higher","Unknown","Unknown","Never","None","Can't Attack","None","No","No","Unknown","src/Elune.webp");
    createCharacter("Aman'Thul","Titan","None","Male","Higher","0","Unknown","Legion","None","Can't Attack","Instance","No","No","None","src/Aman.jpg");
    createCharacter("Silas Darkmoon","Gnome","Neutral","Male","Lower","0","Azeroth","Vanilla","None","Can't Attack","Open World","Yes","Yes","Staff","src/Silas.png");
    createCharacter("Sabellian","Dragonkin","None","Male","Higher","0",["Azeroth","Outland"],"BC","Mage","Can't Attack","Open World","Yes","No","None","src/Sabellian.png");
    createCharacter("Prince Renathal","Venthyr","Venthyr","Male","Higher","0","Shadowlands","Shadowlands","None","Can't Attack","Open World","Yes","Yes","None","src/Renathal.png");
    createCharacter("Valeera Sanguinar","Elf","Neutral","Female","Lower","0",["Azeroth","Draenor"],"WOTLK","Rogue","Can't Attack","Open World","Yes","Yes","Dagger","src/Valeera.jpeg");
    createCharacter("A'dal","Naaru","Neutral","Other","Higher","0","Outland","BC","None","Can't Attack","Open World","Yes","No","None","src/Adal.webp");
    createCharacter("Xe'ra","Naaru","Neutral","Other","Higher","1",["Azeroth","Argus"],"Legion","None","Can't Attack","Open World","No","No","None","src/Xera.webp");
    createCharacter("Nat Pagle","Human","Neutral","Male","Lower","0",["Azeroth","Draenor"],"Vanilla","None","Can't Attack","Open World","Yes","Yes","Fishing Rod","src/Nat.png");
    createCharacter("Lunara","Dryad","Neutral","Female","Higher","0","Azeroth","Legion","Druid","Can't Attack","Open World","No","Yes","Spear","src/Lunara.png");
    createCharacter("Hemet Nesingwary","Dwarf","Neutral","Male","Lower","0",["Azeroth","Outland","Draenor"],"Vanilla","Hunter","Can't Attack","Open World","Yes","Yes","Gun","src/Hemet.png");

    // Evil Boss
    createCharacter("Arthas Menethil","Human","Scourge","Male","Lower","1",["Azeroth","Shadowlands"],"WOTLK",["Death Knight","Paladin"],"Fightable",["Open World","Instance"],"Yes","Yes","Sword","src/Arthas.webp");
    createCharacter("Deathwing/Neltharion","Dragonkin","None","Male","Higher","1","Azeroth","Cataclysm","None","Killable",["Open World","Instance"],"No","Yes","None","src/Deathwing.jpg");
    createCharacter("Nefarian","Dragonkin","None","Male","Higher","1","Azeroth","Cataclysm","None","Killable","Instance","No","Yes","None","src/Nefarian.jpg");
    createCharacter("Onyxia","Dragonkin","None","Female","Higher","2","Azeroth","Vanilla","None","Killable","Instance","No","Yes","None","src/Onyxia.png");
    createCharacter("Kael'Thas Sunstrider","Elf","None","Male","Lower","1",["Azeroth","Outland","Shadowlands"],"BC","Mage","Killable",["Open World","Instance"],"Yes","Yes","Sword","src/Kael.jpg");
    createCharacter("Edwin Vancleef","Human","Pirate","Male","Lower","1","Azeroth","Vanilla","Rogue","Can't Attack","None","No","Yes","Dagger","src/Edwin.webp");
    createCharacter("Emperor Dagran Thaurissan","Dwarf","None","Male","Lower","1","Azeroth","Vanilla","None","Killable","Instance","No","Yes","Hammer","src/Dagran.jpg");
    createCharacter("Captain Cookie","Murloc","Pirate","Male","Lower","1","Azeroth","Vanilla","None","Killable","Instance","No","Yes","None","src/Cookie.png");
    createCharacter("Princess Theradras","Elemental","None","Female","Higher","1","Azeroth","Vanilla","None","Killable","Instance","No","No","None","src/Theradras.jpg");
    createCharacter("High Inquisitor Whitemane","Human","None","Female","Lower","1","Azeroth","Vanilla",["Priest","Death Knight"],"Killable",["Open World","Instance"],"No","Yes","Staff","src/Whitemane.png");
    createCharacter("Baron Titus Rivendare","Human","Scourge","Male","Lower","1","Azeroth","Vanilla","Death Knight","Killable","Instance","No","Yes","Sword","src/Baron.png");
    createCharacter("Hogger","Gnoll","None","Male","Lower","1","Azeroth","Vanilla","None","Killable",["Open World","Instance"],"No","Yes","Axe","src/Hogger.webp");
    createCharacter("Hakkar","Loa","None","Male","Higher","2",["Azeroth","Shadowlands"],"Vanilla","None","Killable","Instance","No","Yes","None","src/Hakkar.png");
    createCharacter("Mutanus the Devourer","Murloc","None","Male","Lower","1","Azeroth","Vanilla","None","Killable","Instance","No","Yes","None","src/Mutanus.png");
    createCharacter("Ragnaros","Elemental","None","Male","Higher","2","Azeroth","Vanilla","None","Killable","Instance","No","Yes","Hammer","src/Ragnaros.png");
    createCharacter("C'Thun","Old God","None","Other","Higher","1","Azeroth","Vanilla","None","Fightable","Instance","No","Yes","None","src/Cthun.png");
    createCharacter("Gruul","Gronn","None","Male","Lower","1","Outland","BC","None","Killable","Instance","No","Yes","None","src/Gruul.png");
    createCharacter("Magtheridon","Demon","Burning Legion","Male","Lower","1","Outland","BC","None","Killable","Instance","No","Yes","Blade","src/Magtheridon.png");
    createCharacter("Archimonde","Demon","Burning Legion","Male","Higher","2",["Argus","Azeroth","Twisting-Nether","Draenor"],"BC","Warlock","Killable","Instance","No","No","None","src/Archimonde.png");
    createCharacter("Kil'Jaeden","Demon","Burning Legion","Male","Higher","2",["Argus","Azeroth","Twisting-Nether"],"BC","Warlock","Killable","Instance","No","No","None","src/Kiljaeden.jpg");
    createCharacter("Anub'arak","Undead","Scourge","Male","Lower","1","Azeroth","WOTLK","None","Killable","Instance","No","Yes","None","src/Anubarak.webp");
    createCharacter("Jailer/Zovaal","Eternal One","None","Male","Higher","1","Shadowlands","Shadowlands","None","Killable",["Open World","Instance"],"No","Yes","Hammer","src/Jailer.png");
    createCharacter("Mal'Ganis","Demon","Burning Legion","Male","Lower","3",["Azeroth","Twisting-Nether","Shadowlands"],"WOTLK","None","Killable","Instance","No","Yes","None","src/Malganis.webp");
    createCharacter("Ner'Zhul","Orc","Scourge","Male","Lower","1",["Azeroth","Outland","Draenor"],"WOD",["Shaman","Warlock"],"Fightable","Instance","No","No","Staff","src/Nerzhul.png");
    createCharacter("Varimathras","Demon","Burning Legion","Male","Lower","2",["Azeroth","Twisting-Nether"],"Vanilla","Warlock","Killable","Instance","No","No","None","src/Varimathras.jpg");
    createCharacter("Kel'Thuzad","Undead","Scourge","Male","Lower","3",["Azeroth","Shadowlands"],"WOTLK","Mage","Killable",["Open World","Instance"],"No","Yes","None","src/Kelthuzad.webp");
    createCharacter("Malygos","Dragonkin","None","Male","Higher","1","Azeroth","WOTLK","None","Killable","Instance","Yes","Yes","None","src/Malygos.png");
    createCharacter("Yogg-Saron","Old God","None","Other","Higher","1","Azeroth","WOTLK","None","Killable","Instance","No","Yes","None","src/Yogg.png");
    createCharacter("Algalon the Observer","Elemental","None","Male","Higher","1","Unknown","WOTLK","None","Fightable","Instance","No","No","Dagger","src/Algalon.png");
    createCharacter("Murozond","Dragonkin","None","Male","Higher","1","Azeroth","Cataclysm","None","Killable","Instance","No","Yes","None","src/Murozond.png");
    createCharacter("Mannoroth","Demon","Burning Legion","Male","Higher","2",["Azeroth","Outland","Draenor"],"Draenor","None","Killable","Instance","No","No","Blade","src/Mannoroth.webp");
    createCharacter("Queen Azshara","Naga","None","Female","Higher","0","Azeroth","BFA","Mage","Fightable","Instance","No","Yes","Spear","src/Azshara.png");
    createCharacter("Cho'Gall","Ogre","None","Male","Lower","1","Azeroth","Cataclysm",["Mage","Warlock"],"Killable",["Open World","Instance"],"No","Yes","Hammer","src/Chogall.webp");
    createCharacter("Al'Akir","Elemental","None","Male","Higher","1","Azeroth","MOP","None","Killable","Instance","No","Yes","Sword","src/Alakir.webp");
    createCharacter("Lei Shen","Mogu","None","Male","Higher","1","Azeroth","MOP","None","Killable","Instance","No","No","Axe","src/Leishen.webp");
    createCharacter("Blackhand","Orc","None","Male","Lower","1","Draenor","WOD","Warrior","Killable","Instance","No","No","Hammer","src/Blackhand.jpg");
    createCharacter("Helya","Val'Kyr","None","Female","Higher","0",["Azeroth","Shadowlands"],"Legion","None","Fightable",["Open World","Instance"],"No","No","None","src/Helya.jpg");
    createCharacter("Xavius","Satyr","Burning Legion","Male","Lower","1","Azeroth","Vanilla",["Mage","Warlock"],"Killable",["Open World","Instance"],"No","Yes","None","src/Xavius.png");
    createCharacter("Gul'Dan","Orc","Burning Legion","Male","Lower","2",["Azeroth","Draenor","Outland"],"WOD","Warlock","Killable",["Open World","Instance"],"No","Yes","Staff","src/Guldan.jpg");
    createCharacter("Tichondrius","Demon","Scourge","Male","Lower","1","Azeroth","Cataclysm","None","Killable","Instance","No","No","None","src/Tichondrius.png");
    createCharacter("King Mechagon","Robot","None","Male","Lower","1","Azeroth","BFA","None","Killable","Instance","No","No","Robot","src/Mechagon.jpg");
    createCharacter("G'huun","Old God","None","Other","Higher","1","Azeroth","BFA","None","Killable","Instance","No","Yes","None","src/Ghuun.jpg");
    createCharacter("N'Zoth","Old God","None","Other","Higher","1","Azeroth","BFA","None","Killable","Instance","No","Yes","None","src/Nzoth.webp");
    createCharacter("Y'Shaarj","Old God","None","Other","Higher","1","Azeroth","Never","None","Can't Attack","None","No","Yes","None","src/Yshaarj.webp");
    createCharacter("Sire Denathrius","Eternal One","None","Male","Lower","1","Shadowlands","Shadowlands","None","Fightable","Instance","No","Yes","Sword","src/Denathrius.jpg");
    createCharacter("Razageth","Dragonkin","None","Female","Higher","1","Azeroth","Dragonflight","None","Killable",["Open World","Instance"],"No","No","None","src/Razageth.png");
    createCharacter("Galakrond","Dragonkin","None","Male","Higher","1","Azeroth","Never","None","Can't Attack","None","No","Yes","None","src/Galakrond.jpg");
    createCharacter("Sargeras","Titan","Burning Legion","Male","Higher","0","Unknown","Legion","None","Can't Attack","None","No","No","Sword","src/Sargeras.png");
    createCharacter("Teron Gorefiend","Undead","None","Male","Lower","2","Outland","BC","Death Knight","Killable","Instance","No","Yes","Sword","src/Teron.jpg");
    createCharacter("Saphiron",["Undead","Dragonkin"],"Scourge","Male","Lower","3",["Azeroth","Shadowlands"],"WOTLK","None","Killable","Instance","No","No","None","src/Saphiron.webp");
    createCharacter("Syndragosa",["Undead","Dragonkin"],"Scourge","Female","Lower","2","Azeroth","WOTLK","None","Killable","Instance","No","No","None","src/Syndragosa.webp");
    createCharacter("Patchwerk","Undead","Scourge","Male","Lower","1","Azeroth","WOTLK","None","Killable","Instance","No","Yes",["Axe","Hook"],"src/Patchwerk.jpg");
    createCharacter("Captain Eudora","Vulpera","Pirate","Female","Lower","0","Azeroth","BFA","None","Killable","Instance","No","Yes","Gun","src/Eudora.png");
    createCharacter("Professor Putricide","Undead","Scourge","Male","Lower","2","Azeroth","WOTLK","None","Killable","Instance","No","Yes","Potions","src/Putricide.png");

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
    options.gameStarted = false;
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

Array.prototype.unique = function() {
    let a = this.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

function updateSearch(searchValue) {
    searchValue = searchValue.toLowerCase().trim();
    let selectionMenu = document.getElementById("selection-menu");
    selectionMenu.innerHTML = "";
    if (searchValue.length > 0) {
        let startList = characterList.filter((character) => {
            const name = character.name.toLowerCase();
            return name.startsWith(searchValue);
        });
        let searchList = characterList.filter((character) => {
            const name = character.name.toLowerCase();
            return name.includes(searchValue);
        });
        searchList.sort(compare);
        startList.sort(compare);
        searchList = startList.concat(searchList).unique();
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
            let customSize = sizeText;
            if ((guessValue.length < 3)&&(elem.length > 8)) { customSize = "14px"; }
            let tmpP = document.createElement("p");
            tmpP.innerHTML =  elem;
            tmpP.style.fontSize = customSize;
            boxDiv.appendChild(tmpP);
        }
    }
    else if ((Array.isArray(guessValue))&&(!Array.isArray(selectedValue))) { // Guess is Array
        if (guessValue.includes(selectedValue)) { boxDiv.className = "info-box partial"; }
        else { boxDiv.className = "info-box false"; }
        for (const elem of guessValue) {
            let customSize = sizeText;
            if ((guessValue.length < 3)&&(elem.length > 8)) { customSize = "14px"; }
            let tmpP = document.createElement("p");
            tmpP.innerHTML =  elem;
            tmpP.style.fontSize = customSize;
            boxDiv.appendChild(tmpP);
        }
    }
    else if ((!Array.isArray(guessValue))&&(Array.isArray(selectedValue))) { // Selected is array
        if (selectedValue.includes(guessValue)) { boxDiv.className = "info-box partial"; }
        else { boxDiv.className = "info-box false"; }
        let customSize = sizeText;
        if (guessValue.length > 8) { customSize = "14px"; }
        let tmpP = document.createElement("p");
        tmpP.innerHTML = guessValue;
        tmpP.style.fontSize = customSize;
        boxDiv.appendChild(tmpP);
    }
    else if ((!Array.isArray(guessValue))&&(!Array.isArray(selectedValue))) { // Les deux ne sont pas array
        if (guessValue == selectedValue) { boxDiv.className = "info-box true"; }
        else { boxDiv.className = "info-box false"; }
        let customSize = sizeText;
        if (guessValue.length > 8) { customSize = "14px"; }
        let tmpP = document.createElement("p");
        tmpP.innerHTML = guessValue;
        tmpP.style.fontSize = customSize;
        boxDiv.appendChild(tmpP);
    }
    boxDiv.classList.add("hide-info-box");
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
        options.gameStarted = true;
        let guessZone = document.getElementById("guessZone");
        let newBoxLine = document.createElement("div");
        newBoxLine.className = "character-info";
        newBoxLine.appendChild(createIconBox(character));
        for (const categorie in options.clues) {
            if (options.clues.hasOwnProperty(categorie)) {
                if (options.clues[categorie]) {
                    newBoxLine.appendChild(createBox(character.informations[categorie],selectedCharacter.informations[categorie]));
                }
                
            }
        }
        guessZone.insertBefore(newBoxLine, guessZone.firstChild);
        for (let i=0;i<characterList.length;i++) {
            if (characterList[i] == character) {
                characterList.splice(i,1);
                break;
            }
        }
        delete characterDict[character.name.toLowerCase().trim()];
        if (character == selectedCharacter) {
            winScreen();
        }
        numberOfGuess++;
        displayColorCoding();
        playRevealAnimation(newBoxLine);
    }
    document.getElementById("searchGuess").value = "";
    let selectionMenu = document.getElementById("selection-menu");
    selectionMenu.innerHTML = "";
    selectionMenu.className = "selection-menu";
}

function playRevealAnimation(infoDiv) {
    let boxes = infoDiv.children;
    let boxIndex = 0;
    const animationInterval = setInterval(() => {
        if (boxIndex >= boxes.length) {
          clearInterval(animationInterval);
          return;
        }
        boxes[boxIndex].classList.remove('hide-info-box');
        boxes[boxIndex].classList.add('show-info-box');
        boxIndex++;
    }, 375);
}

function showTooltip(header) {
    let tooltipText = options.headerTooltip[header];
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

function optionMenu() {
    loadOptionsSelection();
    let optionDiv = document.getElementById("optionDiv");
    optionDiv.style.display = "block";
    let mainPageDiv = document.getElementById("mainPage");
    mainPageDiv.style.pointerEvents = "none";
}

function closeOptionsScreen() {
    let optionDiv = document.getElementById("optionDiv");
    optionDiv.style.display = "none";
    let mainPageDiv = document.getElementById("mainPage");
    mainPageDiv.style.pointerEvents = "auto";
    if (options.gameStarted == false) {
        loadGameHeaders();
    }
}

function displayColorCoding() {
    if (numberOfGuess > 3) { document.querySelector('.bottom').style.display = 'none'; }
    else { document.querySelector('.bottom').style.display = 'flex'; }
}

function createHeaderH2(text,tooltip) {
    let h2 = document.createElement("h2");
    h2.innerHTML = text;
    h2.setAttribute('onmouseover','showTooltip("' + tooltip + '")');
    h2.setAttribute('onmouseout','hideTooltip()');
    return h2;
}

function loadGameHeaders() {
    let headerDiv = document.getElementById("headerDiv");
    headerDiv.innerHTML = "";
    headerDiv.appendChild(createHeaderH2("Character","Character"));
    for (const categorie in options.clues) {
        if (options.clues.hasOwnProperty(categorie)) {
            if (options.clues[categorie]) { headerDiv.appendChild(createHeaderH2(options.cluesText[categorie],categorie)); }
        }
    }
}

function createOptionSelection(text,tooltip,selectedBool) {
    let optionDiv = document.createElement("div");
    optionDiv.className = "option";
    let optionLabel = document.createElement("label");
    optionLabel.innerHTML = text;
    optionLabel.htmlFor = text;
    optionLabel.setAttribute('onmouseover','showTooltip("' + tooltip + '")');
    optionLabel.setAttribute('onmouseout','hideTooltip()');
    let optionInput = document.createElement("input");
    optionInput.type = "checkbox";
    optionInput.name = text;
    optionInput.className = "checkbox";
    optionInput.setAttribute("value",tooltip);
    optionInput.addEventListener('click', handleCheckboxClick);
    optionInput.checked = selectedBool;
    if (options.gameStarted) { optionInput.disabled = true; }
    if (options.numberSelectedOptions == options.maxClue) {
        if (selectedBool == false) {
            optionInput.disabled = true;
        }
    }
    else if (options.numberSelectedOptions == options.minClue) {
        if (selectedBool == true) {
            optionInput.disabled = false;
        }
    }
    optionDiv.appendChild(optionLabel);
    optionDiv.appendChild(optionInput);
    return optionDiv;
}

function loadOptionsSelection() {
    let optionSelectionDiv = document.getElementById("optionsSelection");
    optionSelectionDiv.innerHTML = "";
    for (const categorie in options.clues) {
        if (options.clues.hasOwnProperty(categorie)) {
            optionSelectionDiv.appendChild(createOptionSelection(options.cluesText[categorie],categorie,options.clues[categorie]));
        }
    }
}

function setupGame() {
    options = new Options();
    loadGameHeaders();
    document.addEventListener('mousemove',function(e) {
        tooltipSpan.style.top = (e.pageY + 20) + 'px';
        tooltipSpan.style.left = (e.pageX + 20) + 'px';
    });
}

function updateOptions() {
    const checkboxes = document.querySelectorAll('.checkbox');
    let disableChecked = (options.numberSelectedOptions == options.minClue);
    let disableUnchecked = (options.numberSelectedOptions == options.maxClue);
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) { checkbox.disabled = disableChecked; }
        else { checkbox.disabled = disableUnchecked; }
    });
}

function handleCheckboxClick() {
    if (this.checked) { options.numberSelectedOptions++; }
    else { options.numberSelectedOptions--; }
    options.clues[this.value] = this.checked;
    updateOptions();
}



setupGame();