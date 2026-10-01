/**
 * EquipUse — server.js
 * A small Express backend that serves the frontend (public/) and
 * a JSON-file-backed REST API for equipment, users, and requests.
 * Not production-grade auth — this is a teaching/demo backend.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data', 'db.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ---------------------------------------------------------------
   Seed data (only used the very first time db.json doesn't exist)
   --------------------------------------------------------------- */
const DEPTS = ['Biology', 'Chemistry', 'Physics', 'Engineering', 'Materials Science'];

function seedEquipment() {
  const items = [
    ['Leica DM2500 Compound Microscope', 'Microscope', 'Biology', 'Bio Lab A · Bench 2', 'Available', 'Excellent', 2, 1450],
    ['Thermo Heratherm CO2 Incubator', 'Incubator', 'Biology', 'Bio Lab B · Shelf 1', 'In Use', 'Good', 0, 3200],
    ['Eppendorf 5430R Centrifuge', 'Centrifuge', 'Biology', 'Bio Lab A · Bench 5', 'Available', 'Excellent', 5, 2600],
    ['Sartorius Biostat B Bioreactor', 'Bioreactor', 'Biology', 'Cell Culture Suite', 'Maintenance', 'Needs Review', 40, 9800],
    ['BioTek Synergy H1 Plate Reader', 'Plate Reader', 'Biology', 'Bio Lab B · Bench 3', 'Available', 'Good', 101, 5400],
    ['Bio-Rad C1000 Touch Thermal Cycler', 'Thermal Cycler', 'Biology', 'Bio Lab A · Bench 3', 'Available', 'Excellent', 4, 4200],
    ['Bio-Rad PowerPac HC Gel Electrophoresis System', 'Electrophoresis System', 'Biology', 'Bio Lab A · Bench 4', 'Available', 'Good', 6, 1800],
    ['Thermo Revco -80°C Freezer', 'Freezer', 'Biology', 'Cold Storage · Unit 4', 'In Use', 'Good', 0, 11000],
    ['Shimadzu GC-2030 Gas Chromatograph', 'Chromatograph', 'Chemistry', 'Chem Lab 1 · Hood 2', 'In Use', 'Good', 0, 8700],
    ['Bruker Avance 400 NMR Spectrometer', 'NMR Spectrometer', 'Chemistry', 'NMR Suite', 'Available', 'Excellent', 10, 42000],
    ['Mettler Toledo XPR205 Analytical Balance', 'Balance', 'Chemistry', 'Chem Lab 2 · Bench 1', 'Available', 'Excellent', 1, 2900],
    ['Buchi Rotavapor R-300', 'Rotary Evaporator', 'Chemistry', 'Chem Lab 1 · Hood 4', 'Available', 'Good', 124, 3100],
    ['Thermo NanoDrop One Spectrophotometer', 'Spectrophotometer', 'Chemistry', 'Chem Lab 3 · Bench 1', 'Available', 'Excellent', 3, 4600],
    ['Keysight DSOX1204G Oscilloscope', 'Oscilloscope', 'Physics', 'Physics Lab · Bench 4', 'Retired', 'Fair', 201, 1200],
    ['Stanford Research SR860 Lock-in Amplifier', 'Amplifier', 'Physics', 'Physics Lab · Bench 1', 'Available', 'Excellent', 6, 4300],
    ['Oxford Instruments Cryostat', 'Cryostat', 'Physics', 'Low Temp Lab', 'Maintenance', 'Needs Review', 15, 15600],
    ['Newport Optical Table Laser Rig', 'Laser Rig', 'Physics', 'Optics Lab', 'In Use', 'Good', 0, 21000],
    ['Instron 5969 Universal Testing Machine', 'Testing Machine', 'Engineering', 'Materials Test Lab', 'Available', 'Good', 3, 26000],
    ['FLIR T860 Thermal Camera', 'Thermal Camera', 'Engineering', 'Robotics Lab', 'Available', 'Excellent', 8, 6100],
    ['Stratasys F370 3D Printer', '3D Printer', 'Engineering', 'Fabrication Shop', 'In Use', 'Good', 0, 18500],
    ['Fluke 87V Digital Multimeter', 'Multimeter', 'Engineering', 'Electronics Bench', 'Available', 'Good', 94, 240],
    ['TA Instruments DSC 25 Calorimeter', 'Calorimeter', 'Materials Science', 'MSE Lab · Bench 2', 'Available', 'Good', 61, 7400],
    ['Bruker D8 Advance XRD', 'XRD System', 'Materials Science', 'MSE Lab · Bench 1', 'In Use', 'Excellent', 0, 31000],
    ['Anton Paar MCR 302 Rheometer', 'Rheometer', 'Materials Science', 'MSE Lab · Bench 3', 'Available', 'Good', 112, 29500],
  ];
  return items.map((it, i) => ({
    id: 'EQ-' + String(1000 + i),
    name: it[0], category: it[1], department: it[2], location: it[3],
    status: it[4], condition: it[5], idleDays: it[6], value: it[7],
  }));
}

