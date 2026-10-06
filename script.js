// Array containing exactly 101 sequential cosmic destinations away from Earth
const completeCosmicMap = [
    { name: "Earth", icon: "🌍", distance: "Starting Point", type: "major" },
    { name: "Moon Orbit", icon: "⭐", distance: "384,400 km", type: "mini" },
    { name: "Venus", icon: "🪐", distance: "39.79 Million km", type: "major" },
    { name: "Mars", icon: "🔴", distance: "55.65 Million km", type: "major" },
    { name: "Mercury", icon: "🪨", distance: "82.5 Million km", type: "major" },
    { name: "Sun's Heliosphere", icon: "⭐", distance: "149.6 Million km", type: "mini" },
    { name: "Asteroid Belt", icon: "⭐", distance: "400 Million km", type: "mini" },
    { name: "Jupiter", icon: "🟠", distance: "591.97 Million km", type: "major" },
    { name: "Saturn", icon: "🪐", distance: "1,204.28 Million km", type: "major" },
    { name: "Uranus", icon: "🔷", distance: "2,586.88 Million km", type: "major" },
    { name: "Neptune", icon: "🔵", distance: "4,311.02 Million km", type: "major" },
    { name: "Kuiper Belt", icon: "⭐", distance: "50 AU", type: "mini" },
    { name: "Oort Cloud Edge", icon: "⭐", distance: "1,000 AU", type: "mini" },
    { name: "Voyager 1 Limit", icon: "⭐", distance: "162 AU", type: "mini" },
    { name: "Interstellar Space", icon: "⭐", distance: "0.03 Light Years", type: "mini" },
    { name: "Proxima Centauri", icon: "✨", distance: "4.24 Light Years", type: "major" },
    { name: "Alpha Centauri A", icon: "⭐", distance: "4.34 Light Years", type: "mini" },
    { name: "Alpha Centauri B", icon: "⭐", distance: "4.37 Light Years", type: "mini" },
    { name: "Barnard's Star", icon: "⭐", distance: "5.96 Light Years", type: "mini" },
    { name: "Luhman 16A", icon: "⭐", distance: "6.51 Light Years", type: "mini" },
    { name: "Luhman 16B", icon: "⭐", distance: "6.52 Light Years", type: "mini" },
    { name: "WISE 0855-0714", icon: "⭐", distance: "7.26 Light Years", type: "mini" },
    { name: "Wolf 359", icon: "⭐", distance: "7.78 Light Years", type: "mini" },
    { name: "Lalande 21185", icon: "⭐", distance: "8.29 Light Years", type: "mini" },
    { name: "Sirius A (Dog Star)", icon: "🌟", distance: "8.60 Light Years", type: "major" },
    { name: "Sirius B", icon: "⭐", distance: "8.66 Light Years", type: "mini" },
    { name: "Luyten 726-8 A", icon: "⭐", distance: "8.73 Light Years", type: "mini" },
    { name: "Luyten 726-8 B", icon: "⭐", distance: "8.75 Light Years", type: "mini" },
    { name: "Ross 154", icon: "⭐", distance: "9.68 Light Years", type: "mini" },
    { name: "Ross 248", icon: "⭐", distance: "10.32 Light Years", type: "mini" },
    { name: "Epsilon Eridani", icon: "🪐", distance: "10.50 Light Years", type: "major" },
    { name: "Lacaille 9352", icon: "⭐", distance: "10.74 Light Years", type: "mini" },
    { name: "Ross 128", icon: "⭐", distance: "11.03 Light Years", type: "mini" },
    { name: "Luyten 789-6", icon: "⭐", distance: "11.12 Light Years", type: "mini" },
    { name: "Groombridge 34 A", icon: "⭐", distance: "11.62 Light Years", type: "mini" },
    { name: "Groombridge 34 B", icon: "⭐", distance: "11.64 Light Years", type: "mini" },
    { name: "Epsilon Indi A", icon: "⭐", distance: "11.82 Light Years", type: "mini" },
    { name: "Tau Ceti", icon: "⭐", distance: "11.88 Light Years", type: "mini" },
    { name: "Procyon A", icon: "🌟", distance: "11.41 Light Years", type: "major" },
    { name: "Procyon B", icon: "⭐", distance: "11.46 Light Years", type: "mini" },
    { name: "DX Cancri", icon: "⭐", distance: "11.82 Light Years", type: "mini" },
    { name: "YZ Ceti", icon: "⭐", distance: "12.11 Light Years", type: "mini" },
    { name: "Luyten's Star", icon: "⭐", distance: "12.20 Light Years", type: "mini" },
    { name: "Kapteyn's Star", icon: "⭐", distance: "12.76 Light Years", type: "mini" },
    { name: "Lacaille 8760", icon: "⭐", distance: "12.87 Light Years", type: "mini" },
    { name: "Kruger 60 A", icon: "⭐", distance: "13.14 Light Years", type: "mini" },
    { name: "Kruger 60 B", icon: "⭐", distance: "13.19 Light Years", type: "mini" },
    { name: "Ross 614 A", icon: "⭐", distance: "13.34 Light Years", type: "mini" },
    { name: "Gliese 1", icon: "⭐", distance: "14.22 Light Years", type: "mini" },
    { name: "Wolf 424 A", icon: "⭐", distance: "14.31 Light Years", type: "mini" },
    { name: "Gliese 687", icon: "⭐", distance: "14.77 Light Years", type: "mini" },
    { name: "Gliese 674", icon: "⭐", distance: "14.80 Light Years", type: "mini" },
    { name: "Gliese 876", icon: "⭐", distance: "15.24 Light Years", type: "mini" },
    { name: "Altair", icon: "🌟", distance: "16.73 Light Years", type: "major" },
    { name: "Gliese 581", icon: "⭐", distance: "20.33 Light Years", type: "mini" },
    { name: "Fomalhaut", icon: "⭐", distance: "25.13 Light Years", type: "mini" },
    { name: "Vega", icon: "🌟", distance: "25.04 Light Years", type: "major" },
    { name: "Pollux", icon: "⭐", distance: "33.78 Light Years", type: "mini" },
    { name: "Arcturus", icon: "🌟", distance: "36.66 Light Years", type: "major" },
    { name: "Capella", icon: "⭐", distance: "42.79 Light Years", type: "mini" },
    { name: "Aldebaran", icon: "⭐", distance: "65.23 Light Years", type: "mini" },
    { name: "Regulus", icon: "⭐", distance: "79.31 Light Years", type: "mini" },
    { name: "Algol", icon: "⭐", distance: "92.81 Light Years", type: "mini" },
    { name: "Castor", icon: "⭐", distance: "51.56 Light Years", type: "mini" },
    { name: "Mizar", icon: "⭐", distance: "82.89 Light Years", type: "mini" },
    { name: "Alcor", icon: "⭐", distance: "81.65 Light Years", type: "mini" },
    { name: "Polaris (North Star)", icon: "👑", distance: "433 Light Years", type: "major" },
    { name: "Betelgeuse", icon: "🌟", distance: "642.5 Light Years", type: "major" },
    { name: "Rigel", icon: "⭐", distance: "860 Light Years", type: "mini" },
    { name: "Antares", icon: "⭐", distance: "550 Light Years", type: "mini" },
    { name: "Deneb", icon: "⭐", distance: "2,615 Light Years", type: "mini" },
    { name: "Canopus", icon: "⭐", distance: "310 Light Years", type: "mini" },
    { name: "Pleiades Cluster", icon: "✨", distance: "444 Light Years", type: "major" },
    { name: "Orion Nebula", icon: "⭐", distance: "1,344 Light Years", type: "mini" },
    { name: "Crab Nebula", icon: "⭐", distance: "6,523 Light Years", type: "mini" },
    { name: "Kepler-22 System", icon: "🪐", distance: "635 Light Years", type: "mini" },
    { name: "TRAPPIST-1 System", icon: "⭐", distance: "40.66 Light Years", type: "mini" },
    { name: "Pistol Star", icon: "⭐", distance: "25,000 Light Years", type: "mini" },
    { name: "Sagittarius A*", icon: "🕳️", distance: "26,670 Light Years", type: "major" },
    { name: "Omega Centauri", icon: "⭐", distance: "15,800 Light Years", type: "mini" },
    { name: "Large Magellanic Cloud", icon: "🌌", distance: "163,000 Light Years", type: "major" },
    { name: "Small Magellanic Cloud", icon: "⭐", distance: "200,000 Light Years", type: "mini" },
    { name: "Andromeda Galaxy", icon: "🌌", distance: "2.53 Million Light Years", type: "major" },
    { name: "Triangulum Galaxy", icon: "⭐", distance: "3.20 Million Light Years", type: "mini" },
    { name: "Whirlpool Galaxy", icon: "⭐", distance: "23 Million Light Years", type: "mini" },
    { name: "Sombrero Galaxy", icon: "⭐", distance: "28 Million Light Years", type: "mini" },
    { name: "Virgo Cluster", icon: "⭐", distance: "53.8 Million Light Years", type: "mini" },
    { name: "3C 273 (Quasar)", icon: "⭐", distance: "2.4 Billion Light Years", type: "mini" },
    { name: "Cosmic Web Wall", icon: "⭐", distance: "5 Billion Light Years", type: "mini" },
    { name: "GN-z11 Galaxy", icon: "⭐", distance: "13.4 Billion Light Years", type: "mini" },
    { name: "Deep Space Field", icon: "⭐", distance: "15 Billion Light Years", type: "mini" },
    { name: "Cosmic Background Core", icon: "⭐", distance: "20 Billion Light Years", type: "mini" },
    { name: "Edge of Dark Matter", icon: "⭐", distance: "22 Billion Light Years", type: "mini" },
    { name: "Primordial Gas Clouds", icon: "⭐", distance: "24 Billion Light Years", type: "mini" },
    { name: "Ancient Redshift Rim", icon: "⭐", distance: "25 Billion Light Years", type: "mini" },
    { name: "First Light Horizon", icon: "⭐", distance: "26 Billion Light Years", type: "mini" },
    { name: "Observable Limit Hub", icon: "⭐", distance: "27 Billion Light Years", type: "mini" },
    { name: "Cosmic Dawn Void", icon: "⭐", distance: "27.5 Billion Light Years", type: "mini" },
    { name: "Hyper-Deep Interstellar", icon: "⭐", distance: "27.8 Billion Light Years", type: "mini" },
    { name: "Earendel Horizon", icon: "⭐", distance: "27.9 Billion Light Years", type: "mini" },
    { name: "Earendel", icon: "🏆", distance: "28 Billion Light Years (Goal!)", type: "major" }
];

