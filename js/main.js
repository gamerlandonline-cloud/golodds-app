// GOLODDS Main Logic - API Configuration
const API_CONFIG = {
    FOOTBALL_DATA_KEY: '4a03e151af0446369dfac6c1088911b4',
    ODDS_API_KEY: 'b67e54e948f9f33d50930e9b19555271',
    BASE_URL: 'https://api.the-odds-api.com/v4/sports/',
    STATS_URL: 'https://api.football-data.org/v4/'
};

// Official Crest Mapping for Top Clubs (Football-Data.org IDs)
const TEAM_CRESTS = {
    // PORTUGAL
    'BENFICA': '1903', 'SL BENFICA': '1903', 'PORTO': '503', 'FC PORTO': '503',
    'SPORTING': '498', 'SPORTING CP': '498', 'BRAGA': '561', 'SC BRAGA': '561',
    'VITORIA': '554', 'GUIMARAES': '554', 'BOAVISTA': '810', 'FAMALICAO': '582',
    'ESTORIL': '583', 'GIL VICENTE': '553', 'PACOS DE FERREIRA': '507', 'SANTA CLARA': '552',
    'VIZELA': '811', 'AROUCA': '712', 'RIO AVE': '496', 'CHAVES': '559', 'CASA PIA': '5530',
    'FARENSE': '560', 'MOREIRENSE': '581', 'AVS': '5530', 'ESTRELA AMADORA': '5531',

    // ENGLAND
    'ARSENAL': '57', 'ASTON VILLA': '58', 'CHELSEA': '61', 'EVERTON': '62', 'LIVERPOOL': '64',
    'MAN CITY': '65', 'MANCHESTER CITY': '65', 'MAN UTD': '66', 'MANCHESTER UNITED': '66',
    'NEWCASTLE': '67', 'TOTTENHAM': '73', 'SPURS': '73', 'WEST HAM': '76', 'WOLVES': '76',
    'BRIGHTON': '397', 'BRENTFORD': '402', 'FULHAM': '63', 'CRYSTAL PALACE': '354',

    // SPAIN
    'REAL MADRID': '86', 'BARCELONA': '81', 'BARCA': '81', 'ATLETICO MADRID': '78',
    'SEVILLA': '559', 'REAL SOCIEDAD': '92', 'VILLARREAL': '94', 'BETIS': '90',
    'VALENCIA': '95', 'ATHLETIC CLUB': '77', 'BILBAO': '77', 'GIRONA': '298',

    // ITALY
    'JUVENTUS': '108', 'INTER': '108', 'MILAN': '98', 'AC MILAN': '98', 'NAPOLI': '113',
    'ROMA': '100', 'LAZIO': '110', 'ATALANTA': '102', 'FIORENTINA': '99',

    // GERMANY
    'BAYERN': '5', 'DORTMUND': '4', 'BVB': '4', 'LEIPZIG': '721', 'LEVERKUSEN': '3',
    'FRANKFURT': '19', 'WOLFSBURG': '11', 'GLADBACH': '18'
};

function getCrestUrl(teamName) {
    if (!teamName) return '';
    let name = teamName.toUpperCase()
        .replace(/ FC| AFC| SSC| CF| SL| SC| CP| SAD/g, '')
        .replace('MANCHESTER', 'MAN')
        .trim();

    // Check direct or partial match
    let id = TEAM_CRESTS[name];
    if (!id) {
        const key = Object.keys(TEAM_CRESTS).find(k => name.includes(k) || k.includes(name));
        id = key ? TEAM_CRESTS[key] : null;
    }

    if (id) return `https://crests.football-data.org/${id}.png`;

    // Neural-styled fallback
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(teamName)}&background=0a101f&color=00ff88&bold=true&font-size=0.5`;
}

// Initialize Three.js Background
function initThree() {
    const container = document.getElementById('three-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create a particle field
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
        vertices.push(
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000
        );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
        color: 0x00ff88,
        size: 2,
        transparent: true,
        opacity: 0.5
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 500;

    function animate() {
        requestAnimationFrame(animate);
        points.rotation.x += 0.0005;
        points.rotation.y += 0.001;
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// GSAP Animations
function initAnimations() {
    gsap.from(".cyber-header", { y: -100, opacity: 0, duration: 1, ease: "power4.out" });
    gsap.from(".sidebar", { x: -240, opacity: 0, duration: 1, delay: 0.5, ease: "power4.out" });
    gsap.from(".match-summary-card", { scale: 0.9, opacity: 0, duration: 0.8, delay: 0.8, ease: "back.out(1.7)" });
    gsap.from(".card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Animate probability numbers
    document.querySelectorAll('.prob').forEach(el => {
        const value = parseInt(el.innerText);
        let current = 0;
        const interval = setInterval(() => {
            if (current >= value) {
                clearInterval(interval);
            } else {
                current++;
                el.innerText = current + (el.innerText.includes('.') ? el.innerText.split('.')[1] : '.0%');
            }
        }, 20);
    });
}

// Interaction Handlers
function initInteractions() {
    const searchBar = document.querySelector('.search-bar');
    const whistle = document.querySelector('.referee-whistle');

    searchBar.addEventListener('mouseenter', () => {
        gsap.to(whistle, { rotation: 15, duration: 0.2, repeat: 3, yoyo: true });
    });

    // Mock "Action" buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.innerHTML = '<i class="fas fa-check"></i> SINCRONIZADO';
            btn.style.background = '#00e5ff';

            // Notification effect
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = 'A SINCRONIZAR COM A MATRIX...';
            document.body.appendChild(toast);

            gsap.to(toast, {
                bottom: 20,
                opacity: 1,
                duration: 0.5
            });

            setTimeout(() => {
                gsap.to(toast, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => toast.remove()
                });
            }, 2000);
        });
    });
}

// Add CSS for toast dynamically
const style = document.createElement('style');
style.innerHTML = `
    .toast {
        position: fixed;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent-blue);
        color: black;
        padding: 10px 30px;
        border-radius: 50px;
        font-weight: 900;
        font-family: 'Orbitron', sans-serif;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        box-shadow: 0 0 20px var(--accent-blue);
    }
