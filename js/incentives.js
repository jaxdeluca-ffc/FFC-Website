// Production Incentives Data
const STATES = [
  { state: "Alabama", abbr: "AL", type: "Tax Credit", subtype: "Refundable", rate: "25–35%", details: "35% resident cast/crew, 25% nonresident/local spend", min: "$500K", cap: "$20M/year", projectCap: "$20M", sunset: "", eligible: "Film, TV, commercials, music videos", notes: "" },
  { state: "Arizona", abbr: "AZ", type: "Tax Credit", subtype: "Refundable", rate: "15–22.5%", details: "Rate varies by budget tier", min: "None", cap: "$100–125M/year", projectCap: "$25M", sunset: "", eligible: "Film, TV, commercials", notes: "" },
  { state: "Arkansas", abbr: "AR", type: "Tax Credit", subtype: "Transferable", rate: "25–30%", details: "30% below-the-line residents, 25% others", min: "$200K features; $100K commercials", cap: "$4M/year", projectCap: "", sunset: "", eligible: "Animation, documentaries, films, pilots, TV, video games", notes: "Excludes reality TV, talk shows" },
  { state: "California", abbr: "CA", type: "Tax Credit", subtype: "Refundable/Transferable", rate: "35–40%", details: "35–40% base + up to 10% bonuses. Program 4.0 doubled cap.", min: "$1M", cap: "$750M/year", projectCap: "$54M", sunset: "5-year program", eligible: "Film, TV, relocating series", notes: "75% in-state spending required. Credits now refundable." },
  { state: "Colorado", abbr: "CO", type: "Rebate", subtype: "Refundable", rate: "20%", details: "20% rebate on qualified spend", min: "$100K local; $1M out-of-state", cap: "$5M/year", projectCap: "", sunset: "", eligible: "Film, TV, commercials", notes: "50% Colorado resident crew required" },
  { state: "Connecticut", abbr: "CT", type: "Tax Credit", subtype: "Transferable", rate: "10–30%", details: "Tiered by spend level", min: "$100K", cap: "None", projectCap: "", sunset: "", eligible: "All project types", notes: "" },
  { state: "Delaware", abbr: "DE", type: "Rebate", subtype: "", rate: "Up to 30%", details: "Case-by-case awards", min: "None", cap: "$1M/year", projectCap: "", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Georgia", abbr: "GA", type: "Tax Credit", subtype: "Transferable", rate: "20–30%", details: "20% base + 10% 'Made In Georgia' logo bonus. New 20% post-production credit on $500K spend.", min: "$500K", cap: "None", projectCap: "", sunset: "", eligible: "Film, TV, commercials, music videos, animation", notes: "Mandatory audit required. Post-production: 5% rural county bonus, $10M annual cap." },
  { state: "Hawaii", abbr: "HI", type: "Tax Credit", subtype: "Refundable", rate: "22–27%", details: "22% Oahu, +5% other islands", min: "$100K", cap: "$50M/year", projectCap: "$17M", sunset: "", eligible: "Film, TV", notes: "GET withholding on loan-out payments" },
  { state: "Illinois", abbr: "IL", type: "Tax Credit", subtype: "Transferable", rate: "30–45%", details: "30% base + up to 15% disadvantaged areas bonus. SB 1911 extends program and raises credit to 35%.", min: "$100K", cap: "None", projectCap: "", sunset: "Extended through 2038", eligible: "Film, TV, commercials", notes: "Max 9 nonresident positions + 2–4 nonresident actors. Loan out withholding 4.95%." },
  { state: "Indiana", abbr: "IN", type: "Tax Credit", subtype: "Non-Transferable", rate: "Up to 30%", details: "Case-by-case determination", min: "$50K", cap: "$300M all state credits", projectCap: "", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Iowa", abbr: "IA", type: "Rebate", subtype: "Pilot Program", rate: "Up to 30%", details: "New pilot rebate program debuting 2026", min: "$500K", cap: "$4M/year", projectCap: "", sunset: "July 2025 – July 2027", eligible: "Film, TV", notes: "New program" },
  { state: "Kentucky", abbr: "KY", type: "Tax Credit", subtype: "Refundable", rate: "30–35%", details: "35% residents, 30% nonresidents/local. 5% enhanced counties bonus.", min: "$125K–$250K", cap: "$75M/year", projectCap: "$10M", sunset: "", eligible: "Film, TV, commercials", notes: "Loan out withholding 3.5% as of 1/1/26" },
  { state: "Louisiana", abbr: "LA", type: "Tax Credit", subtype: "Partially Refundable", rate: "25–40%", details: "40% residents, 25% nonresidents/local spend", min: "$300K", cap: "$125M/year", projectCap: "", sunset: "", eligible: "Film, TV, reality, video games, commercials", notes: "" },
  { state: "Maine", abbr: "ME", type: "Rebate + Tax Credit", subtype: "", rate: "5–12%", details: "12% residents, 10% nonresidents (payroll); 5% local spend", min: "$75K", cap: "None", projectCap: "", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Maryland", abbr: "MD", type: "Tax Credit", subtype: "Refundable", rate: "28–30%", details: "28% base + 2% TV/pilots bonus", min: "$250K; $25K small films", cap: "$15M/year", projectCap: "$10M", sunset: "", eligible: "Film, TV, pilots", notes: "50% principal photography in-state required" },
  { state: "Massachusetts", abbr: "MA", type: "Tax Credit", subtype: "Transferable/Refundable", rate: "25%", details: "25% base. 90% partial refund OR transfer on open market.", min: "$50K", cap: "None", projectCap: "", sunset: "", eligible: "Film, TV", notes: "75% budget in-state required" },
  { state: "Minnesota", abbr: "MN", type: "Tax Credit", subtype: "Transferable", rate: "20–25%", details: "Rate varies by category", min: "$1M", cap: "$25M/year", projectCap: "", sunset: "", eligible: "Film, TV", notes: "75% funding proof required" },
  { state: "Mississippi", abbr: "MS", type: "Rebate", subtype: "", rate: "25–30%", details: "30% residents, 25% nonresidents (payroll); 25% local spend", min: "$50K", cap: "$20M/year", projectCap: "$10M", sunset: "", eligible: "Film, TV, commercials", notes: "20% resident crew minimum" },
  { state: "Missouri", abbr: "MO", type: "Tax Credit", subtype: "Transferable", rate: "20–42%", details: "20% base + up to 22% in bonuses", min: "$50K commercial; $100K feature/TV", cap: "$16M/year", projectCap: "$8M", sunset: "", eligible: "Film, TV, commercials", notes: "Apprentice/veteran hiring mandates" },
  { state: "Montana", abbr: "MT", type: "Tax Credit", subtype: "Transferable", rate: "15–25%", details: "Rate varies by category. 5–10% bonuses for logo, underserved counties, facilities.", min: "$350K", cap: "$12M/year", projectCap: "$5M", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Nebraska", abbr: "NE", type: "Grant", subtype: "", rate: "20%", details: "20% base grant on qualifying spend", min: "$1M", cap: "$1M/year", projectCap: "$400K", sunset: "", eligible: "Feature films", notes: "Nebraska stories only" },
  { state: "Nevada", abbr: "NV", type: "Tax Credit", subtype: "Transferable", rate: "12–15%", details: "15% residents, 12% nonresident above-the-line. 5% rural + 5% resident crew bonuses.", min: "$500K", cap: "$10M/year", projectCap: "$6M", sunset: "", eligible: "Film, TV", notes: "60% budget in-state required" },
  { state: "New Jersey", abbr: "NJ", type: "Tax Credit", subtype: "Transferable", rate: "30–40%", details: "35% payroll, 30% local spend. Up to 40% for in-state studio partners.", min: "$1M or 60% in-state", cap: "$100M/year", projectCap: "", sunset: "Extended through 2049", eligible: "Film, TV", notes: "2–4% diversity bonus + 5% outside 30-mile radius" },
  { state: "New Mexico", abbr: "NM", type: "Tax Credit", subtype: "Refundable", rate: "15–25%", details: "25% residents/local; 15% nonresident below-the-line. 10% remote areas, 5% pilots/series bonuses.", min: "None", cap: "$130M/year", projectCap: "", sunset: "", eligible: "Film, TV, commercials", notes: "SB 460 proposes 0% interest loan program for indie films." },
  { state: "New York", abbr: "NY", type: "Tax Credit", subtype: "Refundable", rate: "30–40%", details: "30% base + bonuses: 10% upstate, 5–10% returning producers, 10% music. $100M indie film program.", min: "$250K–$1M varies", cap: "$800M/year", projectCap: "40% max", sunset: "Extended through 2036", eligible: "Film, TV, post-production", notes: "Credits issued in year of allocation. Indie program opened Jan 2026." },
  { state: "North Carolina", abbr: "NC", type: "Rebate", subtype: "", rate: "25%", details: "25% on qualifying spend", min: "$250K–$1.5M varies", cap: "$31M/year", projectCap: "$15M TV series", sunset: "", eligible: "Film, TV, commercials", notes: "75% funding secured required" },
  { state: "Ohio", abbr: "OH", type: "Tax Credit", subtype: "Refundable", rate: "30%", details: "30% base on qualifying spend", min: "$300K", cap: "$50M/year", projectCap: "", sunset: "", eligible: "Film, TV", notes: "Production commencement within 90 days" },
  { state: "Oklahoma", abbr: "OK", type: "Rebate", subtype: "", rate: "20–38%", details: "20–30% base + bonuses: 3% rural, 5% soundstage, 2–5% TV, 5% multi-film. New post-only credit program.", min: "$25K", cap: "$30M/year", projectCap: "$8M", sunset: "", eligible: "Film, TV, commercials", notes: "$100K pilot program for Broken Arrow" },
  { state: "Oregon", abbr: "OR", type: "Rebate", subtype: "", rate: "20–31.2%", details: "20% payroll, 25% local spend + 6.2% Greenlight overlay", min: "$1M", cap: "$20.6M/year", projectCap: "$10.3M", sunset: "", eligible: "Film, TV", notes: "" },
  { state: "Pennsylvania", abbr: "PA", type: "Tax Credit", subtype: "Transferable", rate: "25–30%", details: "25% base + 5% stage bonus", min: "None", cap: "$100M/year", projectCap: "$20M", sunset: "", eligible: "Film, TV", notes: "60% expenses in-state required" },
  { state: "Rhode Island", abbr: "RI", type: "Tax Credit", subtype: "Transferable", rate: "30%", details: "30% payroll credit", min: "$100K", cap: "$40M/year", projectCap: "$7M", sunset: "", eligible: "Film, TV", notes: "51% principal photography or budget in-state" },
  { state: "South Carolina", abbr: "SC", type: "Rebate", subtype: "", rate: "20–30%", details: "30% local spend, 25% resident payroll, 20% nonresident", min: "$1M", cap: "$17M/year", projectCap: "", sunset: "", eligible: "Animation, commercials, features, pilots, scripted TV", notes: "" },
  { state: "Tennessee", abbr: "TN", type: "Grant", subtype: "", rate: "25%", details: "25% residents/local; 25% nonresident TV only", min: "$200K/episode", cap: "$8.6M/year", projectCap: "", sunset: "", eligible: "Commercials, features, pilots, scripted TV", notes: "" },
  { state: "Texas", abbr: "TX", type: "Grant", subtype: "", rate: "5–22.5%", details: "5–20% base + up to 2.5% bonuses. $300M biannual allocation approved.", min: "Varies by tier", cap: "$300M biannual", projectCap: "", sunset: "", eligible: "Film, TV, commercials, video games", notes: "60% filming days + 55% resident cast/crew required" },
  { state: "Utah", abbr: "UT", type: "Tax Credit + Rebate", subtype: "Refundable", rate: "20–25%", details: "20% base + 5% bonus for 75% resident crew", min: "$100K–$1M varies", cap: "$20.4M/year", projectCap: "", sunset: "", eligible: "Film, TV", notes: "$12M reserved for rural productions" },
  { state: "Virginia", abbr: "VA", type: "Tax Credit + Grant", subtype: "Refundable", rate: "15–30%", details: "15% base + 5% distressed area + 10% first-time talent bonuses", min: "$250K credit; none grant", cap: "$6.5M credit; $4.15M grant", projectCap: "", sunset: "", eligible: "Film, TV", notes: "50% principal photography in-state" },
  { state: "Washington", abbr: "WA", type: "Rebate", subtype: "", rate: "15–35%", details: "30% residents, 20% local spend, 15% nonresident crew. 35% max episodic 6+ episodes.", min: "$150K–$500K varies", cap: "$15M/year", projectCap: "", sunset: "", eligible: "Film, TV, commercials", notes: "10% rural counties bonus" },
  { state: "West Virginia", abbr: "WV", type: "Tax Credit", subtype: "Transferable", rate: "27–31%", details: "27% base + 4% bonus for 10+ resident hires", min: "$50K", cap: "None", projectCap: "", sunset: "", eligible: "Web series, commercials, docs, features, pilots, reality, TV", notes: "" },
  { state: "Wisconsin", abbr: "WI", type: "Tax Credit", subtype: "", rate: "TBD", details: "New program debuting 2026", min: "TBD", cap: "TBD", projectCap: "", sunset: "", eligible: "Film, TV", notes: "New program" }
];

const NO_PROGRAM = ["Alaska", "Florida", "Idaho", "Kansas", "Michigan", "New Hampshire", "North Dakota", "South Dakota", "Vermont", "Wyoming"];

// DOM elements
const searchInput = document.getElementById('incentive-search');
const filterBtns = document.querySelectorAll('.filter-btn');
const grid = document.getElementById('incentives-grid');
const countEl = document.getElementById('state-count');

let activeFilter = 'all';

function getTypeBadgeClass(type) {
  if (type.includes('Tax Credit')) return 'badge-credit';
  if (type.includes('Rebate')) return 'badge-rebate';
  if (type.includes('Grant')) return 'badge-grant';
  return 'badge-credit';
}

function renderCard(s) {
  return `
    <div class="incentive-card" data-type="${s.type}" data-state="${s.state}">
      <div class="card-header">
        <span class="state-abbr">${s.abbr}</span>
        <h3 class="state-name">${s.state}</h3>
        <span class="type-badge ${getTypeBadgeClass(s.type)}">${s.type}</span>
      </div>
      <div class="card-rate">${s.rate}</div>
      <p class="card-details">${s.details}</p>
      <div class="card-meta">
        ${s.min !== 'None' && s.min ? `<div class="meta-item"><span class="meta-label">Min Spend</span><span class="meta-value">${s.min}</span></div>` : ''}
        ${s.cap && s.cap !== 'None' ? `<div class="meta-item"><span class="meta-label">Annual Cap</span><span class="meta-value">${s.cap}</span></div>` : ''}
        ${s.projectCap ? `<div class="meta-item"><span class="meta-label">Project Cap</span><span class="meta-value">${s.projectCap}</span></div>` : ''}
        ${s.sunset ? `<div class="meta-item"><span class="meta-label">Sunset</span><span class="meta-value">${s.sunset}</span></div>` : ''}
      </div>
      ${s.eligible ? `<div class="card-eligible"><span class="meta-label">Eligible</span> ${s.eligible}</div>` : ''}
      ${s.notes ? `<div class="card-notes">${s.notes}</div>` : ''}
    </div>
  `;
}

function render() {
  const query = searchInput.value.toLowerCase().trim();

  let filtered = STATES.filter(s => {
    const matchesSearch = !query ||
      s.state.toLowerCase().includes(query) ||
      s.abbr.toLowerCase().includes(query);

    const matchesFilter = activeFilter === 'all' ||
      (activeFilter === 'credit' && s.type.includes('Tax Credit')) ||
      (activeFilter === 'rebate' && s.type.includes('Rebate')) ||
      (activeFilter === 'grant' && s.type.includes('Grant'));

    return matchesSearch && matchesFilter;
  });

  countEl.textContent = `${filtered.length} state${filtered.length !== 1 ? 's' : ''}`;
  grid.innerHTML = filtered.map(renderCard).join('');
}

// Event listeners
searchInput.addEventListener('input', render);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    render();
  });
});

// Initial render
render();

// Scroll fade-in (reuse pattern from main.js)
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
fadeElements.forEach(el => fadeObserver.observe(el));

// Nav toggle (duplicated from main for standalone page)
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