window.onload = function() {
    buildCosmicMap();
    loadSavedData();
};

function saveToLocalStorage() {
    const savedData = {
        startWeight: document.getElementById('startWeight').value,
        currentWeight: document.getElementById('currentWeight').value,
        goalWeight: document.getElementById('goalWeight').value
    };

    try {
        localStorage.setItem('cosmicWeightTracker', JSON.stringify(savedData));
    } catch (error) {
        document.getElementById('stats').innerText =
            'Unable to save your data in this browser. Check your storage settings.';
    }
}

function loadSavedData() {
    try {
        const savedData = localStorage.getItem('cosmicWeightTracker');
        if (!savedData) return;

        const weights = JSON.parse(savedData);
        if (
            !weights ||
            typeof weights.startWeight !== 'string' ||
            typeof weights.currentWeight !== 'string' ||
            typeof weights.goalWeight !== 'string'
        ) {
            throw new Error('Saved weight data has an invalid format.');
        }

        document.getElementById('startWeight').value = weights.startWeight;
        document.getElementById('currentWeight').value = weights.currentWeight;
        document.getElementById('goalWeight').value = weights.goalWeight;

        if (weights.startWeight && weights.currentWeight && weights.goalWeight) {
            updateJourney();
        }
    } catch (error) {
        document.getElementById('stats').innerText =
            'Unable to load saved data. Please check your browser storage settings.';
    }
}