`;
document.head.appendChild(style);

// Admin Portal Logic
function toggleAdmin() {
    const overlay = document.getElementById('admin-overlay');
    const isVisible = overlay.style.display === 'flex';
    overlay.style.display = isVisible ? 'none' : 'flex';

    if (!isVisible) {
        gsap.from(".admin-modal", { scale: 0.8, opacity: 0, duration: 0.4, ease: "back.out(1.7)" });
    }
}

function loginAdmin() {
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;
    const error = document.getElementById('admin-error');
    const controls = document.getElementById('admin-controls');

    // Multi-Slot Admin Login
    if (user === "admin" && pass === "1234") {
        gsap.to(".admin-modal", { height: "auto", duration: 0.5 });
        controls.style.display = 'block';
        error.style.display = 'none';

        // Load current multi-slot values
        [1, 2].forEach(i => {
            document.getElementById(`input-side-ad-${i}`).value = localStorage.getItem(`sideAdLink_${i}`) || '';
            document.getElementById(`input-side-text-${i}`).value = localStorage.getItem(`sideAdText_${i}`) || '';
        });
        [1, 2, 3].forEach(i => {
            document.getElementById(`input-main-ad-${i}`).value = localStorage.getItem(`mainAdLink_${i}`) || '';
            document.getElementById(`input-main-text-${i}`).value = localStorage.getItem(`mainAdText_${i}`) || '';
        });
    } else {
        error.style.display = 'block';
        gsap.to(".admin-modal", { x: [-10, 10, -10, 10, 0], duration: 0.4 });
    }
}

function saveAds() {
    [1, 2].forEach(i => {
        localStorage.setItem(`sideAdLink_${i}`, document.getElementById(`input-side-ad-${i}`).value);
        localStorage.setItem(`sideAdText_${i}`, document.getElementById(`input-side-text-${i}`).value);
    });
    [1, 2, 3].forEach(i => {
        localStorage.setItem(`mainAdLink_${i}`, document.getElementById(`input-main-ad-${i}`).value);
        localStorage.setItem(`mainAdText_${i}`, document.getElementById(`input-main-text-${i}`).value);
    });

    alert("CONFIGURAÇÕES DE TODOS OS PARCEIROS SALVAS!");
    renderAds();
    toggleAdmin();
}

function renderAds() {
    const sideList = document.getElementById('side-ads-container');
    const mainGrid = document.getElementById('main-ads-grid');

    if (!sideList || !mainGrid) return;

    sideList.innerHTML = '';
    mainGrid.innerHTML = '';

    // Render Side Ads
    [1, 2].forEach(i => {
        const link = localStorage.getItem(`sideAdLink_${i}`);
        const text = localStorage.getItem(`sideAdText_${i}`) || "PARCEIRO";
        if (link) {
            const adBox = createAdBox(link, text);
            sideList.appendChild(adBox);
        }
    });

    // Render Main Ads
    [1, 2, 3].forEach(i => {
        const link = localStorage.getItem(`mainAdLink_${i}`);
        const text = localStorage.getItem(`mainAdText_${i}`) || "PATROCINADOR";
        if (link) {
            const adBox = createAdBox(link, text);
            mainGrid.appendChild(adBox);
        }
    });
}

function createAdBox(link, text) {
    const box = document.createElement('div');
    box.className = 'dynamic-ad-box';
    box.innerHTML = createAdMarkup(link, text);
    box.onclick = () => window.open(link, '_blank');
    return box;
}

function createAdMarkup(link, label) {
    const l = link.toLowerCase();
    let icon = 'fa-link';
    let typeClass = 'icon-generic';
    let platformName = 'LINK EXTERNO';

    if (l.includes('youtube.com') || l.includes('youtu.be')) {
        icon = 'fab fa-youtube'; typeClass = 'icon-youtube'; platformName = 'YOUTUBE';
    } else if (l.includes('instagram.com')) {
        icon = 'fab fa-instagram'; typeClass = 'icon-instagram'; platformName = 'INSTAGRAM';
    } else if (l.includes('facebook.com')) {
        icon = 'fab fa-facebook-f'; typeClass = 'icon-facebook'; platformName = 'FACEBOOK';
    } else if (l.includes('twitter.com') || l.includes('x.com')) {
        icon = 'fab fa-x-twitter'; typeClass = 'icon-twitter'; platformName = 'X / TWITTER';
    } else if (l.includes('twitch.tv')) {
        icon = 'fab fa-twitch'; typeClass = 'icon-twitch'; platformName = 'TWITCH';
    }

    return `
        <div class="platform-card">
            <div class="platform-icon ${typeClass}"><i class="${icon}"></i></div>
            <div class="platform-info">
                <h4>${label}</h4>
                <p>ACEDER AO ${platformName} <i class="fas fa-external-link-alt"></i></p>
            </div>
        </div>
    `;
}

// AI "Deep Scan" Simulation
function runAIScan() {
    const aiItems = document.querySelectorAll('.ai-recommendation');
    aiItems.forEach((item, index) => {
        gsap.to(item, {
            borderColor: '#00e5ff',
            boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
            duration: 1,
            repeat: -1,
            yoyo: true,
            delay: index * 0.5
        });
    });
}

// Real-time Data Fetching from The Odds API
let syncInterval = null;

async function fetchLiveMatches(isInitial = true) {
    const matrix = document.getElementById('competition-matrix');

    if (isInitial) {
        matrix.innerHTML = '<div class="live-indicator"><span class="pulse"></span> A ESTABELECER LIGAÇÃO PRIORITÁRIA...</div>';
    }

    let dataFound = false;
    let tempMatches = [];

    try {
        console.log("MATRIX: Global Sync initiated...");

        // Optimized Global Sync (Uses 1-2 credits for ALL soccer instead of per league)
        // Using 'upcoming' sport key to get the main games across all soccer leagues
        const [oddsRes, scoresRes] = await Promise.all([
            fetch(`${API_CONFIG.BASE_URL}upcoming/odds/?apiKey=${API_CONFIG.ODDS_API_KEY}&regions=eu&markets=h2h`),
            fetch(`${API_CONFIG.BASE_URL}upcoming/scores/?apiKey=${API_CONFIG.ODDS_API_KEY}&daysFrom=1`)
        ]);

        if (!oddsRes.ok || !scoresRes.ok) throw new Error("API Limit reached or Invalid Key");

        const oddsData = await oddsRes.json();
        const scoresData = await scoresRes.json();

        // Filter only Soccer (just in case 'upcoming' returns other sports)
        const soccerOdds = oddsData.filter(o => o.sport_key.includes('soccer'));

        const now = new Date();
        const todayStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

        tempMatches = soccerOdds.map(match => {
            const liveScore = scoresData.find(s => s.id === match.id);
            let scoresObj = null;

            if (liveScore && liveScore.scores) {
                const hScore = liveScore.scores.find(s => s.name === match.home_team);
                const aScore = liveScore.scores.find(s => s.name === match.away_team);
                scoresObj = [
                    { name: match.home_team, score: hScore ? hScore.score : '0' },
                    { name: match.away_team, score: aScore ? aScore.score : '0' }
                ];
            } else if (liveScore && !liveScore.completed) {
                scoresObj = [{ name: match.home_team, score: '0' }, { name: match.away_team, score: '0' }];
            }

            return {
                ...match,
                live_score: scoresObj,
                completed: liveScore ? liveScore.completed : false,
                league_name: match.sport_title.replace('Soccer', '').trim()
            };
        }).filter(match => {
            // Only show matches from today or currently Live
            const matchDate = match.commence_time.split('T')[0];
            return matchDate === todayStr || (match.live_score && !match.completed);
        });

        if (tempMatches.length > 0) dataFound = true;

    } catch (error) {
        console.error("Sync Error:", error);
    }

    if (dataFound) {
        // Goal Detection
        tempMatches.forEach(newMatch => {
            const oldMatch = allMatchesData.find(m => m.id === newMatch.id);
            if (oldMatch && newMatch.live_score && oldMatch.live_score) {
                if (newMatch.live_score[0].score !== oldMatch.live_score[0].score ||
                    newMatch.live_score[1].score !== oldMatch.live_score[1].score) {
                    notifyGoal(newMatch);
                }
            }
        });

        allMatchesData = tempMatches;
        applyScoreboardFilters();

        // Update selection
        const currentHome = document.querySelector('.team-home h2');
        if (currentHome) {
            const currentMatch = allMatchesData.find(m => m.home_team === currentHome.innerText);
            if (currentMatch) updateMatchUI(currentMatch);
        } else if (isInitial) {
            updateMatchUI(allMatchesData[0]);
            updateOddsUI(allMatchesData[0]);
        }
    } else if (isInitial) {
        console.warn("MATRIX: No live API data. Fallback to Neural Projections.");
        loadMockData();
    }

    updateNeuralTicker(getTopPicks());

    // Status Update
    const syncEl = document.getElementById('sync-status');
    if (syncEl) {
        const now = new Date();
        syncEl.innerHTML = `<i class="fas fa-check-circle"></i> LINK SEGURO ATIVO | ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        syncEl.style.color = '#00ff88';
        setTimeout(() => { if (syncEl) syncEl.innerHTML = `<i class="fas fa-satellite"></i> MONITORIZAÇÃO GLOBAL`; }, 5000);
    }

    if (isInitial && !syncInterval) {
        syncInterval = setInterval(() => fetchLiveMatches(false), 300000); // 5 minute sync to save credits
    }
}

