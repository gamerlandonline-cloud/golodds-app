// GOLODDS Main Logic - API Configuration
const API_CONFIG = {
    FOOTBALL_DATA_KEY: '',
    ODDS_API_KEY: 'b67e54e948f9f33d50930e9b19555271',
    BASE_URL: 'https://api.the-odds-api.com/v4/sports/'
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
    const matchContainer = document.querySelector('.vs-container');

    // UI Feedback: Connecting
    console.log("MATRIX: Analysing live feeds...");

    try {
        // Fetching soccer matches (upcoming) for major leagues
        // We use 'soccer_uefa_champions_league' as a target, or just 'soccer' for general
        const response = await fetch(`${API_CONFIG.BASE_URL}soccer/odds/?apiKey=${API_CONFIG.ODDS_API_KEY}&regions=eu&markets=h2h&bookmakers=bet365`);
        const data = await response.json();

        if (data && data.length > 0) {
            // Pick a match that has odds
            const match = data.find(m => m.bookmakers && m.bookmakers.length > 0) || data[0];
            updateMatchUI(match);
            updateOddsUI(match);
        } else {
            console.warn("No active matches found in the stream.");
        }

    } catch (error) {
        console.error("Link Terminado: Erro na Matrix de dados", error);
    }
}

function updateMatchUI(match) {
    const homeTeam = document.querySelector('.team-home h2');
    const awayTeam = document.querySelector('.team-away h2');
    const vsContainer = document.querySelector('.vs-container');

    // Restore the VS structure if it was overwritten by the loader
    vsContainer.innerHTML = `
        <div class="team team-home">
            <img src="https://ui-avatars.com/api/?name=${match.home_team}&background=random" class="team-crest" alt="${match.home_team}">
            <h2>${match.home_team.toUpperCase()}</h2>
            <div class="form">ANALYSIS PENDING...</div>
        </div>
        <div class="vs-text">VS</div>
        <div class="team team-away">
            <img src="https://ui-avatars.com/api/?name=${match.away_team}&background=random" class="team-crest" alt="${match.away_team}">
            <h2>${match.away_team.toUpperCase()}</h2>
            <div class="form">ANALYSIS PENDING...</div>
        </div>
    `;
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
        // Simple AI logic: high price (low probability) is marked as a potential "Value" play by the simulated engine
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

    // Re-trigger interactions and AI pulse effect
    initInteractions();
    runAIScan();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    initAnimations();
    initInteractions();
    runAIScan();
    fetchLiveMatches(); // Inicia a conexão com os dados
});