function buildCosmicMap() {
    const map = document.getElementById('spaceMap');
    const ship = document.getElementById('spaceship');
    map.innerHTML = '';
    map.appendChild(ship);

    // Loop from 0 UP TO 100 so Earth is at the top, Earendel at the bottom
    for (let percent = 0; percent <= 100; percent++) {
        const dest = completeCosmicMap[percent];
        const element = document.createElement('div');
        
        if (dest.type === "major") {
            element.className = `milestone major-milestone m-${percent}`;
            element.id = `pct-${percent}`;
            element.innerHTML = `
                <span class="icon">${dest.icon}</span>
                <div class="info">
                    <span class="name">${dest.name} (${percent}%)</span>
                    <span class="distance">${dest.distance}</span>
                </div>
            `;
        } else {
            element.className = `milestone mini-star m-${percent}`;
            element.id = `pct-${percent}`; 
            element.innerHTML = `
                <span class="icon-mini">⭐</span> 
                <div class="info"> 
                    <span class="name-mini">${dest.name} (${percent}%)</span> 
                    <span class="distance-mini">${dest.distance}</span> 
                </div>
            `;
        }
        map.appendChild(element);
    }
    document.getElementById('pct-0').classList.add('reached');
}

function updateJourney() {
    const start = parseFloat(document.getElementById('startWeight').value);
    const current = parseFloat(document.getElementById('currentWeight').value);
    const goal = parseFloat(document.getElementById('goalWeight').value);
    const statsBox = document.getElementById('stats');
    const ship = document.getElementById('spaceship');

    if (!start || !current || !goal) {
        statsBox.innerText = "Please fill out all fields to calculate trajectory.";
        return;
    }
    if (current > start || goal >= start) {
        statsBox.innerText = "Error: Current and goal weights must be less than your starting weight.";
        return;
    }

    const totalWeightToLose = start - goal;
    const currentWeightLost = start - current;
    
    let journeyProgress = (currentWeightLost / totalWeightToLose) * 100;
    if (journeyProgress < 0) journeyProgress = 0;
    if (journeyProgress > 100) journeyProgress = 100;

    // To this:
statsBox.innerHTML = `🚀 You have dropped ${currentWeightLost.toFixed(1)} lbs/kg. Your warp drive is at <strong>${journeyProgress.toFixed(1)}%</strong> capacity!`;
    
    const currentPercentFloor = Math.floor(journeyProgress);

    for (let i = 0; i <= 100; i++) {
        const item = document.getElementById('pct-' + i);
        if (item) {
            if (i <= currentPercentFloor) {
                item.classList.add('reached');
            } else {
                item.classList.remove('reached');
            }
        }
    }

    const targetElement = document.getElementById('pct-' + currentPercentFloor);
    if (targetElement) {
        const targetTop = targetElement.offsetTop + (targetElement.offsetHeight / 2);
        ship.style.top = targetTop + 'px';
    }
}
