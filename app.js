/* ============================================================
   MUNDIAL 2026 — Bracket Tracker
   Fuentes: worldcup26.ir (primary) → openfootball (fallback)
   ============================================================ */
'use strict';

// ============================================================
// SECTION 0: INTERNATIONALIZATION (i18n)
// ============================================================

const STRINGS = {
  es: {
    hdr_sub: 'Cuadro de Llaves · Tiempo Real',
    connecting: 'Conectando...',
    next_match: 'Próximo partido:',
    live_now: '🔴 EN VIVO:',
    tab_bracket: 'Cuadro de Llaves',
    tab_groups: 'Grupos',
    tab_thirds: 'Mejores Terceros',
    tab_hot: 'Zona Caliente',
    loading_bracket: 'Cargando datos del torneo...',
    loading_groups: 'Cargando grupos...',
    loading_thirds: 'Calculando clasificación...',
    loading_hot: 'Analizando rutas y choques...',
    leg_confirmed: 'Clasificado',
    leg_projected: 'Proyectado',
    leg_tbd: 'Por definir',
    leg_live: 'En vivo',
    leg_done: 'Jugado',
    thirds_title: 'Mejores Terceros del Torneo',
    thirds_desc: 'Los 8 mejores de los 12 equipos en tercer lugar clasifican a los Dieciseisavos de Final.',
    footer: 'Desarrollado con 🤍 por Ever Molina',
    updated: 'Actualizado:',
    group: 'Grupo',
    pts: 'Pts', gf: 'GF', gc: 'GC', gd: 'DG', pj: 'PJ', w: 'G', d: 'E', l: 'P',
    team: 'Equipo',
    slot_r32: 'Slot dieciseisavos',
    round_of_32: 'Dieciseisavos',
    round_of_16: 'Octavos de Final',
    qf: 'Cuartos de Final',
    sf: 'Semifinales',
    final: 'La Gran Final',
    third_place: '3er Puesto',
    qualified: 'Clasificado',
    projected: 'Proyectado',
    tbd: 'Por definir',
    group_prefix: 'Grupo',
    clash_label: 'Proyección:',
    clashes_title: 'Choques de Titanes',
    messi_cr7: 'MESSI vs CR7',
    clash_waiting: 'Esperando posiciones para proyectar cruce...',
    clash_in: 'Posible choque en',
    tut_title_0: 'Bienvenido al Tracker del Mundial 2026',
    tut_body_0: 'Esta app sigue los partidos en tiempo real y proyecta el cuadro de llaves completo basandose en los resultados actuales.',
    tut_title_1: 'Cuadro de Llaves',
    tut_body_1: 'Visualiza el bracket completo del torneo. Los equipos confirmados ya clasificaron; los proyectados lideran su grupo actualmente.',
    tut_title_2: 'Tabla de Grupos',
    tut_body_2: 'Consulta la tabla de posiciones de los 12 grupos con puntos, diferencia de goles y clasificacion en tiempo real.',
    tut_title_3: 'Mejores Terceros',
    tut_body_3: 'Los 8 mejores terceros lugares de los 12 grupos tambien clasifican. Esta vista te muestra quienes entrarian con los resultados actuales.',
    tut_title_4: 'Zona Caliente',
    tut_body_4: 'Se enfrentarian Messi y CR7? Esta seccion proyecta los choques explosivos entre los grandes favoritos.',
    tut_prev: 'Anterior',
    tut_next: 'Siguiente',
    tut_finish: 'Entendido!',
    lang_switch_label: '🇺🇸 EN',
    kofi_msg: '¿Disfrutando la app?',
    kofi_sub: 'Puedes regalarme un cafecito para seguir mejorándola ☕',
    kofi_btn: '☕ Invítame un café',
    kofi_dismiss: 'Ahora no',
    tab_today: 'Hoy',
    loading_today: 'Cargando partidos de hoy...',
    no_matches_today: 'No hay partidos programados para hoy.',
    match_status_live: '🔴 EN VIVO',
    match_status_final: 'Final',
    match_status_upcoming: 'Próximo',
    your_tz: 'Hora en tu zona horaria',
    venue: 'Estadio',
    today_heading: 'Partidos de Hoy',
    today_subtitle: 'Horarios en tu zona horaria local',
  },
  en: {
    hdr_sub: 'Bracket · Live Tracker',
    connecting: 'Connecting...',
    next_match: 'Next match:',
    live_now: '🔴 LIVE:',
    tab_bracket: 'Bracket',
    tab_groups: 'Groups',
    tab_thirds: 'Best Third-Places',
    tab_hot: 'Hot Zone',
    loading_bracket: 'Loading tournament data...',
    loading_groups: 'Loading groups...',
    loading_thirds: 'Calculating standings...',
    loading_hot: 'Analyzing paths and clashes...',
    leg_confirmed: 'Qualified',
    leg_projected: 'Projected',
    leg_tbd: 'TBD',
    leg_live: 'Live',
    leg_done: 'Played',
    thirds_title: 'Best Third-Place Teams',
    thirds_desc: 'The 8 best third-place teams (out of 12 groups) advance to the Round of 32.',
    footer: 'Built with 🤍 by Ever Molina',
    updated: 'Updated:',
    group: 'Group',
    pts: 'Pts', gf: 'GF', gc: 'GA', gd: 'GD', pj: 'MP', w: 'W', d: 'D', l: 'L',
    team: 'Team',
    slot_r32: 'R32 Slot',
    round_of_32: 'Round of 32',
    round_of_16: 'Round of 16',
    qf: 'Quarterfinals',
    sf: 'Semifinals',
    final: 'The Grand Final',
    third_place: '3rd Place',
    qualified: 'Qualified',
    projected: 'Projected',
    tbd: 'TBD',
    group_prefix: 'Group',
    clash_label: 'Projected:',
    clashes_title: 'Titans Clash',
    messi_cr7: 'MESSI vs CR7',
    clash_waiting: 'Waiting for standings to project the clash...',
    clash_in: 'Possible clash in',
    tut_title_0: 'Welcome to the World Cup 2026 Tracker',
    tut_body_0: 'This app follows matches in real time and projects the full bracket based on current standings.',
    tut_title_1: 'Bracket View',
    tut_body_1: 'See the full tournament bracket. Confirmed teams have clinched; projected teams currently lead their group.',
    tut_title_2: 'Group Standings',
    tut_body_2: 'Check live standings for all 12 groups with points, goal difference, and live scores.',
    tut_title_3: 'Best Third-Places',
    tut_body_3: 'The 8 best third-place teams also qualify. This view shows who would advance based on current results.',
    tut_title_4: 'Hot Zone',
    tut_body_4: 'Could Messi and CR7 clash? Brazil vs. France in the Semis? This section projects explosive showdowns between top favorites.',
    tut_prev: 'Previous',
    tut_next: 'Next',
    tut_finish: 'Got it!',
    lang_switch_label: '🇲🇽 ES',
    kofi_msg: 'Enjoying the app?',
    kofi_sub: 'You can buy me a coffee to keep it going ☕',
    kofi_btn: '☕ Buy me a coffee',
    kofi_dismiss: 'Maybe later',
    tab_today: 'Today',
    loading_today: 'Loading today\'s matches...',
    no_matches_today: 'No matches scheduled for today.',
    match_status_live: '🔴 LIVE',
    match_status_final: 'Final',
    match_status_upcoming: 'Upcoming',
    your_tz: 'Time in your timezone',
    venue: 'Venue',
    today_heading: "Today's Matches",
    today_subtitle: 'Times shown in your local timezone',
  },
};

// Auto-detect language: saved preference > browser language > Spanish default
const _savedLang = localStorage.getItem('wc26_lang');
const _browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
let _lang = _savedLang || _browserLang;

function t(key) {
  return (STRINGS[_lang] && STRINGS[_lang][key]) || (STRINGS['es'][key]) || key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.textContent = val;
  });
  // Update html lang attribute
  document.documentElement.lang = _lang;
  // Update lang button label
  const btn = document.getElementById('langBtnLabel');
  if (btn) btn.textContent = t('lang_switch_label');
}

function setupLang() {
  applyI18n();
  const btn = document.getElementById('langBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    _lang = _lang === 'es' ? 'en' : 'es';
    localStorage.setItem('wc26_lang', _lang);
    applyI18n();
    translateTutorial();   // re-translate tutorial text immediately
    loadAndRender();
  });
}

// ============================================================
// SECTION 1: CONSTANTS
// ============================================================

/** Bracket card & layout dimensions (must match CSS vars) */
const BC_W  = 175;  // card width px
const BC_H  = 82;   // card height px
const BS_H  = 100;  // slot height px (8 × 100 = 800 total)
const BN_W  = 36;   // connector width px
const BB_H  = 800;  // total bracket height px
const BB_W  = BC_W * 9 + BN_W * 8; // 1855px total

/** Column X positions (left edge of each match card column) */
const COL_X = {
  R32L:  0,
  R16L:  BC_W + BN_W,
  QFL:   (BC_W + BN_W) * 2,
  SFL:   (BC_W + BN_W) * 3,
  FIN:   (BC_W + BN_W) * 4,
  SFR:   (BC_W + BN_W) * 5,
  QFR:   (BC_W + BN_W) * 6,
  R16R:  (BC_W + BN_W) * 7,
  R32R:  (BC_W + BN_W) * 8,
};

