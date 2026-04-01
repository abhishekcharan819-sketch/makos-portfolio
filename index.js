const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const projects = [
  {
    slug: 'la-ou-dort-l-eau',
    title: 'Là où dort l\'eau',
    image: 'https://framerusercontent.com/images/InDSsIwaET4Hzo7U3wbzyYhxKW0.png?width=2333&height=2327',
    thumb: 'https://framerusercontent.com/images/InDSsIwaET4Hzo7U3wbzyYhxKW0.png?width=800',
  },
  {
    slug: 'revolte-douce',
    title: 'Révolte douce',
    image: 'https://framerusercontent.com/images/qMRSv7LxvGO1X9FuBYNgiOjNtU.png?width=3089&height=2048',
    thumb: 'https://framerusercontent.com/images/qMRSv7LxvGO1X9FuBYNgiOjNtU.png?width=800',
  },
  {
    slug: 'champ-silencieux',
    title: 'Champ Silencieux',
    image: 'https://framerusercontent.com/images/Lz0GkqBvVyg6iQGL0CbdlqB6hyU.png?width=2667&height=2778',
    thumb: 'https://framerusercontent.com/images/Lz0GkqBvVyg6iQGL0CbdlqB6hyU.png?width=800',
  },
  {
    slug: 'les-silences-miroirs',
    title: 'Les Silences Miroirs',
    image: 'https://framerusercontent.com/images/gcWvM6xq68ZqMzdzlAH3uEvM.png?width=4417&height=2945',
    thumb: 'https://framerusercontent.com/images/gcWvM6xq68ZqMzdzlAH3uEvM.png?width=800',
  },
  {
    slug: 'lisiere',
    title: 'Lisière',
    image: 'https://framerusercontent.com/images/E30cz4kMGSKm4LXMkcs72jQU.png?width=1200&height=1200',
    thumb: 'https://framerusercontent.com/images/E30cz4kMGSKm4LXMkcs72jQU.png?width=800',
  },
  {
    slug: 'elan-brut',
    title: 'Élan Brut',
    image: 'https://framerusercontent.com/images/qMTvU6ulbA1BVHM473KDQ1vt4U.png?width=6112&height=4075',
    thumb: 'https://framerusercontent.com/images/qMTvU6ulbA1BVHM473KDQ1vt4U.png?width=800',
  },
];

app.get('/', (req, res) => {
  res.render('home', {
    title: 'MakOS — Creative Portfolio Template',
    projects,
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
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;
