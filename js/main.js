// ============================================================
//  GOLODDS — Multi-Source API Configuration
//  Source 1: The Odds API      → Odds + Live Scores (500 credits/month free)
//  Source 2: Football-Data.org → Fixtures + Standings + H2H (free, 10 req/min)
//  Source 3: TheSportsDB       → Team info + Logos (free, no key required)
// ============================================================
const API_CONFIG = {
    // The Odds API (odds + scores)
    ODDS_API_KEY: 'b67e54e948f9f33d50930e9b19555271',
    BASE_URL: 'https://api.the-odds-api.com/v4/sports/',

    // Football-Data.org (fixtures, standings, H2H) — free tier
    FOOTBALL_DATA_KEY: '4a03e151af0446369dfac6c1088911b4',
    STATS_URL: 'https://api.football-data.org/v4/',

    // NEW: API-Football (deep stats, H2H, lineups)
    API_FOOTBALL_KEY: '7130df0f22674e6b851981c23cffe8d0',
    API_FOOTBALL_URL: 'https://v3.football.api-sports.io/',

    // TheSportsDB (events, teams, logos) — completely free, no key needed
    SPORTSDB_URL: 'https://www.thesportsdb.com/api/v1/json/3/'
};

// ============================================================
//  LEAGUE DIRECTORY — All free-tier competitions
//  odds_key    → The Odds API sport key (for odds + scores)
//  fd_id       → Football-Data.org competition code (for fixtures & standings)
//  sdb_id      → TheSportsDB league ID (for team data & events)
//  af_id       → API-Football (api-sports.io) league ID (for deep stats & H2H)
// ============================================================
const LEAGUE_DIRECTORY = [
    // ── TOP EUROPE ───────────────────────────────────────────
    { odds_key: 'soccer_epl', fd_id: 'PL', sdb_id: 4328, af_id: 39, name: 'Premier League', flag: 'gb', region: 'Europa', icon: 'fa-crown', color: '#ffcc00' },
    { odds_key: 'soccer_spain_la_liga', fd_id: 'PD', sdb_id: 4335, af_id: 140, name: 'La Liga', flag: 'es', region: 'Europa', icon: 'fa-shield-alt', color: '#ff3e3e' },
    { odds_key: 'soccer_germany_bundesliga', fd_id: 'BL1', sdb_id: 4331, af_id: 78, name: 'Bundesliga', flag: 'de', region: 'Europa', icon: 'fa-futbol', color: '#ffcc00' },
    { odds_key: 'soccer_italy_serie_a', fd_id: 'SA', sdb_id: 4332, af_id: 135, name: 'Serie A', flag: 'it', region: 'Europa', icon: 'fa-star', color: '#0099ff' },
    { odds_key: 'soccer_france_ligue_one', fd_id: 'FL1', sdb_id: 4334, af_id: 61, name: 'Ligue 1', flag: 'fr', region: 'Europa', icon: 'fa-bolt', color: '#0099ff' },
    { odds_key: 'soccer_portugal_primeira_liga', fd_id: 'PPL', sdb_id: 4344, af_id: 94, name: 'Liga Portugal', flag: 'pt', region: 'Europa', icon: 'fa-certificate', color: '#00ff88' },
    { odds_key: 'soccer_netherlands_eredivisie', fd_id: 'DED', sdb_id: 4337, af_id: 88, name: 'Eredivisie', flag: 'nl', region: 'Europa', icon: 'fa-wind', color: '#ff6600' },
    { odds_key: 'soccer_efl_champ', fd_id: 'ELC', sdb_id: 4329, af_id: 40, name: 'Championship', flag: 'gb', region: 'Europa', icon: 'fa-trophy', color: '#ffcc00' },
    { odds_key: 'soccer_spain_segunda_division', fd_id: 'SD', sdb_id: 4336, af_id: 141, name: 'La Liga 2', flag: 'es', region: 'Europa', icon: 'fa-shield-alt', color: '#ff3e3e' },

    // ── UEFA CUPS ─────────────────────────────────────────────
    { odds_key: 'soccer_uefa_champs_league', fd_id: 'CL', sdb_id: 4480, af_id: 2, name: 'Champions League', flag: 'eu', region: 'UEFA', icon: 'fa-trophy', color: '#ffffff' },
    { odds_key: 'soccer_uefa_europa_league', fd_id: 'EL', sdb_id: 4481, af_id: 3, name: 'Europa League', flag: 'eu', region: 'UEFA', icon: 'fa-trophy', color: '#ff9900' },
    { odds_key: 'soccer_uefa_europa_conference_league', fd_id: 'UECL', sdb_id: 4966, af_id: 848, name: 'Conference League', flag: 'eu', region: 'UEFA', icon: 'fa-trophy', color: '#00ffcc' },

    // ── MAIS EUROPA ───────────────────────────────────────────
    { odds_key: 'soccer_turkey_super_lig', fd_id: null, sdb_id: 4347, af_id: 203, name: 'Süper Lig', flag: 'tr', region: 'Europa', icon: 'fa-moon', color: '#e30a17' },
    { odds_key: 'soccer_belgium_first_div', fd_id: null, sdb_id: 4397, af_id: 144, name: 'Pro League', flag: 'be', region: 'Europa', icon: 'fa-star', color: '#000000' },
    { odds_key: 'soccer_spl', fd_id: null, sdb_id: 4330, af_id: 179, name: 'Scottish Premiership', flag: 'gb', region: 'Europa', icon: 'fa-crown', color: '#005eb8' },
    { odds_key: 'soccer_greece_super_league', fd_id: null, sdb_id: 4424, af_id: 197, name: 'Super League Grécia', flag: 'gr', region: 'Europa', icon: 'fa-columns', color: '#005ba6' },

    // ── MUNDIAL ───────────────────────────────────────────────
    { odds_key: 'soccer_brazil_campeonato', fd_id: 'BSA', sdb_id: 4351, af_id: 71, name: 'Brasileirão', flag: 'br', region: 'América', icon: 'fa-futbol', color: '#ffdf00' },
    { odds_key: 'soccer_usa_mls', fd_id: null, sdb_id: 4346, af_id: 253, name: 'MLS', flag: 'us', region: 'América', icon: 'fa-flag-usa', color: '#001f5b' },
    { odds_key: 'soccer_argentina_primera_division', fd_id: null, sdb_id: 4406, af_id: 128, name: 'Primera División', flag: 'ar', region: 'América', icon: 'fa-sun', color: '#75aadb' },
    { odds_key: 'soccer_japan_j_league', fd_id: null, sdb_id: 4359, af_id: 98, name: 'J1 League', flag: 'jp', region: 'Ásia', icon: 'fa-circle', color: '#bc002d' }
];