/** Round of 32 — structure & team slots */
const R32_MATCHES = [
  // ── LEFT SIDE ──────────────────────────────────────────
  { id: 'M73', col: 'R32L', slotY: 0, team1: { type: '2nd', group: 'A' }, team2: { type: '2nd', group: 'B' } },
  { id: 'M74', col: 'R32L', slotY: 1, team1: { type: '1st', group: 'E' }, team2: { type: '3rd', eligible: ['A','B','C','D','F'] } },
  { id: 'M75', col: 'R32L', slotY: 2, team1: { type: '1st', group: 'F' }, team2: { type: '2nd', group: 'C' } },
  { id: 'M76', col: 'R32L', slotY: 3, team1: { type: '1st', group: 'C' }, team2: { type: '2nd', group: 'F' } },
  { id: 'M77', col: 'R32L', slotY: 4, team1: { type: '1st', group: 'I' }, team2: { type: '3rd', eligible: ['C','D','F','G','H'] } },
  { id: 'M78', col: 'R32L', slotY: 5, team1: { type: '2nd', group: 'E' }, team2: { type: '2nd', group: 'I' } },
  { id: 'M79', col: 'R32L', slotY: 6, team1: { type: '1st', group: 'A' }, team2: { type: '3rd', eligible: ['C','E','F','H','I'] } },
  { id: 'M80', col: 'R32L', slotY: 7, team1: { type: '2nd', group: 'D' }, team2: { type: '2nd', group: 'G' } },
  // ── RIGHT SIDE ─────────────────────────────────────────
  { id: 'M81', col: 'R32R', slotY: 0, team1: { type: '1st', group: 'B' }, team2: { type: '3rd', eligible: ['E','F','G','I','J'] } },
  { id: 'M82', col: 'R32R', slotY: 1, team1: { type: '1st', group: 'J' }, team2: { type: '2nd', group: 'H' } },
  { id: 'M83', col: 'R32R', slotY: 2, team1: { type: '1st', group: 'H' }, team2: { type: '2nd', group: 'J' } },
  { id: 'M84', col: 'R32R', slotY: 3, team1: { type: '2nd', group: 'K' }, team2: { type: '2nd', group: 'L' } },
  { id: 'M85', col: 'R32R', slotY: 4, team1: { type: '1st', group: 'G' }, team2: { type: '3rd', eligible: ['A','E','H','I','J'] } },
  { id: 'M86', col: 'R32R', slotY: 5, team1: { type: '1st', group: 'K' }, team2: { type: '3rd', eligible: ['D','E','I','J','L'] } },
  { id: 'M87', col: 'R32R', slotY: 6, team1: { type: '1st', group: 'L' }, team2: { type: '3rd', eligible: ['E','H','I','J','K'] } },
  { id: 'M88', col: 'R32R', slotY: 7, team1: { type: '1st', group: 'D' }, team2: { type: '3rd', eligible: ['B','E','F','I','J'] } },
];

/** Bracket tree: which R32 pairs feed into R16, then QF, SF, Final */
const BRACKET_TREE = {
  'R16-1': { from: ['M73','M74'], col: 'R16L', slotY: 0.5 },
  'R16-2': { from: ['M75','M76'], col: 'R16L', slotY: 2.5 },
  'R16-3': { from: ['M77','M78'], col: 'R16L', slotY: 4.5 },
  'R16-4': { from: ['M79','M80'], col: 'R16L', slotY: 6.5 },
  'R16-5': { from: ['M81','M82'], col: 'R16R', slotY: 0.5 },
  'R16-6': { from: ['M83','M84'], col: 'R16R', slotY: 2.5 },
  'R16-7': { from: ['M85','M86'], col: 'R16R', slotY: 4.5 },
  'R16-8': { from: ['M87','M88'], col: 'R16R', slotY: 6.5 },
  'QF1':   { from: ['R16-1','R16-2'], col: 'QFL', slotY: 1.5 },
  'QF2':   { from: ['R16-3','R16-4'], col: 'QFL', slotY: 5.5 },
  'QF3':   { from: ['R16-5','R16-6'], col: 'QFR', slotY: 1.5 },
  'QF4':   { from: ['R16-7','R16-8'], col: 'QFR', slotY: 5.5 },
  'SF1':   { from: ['QF1','QF2'],     col: 'SFL', slotY: 3.5 },
  'SF2':   { from: ['QF3','QF4'],     col: 'SFR', slotY: 3.5 },
  'FINAL': { from: ['SF1','SF2'],     col: 'FIN', slotY: 3.5 },
  '3RD':   { from: ['SF1','SF2'],     col: 'FIN', slotY: 5.5, isThirdPlace: true },
};

/** Third-place slots and their eligible group letters (Annex C FIFA 2026) */
const THIRD_SLOTS = {
  'M74': ['A','B','C','D','F'],
  'M77': ['C','D','F','G','H'],
  'M79': ['C','E','F','H','I'],
  'M81': ['E','F','G','I','J'],
  'M85': ['A','E','H','I','J'],
  'M86': ['D','E','I','J','L'],
  'M87': ['E','H','I','J','K'],
  'M88': ['B','E','F','I','J'],
};

/** ISO 3166-1 alpha-2 flag codes for team names */
const FLAGS = {
  // North & Central America
  'Mexico':'mx','México':'mx','USA':'us','United States':'us','Estados Unidos':'us',
  'Canada':'ca','Canadá':'ca','Costa Rica':'cr','Honduras':'hn','Jamaica':'jm',
  'El Salvador':'sv','Panama':'pa','Panamá':'pa','Cuba':'cu','Haiti':'ht','Haití':'ht',
  'Guatemala':'gt','Trinidad & Tobago':'tt','Trinidad and Tobago':'tt','Curaçao':'cw',
  // South America
  'Brazil':'br','Brasil':'br','Argentina':'ar','Colombia':'co','Uruguay':'uy',
  'Ecuador':'ec','Chile':'cl','Paraguay':'py','Peru':'pe','Perú':'pe',
  'Bolivia':'bo','Venezuela':'ve','Guyana':'gy','Suriname':'sr',
  // Europe
  'Germany':'de','Alemania':'de','France':'fr','Francia':'fr',
  'Spain':'es','España':'es','England':'gb-eng','Inglaterra':'gb-eng',
  'Netherlands':'nl','Países Bajos':'nl','Holland':'nl',
  'Portugal':'pt','Belgium':'be','Bélgica':'be','Italy':'it','Italia':'it',
  'Croatia':'hr','Croacia':'hr','Serbia':'rs','Poland':'pl','Polonia':'pl',
  'Denmark':'dk','Dinamarca':'dk','Sweden':'se','Suecia':'se',
  'Norway':'no','Noruega':'no','Turkey':'tr','Turquía':'tr',
  'Ukraine':'ua','Ucrania':'ua','Austria':'at','Hungary':'hu','Hungría':'hu',
  'Romania':'ro','Rumanía':'ro','Slovakia':'sk','Eslovaquia':'sk',
  'Slovenia':'si','Eslovenia':'si','Czech Republic':'cz','Czechia':'cz',
  'República Checa':'cz','Greece':'gr','Grecia':'gr','Albania':'al',
  'Switzerland':'ch','Suiza':'ch','Scotland':'gb-sct','Escocia':'gb-sct',
  'Wales':'gb-wls','Gales':'gb-wls','Ireland':'ie','Irlanda':'ie',
  'Georgia':'ge','Bosnia & Herzegovina':'ba','Bosnia':'ba',
  'North Macedonia':'mk','Montenegro':'me','Iceland':'is','Islandia':'is',
  'Finland':'fi','Finlandia':'fi','Russia':'ru','Rusia':'ru',
  'Kosovo':'xk','Bulgaria':'bg','Belarus':'by','Estonia':'ee',
  'Latvia':'lv','Lithuania':'lt','Moldova':'md','Luxembourg':'lu',
  'Malta':'mt','Cyprus':'cy','Andorra':'ad','Liechtenstein':'li',
  'San Marino':'sm','Monaco':'mc','Armenia':'am','Azerbaijan':'az',
  'Kazakhstan':'kz','Kyrgyzstan':'kg',
  // Africa
  'Morocco':'ma','Marruecos':'ma','Senegal':'sn','Nigeria':'ng',
  'Cameroon':'cm','Camerún':'cm','South Africa':'za','Sudáfrica':'za',
  'Ghana':'gh',"Côte d'Ivoire":'ci','Ivory Coast':'ci','Egypt':'eg','Egipto':'eg',
  'Algeria':'dz','Argelia':'dz','Tunisia':'tn','Túnez':'tn','Mali':'ml',
  'Cape Verde':'cv','Cabo Verde':'cv','DR Congo':'cd','Congo DR':'cd',
  'Guinea':'gn','Zambia':'zm','Angola':'ao','Kenya':'ke','Kenia':'ke',
  'Tanzania':'tz','Mozambique':'mz','Namibia':'na','Zimbabwe':'zw',
  'Uganda':'ug','Rwanda':'rw','Comoros':'km','Comoras':'km',
  'Burkina Faso':'bf','Gabon':'ga','Gabón':'ga','Benin':'bj','Benín':'bj',
  'Libya':'ly','Libia':'ly','Ethiopia':'et','Etiopía':'et',
  'Equatorial Guinea':'gq','Guinea Ecuatorial':'gq','Sudan':'sd','Sudán':'sd',
  'Congo':'cg','Togo':'tg','Niger':'ne','Sierra Leone':'sl','Liberia':'lr',
  // Asia
  'Japan':'jp','Japón':'jp','South Korea':'kr','Corea del Sur':'kr',
  'Australia':'au','Saudi Arabia':'sa','Arabia Saudita':'sa','Arabia Saudí':'sa',
  'Iran':'ir','Irán':'ir','Qatar':'qa','Iraq':'iq','UAE':'ae',
  'Emiratos Árabes Unidos':'ae','China':'cn','India':'in',
  'Thailand':'th','Tailandia':'th','Vietnam':'vn','Indonesia':'id',
  'Philippines':'ph','Filipinas':'ph','Uzbekistan':'uz','Uzbekistán':'uz',
  'North Korea':'kp','Corea del Norte':'kp','Jordan':'jo','Jordania':'jo',
  'Oman':'om','Omán':'om','Bahrain':'bh','Baréin':'bh','Kuwait':'kw',
  'Syria':'sy','Siria':'sy','Lebanon':'lb','Líbano':'lb',
  'Israel':'il','Palestine':'ps','Palestina':'ps',
  'New Zealand':'nz','Nueva Zelanda':'nz','Fiji':'fj',
  'Papua New Guinea':'pg','Papúa Nueva Guinea':'pg',
  'Tajikistan':'tj','Turkmenistan':'tm',
};

