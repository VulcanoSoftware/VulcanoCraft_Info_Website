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

Omdat dit een statische site is, heb je alleen een simpele webserver nodig.

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

Bestanden uploaden naar GitHub
------------------------------

1. Maak een nieuwe repository op GitHub (bijvoorbeeld `vulcanocraft-info-website`).
2. Initialiseer Git in deze map:

   ```bash
   git init
   git add .
   git commit -m "Initial commit VulcanoCraft website"
   git branch -M main
   git remote add origin https://github.com/<jouw-gebruikersnaam>/vulcanocraft-info-website.git
   git push -u origin main
   ```

3. Controleer op GitHub of alle bestanden (HTML, CSS, JS, img, sound) zijn geüpload.

Hosten via GitHub Pages
-----------------------

1. Ga naar de instellingen van je repository op GitHub.
2. Zoek naar **Pages**.
3. Kies **Source: Deploy from a branch**.
4. Selecteer de `main` branch en de root (`/`) map.
5. Sla op. Na enkele minuten is de site beschikbaar op de GitHub Pages URL.

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