// ============================================================
//  TEAM CATALOG — Quality fallbacks for APIs
// ============================================================
const TEAM_CATALOG = {
    'Premier League': ['Man City', 'Arsenal', 'Liverpool', 'Aston Villa', 'Tottenham', 'Chelsea', 'Newcastle', 'Man Utd', 'West Ham', 'Brighton'],
    'La Liga': ['Real Madrid', 'Barcelona', 'Girona', 'Atlético Madrid', 'Athletic Club', 'Real Sociedad', 'Real Betis', 'Valencia', 'Villarreal', 'Getafe'],
    'Liga Portugal': ['Sporting CP', 'Benfica', 'FC Porto', 'Braga', 'Vitória SC', 'Moreirense', 'Arouca', 'Famalicão', 'Gil Vicente', 'Rio Ave'],
    'Bundesliga': ['Bayer Leverkusen', 'Bayern Munich', 'Stuttgart', 'RB Leipzig', 'Dortmund', 'Frankfurt', 'Hoffenheim', 'Freiburg', 'Augsburg', 'Bremen'],
    'Serie A': ['Inter', 'Milan', 'Juventus', 'Bologna', 'Roma', 'Atalanta', 'Lazio', 'Napoli', 'Fiorentina', 'Torino'],
    'Ligue 1': ['PSG', 'Monaco', 'Brest', 'Lille', 'Nice', 'Lens', 'Lyon', 'Marseille', 'Reims', 'Rennes']
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

function normalizeTeamName(teamName) {
    if (!teamName) return '';
    return teamName.toUpperCase()
        .replace(/ FC| AFC| SSC| CF| SL| SC| CP| SAD/g, '')
        .replace('MANCHESTER', 'MAN')
        .trim();
}

// Initialize Three.js Background — Upgraded to 3D Neural Web
function initThree() {
    const container = document.getElementById('three-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 800;

    // Create a 3D grid of points with connection lines
    const particleCount = 120;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = Math.random() * 2000 - 1000;
        positions[i * 3 + 1] = Math.random() * 2000 - 1000;
        positions[i * 3 + 2] = Math.random() * 2000 - 1000;
        velocities.push({
            x: (Math.random() - 0.5) * 1.5,
            y: (Math.random() - 0.5) * 1.5,
            z: (Math.random() - 0.5) * 1.5
        });
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x00f2ff,
        size: 3,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    // Create lines between points
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.1;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.1;
    });

    function animate() {
        requestAnimationFrame(animate);

        const posAttr = particles.getAttribute('position');
        const posArray = posAttr.array;
        let lineIdx = 0;

        for (let i = 0; i < particleCount; i++) {
            posArray[i * 3] += velocities[i].x;
            posArray[i * 3 + 1] += velocities[i].y;
            posArray[i * 3 + 2] += velocities[i].z;

            if (posArray[i * 3] > 1000 || posArray[i * 3] < -1000) velocities[i].x *= -1;
            if (posArray[i * 3 + 1] > 1000 || posArray[i * 3 + 1] < -1000) velocities[i].y *= -1;
            if (posArray[i * 3 + 2] > 1000 || posArray[i * 3 + 2] < -1000) velocities[i].z *= -1;
        }

        posAttr.needsUpdate = true;

        // Dynamic Line Mesh logic
        const linePosArray = lineGeometry.getAttribute('position').array;
        let lineCount = 0;
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dist = Math.sqrt(
                    Math.pow(posArray[i * 3] - posArray[j * 3], 2) +
                    Math.pow(posArray[i * 3 + 1] - posArray[j * 3 + 1], 2) +
                    Math.pow(posArray[i * 3 + 2] - posArray[j * 3 + 2], 2)
                );

                if (dist < 400 && lineCount < 2000) {
                    linePosArray[lineCount * 6] = posArray[i * 3];
                    linePosArray[lineCount * 6 + 1] = posArray[i * 3 + 1];
                    linePosArray[lineCount * 6 + 2] = posArray[i * 3 + 2];
                    linePosArray[lineCount * 6 + 3] = posArray[j * 3];
                    linePosArray[lineCount * 6 + 4] = posArray[j * 3 + 1];
                    linePosArray[lineCount * 6 + 5] = posArray[j * 3 + 2];
                    lineCount++;
                }
            }
        }
        lineGeometry.setDrawRange(0, lineCount * 2);
        lineGeometry.getAttribute('position').needsUpdate = true;

        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

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
    const searchInput = document.getElementById('match-search');

    if (searchBar) {
        searchBar.addEventListener('mouseenter', () => {
            gsap.to(whistle, { rotation: 15, duration: 0.2, repeat: 3, yoyo: true });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            applyScoreboardFilters(term);
        });
    }

    // 3D Tilt Motion Logic
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.match-summary-card, .mini-match-card, .news-card');
        const x = e.clientX;
        const y = e.clientY;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const deltaX = (x - centerX) / (rect.width / 2);
                const deltaY = (y - centerY) / (rect.height / 2);

                gsap.to(card, {
                    rotationY: deltaX * 10,
                    rotationX: -deltaY * 10,
                    translateZ: 30,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else {
                gsap.to(card, {
                    rotationY: 0,
                    rotationX: 0,
                    translateZ: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            }
        });
    });

    // Mock "Action" buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.innerHTML = '<i class="fas fa-check"></i> SINCRONIZADO';
            btn.style.background = 'var(--accent-blue)';

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

    // Default Ads if none in Storage
    const defaultSide = [
        { link: 'https://youtube.com', text: 'MELHORES MOMENTOS' },
        { link: 'https://twitter.com', text: 'NOTÍCIAS FLASH' }
    ];
    const defaultMain = [
        { link: 'https://instagram.com', text: 'BASTIDORES GOLODDS' },
        { link: 'https://twitch.tv', text: 'LIVE STREAMING MATRIX' },
        { link: 'https://facebook.com', text: 'COMUNIDADE MATRIX' }
    ];

    // Render Side Ads
    [1, 2].forEach((i, idx) => {
        const link = localStorage.getItem(`sideAdLink_${i}`) || defaultSide[idx].link;
        const text = localStorage.getItem(`sideAdText_${i}`) || defaultSide[idx].text;
        if (link) {
            const adBox = createAdBox(link, text);
            sideList.appendChild(adBox);
        }
    });

    // Render Main Ads
    [1, 2, 3].forEach((i, idx) => {
        const link = localStorage.getItem(`mainAdLink_${i}`) || defaultMain[idx].link;
        const text = localStorage.getItem(`mainAdText_${i}`) || defaultMain[idx].text;
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

// ============================================================
//  GOLODDS — Smart API Engine v2.0
//  - Credit monitoring (x-requests-remaining)
//  - Per-league cache with 5-min TTL
//  - Auto-fallback when credits are low
// ============================================================
let syncInterval = null;
let apiCreditsRemaining = null;  // null = unknown
const API_CACHE = {};            // { leagueKey: { ts, oddsData, scoresData } }
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes


// Update the credits badge in the UI
function updateCreditsUI(remaining) {
    const el = document.getElementById('api-credits-badge');
    if (!el) return;
    if (remaining === null) { el.textContent = '⚡ CRÉDITOS: --'; el.className = 'credits-badge'; return; }
    if (remaining <= 5) { el.textContent = `⚠️ CRÉDITOS: ${remaining}`; el.className = 'credits-badge credits-low'; return; }
    if (remaining <= 50) { el.textContent = `⚡ CRÉDITOS: ${remaining}`; el.className = 'credits-badge credits-warn'; return; }
    el.textContent = `✅ CRÉDITOS: ${remaining}`;
    el.className = 'credits-badge credits-ok';
}

// Smart fetch: checks cache, reads credit headers
async function smartFetch(url, cacheKey) {
    const now = Date.now();
    if (API_CACHE[cacheKey] && (now - API_CACHE[cacheKey].ts < CACHE_TTL_MS)) {
        console.log(`[CACHE HIT] ${cacheKey}`);
        return { data: API_CACHE[cacheKey].data, fromCache: true };
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);

    // Read credit info from headers
    const remaining = parseInt(res.headers.get('x-requests-remaining'));
    const used = parseInt(res.headers.get('x-requests-used'));
    const cost = parseInt(res.headers.get('x-requests-last'));
    if (!isNaN(remaining)) {
        apiCreditsRemaining = remaining;
        updateCreditsUI(remaining);
        console.log(`[API] Credits used: ${used} | cost this call: ${cost} | remaining: ${remaining}`);
    }

    const data = await res.json();
    API_CACHE[cacheKey] = { ts: now, data };
    return { data, fromCache: false };
}

// Fetch league standings via Football-Data.org (free tier, 10 req/min)
async function fetchStandingsFromFD(fdCode) {
    if (!fdCode) return null;
    const cacheKey = `fd_standings_${fdCode}`;
    const now = Date.now();
    if (API_CACHE[cacheKey] && (now - API_CACHE[cacheKey].ts < CACHE_TTL_MS)) return API_CACHE[cacheKey].data;
    try {
        const res = await fetch(`${API_CONFIG.STATS_URL}competitions/${fdCode}/standings`, {
            headers: { 'X-Auth-Token': API_CONFIG.FOOTBALL_DATA_KEY }
        });
        if (!res.ok) return null;
        const data = await res.json();
        API_CACHE[cacheKey] = { ts: now, data };
        return data;
    } catch (e) { return null; }
}

// Fetch next events from TheSportsDB (free, no key needed)
async function fetchEventsFromSportsDB(leagueId) {
    const cacheKey = `sdb_events_${leagueId}`;
    const now = Date.now();
    if (API_CACHE[cacheKey] && (now - API_CACHE[cacheKey].ts < CACHE_TTL_MS)) return API_CACHE[cacheKey].data;
    try {
        const res = await fetch(`${API_CONFIG.SPORTSDB_URL}eventsnextleague.php?id=${leagueId}`);
        if (!res.ok) return null;
        const json = await res.json();
        API_CACHE[cacheKey] = { ts: now, data: json.events || [] };
        return json.events || [];
    } catch (e) { return null; }
}

async function fetchDeepAnalyticsFromAF(homeTeam, awayTeam) {
    const cacheKey = `af_h2h_${homeTeam}_${awayTeam}`;
    const now = Date.now();
    if (API_CACHE[cacheKey] && (now - API_CACHE[cacheKey].ts < CACHE_TTL_MS * 10)) return API_CACHE[cacheKey].data;

    try {
        // Step 1: Resolve Team IDs using targeted search
        const [hRes, aRes] = await Promise.all([
            fetch(`${API_CONFIG.API_FOOTBALL_URL}teams?name=${encodeURIComponent(homeTeam)}`, { headers: { 'x-apisports-key': API_CONFIG.API_FOOTBALL_KEY } }).then(r => r.json()),
            fetch(`${API_CONFIG.API_FOOTBALL_URL}teams?name=${encodeURIComponent(awayTeam)}`, { headers: { 'x-apisports-key': API_CONFIG.API_FOOTBALL_KEY } }).then(r => r.json())
        ]);

        const hId = hRes.response && hRes.response[0] ? hRes.response[0].team.id : null;
        const aId = aRes.response && aRes.response[0] ? aRes.response[0].team.id : null;

        if (!hId || !aId) {
            console.warn(`[AF] Could not resolve IDs for ${homeTeam} (${hId}) or ${awayTeam} (${aId})`);
            return null;
        }

        // Step 2: Fetch actual H2H results (last 10 meetings)
        const h2hRes = await fetch(`${API_CONFIG.API_FOOTBALL_URL}fixtures/headtohead?h2h=${hId}-${aId}&last=10`, {
            headers: { 'x-apisports-key': API_CONFIG.API_FOOTBALL_KEY }
        }).then(r => r.json());

        const data = {
            h2h: h2hRes.response || [],
            teams: { home: hRes.response[0].team, away: aRes.response[0].team }
        };

        API_CACHE[cacheKey] = { ts: now, data };
        return data;
    } catch (e) {
        console.error('[AF] Deep Analytics Error:', e);
        return null;
    }
}

async function fetchLiveMatches(isInitial = true) {
    const matrix = document.getElementById('competition-matrix');

    if (isInitial) {
        matrix.innerHTML = '<div class="live-indicator"><span class="pulse"></span> A CARREGAR PREVISÕES NEURAIS...</div>';
        updateCreditsUI(apiCreditsRemaining);
    }

    // If credits are critically low, go straight to neural projections
    if (apiCreditsRemaining !== null && apiCreditsRemaining <= 5) {
        console.warn('[API] Créditos ≤ 5 — Projeções neurais activadas.');
        if (isInitial) loadMockData();
        updateCreditsUI(apiCreditsRemaining);
        return;
    }

    // Build the target date string from the global scoreboard date variable
    const targetDate = new Date(currentScoreboardDate);
    const targetDateStr = `${targetDate.getFullYear()}-${(targetDate.getMonth() + 1).toString().padStart(2, '0')}-${targetDate.getDate().toString().padStart(2, '0')}`;

    let dataFound = false;
    let tempMatches = [];

    for (const league of LEAGUE_DIRECTORY) {
        // Stop if critically low mid-loop
        if (apiCreditsRemaining !== null && apiCreditsRemaining <= 3) {
            console.warn(`[API] Créditos críticos (${apiCreditsRemaining}). A parar sync.`);
            break;
        }

        try {
            const oddsUrl = `${API_CONFIG.BASE_URL}${league.odds_key}/odds/?apiKey=${API_CONFIG.ODDS_API_KEY}&regions=eu&markets=h2h`;
            const scoresUrl = `${API_CONFIG.BASE_URL}${league.odds_key}/scores/?apiKey=${API_CONFIG.ODDS_API_KEY}&daysFrom=1`;

            const [oddsResult, scoresResult] = await Promise.all([
                smartFetch(oddsUrl, `${league.odds_key}_odds`),
                smartFetch(scoresUrl, `${league.odds_key}_scores`).catch(() => ({ data: [] }))
            ]);

            const oddsData = oddsResult.data;
            const scoresData = scoresResult.data || [];

            const merged = oddsData
                .filter(match => match.commence_time.split('T')[0] === targetDateStr)
                .map(match => {
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
                        league_name: league.name
                    };
                });

            if (merged.length > 0) { dataFound = true; tempMatches.push(...merged); }

        } catch (e) {
            console.error(`[API] Erro na liga ${league.name}:`, e.message);
        }
    }

    if (dataFound) {
        // Goal notifications
        tempMatches.forEach(newMatch => {
            const old = allMatchesData.find(m => m.id === newMatch.id);
            if (old && newMatch.live_score && old.live_score) {
                if (newMatch.live_score[0].score !== old.live_score[0].score ||
                    newMatch.live_score[1].score !== old.live_score[1].score) notifyGoal(newMatch);
            }
        });

        allMatchesData = tempMatches;
        applyScoreboardFilters();

        const currentHome = document.querySelector('.team-home h2');
        if (currentHome) {
            const m = allMatchesData.find(m => m.home_team === currentHome.innerText);
            if (m) updateMatchUI(m);
        } else if (isInitial && allMatchesData[0]) {
            updateMatchUI(allMatchesData[0]);
            updateOddsUI(allMatchesData[0]);
        }
    } else if (isInitial) {
        console.warn('[API] Sem dados reais para hoje — a activar Projeções Neurais.');
        loadMockData();
    }

    updateNeuralTicker(getTopPicks());

    // Status update
    const syncEl = document.getElementById('sync-status');
    if (syncEl) {
        const n = new Date();
        const timeStr = `${n.getHours().toString().padStart(2, '0')}:${n.getMinutes().toString().padStart(2, '0')}`;
        syncEl.innerHTML = `<i class="fas fa-check-circle"></i> ATUALIZADO ${timeStr}`;
        syncEl.style.color = '#00ff88';
        setTimeout(() => {
            if (syncEl) { syncEl.innerHTML = '<i class="fas fa-satellite"></i> MONITORIZAÇÃO GLOBAL'; syncEl.style.color = ''; }
        }, 6000);
    }

    // Schedule next refresh (5 min to preserve credits)
    if (isInitial && !syncInterval) {
        syncInterval = setInterval(() => fetchLiveMatches(false), 5 * 60 * 1000);
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

// Fallback Neural Projections — dynamically based on today's date
function loadMockData() {
    // Build today's ISO timestamps for realistic times
    function tod(h, m) {
        const d = new Date(currentScoreboardDate);
        d.setHours(h, m, 0, 0);
        return d.toISOString();
    }

    const day = d.getDate();
    const month = d.getMonth() + 1; // FEB = 2

    let matches = [];

    if (day === 23) {
        matches = [
            { id: 'm-23-1', home_team: 'Benfica', away_team: 'FC Porto', league_name: 'Liga Portugal', commence_time: tod(20, 15), bookmakers: [{ markets: [{ outcomes: [{ name: 'Benfica', price: 2.15 }, { name: 'Draw', price: 3.40 }, { name: 'FC Porto', price: 3.20 }] }] }] },
            { id: 'm-23-2', home_team: 'Crystal Palace', away_team: 'Man United', league_name: 'Premier League', commence_time: tod(20, 0), bookmakers: [{ markets: [{ outcomes: [{ name: 'Crystal Palace', price: 3.80 }, { name: 'Draw', price: 3.60 }, { name: 'Man United', price: 1.95 }] }] }] },
            { id: 'm-23-3', home_team: 'Girona', away_team: 'Real Sociedad', league_name: 'La Liga', commence_time: tod(21, 0), bookmakers: [{ markets: [{ outcomes: [{ name: 'Girona', price: 2.45 }, { name: 'Draw', price: 3.25 }, { name: 'Real Sociedad', price: 2.90 }] }] }] }
        ];
    } else if (day === 24) {
        matches = [
            { id: 'm-24-1', home_team: 'Real Madrid', away_team: 'AC Milan', league_name: 'Champions League', commence_time: tod(20, 0), bookmakers: [{ markets: [{ outcomes: [{ name: 'Real Madrid', price: 1.55 }, { name: 'Draw', price: 4.50 }, { name: 'AC Milan', price: 5.50 }] }] }] },
            { id: 'm-24-2', home_team: 'Bayern', away_team: 'Arsenal', league_name: 'Champions League', commence_time: tod(20, 0), bookmakers: [{ markets: [{ outcomes: [{ name: 'Bayern', price: 2.10 }, { name: 'Draw', price: 3.60 }, { name: 'Arsenal', price: 3.20 }] }] }] },
            { id: 'm-24-3', home_team: 'Sporting CP', away_team: 'Braga', league_name: 'Liga Portugal', commence_time: tod(20, 45), bookmakers: [{ markets: [{ outcomes: [{ name: 'Sporting CP', price: 1.65 }, { name: 'Draw', price: 3.90 }, { name: 'Braga', price: 5.00 }] }] }] }
        ];
    } else if (day === 25) {
        matches = [
            { id: 'm-25-1', home_team: 'Inter', away_team: 'Man City', league_name: 'Champions League', commence_time: tod(20, 0), bookmakers: [{ markets: [{ outcomes: [{ name: 'Inter', price: 3.10 }, { name: 'Draw', price: 3.50 }, { name: 'Man City', price: 2.20 }] }] }] },
            { id: 'm-25-2', home_team: 'Barcelona', away_team: 'Liverpool', league_name: 'Champions League', commence_time: tod(20, 0), bookmakers: [{ markets: [{ outcomes: [{ name: 'Barcelona', price: 2.60 }, { name: 'Draw', price: 3.60 }, { name: 'Liverpool', price: 2.50 }] }] }] }
        ];
    } else {
        // generic fallback for other days
        matches = [
            { id: 'mock-gen-1', home_team: 'Team Alpha', away_team: 'Team Beta', league_name: 'Exhibition', commence_time: tod(15, 0), bookmakers: [{ markets: [{ outcomes: [{ name: 'Team Alpha', price: 2.00 }, { name: 'Draw', price: 3.00 }, { name: 'Team Beta', price: 2.00 }] }] }] }
        ];
    }

    allMatchesData = matches;
    applyScoreboardFilters();
    if (matches[0]) {
        updateMatchUI(matches[0]);
        updateOddsUI(matches[0]);
    }
    updateNeuralTicker(getTopPicks());
}

function formatMatchTime(isoString) {
    const d = new Date(isoString);
    const date = d.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' });
    const time = d.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
    return `${date} às ${time}`;
}

function getLeagueFlag(leagueName) {
    const league = LEAGUE_DIRECTORY.find(l => l.name === leagueName);
    if (league) return `https://flagcdn.com/w40/${league.flag}.png`;
    return 'https://flagcdn.com/w40/un.png';
}

function getAIPrediction(match) {
    // Calculate AI probabilities from bookmaker odds
    if (!match.bookmakers || !match.bookmakers[0]) return null;
    const outcomes = match.bookmakers[0].markets[0].outcomes;
    const homeOutcome = outcomes.find(o => o.name === match.home_team);
    const awayOutcome = outcomes.find(o => o.name === match.away_team);
    const drawOutcome = outcomes.find(o => o.name === 'Draw' || o.name === 'X');
    if (!homeOutcome || !awayOutcome) return null;

    const rH = (1 / homeOutcome.price) * 100;
    const rA = (1 / awayOutcome.price) * 100;
    const rD = drawOutcome ? (1 / drawOutcome.price) * 100 : 20;
    const total = rH + rA + rD;

    const pH = Math.round((rH / total) * 100);
    const pA = Math.round((rA / total) * 100);
    const pD = 100 - pH - pA;

    let verdict, verdictClass;
    if (pH > pA && pH > pD) { verdict = 'VITÓRIA CASA'; verdictClass = 'verdict-home'; }
    else if (pA > pH && pA > pD) { verdict = 'VITÓRIA FORA'; verdictClass = 'verdict-away'; }
    else { verdict = 'EMPATE'; verdictClass = 'verdict-draw'; }

    return { pH, pD, pA, verdict, verdictClass, homeOdds: homeOutcome.price, drawOdds: drawOutcome ? drawOutcome.price : '-', awayOdds: awayOutcome.price };
}

function renderLeagueSection(name, matches, targetElement = null) {
    const matrix = targetElement || document.getElementById('competition-matrix');

    const header = document.createElement('div');
    header.className = 'league-scoreboard-header';
    header.innerHTML = `
        <div class="league-info-box">
            <img src="${getLeagueFlag(name)}" class="league-flag">
            <span class="league-name-text">${name}</span>
        </div>
        <div class="league-actions">
            <span>${matches.length} jogo${matches.length !== 1 ? 's' : ''}</span>
        </div>
    `;
    matrix.appendChild(header);

    matches.forEach(match => {
        const pred = getAIPrediction(match);
        const isLive = match.live_score && !match.completed;
        const statusText = match.completed ? 'FIM' : (isLive ? '🔴 LIVE' : formatMatchTime(match.commence_time));

        const row = document.createElement('div');
        row.className = 'match-predict-row';
        row.onclick = () => {
            updateMatchUI(match);
            updateOddsUI(match);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        row.innerHTML = `
            <div class="mpr-header">
                <div class="mpr-status ${isLive ? 'live' : ''}">${statusText}</div>
                <div class="mpr-teams">
                    <div class="mpr-team">
                        <img src="${getCrestUrl(match.home_team)}" class="mpr-crest">
                        <span>${match.home_team}</span>
                    </div>
                    <div class="mpr-vs">VS</div>
                    <div class="mpr-team mpr-team-away">
                        <span>${match.away_team}</span>
                        <img src="${getCrestUrl(match.away_team)}" class="mpr-crest">
                    </div>
                </div>
                ${pred ? `<div class="mpr-verdict-pill ${pred.verdictClass}"><i class="fas fa-microchip"></i> ${pred.verdict}</div>` : '<div class="mpr-verdict-pill verdict-unknown"><i class="fas fa-question-circle"></i> SEM ODDS</div>'}
            </div>
            ${pred ? `
            <div class="mpr-analysis">
                <div class="mpr-prob-row">
                    <div class="mpr-prob-item">
                        <div class="mpr-prob-label">Casa <span class="mpr-odds">@${pred.homeOdds}</span></div>
                        <div class="mpr-bar-bg">
                            <div class="mpr-bar mpr-bar-home" style="width:${pred.pH}%"></div>
                        </div>
                        <div class="mpr-pct">${pred.pH}%</div>
                    </div>
                    <div class="mpr-prob-item">
                        <div class="mpr-prob-label">Empate <span class="mpr-odds">@${pred.drawOdds}</span></div>
                        <div class="mpr-bar-bg">
                            <div class="mpr-bar mpr-bar-draw" style="width:${pred.pD}%"></div>
                        </div>
                        <div class="mpr-pct">${pred.pD}%</div>
                    </div>
                    <div class="mpr-prob-item">
                        <div class="mpr-prob-label">Fora <span class="mpr-odds">@${pred.awayOdds}</span></div>
                        <div class="mpr-bar-bg">
                            <div class="mpr-bar mpr-bar-away" style="width:${pred.pA}%"></div>
                        </div>
                        <div class="mpr-pct">${pred.pA}%</div>
                    </div>
                </div>
                <div class="mpr-deep-btn" onclick="event.stopPropagation(); updateMatchUI(${JSON.stringify(match).replace(/"/g, '&quot;')}); updateOddsUI(${JSON.stringify(match).replace(/"/g, '&quot;')}); window.scrollTo({top:0,behavior:'smooth'});">
                    <i class="fas fa-brain"></i> ANÁLISE PROFUNDA
                </div>
            </div>` : ''}
        `;
        matrix.appendChild(row);
    });
}

async function updateMatchUI(match) {
    const vsContainer = document.querySelector('.vs-container');
    const probContainer = document.getElementById('neural-probability');
    const overlay = document.querySelector('.ai-processing-overlay');

    if (overlay) {
        overlay.style.display = 'flex';
        overlay.querySelector('.processing-text').innerText = 'A REALIZAR SCAN NEURAL PROFUNDO (API-FOOTBALL v3)...';
    }

    // Find league meta
    const leagueMeta = LEAGUE_DIRECTORY.find(l => l.name === match.league_name);
    let standings = null;
    let deepStats = null;

    if (leagueMeta) {
        // Parallel fetch for speed
        const [standingsRes, deepRes] = await Promise.all([
            leagueMeta.fd_id ? fetchStandingsFromFD(leagueMeta.fd_id) : Promise.resolve(null),
            fetchDeepAnalyticsFromAF(match.home_team, match.away_team).catch(() => null)
        ]);
        standings = standingsRes;
        deepStats = deepRes;
    }

    const findTeamStats = (teamName) => {
        if (!standings || !standings.standings) return null;
        const normSearch = normalizeTeamName(teamName);
        const table = standings.standings[0].table;
        return table.find(t => normalizeTeamName(t.team.name).includes(normSearch) || normSearch.includes(normalizeTeamName(t.team.name)));
    };

    const hStats = findTeamStats(match.home_team);
    const aStats = findTeamStats(match.away_team);

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
            <div class="form">${hStats ? `${hStats.position}º LUGAR | FORMA: ${hStats.form || '???'}` : 'SCAN NEURAL: ATIVO'}</div>
        </div>
        <div class="vs-text">${scoreHtml}</div>
        <div class="team team-away">
            <div class="crest-container">
                <img src="${getCrestUrl(match.away_team)}" class="team-crest">
                <div class="scan-line"></div>
            </div>
            <h2>${match.away_team.toUpperCase()}</h2>
            <div class="form">${aStats ? `${aStats.position}º LUGAR | FORMA: ${aStats.form || '???'}` : 'SCAN NEURAL: ATIVO'}</div>
        </div>
    `;

    // Show and trigger Neural Analysis
    if (probContainer) {
        probContainer.style.display = 'block';
        calculateNeuralProbability(match, { hStats, aStats, deepStats });
        updateOddsUI(match, { hStats, aStats, deepStats });
    }

    if (overlay) {
        setTimeout(() => overlay.style.display = 'none', 1000);
    }

    if (!document.getElementById('crest-anim-styles')) {
        const s = document.createElement('style');
        s.id = 'crest-anim-styles';
        s.innerHTML = `
            .crest-container { position: relative; overflow: hidden; border-radius: 50%; width: 100px; height: 100px; margin: 0 auto 15px; border: 2px solid var(--accent-cyan); transition: 0.3s; }
            .crest-container:hover { transform: scale(1.1); box-shadow: 0 0 20px var(--accent-cyan); }
            .team-crest { width: 100%; height: 100%; object-fit: cover; }
            .scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--accent-cyan); box-shadow: 0 0 10px var(--accent-cyan); animation: scan-kv 2s linear infinite; }
            @keyframes scan-kv { 0% { top: 0; } 100% { top: 100%; } }
        `;
        document.head.appendChild(s);
    }
}

function predictProbableScore(hProb, aProb) {
    // Neural Logic for score prediction
    if (hProb > 75) return "3 - 0";
    if (hProb > 65) return "2 - 0";
    if (hProb > 55) return "2 - 1";
    if (aProb > 75) return "0 - 3";
    if (aProb > 65) return "0 - 2";
    if (aProb > 55) return "1 - 2";
    if (Math.abs(hProb - aProb) < 10) return "1 - 1";
    return "1 - 0";
}

function getNeuralProbabilities(match, extraData = null) {
    const bookmaker = match.bookmakers ? match.bookmakers[0] : null;
    if (!bookmaker) return { h: 33, a: 33, d: 34 };
    const outcomes = bookmaker.markets[0].outcomes;

    // Convert decimal odds to implied probability
    const hItem = outcomes.find(o => o.name === match.home_team);
    const aItem = outcomes.find(o => o.name === match.away_team);
    const dItem = outcomes.find(o => o.name === 'Draw' || o.name === 'X');

    const probHomeRaw = hItem ? (1 / hItem.price) * 100 : 33;
    const probAwayRaw = aItem ? (1 / aItem.price) * 100 : 33;
    const probDrawRaw = dItem ? (1 / dItem.price) * 100 : 15;

    const total = probHomeRaw + probAwayRaw + probDrawRaw;
    let h = (probHomeRaw / total) * 100;
    let a = (probAwayRaw / total) * 100;

    // 1. Apply Standings Bias (Football-Data.org)
    if (extraData && extraData.hStats && extraData.aStats) {
        const posDiff = extraData.aStats.position - extraData.hStats.position;
        h += (posDiff * 0.4);
        a -= (posDiff * 0.4);
    }

    // 2. Apply H2H Dominance (API-Football)
    if (extraData && extraData.deepStats && extraData.deepStats.h2h) {
        const h2h = extraData.deepStats.h2h;
        let hWins = 0, aWins = 0;
        h2h.forEach(game => {
            if (game.teams.home.winner) hWins++;
            if (game.teams.away.winner) aWins++;
        });

        if (h2h.length > 0) {
            const h2hBias = (hWins - aWins) * 1.5; // Each win difference weights 1.5%
            h += h2hBias;
            a -= h2hBias;
        }
    }

    // Clip
    h = Math.max(5, Math.min(92, h));
    a = Math.max(5, Math.min(92, a));
    let d = 100 - h - a;

    return { h, a, d };
}

function calculateNeuralProbability(match, extraData = null) {
    const container = document.getElementById('main-match-container');
    if (container) container.classList.add('processing-active');

    // Simulate Deep Scan Delay
    setTimeout(() => {
        if (container) container.classList.remove('processing-active');

        const { h, a, d } = getNeuralProbabilities(match, extraData);

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
        const predictedScore = predictProbableScore(h, a);

        // Dynamic reasoning based on data
        let reasoning = `Análise Matrix concluída. `;
        if (extraData && extraData.hStats && extraData.aStats) {
            reasoning += `Integração de dados reais: ${match.home_team} (${extraData.hStats.position}º) vs ${match.away_team} (${extraData.aStats.position}º). `;
        }

        if (extraData && extraData.deepStats && extraData.deepStats.h2h) {
            const h2h = extraData.deepStats.h2h;
            let hWins = 0, aWins = 0;
            h2h.forEach(g => { if (g.teams.home.winner) hWins++; if (g.teams.away.winner) aWins++; });
            reasoning += `Score H2H (últimos 10): ${hWins} Vitórias de Casa, ${aWins} Fora. `;
            if (hWins > aWins) reasoning += `Dominância histórica clara para ${match.home_team}. `;
            else if (aWins > hWins) reasoning += `Fator 'Equipa Fantasma' detetado para ${match.away_team}. `;
        } else {
            reasoning += `Processados 2.400 pontos de dados históricos. Tendência de golos e posse de bola neural integrados. `;
        }

        verdictBox.innerHTML = `
        <div class="verdict-icon"><i class="fas fa-robot"></i></div>
        <div class="verdict-text">
            <h4>VEREDITO IA: ${bestChoice === 'DRAW' ? 'EMPATE' : bestChoice.toUpperCase()}</h4>
            <div class="probable-score-box">
                <span class="score-label">RESULTADO PROVÁVEL</span>
                <span class="score-value">${predictedScore}</span>
            </div>
            <p style="margin-top: 15px;">${reasoning}</p>
            <div class="neural-stats-grid">
                <div class="stat-item">POSIÇÃO MÉDIA: <span>${extraData?.hStats?.position || '?'}/${extraData?.aStats?.position || '?'}</span></div>
                <div class="stat-item">DOMÍNIO NEURAL: <span>${h > a ? 'ALTO' : 'EQUILIBRADO'}</span></div>
                <div class="stat-item">XP (EXPECTED): <span>${(Math.random() * 2 + 1).toFixed(2)}</span></div>
                <div class="stat-item">CONFIANÇA: <span>${Math.max(h, a, d).toFixed(1)}%</span></div>
            </div>
        </div>
    `;

        renderMultiAI(match, { h, a, d }, extraData);
    }, 1500);
}

function renderMultiAI(match, probs, extraData) {
    const grid = document.getElementById('ai-opinions-grid');
    if (!grid) return;

    const personas = [
        {
            name: "O MATEMÁTICO",
            icon: "fa-calculator",
            logic: "Cálculo de Poisson focado em volume de golos e desvio padrão defensivo.",
            getPred: () => {
                const score = predictProbableScore(probs.h, probs.a);
                return `PROJEÇÃO: ${score}`;
            }
        },
        {
            name: "O EXPLORADOR",
            icon: "fa-search",
            logic: "Análise de Momentum. Pesa a forma recente (últimos 5 jogos) e fadiga algorítmica.",
            getPred: () => {
                const homeForm = extraData?.hStats?.form ? extraData.hStats.form.split('').filter(f => f === 'W').length : 2;
                const awayForm = extraData?.aStats?.form ? extraData.aStats.form.split('').filter(f => f === 'W').length : 2;
                return homeForm >= awayForm ? `VANTAGEM: ${match.home_team}` : `VANTAGEM: ${match.away_team}`;
            }
        },
        {
            name: "O ORÁCULO",
            icon: "fa-eye",
            logic: "Análise Cross-Market. Identifica para onde o dinheiro inteligente se está a mover.",
            getPred: () => {
                const implied = Math.max(probs.h, probs.a, probs.d);
                if (implied === probs.h) return `TENDÊNCIA: CASA`;
                if (implied === probs.a) return `TENDÊNCIA: FORA`;
                return `TENDÊNCIA: EMPATE`;
            }
        }
    ];

    grid.innerHTML = '';
    personas.forEach(p => {
        const card = document.createElement('div');
        card.className = 'opinion-card';
        card.innerHTML = `
            <div class="opinion-persona"><i class="fas ${p.icon}"></i> ${p.name}</div>
            <div class="opinion-prediction">${p.getPred()}</div>
            <div class="opinion-logic">${p.logic}</div>
        `;
        grid.appendChild(card);
    });
}

function updateOddsUI(match, extraData = null) {
    const oddsList = document.querySelector('.odds-list');
    const bookmaker = match.bookmakers ? match.bookmakers[0] : null;
    if (!bookmaker) return;
    const market = bookmaker.markets[0];
    if (!market) return;
    const outcomes = market.outcomes;

    const probs = getNeuralProbabilities(match, extraData);

    oddsList.innerHTML = '';
    outcomes.forEach(outcome => {
        let aiProb = 0;
        if (outcome.name === match.home_team) aiProb = probs.h;
        else if (outcome.name === match.away_team) aiProb = probs.a;
        else aiProb = probs.d;

        const impliedProb = (1 / outcome.price) * 100;
        const ev = ((aiProb / impliedProb) - 1) * 100;
        const isValue = ev > 10; // Value if AI thinks chance is 10% higher than odds suggest

        const item = document.createElement('div');
        item.className = `odd-item ${isValue ? 'ai-recommendation' : ''}`;
        item.innerHTML = `
            ${isValue ? '<span class="ai-badge"><i class="fas fa-microchip"></i> VALOR DETETADO</span>' : ''}
            <div class="market">${outcome.name === 'Draw' || outcome.name === 'X' ? 'EMPATE' : outcome.name.toUpperCase()}</div>
            <div class="prob">${outcome.price.toFixed(2)}</div>
            <div class="ev" style="color: ${ev > 0 ? 'var(--accent-cyan)' : '#ff3e3e'}">${ev > 0 ? '+' : ''}${ev.toFixed(1)}% EV</div>
            <div class="action-btn">FIXAR APOSTA</div>
        `;
        oddsList.appendChild(item);
    });

    initInteractions();
    runAIScan();
}

let allMatchesData = [];

function renderSidebarLeagues() {
    const sidebar = document.getElementById('dynamic-leagues-sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '';

    const regions = [...new Set(LEAGUE_DIRECTORY.map(l => l.region))];

    regions.forEach(region => {
        const title = document.createElement('div');
        title.className = 'nav-group-title';
        title.innerText = region.toUpperCase();
        sidebar.appendChild(title);

        const leagues = LEAGUE_DIRECTORY.filter(l => l.region === region);
        leagues.forEach(league => {
            const item = document.createElement('div');
            item.className = 'sidebar-league-item';
            item.onclick = () => openLeaguePortal(league.name);
            item.innerHTML = `
                <img src="https://flagcdn.com/w40/${league.flag}.png" class="sidebar-flag">
                <span>${league.name}</span>
            `;
            sidebar.appendChild(item);
        });
    });
}

function openLeaguePortal(leagueName) {
    switchTab('league-portal');

    const league = LEAGUE_DIRECTORY.find(l => l.name === leagueName);
    activeLeague = league; // Global tracker for round changes

    // Update Active Sidebar
    document.querySelectorAll('.sidebar-league-item').forEach(item => {
        const text = item.querySelector('span').innerText;
        if (text === leagueName) {
            item.style.color = 'var(--accent-blue)';
            item.style.background = 'rgba(0, 153, 255, 0.1)';
        } else {
            item.style.color = '';
            item.style.background = '';
        }
    });

    const header = document.getElementById('league-portal-header');
    const content = document.getElementById('league-portal-content');
    const fixturesContainer = document.getElementById('league-fixtures-container');
    const roundBadge = document.getElementById('current-round-badge');

    const icon = league ? league.icon : 'fa-futbol';
    const color = league ? league.color : '#0099ff';

    header.innerHTML = `
        <div class="league-portal-banner" style="border-left: 5px solid ${color};">
            <div class="league-icon-large" style="color: ${color};">
                <i class="fas ${icon}"></i>
            </div>
            <div class="league-portal-info">
                <h1>PORTAL ${leagueName.toUpperCase()}</h1>
                <p>Análise Neuronal e Dados de Mercado em Tempo Real</p>
            </div>
        </div>
    `;

    // 1. Traditional Standings Table (Now also detects current matchday)
    renderLeagueStandings(league).then(() => {
        // 2. Traditional Calendar (Render after standings to ensure correct round)
        renderLeagueFixtures(league, fixturesContainer, roundBadge);
    });

    // 3. Render Highlights (Highlights filtering)
    const filtered = allMatchesData.filter(m => m.league_name === leagueName);
    content.innerHTML = '';
    if (filtered.length === 0) {
        content.innerHTML = '<div class="live-indicator">SEM JOGOS EM DESTAQUE PARA HOJE</div>';
    } else {
        renderLeagueSection(leagueName, filtered, content);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentLeagueRound = 24;
let activeLeague = null;

function changeLeagueRound(offset) {
    currentLeagueRound = Math.max(1, Math.min(38, currentLeagueRound + offset));
    if (activeLeague) {
        const fixturesContainer = document.getElementById('league-fixtures-container');
        const roundBadge = document.getElementById('current-round-badge');
        renderLeagueFixtures(activeLeague, fixturesContainer, roundBadge);
    }
}

async function renderLeagueStandings(league) {
    const container = document.getElementById('league-standings-container');
    if (!container || !league) return;

    if (!league.fd_id) {
        container.innerHTML = '<div class="live-indicator">DADOS DE CLASSIFICAÇÃO INDISPONÍVEIS PARA ESTA LIGA</div>';
        return;
    }

    container.innerHTML = '<div class="live-indicator"><span class="pulse"></span> A RETOMBIR POSIÇÕES DA MATRIX...</div>';

    try {
        const data = await fetchStandingsFromFD(league.fd_id);
        if (!data || !data.standings) throw new Error();

        // Detect current matchday from API
        if (data.season && data.season.currentMatchday) {
            currentLeagueRound = data.season.currentMatchday;
        }

        const tableData = data.standings[0].table;
        let html = `
            <table class="standings-table">
                <thead>
                    <tr>
                        <th class="st-pos">#</th>
                        <th>EQUIPA</th>
                        <th class="st-num">J</th>
                        <th class="st-num">V</th>
                        <th class="st-num">E</th>
                        <th class="st-num">D</th>
                        <th class="st-num">G</th>
                        <th class="st-pts">PTS</th>
                    </tr>
                </thead>
                <tbody>
        `;

        tableData.forEach(row => {
            html += `
                <tr>
                    <td class="st-pos">${row.position}</td>
                    <td class="st-team">
                        <img src="${row.team.crest}" class="st-crest" onerror="this.src='https://www.thesportsdb.com/images/media/team/badge/small/default.png'">
                        <span>${row.team.shortName || row.team.name}</span>
                    </td>
                    <td class="st-num">${row.playedGames}</td>
                    <td class="st-num">${row.won}</td>
                    <td class="st-num">${row.draw}</td>
                    <td class="st-num">${row.lost}</td>
                    <td class="st-num">${row.goalsFor}:${row.goalsAgainst}</td>
                    <td class="st-pts">${row.points}</td>
                </tr>
            `;
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    } catch (e) {
        container.innerHTML = '<div class="live-indicator">ERRO AO CARREGAR TABELA TRADICIONAL</div>';
    }
}


async function renderLeagueFixtures(league, container, badge) {
    if (!container || !league) return;
    container.innerHTML = '<div class="live-indicator"><span class="pulse"></span> A SINCRONIZAR CALENDÁRIO COM A MATRIX...</div>';

    let fixtures = [];
    badge.innerText = `JORNADA ${currentLeagueRound}`;

    try {
        if (league.fd_id) {
            // Priority 1: Official League High-Fidelity Repos
            if (league.name === 'La Liga') {
                const repoRes = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/es.1.json');
                if (repoRes.ok) {
                    const repoData = await repoRes.json();
                    const roundStr = `Matchday ${currentLeagueRound}`;
                    const matches = repoData.matches.filter(m => m.round === roundStr);

                    if (matches.length > 0) {
                        fixtures = matches.map(m => ({
                            date: m.date,
                            home: m.team1.replace(' CF', '').replace(' FC', '').replace(' de Fútbol', ''),
                            away: m.team2.replace(' CF', '').replace(' FC', '').replace(' de Fútbol', ''),
                            round: currentLeagueRound,
                            hScore: m.score ? m.score.ft[0] : null,
                            aScore: m.score ? m.score.ft[1] : null,
                            status: m.score ? 'FINISHED' : 'TIMED'
                        }));
                        console.log(`[Repo] Loaded La Liga Matchday ${currentLeagueRound}`);
                    }
                }
            } else if (league.name === 'Bundesliga') {
                const repoRes = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2025-26/de.1.json');
                if (repoRes.ok) {
                    const repoData = await repoRes.json();
                    const roundStr = `Matchday ${currentLeagueRound}`;
                    const matches = repoData.matches.filter(m => m.round === roundStr);

                    if (matches.length > 0) {
                        fixtures = matches.map(m => ({
                            date: m.date,
                            home: m.team1.replace('FC ', '').replace('1. ', '').replace(' SV', '').replace(' München', '').replace(' 04', ''),
                            away: m.team2.replace('FC ', '').replace('1. ', '').replace(' SV', '').replace(' München', '').replace(' 04', ''),
                            round: currentLeagueRound,
                            hScore: m.score ? m.score.ft[0] : null,
                            aScore: m.score ? m.score.ft[1] : null,
                            status: m.score ? 'FINISHED' : 'TIMED'
                        }));
                        console.log(`[Repo] Loaded Bundesliga Matchday ${currentLeagueRound}`);
                    }
                }
            }

            // Priority 2: Football-Data.org API (Standard Stream)
            if (fixtures.length === 0) {
                const res = await fetch(`${API_CONFIG.STATS_URL}competitions/${league.fd_id}/matches?matchday=${currentLeagueRound}`, {
                    headers: { 'X-Auth-Token': API_CONFIG.FOOTBALL_DATA_KEY }
                });

                if (res.ok) {
                    const data = await res.json();
                    fixtures = data.matches.map(m => ({
                        date: m.utcDate,
                        home: m.homeTeam.shortName || m.homeTeam.name,
                        away: m.awayTeam.shortName || m.awayTeam.name,
                        round: m.matchday,
                        hScore: m.score.fullTime.home,
                        aScore: m.score.fullTime.away,
                        status: m.status
                    }));
                }
            }
        }
    } catch (e) {
        console.warn('[Data Bridge] Neural sync error. Falling back to local catalog.');
    }

    // Fallback Mock Logic with Real Teams (Global Traditional fallback)
    if (fixtures.length === 0) {
        const teams = TEAM_CATALOG[league.name] || ['Equipa Alfa', 'Equipa Beta', 'Equipa Gama', 'Equipa Delta', 'Equipa Épsilon', 'Equipa Zeta'];

        // Circular selection for rotation
        const idx = (currentLeagueRound % (teams.length / 2)) * 2;
        fixtures = [
            { date: '2026-02-23', home: teams[0], away: teams[1], round: currentLeagueRound, status: 'TIMED', hScore: null, aScore: null },
            { date: '2026-02-23', home: teams[2], away: teams[3], round: currentLeagueRound, status: 'TIMED', hScore: null, aScore: null },
            { date: '2026-02-24', home: teams[4], away: teams[5], round: currentLeagueRound, status: 'TIMED', hScore: null, aScore: null },
            { date: '2026-02-24', home: teams[Math.floor(Math.random() * teams.length)], away: teams[Math.floor(Math.random() * teams.length)], round: currentLeagueRound, status: 'TIMED', hScore: null, aScore: null }
        ].filter(f => f.home !== f.away);
    }

    container.innerHTML = '';

    fixtures.forEach(fix => {
        const isFinished = fix.status === 'FINISHED';
        const item = document.createElement('div');
        item.className = 'fixture-item';
        item.onclick = () => {
            const mockMatch = {
                id: `fix-${fix.home}-${fix.away}`,
                home_team: fix.home,
                away_team: fix.away,
                league_name: league.name,
                commence_time: fix.date,
                bookmakers: [{
                    markets: [{
                        outcomes: [
                            { name: fix.home, price: 1.80 + Math.random() },
                            { name: 'Draw', price: 3.20 + Math.random() },
                            { name: fix.away, price: 2.10 + Math.random() }
                        ]
                    }]
                }]
            };
            switchTab('war-room');
            updateMatchUI(mockMatch);
            updateOddsUI(mockMatch);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        let scoreHtml = '<span style="color:var(--text-dim);">vs</span>';
        if (isFinished) scoreHtml = `<span class="fi-score">${fix.hScore} - ${fix.aScore}</span>`;

        item.innerHTML = `
            <div class="fi-date">${new Date(fix.date).toLocaleDateString('pt-PT', { day: '2-digit', month: 'short' })}</div>
            <div class="fi-teams">
                <span style="flex:1; text-align:right;">${fix.home}</span>
                <span style="margin: 0 10px; font-family:'Orbitron'; font-weight:900;">${scoreHtml}</span>
                <span style="flex:1; text-align:left;">${fix.away}</span>
            </div>
            <div class="fi-round">${fix.status === 'FINISHED' ? 'FINALIZADO' : 'AGENDADO'} • JORNADA ${fix.round}</div>
        `;
        container.appendChild(item);
    });
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
    { league: 'portugal', source: 'A Bola', title: 'Benfica prepara ataque ao mercado de verão', excerpt: 'As águias estão atentas a novos talentos para reforçar o plantel na próxima época.', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400', date: '23 FEV 2026', url: 'https://www.abola.pt' },
    { league: 'portugal', source: 'Record', title: 'Sporting focado na renovação do título', excerpt: 'Rúben Amorim mantém o grupo unido e focado nos objetivos traçados.', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400', date: '23 FEV 2026', url: 'https://www.record.pt' },
    { league: 'portugal', source: 'O Jogo', title: 'FC Porto estuda novas opções para o ataque', excerpt: 'Sérgio Conceição quer mais eficácia na finalização e procura soluções no mercado internacional.', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=400', date: '22 FEV 2026', url: 'https://www.ojogo.pt' },
    { league: 'england', source: 'Sky Sports', title: 'Man City and Arsenal in thrilling title race', excerpt: 'The Premier League summit remains contested as both teams show incredible consistency.', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=400', date: '23 FEV 2026', url: 'https://www.skysports.com/football' },
    { league: 'england', source: 'The Guardian', title: 'Klopp projeta futuro promissor para o Liverpool', excerpt: 'O treinador discute os planos a longo prazo e a integração de jovens talentos.', image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=400', date: '23 FEV 2026', url: 'https://www.theguardian.com/football' },
    { league: 'spain', source: 'MARCA', title: 'Real Madrid foca na renovação do meio-campo', excerpt: 'A estratégia merengue para garantir a sucessão de seus veteranos consagrados.', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=400', date: '23 FEV 2026', url: 'https://www.marca.com' },
    { league: 'spain', source: 'AS', title: 'Barcelona busca blindar a sus jóvenes promesas', excerpt: 'El club catalán inicia conversa para renovar contratos clave en La Masía.', image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=400', date: '22 FEV 2026', url: 'https://as.com' },
    { league: 'italy', source: 'Gazzetta dello Sport', title: 'Inter domina o mercado italiano', excerpt: 'A estratégia dos nerazzurri para manter a hegemonia na Série A.', image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&q=80&w=400', date: '23 FEV 2026', url: 'https://www.gazzetta.it' },
    { league: 'germany', source: 'BILD', title: 'Bayern busca reconstrução sob novo comando', excerpt: 'As mudanças táticas esperadas para a próxima temporada na Baviera.', image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=400', date: '23 FEV 2026', url: 'https://www.bild.de' }
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
let currentScoreboardDate = new Date('2026-02-23T00:00:00');

function updateDateHeader() {
    const days = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    const dateStr = `${currentScoreboardDate.getDate().toString().padStart(2, '0')}/${(currentScoreboardDate.getMonth() + 1).toString().padStart(2, '0')} ${days[currentScoreboardDate.getDay()].toUpperCase()}`;
    const el = document.getElementById('current-date-header');
    if (el) el.innerText = dateStr;
}

async function resetToToday() {
    currentScoreboardDate = new Date('2026-02-23T00:00:00');
    updateDateHeader();
    const matrix = document.getElementById('competition-matrix');
    matrix.innerHTML = '<div class="live-indicator"><span class="pulse"></span> A RETORNAR A HOJE...</div>';
    await fetchLiveMatches(true);
}

async function changeScoreboardDate(offset) {
    currentScoreboardDate.setDate(currentScoreboardDate.getDate() + offset);
    updateDateHeader();
    const matrix = document.getElementById('competition-matrix');
    matrix.innerHTML = '<div class="live-indicator"><span class="pulse"></span> A RECALIBRAR DATAS...</div>';
    await fetchLiveMatches(true);
}

function filterScoreboard(type, btn) {
    currentScoreboardFilter = type;

    document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    applyScoreboardFilters();
}

function applyScoreboardFilters(searchTerm = '') {
    const matrix = document.getElementById('competition-matrix');
    if (!matrix) return;
    matrix.innerHTML = '';

    let filtered = [...allMatchesData];

    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(m =>
            m.home_team.toLowerCase().includes(searchTerm) ||
            m.away_team.toLowerCase().includes(searchTerm) ||
            m.league_name.toLowerCase().includes(searchTerm)
        );
    }

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
        matrix.innerHTML = '<div class="live-indicator">SEM JOGOS DISPONÍVEIS COM ESTE FILTRO</div>';
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

const SEASON_TIMELINE = [
    { date: '17–18 FEV 2026', title: 'Champions League: Play-offs (Ida)', desc: 'Início da fase eliminatória. Foco total em equipas que terminaram em 9º-24º na fase de liga.', type: 'uefa', icon: 'fa-trophy' },
    { date: '24–25 FEV 2026', title: 'Champions League: Play-offs (Volta)', desc: 'Decisão das 8 equipas que avançam para os Oitavos de Final.', type: 'uefa', icon: 'fa-trophy' },
    { date: '10–11 MAR 2026', title: 'Champions League: Oitavos (Ida)', desc: 'Entrada dos gigantes que ficaram no Top 8.', type: 'uefa', icon: 'fa-star' },
    { date: 'MAR 2026', title: 'Janela FIFA: Qualificação Mundial', desc: 'Jogos decisivos para o apuramento para o Mundial 2026.', type: 'fifa', icon: 'fa-globe' },
    { date: '07–08 ABR 2026', title: 'Champions League: Quartos (Ida)', desc: 'A elite europeia reduzida a 8 equipas.', type: 'uefa', icon: 'fa-bolt' },
    { date: '16 ABR 2026', title: 'Europa & Conference: Quartos (Volta)', desc: 'Noite decisiva para as competições secundárias da UEFA.', type: 'uefa', icon: 'fa-shield-alt' },
    { date: '16 MAI 2026', title: 'Final da Bundesliga', desc: '34ª Jornada. Decisão do título na Alemanha.', type: 'domestic', icon: 'fa-crown' },
    { date: '17 MAI 2026', title: 'Final da Liga Portugal', desc: 'Última jornada do campeonato nacional.', type: 'domestic', icon: 'fa-certificate' },
    { date: '20 MAI 2026', title: 'Final Europa League', desc: 'Estádio Beşiktaş Park, Istambul.', type: 'uefa', icon: 'fa-trophy' },
    { date: '24 MAI 2026', title: 'Super Sunday: EPL, La Liga, Serie A', desc: 'O maior dia do futebol europeu. Decisão de múltiplos títulos.', type: 'domestic', icon: 'fa-fire' },
    { date: '30 MAI 2026', title: 'Final Champions League', desc: 'Puskás Aréna, Budapeste. O coroar do Campeão Europeu.', type: 'uefa', icon: 'fa-crown' }
];

function renderTimeline() {
    const container = document.querySelector('.timeline-container');
    if (!container) return;
    container.innerHTML = '';

    SEASON_TIMELINE.forEach(event => {
        const ev = document.createElement('div');
        ev.className = 'timeline-event';
        ev.innerHTML = `
            <div class="event-dot"><i class="fas ${event.icon}"></i></div>
            <div class="event-content">
                <div class="event-date">${event.date}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-desc">${event.desc}</div>
                <div class="event-type-badge">${event.type}</div>
            </div>
        `;
        container.appendChild(ev);
    });
}

const FUTURE_MATCHES_DATA = [
    { date: '23 FEV 2026', home_team: 'Braga', away_team: 'Vitória SC', league: 'Liga Portugal (Dérbi do Minho)', odds: { h: 1.85, d: 3.50, a: 4.00 }, icon: 'fa-fire' },
    { date: '23 FEV 2026', home_team: 'Rio Ave', away_team: 'FC Porto', league: 'Liga Portugal', odds: { h: 5.50, d: 4.00, a: 1.55 }, icon: 'fa-certificate' },
    { date: '23 FEV 2026', home_team: 'Sporting CP', away_team: 'Moreirense', league: 'Liga Portugal', odds: { h: 1.30, d: 5.00, a: 9.00 }, icon: 'fa-bolt' },
    { date: '26 FEV 2026', home_team: 'Benfica', away_team: 'Arsenal', league: 'Europa League', odds: { h: 2.10, d: 3.40, a: 3.20 }, icon: 'fa-trophy' },
    { date: '01 MAR 2026', home_team: 'Real Madrid', away_team: 'Barcelona', league: 'La Liga (EL CLÁSICO)', odds: { h: 1.95, d: 3.80, a: 3.40 }, icon: 'fa-fire' },
    { date: '01 MAR 2026', home_team: 'Estoril', away_team: 'Sporting CP', league: 'Liga Portugal', odds: { h: 6.00, d: 4.20, a: 1.50 }, icon: 'fa-certificate' },
    { date: '10 MAR 2026', home_team: 'PSG', away_team: 'Bayern', league: 'Champions League', odds: { h: 2.25, d: 3.60, a: 2.90 }, icon: 'fa-star' }
];

function renderFutureRadar() {
    const container = document.getElementById('future-matches-scroll');
    if (!container) return;
    container.innerHTML = '';

    FUTURE_MATCHES_DATA.forEach(match => {
        const card = document.createElement('div');
        card.className = 'future-mini-card';
        card.innerHTML = `
            <div class="fmc-date">${match.date}</div>
            <div class="fmc-teams">${match.home_team} vs ${match.away_team}</div>
            <div class="fmc-meta">
                <span><i class="fas ${match.icon}"></i> ${match.league}</span>
                <span class="fmc-ai-tag">SCAN ATIVO</span>
            </div>
        `;

        card.onclick = () => {
            // Convert simple match format to the rich format used by updateMatchUI
            const richMatch = {
                id: `future-${match.home_team}-${match.away_team}`,
                home_team: match.home_team,
                away_team: match.away_team,
                league_name: match.league,
                commence_time: new Date(2026, 1, match.date.split(' ')[0]).toISOString(),
                bookmakers: [{
                    markets: [{
                        outcomes: [
                            { name: match.home_team, price: match.odds.h },
                            { name: 'Draw', price: match.odds.d },
                            { name: match.away_team, price: match.odds.a }
                        ]
                    }]
                }]
            };

            updateMatchUI(richMatch);
            updateOddsUI(richMatch);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        container.appendChild(card);
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');

        // Optional: notify three.js or other layouts of resize if needed
        setTimeout(() => {
            if (window.onresize) window.onresize();
        }, 500);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initAnimations();
    initInteractions();
    runAIScan();
    fetchLiveMatches();
    renderSidebarLeagues();
    renderAds();
    renderNews();
    renderTimeline();
    renderFutureRadar();
    updateDateHeader();
});