const FLAG_CDN = 'https://flagcdn.com/w40/';

function getFlagUrl(name) {
  if (!name) return '';
  const code = FLAGS[name] || FLAGS[name.trim()];
  if (!code) return '';
  return `${FLAG_CDN}${code}.png`;
}

// ============================================================
// SECTION 2: DATA SERVICE
// ============================================================

let _lastRaw = null;
let _lastSource = '';

async function fetchData() {
  // Strategy:
  // 1. openfootball = always the structural base (groups, fixtures, schedules)
  // 2. ESPN = overlay real-time scores on top

  // Always load openfootball as base (has all 104 matches with group info)
  let base = [];
  try {
    base = await withTimeout(fetchFromOpenfootball(), 8000);
    console.log(`[openfootball] ${base.length} partidos cargados`);
  } catch (e) {
    console.error('[openfootball] falló:', e.message);
    setSourceBadge('sin conexión', 'error');
    throw new Error('No se pudieron cargar los datos del torneo.');
  }

  // Try ESPN to overlay live/real-time scores on top
  try {
    const espnMatches = await withTimeout(fetchFromESPN(), 10000);
    const merged = mergeESPNScores(base, espnMatches);
    const liveCount = merged.filter(m => m.status === 'live').length;
    const playedCount = merged.filter(m => m.status === 'finished').length;
    console.log(`[ESPN] ${espnMatches.length} partidos ESPN, ${playedCount} jugados, ${liveCount} en vivo`);
    _lastSource = liveCount > 0 ? 'ESPN Live' : 'ESPN + openfootball';
    setSourceBadge(_lastSource, 'live');
    return merged;
  } catch (e) {
    console.warn('[ESPN] falló:', e.message);
  }

  // Fallback: openfootball solo
  _lastSource = 'openfootball';
  setSourceBadge('openfootball', 'live');
  return base;
}

/**
 * Merges ESPN real-time scores into openfootball base data.
 * Matches by team name (fuzzy: normalize & compare).
 */
function mergeESPNScores(base, espnMatches) {
  // Build ESPN lookup: normalize(team1 + team2) → match
  const espnMap = new Map();
  espnMatches.forEach(m => {
    const key1 = normKey(m.team1) + '|' + normKey(m.team2);
    const key2 = normKey(m.team2) + '|' + normKey(m.team1);
    espnMap.set(key1, m);
    espnMap.set(key2, m);
  });

  return base.map(bm => {
    const key = normKey(bm.team1) + '|' + normKey(bm.team2);
    const espn = espnMap.get(key);
    if (!espn) return bm;
    // Overlay ESPN scores and status
    const s1 = espn.score1 !== null ? espn.score1 : bm.score1;
    const s2 = espn.score2 !== null ? espn.score2 : bm.score2;
    // If ESPN says scores are flipped (home/away reversed), detect and correct
    return {
      ...bm,
      score1: s1,
      score2: s2,
      status: espn.status !== 'scheduled' ? espn.status : bm.status,
    };
  });
}

function normKey(name) {
  if (!name) return '';
  // Normalize for fuzzy matching: lowercase, remove accents, common abbreviations
  const map = {
    'united states': 'usa', 'estados unidos': 'usa',
    'south korea': 'corea del sur', 'korea republic': 'corea del sur',
    "ivory coast": 'cote divoire', "cote d'ivoire": 'cote divoire', "côte d'ivoire": 'cote divoire',
    'bosnia & herzegovina': 'bosnia', 'bosnia and herzegovina': 'bosnia',
    'trinidad & tobago': 'trinidad', 'trinidad and tobago': 'trinidad',
    'dr congo': 'congo dr', 'democratic republic of congo': 'congo dr',
    'new zealand': 'nz', 'papua new guinea': 'png',
  };
  const norm = name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  return map[norm] || norm;
}


function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)),
  ]);
}

async function fetchFromWorldcup26() {
  const res = await fetch('https://worldcup26.ir/get/games');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  // Normalize worldcup26.ir format
  const arr = Array.isArray(json) ? json : (json.data || json.games || []);
  return arr.map(m => normalizeW26(m)).filter(Boolean);
}

function normalizeW26(m) {
  // Expected fields: home_team{name}, away_team{name}, home_score, away_score, group, status, date, stage
  const t1 = m.home_team?.name || m.team1 || m.home || '';
  const t2 = m.away_team?.name || m.team2 || m.away || '';
  const g  = m.group ? String(m.group).replace(/^group\s*/i, '').toUpperCase() : null;
  const s1 = m.home_score != null ? +m.home_score : (m.score?.ft?.[0] ?? null);
  const s2 = m.away_score != null ? +m.away_score : (m.score?.ft?.[1] ?? null);
  const played = s1 !== null && s2 !== null;
  const live   = (m.status || '').toLowerCase().includes('live') ||
                 (m.status || '').toLowerCase().includes('progress');
  return {
    team1: t1, team2: t2,
    group: g,
    score1: played ? s1 : null,
    score2: played ? s2 : null,
    status: live ? 'live' : played ? 'finished' : 'scheduled',
    date: m.date ? m.date.slice(0,10) : '',
    round: m.stage || m.round || (g ? 'Group Stage' : 'Knockout'),
  };
}

async function fetchFromOpenfootball() {
  const url = 'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json';
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const arr = json.matches || [];
  return arr.map(m => normalizeOpenfoot(m)).filter(Boolean);
}

function normalizeOpenfoot(m) {
  const g = m.group ? String(m.group).replace(/^Group\s*/i,'').toUpperCase() : null;
  const s1 = m.score?.ft?.[0] ?? null;
  const s2 = m.score?.ft?.[1] ?? null;
  const played = s1 !== null && s2 !== null;
  return {
    team1: m.team1, team2: m.team2,
    group: g,
    score1: played ? s1 : null,
    score2: played ? s2 : null,
    status: played ? 'finished' : 'scheduled',
    date: m.date || '',
    time: m.time || '',
    ground: m.ground || '',
    round: m.round || (g ? 'Group Stage' : 'Knockout'),
  };
}