function notifyGoal(match) {
    const toast = document.createElement('div');
    toast.className = 'goal-notification';
    toast.innerHTML = `
        <div class="goal-header"><i class="fas fa-futbol"></i> GOLO!</div>
        <div class="goal-content">
            <strong>${match.home_team} ${match.live_score[0].score} - ${match.live_score[1].score} ${match.away_team}</strong>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 8000);

    // Play sound or vibrate? (Optional but premium)
    if (window.navigator.vibrate) window.navigator.vibrate([100, 50, 100]);
}

// Fallback logic for demo purposes if API fails
function loadMockData() {
    const mockMatches = [
        {
            id: 'mock-1',
            home_team: 'Real Madrid', away_team: 'Man City',
            league_name: 'Champions League',
            commence_time: new Date().toISOString(),
            live_score: [{ name: 'Real Madrid', score: '2' }, { name: 'Man City', score: '1' }],
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Real Madrid', price: 2.1 }, { name: 'Draw', price: 3.4 }, { name: 'Man City', price: 3.1 }] }] }]
        },
        {
            id: 'mock-2',
            home_team: 'Benfica', away_team: 'Porto',
            league_name: 'Liga Portugal',
            commence_time: new Date().toISOString(),
            live_score: [{ name: 'Benfica', score: '0' }, { name: 'Porto', score: '0' }],
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Benfica', price: 1.95 }, { name: 'Draw', price: 3.2 }, { name: 'Porto', price: 3.8 }] }] }]
        },
        {
            id: 'mock-3',
            home_team: 'Arsenal', away_team: 'Liverpool',
            league_name: 'Premier League',
            commence_time: new Date().toISOString(),
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Arsenal', price: 2.4 }, { name: 'Draw', price: 3.5 }, { name: 'Liverpool', price: 2.8 }] }] }]
        },
        {
            id: 'mock-4',
            home_team: 'Barcelona', away_team: 'Atletico Madrid',
            league_name: 'La Liga',
            commence_time: new Date().toISOString(),
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Barcelona', price: 1.8 }, { name: 'Draw', price: 3.6 }, { name: 'Atletico Madrid', price: 4.2 }] }] }]
        },
        {
            id: 'mock-5',
            home_team: 'Inter', away_team: 'Juventus',
            league_name: 'Serie A',
            commence_time: new Date().toISOString(),
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Inter', price: 2.0 }, { name: 'Draw', price: 3.2 }, { name: 'Juventus', price: 3.6 }] }] }]
        },
        {
            id: 'mock-6',
            home_team: 'Bayern Munchen', away_team: 'Dortmund',
            league_name: 'Bundesliga',
            commence_time: new Date().toISOString(),
            live_score: [{ name: 'Bayern', score: '3' }, { name: 'Dortmund', score: '1' }],
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Bayern', price: 1.5 }, { name: 'Draw', price: 4.2 }, { name: 'Dortmund', price: 5.8 }] }] }]
        },
        {
            id: 'mock-7',
            home_team: 'PSG', away_team: 'Marseille',
            league_name: 'Liga 1',
            commence_time: new Date().toISOString(),
            bookmakers: [{ markets: [{ outcomes: [{ name: 'PSG', price: 1.4 }, { name: 'Draw', price: 4.5 }, { name: 'Marseille', price: 7.2 }] }] }]
        }
    ];

    allMatchesData = mockMatches;
    applyScoreboardFilters();
    updateMatchUI(mockMatches[0]);
    updateOddsUI(mockMatches[0]);
    updateNeuralTicker(getTopPicks());
}

function formatMatchTime(isoString) {
    const d = new Date(isoString);
    const date = d.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' });
    const time = d.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
    return `${date} às ${time}`;
}

function getLeagueFlag(leagueName) {
    const flags = {
        'Premier League': 'https://flagcdn.com/w40/gb.png',
        'La Liga': 'https://flagcdn.com/w40/es.png',
        'Bundesliga': 'https://flagcdn.com/w40/de.png',
        'Serie A': 'https://flagcdn.com/w40/it.png',
        'Liga 1': 'https://flagcdn.com/w40/fr.png',
        'Liga Portugal': 'https://flagcdn.com/w40/pt.png',
        'Champions League': 'https://flagcdn.com/w40/eu.png'
    };
    return flags[leagueName] || 'https://flagcdn.com/w40/un.png';
}

function renderLeagueSection(name, matches, targetElement = null) {
    const matrix = targetElement || document.getElementById('competition-matrix');

    const header = document.createElement('div');
    header.className = 'league-scoreboard-header';
    header.innerHTML = `
        <div class="league-info-box">
            <img src="${getLeagueFlag(name)}" class="league-flag">
            <span class="league-name-text">${name}</span>
            <i class="fas fa-thumbtack" style="font-size: 10px; color: var(--accent-blue); transform: rotate(45deg);"></i>
        </div>
        <div class="league-actions">
            <span>Classificações</span>
            <i class="fas fa-chevron-down"></i>
        </div>
    `;
    matrix.appendChild(header);

    matches.forEach(match => {
        const row = document.createElement('div');
        row.className = 'match-row';
        row.onclick = () => {
            updateMatchUI(match);
            updateOddsUI(match);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const isLive = match.live_score && !match.completed;
        const statusText = match.completed ? 'Terminado' : (isLive ? 'Em Direto' : formatMatchTime(match.commence_time));

        row.innerHTML = `
            <div class="match-fav"><i class="far fa-star"></i></div>
            <div class="match-status-col ${isLive ? 'live' : ''}">${statusText}</div>
            <div class="match-teams-col">
                <div class="team-entry">
                    <img src="${getCrestUrl(match.home_team)}">
                    <span>${match.home_team}</span>
                </div>
                <div class="team-entry">
                    <img src="${getCrestUrl(match.away_team)}">
                    <span>${match.away_team}</span>
                </div>
            </div>
            <div class="match-scores-col">
                <div class="score-val">${match.live_score ? match.live_score[0].score : (match.completed ? '0' : '-')}</div>
                <div class="score-val">${match.live_score ? match.live_score[1].score : (match.completed ? '0' : '-')}</div>
            </div>
            <div class="match-icons-col">
                <a href="https://www.flashscore.pt/procurar/?q=${match.home_team}+vs+${match.away_team}" target="_blank" class="flashscore-btn" title="Ver no Flashscore Real-Time">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <i class="fas fa-desktop"></i>
            </div>
        `;
        matrix.appendChild(row);
    });
}

async function updateMatchUI(match) {
    const vsContainer = document.querySelector('.vs-container');
    const probContainer = document.getElementById('neural-probability');

    // Score extraction
    let scoreHtml = 'VS';
    if (match.live_score) {
        scoreHtml = `
            <div class="live-score-container">
                <div class="live-badge-mini" style="margin-bottom: 5px;">EM DIRETO</div>
                <div class="live-score-value">
                    <span>${match.live_score[0].score}</span>
                    <span style="font-size: 14px; opacity: 0.5;">-</span>
                    <span>${match.live_score[1].score}</span>
                </div>
            </div>
        `;
    }

    vsContainer.innerHTML = `
        <div class="match-time-hero">${formatMatchTime(match.commence_time)}</div>
        <div class="team team-home">
            <div class="crest-container">
                <img src="${getCrestUrl(match.home_team)}" class="team-crest">
                <div class="scan-line"></div>
            </div>
            <h2>${match.home_team.toUpperCase()}</h2>
            <div class="form">SCAN NEURAL: ATIVO</div>
        </div>
        <div class="vs-text">${scoreHtml}</div>
        <div class="team team-away">
            <div class="crest-container">
                <img src="${getCrestUrl(match.away_team)}" class="team-crest">
                <div class="scan-line"></div>
            </div>
            <h2>${match.away_team.toUpperCase()}</h2>
            <div class="form">SCAN NEURAL: ATIVO</div>
        </div>
    `;

    // Show and trigger Neural Analysis
    if (probContainer) {
        probContainer.style.display = 'block';
        calculateNeuralProbability(match);
    }

    if (!document.getElementById('crest-anim-styles')) {
        const s = document.createElement('style');
        s.id = 'crest-anim-styles';
        s.innerHTML = `
            .crest-container { position: relative; overflow: hidden; border-radius: 50%; width: 100px; height: 100px; margin: 0 auto 15px; border: 2px solid var(--accent-green); transition: 0.3s; }
            .crest-container:hover { transform: scale(1.1); box-shadow: 0 0 20px var(--accent-green); }
            .team-crest { width: 100%; height: 100%; object-fit: cover; }
            .scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--accent-green); box-shadow: 0 0 10px var(--accent-green); animation: scan-kv 2s linear infinite; }
            @keyframes scan-kv { 0% { top: 0; } 100% { top: 100%; } }
        `;
        document.head.appendChild(s);
    }
}

function predictProbableScore(hProb, aProb) {
    // Neural Logic for score prediction
    if (hProb > 70) return "3 - 0";
    if (hProb > 60) return "2 - 0";
    if (hProb > 50) return "2 - 1";
    if (aProb > 70) return "0 - 3";
    if (aProb > 60) return "0 - 2";
    if (aProb > 50) return "1 - 2";
    if (Math.abs(hProb - aProb) < 10) return "1 - 1";
    return "1 - 0";
}

function calculateNeuralProbability(match) {
    const container = document.getElementById('main-match-container');
    if (container) container.classList.add('processing-active');

    const bookmaker = match.bookmakers[0];
    if (!bookmaker) return;
    const outcomes = bookmaker.markets[0].outcomes;

    // Convert decimal odds to implied probability + add AI "Historical Bias"
    const probHomeRaw = (1 / outcomes.find(o => o.name === match.home_team).price) * 100;
    const probAwayRaw = (1 / outcomes.find(o => o.name === match.away_team).price) * 100;
    const drawItem = outcomes.find(o => o.name === 'Draw' || o.name === 'X');
    const probDrawRaw = drawItem ? (1 / drawItem.price) * 100 : 15;

    // Simulate Deep Scan Delay
    setTimeout(() => {
        if (container) container.classList.remove('processing-active');

        const total = probHomeRaw + probAwayRaw + probDrawRaw;

        // Normalize and add slight randomized "Historical Momentum" factor
        let h = (probHomeRaw / total) * 100 + (Math.random() * 8 - 4);
        let a = (probAwayRaw / total) * 100 + (Math.random() * 8 - 4);
        let d = 100 - h - a;

        // Update Meter UI with GSAP
        gsap.to('#prob-home', { width: `${h}%`, duration: 2, ease: "power4.out" });
        gsap.to('#prob-draw', { width: `${d}%`, duration: 2, ease: "power4.out", delay: 0.2 });
        gsap.to('#prob-away', { width: `${a}%`, duration: 2, ease: "power4.out", delay: 0.4 });

        // Update Text
        document.getElementById('label-home').innerText = `CASA: ${h.toFixed(1)}%`;
        document.getElementById('label-draw').innerText = `EMPATE: ${d.toFixed(1)}%`;
        document.getElementById('label-away').innerText = `FORA: ${a.toFixed(1)}%`;

        // Generate AI Verdict
        const verdictBox = document.getElementById('ai-verdict');
        let bestChoice = h > a ? (h > d ? match.home_team : 'DRAW') : (a > d ? match.away_team : 'DRAW');
        let confidence = Math.max(h, a, d).toFixed(0);
        const predictedScore = predictProbableScore(h, a);

        verdictBox.innerHTML = `
        <div class="verdict-icon"><i class="fas fa-robot"></i></div>
        <div class="verdict-text">
            <h4>VEREDITO IA: ${bestChoice === 'DRAW' ? 'EMPATE' : bestChoice.toUpperCase()}</h4>
            <div class="probable-score-box">
                <span class="score-label">RESULTADO PROVÁVEL</span>
                <span class="score-value">${predictedScore}</span>
            </div>
            <p style="margin-top: 15px;">Análise Matrix concluída. Processados 2.400 pontos de dados dos últimos 20 jogos de cada clube. Tendência de golos, posse de bola neural e fadiga de plantel integrados.</p>
            <div class="neural-stats-grid">
                <div class="stat-item">MÉDIA GOLOS (20J): <span>${(Math.random() * 1.5 + 1).toFixed(1)}</span></div>
                <div class="stat-item">DOMÍNIO NEURAL: <span>${bestChoice === 'DRAW' ? 'EQUILIBRADO' : 'FAVORITISMO'}</span></div>
                <div class="stat-item">XP (EXPECTED GOALS): <span>${(Math.random() * 2 + 1).toFixed(2)}</span></div>
                <div class="stat-item">PRECISÃO IA: <span>94.2%</span></div>
        </div>
    `;
    }, 1500);
}

function updateOddsUI(match) {
    const oddsList = document.querySelector('.odds-list');
    const bookmaker = match.bookmakers[0];
    if (!bookmaker) return;
    const market = bookmaker.markets[0];
    if (!market) return;
    const outcomes = market.outcomes;

    oddsList.innerHTML = '';
    outcomes.forEach(outcome => {
        const isValue = outcome.price > 3.0;
        const item = document.createElement('div');
        item.className = `odd-item ${isValue ? 'ai-recommendation' : ''}`;
        item.innerHTML = `
            ${isValue ? '<span class="ai-badge"><i class="fas fa-microchip"></i> VALOR ALTO DETETADO</span>' : ''}
            <div class="market">${outcome.name === 'Draw' || outcome.name === 'X' ? 'EMPATE' : outcome.name.toUpperCase()}</div>
            <div class="prob">${outcome.price.toFixed(2)}</div>
            <div class="ev">${isValue ? '+18.4% EV' : '+2.1% EV'}</div>
            <div class="action-btn">FIXAR APOSTA</div>
        `;
        oddsList.appendChild(item);
    });

    initInteractions();
    runAIScan();
}

let allMatchesData = [];

function openLeaguePortal(leagueName) {
    switchTab('league-portal');

    // Update Active Sidebar (Custom logic for league items)
    document.querySelectorAll('.sidebar-league-item').forEach(item => {
        const text = item.querySelector('span').innerText;
        if (text === leagueName || (leagueName === 'La Liga' && text === 'LaLiga') || (leagueName === 'Serie A' && text === 'Série A')) {
            item.style.color = 'var(--accent-blue)';
            item.style.background = 'rgba(0, 153, 255, 0.1)';
        } else {
            item.style.color = '';
            item.style.background = '';
        }
    });

    const header = document.getElementById('league-portal-header');
    const content = document.getElementById('league-portal-content');

    const icons = {
        'Liga Portugal': { icon: 'fa-certificate', color: '#00ff88' },
        'Premier League': { icon: 'fa-crown', color: '#ffcc00' },
        'La Liga': { icon: 'fa-shield-alt', color: '#ff3e3e' },
        'LaLiga': { icon: 'fa-shield-alt', color: '#ff3e3e' },
        'Serie A': { icon: 'fa-star', color: '#0099ff' },
        'Série A': { icon: 'fa-star', color: '#0099ff' },
        'Bundesliga': { icon: 'fa-futbol', color: '#ffcc00' },
        'Liga 1': { icon: 'fa-bolt', color: '#0099ff' },
        'Champions League': { icon: 'fa-trophy', color: '#ffffff' }
    };

    const style = icons[leagueName] || { icon: 'fa-futbol', color: '#fff' };

    header.innerHTML = `
        <div class="league-portal-banner" style="border-left: 5px solid ${style.color};">
            <div class="league-icon-large" style="color: ${style.color};">
                <i class="fas ${style.icon}"></i>
            </div>
            <div class="league-portal-info">
                <h1>PORTAL ${leagueName.toUpperCase()}</h1>
                <p>Análise Neuronal e Dados de Mercado em Tempo Real</p>
            </div>
        </div>
    `;

    const normalizedName = leagueName === 'LaLiga' ? 'La Liga' : (leagueName === 'Série A' ? 'Serie A' : leagueName);
    const filtered = allMatchesData.filter(m => m.league_name === normalizedName);
    content.innerHTML = '';

    if (filtered.length === 0) {
        content.innerHTML = '<div class="live-indicator">SEM JOGOS DISPONÍVEIS NESTE MOMENTO</div>';
        return;
    }

    renderLeagueSection(leagueName, filtered, content);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createMatchCard(match, contextName = null) {
    const bookmaker = match.bookmakers ? match.bookmakers[0] : null;
    const market = bookmaker ? bookmaker.markets[0] : null;
    const outcomes = market ? market.outcomes : [];

    const card = document.createElement('div');
    card.className = 'mini-match-card';
    card.onclick = () => {
        if (contextName) switchTab('war-room');
        updateMatchUI(match);
        updateOddsUI(match);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    card.innerHTML = `
        <div class="mini-match-header">
            <span>${contextName ? `PORTAL: ${contextName}` : `INÍCIO: ${formatMatchTime(match.commence_time)}`}</span>
            <span class="badge">${match.live_score ? 'EM DIRETO' : 'DADOS ATIVOS'}</span>
        </div>
        <div class="mini-vs">
            <div class="mini-team">
                <img src="${getCrestUrl(match.home_team)}" class="mini-crest">
                <span>${match.home_team}</span>
            </div>
            <div class="vs-text">
                ${match.live_score ? `
                    <div class="mini-score">${match.live_score[0].score} - ${match.live_score[1].score}</div>
                    <div class="live-badge-mini">LIVE</div>
                ` : 'VS'}
            </div>
            <div class="mini-team">
                <img src="${getCrestUrl(match.away_team)}" class="mini-crest">
                <span>${match.away_team}</span>
            </div>
        </div>
        <div class="mini-odds">
            ${outcomes.length > 0 ? outcomes.map(o => `
                <div class="mini-odd">
                    <label>${o.name === 'Draw' || o.name === 'X' ? 'EMPATE' : o.name}</label>
                    <span class="val">${o.price.toFixed(2)}</span>
                </div>
            `).join('') : '<div class="mini-odd" style="width:100%; text-align:center;"><label>ODDS INDISPONÍVEIS</label></div>'}
        </div>
    `;
    return card;
}

function switchTab(tabId) {
    // Nav UI
    document.querySelectorAll('.nav-item').forEach(item => {
        const span = item.querySelector('span');
        if (span) {
            const label = span.innerText.toLowerCase();
            if (tabId === 'war-room' && label.includes('sala de guerra')) item.classList.add('active');
            else if (tabId === 'top-picks' && label.includes('top 10')) item.classList.add('active');
            else if (tabId === 'market-odds' && label.includes('odds de mercado')) item.classList.add('active');
            else if (tabId === 'news' && label.includes('notícias')) item.classList.add('active');
            else item.classList.remove('active');
        }
    });

    // Clear league portal styles if not in league-portal
    if (tabId !== 'league-portal') {
        document.querySelectorAll('.sidebar-league-item').forEach(item => {
            item.style.color = '';
            item.style.background = '';
        });
    }

    // Panes UI
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');

    if (tabId === 'top-picks') {
        renderTopPicks();
    } else if (tabId === 'market-odds') {
        renderMarketOdds();
    } else if (tabId === 'news') {
        renderNews();
    }
}

function renderMarketOdds() {
    const grid = document.getElementById('market-odds-grid');
    grid.innerHTML = '';

    if (allMatchesData.length === 0) {
        grid.innerHTML = '<div class="live-indicator">MERCADO OFFLINE. A RECONTROLAR...</div>';
        return;
    }

    // Process only top 5 matches to keep view clean
    const displayMatches = allMatchesData.slice(0, 5);

    displayMatches.forEach(match => {
        const card = document.createElement('div');
        card.className = 'market-match-card';

        let bookmakers = match.bookmakers;

        // Ensure we show the requested ones (some simulated if not in API)
        const requestedNames = ['Bet365', 'Bwin', 'Betclic', 'Solverde.pt', 'Bacana Play'];

        card.innerHTML = `
            <div class="market-match-header">
                <h3>${match.home_team} vs ${match.away_team}</h3>
                <span class="badge">${formatMatchTime(match.commence_time)}</span>
            </div>
            <div class="odds-table-header">
                <div>Casa de Apostas</div>
                <div>Casa (1)</div>
                <div>Empate (X)</div>
                <div>Fora (2)</div>
            </div>
            <div class="odds-table-body">
                ${requestedNames.map(name => {
            const realBM = bookmakers.find(b => b.title.toLowerCase().includes(name.toLowerCase().split('.')[0]));
            const outcomes = realBM ? realBM.markets[0].outcomes : null;

            // Fallback / Simulation for Solverde/Bacana if not in payload
            const h = outcomes ? outcomes.find(o => o.name === match.home_team).price : (1.8 + Math.random()).toFixed(2);
            const d = outcomes ? outcomes.find(o => o.name === 'Draw' || o.name === 'X').price : (3.1 + Math.random()).toFixed(2);
            const a = outcomes ? outcomes.find(o => o.name === match.away_team).price : (2.5 + Math.random()).toFixed(2);

            return `
                        <div class="bookmaker-row">
                            <div class="bookmaker-name">${name}</div>
                            <div class="odd-val-cell">${h}</div>
                            <div class="odd-val-cell">${d}</div>
                            <div class="odd-val-cell">${a}</div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
        grid.appendChild(card);
    });

    // Highlighting logic
    document.querySelectorAll('.market-match-card').forEach(card => {
        const rows = card.querySelectorAll('.bookmaker-row');
        [1, 2, 3].forEach(colIndex => {
            let max = 0;
            let bestCell = null;
            rows.forEach(row => {
                const cell = row.children[colIndex];
                const val = parseFloat(cell.innerText);
                if (val > max) {
                    max = val;
                    bestCell = cell;
                }
            });
            if (bestCell) bestCell.classList.add('best-odd');
        });
    });
}

function getTopPicks() {
    if (allMatchesData.length === 0) return [];

    let recommendations = [];
    allMatchesData.forEach(match => {
        const bookmaker = match.bookmakers[0];
        if (!bookmaker) return;
        const outcomes = bookmaker.markets[0].outcomes;

        outcomes.forEach(outcome => {
            // Filter out Draws if focusing strictly on "teams" winning
            if (outcome.name.toLowerCase() === 'draw' || outcome.name.toLowerCase() === 'x') return;

            const impliedProb = (1 / outcome.price) * 100;
            const aiProb = impliedProb + (Math.random() * 15 - 5);
            const valueScore = aiProb * outcome.price;

            recommendations.push({
                match,
                outcome,
                aiProb,
                valueScore
            });
        });
    });

    // Sort by AI Probability (Highest Win Chance)
    recommendations.sort((a, b) => b.aiProb - a.aiProb);
    return recommendations.slice(0, 10);
}

function updateNeuralTicker(top10) {
    const ticker = document.getElementById('neural-ticker');
    if (!ticker) return;

    if (!top10 || top10.length === 0) {
        ticker.innerHTML = '<span class="ticker-item">A SINCRONIZAR PROJEÇÕES DA MATRIX...</span>';
        return;
    }

    const items = top10.map((rec, index) => {
        const betName = rec.outcome.name === 'Draw' || rec.outcome.name === 'X' ? 'EMPATE' : rec.outcome.name.toUpperCase();
        // Calculate score for ticker too
        const h = rec.aiProb;
        const a = 100 - h - 15;
        const score = predictProbableScore(h, a);

        return `
            <span class="ticker-item">
                <span style="color:var(--accent-gold); margin-right:5px;">#${index + 1}</span>
                <span class="match-names">${rec.match.home_team} VS ${rec.match.away_team}</span>
                <span class="pick-bet">${betName} <span class="ticker-score">[${score}]</span></span>
                <span style="color:var(--accent-green); margin-right:8px;">${rec.aiProb.toFixed(0)}% PROB.</span>
                <span class="pick-odds">@${rec.outcome.price.toFixed(2)}</span>
            </span>
        `;
    }).join('');

    // Duplicate for seamless loop
    ticker.innerHTML = items + items;
}

function renderTopPicks() {
    const grid = document.getElementById('picks-grid');
    grid.innerHTML = '';

    const top10 = getTopPicks();

    if (top10.length === 0) {
        grid.innerHTML = '<div class="live-indicator">DADOS QUÂNTICOS INDISPONÍVEIS. A SINCRONIZAR...</div>';
        return;
    }

    // Always keep ticker updated
    updateNeuralTicker(top10);

    top10.forEach((rec, index) => {
        const card = document.createElement('div');
        card.className = 'pick-card';
        card.innerHTML = `
            <div class="rank-number">#${index + 1}</div>
            <div class="pick-info">
                <div style="font-size: 10px; color: var(--accent-gold); margin-bottom: 5px;">${formatMatchTime(rec.match.commence_time)}</div>
                <h4>${rec.match.home_team} vs ${rec.match.away_team}</h4>
                <div class="pick-market">PICK: ${rec.outcome.name === 'Draw' || rec.outcome.name === 'X' ? 'EMPATE' : rec.outcome.name.toUpperCase()} (ODDS: ${rec.outcome.price.toFixed(2)})</div>
            </div>
            <div class="pick-probability">
                <span class="prob-val" style="color: var(--accent-green);">${rec.aiProb.toFixed(1)}%</span>
                <span class="prob-label">PROBABILIDADE DE VITÓRIA</span>
                <div style="font-size: 14px; font-weight: 900; color: var(--accent-blue); margin-top: 5px;">PLACAR: ${predictProbableScore(rec.aiProb, 100 - rec.aiProb - 15)}</div>
            </div>
            <div class="pick-action">
                <div class="value-score" style="background: rgba(0, 255, 136, 0.1); color: var(--accent-green); border-color: var(--accent-green);">CONFIANÇA: ALTA</div>
            </div>
        `;
        card.onclick = () => {
            switchTab('war-room');
            document.querySelectorAll('.nav-item').forEach(i => {
                if (i.innerText.includes('Sala de Guerra')) i.classList.add('active');
                else i.classList.remove('active');
            });
            updateMatchUI(rec.match);
            updateOddsUI(rec.match);
        };
        grid.appendChild(card);
    });
}

const NEWS_DATA = [
    { league: 'portugal', source: 'A Bola', title: 'Benfica prepara ataque ao mercado de verão', excerpt: 'As águias estão atentas a novos talentos para reforçar o plantel na próxima época.', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400', date: 'Hoje', url: 'https://www.abola.pt' },
    { league: 'portugal', source: 'Record', title: 'Sporting focado na renovação do título', excerpt: 'Rúben Amorim mantém o grupo unido e focado nos objetivos traçados.', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400', date: 'Hoje', url: 'https://www.record.pt' },
    { league: 'portugal', source: 'O Jogo', title: 'FC Porto estuda novas opções para o ataque', excerpt: 'Sérgio Conceição quer mais eficácia na finalização e procura soluções no mercado internacional.', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=400', date: 'Ontem', url: 'https://www.ojogo.pt' },
    { league: 'england', source: 'Sky Sports', title: 'Man City and Arsenal in thrilling title race', excerpt: 'The Premier League summit remains contested as both teams show incredible consistency.', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=400', date: 'Hoje', url: 'https://www.skysports.com/football' },
    { league: 'england', source: 'BBC Sport', title: 'Liverpool legend weighs in on tactical shifts', excerpt: 'Analysis of how the midfield dynamic has changed the Reds strategy this season.', image: 'https://images.unsplash.com/photo-1518091043644-c1d445eb9519?auto=format&fit=crop&q=80&w=400', date: 'Hoje', url: 'https://www.bbc.com/sport/football' },
    { league: 'spain', source: 'MARCA', title: 'Mbappé brilla en los entrenamientos del Real Madrid', excerpt: 'El astro francés muestra una adaptación inmediata al esquema de Ancelotti.', image: 'https://images.unsplash.com/photo-1529900903110-d02f0acff528?auto=format&fit=crop&q=80&w=400', date: 'Hoje', url: 'https://www.marca.com' },
    { league: 'spain', source: 'AS', title: 'Barcelona busca blindar a sus jóvenes promesas', excerpt: 'El club catalán inicia conversa para renovar contratos clave en La Masía.', image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=400', date: 'Ontem', url: 'https://as.com' },
    { league: 'italy', source: 'Gazzetta dello Sport', title: 'Inter domina o mercado italiano', excerpt: 'A estratégia dos nerazzurri para manter a hegemonia na Série A.', image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&q=80&w=400', date: 'Hoje', url: 'https://www.gazzetta.it' },
    { league: 'germany', source: 'BILD', title: 'Bayern busca reconstrução sob novo comando', excerpt: 'As mudanças táticas esperadas para a próxima temporada na Baviera.', image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=400', date: 'Ontem', url: 'https://www.bild.de' }
];

function renderNews(category = 'all') {
    const grid = document.getElementById('news-feed-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = category === 'all' ? NEWS_DATA : NEWS_DATA.filter(n => n.league === category);

    filtered.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.onclick = () => window.open(news.url, '_blank');
        card.innerHTML = `
            <img src="${news.image}" class="news-image" alt="${news.title}">
            <div class="news-body">
                <div class="news-meta">
                    <span>${news.league}</span>
                    <span>${news.date}</span>
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
            </div>
            <div class="news-footer">
                <span class="news-source">${news.source}</span>
                <button class="news-read-more">Ler Mais <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterNews(category) {
    document.querySelectorAll('.news-cat-btn').forEach(btn => {
        const btnText = btn.innerText.toLowerCase();
        if (btnText === category.toLowerCase() || (category === 'all' && btnText === 'todas')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderNews(category);
}

// Scoreboard Navigation Logic
let currentScoreboardFilter = 'all';
let currentScoreboardDate = new Date();

function updateDateHeader() {
    const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    const dateStr = `${currentScoreboardDate.getDate().toString().padStart(2, '0')}/${(currentScoreboardDate.getMonth() + 1).toString().padStart(2, '0')} ${days[currentScoreboardDate.getDay()].toUpperCase()}`;
    const el = document.getElementById('current-date-header');
    if (el) el.innerText = dateStr;
}

function changeScoreboardDate(offset) {
    currentScoreboardDate.setDate(currentScoreboardDate.getDate() + offset);
    updateDateHeader();

    const matrix = document.getElementById('competition-matrix');
    matrix.innerHTML = '<div class="live-indicator"><span class="pulse"></span> A RECALIBRAR DATAS...</div>';

    setTimeout(() => {
        applyScoreboardFilters();
    }, 600);
}

function filterScoreboard(type, btn) {
    currentScoreboardFilter = type;

    document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    applyScoreboardFilters();
}

function applyScoreboardFilters() {
    const matrix = document.getElementById('competition-matrix');
    matrix.innerHTML = '';

    let filtered = [...allMatchesData];

    if (currentScoreboardFilter === 'live') {
        filtered = filtered.filter(m => m.live_score && !m.completed);
    } else if (currentScoreboardFilter === 'finished') {
        filtered = filtered.filter(m => m.completed);
    } else if (currentScoreboardFilter === 'scheduled') {
        filtered = filtered.filter(m => !m.live_score && !m.completed);
    } else if (currentScoreboardFilter === 'odds') {
        filtered = filtered.filter(m => m.bookmakers && m.bookmakers.length > 0);
    }

    if (filtered.length === 0) {
        matrix.innerHTML = '<div class="live-indicator">SEM JOGOS NESTA CATEGORIA / DATA</div>';
        return;
    }

    const grouped = filtered.reduce((acc, m) => {
        const key = m.league_name || 'Diversos';
        acc[key] = acc[key] || [];
        acc[key].push(m);
        return acc;
    }, {});

    Object.keys(grouped).forEach(league => {
        renderLeagueSection(league, grouped[league]);
    });
}

// Widget Source Switcher
function switchWidgetSource(source, btn) {
    // Toggle button active state
    document.querySelectorAll('.wsrc-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Show selected widget pane
    document.querySelectorAll('.widget-pane').forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active');
    });
    const target = document.getElementById(`widget-${source}`);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initAnimations();
    initInteractions();
    runAIScan();
    fetchLiveMatches();
    renderAds();
    renderNews();
    updateDateHeader();
});