function seedUsers() {
  return [
    { id: 'u-amal', username: 'amal', password: 'squ2026', role: 'Researcher' },
    { id: 'u-salim', username: 'salim', password: 'squ2026', role: 'Manager' },
  ];
}

function seedRequests() {
  const now = Date.now();
  return [
    { id: uid('RQ'), equipmentId: 'EQ-1003', equipmentName: 'Sartorius Biostat B Bioreactor', requesterId: 'u-amal', requesterName: 'amal', department: 'Biology', purpose: 'Fed-batch fermentation run for the yeast expression project.', status: 'Pending', createdAt: now - 1000 * 60 * 60 * 6 },
    { id: uid('RQ'), equipmentId: 'EQ-1011', equipmentName: 'Buchi Rotavapor R-300', requesterId: 'u-amal', requesterName: 'amal', department: 'Chemistry', purpose: 'Solvent removal for a joint synthesis batch.', status: 'Approved', createdAt: now - 1000 * 60 * 60 * 24 * 3 },
  ];
}

function monthLabels(n) {
  const out = []; const d = new Date(); d.setDate(1);
  for (let i = n - 1; i >= 0; i--) {
    out.push(new Date(d.getFullYear(), d.getMonth() - i, 1).toLocaleString('en-US', { month: 'short' }));
  }
  return out;
}

function seedTrend() {
  const labels = monthLabels(6);
  const base = [118, 131, 126, 145, 152, 168];
  return labels.map((l, i) => ({ month: l, count: base[i] }));
}

function seedBookings() {
  const now = Date.now();
  const inTwoDays = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString().slice(0, 10);
  return [
    { id: uid('BK'), equipmentId: 'EQ-1009', equipmentName: 'Bruker Avance 400 NMR Spectrometer', userId: 'u-salim', userName: 'salim', department: 'Chemistry', date: inTwoDays, startTime: '10:00', endTime: '12:00', purpose: 'Structure confirmation run for a synthesis batch.', status: 'Upcoming', createdAt: now - 1000 * 60 * 60 * 2 },
  ];
}

function seedIssues() {
  const now = Date.now();
  return [
    { id: uid('IS'), equipmentId: 'EQ-1015', equipmentName: 'Oxford Instruments Cryostat', reporterId: 'u-salim', reporterName: 'salim', department: 'Physics', description: 'Compressor is cycling louder than usual and not holding target temperature.', severity: 'Major', status: 'Open', createdAt: now - 1000 * 60 * 60 * 20 },
  ];
}

