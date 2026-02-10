// ===== State Data =====
const STATES = [
  { state: "Alabama", abbr: "AL", type: "Tax Credit", subtype: "Refundable", rate: "25–35%", details: "35% resident cast/crew, 25% nonresident/local spend", min: "$500K", cap: "$20M/yr", projectCap: "$20M", sunset: "", eligible: "Film, TV, commercials, music videos", notes: "" },
  { state: "Arizona", abbr: "AZ", type: "Tax Credit", subtype: "Refundable", rate: "15–22.5%", details: "Rate varies by budget tier", min: "None", cap: "$100–125M/yr", projectCap: "$25M", sunset: "", eligible: "Film, TV, commercials", notes: "" },
  { state: "Arkansas", abbr: "AR", type: "Tax Credit", subtype: "Transferable", rate: "25–30%", details: "30% below-the-line residents, 25% others", min: "$200K features; $100K commercials", cap: "$4M/yr", projectCap: "", sunset: "", eligible: "Animation, docs, films, pilots, TV, video games", notes: "Excludes reality TV, talk shows" },
  { state: "California", abbr: "CA", type: "Tax Credit", subtype: "Refundable", rate: "35–40%", details: "Program 4.0: 35–40% base + up to 10% bonuses. Credits now refundable.", min: "$1M", cap: "$750M/yr", projectCap: "$54M", sunset: "5-year program", eligible: "Film, TV, relocating series", notes: "75% in-state spending required" },
  { state: "Colorado", abbr: "CO", type: "Rebate", subtype: "", rate: "20%", details: "20% rebate on qualified spend", min: "$100K local; $1M out-of-state", cap: "$5M/yr", projectCap: "", sunset: "", eligible: "Film, TV, commercials", notes: "50% CO resident crew required" },
  { state: "Connecticut", abbr: "CT", type: "Tax Credit", subtype: "Transferable", rate: "10–30%", details: "Tiered by spend level", min: "$100K", cap: "None", projectCap: "", sunset: "", eligible: "All project types", notes: "" },
  { state: "Delaware", abbr: "DE", type: "Rebate", subtype: "", rate: "Up to 30%", details: "Case-by-case awards", min: "None", cap: "$1M/yr", projectCap: "", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Georgia", abbr: "GA", type: "Tax Credit", subtype: "Transferable", rate: "20–30%", details: "20% base + 10% logo bonus. New 20% post-production credit.", min: "$500K", cap: "None", projectCap: "", sunset: "", eligible: "Film, TV, commercials, animation", notes: "Mandatory audit required" },
  { state: "Hawaii", abbr: "HI", type: "Tax Credit", subtype: "Refundable", rate: "22–27%", details: "22% Oahu, +5% other islands", min: "$100K", cap: "$50M/yr", projectCap: "$17M", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Illinois", abbr: "IL", type: "Tax Credit", subtype: "Transferable", rate: "30–45%", details: "30% base + up to 15% disadvantaged areas. Extended through 2038.", min: "$100K", cap: "None", projectCap: "", sunset: "2038", eligible: "Film, TV, commercials", notes: "Credit raised to 35% for labor/vendor spend" },
  { state: "Indiana", abbr: "IN", type: "Tax Credit", subtype: "Non-Transferable", rate: "Up to 30%", details: "Case-by-case determination", min: "$50K", cap: "$300M all state credits", projectCap: "", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Iowa", abbr: "IA", type: "Rebate", subtype: "Pilot", rate: "Up to 30%", details: "New pilot rebate program debuting 2026", min: "$500K", cap: "$4M/yr", projectCap: "", sunset: "Jul 2025 – Jul 2027", eligible: "Film, TV", notes: "New program" },
  { state: "Kentucky", abbr: "KY", type: "Tax Credit", subtype: "Refundable", rate: "30–35%", details: "35% residents, 30% nonresidents. 5% enhanced counties bonus.", min: "$125K–$250K", cap: "$75M/yr", projectCap: "$10M", sunset: "", eligible: "Film, TV, commercials", notes: "" },
  { state: "Louisiana", abbr: "LA", type: "Tax Credit", subtype: "Partially Refundable", rate: "25–40%", details: "40% residents, 25% nonresidents/local spend", min: "$300K", cap: "$125M/yr", projectCap: "", sunset: "", eligible: "Film, TV, reality, video games, commercials", notes: "" },
  { state: "Maine", abbr: "ME", type: "Rebate + Credit", subtype: "", rate: "5–12%", details: "12% residents, 10% nonresidents (payroll); 5% local spend", min: "$75K", cap: "None", projectCap: "", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Maryland", abbr: "MD", type: "Tax Credit", subtype: "Refundable", rate: "28–30%", details: "28% base + 2% TV/pilots bonus", min: "$250K", cap: "$15M/yr", projectCap: "$10M", sunset: "", eligible: "Film, TV, pilots", notes: "50% in-state photography required" },
  { state: "Massachusetts", abbr: "MA", type: "Tax Credit", subtype: "Transferable", rate: "25%", details: "90% partial refund OR transfer on open market", min: "$50K", cap: "None", projectCap: "", sunset: "", eligible: "Film, TV", notes: "75% budget in-state required" },
  { state: "Minnesota", abbr: "MN", type: "Tax Credit", subtype: "Transferable", rate: "20–25%", details: "Rate varies by category", min: "$1M", cap: "$25M/yr", projectCap: "", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Mississippi", abbr: "MS", type: "Rebate", subtype: "", rate: "25–30%", details: "30% residents, 25% nonresidents (payroll); 25% local spend", min: "$50K", cap: "$20M/yr", projectCap: "$10M", sunset: "", eligible: "Film, TV, commercials", notes: "20% resident crew minimum" },
  { state: "Missouri", abbr: "MO", type: "Tax Credit", subtype: "Transferable", rate: "20–42%", details: "20% base + up to 22% in bonuses (42% total)", min: "$50K–$100K", cap: "$16M/yr", projectCap: "$8M", sunset: "", eligible: "Film, TV, commercials", notes: "Apprentice/veteran hiring mandates" },
  { state: "Montana", abbr: "MT", type: "Tax Credit", subtype: "Transferable", rate: "15–25%", details: "5–10% bonuses for logo, underserved counties, facilities", min: "$350K", cap: "$12M/yr", projectCap: "$5M", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Nebraska", abbr: "NE", type: "Grant", subtype: "", rate: "20%", details: "20% base grant on qualifying spend", min: "$1M", cap: "$1M/yr", projectCap: "$400K", sunset: "", eligible: "Feature films", notes: "Nebraska stories only" },
  { state: "Nevada", abbr: "NV", type: "Tax Credit", subtype: "Transferable", rate: "12–15%", details: "15% residents, 12% nonresident ATL. 5% rural + 5% crew bonuses.", min: "$500K", cap: "$10M/yr", projectCap: "$6M", sunset: "", eligible: "Film, TV", notes: "60% budget in-state required" },
  { state: "New Jersey", abbr: "NJ", type: "Tax Credit", subtype: "Transferable", rate: "30–40%", details: "35% payroll, 30% local. Up to 40% for studio partners.", min: "$1M", cap: "$100M/yr", projectCap: "", sunset: "Through 2049", eligible: "Film, TV", notes: "2–4% diversity + 5% distance bonus" },
  { state: "New Mexico", abbr: "NM", type: "Tax Credit", subtype: "Refundable", rate: "15–25%", details: "25% residents/local; 15% nonresident BTL. 10% remote + 5% series.", min: "None", cap: "$130M/yr", projectCap: "", sunset: "", eligible: "Film, TV, commercials", notes: "SB 460: 0% interest indie loan program" },
  { state: "New York", abbr: "NY", type: "Tax Credit", subtype: "Refundable", rate: "30–40%", details: "30% base + 10% upstate + 5–10% returning + 10% music. $100M indie program.", min: "$250K–$1M", cap: "$800M/yr", projectCap: "40% max", sunset: "Through 2036", eligible: "Film, TV, post-production", notes: "Indie program opened Jan 2026" },
  { state: "North Carolina", abbr: "NC", type: "Rebate", subtype: "", rate: "25%", details: "25% on qualifying spend", min: "$250K–$1.5M", cap: "$31M/yr", projectCap: "$15M series", sunset: "", eligible: "Film, TV, commercials", notes: "75% funding secured required" },
  { state: "Ohio", abbr: "OH", type: "Tax Credit", subtype: "Refundable", rate: "30%", details: "30% base on qualifying spend", min: "$300K", cap: "$50M/yr", projectCap: "", sunset: "", eligible: "Film, TV", notes: "Start within 90 days" },
  { state: "Oklahoma", abbr: "OK", type: "Rebate", subtype: "", rate: "20–38%", details: "20–30% base + 3% rural + 5% soundstage + 2–5% TV + 5% multi-film.", min: "$25K", cap: "$30M/yr", projectCap: "$8M", sunset: "", eligible: "Film, TV, commercials", notes: "New post-only credit program" },
  { state: "Oregon", abbr: "OR", type: "Rebate", subtype: "", rate: "20–31%", details: "20% payroll, 25% local spend + 6.2% Greenlight overlay", min: "$1M", cap: "$20.6M/yr", projectCap: "$10.3M", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Pennsylvania", abbr: "PA", type: "Tax Credit", subtype: "Transferable", rate: "25–30%", details: "25% base + 5% stage bonus", min: "None", cap: "$100M/yr", projectCap: "$20M", sunset: "", eligible: "Film, TV", notes: "60% expenses in-state" },
  { state: "Rhode Island", abbr: "RI", type: "Tax Credit", subtype: "Transferable", rate: "30%", details: "30% payroll credit", min: "$100K", cap: "$40M/yr", projectCap: "$7M", sunset: "", eligible: "Film, TV", notes: "51% in-state requirement" },
  { state: "South Carolina", abbr: "SC", type: "Rebate", subtype: "", rate: "20–30%", details: "30% local spend, 25% resident payroll, 20% nonresident", min: "$1M", cap: "$17M/yr", projectCap: "", sunset: "", eligible: "Animation, commercials, features, scripted TV", notes: "" },
  { state: "Tennessee", abbr: "TN", type: "Grant", subtype: "", rate: "25%", details: "25% residents/local; 25% nonresident TV only", min: "$200K/episode", cap: "$8.6M/yr", projectCap: "", sunset: "", eligible: "Commercials, features, pilots, scripted TV", notes: "" },
  { state: "Texas", abbr: "TX", type: "Grant", subtype: "", rate: "5–22.5%", details: "$300M biannual. 5–20% base + up to 2.5% bonuses.", min: "Varies", cap: "$300M biannual", projectCap: "", sunset: "", eligible: "Film, TV, commercials, video games", notes: "60% filming days + 55% resident cast/crew" },
  { state: "Utah", abbr: "UT", type: "Credit + Rebate", subtype: "Refundable", rate: "20–25%", details: "20% base + 5% bonus for 75% resident crew", min: "$100K–$1M", cap: "$20.4M/yr", projectCap: "", sunset: "", eligible: "Film, TV", notes: "$12M reserved for rural" },
  { state: "Virginia", abbr: "VA", type: "Credit + Grant", subtype: "Refundable", rate: "15–30%", details: "15% base + 5% distressed + 10% first-time talent", min: "$250K credit", cap: "$6.5M credit; $4.15M grant", projectCap: "", sunset: "", eligible: "Film, TV", notes: "50% in-state photography" },
  { state: "Washington", abbr: "WA", type: "Rebate", subtype: "", rate: "15–35%", details: "30% residents, 20% local, 15% nonresident. 35% episodic 6+.", min: "$150K–$500K", cap: "$15M/yr", projectCap: "", sunset: "", eligible: "Film, TV, commercials", notes: "10% rural bonus" },
  { state: "West Virginia", abbr: "WV", type: "Tax Credit", subtype: "Transferable", rate: "27–31%", details: "27% base + 4% bonus for 10+ resident hires", min: "$50K", cap: "None", projectCap: "", sunset: "", eligible: "Web, commercials, docs, features, pilots, reality, TV", notes: "" },
  { state: "Wisconsin", abbr: "WI", type: "Tax Credit", subtype: "", rate: "TBD", details: "New program debuting 2026", min: "TBD", cap: "TBD", projectCap: "", sunset: "", eligible: "Film, TV", notes: "New program" }
];

const NO_PROGRAM_STATES = [
  { state: "Alaska", abbr: "AK" },
  { state: "Florida", abbr: "FL" },
  { state: "Idaho", abbr: "ID" },
  { state: "Kansas", abbr: "KS" },
  { state: "Michigan", abbr: "MI" },
  { state: "New Hampshire", abbr: "NH" },
  { state: "North Dakota", abbr: "ND" },
  { state: "South Dakota", abbr: "SD" },
  { state: "Vermont", abbr: "VT" },
  { state: "Wyoming", abbr: "WY" }
];

// Tile grid map positions [col, row] — standard US tile layout
const TILE_POS = {
  AK:[0,0],                                                       ME:[11,0],
                              WI:[5,1],               VT:[9,1],NH:[10,1],
  WA:[0,2],ID:[1,2],MT:[2,2],ND:[3,2],MN:[4,2],      MI:[7,2],NY:[8,2],MA:[9,2],CT:[10,2],RI:[11,2],
  OR:[0,3],NV:[1,3],WY:[2,3],SD:[3,3],IA:[4,3],IL:[5,3],IN:[6,3],OH:[7,3],PA:[8,3],NJ:[9,3],
  CA:[0,4],UT:[1,4],CO:[2,4],NE:[3,4],MO:[4,4],KY:[5,4],WV:[6,4],VA:[7,4],MD:[8,4],DE:[9,4],
            AZ:[1,5],NM:[2,5],KS:[3,5],AR:[4,5],TN:[5,5],NC:[6,5],SC:[7,5],
                              OK:[3,6],LA:[4,6],MS:[5,6],AL:[6,6],GA:[7,6],
  HI:[0,7],                  TX:[3,7],                            FL:[8,7]
};

const GRID_COLS = 12;
const GRID_ROWS = 8;

// Build lookup by abbreviation
const stateDataMap = {};
STATES.forEach(s => { stateDataMap[s.abbr] = s; });
NO_PROGRAM_STATES.forEach(s => { stateDataMap[s.abbr] = { ...s, type: 'none', rate: '—', details: 'No statewide incentive program' }; });

// ===== DOM =====
const mapGrid = document.getElementById('map-grid');
const detailPanel = document.getElementById('detail-panel');
const searchInput = document.getElementById('incentive-search');
const filterBtns = document.querySelectorAll('.filter-btn');
const grid = document.getElementById('incentives-grid');
const countEl = document.getElementById('state-count');

let activeFilter = 'all';
let selectedState = null;

// ===== Helpers =====
function getTypeClass(type) {
  if (!type || type === 'none') return 'tile-none';
  if (type.includes('Tax Credit') || type.includes('Credit')) return 'tile-credit';
  if (type.includes('Rebate')) return 'tile-rebate';
  if (type.includes('Grant')) return 'tile-grant';
  return 'tile-credit';
}

function getBadgeClass(type) {
  if (!type || type === 'none') return 'badge-none';
  if (type.includes('Tax Credit') || type.includes('Credit')) return 'badge-credit';
  if (type.includes('Rebate')) return 'badge-rebate';
  if (type.includes('Grant')) return 'badge-grant';
  return 'badge-credit';
}

// ===== Build Tile Map =====
function buildMap() {
  mapGrid.innerHTML = '';
  mapGrid.style.gridTemplateColumns = `repeat(${GRID_COLS}, 1fr)`;
  mapGrid.style.gridTemplateRows = `repeat(${GRID_ROWS}, 1fr)`;

  Object.entries(TILE_POS).forEach(([abbr, [col, row]]) => {
    const data = stateDataMap[abbr];
    const tile = document.createElement('div');
    tile.className = `map-tile ${getTypeClass(data?.type || 'none')}`;
    tile.style.gridColumn = col + 1;
    tile.style.gridRow = row + 1;
    tile.dataset.abbr = abbr;

    const label = document.createElement('span');
    label.className = 'tile-abbr';
    label.textContent = abbr;
    tile.appendChild(label);

    if (data && data.rate && data.rate !== '—') {
      const rate = document.createElement('span');
      rate.className = 'tile-rate';
      rate.textContent = data.rate;
      tile.appendChild(rate);
    }

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tile-tooltip';
    tooltip.innerHTML = `<strong>${data?.state || abbr}</strong><br>${data?.type === 'none' ? 'No statewide program' : (data?.type + ' · ' + data?.rate)}`;
    tile.appendChild(tooltip);

    tile.addEventListener('click', () => selectState(abbr));
    mapGrid.appendChild(tile);
  });
}

// ===== Select State =====
function selectState(abbr) {
  // Toggle off if already selected
  if (selectedState === abbr) {
    selectedState = null;
    detailPanel.classList.remove('active');
    document.querySelectorAll('.map-tile').forEach(t => t.classList.remove('selected'));
    return;
  }

  selectedState = abbr;
  const data = stateDataMap[abbr];

  document.querySelectorAll('.map-tile').forEach(t => {
    t.classList.toggle('selected', t.dataset.abbr === abbr);
  });

  if (!data || data.type === 'none') {
    detailPanel.innerHTML = `
      <div class="detail-header">
        <span class="detail-abbr">${abbr}</span>
        <h3 class="detail-name">${data?.state || abbr}</h3>
        <span class="type-badge badge-none">No Program</span>
      </div>
      <p class="detail-desc">This state does not currently have a statewide film production incentive program. Some local or municipal programs may exist.</p>
      <button class="detail-close" aria-label="Close">&times;</button>
    `;
  } else {
    detailPanel.innerHTML = `
      <button class="detail-close" aria-label="Close">&times;</button>
      <div class="detail-header">
        <span class="detail-abbr">${data.abbr}</span>
        <h3 class="detail-name">${data.state}</h3>
        <span class="type-badge ${getBadgeClass(data.type)}">${data.type}</span>
      </div>
      <div class="detail-rate">${data.rate}</div>
      <p class="detail-desc">${data.details}</p>
      <div class="detail-meta">
        ${data.min && data.min !== 'None' ? `<div class="meta-item"><span class="meta-label">Min Spend</span><span class="meta-value">${data.min}</span></div>` : ''}
        ${data.cap && data.cap !== 'None' ? `<div class="meta-item"><span class="meta-label">Annual Cap</span><span class="meta-value">${data.cap}</span></div>` : ''}
        ${data.projectCap ? `<div class="meta-item"><span class="meta-label">Project Cap</span><span class="meta-value">${data.projectCap}</span></div>` : ''}
        ${data.sunset ? `<div class="meta-item"><span class="meta-label">Sunset</span><span class="meta-value">${data.sunset}</span></div>` : ''}
      </div>
      ${data.eligible ? `<div class="detail-eligible"><span class="meta-label">Eligible</span> ${data.eligible}</div>` : ''}
      ${data.notes ? `<div class="detail-notes">${data.notes}</div>` : ''}
    `;
  }

  detailPanel.classList.add('active');

  // Close button
  detailPanel.querySelector('.detail-close').addEventListener('click', () => {
    selectedState = null;
    detailPanel.classList.remove('active');
    document.querySelectorAll('.map-tile').forEach(t => t.classList.remove('selected'));
  });

  // Scroll detail into view on mobile
  if (window.innerWidth < 768) {
    detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ===== Card Grid =====
function renderCard(s) {
  return `
    <div class="incentive-card" data-type="${s.type}" data-state="${s.state}">
      <div class="card-header">
        <span class="state-abbr">${s.abbr}</span>
        <h3 class="state-name">${s.state}</h3>
        <span class="type-badge ${getBadgeClass(s.type)}">${s.type}</span>
      </div>
      <div class="card-rate">${s.rate}</div>
      <p class="card-details">${s.details}</p>
      <div class="card-meta">
        ${s.min && s.min !== 'None' ? `<div class="meta-item"><span class="meta-label">Min Spend</span><span class="meta-value">${s.min}</span></div>` : ''}
        ${s.cap && s.cap !== 'None' ? `<div class="meta-item"><span class="meta-label">Annual Cap</span><span class="meta-value">${s.cap}</span></div>` : ''}
        ${s.projectCap ? `<div class="meta-item"><span class="meta-label">Project Cap</span><span class="meta-value">${s.projectCap}</span></div>` : ''}
        ${s.sunset ? `<div class="meta-item"><span class="meta-label">Sunset</span><span class="meta-value">${s.sunset}</span></div>` : ''}
      </div>
      ${s.eligible ? `<div class="card-eligible"><span class="meta-label">Eligible</span> ${s.eligible}</div>` : ''}
      ${s.notes ? `<div class="card-notes">${s.notes}</div>` : ''}
    </div>
  `;
}

function renderGrid() {
  const query = searchInput.value.toLowerCase().trim();

  let filtered = STATES.filter(s => {
    const matchesSearch = !query ||
      s.state.toLowerCase().includes(query) ||
      s.abbr.toLowerCase().includes(query);
    const matchesFilter = activeFilter === 'all' ||
      (activeFilter === 'credit' && (s.type.includes('Tax Credit') || s.type.includes('Credit'))) ||
      (activeFilter === 'rebate' && s.type.includes('Rebate')) ||
      (activeFilter === 'grant' && s.type.includes('Grant'));
    return matchesSearch && matchesFilter;
  });

  countEl.textContent = `${filtered.length} state${filtered.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtered.map(renderCard).join('');
}

// ===== Events =====
searchInput.addEventListener('input', renderGrid);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderGrid();
  });
});

// ===== Init =====
buildMap();
renderGrid();

// Scroll fade-in
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => fadeObs.observe(el));

// Nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navOverlay = document.querySelector('.nav-overlay');
if (navToggle && navOverlay) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('active');
    navOverlay.classList.toggle('open', isOpen);
    navOverlay.setAttribute('aria-hidden', !isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  navOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navOverlay.classList.remove('open');
      navOverlay.setAttribute('aria-hidden', 'true');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}