async function fetchFromESPN() {
  // ESPN unofficial scoreboard — full tournament date range (Jun 11 – Jul 15)
  const dates = [
    '20260611','20260612','20260613','20260614','20260615',
    '20260616','20260617','20260618','20260619','20260620',
    '20260621','20260622','20260623','20260624','20260625','20260626',
    '20260627','20260628','20260629','20260630',
    '20260701','20260702','20260703','20260704','20260705','20260706',
    '20260707','20260708','20260709','20260710','20260711','20260712',
    '20260713','20260714','20260715',
  ];
  const allMatches = [];
  const results = await Promise.allSettled(
    dates.map(d =>
      fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=${d}`)
        .then(r => r.ok ? r.json() : null)
        .catch(() => null)
    )
  );
  results.forEach(r => {
    if (r.status !== 'fulfilled' || !r.value) return;
    (r.value.events || []).forEach(ev => {
      const comp = ev.competitions?.[0];
      if (!comp) return;
      const home = comp.competitors?.find(c => c.homeAway === 'home');
      const away = comp.competitors?.find(c => c.homeAway === 'away');
      if (!home || !away) return;

      // Use state field: 'post' = finished, 'in' = live, 'pre' = upcoming
      const state = comp.status?.type?.state || 'pre';
      const finished = state === 'post';
      const live     = state === 'in';
      const s1 = (finished || live) ? parseInt(home.score, 10) : null;
      const s2 = (finished || live) ? parseInt(away.score, 10) : null;

      allMatches.push({
        team1: home.team?.displayName || home.team?.name || '',
        team2: away.team?.displayName || away.team?.name || '',
        group: null, // ESPN doesn't provide group info — will be merged from openfootball
        score1: s1 !== null && !isNaN(s1) ? s1 : null,
        score2: s2 !== null && !isNaN(s2) ? s2 : null,
        status: live ? 'live' : finished ? 'finished' : 'scheduled',
        date: ev.date ? ev.date.slice(0, 10) : '',
        round: 'Group Stage',
      });
    });
  });
  if (allMatches.length === 0) throw new Error('ESPN: no data returned');
  return allMatches;
}

// ============================================================
// SECTION 3: STANDINGS ENGINE
// ============================================================

/**
 * Builds group standings from a flat array of match objects.
 * Returns { A: [{team, pj, g, e, p, gf, gc, dg, pts, fp}, ...], B: [...], ... }
 */
function buildGroups(matches) {
  const groups = {};

  const groupMatches = matches.filter(m => m.group);

  groupMatches.forEach(m => {
    const g = m.group;
    if (!groups[g]) groups[g] = { name: g, teams: {}, matches: [] };
    groups[g].matches.push(m);

    [m.team1, m.team2].forEach(t => {
      if (t && !groups[g].teams[t]) {
        groups[g].teams[t] = { name: t, pj:0, g:0, e:0, p:0, gf:0, gc:0, dg:0, pts:0, fp:0 };
      }
    });
  });

  // Calculate stats for each group
  Object.values(groups).forEach(grp => {
    grp.matches.forEach(m => {
      if ((m.status !== 'finished' && m.status !== 'live') || m.score1 === null) return;
      const t1 = grp.teams[m.team1];
      const t2 = grp.teams[m.team2];
      if (!t1 || !t2) return;

      t1.pj++; t2.pj++;
      t1.gf += m.score1; t1.gc += m.score2;
      t2.gf += m.score2; t2.gc += m.score1;

      if (m.score1 > m.score2)      { t1.g++; t1.pts+=3; t2.p++; }
      else if (m.score2 > m.score1) { t2.g++; t2.pts+=3; t1.p++; }
      else                          { t1.e++; t1.pts++; t2.e++; t2.pts++; }
    });

    Object.values(grp.teams).forEach(t => { t.dg = t.gf - t.gc; });

    // Sort standings: Pts > DG > GF > Name (h2h simplified)
    grp.standings = Object.values(grp.teams).sort((a, b) =>
      b.pts - a.pts || b.dg - a.dg || b.gf - a.gf || a.name.localeCompare(b.name)
    );
  });

  return groups;
}

// ============================================================
// SECTION 4: THIRD PLACE RANKER
// ============================================================

/**
 * Given groups object, return ranked array of all 12 third-place teams
 * sorted by the best-3rd-place criteria (FIFA rules).
 */
function rankThirdPlace(groups) {
  const thirds = [];
  Object.values(groups).forEach(grp => {
    if (!grp.standings || grp.standings.length < 3) return;
    const t = grp.standings[2]; // 3rd place
    thirds.push({ ...t, fromGroup: grp.name });
  });

  // Sort: Pts > DG > GF > FP (fair play, lower = better) > FIFA ranking (unknown → 0)
  return thirds.sort((a,b) =>
    b.pts - a.pts || b.dg - a.dg || b.gf - a.gf || a.name.localeCompare(b.name)
  );
}

// ============================================================
// SECTION 5: ANNEX C RESOLVER (Backtracking)
// ============================================================

/**
 * Given an array of 8 group letters that qualify (e.g. ['A','B','C','D','E','F','G','H']),
 * returns a map { matchId → groupLetter } for each of the 8 third-place slots.
 * Uses backtracking to find a valid assignment consistent with FIFA's Annex C constraints.
 */
function resolveAnnexC(qualifyingGroups) {
  const slots = Object.keys(THIRD_SLOTS);
  const assignment = {};

  // Sort by fewest eligible options first (most constrained) for faster backtracking
  const sortedSlots = [...slots].sort((a,b) => {
    const aOpts = THIRD_SLOTS[a].filter(g => qualifyingGroups.includes(g)).length;
    const bOpts = THIRD_SLOTS[b].filter(g => qualifyingGroups.includes(g)).length;
    return aOpts - bOpts;
  });

  function bt(idx, remaining) {
    if (idx === sortedSlots.length) return true;
    const slot = sortedSlots[idx];
    const eligible = THIRD_SLOTS[slot].filter(g => remaining.includes(g));
    for (const group of eligible) {
      assignment[slot] = group;
      if (bt(idx + 1, remaining.filter(g => g !== group))) return true;
      delete assignment[slot];
    }
    return false;
  }

  bt(0, [...qualifyingGroups]);
  return assignment; // may be partial if no full assignment found (edge cases)
}

// ============================================================
// SECTION 6: BRACKET RENDERER
// ============================================================

/**
 * Main bracket rendering function.
 * Creates the bracket-body div with all match cards, then draws SVG connectors.
 */
function renderBracket(groups) {
  const wrap = document.getElementById('bracketWrap');
  const loader = document.getElementById('bracketLoader');
  if (loader) loader.remove();

  // Clear previous
  const old = wrap.querySelector('.bracket-area');
  if (old) old.remove();

  const area = document.createElement('div');
  area.className = 'bracket-area';

  // Round labels header
  const hdr = document.createElement('div');
  hdr.className = 'bracket-col-hdr';
  hdr.style.cssText = `position:relative;width:${BB_W}px;height:28px;margin-bottom:4px;`;
  const roundLabels = [
    { col:'R32L', label: t('round_of_32') },
    { col:'R16L', label: t('round_of_16') },
    { col:'QFL',  label: t('qf') },
    { col:'SFL',  label: t('sf') },
    { col:'FIN',  label:'⭐ Final' },
    { col:'SFR',  label: t('sf') },
    { col:'QFR',  label: t('qf') },
    { col:'R16R', label: t('round_of_16') },
    { col:'R32R', label: t('round_of_32') },
  ];
  roundLabels.forEach(({ col, label }) => {
    const el = document.createElement('div');
    el.textContent = label;
    el.style.cssText = `position:absolute;left:${COL_X[col]}px;width:${BC_W}px;text-align:center;
      font-family:'Outfit',sans-serif;font-size:0.6rem;font-weight:700;
      text-transform:uppercase;letter-spacing:0.1em;color:#475569;top:6px;`;
    if (label.includes('⭐')) el.style.color = '#f59e0b';
    hdr.appendChild(el);
  });
  area.appendChild(hdr);

  // Bracket body
  const body = document.createElement('div');
  body.className = 'bracket-body';
  body.style.cssText = `position:relative;width:${BB_W}px;height:${BB_H + 120}px;`;

  // SVG for connector lines
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'bracket-svg');
  svg.setAttribute('width', BB_W);
  svg.setAttribute('height', BB_H + 120);
  svg.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;z-index:1;overflow:visible;`;
  body.appendChild(svg);

  // Build standings lookup: { 'A': [{team,rank,...}], ... }
  const standings = {};
  const thirdPlaceRanked = rankThirdPlace(groups);
  const top8Thirds = thirdPlaceRanked.slice(0, 8);
  const qualifyingGroups = top8Thirds.map(t => t.fromGroup);
  const annexC = resolveAnnexC(qualifyingGroups);

  // Group all completed = has played all matches
  const groupsCompleted = {};
  Object.entries(groups).forEach(([g, grp]) => {
    const totalExpected = 6; // C(4,2) = 6 matches per group
    const played = grp.matches.filter(m => m.status === 'finished').length;
    groupsCompleted[g] = played >= totalExpected;
    standings[g] = grp.standings || [];
  });

  // ALL 12 groups must be done before any 3rd-place slot can be "confirmed"
  // (because top-8 ranking requires knowing every group's 3rd place)
  const allGroupsCompleted = Object.values(groupsCompleted).length === 12 &&
                             Object.values(groupsCompleted).every(Boolean);

  // Helper to resolve team info for a slot
  function resolveTeam(slot) {
    const { type, group, eligible } = slot;
    const groupStandings = standings[group] || [];

    if (type === '1st' || type === '2nd') {
      const idx = type === '1st' ? 0 : 1;
      const team = groupStandings[idx];
      if (!team) return { name: `1º Grupo ${group}`, status: 'tbd', flag: '' };
      // A 1st/2nd place is confirmed once their own group finishes
      const confirmed = groupsCompleted[group] || false;
      return {
        name: team.name,
        status: confirmed ? 'confirmed' : 'projected',
        flag: getFlagUrl(team.name),
        pts: team.pts,
      };
    }

    if (type === '3rd') {
      // Find which R32 match this 3rd-place slot belongs to
      // by matching the eligible groups array
      const r32match = R32_MATCHES.find(r =>
        r.team2.type === '3rd' &&
        r.team2.eligible &&
        eligible &&
        r.team2.eligible.length === eligible.length &&
        r.team2.eligible.every(g => eligible.includes(g))
      );
      const matchId = r32match ? r32match.id : null;
      const assignedGroup = matchId ? annexC[matchId] : null;

      if (assignedGroup) {
        const grpStandings = standings[assignedGroup] || [];
        const team = grpStandings[2]; // 3rd place team
        if (team) {
          // 3rd place can only be CONFIRMED when ALL groups are done
          // — only then we know definitively the top-8 third places
          return {
            name: team.name,
            status: allGroupsCompleted ? 'confirmed' : 'projected',
            flag: getFlagUrl(team.name),
            pts: team.pts,
            note: `3° Grupo ${assignedGroup}`,
          };
        }
      }

      // Not yet determined — show eligible groups
      const eligibleStr = eligible ? eligible.join('/') : '?';
      return { name: `3° (${eligibleStr})`, status: 'tbd', flag: '', note: `Grupos ${eligibleStr}` };
    }

    return { name: '—', status: 'tbd', flag: '' };
  }

  // Render R32 matches
  const r32Results = {}; // track which team "won" for bracket progression
  R32_MATCHES.forEach(m => {
    const xL = COL_X[m.col];
    const yC = m.slotY * BS_H + BS_H / 2;
    const yT = yC - BC_H / 2;

    const t1 = resolveTeam(m.team1);
    const t2 = resolveTeam(m.team2);
    const overallStatus = (t1.status === 'confirmed' && t2.status === 'confirmed') ? 'confirmed'
                        : (t1.status === 'tbd' || t2.status === 'tbd') ? 'tbd'
                        : 'projected';

    const card = createMatchCard({
      id: m.id, label: m.id,
      date: '', // Dates start June 28
      t1, t2, overallStatus,
    });
    card.style.top  = yT + 'px';
    card.style.left = xL + 'px';
    body.appendChild(card);

    r32Results[m.id] = { t1, t2, status: overallStatus };
  });

  // Render subsequent rounds (R16, QF, SF, Final)
  function renderRound(matchId, node) {
    const { from, col, slotY, isThirdPlace } = node;
    const xL = COL_X[col];
    const yC = slotY * BS_H + BS_H / 2;
    const yT = yC - BC_H / 2;

    // Try to project the winner from the previous round's projected teams
    function getProjected(fromId) {
      const prev = r32Results[fromId];
      if (!prev) return { name: `Gan. ${fromId}`, status: 'tbd', flag: '' };
      // We don't know the winner yet, show as TBD but with a hint
      return { name: `Gan. ${fromId}`, status: 'tbd', flag: '' };
    }

    let t1 = getProjected(from[0]);
    let t2 = getProjected(from[1]);

    // If this is the 3rd place match, show loser hint
    if (isThirdPlace) {
      t1 = { name: `Perd. ${from[0]}`, status: 'tbd', flag: '' };
      t2 = { name: `Perd. ${from[1]}`, status: 'tbd', flag: '' };
    }

    const label = isThirdPlace ? '3er Puesto' : matchId.replace('-', ' ');
    const cssExtra = matchId === 'FINAL' ? ' mc-final' : isThirdPlace ? ' mc-3rd' : '';

    const card = createMatchCard({
      id: matchId, label,
      date: '',
      t1, t2, overallStatus: 'tbd',
    }, cssExtra);
    card.style.top  = yT + 'px';
    card.style.left = xL + 'px';

    if (isThirdPlace) {
      const hdr = card.querySelector('.mc-hdr');
      if (hdr) {
        hdr.style.background = 'rgba(139,92,246,0.1)';
        hdr.style.borderBottomColor = 'rgba(139,92,246,0.2)';
      }
    }

    body.appendChild(card);
    r32Results[matchId] = { t1, t2, status: 'tbd' };
  }

  Object.entries(BRACKET_TREE).forEach(([id, node]) => renderRound(id, node));

  // Draw SVG connector lines
  drawConnectors(svg, r32Results);

  // 3rd place separator label
  const label3rd = document.createElement('div');
  label3rd.textContent = '🥉 Tercer Lugar';
  label3rd.style.cssText = `
    position:absolute; left:${COL_X['FIN']}px; width:${BC_W}px; text-align:center;
    top:${5.5 * BS_H - 20}px;
    font-family:'Outfit',sans-serif; font-size:0.58rem; font-weight:700;
    text-transform:uppercase; letter-spacing:0.1em; color:#a78bfa;`;
  body.appendChild(label3rd);

  area.appendChild(body);
  wrap.appendChild(area);
}

