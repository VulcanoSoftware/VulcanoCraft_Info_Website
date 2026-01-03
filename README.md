VulcanoCraft Info Website
=========================

Overzicht
---------

Dit is een statische informatie-website voor het VulcanoCraft Minecraft netwerk.  
De site bevat onder andere:

- Een homepage met server IP en snelle knoppen
- Pagina’s voor gamemodes, hardware en over het netwerk
- Link naar Discord, statuspagina en plugin-site

Structuur
---------

- `index.html` – homepage
- `gamemodes.html` – overzicht van alle gamemodes
- `gamemodes/` – detailpagina’s per gamemode
- `about.html` – informatie over VulcanoCraft en de eigenaars
- `hardware.html` – informatie over hardware en infrastructuur
- `discord.html` – informatie en link naar de Discord
- `styles.css` – alle styling (inclusief responsive gedrag)
- `main.js` – taalwissel, navigatie-menu en kleine interactieve functies
- `img/` – afbeeldingen (logo’s, server images, vlaggen)
- `sound/` – geluiden (bijvoorbeeld villager-sound)

Lokale ontwikkeling
-------------------

Omdat dit een statische site is, heb je geen build-stap of backend nodig.  
Alles draait in de browser met HTML, CSS en JavaScript.

Je kunt de site op twee manieren lokaal bekijken:

### Optie 1: Direct openen

Open `index.html` rechtstreeks in je browser (bijvoorbeeld door het bestand te dubbelklikken).  
Voor de meeste functies werkt dit prima.

### Optie 2: Via een simpele webserver (aanbevolen)

Met Python 3:

```bash
cd VulcanoCraft_Info_Website-main
python -m http.server 8000
```

Open daarna in je browser:

```text
http://localhost:8000
```

Met Node (serve):

```bash
npm install -g serve
serve .
```

Deploy naar productie
---------------------

De website is volledig statisch, dus je kunt hem hosten op:

- GitHub Pages
- Een eigen (shared/vps) webserver
- Static hosting zoals Netlify / Vercel / Cloudflare Pages

Belangrijk:

- Upload **alle** bestanden en mappen: `*.html`, `styles.css`, `main.js`, `img/`, `sound/`, `gamemodes/`.
- De entrypoint moet `index.html` zijn in de root van de site.

### Hosten via GitHub Pages

1. Ga naar de instellingen van je repository op GitHub.
2. Zoek naar **Pages**.
3. Kies **Source: Deploy from a branch**.
4. Selecteer de `main` branch en de root (`/`) map.
5. Sla op. Na enkele minuten is de site beschikbaar op de GitHub Pages URL.

### Hosten op eigen webserver / hosting

1. Log in op je hosting (bijvoorbeeld via cPanel, DirectAdmin, Plesk of SFTP).
2. Ga naar de webroot van het domein of subdomein waarop je de site wilt tonen  
   (vaak `public_html`, `www`, `httpdocs` of iets vergelijkbaars).
3. Upload de inhoud van deze map:

   - `index.html`, `about.html`, `hardware.html`, `gamemodes.html`, `discord.html`
   - de map `gamemodes/`
   - `styles.css`, `main.js`
   - de mappen `img/` en `sound/`

4. Zorg dat `index.html` in de root staat.  
5. Open het domein in je browser om te controleren of alles werkt.

Er zijn geen speciale serverinstellingen nodig: iedere standaard webserver die statische bestanden kan serveren is voldoende.

Aanpassen van links (IP, Discord, status)
-----------------------------------------

Een aantal links kun je eenvoudig zelf wijzigen:

- Server IP en kopieer-knop: in `index.html` (en bijbehorende teksten in `main.js` via `data-i18n` keys).
- Discord-invite link: in `discord.html` en eventueel in de tekst in `main.js`.
- Statuspagina en plugin-site: in de navigatiebalk van de verschillende `*.html` bestanden.

Na het aanpassen hoef je alleen de gewijzigde bestanden opnieuw te uploaden naar je hosting of te pushen naar GitHub Pages.

Taalwissel
----------

De website ondersteunt meerdere talen via knoppen in de header.  
De taalkeuze wordt afgehandeld in `main.js` en gebruikt `data-i18n` attributen in de HTML.

Responsiveness
--------------

De layout schaalt mee op desktop, tablet en gsm.  
Voor gsm-schermen:

- Elementen staan los van de schermranden
- Inhoud en knoppen worden gecentreerd
- Navigatie wordt omgezet naar een mobiel menu
