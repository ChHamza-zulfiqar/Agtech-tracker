const agTechRoadmap = [
  {
    phase: "Phase 1: Data Analytics Foundation (Months 1–3)",
    topics: [
      {
        id: "t1_excel",
        name: "Excel Analytics",
        instructor: "Leila Gharani",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Excel for Beginners Core Course", url: "https://www.youtube.com/watch?v=0tdlR1rBwkM" },
          { title: "Pivot Tables & Advanced Functions", url: "https://www.youtube.com/watch?v=rro5t8eHXaY" }
        ]
      },
      {
        id: "t1_sql",
        name: "SQL Relational Systems",
        instructor: "Alex The Analyst",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "SQL Complete Beginner Playlist", url: "https://youtube.com" },
          { title: "Interactive Platform: SQLBolt Interactive", url: "https://sqlbolt.com" },
          { title: "Production Sandbox: Mode Analytics Tutorial", url: "https://mode.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 2: Power BI Visualization (Months 2–4)",
    topics: [
      {
        id: "t2_pbi",
        name: "Power BI Engine Architecture",
        instructor: "Pragmatic Works & Guy in a Cube",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Power BI Complete BootCamp Series", url: "https://youtube.com" },
          { title: "Guy in a Cube Dashboard Deployment Modules", url: "https://youtube.com" }
        ],
        milestones: ["Crop Yield Dashboard", "Rainfall Analytics", "Agriculture Market Dashboard"]
      }
    ]
  },
  {
    phase: "Phase 3: AI Core Systems Fundamentals (Months 3–5)",
    topics: [
      {
        id: "t3_ai900",
        name: "Microsoft AI-900 Validation Track",
        instructor: "Microsoft Learn & Andrew Ng",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Official Microsoft AI-900 Path Modules", url: "https://microsoft.com" },
          { title: "DeepLearning.AI Machine Learning Semantics", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 4: Python Programming Foundations (Months 4–6)",
    topics: [
      {
        id: "t4_python",
        name: "Python Automation Structures",
        instructor: "freeCodeCamp & Corey Schafer",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Corey Schafer Object-Oriented Frameworks", url: "https://youtube.com" },
          { title: "freeCodeCamp General Programming Sandbox", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 5: Digital Agriculture & AgTech Systems",
    topics: [
      {
        id: "t5_agtech",
        name: "Global Agricultural Innovation Networks",
        instructor: "CGIAR & FAO Networks",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "CGIAR Climate Resilience Systems Media", url: "https://youtube.com" },
          { title: "FAO Global Trade Systems Optimization Portal", url: "https://youtube.com" },
          { title: "IRRI Rice Ecosystem Architecture Research", url: "https://youtube.com" },
          { title: "CIMMYT Sustainability Innovations Frameworks", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 6: Remote Sensing & GIS Integration",
    topics: [
      {
        id: "t6_gis",
        name: "QGIS Mapping & Satellite Diagnostics",
        instructor: "GeoDelta Labs & Open Source Options",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "GeoDelta Labs Absolute Beginner Guide to QGIS", url: "https://youtube.com" },
          { title: "NDVI Indexing Analysis & Crop Monitoring", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 7: AI in Agriculture (The Golden Intersection)",
    topics: [
      {
        id: "t7_wageningen",
        name: "Precision Farming & Automation Infrastructure",
        instructor: "Wageningen University & Research",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "WUR Precision Smart Farming Technical Seminars", url: "https://youtube.com" },
          { title: "Digital Food Production Systems Roadmap", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 8: German Academic Language Engine (MSc Prep)",
    topics: [
      {
        id: "t8_german",
        name: "German A1-B2 Language Tracks",
        instructor: "Easy German & Goethe Institute Platforms",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Easy German Beginner Basics Series", url: "https://youtube.com" },
          { title: "Nicos Weg A1 Full Course (DW Learn German)", url: "https://youtube.com" },
          { title: "Goethe Institute Academic Linguistic Preparation", url: "https://goethe.de" }
        ]
      }
    ]
  }
];

function renderPipeline() {
    const container = document.getElementById('dynamic-pipeline-container');
    if (!container) return;

    container.innerHTML = agTechRoadmap.map((p, pIndex) => `
        <div class="phase-card">
            <h2 class="phase-title">${p.phase}</h2>
            ${p.topics.map((t, tIndex) => `
                <div class="topic-wrapper">
                    <div class="topic-header">
                        
                            <input type="checkbox" id="${t.id}" class="progress-checkbox" onchange="calculateMetrics()">
                            <h3 class="topic-title">${t.name}</h3>
                        </div>
                        <a href="${t.channelUrl}" target="_blank" rel="noopener" class="channel-anchor">📺 Visit Channel</a>
                    </div>
                    <ul class="resource-list">
                        ${t.resources.map(r => `
                            <li class="resource-item">
                                🔹 <a href="${r.url}" target="_blank" rel="noopener" class="resource-link">${r.title}</a>
                            </li>
                        `).join('')}
                    </ul>
                    ${t.milestones ? `
                        <div class="milestone-container">
                            ${t.milestones.map(m => `<span class="milestone-tag">🎯 ${m}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `).join('');

    loadSavedStates();
}

function calculateMetrics() {
    const checkboxes = document.querySelectorAll('.progress-checkbox');
    const total = checkboxes.length;
    let checkedCount = 0;
    
    let savedStateObject = {};

    checkboxes.forEach(box => {
        savedStateObject[box.id] = box.checked;
        if (box.checked) {
            checkedCount++;
        }
    });

    localStorage.setItem('agtech_progress_matrix', JSON.stringify(savedStateObject));

    const computedPercentage = total > 0 ? Math.round((checkedCount / total) * 100) : 0;

    document.getElementById('main-progress-bar').style.width = `${computedPercentage}%`;
    document.getElementById('progress-text-pct').innerText = `${computedPercentage}% Complete`;
    document.getElementById('progress-fraction').innerText = `${checkedCount}/${total} Completed`;
}

function loadSavedStates() {
    const rawMatrix = localStorage.getItem('agtech_progress_matrix');
    if (!rawMatrix) {
        calculateMetrics();
        return;
    }

    const stateMap = JSON.parse(rawMatrix);
    const checkboxes = document.querySelectorAll('.progress-checkbox');

    checkboxes.forEach(box => {
        if (stateMap[box.id] !== undefined) {
            box.checked = stateMap[box.id];
        }
    });

    calculateMetrics();
    trackStreak();
}

function trackStreak() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('agtech_last_visit_date');
    let streak = parseInt(localStorage.getItem('agtech_current_streak_val')) || 1;

    if (lastVisit && lastVisit !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastVisit === yesterday.toDateString()) {
            streak++;
        } else {
            streak = 1;
        }
    }
    localStorage.setItem('agtech_last_visit_date', today);
    localStorage.setItem('agtech_current_streak_val', streak);
    document.getElementById('streak-count').innerText = streak;
}

document.addEventListener("DOMContentLoaded", () => {
    renderPipeline();
});