function createMatchCard({ id, label, date, t1, t2, overallStatus }, extraClass = '') {
  const card = document.createElement('div');
  card.className = `mc st-${overallStatus}${extraClass}`;
  card.id = `mc-${id}`;
  card.style.width = BC_W + 'px';

  const hasScore1 = t1.score != null;
  const hasScore2 = t2.score != null;
  const played = hasScore1 && hasScore2;

  const w1 = played && t1.score > t2.score ? 'winner' : played && t1.score < t2.score ? 'loser' : '';
  const w2 = played && t2.score > t1.score ? 'winner' : played && t2.score < t1.score ? 'loser' : '';

  const liveHTML = overallStatus === 'live' ? '<div class="mc-live-dot"></div>' : '';

  card.innerHTML = `
    <div class="mc-hdr">
      <span class="mc-id">${label}</span>
      ${liveHTML}
      <span class="mc-date">${date || '28 jun+'}</span>
    </div>
    <div class="mc-team ${w1}" title="${t1.name}">
      ${t1.flag ? `<img class="mc-flag" src="${t1.flag}" alt="${t1.name}" loading="lazy" onerror="this.style.display='none'">` : '<div class="mc-flag" style="background:#1e293b;border-radius:2px;"></div>'}
      <span class="mc-name ${t1.status === 'tbd' ? 'tbd' : ''}">${shorten(t1.name)}</span>
      <span class="mc-score ${w1 === 'winner' ? 'winner-score' : ''}">${played ? t1.score : '—'}</span>
    </div>
    <div class="mc-team ${w2}" title="${t2.name}">
      ${t2.flag ? `<img class="mc-flag" src="${t2.flag}" alt="${t2.name}" loading="lazy" onerror="this.style.display='none'">` : '<div class="mc-flag" style="background:#1e293b;border-radius:2px;"></div>'}
      <span class="mc-name ${t2.status === 'tbd' ? 'tbd' : ''}">${shorten(t2.name)}</span>
      <span class="mc-score ${w2 === 'winner' ? 'winner-score' : ''}">${played ? t2.score : '—'}</span>
    </div>`;

  return card;
}

/** Shorten long team names for cards */
function shorten(name) {
  if (!name) return '—';
  const map = {
    'Bosnia & Herzegovina': 'Bosnia',
    'Trinidad & Tobago': 'Trinidad',
    'Saudi Arabia': 'Arabia S.',
    'Arabia Saudita': 'Arabia S.',
    'North Macedonia': 'N. Macedonia',
    'South Africa': 'Sudáfrica',
    'South Korea': 'Corea S.',
    'Costa Rica': 'Costa Rica',
    'Czech Republic': 'Rep. Checa',
    'United States': 'USA',
    'Papua New Guinea': 'PNG',
    'Equatorial Guinea': 'Guinea Ec.',
    'DR Congo': 'R.D. Congo',
    'New Zealand': 'N. Zelanda',
  };
  return map[name] || (name.length > 13 ? name.slice(0, 12) + '…' : name);
}

// ============================================================
// SECTION 7: SVG CONNECTOR DRAWING
// ============================================================

function drawConnectors(svg, _results) {
  svg.innerHTML = '';
  const C_DEFAULT = 'rgba(255,255,255,0.1)';
  const C_GOLD    = 'rgba(245,158,11,0.4)';

  // Helper: draw an SVG line
  function line(x1, y1, x2, y2, color = C_DEFAULT) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', x1); el.setAttribute('y1', y1);
    el.setAttribute('x2', x2); el.setAttribute('y2', y2);
    el.setAttribute('stroke', color);
    el.setAttribute('stroke-width', '1.5');
    el.setAttribute('stroke-linecap', 'round');
    svg.appendChild(el);
  }

  // Draw a bracket "elbow" connector between two match cards and the next round card
  // left=true: lines extend to the right
  function elbow(x_fromEdge, y1, y2, connX, x_toEdge, color = C_DEFAULT) {
    const midY = (y1 + y2) / 2;
    line(x_fromEdge, y1, connX, y1, color);  // horizontal from match 1
    line(x_fromEdge, y2, connX, y2, color);  // horizontal from match 2
    line(connX, y1, connX, y2, color);        // vertical between
    line(connX, midY, x_toEdge, midY, color); // horizontal to next round
  }

  // LEFT SIDE — edges extend to the right
  const connXL = [
    BC_W + BN_W / 2,                    // L1: between R32L and R16L → 192.5
    (BC_W + BN_W) * 2 - BN_W / 2,      // L2: between R16L and QFL → 402.5
    (BC_W + BN_W) * 3 - BN_W / 2,      // L3: between QFL and SFL → 612.5
    (BC_W + BN_W) * 4 - BN_W / 2,      // L4: between SFL and FIN → 822.5
  ];
  // Recalc cleanly
  const L1 = COL_X.R32L  + BC_W + BN_W / 2;  // 192.5
  const L2 = COL_X.R16L  + BC_W + BN_W / 2;  // 402.5
  const L3 = COL_X.QFL   + BC_W + BN_W / 2;  // 612.5
  const L4 = COL_X.SFL   + BC_W + BN_W / 2;  // 822.5

  // R32L → R16L (4 pairs)
  for (let i = 0; i < 4; i++) {
    const y1 = (i * 2)     * BS_H + BS_H / 2;
    const y2 = (i * 2 + 1) * BS_H + BS_H / 2;
    elbow(COL_X.R32L + BC_W, y1, y2, L1, COL_X.R16L);
  }
  // R16L → QFL (2 pairs)
  for (let i = 0; i < 2; i++) {
    const y1 = (i * 4 + 0.5) * BS_H + BS_H / 2 - BS_H / 2;  // center of R16-1 or R16-3
    const y2 = (i * 4 + 2.5) * BS_H + BS_H / 2 - BS_H / 2;  // center of R16-2 or R16-4
    // Simpler: use the actual center Y values
    const cy1 = (i === 0 ? 0.5 : 4.5) * BS_H + BS_H / 2;
    const cy2 = (i === 0 ? 2.5 : 6.5) * BS_H + BS_H / 2;
    elbow(COL_X.R16L + BC_W, cy1, cy2, L2, COL_X.QFL);
  }
  // QFL → SFL
  {
    const cy1 = 1.5 * BS_H + BS_H / 2;
    const cy2 = 5.5 * BS_H + BS_H / 2;
    elbow(COL_X.QFL + BC_W, cy1, cy2, L3, COL_X.SFL);
  }
  // SFL → FINAL
  {
    const cy = 3.5 * BS_H + BS_H / 2;
    line(COL_X.SFL + BC_W, cy, COL_X.FIN, cy, C_GOLD);
  }

  // RIGHT SIDE — edges extend to the left
  const R1 = COL_X.SFR   - BN_W / 2;   // 1032.5
  const R2 = COL_X.QFR   - BN_W / 2;   // 1242.5
  const R3 = COL_X.R16R  - BN_W / 2;   // 1452.5
  const R4 = COL_X.R32R  - BN_W / 2;   // 1662.5

  // R32R → R16R (4 pairs, lines extend LEFT)
  for (let i = 0; i < 4; i++) {
    const y1 = (i * 2)     * BS_H + BS_H / 2;
    const y2 = (i * 2 + 1) * BS_H + BS_H / 2;
    elbow(COL_X.R32R, y1, y2, R4, COL_X.R16R + BC_W);
  }
  // R16R → QFR
  for (let i = 0; i < 2; i++) {
    const cy1 = (i === 0 ? 0.5 : 4.5) * BS_H + BS_H / 2;
    const cy2 = (i === 0 ? 2.5 : 6.5) * BS_H + BS_H / 2;
    elbow(COL_X.R16R, cy1, cy2, R3, COL_X.QFR + BC_W);
  }
  // QFR → SFR
  {
    const cy1 = 1.5 * BS_H + BS_H / 2;
    const cy2 = 5.5 * BS_H + BS_H / 2;
    elbow(COL_X.QFR, cy1, cy2, R2, COL_X.SFR + BC_W);
  }
  // SFR → FINAL
  {
    const cy = 3.5 * BS_H + BS_H / 2;
    line(COL_X.FIN + BC_W, cy, COL_X.SFR, cy, C_GOLD);
  }
}

