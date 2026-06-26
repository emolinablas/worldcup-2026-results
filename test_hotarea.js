const fs = require('fs');

global.document = {
  getElementById: (id) => ({
    id: id,
    appendChild: () => {},
    innerHTML: '',
    style: {},
    textContent: ''
  }),
  createElement: () => ({ style: {}, appendChild: () => {}, querySelector: () => null }),
  createElementNS: () => ({ setAttribute: () => {}, style: {}, appendChild: () => {} }),
  querySelectorAll: () => [],
};
global.window = {};

const code = fs.readFileSync('app.js', 'utf8');

// evaluate in global scope properly
const script = new (require('vm').Script)(code.replace('init();', ''));
const context = require('vm').createContext(global);
script.runInContext(context);

async function run() {
  try {
    const matches = [
      { id: 1, team1: "Argentina", team2: "Mexico", group: "Group C", score1: 2, score2: 0, status: "finished", date: "2026-06-11", round: "Group Stage" },
      { id: 2, team1: "Portugal", team2: "Ghana", group: "Group H", score1: 3, score2: 2, status: "finished", date: "2026-06-11", round: "Group Stage" },
    ];
    const groups = global.buildGroups(matches);
    global.renderHotArea(groups);
    console.log("SUCCESS. No error thrown in renderHotArea.");
  } catch(e) {
    console.error("ERROR CAUGHT:");
    console.error(e.stack);
  }
}

run();
