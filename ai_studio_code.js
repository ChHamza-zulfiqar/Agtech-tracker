const agTechRoadmap = [
  {
    phase: "Phase 1: Data Analytics Foundation (Next 2–3 Months)",
    topics: [
      {
        name: "Excel Masterclass",
        instructor: "Leila Gharani",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Excel for Beginners Course", url: "https://youtube.com" },
          { title: "Pivot Tables & Data Analysis Techniques", url: "https://youtube.com" }
        ]
      },
      {
        name: "SQL Database Core",
        instructor: "Alex The Analyst",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "SQL Full Playlist Tutorial", url: "https://youtube.com" },
          { title: "Practice Platform: SQLBolt Sandbox", url: "https://sqlbolt.com" },
          { title: "Advanced Theory: Mode SQL Tutorial", url: "https://mode.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 2: Power BI (Months 2–4)",
    topics: [
      {
        name: "Power BI Engine Architecture",
        instructor: "Pragmatic Works & Guy in a Cube",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Pragmatic Works Dashboard Training", url: "https://youtube.com" },
          { title: "Guy in a Cube Technical Strategy", url: "https://youtube.com" }
        ],
        milestones: ["Crop Yield Dashboard Setup", "Rainfall Analytics", "Agriculture Market Dashboard"]
      }
    ]
  },
  {
    phase: "Phase 3: AI Fundamentals (Months 3–5)",
    topics: [
      {
        name: "AI-900 Certification Track",
        instructor: "Microsoft Learn & DeepLearning.AI",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Official Microsoft AI-900 Pathway Portal", url: "https://microsoft.com" },
          { title: "Andrew Ng DeepLearning.AI Semantics", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 4: Python Programming (Months 4–6)",
    topics: [
      {
        name: "Python Core Scripts",
        instructor: "freeCodeCamp & Corey Schafer",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "Corey Schafer Object-Oriented Framework", url: "https://youtube.com" },
          { title: "freeCodeCamp Data Structures Guide", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 5: Digital Agriculture & AgTech Systems",
    topics: [
      {
        name: "Global Agricultural Operations",
        instructor: "CGIAR & FAO Systems",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "CGIAR Climate Resilience Solutions", url: "https://youtube.com" },
          { title: "FAO International Trade & Food Systems", url: "https://youtube.com" },
          { title: "IRRI Smart Farming Research Projects", url: "https://youtube.com" },
          { title: "CIMMYT Sustainability Standards", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 6: Remote Sensing & GIS Integration",
    topics: [
      {
        name: "QGIS Satellite Mapping Engine",
        instructor: "GeoDelta Labs & Open Source Options",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "GeoDelta Labs Remote Sensing Tracks", url: "https://youtube.com" },
          { title: "NDVI Indexing & Crop Monitoring Tutorials", url: "https://youtube.com" }
        ]
      }
    ]
  },
  {
    phase: "Phase 7: AI in Agriculture (The Golden Intersection)",
    topics: [
      {
        name: "Precision Farming Frontiers",
        instructor: "Wageningen University & Research",
        channelUrl: "https://youtube.com",
        resources: [
          { title: "WUR Smart Farming Systems Seminars", url: "https://youtube.com" },
          { title: "Digital Agriculture Global Frameworks", url: "https://youtube.com" }
        ]
      }
    ]
  }
];

function loadResourceLibrary() {
  const container = document.getElementById('resource-library-container');
  if(!container) return;
  
  container.innerHTML = agTechRoadmap.map(phase => `
    <div class="phase-card">
      <h2>${phase.phase}</h2>
      ${phase.topics.map(topic => `
        <div class="topic-block">
          <h3>${topic.name} <small>by <a href="${topic.channelUrl}" target="_blank">Channel Link</a></small></h3>
          <ul>
            ${topic.resources.map(res => `
              <li><a href="${res.url}" target="_blank" rel="noopener">${res.title}</a></li>
            `).join('')}
          </ul>
          ${topic.milestones ? `<h4>Milestones To Complete:</h4><ul>${topic.milestones.map(m => `<li>🎯 ${m}</li>`).join('')}</ul>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  loadResourceLibrary();
});