// ============================================================
// SECTION 8: GROUPS RENDERER
// ============================================================

function renderGroups(groups) {
  const wrap = document.getElementById('groupsWrap');
  wrap.innerHTML = '';

  const sorted = Object.keys(groups).sort();
  sorted.forEach((gName, i) => {
    const grp = groups[gName];
    const card = document.createElement('div');
    card.className = 'group-card';
    card.style.animationDelay = `${i * 0.05}s`;

    const played = grp.matches.filter(m => m.status === 'finished').length;
    const total  = grp.matches.length;
    const allDone = played >= 6;
    const statusLabel = allDone ? 'Completado' : played > 0 ? 'En curso' : 'Por jugar';
    const statusClass = allDone ? 'completed' : played > 0 ? 'ongoing' : 'upcoming';

    const standings = grp.standings || Object.values(grp.teams || {});

    const rows = standings.map((t, idx) => {
      const rowClass = idx < 2 ? 'row-qualified' : (idx === 2 ? 'row-possible' : '');
      const gdClass  = t.dg > 0 ? 'gd-pos' : t.dg < 0 ? 'gd-neg' : '';
      const flag     = getFlagUrl(t.name);
      return `
        <tr class="${rowClass}">
          <td>
            <div class="team-cell">
              <span class="team-rank">${idx+1}</span>
              ${flag ? `<img class="team-flag-sm" src="${flag}" alt="${t.name}" loading="lazy" onerror="this.style.display='none'">` : '<div class="team-flag-sm" style="background:#1e293b;border-radius:2px;"></div>'}
              <span class="team-nm">${t.name}</span>
            </div>
          </td>
          <td>${t.pj}</td>
          <td>${t.g}</td>
          <td>${t.e}</td>
          <td>${t.p}</td>
          <td class="${gdClass}">${t.dg > 0 ? '+' : ''}${t.dg}</td>
          <td>${t.gf}</td>
          <td class="pts-cell">${t.pts}</td>
        </tr>`;
    }).join('');

    const matchRows = grp.matches.map(m => {
      const dateStr = m.date ? new Date(m.date + 'T12:00:00').toLocaleDateString('es-MX',{month:'short',day:'numeric'}) : '';
      const scoreHTML = m.status === 'finished'
        ? `<span class="mr-score">${m.score1} - ${m.score2}</span>`
        : `<span class="mr-score upcoming">${dateStr}</span>`;
      return `
        <div class="match-row">
          <span class="mr-date">${dateStr}</span>
          <span class="mr-teams">${m.team1} <strong>vs</strong> ${m.team2}</span>
          ${scoreHTML}
        </div>`;
    }).join('');

    card.innerHTML = `
      <div class="group-hdr">
        <span class="group-name">Grupo ${gName}</span>
        <span class="group-status ${statusClass}">${statusLabel}</span>
      </div>
      <div class="table-scroll">
        <table class="standings-table">
          <thead>
            <tr>
              <th>Equipo</th>
              <th title="Partidos Jugados">PJ</th>
              <th title="Ganados">G</th>
              <th title="Empatados">E</th>
              <th title="Perdidos">P</th>
              <th title="Diferencia de Goles">DG</th>
              <th title="Goles a Favor">GF</th>
              <th title="Puntos">Pts</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="group-matches">${matchRows}</div>`;

    wrap.appendChild(card);
  });
}

// ============================================================
// SECTION 9: THIRD PLACE RENDERER
// ============================================================

function renderThirds(groups) {
  const container = document.getElementById('thirdsContent');
  container.innerHTML = '';

  const ranked = rankThirdPlace(groups);
  if (ranked.length === 0) {
    container.innerHTML = '<div class="init-msg"><p>No hay datos de terceros lugares aún.</p></div>';
    return;
  }

  const annexC = resolveAnnexC(ranked.slice(0,8).map(t => t.fromGroup));

  // Find which match slot each qualifying group is assigned to
  const groupToSlot = {};
  Object.entries(annexC).forEach(([slot, group]) => { groupToSlot[group] = slot; });

  const rows = ranked.map((t, i) => {
    const qualifying = i < 8;
    const qualClass  = qualifying ? 'qualifies' : '';
    const gdClass    = t.dg > 0 ? 'gd-pos' : t.dg < 0 ? 'gd-neg' : '';
    const flag       = getFlagUrl(t.name);
    const slot       = qualifying ? (groupToSlot[t.fromGroup] || '—') : '—';

    const sepRow = i === 8 ? `<tr class="sep-row"><td colspan="8">── NO CLASIFICARÍAN ──</td></tr>` : '';

    return `${sepRow}<tr class="${qualClass}">
      <td class="rank-cell">${i+1}</td>
      <td>
        <div class="team-cell">
          ${flag ? `<img class="team-flag-sm" src="${flag}" alt="${t.name}" loading="lazy" onerror="this.style.display='none'">` : '<div class="team-flag-sm" style="background:#1e293b;border-radius:2px;"></div>'}
          <span class="team-nm">${t.name}</span>
          <span style="font-size:0.65rem;color:#475569;margin-left:4px;">G.${t.fromGroup}</span>
        </div>
      </td>
      <td class="pts-bold">${t.pts}</td>
      <td class="${gdClass}">${t.dg > 0 ? '+' : ''}${t.dg}</td>
      <td>${t.gf}</td>
      <td>${t.gc}</td>
      <td>${t.pj}</td>
      <td class="slot-cell">${qualifying ? slot : '—'}</td>
    </tr>`;
  }).join('');

  const table = document.createElement('table');
  table.className = 'thirds-table';
  table.innerHTML = `
    <thead>
      <tr>
        <th>#</th>
        <th>${t('team')}</th>
        <th title="${t('pts')}">${t('pts')}</th>
        <th title="${t('gd')}">${t('gd')}</th>
        <th title="${t('gf')}">${t('gf')}</th>
        <th title="${t('gc')}">${t('gc')}</th>
        <th title="${t('pj')}">${t('pj')}</th>
        <th>${t('slot_r32')}</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>`;

  const tableWrap = document.createElement('div');
  tableWrap.className = 'table-scroll';
  tableWrap.appendChild(table);

  container.appendChild(tableWrap);
}

// ============================================================
// SECTION 10: SOURCE BADGE & META
// ============================================================

function setSourceBadge(name, state) {
  const dot   = document.getElementById('srcDot');
  const label = document.getElementById('srcLabel');
  if (!dot || !label) return;
  dot.className = 'src-dot ' + state;
  const labels = {
    live:  name,
    warn:  name + ' (lento)',
    error: 'Sin conexión',
  };
  label.textContent = labels[state] || name;
}

function setLastUpdate() {
  const el = document.getElementById('updTime');
  if (el) {
    const now = new Date();
  const locale = _lang === 'en' ? 'en-US' : 'es-MX';
    el.textContent = t('updated') + ' ' + now.toLocaleTimeString(locale, { hour:'2-digit', minute:'2-digit' });
  }
}

// ============================================================
// SECTION 11: COUNTDOWN TIMER
// ============================================================

let _countdownInterval = null;

function startCountdown(matches) {
  if (_countdownInterval) clearInterval(_countdownInterval);

  const now = Date.now();
  const upcoming = matches
    .filter(m => m.status === 'scheduled' && m.date)
    .map(m => {
      let ts;
      if (m.time) {
        // e.g. "13:00 UTC-6"
        const parts = m.time.split(' ');
        const timeStr = parts[0];
        const tzStr = parts[1];
        let tz = 'Z';
        if (tzStr && tzStr.startsWith('UTC')) {
          const num = parseInt(tzStr.replace('UTC',''), 10);
          if (!isNaN(num)) {
            const sign = num >= 0 ? '+' : '-';
            const val = Math.abs(num);
            tz = `${sign}${String(val).padStart(2,'0')}:00`;
          }
        }
        ts = new Date(`${m.date}T${timeStr}:00${tz}`).getTime();
      } else {
        ts = new Date(`${m.date}T12:00:00Z`).getTime();
      }
      return { ...m, ts };
    })
    .filter(m => !isNaN(m.ts) && m.ts > now)
    .sort((a,b) => a.ts - b.ts);

  const live = matches.filter(m => m.status === 'live');

  const lbl  = document.getElementById('nextLbl');
  const tms  = document.getElementById('nextTeams');

  if (live.length > 0) {
    const m = live[0];
    if (lbl) lbl.textContent = t('live_now');
    if (tms) tms.textContent = `${m.team1} ${m.score1 ?? ''} - ${m.score2 ?? ''} ${m.team2}`;
    if (_countdownInterval) clearInterval(_countdownInterval);
    document.getElementById('clkD').textContent = '--';
    document.getElementById('clkH').textContent = '--';
    document.getElementById('clkM').textContent = '--';
    document.getElementById('clkS').textContent = '--';
    return;
  }

  if (upcoming.length === 0) {
    if (lbl) lbl.textContent = t('next_match');
    if (tms) tms.textContent = '—';
    return;
  }

  const next = upcoming[0];
  if (lbl) lbl.textContent = t('next_match');
  if (tms) tms.textContent = `${next.team1} vs ${next.team2}`;

  function tick() {
    const diff = next.ts - Date.now();
    if (diff <= 0) {
      clearInterval(_countdownInterval);
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2,'0');
    document.getElementById('clkD').textContent = pad(d);
    document.getElementById('clkH').textContent = pad(h);
    document.getElementById('clkM').textContent = pad(m);
    document.getElementById('clkS').textContent = pad(s);
  }
  tick();
  _countdownInterval = setInterval(tick, 1000);
}

// ============================================================
// SECTION 12: TAB CONTROLLER
// ============================================================

function setupTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected','false');
      });
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      const panelId = btn.dataset.panel;
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
    });
  });
}

// ============================================================
// SECTION 13: AUTO REFRESH
// ============================================================

let _refreshTimer = null;

function scheduleRefresh(hasLive) {
  if (_refreshTimer) clearInterval(_refreshTimer);
  const interval = hasLive ? 30000 : 300000; // 30s if live, 5min otherwise
  _refreshTimer = setInterval(() => { loadAndRender(); }, interval);
}

// Refresh button
function setupRefreshBtn() {
  const btn = document.getElementById('refreshBtn');
  if (btn) btn.addEventListener('click', () => {
    btn.style.transform = 'rotate(360deg)';
    setTimeout(() => { btn.style.transform = ''; }, 600);
    loadAndRender();
  });
}

// ============================================================
// SECTION 14: MAIN LOAD & RENDER
// ============================================================

let _allMatches = [];

async function loadAndRender() {
  try {
    const matches = await fetchData();
    _allMatches = matches;

    const groups = buildGroups(matches);
    const hasLive = matches.some(m => m.status === 'live');

    renderBracket(groups);
    renderGroups(groups);
    renderThirds(groups);
    renderHotArea(groups);
    renderToday(matches);
    startCountdown(matches);
    setLastUpdate();
    scheduleRefresh(hasLive);
    updateTodayTabBadge(matches);
  } catch (err) {
    console.error('[Mundial 2026]', err);
    const wrap = document.getElementById('bracketWrap');
    wrap.innerHTML = `
      <div class="error-msg">
        <h3>⚠️ Error de Conexión</h3>
        <p>${err.message || 'No se pudieron cargar los datos del torneo.'}</p>
        <button onclick="loadAndRender()">Reintentar</button>
      </div>`;
    setSourceBadge('sin datos', 'error');
  }
}

// ============================================================
// SECTION 15: HOT AREA (PATH TRACING)
// ============================================================

function renderHotArea(groups) {
  const wrap = document.getElementById('hotContent');
  if (!wrap) return;

  // 1. Re-evaluate bracket to find where everyone is placed in R32
  const standings = {};
  const thirdPlaceRanked = rankThirdPlace(groups);
  const top8Thirds = thirdPlaceRanked.slice(0, 8);
  const qualifyingGroups = top8Thirds.map(t => t.fromGroup);
  const annexC = resolveAnnexC(qualifyingGroups);

  Object.entries(groups).forEach(([g, grp]) => {
    standings[g] = grp.standings || [];
  });

  function getTeam(slot) {
    const { type, group, eligible } = slot;
    const groupStandings = standings[group] || [];
    if (type === '1st' || type === '2nd') {
      const idx = type === '1st' ? 0 : 1;
      const team = groupStandings[idx];
      return team ? team.name : null;
    }
    if (type === '3rd') {
      const r32match = R32_MATCHES.find(r => r.team2.type === '3rd' && r.team2.eligible && eligible && r.team2.eligible.length === eligible.length && r.team2.eligible.every(g => eligible.includes(g)));
      const matchId = r32match ? r32match.id : null;
      const assignedGroup = matchId ? annexC[matchId] : null;
      if (assignedGroup) {
        const team = (standings[assignedGroup] || [])[2];
        return team ? team.name : null;
      }
    }
    return null;
  }

  // Map TeamName -> Starting Node (e.g. 'Argentina' -> 'M73')
  const teamStarts = {};
  R32_MATCHES.forEach(m => {
    const t1 = getTeam(m.team1);
    const t2 = getTeam(m.team2);
    if (t1) teamStarts[t1] = m.id;
    if (t2) teamStarts[t2] = m.id;
  });

  // Build routing map: Node -> Parent Node
  const nodeParent = {};
  Object.entries(BRACKET_TREE).forEach(([id, node]) => {
    if (node.isThirdPlace) return; // Ignore 3rd place for championship path
    node.from.forEach(childId => {
      nodeParent[childId] = id;
    });
  });

  // Function to trace path to final
  function getPath(startNode) {
    const path = [startNode];
    let curr = startNode;
    while (nodeParent[curr]) {
      curr = nodeParent[curr];
      path.push(curr);
    }
    return path;
  }

  // Stages naming
  const stageNames = {
    'R32': t('round_of_32'),
    'R16': t('round_of_16'),
    'QF':  t('qf'),
    'SF':  t('sf'),
    'FIN': t('final'),
  };
  function getStageName(nodeId) {
    if (nodeId.startsWith('M')) return stageNames['R32'];
    if (nodeId.startsWith('R16')) return stageNames['R16'];
    if (nodeId.startsWith('QF')) return stageNames['QF'];
    if (nodeId.startsWith('SF')) return stageNames['SF'];
    if (nodeId.startsWith('FIN')) return stageNames['FIN'];
    return 'Desconocido';
  }

  function checkClash(tA, tB) {
    const nA = normKey(tA);
    const nB = normKey(tB);
    const realA = Object.keys(teamStarts).find(k => normKey(k) === nA);
    const realB = Object.keys(teamStarts).find(k => normKey(k) === nB);
    
    if (!realA || !realB) return null; // One of them is not in bracket yet

    const pathA = getPath(teamStarts[realA]);
    const pathB = getPath(teamStarts[realB]);

    // Find intersection
    const intersection = pathA.find(node => pathB.includes(node));
    if (intersection) {
      return { teamA: realA, teamB: realB, node: intersection, stage: getStageName(intersection) };
    }
    return null;
  }

  // 1. Messi vs Ronaldo Clash (Argentina vs Portugal)
  const goatClash = checkClash('Argentina', 'Portugal');
  let bannerHTML = '';
  if (goatClash) {
    bannerHTML = `
      <div class="hot-banner">
        <h2>${t('messi_cr7')}</h2>
        <div class="clash-status">${t('clash_in')} ${goatClash.stage}!</div>
        <div class="clash-teams">
          <div class="clash-team">
            <img src="${getFlagUrl(goatClash.teamA)}" alt="${goatClash.teamA}">
            Argentina
          </div>
          <div class="vs">VS</div>
          <div class="clash-team">
            <img src="${getFlagUrl(goatClash.teamB)}" alt="${goatClash.teamB}">
            Portugal
          </div>
        </div>
      </div>
    `;
  } else {
    // If not both in bracket, show a pending state
    bannerHTML = `
      <div class="hot-banner" style="filter: grayscale(0.8); opacity: 0.8;">
        <h2>${t('messi_cr7')}</h2>
        <div class="clash-status">${t('clash_waiting')}</div>
      </div>
    `;
  }

  // 2. Check other favorites
  const favorites = ['Argentina', 'Brazil', 'France', 'Spain', 'England', 'Germany', 'Netherlands', 'Portugal', 'Italy', 'Uruguay', 'Colombia'];
  const otherClashes = [];
  
  for (let i = 0; i < favorites.length; i++) {
    for (let j = i + 1; j < favorites.length; j++) {
      const clash = checkClash(favorites[i], favorites[j]);
      // Only show QF, SF, or FIN clashes to keep it "Hot"
      if (clash && !clash.node.startsWith('M') && !clash.node.startsWith('R16')) {
        otherClashes.push(clash);
      }
    }
  }

  let gridHTML = '';
  if (otherClashes.length > 0) {
    // Sort by depth (FINAL first, then SF, then QF)
    const order = { 'FIN': 3, 'SF': 2, 'QF': 1 };
    otherClashes.sort((a,b) => (order[b.node.substring(0,3)] || 0) - (order[a.node.substring(0,3)] || 0));

    const cards = otherClashes.map(c => `
      <div class="hot-card">
        <div class="hot-card-hdr">${t('clash_label')} ${c.stage}</div>
        <div class="hot-card-teams">
          <div class="hc-team">
            <img src="${getFlagUrl(c.teamA)}" alt="${c.teamA}">
            <span>${shorten(c.teamA)}</span>
          </div>
          <div class="hc-vs">VS</div>
          <div class="hc-team">
            <img src="${getFlagUrl(c.teamB)}" alt="${c.teamB}">
            <span>${shorten(c.teamB)}</span>
          </div>
        </div>
      </div>
    `).join('');

    gridHTML = `
      <h3 style="margin-top: 1rem; font-family: var(--ff-display); font-size: 1.2rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">${t('clashes_title')}</h3>
      <div class="hot-grid">
        ${cards}
      </div>
    `;
  }

  wrap.innerHTML = bannerHTML + gridHTML;
}

// ============================================================
// SECTION 16: TODAY'S MATCHES
// ============================================================

/**
 * Parse an openfootball time string like "19:00 UTC-6" on a given date string
 * and return a proper UTC Date object.
 */
function parseMatchDateTime(dateStr, timeStr) {
  if (!dateStr || !timeStr) return null;
  const m = timeStr.match(/(\d{1,2}):(\d{2})\s*UTC([+-]\d+(?:\.\d+)?)/i);
  if (!m) return null;
  const hh = parseInt(m[1], 10);
  const mm = parseInt(m[2], 10);
  const offsetHours = parseFloat(m[3]);
  // Build a UTC timestamp: local_time - utc_offset = UTC
  const utc = new Date(`${dateStr}T${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}:00Z`);
  utc.setUTCHours(utc.getUTCHours() - offsetHours);
  return utc;
}

