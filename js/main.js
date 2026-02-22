// GOLODDS Main Logic - API Configuration
const API_CONFIG = {
    FOOTBALL_DATA_KEY: '4a03e151af0446369dfac6c1088911b4',
    ODDS_API_KEY: 'b67e54e948f9f33d50930e9b19555271',
    BASE_URL: 'https://api.the-odds-api.com/v4/sports/',
    STATS_URL: 'https://api.football-data.org/v4/'
};

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
            btn.innerHTML = '<i class="fas fa-check"></i> SYNCED';
            btn.style.background = '#00e5ff';

            // Notification effect
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = 'SYNCING TO BETTING MATRIX...';
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
    const error = document.getElementById('admin-error');

    // Simple mock logic for preview
    if (user === "admin") {
        alert("WELCOME TO THE MATRIX, ADMIN. Loading Marketing Management...");
        window.location.reload(); // Simple mock refresh
    } else {
        error.style.display = 'block';
        gsap.to(".admin-modal", { x: [-10, 10, -10, 10, 0], duration: 0.4 });
    }
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
async function fetchLiveMatches() {
    const matrix = document.getElementById('competition-matrix');
    const leagues = [
        { key: 'soccer_epl', name: 'Premier League' },
        { key: 'soccer_uefa_champs_league', name: 'Champions League' },
        { key: 'soccer_spain_la_liga', name: 'La Liga' },
        { key: 'soccer_italy_serie_a', name: 'Serie A' },
        { key: 'soccer_portugal_primeira_liga', name: 'Liga Portugal' }
    ];

    matrix.innerHTML = '<div class="live-indicator"><span class="pulse"></span> INITIALIZING SECURE LINK...</div>';

    let dataFound = false;

    for (const league of leagues) {
        try {
            console.log(`MATRIX: Syncing ${league.name}...`);
            // Expanded bookmakers to ensure results
            const response = await fetch(`${API_CONFIG.BASE_URL}${league.key}/odds/?apiKey=${API_CONFIG.ODDS_API_KEY}&regions=eu&markets=h2h&bookmakers=bet365,pinnacle,williamhill,betfair_ex_eu`);

            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            const data = await response.json();

            if (data && data.length > 0) {
                if (!dataFound) matrix.innerHTML = '';
                renderLeagueSection(league.name, data);
                dataFound = true;

                if (!document.querySelector('.team-home h2')) {
                    updateMatchUI(data[0]);
                    updateOddsUI(data[0]);
                }
            }
        } catch (error) {
            console.error(`Error on ${league.name}:`, error);
        }
    }

    if (!dataFound) {
        console.warn("MATRIX: Entering SHADOW MODE (Fallback).");
        matrix.innerHTML = '<div style="text-align:center; padding: 20px; color: var(--accent-gold); border: 1px dashed var(--accent-gold); border-radius: 10px; margin: 20px;">' +
            '<i class="fas fa-exclamation-triangle"></i> SATELLITE LINK WEAK. LOADING SIMULATED NEURAL DATA...</div>';
        loadMockData();
    }
}

// Fallback logic for demo purposes if API fails
function loadMockData() {
    const mockMatches = [
        {
            home_team: 'Real Madrid', away_team: 'Man City',
            commence_time: new Date().toISOString(),
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Real Madrid', price: 2.1 }, { name: 'Draw', price: 3.4 }, { name: 'Man City', price: 3.1 }] }] }]
        },
        {
            home_team: 'Benfica', away_team: 'Porto',
            commence_time: new Date().toISOString(),
            bookmakers: [{ markets: [{ outcomes: [{ name: 'Benfica', price: 1.95 }, { name: 'Draw', price: 3.2 }, { name: 'Porto', price: 3.8 }] }] }]
        }
    ];
    renderLeagueSection('Simulated Projections', mockMatches);
    updateMatchUI(mockMatches[0]);
    updateOddsUI(mockMatches[0]);
}

function renderLeagueSection(name, matches) {
    const matrix = document.getElementById('competition-matrix');

    const section = document.createElement('div');
    section.className = 'league-section';
    section.innerHTML = `<h3 class="league-title">${name}</h3>`;

    const grid = document.createElement('div');
    grid.className = 'match-grid';

    matches.forEach(match => {
        const bookmaker = match.bookmakers[0];
        if (!bookmaker) return;
        const market = bookmaker.markets[0];
        const outcomes = market ? market.outcomes : [];

        const card = document.createElement('div');
        card.className = 'mini-match-card';
        card.onclick = () => {
            updateMatchUI(match);
            updateOddsUI(match);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        card.innerHTML = `
            <div class="mini-match-header">
                <span>COMMENCING: ${new Date(match.commence_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <span class="badge">LIVE DATA</span>
            </div>
            <div class="mini-vs">
                <div class="mini-team">
                    <img src="https://ui-avatars.com/api/?name=${match.home_team}&background=random" class="mini-crest">
                    <span>${match.home_team}</span>
                </div>
                <div class="vs-text" style="font-size: 14px;">VS</div>
                <div class="mini-team">
                    <img src="https://ui-avatars.com/api/?name=${match.away_team}&background=random" class="mini-crest">
                    <span>${match.away_team}</span>
                </div>
            </div>
            <div class="mini-odds">
                ${outcomes.map(o => `
                    <div class="mini-odd">
                        <label>${o.name}</label>
                        <span class="val">${o.price.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
        `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    matrix.appendChild(section);
}

async function updateMatchUI(match) {
    const vsContainer = document.querySelector('.vs-container');

    vsContainer.innerHTML = `
        <div class="team team-home">
            <div class="crest-container">
                <img src="https://ui-avatars.com/api/?name=${match.home_team}&background=random" class="team-crest">
                <div class="scan-line"></div>
            </div>
            <h2>${match.home_team.toUpperCase()}</h2>
            <div class="form">NEURAL SCAN: ACTIVE</div>
        </div>
        <div class="vs-text">VS</div>
        <div class="team team-away">
            <div class="crest-container">
                <img src="https://ui-avatars.com/api/?name=${match.away_team}&background=random" class="team-crest">
                <div class="scan-line"></div>
            </div>
            <h2>${match.away_team.toUpperCase()}</h2>
            <div class="form">NEURAL SCAN: ACTIVE</div>
        </div>
    `;

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
            ${isValue ? '<span class="ai-badge"><i class="fas fa-microchip"></i> HIGH VALUE DETECTED</span>' : ''}
            <div class="market">${outcome.name.toUpperCase()}</div>
            <div class="prob">${outcome.price.toFixed(2)}</div>
            <div class="ev">${isValue ? '+18.4% EV' : '+2.1% EV'}</div>
            <div class="action-btn">LOCK IN</div>
        `;
        oddsList.appendChild(item);
    });

    initInteractions();
    runAIScan();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initAnimations();
    initInteractions();
    runAIScan();
    fetchLiveMatches();
});
