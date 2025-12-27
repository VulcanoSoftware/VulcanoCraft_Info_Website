document.addEventListener("DOMContentLoaded", function () {
	var translations = {
		en: {
			"brand.tagline": "Minecraft Server Network",
			"nav.home": "Home",
			"nav.hardware": "Hardware",
			"nav.plugins": "Plugins & Mods",
			"nav.gamemodes": "Gamemodes",
			"nav.status": "Status",
			"nav.discord": "Discord",
			"nav.about": "About",
			"footer.disclaimer": "Not affiliated with Mojang or Microsoft",
			"home.hero.subtitle": "Join the VulcanoCraft Minecraft network and play together with the community.",
			"home.hero.btn.gamemodes": "View gamemodes",
			"home.hero.btn.discord": "Join our Discord",
			"home.ip.copied": "IP copied",
			"home.ip.manual": "Copy the IP manually",
			"home.grid.card1.title": "Unique Survival",
			"home.grid.card1.text": "Discover our custom biomes, skill system and player-driven economy.",
			"home.grid.card2.title": "Active community",
			"home.grid.card2.text": "Join weekly events, build with friends and climb the ranks.",
			"home.grid.card3.title": "No pay-to-win",
			"home.grid.card3.text": "Fair gameplay comes first. Ranks only give cosmetic extras.",
			"about.hero.title": "About VulcanoCraft",
			"about.hero.subtitle": "A professional Minecraft server network that grew out of a shared hobby in 2022.",
			"about.owners.heading": "The Owners",
			"about.owners.text": "VulcanoCraft and Hestou are the founders and owners of the VulcanoCraft Network. Their shared Minecraft journey started around 2020 with small private servers for friends. During this period they experimented a lot with temporary servers, including Aternos servers, to gain experience and learn.",
			"about.owner1.role": "Founder and owner of the VulcanoCraft Network.",
			"about.owner1.li1": "Technical development and server infrastructure",
			"about.owner1.li2": "Performance optimisation and custom features",
			"about.owner2.role": "Founder and owner of the VulcanoCraft Network.",
			"about.owner2.li1": "Community management and staff coordination",
			"about.owner2.li2": "Design, organisation and player experience",
			"about.vision.heading": "Our Vision & Values",
			"about.vision.text": "VulcanoCraft offers optional paid content to support the network, but is strictly against pay-to-win. There is no staff abuse, no unfair advantages and a zero tolerance policy towards cheating.",
			"about.future.heading": "Future Vision",
			"about.future.text": "VulcanoCraft is a long-term project with the ambition to exist for at least 10 years. By listening to feedback and prioritising quality over fast growth, we want to remain a stable and trusted place for players.",
			"hardware.hero.title": "Hardware",
			"hardware.hero.subtitle": "A stable experience starts with good hardware. Here you can find an overview of the machines behind VulcanoCraft.",
			"hardware.why.title": "Why this matters",
			"hardware.why.text": "By choosing powerful hardware we can minimise lag, host large events and keep your builds safe thanks to regular backups.",
			"discord.hero.title": "Discord server",
			"discord.hero.subtitle": "Our Discord is the heart of the VulcanoCraft community. Join for news, events and support.",
			"discord.join.title": "Join the community",
			"discord.join.text": "Use the invite link below to join the Discord server. You can change the link in this block to your own invite.",
			"discord.invite.label": "Invite link",
			"discord.list1": "Stay up to date on updates and maintenance",
			"discord.list2": "Take part in events and giveaways",
			"discord.list3": "Find teammates for your gamemode",
			"discord.list4": "Ask staff or other players for help",
			"discord.channels.title": "Channels",
			"discord.channels.list1": "Announcements: important announcements and changelogs",
			"discord.channels.list2": "General chat: chat with other players",
			"discord.channels.list3": "Support: help with issues or questions",
			"discord.channels.list4": "Media: share screenshots and clips",
			"discord.channels.list5": "Voice: play and talk together",
			"gamemodes.hero.title": "Gamemodes",
			"gamemodes.hero.subtitle": "VulcanoCraft offers several gamemodes so there is something for everyone.",
			"gamemodes.survival.text": "The main server of the network, focused on long-term survival projects.",
			"gamemodes.survival.li1": "Land claims and protection",
			"gamemodes.survival.li2": "Economy with shops and trading",
			"gamemodes.survival.li3": "Events and seasonal content",
			"gamemodes.oneblock.text": "Start on a single block and work your way up to a full island.",
			"gamemodes.oneblock.li1": "Phases with new blocks and mobs",
			"gamemodes.oneblock.li2": "Co-op possible with friends",
			"gamemodes.oneblock.li3": "Challenges for extra rewards",
			"gamemodes.bedwars.text": "Fast PvP minigame where you have to destroy your opponents’ beds.",
			"gamemodes.bedwars.li1": "Team and solo queues",
			"gamemodes.bedwars.li2": "Item shop and upgrades per island",
			"gamemodes.bedwars.li3": "Short, action-packed matches",
			"gamemodes.vtc.text": "Technical survival with mods such as automation and machines.",
			"gamemodes.vtc.li1": "Focus on factories and automation",
			"gamemodes.vtc.li2": "Compatible with the VulcanoCraft ecosystem",
			"gamemodes.vtc.li3": "Ideal for players who love technology",
			"gamemodes.klokrise.text": "Exclusive server for Poggers with unique rules and events.",
			"gamemodes.klokrise.li1": "Only accessible for selected players",
			"gamemodes.klokrise.li2": "Special seasons and storylines",
			"gamemodes.klokrise.li3": "More focus on community and roleplay",
			"gamemodes.lobby.text": "The central hub of the network where you can choose all gamemodes.",
			"gamemodes.lobby.li1": "Information about all servers",
			"gamemodes.lobby.li2": "Cosmetics and small minigames",
			"gamemodes.lobby.li3": "Quick portals to every gamemode",
			"gamemodes.velocity.text": "The proxy layer that connects all servers.",
			"gamemodes.velocity.li1": "Seamless server switching",
			"gamemodes.velocity.li2": "Better performance and scalability",
			"gamemodes.velocity.li3": "Increased stability of the network",
			"survival.hero.subtitle": "The main VulcanoCraft server, focused on long-term survival gameplay.",
			"survival.info.title": "Server information",
			"survival.info.li1": "Hosted on: Server 3",
			"survival.info.li2": "Since: 11-09-2022",
			"survival.what.title": "What to expect",
			"survival.what.li1": "Land claims so your builds are protected",
			"survival.what.li2": "Economy with shops, trading and balancing",
			"survival.what.li3": "Regular community events and seasonal updates",
			"survival.what.li4": "Stable world intended for long-term projects",
			"survival.perfect.title": "Perfect for",
			"survival.perfect.li1": "Players who enjoy relaxed building",
			"survival.perfect.li2": "Groups of friends who want to start a village or town together",
			"survival.perfect.li3": "Anyone looking for a main server to call home",
			"oneblock.hero.subtitle": "Start on a single block and grow into a complete island with different phases.",
			"oneblock.info.title": "Server information",
			"oneblock.info.li1": "Hosted on: Server 2",
			"oneblock.info.li2": "Since: 16-04-2025",
			"oneblock.gameplay.title": "Gameplay",
			"oneblock.gameplay.li1": "Each phase introduces new blocks and mobs",
			"oneblock.gameplay.li2": "Special challenges for extra rewards",
			"oneblock.gameplay.li3": "Option to play together on the same island",
			"oneblock.why.title": "Why Oneblock?",
			"oneblock.why.li1": "Compact but progressive gameplay",
			"oneblock.why.li2": "Perfect for players who like efficient building",
			"oneblock.why.li3": "Fun as a change of pace next to the main survival",
			"bedwars.hero.subtitle": "Fast, competitive PvP minigame where you must destroy your opponents’ beds.",
			"bedwars.info.title": "Server information",
			"bedwars.info.li1": "Hosted on: Server 2",
			"bedwars.info.li2": "Since: 16-04-2025",
			"bedwars.features.title": "Features",
			"bedwars.features.li1": "Solo and team modes with multiple maps",
			"bedwars.features.li2": "Item shop with weapons, armour and utilities",
			"bedwars.features.li3": "Upgrades for your island and generators",
			"bedwars.playstyle.title": "Playstyle",
			"bedwars.playstyle.li1": "Short, action-packed matches",
			"bedwars.playstyle.li2": "Focus on bridge building, combat and strategy",
			"bedwars.playstyle.li3": "Perfect for a quick game in between",
			"vtc.hero.subtitle": "Technical survival with modded gameplay, machines and automation.",
			"vtc.info.title": "Server information",
			"vtc.info.li1": "Hosted on: Server 2",
			"vtc.info.li2": "Since: 23-02-2025",
			"vtc.focus.title": "Server focus",
			"vtc.focus.li1": "Automation of farms and production",
			"vtc.focus.li2": "Machines, transport and storage systems",
			"vtc.focus.li3": "Extensive tech progression",
			"vtc.for.title": "Who is this for?",
			"vtc.for.li1": "Players who love technology and optimisation",
			"vtc.for.li2": "Base builders with big factory ideas",
			"vtc.for.li3": "Anyone looking for more depth than vanilla survival",
			"klokrise.hero.subtitle": "Exclusive server for Poggers with its own rules, lore and events.",
			"klokrise.info.title": "Server information",
			"klokrise.info.li1": "Hosted on: Server 1",
			"klokrise.info.li2": "Since: 10-07-2025",
			"klokrise.special.title": "What makes Klokrise special?",
			"klokrise.special.li1": "Only accessible to invited players",
			"klokrise.special.li2": "Unique seasons, storylines and challenges",
			"klokrise.special.li3": "More emphasis on community and roleplay",
			"klokrise.access.title": "Access",
			"klokrise.access.li1": "Access is managed by the staff team",
			"klokrise.access.li2": "More info can be found in the Discord server",
			"lobby.hero.subtitle": "The central hub where all players join and choose gamemodes.",
			"lobby.info.title": "Server information",
			"lobby.info.li1": "Hosted on: Server 2",
			"lobby.info.li2": "Since: 16-04-2025",
			"lobby.features.title": "Features",
			"lobby.features.li1": "Portals and NPCs to all gamemodes",
			"lobby.features.li2": "Information about updates and new features",
			"lobby.features.li3": "Cosmetics, gadgets and small minigames",
			"lobby.role.title": "Role in the network",
			"lobby.role.li1": "Connects all servers through a single central hub",
			"lobby.role.li2": "Makes it easy to meet up with friends",
			"velocity.hero.subtitle": "The proxy software that connects all servers behind the scenes.",
			"velocity.info.title": "Server information",
			"velocity.info.li1": "Hosted on: Server 2",
			"velocity.info.li2": "Since: 16-04-2025",
			"velocity.why.title": "Why Velocity?",
			"velocity.why.li1": "Fast and stable connections between servers",
			"velocity.why.li2": "Better scalability during busy moments",
			"velocity.why.li3": "Easier management of multiple gamemodes",
			"velocity.player.title": "What do you notice as a player?",
			"velocity.player.li1": "Seamless switching between lobby and gamemodes",
			"velocity.player.li2": "Lower chance of disconnects during transfers"
		},
		nl: {
			"brand.tagline": "Minecraft server netwerk",
			"nav.home": "Home",
			"nav.hardware": "Hardware",
			"nav.plugins": "Plugins & Mods",
			"nav.gamemodes": "Gamemodes",
			"nav.status": "Status",
			"nav.discord": "Discord",
			"nav.about": "Over ons",
			"footer.disclaimer": "Niet verbonden aan Mojang of Microsoft",
			"home.hero.subtitle": "Word lid van het VulcanoCraft Minecraft-netwerk en speel samen met de community.",
			"home.hero.btn.gamemodes": "Bekijk gamemodes",
			"home.hero.btn.discord": "Join onze Discord",
			"home.ip.copied": "IP gekopieerd",
			"home.ip.manual": "Kopieer het IP handmatig",
			"home.grid.card1.title": "Unieke Survival",
			"home.grid.card1.text": "Ontdek onze custom biomes, skills systeem en een player-driven economie.",
			"home.grid.card2.title": "Actieve community",
			"home.grid.card2.text": "Doe mee aan wekelijkse events, bouw samen met vrienden en klim in de ranks.",
			"home.grid.card3.title": "Geen pay-to-win",
			"home.grid.card3.text": "Eerlijke gameplay staat bij ons voorop. Ranks geven alleen cosmetische extra's.",
			"about.hero.title": "Over VulcanoCraft",
			"about.hero.subtitle": "Een professioneel Minecraft-servernetwerk dat in 2022 uit een gedeelde hobby is ontstaan.",
			"about.owners.heading": "De eigenaren",
			"about.owners.text": "VulcanoCraft en Hestou zijn de oprichters en eigenaren van het VulcanoCraft Network. Hun gezamenlijke Minecraft-reis begon rond 2020 met kleine privéservers voor vrienden. In deze periode experimenteerden ze veel met tijdelijke servers, waaronder Aternos-servers, om ervaring op te doen en te leren.",
			"about.owner1.role": "Oprichter en eigenaar van het VulcanoCraft Network.",
			"about.owner1.li1": "Technische ontwikkeling en serverinfrastructuur",
			"about.owner1.li2": "Prestatie-optimalisatie en custom features",
			"about.owner2.role": "Oprichter en eigenaar van het VulcanoCraft Network.",
			"about.owner2.li1": "Communitymanagement en staffcoördinatie",
			"about.owner2.li2": "Design, organisatie en spelerservaring",
			"about.vision.heading": "Onze visie en waarden",
			"about.vision.text": "VulcanoCraft biedt optionele betaalde content om het netwerk te ondersteunen, maar is strikt tegen pay-to-win. Er is geen misbruik door staff, geen oneerlijke voordelen en er geldt een zerotolerancebeleid tegen cheaten.",
			"about.future.heading": "Toekomstvisie",
			"about.future.text": "VulcanoCraft is een langetermijnproject met de ambitie om minstens 10 jaar te bestaan. Door naar feedback te luisteren en kwaliteit boven snelle groei te stellen, willen we een stabiele en betrouwbare plek voor spelers blijven.",
			"hardware.hero.title": "Hardware",
			"hardware.hero.subtitle": "Een stabiele ervaring begint met goede hardware. Hier vind je een overzicht van de machines achter VulcanoCraft.",
			"hardware.why.title": "Waarom dit belangrijk is",
			"hardware.why.text": "Door krachtige hardware te kiezen kunnen we lag minimaliseren, grote events hosten en je builds veilig houden dankzij regelmatige back-ups.",
			"discord.hero.title": "Discord-server",
			"discord.hero.subtitle": "Onze Discord is het hart van de VulcanoCraft-community. Join voor nieuws, events en support.",
			"discord.join.title": "Join de community",
			"discord.join.text": "Gebruik de uitnodigingslink hieronder om de Discord-server te joinen. Je kunt de link in dit blok aanpassen naar je eigen invite.",
			"discord.invite.label": "Uitnodigingslink",
			"discord.list1": "Blijf op de hoogte van updates en onderhoud",
			"discord.list2": "Doe mee aan events en giveaways",
			"discord.list3": "Vind teamgenoten voor jouw gamemode",
			"discord.list4": "Vraag hulp aan staff of andere spelers",
			"discord.channels.title": "Kanalen",
			"discord.channels.list1": "Announcements: belangrijke aankondigingen en changelogs",
			"discord.channels.list2": "General chat: chat met andere spelers",
			"discord.channels.list3": "Support: hulp bij problemen of vragen",
			"discord.channels.list4": "Media: deel screenshots en clips",
			"discord.channels.list5": "Voice: samen spelen en praten",
			"gamemodes.hero.title": "Gamemodes",
			"gamemodes.hero.subtitle": "VulcanoCraft biedt meerdere gamemodes zodat er voor iedereen iets is.",
			"gamemodes.survival.text": "De hoofdserver van het netwerk, gericht op langetermijn-survivalprojecten.",
			"gamemodes.survival.li1": "Landclaims en bescherming",
			"gamemodes.survival.li2": "Economie met shops en trading",
			"gamemodes.survival.li3": "Events en seizoenscontent",
			"gamemodes.oneblock.text": "Start op één block en werk toe naar een volledig eiland.",
			"gamemodes.oneblock.li1": "Fases met nieuwe blocks en mobs",
			"gamemodes.oneblock.li2": "Co-op mogelijk met vrienden",
			"gamemodes.oneblock.li3": "Challenges voor extra rewards",
			"gamemodes.bedwars.text": "Snelle PvP-minigame waarin je de bedden van tegenstanders moet vernietigen.",
			"gamemodes.bedwars.li1": "Team- en soloqueues",
			"gamemodes.bedwars.li2": "Itemshop en upgrades per eiland",
			"gamemodes.bedwars.li3": "Korte, actievolle potjes",
			"gamemodes.vtc.text": "Technische survival met mods zoals automatisering en machines.",
			"gamemodes.vtc.li1": "Focus op fabrieken en automatisering",
			"gamemodes.vtc.li2": "Compatibel met het VulcanoCraft-ecosysteem",
			"gamemodes.vtc.li3": "Ideaal voor spelers die van technologie houden",
			"gamemodes.klokrise.text": "Exclusieve server voor Poggers met unieke regels en events.",
			"gamemodes.klokrise.li1": "Alleen toegankelijk voor geselecteerde spelers",
			"gamemodes.klokrise.li2": "Speciale seizoenen en verhaallijnen",
			"gamemodes.klokrise.li3": "Meer focus op community en roleplay",
			"gamemodes.lobby.text": "De centrale hub van het netwerk waar je alle gamemodes kiest.",
			"gamemodes.lobby.li1": "Informatie over alle servers",
			"gamemodes.lobby.li2": "Cosmetics en kleine minigames",
			"gamemodes.lobby.li3": "Snelle portals naar elke gamemode",
			"gamemodes.velocity.text": "De proxylayer die alle servers met elkaar verbindt.",
			"gamemodes.velocity.li1": "Naadloos wisselen tussen servers",
			"gamemodes.velocity.li2": "Betere performance en schaalbaarheid",
			"gamemodes.velocity.li3": "Meer stabiliteit van het netwerk",
			"survival.hero.subtitle": "De hoofdserver van VulcanoCraft, gericht op langetermijn-survivalgameplay.",
			"survival.info.title": "Serverinformatie",
			"survival.info.li1": "Gehost op: Server 3",
			"survival.info.li2": "Sinds: 11-09-2022",
			"survival.what.title": "Wat kun je verwachten",
			"survival.what.li1": "Landclaims zodat je builds beschermd zijn",
			"survival.what.li2": "Economie met shops, trading en balancing",
			"survival.what.li3": "Regelmatige community-events en seizoensupdates",
			"survival.what.li4": "Stabiele wereld bedoeld voor langetermijnprojecten",
			"survival.perfect.title": "Perfect voor",
			"survival.perfect.li1": "Spelers die van relaxed bouwen houden",
			"survival.perfect.li2": "Vriendengroepen die samen een dorp of stad willen starten",
			"survival.perfect.li3": "Iedereen die een main server zoekt om thuis te noemen",
			"oneblock.hero.subtitle": "Start op één block en groeI uit tot een compleet eiland met verschillende fases.",
			"oneblock.info.title": "Serverinformatie",
			"oneblock.info.li1": "Gehost op: Server 2",
			"oneblock.info.li2": "Sinds: 16-04-2025",
			"oneblock.gameplay.title": "Gameplay",
			"oneblock.gameplay.li1": "Elke fase introduceert nieuwe blocks en mobs",
			"oneblock.gameplay.li2": "Speciale challenges voor extra rewards",
			"oneblock.gameplay.li3": "Mogelijkheid om samen op hetzelfde eiland te spelen",
			"oneblock.why.title": "Waarom Oneblock?",
			"oneblock.why.li1": "Compact maar progressief gameplay",
			"oneblock.why.li2": "Perfect voor spelers die efficiënt willen bouwen",
			"oneblock.why.li3": "Leuk als afwisseling naast de main survival",
			"bedwars.hero.subtitle": "Snelle, competitieve PvP-minigame waarin je de bedden van tegenstanders moet vernietigen.",
			"bedwars.info.title": "Serverinformatie",
			"bedwars.info.li1": "Gehost op: Server 2",
			"bedwars.info.li2": "Sinds: 16-04-2025",
			"bedwars.features.title": "Features",
			"bedwars.features.li1": "Solo- en teammodes met meerdere maps",
			"bedwars.features.li2": "Itemshop met wapens, armour en utilities",
			"bedwars.features.li3": "Upgrades voor je eiland en generators",
			"bedwars.playstyle.title": "Speelstijl",
			"bedwars.playstyle.li1": "Korte, actievolle potjes",
			"bedwars.playstyle.li2": "Focus op bridgen, combat en strategie",
			"bedwars.playstyle.li3": "Perfect voor een snel potje tussendoor",
			"vtc.hero.subtitle": "Technische survival met modded gameplay, machines en automatisering.",
			"vtc.info.title": "Serverinformatie",
			"vtc.info.li1": "Gehost op: Server 2",
			"vtc.info.li2": "Sinds: 23-02-2025",
			"vtc.focus.title": "Serverfocus",
			"vtc.focus.li1": "Automatisering van farms en productie",
			"vtc.focus.li2": "Machines, transport- en opslagsystemen",
			"vtc.focus.li3": "Uitgebreide techprogressie",
			"vtc.for.title": "Voor wie?",
			"vtc.for.li1": "Spelers die van technologie en optimalisatie houden",
			"vtc.for.li2": "Basebuilders met grote fabriekideeën",
			"vtc.for.li3": "Iedereen die meer diepgang zoekt dan vanilla survival",
			"klokrise.hero.subtitle": "Exclusieve server voor Poggers met eigen regels, lore en events.",
			"klokrise.info.title": "Serverinformatie",
			"klokrise.info.li1": "Gehost op: Server 1",
			"klokrise.info.li2": "Sinds: 10-07-2025",
			"klokrise.special.title": "Wat maakt Klokrise speciaal?",
			"klokrise.special.li1": "Alleen toegankelijk voor uitgenodigde spelers",
			"klokrise.special.li2": "Unieke seizoenen, verhaallijnen en challenges",
			"klokrise.special.li3": "Meer nadruk op community en roleplay",
			"klokrise.access.title": "Toegang",
			"klokrise.access.li1": "Toegang wordt beheerd door het staffteam",
			"klokrise.access.li2": "Meer info vind je in de Discord-server",
			"lobby.hero.subtitle": "De centrale hub waar alle spelers joinen en gamemodes kiezen.",
			"lobby.info.title": "Serverinformatie",
			"lobby.info.li1": "Gehost op: Server 2",
			"lobby.info.li2": "Sinds: 16-04-2025",
			"lobby.features.title": "Features",
			"lobby.features.li1": "Portals en NPC's naar alle gamemodes",
			"lobby.features.li2": "Informatie over updates en nieuwe features",
			"lobby.features.li3": "Cosmetics, gadgets en kleine minigames",
			"lobby.role.title": "Rol in het netwerk",
			"lobby.role.li1": "Verbindt alle servers via één centrale hub",
			"lobby.role.li2": "Maakt het makkelijk om met vrienden af te spreken",
			"velocity.hero.subtitle": "De proxiesoftware die alle servers achter de schermen verbindt.",
			"velocity.info.title": "Serverinformatie",
			"velocity.info.li1": "Gehost op: Server 2",
			"velocity.info.li2": "Sinds: 16-04-2025",
			"velocity.why.title": "Waarom Velocity?",
			"velocity.why.li1": "Snelle en stabiele verbindingen tussen servers",
			"velocity.why.li2": "Betere schaalbaarheid tijdens drukke momenten",
			"velocity.why.li3": "Eenvoudiger beheer van meerdere gamemodes",
			"velocity.player.title": "Wat merk je als speler?",
			"velocity.player.li1": "Naadloos wisselen tussen lobby en gamemodes",
			"velocity.player.li2": "Kleinere kans op disconnects tijdens transfers"
		}
	};

	var flagImages = {
		en: "img/united_states.png",
		nl: "img/netherlands.png"
	};

	function setFlagImage(node, lang) {
		if (!node) {
			return;
		}
		var src = flagImages[lang];
		if (!src) {
			node.textContent = lang ? lang.toUpperCase() : "";
			return;
		}
		node.innerHTML = "";
		var img = document.createElement("img");
		img.src = src;
		if (lang === "en") {
			img.alt = "English";
		} else if (lang === "nl") {
			img.alt = "Nederlands";
		} else {
			img.alt = "";
		}
		node.appendChild(img);
	}

	var currentLang = localStorage.getItem("vcn-lang") || "en";

	var villagerSound;

	function playVillagerSound() {
		if (!villagerSound) {
			try {
				villagerSound = new Audio("sound/villager.mp3");
			} catch (e) {
				villagerSound = null;
			}
		}
		if (!villagerSound) {
			return;
		}
		try {
			villagerSound.currentTime = 0;
			var playPromise = villagerSound.play();
			if (playPromise && playPromise.then) {
				playPromise.catch(function () { });
			}
		} catch (e2) { }
	}

	function t(key, fallback) {
		var dict = translations[currentLang] || translations.en;
		if (dict && Object.prototype.hasOwnProperty.call(dict, key)) {
			return dict[key];
		}
		var baseDict = translations.en;
		if (baseDict && Object.prototype.hasOwnProperty.call(baseDict, key)) {
			return baseDict[key];
		}
		return fallback || key;
	}

	function applyLanguage(lang) {
		currentLang = lang;
		localStorage.setItem("vcn-lang", lang);
		var root = document.documentElement;
		root.setAttribute("lang", lang);
		var elems = document.querySelectorAll("[data-i18n]");
		for (var i = 0; i < elems.length; i++) {
			var el = elems[i];
			var key = el.getAttribute("data-i18n");
			var value = t(key, el.getAttribute("data-i18n-default") || "");
			if (value) {
				el.textContent = value;
			}
		}
		var buttons = document.querySelectorAll(".lang-btn");
		for (var j = 0; j < buttons.length; j++) {
			var btn = buttons[j];
			var btnLang = btn.getAttribute("data-lang");
			if (btnLang === lang) {
				btn.classList.add("active");
			} else {
				btn.classList.remove("active");
			}
		}
		updateLangToggle();
	}

	function updateLangToggle() {
		var toggles = document.querySelectorAll(".lang-toggle");
		for (var i = 0; i < toggles.length; i++) {
			var toggle = toggles[i];
			var flagNode = toggle.querySelector("[data-lang-flag]");
			var labelNode = toggle.querySelector("[data-lang-label]");
			var label = currentLang === "nl" ? "NL" : "EN";
			if (flagNode) setFlagImage(flagNode, currentLang);
			if (labelNode) {
				labelNode.textContent = label;
			}
		}
	}

	var switcher = document.getElementById("lang-switcher");
	if (switcher) {
		var existingButtons = [];
		var children = switcher.querySelectorAll("button[data-lang]");
		for (var ci = 0; ci < children.length; ci++) {
			existingButtons.push(children[ci]);
			setFlagImage(children[ci].querySelector(".lang-flag"), children[ci].getAttribute("data-lang"));
		}
		var menu = document.createElement("div");
		menu.className = "lang-menu";
		for (var mi = 0; mi < existingButtons.length; mi++) {
			menu.appendChild(existingButtons[mi]);
		}
		var toggle = document.createElement("button");
		toggle.type = "button";
		toggle.className = "lang-toggle";
		toggle.innerHTML = '<span class="lang-flag" data-lang-flag></span><span class="lang-label" data-lang-label></span><span class="lang-chevron">▾</span>';
		switcher.appendChild(toggle);
		switcher.appendChild(menu);
		applyLanguage(currentLang);
		var langButtons = switcher.querySelectorAll(".lang-btn");
		for (var lb = 0; lb < langButtons.length; lb++) {
			langButtons[lb].addEventListener("click", function (e) {
				var lang = e.currentTarget.getAttribute("data-lang");
				if (lang && lang !== currentLang) {
					applyLanguage(lang);
					playVillagerSound();
					if (switcher) {
						switcher.classList.remove("open");
					}
				}
			});
		}
		toggle.addEventListener("click", function (e) {
			e.stopPropagation();
			switcher.classList.toggle("open");
		});
		document.addEventListener("click", function () {
			switcher.classList.remove("open");
		});
	} else {
		applyLanguage(currentLang);
	}

	var pill = document.getElementById("ip-pill");
	var message = document.getElementById("copy-message");
	var icon = pill ? pill.querySelector(".ip-copy-icon") : null;
	var ip = pill ? pill.getAttribute("data-ip") || pill.textContent.trim() : "";

	var navToggle = document.querySelector(".nav-toggle");
	var mainNav = document.querySelector(".main-nav");

	function openNav() {
		document.body.classList.add("nav-open");
		if (navToggle) {
			navToggle.setAttribute("aria-expanded", "true");
		}
	}

	function closeNav() {
		document.body.classList.remove("nav-open");
		if (navToggle) {
			navToggle.setAttribute("aria-expanded", "false");
		}
	}

	if (navToggle && mainNav) {
		navToggle.addEventListener("click", function (event) {
			event.stopPropagation();
			if (document.body.classList.contains("nav-open")) {
				closeNav();
			} else {
				openNav();
			}
		});

		mainNav.addEventListener("click", function (event) {
			var target = event.target;
			if (target && target.closest("a")) {
				closeNav();
			}
		});

		document.addEventListener("click", function (event) {
			if (!document.body.classList.contains("nav-open")) {
				return;
			}
			if (event.target === navToggle || navToggle.contains(event.target)) {
				return;
			}
			if (mainNav.contains(event.target)) {
				return;
			}
			closeNav();
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" || event.key === "Esc") {
				closeNav();
			}
		});
	}

	function showMessage(textKey, fallback) {
		if (!message) {
			return;
		}
		message.textContent = t(textKey, fallback);
		message.classList.add("visible");
		setTimeout(function () {
			message.classList.remove("visible");
		}, 1600);
	}

	function showCopiedIcon() {
		if (!icon) {
			return;
		}
		var originalSrc = icon.getAttribute("data-original-src") || icon.getAttribute("src");
		if (!icon.getAttribute("data-original-src") && originalSrc) {
			icon.setAttribute("data-original-src", originalSrc);
		}
		icon.setAttribute("src", "img/checkmark.png");
		setTimeout(function () {
			var stored = icon.getAttribute("data-original-src");
			if (stored) {
				icon.setAttribute("src", stored);
			}
		}, 1600);
	}

	function launchConfettiFromElement(element) {
		if (!element) {
			return;
		}
		var rect = element.getBoundingClientRect();
		var originX = rect.left + rect.width / 2;
		var originY = rect.top + rect.height / 2;
		var colors = ["#22d3ee", "#6366f1", "#f97316", "#facc15", "#ec4899"];
		var count = 26;
		for (var i = 0; i < count; i++) {
			var piece = document.createElement("div");
			piece.className = "confetti-piece";
			var angle = Math.random() * Math.PI * 2;
			var distance = 80 + Math.random() * 120;
			var dx = Math.cos(angle) * distance;
			var dy = Math.sin(angle) * distance;
			var duration = 600 + Math.random() * 500;
			piece.style.left = originX + "px";
			piece.style.top = originY + "px";
			piece.style.setProperty("--dx", dx + "px");
			piece.style.setProperty("--dy", dy + "px");
			piece.style.backgroundColor = colors[i % colors.length];
			piece.style.animationDuration = duration + "ms";
			document.body.appendChild(piece);
			setTimeout(function (node) {
				if (node && node.parentNode) {
					node.parentNode.removeChild(node);
				}
			}.bind(null, piece), duration + 200);
		}
	}

	function copyFallback() {
		if (!ip) {
			return;
		}
		var textarea = document.createElement("textarea");
		textarea.value = ip;
		textarea.style.position = "fixed";
		textarea.style.opacity = "0";
		document.body.appendChild(textarea);
		textarea.focus();
		textarea.select();
		try {
			var ok = document.execCommand("copy");
			if (ok) {
				showCopiedIcon();
				showMessage("home.ip.copied", "IP copied");
				launchConfettiFromElement(pill);
			} else {
				showMessage("home.ip.manual", "Copy the IP manually");
			}
		} catch (e) {
			showMessage("home.ip.manual", "Copy the IP manually");
		}
		document.body.removeChild(textarea);
	}

	if (pill) {
		pill.addEventListener("click", function () {
			if (!ip) {
				return;
			}
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(ip).then(function () {
					showCopiedIcon();
					showMessage("home.ip.copied", "IP copied");
					launchConfettiFromElement(pill);
				}).catch(function () {
					copyFallback();
				});
			} else {
				copyFallback();
			}
		});
	}
});
