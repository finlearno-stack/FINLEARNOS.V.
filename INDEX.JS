/* ========== INTRO ANIMATION ========== */
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (3 + Math.random() * 3) + 's';
        container.appendChild(particle);
    }
}

function hideIntro() {
    const intro = document.getElementById('introScreen');
    const main = document.getElementById('mainWebsite');
    if (intro && main) {
        intro.classList.add('hide');
        main.classList.add('show');
    }
}

// ========== PAGE NAVIGATION ==========
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page)?.classList.add('active');
    document.querySelectorAll('.nav-link, .mob-nav-item').forEach(l => {
        l.classList.toggle('active', l.dataset.page === page);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== SIP CALCULATOR ==========
function calculateSIP() {
    const P = parseFloat(document.getElementById('sipAmount')?.value) || 5000;
    const r = (parseFloat(document.getElementById('sipRate')?.value) || 12) / 12 / 100;
    const n = (parseInt(document.getElementById('sipYears')?.value) || 10) * 12;
    
    const FV = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = P * n;
    const returns = FV - invested;
    
    const fmt = num => '₹' + Math.round(num).toLocaleString('en-IN');
    
    document.getElementById('resYears').textContent = n / 12;
    document.getElementById('totalWealth').textContent = fmt(FV);
    document.getElementById('invested').textContent = fmt(invested);
    document.getElementById('returns').textContent = fmt(returns);
}

function setupCalc() {
    ['sipAmount', 'sipRate', 'sipYears'].forEach((id, i) => {
        const input = document.getElementById(id);
        const slider = document.getElementById('sipSlider' + (i + 1));
        if (input && slider) {
            input.oninput = () => { slider.value = input.value; calculateSIP(); };
            slider.oninput = () => { input.value = slider.value; calculateSIP(); };
        }
    });
}

// ========== TIMER ==========
function updateTimer() {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const diff = end - now;
    
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

// ========== LIVE COUNTERS ==========
function updateLive() {
    document.getElementById('liveUsers').textContent = 800 + Math.floor(Math.random() * 150);
    document.getElementById('todayJoins').textContent = 140 + Math.floor(Math.random() * 40);
}

// ========== MARKET DATA ==========
function updateMarket() {
    const update = (id, base, range) => {
        const change = (Math.random() - 0.5) * range;
        const price = base + change;
        const pct = (change / base * 100).toFixed(2);
        const isUp = change >= 0;
        
        const priceEl = document.getElementById(id + 'Price');
        const changeEl = document.getElementById(id + 'Change');
        
        if (priceEl) priceEl.textContent = price.toFixed(2);
        if (changeEl) {
            changeEl.textContent = `${isUp ? '+' : ''}${change.toFixed(2)} (${isUp ? '+' : ''}${pct}%)`;
            changeEl.className = 'market-change ' + (isUp ? 'green' : 'red');
        }
    };
    
    update('nifty', 22456.80, 100);
    update('sensex', 73852.45, 300);
    update('bank', 48234.55, 150);
}

// ========== TOAST ==========
const activities = [
    { name: 'Rahul K.', action: 'Pro Premium liya', loc: 'Mumbai', init: 'RK' },
    { name: 'Priya S.', action: 'Basic join kiya', loc: 'Delhi', init: 'PS' },
    { name: 'Amit V.', action: 'Pro upgrade kiya', loc: 'Bangalore', init: 'AV' },
    { name: 'Sneha M.', action: 'Basic liya', loc: 'Pune', init: 'SM' },
    { name: 'Vikash G.', action: 'Pro Premium liya', loc: 'Lucknow', init: 'VG' },
    { name: 'Neha K.', action: 'Basic join kiya', loc: 'Jaipur', init: 'NK' },
    { name: 'Rohan P.', action: 'Pro liya', loc: 'Chennai', init: 'RP' },
    { name: 'Kavita R.', action: 'Basic liya', loc: 'Ahmedabad', init: 'KR' }
];

let toastTimer;
function showToast() {
    const a = activities[Math.floor(Math.random() * activities.length)];
    const times = ['Just now', '1 min pehle', '2 min pehle', '3 min pehle'];
    
    document.getElementById('toastAvatar').textContent = a.init;
    document.getElementById('toastTitle').textContent = `${a.name} ne ${a.action}!`;
    document.getElementById('toastTime').textContent = `${times[Math.floor(Math.random() * times.length)]} • ${a.loc}`;
    
    const toast = document.getElementById('liveToast');
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 5000);
}

function hideToast() {
    document.getElementById('liveToast').classList.remove('show');
}

// ========== SCROLL PROGRESS ==========
function updateScroll() {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('scrollProgress').style.width = (height > 0 ? (scroll / height) * 100 : 0) + '%';
}

// ========== MODAL ==========
const modals = {
    about: { icon: 'fa-info-circle', title: 'About FINLEARN', content: 'FINLEARN India ka #1 Hinglish finance education platform hai. Simple language me financial literacy for everyone.' },
    privacy: { icon: 'fa-shield-alt', title: 'Privacy Policy', content: 'Aapka data safe hai humare paas. Payments Razorpay handle karta hai - 100% secure.' },
    terms: { icon: 'fa-file-contract', title: 'Terms & Conditions', content: 'Ye platform educational purpose ke liye hai. Investment decisions aapki responsibility hai.' },
    disclaimer: { icon: 'fa-exclamation-triangle', title: 'Disclaimer', content: '⚠️ Market investments risky hain. Ye educational content hai, investment advice nahi. Advisor se consult karo.' }
};

function showModal(type) {
    const m = modals[type];
    document.getElementById('modalIcon').innerHTML = `<i class="fas ${m.icon}"></i>`;
    document.getElementById('modalTitle').textContent = m.title;
    document.getElementById('modalContent').textContent = m.content;
    document.getElementById('modal').classList.add('show');
}

function closeModal(e) {
    if (!e || e.target.id === 'modal') document.getElementById('modal').classList.remove('show');
}

// ========== CONTACT FORM ==========
function setupForm() {
    document.getElementById('contactForm')?.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('message').value;
        
        window.open(`mailto:finlearno@gmail.com?subject=FINLEARN: ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`)}`);
        alert(`Dhanyawad ${name}! 🙏 Hum jaldi reply karenge.`);
        e.target.reset();
    });
}

// ========== TOTAL USERS INCREMENT ==========
let totalUsers = 12500;
function incUsers() {
    totalUsers += Math.floor(Math.random() * 3) + 1;
    const el = document.getElementById('totalUsers');
    if (el) el.textContent = totalUsers.toLocaleString('en-IN') + '+';
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setTimeout(hideIntro, 3000);
    
    setupCalc();
    calculateSIP();
    setupForm();
    
    updateTimer();
    setInterval(updateTimer, 1000);
    
    updateLive();
    setInterval(updateLive, 5000);
    
    updateMarket();
    setInterval(updateMarket, 3000);
    
    setTimeout(showToast, 5000);
    setInterval(showToast, 20000);
    
    setInterval(incUsers, 60000);
    
    window.addEventListener('scroll', updateScroll);
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });