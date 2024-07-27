# hackathon-tokyo-20240727

Japan Testing Community Hackathon project: automated webapp testing with Javascript and Playwright framework.

---

Recommended Node.js version: 16.16.0

Recommended NPM version: 8.18.0

Node.js packages used: Playwright 1.25.0, expect-playwright 0.8.0, axe-core 4.4.3, prettier 2.7.1

---

**How to run automation:**
You will need already installed Node.js and NPM packages into system. Please check this link for more details: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/

Recommended to use any terminal app that you prefer.

1. Go to project folder and run packages installation with command: `npm install`
2. Now you able to run automation with command: `npx playwright test`
3. After automation run is finished you able to see results in your terminal output.
   Additionally you can run command `npx playwright show-report` to see results in browser.

---

Webapp under test: https://todo-app-qajp.vercel.app/

Webapp repo: https://github.com/chris-tier4/todo-app

---

E2E functional test suite - `tests/e2e.spec.js`

UI functional test suite - `tests/ui.spec.js`

---

[Hackathon presentation slides](https://docs.google.com/presentation/d/18FKS8XcgUI7Ld02nQDCYr1dcBcJZ72qjBsC_YG_A2Do/edit?usp=sharing)
