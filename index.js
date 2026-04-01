const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const projects = [
  {
    slug: 'la-ou-dort-l-eau',
    title: "Là où dort l'eau",
    image: 'https://framerusercontent.com/images/InDSsIwaET4Hzo7U3wbzyYhxKW0.png',
    thumb: 'https://framerusercontent.com/images/InDSsIwaET4Hzo7U3wbzyYhxKW0.png?width=400',
    description: "A contemplative series exploring the stillness and depth of water at rest. This project captures the interplay between light and reflection, inviting viewers to pause and observe the quiet beauty hidden in familiar landscapes.",
    client: 'Personal Project',
    year: '2025',
    projectType: 'Fine Art / Photography',
    credits: 'cottonbro studio',
    // Position on homepage (% from left, % from top)
    posX: 40, posY: 42,
  },
  {
    slug: 'champ-silencieux',
    title: 'Champ Silencieux',
    image: 'https://framerusercontent.com/images/Lz0GkqBvVyg6iQGL0CbdlqB6hyU.png',
    thumb: 'https://framerusercontent.com/images/Lz0GkqBvVyg6iQGL0CbdlqB6hyU.png?width=400',
    description: "Paintings series capturing the timeless essence of the Sonoran Desert through its shifting landscapes. This project explores the subtle relationship between light, iconic geological formations, and the plant life that defines this unique ecosystem. Through a soft and contemplative palette, the series invites reflection on the silent beauty and resilience of these arid lands.",
    client: 'Sonoran National Park',
    year: '2025',
    projectType: 'Portrait / Artistic',
    credits: 'cottonbro studio',
    posX: 24, posY: 22,
  },
  {
    slug: 'les-silences-miroirs',
    title: 'Les Silences Miroirs',
    image: 'https://framerusercontent.com/images/gcWvM6xq68ZqMzdzlAH3uEvM.png',
    thumb: 'https://framerusercontent.com/images/gcWvM6xq68ZqMzdzlAH3uEvM.png?width=400',
    description: "A visual meditation on the mirroring nature of silence — how it reflects our inner world back at us. This series captures quiet, suspended moments where the boundary between self and surroundings dissolves.",
    client: 'Personal Project',
    year: '2024',
    projectType: 'Fine Art / Series',
    credits: 'cottonbro studio',
    posX: 63, posY: 15,
  },
  {
    slug: 'revolte-douce',
    title: 'Révolte douce',
    image: 'https://framerusercontent.com/images/qMRSv7LxvGO1X9FuBYNgiOjNtU.png',
    thumb: 'https://framerusercontent.com/images/qMRSv7LxvGO1X9FuBYNgiOjNtU.png?width=400',
    description: "A gentle rebellion — this series documents quiet acts of defiance and tenderness coexisting within the same frame. Soft tones contrast with charged emotional undertones, creating images that whisper rather than shout.",
    client: 'Personal Project',
    year: '2024',
    projectType: 'Documentary / Artistic',
    credits: 'cottonbro studio',
    posX: 72, posY: 35,
  },
  {
    slug: 'lisiere',
    title: 'Lisière',
    image: 'https://framerusercontent.com/images/E30cz4kMGSKm4LXMkcs72jQU.png',
    thumb: 'https://framerusercontent.com/images/E30cz4kMGSKm4LXMkcs72jQU.png?width=400',
    description: "Lisière explores the threshold — the edge between forest and field, known and unknown, light and shadow. A series that finds poetry in transitional spaces and the quiet tension of in-between moments.",
    client: 'Personal Project',
    year: '2024',
    projectType: 'Landscape / Fine Art',
    credits: 'cottonbro studio',
    posX: 22, posY: 55,
  },
  {
    slug: 'elan-brut',
    title: 'Élan Brut',
    image: 'https://framerusercontent.com/images/qMTvU6ulbA1BVHM473KDQ1vt4U.png',
    thumb: 'https://framerusercontent.com/images/qMTvU6ulbA1BVHM473KDQ1vt4U.png?width=400',
    description: "Raw momentum. This series captures the unfiltered energy of bodies in motion — athletes, dancers, and everyday people caught in fleeting instants of pure physical expression. Gritty, honest, alive.",
    client: 'Personal Project',
    year: '2023',
    projectType: 'Action / Portrait',
    credits: 'cottonbro studio',
    posX: 68, posY: 55,
  },
];

app.get('/', (req, res) => {
  res.render('home', {
    title: 'MakOS — Creative Portfolio Template',
    projects: JSON.stringify(projects),
  });
});

app.get('/works/:slug', (req, res) => {
  const project = projects.find(p => p.slug === req.params.slug);
  if (!project) return res.status(404).render('404', { title: '404 — Not Found' });
  res.render('work-detail', { title: project.title + ' — MakOS', project });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404 — Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
module.exports = app;
