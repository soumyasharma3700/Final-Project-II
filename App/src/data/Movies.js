const palette = {
  "Sci-Fi": ["#00c030", "#1b4d89"],
  Drama: ["#f5b942", "#2f3542"],
  Thriller: ["#ff5c5c", "#243447"],
  Action: ["#ff9f1c", "#18212b"],
  Mystery: ["#9b5de5", "#18202a"],
  Anime: ["#00bbf9", "#3a0ca3"],
  Adventure: ["#2ec4b6", "#264653"],
  Crime: ["#d90429", "#252422"],
  Fantasy: ["#80ed99", "#3c1642"],
  Romance: ["#ff6b9d", "#312244"],
  Horror: ["#e63946", "#111111"],
  Biography: ["#ffd166", "#073b4c"],
};

const TMDB_IMG = "https://image.tmdb.org/t/p/w500";
const TMDB_BACKDROP = "https://image.tmdb.org/t/p/w1280";

const tmdbImages = {
  interstellar: { poster: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", backdrop: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg" },
  inception: { poster: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", backdrop: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg" },
  "the-prestige": { poster: "/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg", backdrop: "/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg" },
  whiplash: { poster: "/7fn624j5lj3xTme2SgiLCeuedmO.jpg", backdrop: "/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg" },
  avatar: { poster: "/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", backdrop: "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg" },
  oppenheimer: { poster: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", backdrop: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg" },
  dune: { poster: "/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg", backdrop: "/iopYFB1b6Bh7FWZh3onQhph1sih.jpg" },
  parasite: { poster: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", backdrop: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg" },
  "the-dark-knight": { poster: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg", backdrop: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg" },
  joker: { poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", backdrop: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg" },
  "fight-club": { poster: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", backdrop: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg" },
  "the-matrix": { poster: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", backdrop: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg" },
  "shawshank-redemption": { poster: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", backdrop: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg" },
  "your-name": { poster: "/q719jXXEzOoYaps6babgKnONONX.jpg", backdrop: "/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg" },
  "spirited-away": { poster: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", backdrop: "/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg" },
  "john-wick": { poster: "/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", backdrop: "/umC04Cozevu8nn3ZTIU9rp3Y4jV.jpg" },
  prisoners: { poster: "/jsS3a3ep2KyBVmmiwaz3LvK49b1.jpg", backdrop: "/fkFDomFkMfcMUpUYKaEcMGGaJg5.jpg" },
  arrival: { poster: "/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", backdrop: "/rjkmFBvRHSEFxHUQ2cyRuEMUBsO.jpg" },
  "blade-runner-2049": { poster: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", backdrop: "/ilRyazdMJwN05exqhwK4tMKBYZs.jpg" },
  "the-godfather": { poster: "/lm3pQ2QoQ16pextRsmnUbG2onES.jpg", backdrop: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg" },
  "pulp-fiction": { poster: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", backdrop: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg" },
  goodfellas: { poster: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", backdrop: "/5CxuBFZoFmgF4Qx1xETnxOLkurz.jpg" },
  se7en: { poster: "/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg", backdrop: "/lbMQDMxe5ZwwHG5BpuQHBMvWpXI.jpg" },
  zodiac: { poster: "/6YmeO4pB7XTh8P8F960O1uA14JO.jpg", backdrop: "/hFGC3I7JzQHjnpjqMv9hSr2bxpA.jpg" },
  "gone-girl": { poster: "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", backdrop: "/banOOmKC1uM0nCVhPVSPhCJMCbD.jpg" },
  "mad-max-fury-road": { poster: "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", backdrop: "/phszHPFnhEAGRHxBXToHHBaqFSA.jpg" },
  gladiator: { poster: "/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", backdrop: "/hND1yIFr8gTAsEMNr2aBKRtUoHY.jpg" },
  "lord-of-the-rings-fellowship": { poster: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", backdrop: "/pIgcHRqqACFvNF1Q30PksuGBMWV.jpg" },
  "return-of-the-king": { poster: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", backdrop: "/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg" },
  "forrest-gump": { poster: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", backdrop: "/7c9UVPPiTPltouxRVY6N9uugaVA.jpg" },
  "the-green-mile": { poster: "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg", backdrop: "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg" },
  "the-social-network": { poster: "/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg", backdrop: "/4Oe4UNHlJEOcw64pzjvF7YIpZQX.jpg" },
  "the-imitation-game": { poster: "/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg", backdrop: "/5SFE4sZE0RXGVKOxUt5VUJmqQcc.jpg" },
  dunkirk: { poster: "/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg", backdrop: "/fudEG1VUWuOqleXv6NwCExK0VLy.jpg" },
  1917: { poster: "/iZf0KyrE25z1sage4SYFLCCrMi9.jpg", backdrop: "/raHyeODDUMrgv0OeSRNMnCnDLjE.jpg" },
  "la-la-land": { poster: "/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", backdrop: "/nadGENDASIFHGFCeSHBFMGNxHCQ.jpg" },
  "black-swan": { poster: "/viWheBd44bouiLCHgNMvahLThqx.jpg", backdrop: "/kM4VPJZ1gFTiUyJHBpMtjXCMEXT.jpg" },
  "shutter-island": { poster: "/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg", backdrop: "/rgMSFBlyI6E1it5pZaVxIAThDqX.jpg" },
  nightcrawler: { poster: "/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg", backdrop: "/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg" },
  "american-psycho": { poster: "/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg", backdrop: "/7u3pxc0K1wx32IleAkLv78MKgrw.jpg" },
  "ex-machina": { poster: "/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg", backdrop: "/qOiFlGHPuJ6Ql0uIFVv9Lgu0jxf.jpg" },
  her: { poster: "/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg", backdrop: "/lEIaL12hSkqqe83kgADkbUEEnQn.jpg" },
  "edge-of-tomorrow": { poster: "/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg", backdrop: "/wXzDKMHjRfJjVsxEkBWnMXRVFyK.jpg" },
  logan: { poster: "/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg", backdrop: "/4ynQYtSEuU5hyipcGkfD4MoHE5O.jpg" },
  "guardians-of-the-galaxy": { poster: "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg", backdrop: "/bHarw8xrmQeqf3t8HpgCnQyRuWS.jpg" },
  oldboy: { poster: "/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg", backdrop: "/iTvvOGfmqIPvKaFbG2BGXX2Igv4.jpg" },
  scarface: { poster: "/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg", backdrop: "/v6ycuhwDMpBO6SQwKFPkW6VNMWZ.jpg" },
  "taxi-driver": { poster: "/ekstpH614fwDX8DUln1a2Opz0N8.jpg", backdrop: "/9T0p9bxFHGTiyfNuXdLuIAfRQeD.jpg" },
  braveheart: { poster: "/or1gBugydmjToAEq7OZY0owwFk.jpg", backdrop: "/mSmBrQFGCEEqDxCzCF1lpmFMJkr.jpg" },
  "princess-mononoke": { poster: "/cMYCDADoLKLbB83g4WnJegaZimC.jpg", backdrop: "/jHa90hFSAEHiLMTECtnijWFVUdB.jpg" },
  "howls-moving-castle": { poster: "/npOnzAbLh6VOIu3naU5QaEcTepo.jpg", backdrop: "/3LoLD9fHeCXMpwwHOMIAWTgfRHi.jpg" },
  "a-silent-voice": { poster: "/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg", backdrop: "/sHtml5BsU0QmMBeTDUCp1TTDGZM.jpg" },
  "weathering-with-you": { poster: "/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg", backdrop: "/7bHJkSg3YkdxNwrjAiZbKEvfGMZ.jpg" },
};

const svgDataUri = (svg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const poster = (title, genre, index) => {
  const [accent, deep] = palette[genre] || palette.Drama;
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="960" viewBox="0 0 640 960">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${deep}"/>
          <stop offset="1" stop-color="${accent}"/>
        </linearGradient>
        <radialGradient id="r" cx="50%" cy="25%" r="75%">
          <stop offset="0" stop-color="#ffffff" stop-opacity=".24"/>
          <stop offset=".42" stop-color="${accent}" stop-opacity=".16"/>
          <stop offset="1" stop-color="#000000" stop-opacity=".36"/>
        </radialGradient>
      </defs>
      <rect width="640" height="960" fill="#14181c"/>
      <rect x="24" y="24" width="592" height="912" rx="34" fill="url(#g)"/>
      <rect x="24" y="24" width="592" height="912" rx="34" fill="url(#r)"/>
      <circle cx="${120 + (index % 7) * 58}" cy="${160 + (index % 5) * 42}" r="${78 + (index % 4) * 16}" fill="#fff" opacity=".11"/>
      <path d="M70 695 C170 620 260 760 376 675 S535 640 590 724 V936 H70 Z" fill="#000" opacity=".24"/>
      <text x="70" y="102" fill="#dfe7ef" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="2">${genre.toUpperCase()}</text>
      <foreignObject x="68" y="604" width="504" height="210">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,Helvetica,sans-serif;color:white;font-size:58px;font-weight:800;line-height:1.02;letter-spacing:0;text-shadow:0 12px 30px rgba(0,0,0,.35)">${title}</div>
      </foreignObject>
      <rect x="70" y="838" width="112" height="10" rx="5" fill="#fff" opacity=".7"/>
      <rect x="196" y="838" width="78" height="10" rx="5" fill="#fff" opacity=".38"/>
    </svg>
  `);
};

const banner = (title, genre, index) => {
  const [accent, deep] = palette[genre] || palette.Drama;
  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="720" viewBox="0 0 1600 720">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#0b0f13"/>
          <stop offset=".46" stop-color="${deep}"/>
          <stop offset="1" stop-color="${accent}"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="720" fill="url(#bg)"/>
      <circle cx="${980 + (index % 6) * 60}" cy="${125 + (index % 4) * 54}" r="230" fill="#fff" opacity=".08"/>
      <circle cx="${1260 - (index % 4) * 70}" cy="520" r="310" fill="#000" opacity=".2"/>
      <path d="M0 520 C240 410 390 585 610 486 S970 382 1190 510 1450 590 1600 470 V720 H0 Z" fill="#000" opacity=".34"/>
      <text x="92" y="148" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" letter-spacing="4">${genre.toUpperCase()}</text>
      <foreignObject x="90" y="210" width="930" height="230">
        <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,Helvetica,sans-serif;color:white;font-size:92px;font-weight:900;line-height:.98;letter-spacing:0">${title}</div>
      </foreignObject>
    </svg>
  `);
};

const rawMovies = [
  { id: "interstellar", title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.7, runtime: "169 min", director: "Christopher Nolan", cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], description: "A team of explorers travels through a wormhole in search of a future for humanity.", tags: ["space", "time", "family"], similar: ["inception", "arrival", "dune"] },
  { id: "inception", title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, runtime: "148 min", director: "Christopher Nolan", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"], description: "A thief who steals secrets through dream-sharing is offered a chance to erase his past.", tags: ["dreams", "heist", "mind-bending"], similar: ["interstellar", "the-matrix", "the-prestige"] },
  { id: "the-prestige", title: "The Prestige", year: 2006, genre: "Mystery", rating: 8.5, runtime: "130 min", director: "Christopher Nolan", cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"], description: "Two rival magicians pursue obsession, sacrifice, and impossible illusions.", tags: ["magic", "rivalry", "twist"], similar: ["inception", "prisoners", "shutter-island"] },
  { id: "whiplash", title: "Whiplash", year: 2014, genre: "Drama", rating: 8.5, runtime: "106 min", director: "Damien Chazelle", cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"], description: "A young drummer is pushed to the edge by a ferocious jazz instructor.", tags: ["music", "ambition", "pressure"], similar: ["black-swan", "la-la-land", "the-social-network"] },
  { id: "avatar", title: "Avatar", year: 2009, genre: "Adventure", rating: 7.9, runtime: "162 min", director: "James Cameron", cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"], description: "A marine on an alien moon is torn between duty and a vibrant new world.", tags: ["alien world", "epic", "nature"], similar: ["dune", "guardians-of-the-galaxy", "mad-max-fury-road"] },
  { id: "oppenheimer", title: "Oppenheimer", year: 2023, genre: "Biography", rating: 8.4, runtime: "180 min", director: "Christopher Nolan", cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."], description: "The architect of the atomic bomb confronts genius, politics, and consequence.", tags: ["history", "science", "politics"], similar: ["the-imitation-game", "the-social-network", "dunkirk"] },
  { id: "dune", title: "Dune", year: 2021, genre: "Sci-Fi", rating: 8.0, runtime: "155 min", director: "Denis Villeneuve", cast: ["Timothee Chalamet", "Rebecca Ferguson", "Oscar Isaac"], description: "A gifted heir enters a desert planet's dangerous struggle for power.", tags: ["desert", "prophecy", "epic"], similar: ["blade-runner-2049", "avatar", "interstellar"] },
  { id: "parasite", title: "Parasite", year: 2019, genre: "Thriller", rating: 8.5, runtime: "132 min", director: "Bong Joon-ho", cast: ["Song Kang-ho", "Cho Yeo-jeong", "Park So-dam"], description: "A poor family infiltrates a wealthy household with explosive consequences.", tags: ["class", "satire", "tension"], similar: ["gone-girl", "nightcrawler", "oldboy"] },
  { id: "the-dark-knight", title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, runtime: "152 min", director: "Christopher Nolan", cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], description: "Batman faces a criminal mastermind who tests Gotham's soul.", tags: ["superhero", "crime", "chaos"], similar: ["joker", "logan", "john-wick"] },
  { id: "joker", title: "Joker", year: 2019, genre: "Drama", rating: 8.4, runtime: "122 min", director: "Todd Phillips", cast: ["Joaquin Phoenix", "Zazie Beetz", "Robert De Niro"], description: "An isolated performer descends into a symbol of rage in Gotham City.", tags: ["character study", "society", "descent"], similar: ["taxi-driver", "fight-club", "the-dark-knight"] },
  { id: "fight-club", title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8, runtime: "139 min", director: "David Fincher", cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"], description: "A numb office worker enters an underground world that mutates into revolt.", tags: ["identity", "rebellion", "cult"], similar: ["joker", "american-psycho", "se7en"] },
  { id: "the-matrix", title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7, runtime: "136 min", director: "The Wachowskis", cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], description: "A hacker discovers reality is a simulation and joins a war for freedom.", tags: ["simulation", "cyberpunk", "chosen one"], similar: ["inception", "blade-runner-2049", "edge-of-tomorrow"] },
  { id: "shawshank-redemption", title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3, runtime: "142 min", director: "Frank Darabont", cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"], description: "Two imprisoned men find friendship and hope over decades behind bars.", tags: ["hope", "prison", "friendship"], similar: ["the-green-mile", "forrest-gump", "the-godfather"] },
  { id: "your-name", title: "Your Name", year: 2016, genre: "Anime", rating: 8.4, runtime: "106 min", director: "Makoto Shinkai", cast: ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"], description: "Two teenagers mysteriously swap bodies and chase a connection across time.", tags: ["romance", "time", "coming-of-age"], similar: ["spirited-away", "a-silent-voice", "weathering-with-you"] },
  { id: "spirited-away", title: "Spirited Away", year: 2001, genre: "Anime", rating: 8.6, runtime: "125 min", director: "Hayao Miyazaki", cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"], description: "A young girl enters a spirit world and fights to save her parents.", tags: ["spirits", "wonder", "courage"], similar: ["princess-mononoke", "howls-moving-castle", "your-name"] },
  { id: "john-wick", title: "John Wick", year: 2014, genre: "Action", rating: 7.4, runtime: "101 min", director: "Chad Stahelski", cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"], description: "A retired assassin returns to a neon underworld after a personal loss.", tags: ["revenge", "assassin", "stylized"], similar: ["mad-max-fury-road", "the-dark-knight", "edge-of-tomorrow"] },
  { id: "prisoners", title: "Prisoners", year: 2013, genre: "Thriller", rating: 8.2, runtime: "153 min", director: "Denis Villeneuve", cast: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"], description: "A desperate father and a detective hunt for two missing girls.", tags: ["crime", "moral dilemma", "investigation"], similar: ["zodiac", "se7en", "the-prestige"] },
  { id: "arrival", title: "Arrival", year: 2016, genre: "Sci-Fi", rating: 7.9, runtime: "116 min", director: "Denis Villeneuve", cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"], description: "A linguist decodes alien communication as nations move toward conflict.", tags: ["language", "aliens", "time"], similar: ["interstellar", "ex-machina", "blade-runner-2049"] },
  { id: "blade-runner-2049", title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", rating: 8.0, runtime: "164 min", director: "Denis Villeneuve", cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"], description: "A replicant officer uncovers a secret that could fracture society.", tags: ["cyberpunk", "identity", "future"], similar: ["dune", "the-matrix", "arrival"] },
  { id: "the-godfather", title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, runtime: "175 min", director: "Francis Ford Coppola", cast: ["Marlon Brando", "Al Pacino", "James Caan"], description: "A mafia family transfers power while loyalty and violence reshape its heir.", tags: ["mafia", "family", "legacy"], similar: ["goodfellas", "scarface", "shawshank-redemption"] },
  { id: "pulp-fiction", title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9, runtime: "154 min", director: "Quentin Tarantino", cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], description: "Interlocking tales of criminals, boxers, and drifters collide in Los Angeles.", tags: ["nonlinear", "crime", "dialogue"], similar: ["goodfellas", "fight-club", "se7en"] },
  { id: "goodfellas", title: "Goodfellas", year: 1990, genre: "Crime", rating: 8.7, runtime: "146 min", director: "Martin Scorsese", cast: ["Ray Liotta", "Robert De Niro", "Joe Pesci"], description: "A mob associate rises through the criminal world and watches it consume him.", tags: ["mob", "rise and fall", "crime"], similar: ["the-godfather", "pulp-fiction", "scarface"] },
  { id: "se7en", title: "Se7en", year: 1995, genre: "Thriller", rating: 8.6, runtime: "127 min", director: "David Fincher", cast: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow"], description: "Two detectives track a killer staging murders around the seven deadly sins.", tags: ["serial killer", "noir", "detective"], similar: ["zodiac", "prisoners", "fight-club"] },
  { id: "zodiac", title: "Zodiac", year: 2007, genre: "Mystery", rating: 7.7, runtime: "157 min", director: "David Fincher", cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr."], description: "Journalists and detectives become obsessed with an elusive serial killer.", tags: ["true crime", "obsession", "investigation"], similar: ["se7en", "prisoners", "gone-girl"] },
  { id: "gone-girl", title: "Gone Girl", year: 2014, genre: "Thriller", rating: 8.1, runtime: "149 min", director: "David Fincher", cast: ["Ben Affleck", "Rosamund Pike", "Carrie Coon"], description: "A missing wife case turns into a ruthless media and marriage nightmare.", tags: ["marriage", "media", "deception"], similar: ["parasite", "zodiac", "nightcrawler"] },
  { id: "mad-max-fury-road", title: "Mad Max: Fury Road", year: 2015, genre: "Action", rating: 8.1, runtime: "120 min", director: "George Miller", cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"], description: "Fugitives race across a wasteland in a roaring fight for liberation.", tags: ["wasteland", "chase", "survival"], similar: ["john-wick", "avatar", "logan"] },
  { id: "gladiator", title: "Gladiator", year: 2000, genre: "Action", rating: 8.5, runtime: "155 min", director: "Ridley Scott", cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"], description: "A betrayed Roman general becomes a gladiator seeking justice.", tags: ["revenge", "ancient rome", "epic"], similar: ["braveheart", "the-dark-knight", "logan"] },
  { id: "lord-of-the-rings-fellowship", title: "The Fellowship of the Ring", year: 2001, genre: "Fantasy", rating: 8.9, runtime: "178 min", director: "Peter Jackson", cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"], description: "A fellowship forms to destroy a ring that could plunge Middle-earth into darkness.", tags: ["quest", "fantasy", "friendship"], similar: ["return-of-the-king", "princess-mononoke", "avatar"] },
  { id: "return-of-the-king", title: "The Return of the King", year: 2003, genre: "Fantasy", rating: 9.0, runtime: "201 min", director: "Peter Jackson", cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"], description: "The final battle for Middle-earth unfolds as the ring reaches Mount Doom.", tags: ["finale", "war", "fantasy"], similar: ["lord-of-the-rings-fellowship", "dune", "gladiator"] },
  { id: "forrest-gump", title: "Forrest Gump", year: 1994, genre: "Drama", rating: 8.8, runtime: "142 min", director: "Robert Zemeckis", cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"], description: "A gentle man drifts through decades of American history with open-hearted wonder.", tags: ["life", "history", "romance"], similar: ["shawshank-redemption", "the-green-mile", "la-la-land"] },
  { id: "the-green-mile", title: "The Green Mile", year: 1999, genre: "Drama", rating: 8.6, runtime: "189 min", director: "Frank Darabont", cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"], description: "A prison guard encounters a death-row inmate with an impossible gift.", tags: ["prison", "miracle", "compassion"], similar: ["shawshank-redemption", "forrest-gump", "the-godfather"] },
  { id: "the-social-network", title: "The Social Network", year: 2010, genre: "Drama", rating: 7.8, runtime: "120 min", director: "David Fincher", cast: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"], description: "The founding of Facebook becomes a story of ambition, betrayal, and ownership.", tags: ["tech", "ambition", "betrayal"], similar: ["oppenheimer", "whiplash", "the-imitation-game"] },
  { id: "the-imitation-game", title: "The Imitation Game", year: 2014, genre: "Biography", rating: 8.0, runtime: "114 min", director: "Morten Tyldum", cast: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"], description: "Alan Turing races to crack Enigma while hiding a private truth.", tags: ["codebreaking", "war", "genius"], similar: ["oppenheimer", "the-social-network", "dunkirk"] },
  { id: "dunkirk", title: "Dunkirk", year: 2017, genre: "Drama", rating: 7.8, runtime: "106 min", director: "Christopher Nolan", cast: ["Fionn Whitehead", "Tom Hardy", "Mark Rylance"], description: "Soldiers, pilots, and civilians converge during a desperate wartime evacuation.", tags: ["war", "survival", "time"], similar: ["oppenheimer", "1917", "gladiator"] },
  { id: "1917", title: "1917", year: 2019, genre: "Drama", rating: 8.2, runtime: "119 min", director: "Sam Mendes", cast: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"], description: "Two soldiers cross enemy territory to deliver a message that could save lives.", tags: ["war", "mission", "immersive"], similar: ["dunkirk", "oppenheimer", "prisoners"] },
  { id: "la-la-land", title: "La La Land", year: 2016, genre: "Romance", rating: 8.0, runtime: "128 min", director: "Damien Chazelle", cast: ["Ryan Gosling", "Emma Stone", "John Legend"], description: "Two artists fall in love while chasing dreams in Los Angeles.", tags: ["music", "romance", "dreams"], similar: ["whiplash", "your-name", "forrest-gump"] },
  { id: "black-swan", title: "Black Swan", year: 2010, genre: "Thriller", rating: 8.0, runtime: "108 min", director: "Darren Aronofsky", cast: ["Natalie Portman", "Mila Kunis", "Vincent Cassel"], description: "A ballerina's pursuit of perfection fractures her sense of reality.", tags: ["obsession", "performance", "psychological"], similar: ["whiplash", "american-psycho", "shutter-island"] },
  { id: "shutter-island", title: "Shutter Island", year: 2010, genre: "Mystery", rating: 8.2, runtime: "138 min", director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Michelle Williams"], description: "A marshal investigates a remote asylum where every clue bends reality.", tags: ["asylum", "twist", "investigation"], similar: ["the-prestige", "black-swan", "gone-girl"] },
  { id: "nightcrawler", title: "Nightcrawler", year: 2014, genre: "Thriller", rating: 7.8, runtime: "117 min", director: "Dan Gilroy", cast: ["Jake Gyllenhaal", "Rene Russo", "Riz Ahmed"], description: "An ambitious freelancer films violent crime scenes and loses every boundary.", tags: ["media", "ambition", "noir"], similar: ["parasite", "gone-girl", "american-psycho"] },
  { id: "american-psycho", title: "American Psycho", year: 2000, genre: "Horror", rating: 7.6, runtime: "102 min", director: "Mary Harron", cast: ["Christian Bale", "Willem Dafoe", "Jared Leto"], description: "A wealthy banker hides violent impulses behind a flawless social mask.", tags: ["satire", "identity", "violence"], similar: ["fight-club", "nightcrawler", "black-swan"] },
  { id: "ex-machina", title: "Ex Machina", year: 2014, genre: "Sci-Fi", rating: 7.7, runtime: "108 min", director: "Alex Garland", cast: ["Domhnall Gleeson", "Alicia Vikander", "Oscar Isaac"], description: "A programmer tests an advanced AI and becomes trapped in a game of trust.", tags: ["ai", "isolation", "ethics"], similar: ["arrival", "her", "the-matrix"] },
  { id: "her", title: "Her", year: 2013, genre: "Romance", rating: 8.0, runtime: "126 min", director: "Spike Jonze", cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams"], description: "A lonely writer falls in love with an operating system that keeps evolving.", tags: ["ai", "love", "future"], similar: ["ex-machina", "arrival", "la-la-land"] },
  { id: "edge-of-tomorrow", title: "Edge of Tomorrow", year: 2014, genre: "Action", rating: 7.9, runtime: "113 min", director: "Doug Liman", cast: ["Tom Cruise", "Emily Blunt", "Bill Paxton"], description: "A soldier relives the same battle until he learns how to fight back.", tags: ["time loop", "aliens", "combat"], similar: ["the-matrix", "john-wick", "interstellar"] },
  { id: "logan", title: "Logan", year: 2017, genre: "Action", rating: 8.1, runtime: "137 min", director: "James Mangold", cast: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"], description: "An aging mutant protects a young girl while his own legend fades.", tags: ["superhero", "western", "legacy"], similar: ["the-dark-knight", "mad-max-fury-road", "gladiator"] },
  { id: "guardians-of-the-galaxy", title: "Guardians of the Galaxy", year: 2014, genre: "Adventure", rating: 8.0, runtime: "121 min", director: "James Gunn", cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"], description: "A band of misfits becomes the galaxy's unlikeliest line of defense.", tags: ["space", "team", "comedy"], similar: ["avatar", "edge-of-tomorrow", "dune"] },
  { id: "oldboy", title: "Oldboy", year: 2003, genre: "Thriller", rating: 8.3, runtime: "120 min", director: "Park Chan-wook", cast: ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung"], description: "A man imprisoned for years is released into a brutal puzzle of revenge.", tags: ["revenge", "mystery", "neo-noir"], similar: ["parasite", "se7en", "prisoners"] },
  { id: "scarface", title: "Scarface", year: 1983, genre: "Crime", rating: 8.3, runtime: "170 min", director: "Brian De Palma", cast: ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"], description: "An ambitious immigrant builds a criminal empire and is consumed by excess.", tags: ["crime", "power", "fall"], similar: ["the-godfather", "goodfellas", "pulp-fiction"] },
  { id: "taxi-driver", title: "Taxi Driver", year: 1976, genre: "Drama", rating: 8.2, runtime: "114 min", director: "Martin Scorsese", cast: ["Robert De Niro", "Jodie Foster", "Cybill Shepherd"], description: "A lonely cab driver drifts through urban alienation toward violence.", tags: ["loneliness", "city", "descent"], similar: ["joker", "nightcrawler", "fight-club"] },
  { id: "braveheart", title: "Braveheart", year: 1995, genre: "Adventure", rating: 8.3, runtime: "178 min", director: "Mel Gibson", cast: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"], description: "A Scottish rebel leads a fight for freedom against a powerful empire.", tags: ["freedom", "war", "epic"], similar: ["gladiator", "return-of-the-king", "1917"] },
  { id: "princess-mononoke", title: "Princess Mononoke", year: 1997, genre: "Anime", rating: 8.3, runtime: "134 min", director: "Hayao Miyazaki", cast: ["Yoji Matsuda", "Yuriko Ishida", "Yuko Tanaka"], description: "A cursed prince enters a conflict between forest spirits and industry.", tags: ["nature", "spirits", "war"], similar: ["spirited-away", "howls-moving-castle", "lord-of-the-rings-fellowship"] },
  { id: "howls-moving-castle", title: "Howl's Moving Castle", year: 2004, genre: "Anime", rating: 8.2, runtime: "119 min", director: "Hayao Miyazaki", cast: ["Chieko Baisho", "Takuya Kimura", "Akihiro Miwa"], description: "A cursed young woman finds refuge in a wizard's walking castle.", tags: ["magic", "anti-war", "romance"], similar: ["spirited-away", "princess-mononoke", "your-name"] },
  { id: "a-silent-voice", title: "A Silent Voice", year: 2016, genre: "Anime", rating: 8.1, runtime: "130 min", director: "Naoko Yamada", cast: ["Miyu Irino", "Saori Hayami", "Aoi Yuki"], description: "A former bully seeks forgiveness from a deaf classmate he once hurt.", tags: ["redemption", "school", "empathy"], similar: ["your-name", "weathering-with-you", "la-la-land"] },
  { id: "weathering-with-you", title: "Weathering with You", year: 2019, genre: "Anime", rating: 7.5, runtime: "112 min", director: "Makoto Shinkai", cast: ["Kotaro Daigo", "Nana Mori", "Shun Oguri"], description: "A runaway boy meets a girl who can briefly clear the rain from Tokyo skies.", tags: ["weather", "romance", "fantasy"], similar: ["your-name", "a-silent-voice", "spirited-away"] },
];

export const movies = rawMovies.map((movie, index) => {
  const imageSet = tmdbImages[movie.id];

  return {
    ...movie,
    image: imageSet?.poster
      ? `${TMDB_IMG}${imageSet.poster}`
      : poster(movie.title, movie.genre, index),
    banner: imageSet?.backdrop
      ? `${TMDB_BACKDROP}${imageSet.backdrop}`
      : banner(movie.title, movie.genre, index),
    stats: {
      views: 18000 + index * 1173,
      likes: 3200 + index * 257,
      lists: 430 + index * 39,
    },
  };
});

export const genres = [...new Set(movies.map((movie) => movie.genre))].sort();
export const getMovieById = (id) => movies.find((movie) => movie.id === id);
export const getMoviesByIds = (ids = []) =>
  ids.map((id) => getMovieById(id)).filter(Boolean);