function renderToday(matches) {
  const wrap = document.getElementById('todayContent');
  if (!wrap) return;

  // Detect user timezone
  const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Today's date in the user's local timezone (YYYY-MM-DD)
  const nowLocal = new Date();
  const todayStr = [
    nowLocal.getFullYear(),
    String(nowLocal.getMonth() + 1).padStart(2, '0'),
    String(nowLocal.getDate()).padStart(2, '0'),
  ].join('-');

  // Filter matches for today — match by the DATE in the user's local timezone
  // ESPN gives UTC dates, openfootball uses venue-local date; use venue date first
  const todayMatches = matches.filter(m => {
    if (!m.date) return false;
    // If we have a parsed UTC time, verify using local conversion
    if (m.time) {
      const utc = parseMatchDateTime(m.date, m.time);
      if (utc) {
        const localDateStr = utc.toLocaleDateString('en-CA', { timeZone: userTZ });
        return localDateStr === todayStr;
      }
    }
    return m.date === todayStr;
  });

  // Sort by kick-off time
  todayMatches.sort((a, b) => {
    const ta = parseMatchDateTime(a.date, a.time);
    const tb = parseMatchDateTime(b.date, b.time);
    if (!ta) return 1; if (!tb) return -1;
    return ta - tb;
  });

  // Timezone display abbreviation
  const tzLabel = new Intl.DateTimeFormat(_lang === 'en' ? 'en-US' : 'es-MX', {
    timeZone: userTZ, timeZoneName: 'short'
  }).formatToParts(new Date()).find(p => p.type === 'timeZoneName')?.value || userTZ;

  if (todayMatches.length === 0) {
    wrap.innerHTML = `
      <div class="today-empty">
        <div class="today-empty-icon">📅</div>
        <p>${t('no_matches_today')}</p>
      </div>`;
    return;
  }

  const cards = todayMatches.map(m => {
    const utcDate = parseMatchDateTime(m.date, m.time);
    let timeDisplay = '';
    let timeSubDisplay = '';

    if (utcDate) {
      timeDisplay = utcDate.toLocaleTimeString(_lang === 'en' ? 'en-US' : 'es-MX', {
        hour: '2-digit', minute: '2-digit', timeZone: userTZ
      });
      timeSubDisplay = tzLabel;
    }

    const isLive     = m.status === 'live';
    const isFinished = m.status === 'finished';

    let statusHTML = '';
    if (isLive) {
      statusHTML = `<span class="td-status td-live">${t('match_status_live')}</span>`;
    } else if (isFinished) {
      statusHTML = `<span class="td-status td-final">${t('match_status_final')}</span>`;
    } else {
      statusHTML = `<span class="td-status td-upcoming">${timeDisplay}</span>`;
    }

    const groupBadge = m.group ? `<span class="td-group">${t('group_prefix')} ${m.group}</span>` : '';
    const venueTxt   = m.ground ? `<span class="td-venue">📍 ${m.ground}</span>` : '';

    const score1 = (isLive || isFinished) && m.score1 != null ? m.score1 : '';
    const score2 = (isLive || isFinished) && m.score2 != null ? m.score2 : '';
    const showScore = score1 !== '' || score2 !== '';
    const scoreHTML = showScore
      ? `<div class="td-score ${isLive ? 'td-score-live' : ''}">${score1} <span>-</span> ${score2}</div>`
      : `<div class="td-score td-score-vs">VS</div>`;

    const f1 = getFlagUrl(m.team1);
    const f2 = getFlagUrl(m.team2);

    return `
      <div class="td-card ${isLive ? 'td-card-live' : isFinished ? 'td-card-done' : ''}">
        <div class="td-card-top">
          ${statusHTML}
          <div class="td-meta">${groupBadge}${venueTxt}</div>
        </div>
        <div class="td-matchup">
          <div class="td-team">
            ${f1 ? `<img class="td-flag" src="${f1}" alt="${m.team1}" onerror="this.style.display='none'">` : ''}
            <span class="td-name">${m.team1}</span>
          </div>
          ${scoreHTML}
          <div class="td-team td-team-right">
            <span class="td-name">${m.team2}</span>
            ${f2 ? `<img class="td-flag" src="${f2}" alt="${m.team2}" onerror="this.style.display='none'">` : ''}
          </div>
        </div>
        ${isLive || !showScore ? '' : `<div class="td-time-row">🕐 ${timeDisplay} <span class="td-tz">${timeSubDisplay}</span></div>`}
      </div>
    `;
  }).join('');

  wrap.innerHTML = `
    <div class="today-header">
      <h2>${t('today_heading')}</h2>
      <p class="today-subtitle">${t('today_subtitle')} · <strong>${tzLabel}</strong></p>
    </div>
    <div class="td-grid">${cards}</div>
  `;
}

function updateTodayTabBadge(matches) {
  const tab = document.getElementById('tabToday');
  if (!tab) return;
  const liveCount = matches.filter(m => m.status === 'live').length;
  // Remove old badge
  const old = tab.querySelector('.tab-live-badge');
  if (old) old.remove();
  if (liveCount > 0) {
    const badge = document.createElement('span');
    badge.className = 'tab-live-badge';
    badge.textContent = liveCount;
    tab.appendChild(badge);
  }
}

// ============================================================
// SECTION 17: INIT
// ============================================================

function init() {
  setupLang();
  setupTutorial();
  setupKofi();
  setupTabs();
  setupRefreshBtn();
  loadAndRender();
}

// ============================================================
// SECTION 18: KO-FI DONATION TOAST
// ============================================================

function setupKofi() {
  const KOFI_URL  = 'https://ko-fi.com/evermolina';
  const STORAGE_KEY = 'wc26_kofi_dismissed';

  // Don't show if dismissed in the last 3 days
  const lastDismissed = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
  const threeDays = 3 * 24 * 60 * 60 * 1000;
  if (Date.now() - lastDismissed < threeDays) return;

  // Build the toast element
  const toast = document.createElement('div');
  toast.id = 'kofiToast';
  toast.innerHTML = `
    <button class="kofi-close" id="kofiClose" aria-label="${t('kofi_dismiss')}">✕</button>
    <div class="kofi-body">
      <div class="kofi-icon">☕</div>
      <div class="kofi-text">
        <strong class="kofi-title">${t('kofi_msg')}</strong>
        <span class="kofi-sub">${t('kofi_sub')}</span>
      </div>
    </div>
    <a class="kofi-cta" href="${KOFI_URL}" target="_blank" rel="noopener">${t('kofi_btn')}</a>
  `;
  document.body.appendChild(toast);

  // Dismiss handler
  function dismiss() {
    toast.classList.remove('kofi-visible');
    toast.classList.add('kofi-hiding');
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setTimeout(() => toast.remove(), 400);
  }

  document.getElementById('kofiClose').addEventListener('click', dismiss);
  // Dismiss if user clicks the CTA (they already acted)
  toast.querySelector('.kofi-cta').addEventListener('click', dismiss);

  // Show after 45 seconds
  setTimeout(() => {
    toast.classList.add('kofi-visible');
  }, 45000);
}

// ============================================================
// SECTION 17: TUTORIAL
// ============================================================

function setupTutorial() {
  const overlay = document.getElementById('tutorialOverlay');
  const closeBtn = document.getElementById('tutorialClose');
  const prevBtn  = document.getElementById('tutPrev');
  const nextBtn  = document.getElementById('tutNext');
  const finishBtn = document.getElementById('tutFinish');
  const steps = document.querySelectorAll('.tutorial-step');
  const dots  = document.querySelectorAll('.tdot');
  if (!overlay) return;

  let current = 0;
  const total = steps.length;

  function goTo(idx) {
    steps.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    steps[idx].classList.add('active');
    dots[idx].classList.add('active');
    current = idx;

    // Show/hide buttons
    prevBtn.classList.toggle('hidden', idx === 0);
    if (idx === total - 1) {
      nextBtn.classList.add('hidden');
      finishBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      finishBtn.classList.add('hidden');
    }
  }

  function openTutorial() {
    overlay.classList.add('visible');
    goTo(0);
  }

  function closeTutorial() {
    overlay.classList.remove('visible');
    localStorage.setItem('wc26_tutorial_done', '1');
  }

  // Show on first visit
  if (!localStorage.getItem('wc26_tutorial_done')) {
    setTimeout(openTutorial, 800);
  }

  // Help button always opens it
  const helpBtn = document.getElementById('helpBtn');
  if (helpBtn) helpBtn.addEventListener('click', openTutorial);

  closeBtn.addEventListener('click', closeTutorial);
  finishBtn.addEventListener('click', closeTutorial);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeTutorial(); });

  prevBtn.addEventListener('click', () => { if (current > 0) goTo(current - 1); });
  nextBtn.addEventListener('click', () => { if (current < total - 1) goTo(current + 1); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.step)));
  });

  // Translate tutorial content on setup
  translateTutorial();

  goTo(0);
}

/** Re-translates all tutorial text — call after language change */
function translateTutorial() {
  document.querySelectorAll('.tutorial-step').forEach((step, i) => {
    const h2 = step.querySelector('h2');
    const p  = step.querySelector('p');
    if (h2) h2.textContent = t('tut_title_' + i);
    if (p)  p.textContent  = t('tut_body_' + i);
  });
  const prevBtn   = document.getElementById('tutPrev');
  const nextBtn   = document.getElementById('tutNext');
  const finishBtn = document.getElementById('tutFinish');
  if (prevBtn)   prevBtn.textContent   = t('tut_prev');
  if (nextBtn)   nextBtn.textContent   = t('tut_next');
  if (finishBtn) finishBtn.textContent = t('tut_finish');
}

// Boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================================
// RESUME / VISIBILITY RECOVERY
// Refetch data when user returns to the tab after suspension
// ============================================================

let _lastVisible = Date.now();

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    _lastVisible = Date.now();
  } else if (document.visibilityState === 'visible') {
    // If the tab was hidden for more than 30 seconds, reload data
    const hiddenMs = Date.now() - _lastVisible;
    if (hiddenMs > 30000) {
      loadAndRender();
    }
  }
});

// Handles iOS Safari's "back-forward cache" (bfcache) resume
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    // Page was restored from bfcache (navigated back/forward)
    loadAndRender();
  }
});
