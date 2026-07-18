// Initial Data Structure
const defaultData = {
    skills: [
        { name: 'Excel for Ag', progress: 80, category: 'Data' },
        { name: 'SQL/BigQuery', progress: 40, category: 'Data' },
        { name: 'Python (NumPy/Pandas)', progress: 20, category: 'AI' },
        { name: 'Power BI', progress: 50, category: 'Data' },
        { name: 'German (A1-B1)', progress: 10, category: 'Language' },
        { name: 'GIS/Remote Sensing', progress: 5, category: 'AgTech' }
    ],
    unis: [
        { name: 'TU Munich', status: 'Researching', country: 'Germany' },
        { name: 'Wageningen', status: 'Target', country: 'Netherlands' },
        { name: 'Bologna', status: 'Target', country: 'Italy' },
        { name: 'Hohenheim', status: 'Top Priority', country: 'Germany' }
    ],
    scholarships: [
        { name: 'DAAD EPOS', status: 'Pending' },
        { name: 'Erasmus Mundus', status: 'Not Started' }
    ],
    vocab: [],
    ideas: [],
    sop: "",
    streak: 5
};

let appData = JSON.parse(localStorage.getItem('agtechData')) || defaultData;

function saveData() {
    localStorage.setItem('agtechData', JSON.stringify(appData));
    renderAll();
}

// Navigation Logic
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Render Functions
function renderAll() {
    renderDashboard();
    renderSkills();
    renderUnis();
    renderVocab();
}

function renderDashboard() {
    const avg = Math.round(appData.skills.reduce((a, b) => a + b.progress, 0) / appData.skills.length);
    document.getElementById('overall-progress').innerText = avg + "%";
    document.getElementById('streak-val').innerText = appData.streak + " Days";
}

function renderSkills() {
    const list = document.getElementById('skills-list');
    list.innerHTML = appData.skills.map((s, i) => `
        <div class="item-card">
            <div>
                <strong>${s.name}</strong>
                <input type="range" value="${s.progress}" onchange="updateSkill(${i}, this.value)">
            </div>
            <span>${s.progress}%</span>
        </div>
    `).join('');
}

function updateSkill(index, val) {
    appData.skills[index].progress = parseInt(val);
    saveData();
}

function renderUnis() {
    const list = document.getElementById('uni-list');
    list.innerHTML = appData.unis.map(u => `
        <div class="item-card">
            <span>${u.name} (${u.country})</span>
            <small>${u.status}</small>
        </div>
    `).join('');
}

function addVocab() {
    const de = document.getElementById('vocab-de').value;
    const en = document.getElementById('vocab-en').value;
    if(de && en) {
        appData.vocab.push({ de, en });
        document.getElementById('vocab-de').value = '';
        document.getElementById('vocab-en').value = '';
        saveData();
    }
}

function renderVocab() {
    const list = document.getElementById('vocab-list');
    list.innerHTML = appData.vocab.slice(-5).map(v => `
        <div style="font-size:0.9rem; padding:5px; border-bottom:1px solid #333">
            <b>${v.de}</b>: ${v.en}
        </div>
    `).join('');
}

function saveSOP() {
    appData.sop = document.getElementById('sop-content').value;
    saveData();
    alert("SOP Draft Saved Locally!");
}

// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Initialize
renderAll();
document.getElementById('sop-content').value = appData.sop;