function uid(prefix) {
  return prefix + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

/* ---------------------------------------------------------------
   Tiny JSON-file "database"
   --------------------------------------------------------------- */
function loadDb() {
  if (!fs.existsSync(DB_PATH)) {
    const fresh = {
      equipment: seedEquipment(),
      users: seedUsers(),
      requests: seedRequests(),
      trend: seedTrend(),
      bookings: seedBookings(),
      issues: seedIssues(),
    };
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    fs.writeFileSync(DB_PATH, JSON.stringify(fresh, null, 2));
    return fresh;
  }
  const loaded = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
  // backfill collections for databases created before bookings/issues existed
  if (!loaded.bookings) loaded.bookings = seedBookings();
  if (!loaded.issues) loaded.issues = seedIssues();
  // backfill user records created before username/password login existed
  loaded.users = (loaded.users || []).map(u => ({
    id: u.id,
    username: u.username || (u.name ? u.name.split(' ')[0].toLowerCase() : u.id),
    password: u.password || 'squ2026',
    role: u.role || 'Researcher',
  }));
  return loaded;
}
function saveDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

let db = loadDb();

/* ---------------------------------------------------------------
   Routes
   --------------------------------------------------------------- */
function publicUser(u) {
  return { id: u.id, username: u.username, role: u.role };
}

app.get('/api/state', (req, res) => {
  res.json({ ...db, users: db.users.map(publicUser) });
});

app.post('/api/login', (req, res) => {
  const { username, password, role } = req.body || {};
  if (!username || !username.trim()) return res.status(400).send('Username is required.');
  if (!password) return res.status(400).send('Password is required.');
  let user = db.users.find(u => u.username.toLowerCase() === username.trim().toLowerCase());
  if (user) {
    if (user.password !== password) return res.status(401).send('Incorrect password.');
  } else {
    user = { id: uid('u'), username: username.trim(), password, role: role || 'Researcher' };
    db.users.push(user);
  }
  saveDb(db);
  res.json({ user: publicUser(user), users: db.users.map(publicUser) });
});

app.post('/api/requests', (req, res) => {
  const { equipmentId, requesterId, requesterName, department, purpose } = req.body || {};
  const item = db.equipment.find(e => e.id === equipmentId);
  if (!item) return res.status(404).send('Equipment not found.');
  if (!purpose || !purpose.trim()) return res.status(400).send('A purpose is required.');
  const request = {
    id: uid('RQ'), equipmentId, equipmentName: item.name,
    requesterId, requesterName, department: department || item.department,
    purpose: purpose.trim(), status: 'Pending', createdAt: Date.now(),
  };
  db.requests.unshift(request);
  saveDb(db);
  res.json({ request, requests: db.requests });
});

app.patch('/api/requests/:id', (req, res) => {
  const { action } = req.body || {};
  const request = db.requests.find(r => r.id === req.params.id);
  if (!request) return res.status(404).send('Request not found.');
  const item = db.equipment.find(e => e.id === request.equipmentId);

  if (action === 'approve') {
    request.status = 'Approved';
    if (item) { item.status = 'In Use'; item.idleDays = 0; }
    bumpTrend();
  } else if (action === 'deny') {
    request.status = 'Denied';
  } else if (action === 'return') {
    request.status = 'Returned';
    if (item) { item.status = 'Available'; item.idleDays = 0; }
  } else {
    return res.status(400).send('Unknown action.');
  }
  saveDb(db);
  res.json({ request, requests: db.requests, equipment: db.equipment, trend: db.trend });
});

function bumpTrend() {
  const curLabel = monthLabels(1)[0];
  const last = db.trend[db.trend.length - 1];
  if (last && last.month === curLabel) last.count += 1;
  else { db.trend.push({ month: curLabel, count: 1 }); if (db.trend.length > 6) db.trend.shift(); }
}

/* ---------------------------------------------------------------
   Bookings — reserve a future time slot on an item, independent of
   whether it happens to be free right now.
   --------------------------------------------------------------- */
function timesOverlap(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

app.post('/api/bookings', (req, res) => {
  const { equipmentId, userId, userName, department, date, startTime, endTime, purpose } = req.body || {};
  const item = db.equipment.find(e => e.id === equipmentId);
  if (!item) return res.status(404).send('Equipment not found.');
  if (!date || !startTime || !endTime) return res.status(400).send('Date and time range are required.');
  if (startTime >= endTime) return res.status(400).send('End time must be after start time.');
  if (!purpose || !purpose.trim()) return res.status(400).send('A purpose is required.');
  if (item.status === 'Retired') return res.status(400).send('Retired equipment cannot be booked.');

  const clash = db.bookings.find(b =>
    b.equipmentId === equipmentId && b.date === date && b.status === 'Upcoming' &&
    timesOverlap(startTime, endTime, b.startTime, b.endTime)
  );
  if (clash) return res.status(409).send(`Already booked ${clash.date} ${clash.startTime}–${clash.endTime}.`);

  const booking = {
    id: uid('BK'), equipmentId, equipmentName: item.name, userId, userName,
    department: department || item.department, date, startTime, endTime,
    purpose: purpose.trim(), status: 'Upcoming', createdAt: Date.now(),
  };
  db.bookings.unshift(booking);
  saveDb(db);
  res.json({ booking, bookings: db.bookings });
});

app.patch('/api/bookings/:id', (req, res) => {
  const booking = db.bookings.find(b => b.id === req.params.id);
  if (!booking) return res.status(404).send('Booking not found.');
  if (req.body?.action === 'cancel') booking.status = 'Cancelled';
  else return res.status(400).send('Unknown action.');
  saveDb(db);
  res.json({ booking, bookings: db.bookings });
});

/* ---------------------------------------------------------------
   Issue reports — flag a fault on an item. A Critical report takes
   the item out of service automatically; resolving it clears that
   if nothing else open is still flagging the same item.
   --------------------------------------------------------------- */
app.post('/api/issues', (req, res) => {
  const { equipmentId, reporterId, reporterName, department, description, severity } = req.body || {};
  const item = db.equipment.find(e => e.id === equipmentId);
  if (!item) return res.status(404).send('Equipment not found.');
  if (!description || !description.trim()) return res.status(400).send('A description is required.');
  const issue = {
    id: uid('IS'), equipmentId, equipmentName: item.name, reporterId, reporterName,
    department: department || item.department, description: description.trim(),
    severity: severity || 'Minor', status: 'Open', createdAt: Date.now(),
  };
  db.issues.unshift(issue);
  if (issue.severity === 'Critical' && item.status !== 'Retired') {
    item.status = 'Maintenance';
  }
  saveDb(db);
  res.json({ issue, issues: db.issues, equipment: db.equipment });
});

app.patch('/api/issues/:id', (req, res) => {
  const issue = db.issues.find(i => i.id === req.params.id);
  if (!issue) return res.status(404).send('Issue not found.');
  if (req.body?.action !== 'resolve') return res.status(400).send('Unknown action.');
  issue.status = 'Resolved';
  const item = db.equipment.find(e => e.id === issue.equipmentId);
  const stillOpen = db.issues.some(i => i.equipmentId === issue.equipmentId && i.status === 'Open');
  if (item && !stillOpen && item.status === 'Maintenance') item.status = 'Available';
  saveDb(db);
  res.json({ issue, issues: db.issues, equipment: db.equipment });
});

/* ---------------------------------------------------------------
   Assistant — rule-based reasoning over the live registry.
   No external AI service is called; this is a small keyword/component
   matcher so the demo works fully offline. Swap this function for a
   real LLM call (e.g. the Anthropic API) if you want true NL understanding.
   --------------------------------------------------------------- */
const PROJECT_COMPONENTS = [
  { keywords: ['pcr', 'amplif', 'thermal cycl'], label: 'DNA / RNA amplification', test: e => /thermal cycler/i.test(e.category) },
  { keywords: ['gel', 'electrophores'], label: 'Gel electrophoresis', test: e => /electrophoresis/i.test(e.category) },
  { keywords: ['microscop', 'imaging', 'confocal'], label: 'Imaging & microscopy', test: e => /microscope/i.test(e.category) },
  { keywords: ['centrifug', 'spin down'], label: 'Sample separation', test: e => /centrifuge/i.test(e.category) },
  { keywords: ['spectrophotom', 'nanodrop', 'absorbance', 'quantif'], label: 'Nucleic acid / sample quantification', test: e => /spectrophotometer/i.test(e.category) },
  { keywords: ['weigh', 'balance'], label: 'Precision weighing', test: e => /balance/i.test(e.category) },
  { keywords: ['freeze', '-80', 'cold storage', 'sample storage'], label: 'Sample storage', test: e => /freezer/i.test(e.category) },
  { keywords: ['3d print', 'prototyp', 'fabricat'], label: 'Rapid prototyping', test: e => /3d printer/i.test(e.category) },
  { keywords: ['xrd', 'diffract', 'crystall'], label: 'Structural analysis (XRD)', test: e => /xrd/i.test(e.category) },
  { keywords: ['rheolog', 'viscos'], label: 'Rheology', test: e => /rheometer/i.test(e.category) },
  { keywords: ['calorimet', 'dsc', 'thermal analysis'], label: 'Thermal analysis', test: e => /calorimeter/i.test(e.category) },
  { keywords: ['tensile', 'stress test', 'mechanical test'], label: 'Mechanical testing', test: e => /testing machine/i.test(e.category) },
  { keywords: ['incubat', 'cell culture'], label: 'Cell culture / incubation', test: e => /incubator|bioreactor/i.test(e.category) },
  { keywords: ['plate reader', 'assay', 'elisa'], label: 'Plate-based assays', test: e => /plate reader/i.test(e.category) },
  { keywords: ['thermal camera', 'infrared'], label: 'Thermal imaging', test: e => /thermal camera/i.test(e.category) },
  { keywords: ['oscilloscop', 'signal'], label: 'Signal measurement', test: e => /oscilloscope|amplifier|multimeter/i.test(e.category) },
];

function bestPick(matches) {
  return matches.find(e => e.status === 'Available') || matches[0];
}

function assistantReply(query, dept) {
  const q = (query || '').toLowerCase();

  // "how much have we saved" / savings
  if (/saved|savings|avoid|cost/.test(q)) {
    const byDept = DEPTS.map(d => {
      const inUse = db.equipment.filter(e => e.department === d && (e.status === 'In Use'));
      const saved = inUse.reduce((sum, e) => sum + Math.round(e.value * 0.35), 0);
      return { department: d, saved };
    });
    const total = byDept.reduce((s, d) => s + d.saved, 0);
    return { type: 'savings', total, byDept };
  }

  // "what's available in <dept>" or a bare department name
  const deptHit = DEPTS.find(d => q.includes(d.toLowerCase()) || q.includes(d.split(' ')[0].toLowerCase()));
  if (deptHit && /available|what|show|have/.test(q)) {
    const items = db.equipment.filter(e => e.department === deptHit && e.status === 'Available');
    return { type: 'availability', department: deptHit, items };
  }

  // project planning: look for 2+ component keyword hits, or connector words
  const hitComponents = [];
  PROJECT_COMPONENTS.forEach(c => {
    if (c.keywords.some(k => q.includes(k))) hitComponents.push(c);
  });
  if (hitComponents.length && /plan|project|need|setting up|working on/.test(q) || hitComponents.length >= 2) {
    const parts = hitComponents.map(c => {
      const matches = db.equipment.filter(e => c.test(e));
      const pick = bestPick(matches);
      return { label: c.label, pick: pick || null, alternatives: matches.length };
    });
    return { type: 'project', parts };
  }

  // single-category lookup, e.g. "show me all microscopes"
  const catWord = q.match(/microscop\w*|centrifug\w*|balance\w*|freezer\w*|oscilloscop\w*|printer\w*|rheometer\w*|calorimeter\w*/);
  if (catWord) {
    const term = catWord[0].replace(/s$/, '');
    const items = db.equipment.filter(e => e.category.toLowerCase().includes(term) || e.name.toLowerCase().includes(term));
    return { type: 'category', term: catWord[0], items };
  }

  return { type: 'fallback' };
}

app.post('/api/assistant', (req, res) => {
  const { query, department } = req.body || {};
  const reply = assistantReply(query, department);
  res.json(reply);
});

app.listen(PORT, () => {
  console.log(`EquipUse server running → http://localhost:${PORT}`);
});
