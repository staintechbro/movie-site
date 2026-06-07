const TMDB_POSTER = 'https://image.tmdb.org/t/p/w500';
const TMDB_BACKDROP = 'https://image.tmdb.org/t/p/original';
const API_PROXY = '/api';

const genreMap = {
  28: 'Action',
  35: 'Comedy',
  27: 'Horror',
  878: 'Sci-Fi',
  18: 'Drama',
  80: 'Crime',
  14: 'Fantasy',
  53: 'Thriller'
};

const categoriesConfig = [
  { category: 'Trending Now', path: '/trending/movie/week', params: {} },
  { category: 'Top Rated', path: '/movie/top_rated', params: {} },
  { category: 'Action Movies', path: '/discover/movie', params: { with_genres: 28, sort_by: 'popularity.desc' } },
  { category: 'Comedy', path: '/discover/movie', params: { with_genres: 35, sort_by: 'popularity.desc' } },
  { category: 'Horror', path: '/discover/movie', params: { with_genres: 27, sort_by: 'popularity.desc' } },
  { category: 'Sci-Fi', path: '/discover/movie', params: { with_genres: 878, sort_by: 'popularity.desc' } }
];

let movieCategories = [
  {
    category: 'Trending Now',
    movies: [
      { title: 'Neon Frontier', year: '2026', duration: '2h 15m', rating: '8.9', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1542204165-6689e3063c9f?auto=format&fit=crop&w=900&q=80', description: 'A rebels’ mission becomes a fight for tomorrow when the city’s greatest secret is exposed.' },
      { title: 'Urban Outlaw', year: '2025', duration: '1h 58m', rating: '8.3', genre: 'Action', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80', description: 'A fast-paced thriller where one mistake starts a game of cat and mouse under neon lights.' },
      { title: 'Moonlit Escape', year: '2024', duration: '1h 48m', rating: '8.1', genre: 'Horror', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80', description: 'A remote cabin, a midnight storm, and secrets you cannot unsee in this atmospheric chiller.' },
      { title: 'Starlight Run', year: '2025', duration: '2h 4m', rating: '8.6', genre: 'Adventure', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80', description: 'An adrenaline-fueled journey across dystopian landscapes and cosmic highways.' },
      { title: 'Crimson Code', year: '2026', duration: '2h 10m', rating: '8.4', genre: 'Thriller', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', description: 'A security specialist uncovers a conspiracy that challenges everything she trusts.' }
    ]
  },
  {
    category: 'Top Rated',
    movies: [
      { title: 'Afterglow', year: '2024', duration: '2h 22m', rating: '9.2', genre: 'Drama', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', description: 'An emotional cinematic experience of love, loss, and the art of reinvention.' },
      { title: 'Velvet Revolver', year: '2025', duration: '2h 7m', rating: '9.0', genre: 'Action', image: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=900&q=80', description: 'A lone renegade returns to rescue the city from an unthinkable threat.' },
      { title: 'Spectral Winds', year: '2026', duration: '1h 53m', rating: '8.8', genre: 'Fantasy', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', description: 'A magical voyage into a hidden world where ancient powers awaken.' },
      { title: 'Pulse District', year: '2025', duration: '2h 1m', rating: '8.7', genre: 'Crime', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', description: 'Stylish, hard-hitting, and beautifully composed — a crime saga with heart.' },
      { title: 'Quantum Bound', year: '2026', duration: '1h 59m', rating: '8.6', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1542204165-6689e3063c9f?auto=format&fit=crop&w=900&q=80', description: 'A scientist navigates timelines to save a future she never imagined.' }
    ]
  },
  {
    category: 'Action Movies',
    movies: [
      { title: 'Rogue Echo', year: '2025', duration: '2h 9m', rating: '8.2', genre: 'Action', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80', description: 'A fearless operative must choose between justice and vengeance.' },
      { title: 'Velocity', year: '2024', duration: '1h 46m', rating: '8.0', genre: 'Action', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', description: 'A race against time through the city’s most dangerous streets.' },
      { title: 'Metal Storm', year: '2025', duration: '2h 11m', rating: '8.3', genre: 'Action', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80', description: 'Armored fighters clash in a high-tech war zone of steel and sparks.' },
      { title: 'Night Charge', year: '2026', duration: '2h 0m', rating: '8.4', genre: 'Action', image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80', description: 'A daring midnight assault on a fortress city filled with secrets.' }
    ]
  },
  {
    category: 'Comedy',
    movies: [
      { title: 'Weekend Remix', year: '2024', duration: '1h 38m', rating: '7.8', genre: 'Comedy', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80', description: 'A wildly entertaining trip through one unforgettable weekend.' },
      { title: 'Chasing Sunshine', year: '2025', duration: '1h 45m', rating: '7.9', genre: 'Comedy', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80', description: 'A charming misfit learns that chaos can be the best kind of adventure.' },
      { title: 'Office Mayhem', year: '2026', duration: '1h 50m', rating: '8.0', genre: 'Comedy', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', description: 'A workplace comedy where every email becomes a hilarious disaster.' }
    ]
  },
  {
    category: 'Horror',
    movies: [
      { title: 'Shadow Garden', year: '2025', duration: '1h 51m', rating: '8.5', genre: 'Horror', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', description: 'A haunting tale hidden beneath a forgotten estate’s ivy walls.' },
      { title: 'The Sixth Street', year: '2024', duration: '1h 43m', rating: '8.2', genre: 'Horror', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80', description: 'A nightmare escapes the alleys of a seemingly peaceful town.' },
      { title: 'Silent Fuse', year: '2025', duration: '1h 47m', rating: '8.3', genre: 'Horror', image: 'https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&w=900&q=80', description: 'A chilling countdown begins when the lights go out.' }
    ]
  },
  {
    category: 'Sci-Fi',
    movies: [
      { title: 'Orbit Protocol', year: '2026', duration: '2h 3m', rating: '8.7', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80', description: 'A mission to the edge of the galaxy uncovers an ancient intelligence.' },
      { title: 'Neural Drift', year: '2025', duration: '1h 55m', rating: '8.5', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1542204165-6689e3063c9f?auto=format&fit=crop&w=900&q=80', description: 'Virtual landscapes collide with reality in a stunning visual odyssey.' },
      { title: 'Deep Static', year: '2024', duration: '2h 8m', rating: '8.4', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', description: 'A crew battles cosmic interference as a rogue signal threatens everything.' }
    ]
  }
];

const watchlistKey = 'cinestream-watchlist';
const themeKey = 'cinestream-theme';
let watchlist = [];
try {
  const storedWatchlist = localStorage.getItem(watchlistKey);
  watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];
} catch (error) {
  console.warn('Failed to parse saved watchlist, resetting to empty:', error);
  watchlist = [];
}
watchlist = Array.isArray(watchlist) ? watchlist.map(String) : [];
const searchBar = document.getElementById('searchBar');
const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');
const movieRows = document.querySelectorAll('.movie-row');
const pageShell = document.getElementById('pageShell');
const loadingScreen = document.getElementById('loadingScreen');
const authScreen = document.getElementById('authScreen');
const authForm = document.getElementById('authForm');
const guestButton = document.getElementById('guestButton');
const heroPlayBtn = document.getElementById('heroPlayBtn');
const moreInfoBtn = document.getElementById('moreInfoBtn');
const themeToggle = document.getElementById('themeToggle');
const movieModal = document.getElementById('movieModal');
const modalClose = document.getElementById('modalClose');
const modalPoster = document.getElementById('modalPoster');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalRating = document.getElementById('modalRating');
const modalYear = document.getElementById('modalYear');
const modalDuration = document.getElementById('modalDuration');
const modalCategory = document.getElementById('modalCategory');
const playTrailerBtn = document.getElementById('playTrailerBtn');
const watchlistToggle = document.getElementById('watchlistToggle');
const watchlistGrid = document.getElementById('watchlistGrid');
const clearWatchlistBtn = document.getElementById('clearWatchlist');
let activeMovie = null;
let featuredMovie = null;

function applyTheme() {
  const currentTheme = localStorage.getItem(themeKey) || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'light') {
    document.body.style.background = 'radial-gradient(circle at top, rgba(229, 9, 20, 0.07), transparent 20%), linear-gradient(180deg, #f4f4f4 0%, #eaeaea 48%, #dcdcdc 100%)';
    themeToggle.innerHTML = '☀️';
  } else {
    document.body.style.background = 'radial-gradient(circle at top, rgba(229, 9, 20, 0.07), transparent 20%), linear-gradient(180deg, #050505 0%, #07080a 48%, #030305 100%)';
    themeToggle.innerHTML = '🌙';
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem(themeKey) || 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(themeKey, nextTheme);
  applyTheme();
}

function animateEntry() {
  setTimeout(() => {
    pageShell.classList.add('ready');
    loadingScreen.classList.add('hidden');
  }, 750);
}

function showAuthScreen() {
  authScreen.classList.remove('hidden');
}

function hideAuthScreen() {
  authScreen.classList.add('hidden');
  animateEntry();
}

function saveWatchlist() {
  localStorage.setItem(watchlistKey, JSON.stringify(watchlist));
}

function fetchWithTMDB(path, params = {}) {
  const url = new URL(`${API_PROXY}${path}`, window.location.origin);
  url.search = new URLSearchParams({ language: 'en-US', ...params }).toString();
  return fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then((response) => {
    if (!response.ok) throw new Error('TMDB request failed');
    return response.json();
  });
}

function getMovieGenre(movie, fallbackCategory) {
  if (movie.genre_ids?.length) {
    return genreMap[movie.genre_ids[0]] || fallbackCategory;
  }
  if (movie.genres?.length) {
    return movie.genres[0].name;
  }
  return fallbackCategory;
}

function formatMovie(movie, category) {
  return {
    id: movie.id,
    title: movie.title || movie.name || 'Untitled',
    image: movie.poster_path ? `${TMDB_POSTER}${movie.poster_path}` : movie.backdrop_path ? `${TMDB_BACKDROP}${movie.backdrop_path}` : 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80',
    description: movie.overview || 'No description available.',
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    year: movie.release_date ? movie.release_date.split('-')[0] : 'TBD',
    duration: movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '—',
    genre: getMovieGenre(movie, category)
  };
}

function debounce(fn, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

function getMovieId(movie) {
  return String(movie?.id ?? movie?.title ?? '');
}

function getMovieById(id) {
  const key = String(id);
  for (const category of movieCategories) {
    const movie = category.movies.find((item) => getMovieId(item) === key);
    if (movie) return movie;
  }
  return null;
}

function updateHero(movie) {
  const heroVideo = document.querySelector('.hero-video');
  const heroTitle = document.querySelector('.hero-content h1');
  const heroDescription = document.querySelector('.hero-content p');
  if (!movie) return;
  featuredMovie = movie;
  heroTitle.textContent = movie.title;
  heroDescription.textContent = movie.description;
  heroVideo.poster = movie.image;
}

async function fetchTrailerUrl(id) {
  try {
    const response = await fetchWithTMDB(`/movie/${id}/videos`);
    const videos = response.results || [];
    const trailer = videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube') || videos.find((video) => video.site === 'YouTube');
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.warn('Unable to load trailer:', error);
    return null;
  }
}

async function playTrailer() {
  if (!activeMovie) return;
  const trailerUrl = await fetchTrailerUrl(activeMovie.id);
  if (trailerUrl) {
    window.open(trailerUrl, '_blank');
  } else {
    alert('Trailer not available at the moment.');
  }
}

function renderWatchlistSection() {
  if (!watchlistGrid) return;
  const savedMovies = watchlist.map(getMovieById).filter(Boolean);
  watchlistGrid.innerHTML = '';

  if (savedMovies.length === 0) {
    watchlistGrid.innerHTML = `<div class="empty-watchlist"><p>Your watchlist is empty. Tap ★ on any movie to save it here.</p></div>`;
    return;
  }

  savedMovies.forEach((movie) => {
    const card = document.createElement('article');
    card.className = 'movie-card watchlist-card';
    card.dataset.category = movie.genre;
    card.dataset.id = movie.id;
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" />
      <span class="card-tag">${movie.genre}</span>
      <button class="watchlist-btn" aria-label="Remove from watchlist">★</button>
      <h3 class="card-title">${movie.title}</h3>
    `;

    card.addEventListener('click', () => openModal(movie, movie.genre));
    const watchlistBtn = card.querySelector('.watchlist-btn');
    watchlistBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleWatchlist(movie.id, watchlistBtn);
    });

    watchlistGrid.appendChild(card);
  });
}

function renderMovieRows(filter = '') {
  movieRows.forEach((row) => {
    const category = row.dataset.category;
    if (category === 'Search Results') return;
    const categoryData = movieCategories.find((item) => item.category === category);
    if (!categoryData) return;

    row.innerHTML = '';
    categoryData.movies.forEach((movie) => {
      const itemId = getMovieId(movie);
      const matchesFilter =
        movie.title.toLowerCase().includes(filter.toLowerCase()) ||
        movie.genre.toLowerCase().includes(filter.toLowerCase());
      const card = document.createElement('article');
      card.className = 'movie-card';
      card.dataset.category = category;
      card.dataset.id = itemId;
      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" />
        <span class="card-tag">${movie.genre}</span>
        <button class="watchlist-btn" aria-label="Toggle watchlist">${watchlist.includes(itemId) ? '★' : '☆'}</button>
        <h3 class="card-title">${movie.title}</h3>
      `;

      if (!matchesFilter && filter.trim()) {
        card.style.display = 'none';
      }

      const watchlistBtn = card.querySelector('.watchlist-btn');
      watchlistBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleWatchlist(itemId, watchlistBtn);
      });

      card.addEventListener('click', () => {
        openModal(movie, category);
      });

      row.appendChild(card);
    });
  });
}

function renderSearchResults(movies) {
  const searchResultsSection = document.getElementById('searchResultsSection');
  const searchResultsRow = document.querySelector('.movie-row[data-category="Search Results"]');
  if (!searchResultsSection || !searchResultsRow) return;

  searchResultsRow.innerHTML = '';
  if (movies.length === 0) {
    searchResultsSection.classList.add('hidden');
    return;
  }

  searchResultsSection.classList.remove('hidden');
  movies.forEach((movie) => {
    const itemId = getMovieId(movie);
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.dataset.category = 'Search Results';
    card.dataset.id = itemId;
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" />
      <span class="card-tag">${movie.genre}</span>
      <button class="watchlist-btn" aria-label="Toggle watchlist">${watchlist.includes(itemId) ? '★' : '☆'}</button>
      <h3 class="card-title">${movie.title}</h3>
    `;

    const watchlistBtn = card.querySelector('.watchlist-btn');
    watchlistBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleWatchlist(itemId, watchlistBtn);
    });

    card.addEventListener('click', () => openModal(movie, 'Search Results'));
    searchResultsRow.appendChild(card);
  });
}

async function fetchSearchResults(query) {
  const response = await fetchWithTMDB('/search/movie', {
    query,
    include_adult: false,
    page: 1
  });
  return (response.results || []).slice(0, 12).map((movie) => formatMovie(movie, 'Search Results'));
}

async function loadMovieDetails(id) {
  try {
    const movie = await fetchWithTMDB(`/movie/${id}`);
    return formatMovie(movie, movie.genres?.[0]?.name || 'Movie');
  } catch (error) {
    return getMovieById(id) || null;
  }
}

async function openModal(movie, category) {
  const detailMovie = movie.id ? await loadMovieDetails(movie.id) : movie;
  if (!detailMovie) return;

  activeMovie = detailMovie;
  modalPoster.style.backgroundImage = `url('${detailMovie.image}')`;
  modalCategory.textContent = category;
  modalTitle.textContent = detailMovie.title;
  modalDescription.textContent = detailMovie.description;
  modalRating.textContent = `Rating: ${detailMovie.rating}`;
  modalYear.textContent = `Year: ${detailMovie.year}`;
  modalDuration.textContent = detailMovie.duration;
  const activeMovieId = getMovieId(detailMovie);
  watchlistToggle.textContent = watchlist.includes(activeMovieId) ? 'Remove from Watchlist' : 'Add to Watchlist';
  movieModal.classList.add('open');
  movieModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  movieModal.classList.remove('open');
  movieModal.setAttribute('aria-hidden', 'true');
}

function toggleWatchlist(id, button) {
  const movieId = String(id);
  const index = watchlist.indexOf(movieId);
  if (index === -1) {
    watchlist.push(movieId);
    if (button) button.textContent = '★';
    if (watchlistToggle) watchlistToggle.textContent = 'Remove from Watchlist';
  } else {
    watchlist.splice(index, 1);
    if (button) button.textContent = '☆';
    if (watchlistToggle) watchlistToggle.textContent = 'Add to Watchlist';
  }
  saveWatchlist();
  renderWatchlistSection();
  renderMovieRows(searchInput.value.trim());
}

function bindScrollButtons() {
  const controls = document.querySelectorAll('.category-header');
  controls.forEach((header) => {
    const row = header.nextElementSibling;
    const left = header.querySelector('[data-direction="left"]');
    const right = header.querySelector('[data-direction="right"]');

    left?.addEventListener('click', () => {
      row.scrollBy({ left: -520, behavior: 'smooth' });
    });

    right?.addEventListener('click', () => {
      row.scrollBy({ left: 520, behavior: 'smooth' });
    });
  });
}

async function handleSearch() {
  const value = searchInput.value.trim();
  if (value.length >= 3) {
    const results = await fetchSearchResults(value);
    renderSearchResults(results);
  } else {
    const searchResultsSection = document.getElementById('searchResultsSection');
    if (searchResultsSection) searchResultsSection.classList.add('hidden');
    renderMovieRows(value);
  }
}

async function loadCategories() {
  const results = await Promise.all(
    categoriesConfig.map(async (config) => {
      try {
        const response = await fetchWithTMDB(config.path, config.params);
        const movies = (response.results || []).slice(0, 8).map((item) => formatMovie(item, config.category));
        return { category: config.category, movies };
      } catch (error) {
        console.error(error);
        return { category: config.category, movies: [] };
      }
    })
  );
  movieCategories = results;
  if (results[0]?.movies?.length) updateHero(results[0].movies[0]);
  renderMovieRows();
  renderWatchlistSection();
  bindScrollButtons();
}

function init() {
  renderMovieRows();
  renderWatchlistSection();
  bindScrollButtons();
  applyTheme();
  loadCategories();
  animateEntry();
}

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('hidden');
  searchInput.focus();
});

searchInput.addEventListener('input', debounce(handleSearch, 300));

themeToggle.addEventListener('click', toggleTheme);

modalClose.addEventListener('click', closeModal);
movieModal.addEventListener('click', (event) => {
  if (event.target === movieModal || event.target.classList.contains('modal-backdrop')) {
    closeModal();
  }
});

if (heroPlayBtn) {
  heroPlayBtn.addEventListener('click', () => {
    if (featuredMovie) openModal(featuredMovie, featuredMovie.genre);
  });
}

if (moreInfoBtn) {
  moreInfoBtn.addEventListener('click', () => {
    if (featuredMovie) openModal(featuredMovie, featuredMovie.genre);
  });
}

if (playTrailerBtn) {
  playTrailerBtn.addEventListener('click', playTrailer);
}

watchlistToggle.addEventListener('click', () => {
  if (!activeMovie) return;
  toggleWatchlist(activeMovie.id, document.querySelector(`.movie-card[data-id='${CSS.escape(String(activeMovie.id))}'] .watchlist-btn`));
});

if (clearWatchlistBtn) {
  clearWatchlistBtn.addEventListener('click', () => {
    watchlist = [];
    saveWatchlist();
    renderWatchlistSection();
    renderMovieRows(searchInput.value.trim());
  });
}

if (authForm) {
  authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem('cinestream-auth', 'true');
    hideAuthScreen();
  });
}

if (guestButton) {
  guestButton.addEventListener('click', () => {
    localStorage.setItem('cinestream-auth', 'true');
    hideAuthScreen();
  });
} else {
  console.warn('Guest button was not found in DOM.');
}

window.addEventListener('load', () => {
  if (!localStorage.getItem('cinestream-auth')) {
    showAuthScreen();
  } else {
    hideAuthScreen();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

init();
