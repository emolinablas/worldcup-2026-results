#!/usr/bin/env node
/**
 * scripts/add_analysis.js
 *
 * Usage:
 *   node scripts/add_analysis.js "Spain" "Uruguay" analysis_input.json
 *
 * Or pipe JSON directly:
 *   echo '{ "stats": {...}, "ai_analysis": {...} }' | \
 *     node scripts/add_analysis.js "Spain" "Uruguay"
 */

const fs   = require('fs');
const path = require('path');

const team1   = process.argv[2];
const team2   = process.argv[3];
const inFile  = process.argv[4];
const outFile = path.join(__dirname, '..', 'analysis.json');

if (!team1 || !team2) {
  console.error('Usage: node scripts/add_analysis.js "Team1" "Team2" [input.json]');
  process.exit(1);
}

let input = '';
if (inFile) {
  input = fs.readFileSync(inFile, 'utf8');
} else {
  // Read from stdin
  input = fs.readFileSync('/dev/stdin', 'utf8');
}

let newData;
try {
  newData = JSON.parse(input.trim());
} catch (e) {
  console.error('❌  Invalid JSON input:', e.message);
  process.exit(1);
}

// Validate basic structure
if (!newData.stats || !newData.ai_analysis) {
  console.error('❌  JSON must have "stats" and "ai_analysis" fields');
  process.exit(1);
}

// Load existing analysis.json
let existing = {};
try { existing = JSON.parse(fs.readFileSync(outFile, 'utf8')); }
catch (_) { console.log('ℹ️  Creating new analysis.json'); }

const key = `${team1}|${team2}`;
existing[key] = newData;

fs.writeFileSync(outFile, JSON.stringify(existing, null, 2));
console.log(`✅  Added analysis for "${key}" to analysis.json`);
console.log(`    Possession:  ${newData.stats.possession[0]}% vs ${newData.stats.possession[1]}%`);
console.log(`    Passing:     ${newData.stats.passing[0]}% vs ${newData.stats.passing[1]}%`);
console.log(`    Shots:       ${newData.stats.shots[0]} vs ${newData.stats.shots[1]}`);
console.log(`    Source:      ${newData.ai_analysis.source}`);
console.log(`\n🚀  Refresh localhost:3027 → "Hoy" tab to see the updated analysis!`);
