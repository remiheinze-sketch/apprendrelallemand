diff --git a/app.js b/app.js
index 711ae7730ea741175178444f0af56aeb9357403a..395bf596e02cd50769edbe57ec90c2ea73782583 100644
--- a/app.js
+++ b/app.js
@@ -1,84 +1,147 @@
 
 /* =======================================================
    German Learning App - Persisted + Import + Packs
    - Progression sauvegardée (localStorage)
    - Exemples logiques (1 phrase / mot)
    - Import CSV/JSON
    - Chargement rapide des packs par niveau (data/a1_words.json ...)
    - UI compatible avec l'index.html fourni
    ======================================================= */
 
 (function () {
   /* ------------------ Progress Store ------------------ */
   const STORAGE_KEY = "germanAppProgress.v1";
-  const defaultProgress = {
+  const MS_PER_DAY = 24 * 60 * 60 * 1000;
+
+  const createDefaultProgress = () => ({
     wordsLearned: {}, // {wordId: countCorrect}
     streak: 0,
     lastStudyDate: null, // "YYYY-MM-DD"
     level: "A1"
-  };
+  });
+
+  function cloneProgress(progress) {
+    const base = createDefaultProgress();
+    const src = progress || {};
+    return {
+      ...base,
+      ...src,
+      wordsLearned: { ...base.wordsLearned, ...(src.wordsLearned || {}) }
+    };
+  }
+
+  function toISODate(date) {
+    const year = date.getFullYear();
+    const month = String(date.getMonth() + 1).padStart(2, "0");
+    const day = String(date.getDate()).padStart(2, "0");
+    return `${year}-${month}-${day}`;
+  }
+
+  function parseISODate(value) {
+    if (!value || typeof value !== "string") return null;
+    const parts = value.split("-").map(Number);
+    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null;
+    const [y, m, d] = parts;
+    return new Date(y, m - 1, d);
+  }
+
+  function diffInDays(later, earlier) {
+    if (!(later instanceof Date) || !(earlier instanceof Date)) return 0;
+    if (Number.isNaN(later.getTime()) || Number.isNaN(earlier.getTime())) return 0;
+    const start = new Date(later.getFullYear(), later.getMonth(), later.getDate());
+    const end = new Date(earlier.getFullYear(), earlier.getMonth(), earlier.getDate());
+    return Math.floor((start - end) / MS_PER_DAY);
+  }
+
   function loadProgress() {
     try {
       const raw = localStorage.getItem(STORAGE_KEY);
-      const p = raw ? JSON.parse(raw) : defaultProgress;
-      return Object.assign({}, defaultProgress, p);
+      if (!raw) return createDefaultProgress();
+      const parsed = JSON.parse(raw);
+      return cloneProgress(parsed);
     } catch (_) {
-      return { ...defaultProgress };
+      return createDefaultProgress();
     }
   }
+
   function saveProgress(p) {
-    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
+    const sanitized = cloneProgress(p);
+    localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
   }
+
+  function registerStudyActivity(progress) {
+    const todayISO = toISODate(new Date());
+    const lastStudyDate = parseISODate(progress.lastStudyDate);
+    const today = parseISODate(todayISO);
+
+    if (!lastStudyDate || Number.isNaN(lastStudyDate.getTime())) {
+      progress.streak = 1;
+    } else {
+      const gap = diffInDays(today, lastStudyDate);
+      if (gap === 1) {
+        progress.streak = (progress.streak || 0) + 1;
+      } else if (gap > 1) {
+        progress.streak = 1;
+      }
+    }
+
+    progress.lastStudyDate = todayISO;
+  }
+
+  function normalizeStreak() {
+    const progress = loadProgress();
+    if (!progress.lastStudyDate) return;
+
+    const today = parseISODate(toISODate(new Date()));
+    const last = parseISODate(progress.lastStudyDate);
+    if (!today || !last || Number.isNaN(today.getTime()) || Number.isNaN(last.getTime())) return;
+
+    const gap = diffInDays(today, last);
+
+    if (gap >= 2 && progress.streak !== 0) {
+      progress.streak = 0;
+      saveProgress(progress);
+    }
+  }
+
   function markWordLearned(wordId) {
     const p = loadProgress();
     if (!p.wordsLearned[wordId]) p.wordsLearned[wordId] = 0;
     p.wordsLearned[wordId] += 1;
+    registerStudyActivity(p);
     saveProgress(p);
     updateStatsUI();
   }
   function setLevel(lvl) {
     const p = loadProgress();
     p.level = lvl;
     saveProgress(p);
     updateStatsUI();
   }
   function updateDailyStreak() {
-    const p = loadProgress();
-    const today = new Date().toISOString().slice(0,10);
-    if (!p.lastStudyDate) {
-      p.streak = 1;
-      p.lastStudyDate = today;
-      saveProgress(p);
-      return;
-    }
-    if (p.lastStudyDate === today) return;
-    const prev = new Date(p.lastStudyDate);
-    const diffDays = Math.round((new Date(today) - prev) / (1000*3600*24));
-    p.streak = diffDays === 1 ? (p.streak + 1) : 1;
-    p.lastStudyDate = today;
-    saveProgress(p);
+    normalizeStreak();
   }
 
   /* ------------------ Base Vocabulary ------------------ */
   const seedData = {
     A1: [
       { category: "Essentiels", words: [
         { id: "a1_ich", german: "ich", french: "je", english: "I" },
         { id: "a1_du", german: "du", french: "tu", english: "you (informal)" },
         { id: "a1_Haus", german: "Haus", french: "maison", english: "house" },
         { id: "a1_gehen", german: "gehen", french: "aller", english: "to go" },
         { id: "a1_gut", german: "gut", french: "bon", english: "good" }
       ]}
     ],
     A2: [{ category: "Courant", words: [
       { id: "a2_wissen", german: "wissen", french: "savoir", english: "to know" },
       { id: "a2_fahren", german: "fahren", french: "conduire", english: "to drive" }
     ]}],
     B1: [{ category: "Intermédiaire", words: [
       { id: "b1_beschreiben", german: "beschreiben", french: "décrire", english: "to describe" }
     ]}]
   };
   window.vocabularyData = window.vocabularyData || seedData;
 
   /* ------------------ Example Generation ------------------ */
   const isUpper = (s) => /^[A-ZÄÖÜ]/.test(s);

/* =======================================================
   German Learning App - Persisted + Import + Packs
   - Progression sauvegardée (localStorage)
   - Exemples logiques (1 phrase / mot)
   - Import CSV/JSON
   - Chargement rapide des packs par niveau (data/a1_words.json ...)
   - UI compatible avec l'index.html fourni
   ======================================================= */

(function () {
  /* ------------------ Progress Store ------------------ */
  const STORAGE_KEY = "germanAppProgress.v1";
  const defaultProgress = {
    wordsLearned: {}, // {wordId: countCorrect}
    streak: 0,
    lastStudyDate: null, // "YYYY-MM-DD"
    level: "A1"
  };
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const p = raw ? JSON.parse(raw) : defaultProgress;
      return Object.assign({}, defaultProgress, p);
    } catch (_) {
      return { ...defaultProgress };
    }
  }
  function saveProgress(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }
  function markWordLearned(wordId) {
    const p = loadProgress();
    if (!p.wordsLearned[wordId]) p.wordsLearned[wordId] = 0;
    p.wordsLearned[wordId] += 1;
    saveProgress(p);
    updateStatsUI();
  }
  function setLevel(lvl) {
    const p = loadProgress();
    p.level = lvl;
    saveProgress(p);
    updateStatsUI();
  }
  function updateDailyStreak() {
    const p = loadProgress();
    const today = new Date().toISOString().slice(0,10);
    if (!p.lastStudyDate) {
      p.streak = 1;
      p.lastStudyDate = today;
      saveProgress(p);
      return;
    }
    if (p.lastStudyDate === today) return;
    const prev = new Date(p.lastStudyDate);
    const diffDays = Math.round((new Date(today) - prev) / (1000*3600*24));
    p.streak = diffDays === 1 ? (p.streak + 1) : 1;
    p.lastStudyDate = today;
    saveProgress(p);
  }

  /* ------------------ Base Vocabulary ------------------ */
  const seedData = {
    A1: [
      { category: "Essentiels", words: [
        { id: "a1_ich", german: "ich", french: "je", english: "I" },
        { id: "a1_du", german: "du", french: "tu", english: "you (informal)" },
        { id: "a1_Haus", german: "Haus", french: "maison", english: "house" },
        { id: "a1_gehen", german: "gehen", french: "aller", english: "to go" },
        { id: "a1_gut", german: "gut", french: "bon", english: "good" }
      ]}
    ],
    A2: [{ category: "Courant", words: [
      { id: "a2_wissen", german: "wissen", french: "savoir", english: "to know" },
      { id: "a2_fahren", german: "fahren", french: "conduire", english: "to drive" }
    ]}],
    B1: [{ category: "Intermédiaire", words: [
      { id: "b1_beschreiben", german: "beschreiben", french: "décrire", english: "to describe" }
    ]}]
  };
  window.vocabularyData = window.vocabularyData || seedData;

  /* ------------------ Example Generation ------------------ */
  const isUpper = (s) => /^[A-ZÄÖÜ]/.test(s);
  const isNoun = (de) => isUpper(de);
  const isVerbByEN = (en) => /^to\s/i.test(en || "");
  const isAdjByEN = (en) => !!en && !isVerbByEN(en) && !/\s/.test(en);

  function guessArticle(word) {
    const lower = (word||"").toLowerCase();
    const endingsDas = ["chen","lein","ment","um","ma","tum"];
    const endingsDie = ["heit","keit","schaft","ung","tät","ion","ik","ur","ei"];
    if (endingsDas.some(e => lower.endsWith(e))) return "das";
    if (endingsDie.some(e => lower.endsWith(e))) return "die";
    return "der";
  }
  function conj(inf) {
    // very light present conjugation
    const m = (inf||"").match(/^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zurück|zusammen)(.+)$/);
    const prefix = m ? m[1] : "";
    const stemInf = m ? m[2] : inf;
    const base = stemInf.replace(/en$/, "");
    const attach = (end) => (prefix ? `${prefix} ${base}${end}` : `${base}${end}`);
    return { ich: attach("e"), du: attach("st"), er: attach("t"), wir: inf, ihr: attach("t"), sie: inf };
  }
  function pick(list, seed) {
    let h=0; for (let i=0;i<seed.length;i++){ h=((h<<5)-h)+seed.charCodeAt(i); h|=0; }
    return list[Math.abs(h)%list.length];
  }
  function frDet(article) { return article==="die" ? "la" : "le"; }

  function generateExample(w) {
    const de = (w.german||"").trim();
    const fr = (w.french||"").trim();
    const en = (w.english||"").trim();

    if (!de) return null;

    if (isVerbByEN(en)) {
      const c = conj(de.toLowerCase());
      const variants = [
        { de: `Ich ${c.ich} jetzt.`, fr: `Je ${fr || "le fais"} maintenant.` },
        { de: `Wir ${c.wir} oft zusammen.`, fr: `Nous ${fr || "le faisons"} souvent ensemble.` },
        { de: `Er ${c.er} nach Hause.`, fr: `Il ${fr || "rentre"} à la maison.` }
      ];
      return pick(variants, de);
    }
    if (isNoun(de)) {
      const art = guessArticle(de);
      const variants = [
        { de: `${art} ${de} ist neu.`, fr: `${(frDet(art)[0].toUpperCase()+frDet(art).slice(1))} ${fr || de} est nouveau/nouvelle.` },
        { de: `Ich brauche ${art} ${de}.`, fr: `J'ai besoin de ${frDet(art)} ${fr || de}.` },
        { de: `${art} ${de} steht im Zimmer.`, fr: `${(frDet(art)[0].toUpperCase()+frDet(art).slice(1))} ${fr || de} est dans la chambre.` }
      ];
      return pick(variants, de);
    }
    if (isAdjByEN(en)) {
      const variants = [
        { de: `Das ist sehr ${de}.`, fr: `C'est très ${fr || de}.` },
        { de: `Heute ist es ${de}.`, fr: `Aujourd'hui, c'est ${fr || de}.` },
        { de: `Der Film war ${de}.`, fr: `Le film était ${fr || de}.` }
      ];
      return pick(variants, de);
    }
    return { de: `Ich benutze "${de}" jeden Tag.`, fr: `J'utilise « ${fr || de} » chaque jour.` };
  }
  function ensureExamples() {
    ["A1","A2","B1"].forEach(level => {
      (window.vocabularyData[level] || []).forEach(cat => {
        cat.words.forEach(w => {
          if (!w.examples || !w.examples.length) {
            const ex = generateExample(w);
            if (ex) w.examples = [ex];
          } else {
            w.examples = [w.examples[0]]; // 1 phrase seulement
          }
        });
      });
    });
  }

  /* ------------------ Import CSV / JSON ------------------ */
  function parseCSV(text) {
    const rows = text.split(/\r?\n/).filter(Boolean);
    if (!rows.length) return [];
    const header = rows.shift().split(",").map(s=>s.trim());
    const idx = (k) => header.findIndex(h => h.toLowerCase() === k);
    const iLevel = idx("level");
    const iCat = idx("category");
    const iId = idx("id");
    const iDe = idx("german");
    const iFr = idx("french");
    const iEn = idx("english");
    const iExDe = idx("example_de");
    const iExFr = idx("example_fr");

    const out = [];
    for (const line of rows) {
      const cells = line.split(",").map(c=>c.trim());
      const level = (cells[iLevel] || "A1").toUpperCase();
      const category = cells[iCat] || "Divers";
      const german = cells[iDe];
      if (!german) continue;
      const id = (cells[iId] || `${level}_${german}`).replace(/\s+/g,"_").toLowerCase();
      const french = cells[iFr] || "";
      const english = cells[iEn] || "";
      const example_de = cells[iExDe] || "";
      const example_fr = cells[iExFr] || "";
      out.push({
        level, category,
        word: {
          id, german, french, english,
          examples: (example_de || example_fr) ? [{de: example_de, fr: example_fr}] : []
        }
      });
    }
    return out;
  }
  function integrateImported(entries) {
    const perLevel = { A1:{}, A2:{}, B1:{} };
    entries.forEach(item => {
      const lvl = (item.level==="A1"||item.level==="A2"||item.level==="B1") ? item.level : "A1";
      if (!perLevel[lvl][item.category]) perLevel[lvl][item.category] = [];
      perLevel[lvl][item.category].push(item.word);
    });
    Object.keys(perLevel).forEach(level => {
      Object.keys(perLevel[level]).forEach(catName => {
        const words = perLevel[level][catName];
        let cat = (window.vocabularyData[level] || []).find(c => c.category === catName);
        if (!cat) {
          if (!window.vocabularyData[level]) window.vocabularyData[level] = [];
          cat = { category: catName, words: [] };
          window.vocabularyData[level].push(cat);
        }
        cat.words.push(...words);
      });
    });
    ensureExamples();
    updateStatsUI();
    renderVocabulary();
  }

  /* ------------------ Load Packs by Level ------------------ */
  async function loadPackForLevel(level) {
    const path = {
      A1: "data/a1_words.json",
      A2: "data/a2_words.json",
      B1: "data/b1_words.json"
    }[level];
    try {
      const res = await fetch(path, { cache: "no-store" });
      if (!res.ok) throw new Error("Pack introuvable");
      const pack = await res.json(); // {items: [{category, words:[...]}, ...]}
      if (!Array.isArray(pack.items)) throw new Error("Format invalide");
      if (!window.vocabularyData[level]) window.vocabularyData[level] = [];
      window.vocabularyData[level].push(...pack.items);
      ensureExamples();
      updateStatsUI();
      renderVocabulary();
      flashToast(`Pack ${level} chargé (${pack.items.reduce((n,c)=>n+(c.words?.length||0),0)} mots)`);
    } catch (e) {
      flashToast(`Échec chargement pack ${level}. Placez data/${level.toLowerCase()}_words.json`, true);
      console.error(e);
    }
  }

  /* ------------------ UI Glue / Rendering ------------------ */
  function updateStatsUI() {
    const p = loadProgress();
    const learnedCount = Object.keys(p.wordsLearned).length;
    const total = totalWordCount();
    const percent = total ? Math.round((learnedCount/total)*100) : 0;

    const el = (id) => document.getElementById(id);
    if (el("streak-display")) el("streak-display").textContent = p.streak;
    if (el("daily-streak")) el("daily-streak").textContent = `${p.streak} jours`;
    if (el("words-learned-display")) el("words-learned-display").textContent = learnedCount;
    if (el("words-mastered")) el("words-mastered").textContent = learnedCount;
    if (el("total-words")) el("total-words").textContent = total;
    if (el("current-level")) el("current-level").textContent = p.level;
    if (el("overall-progress")) el("overall-progress").style.width = percent + "%";
    if (el("progress-percentage")) el("progress-percentage").textContent = percent;
  }
  function totalWordCount() {
    let n=0;
    ["A1","A2","B1"].forEach(level => {
      (window.vocabularyData[level]||[]).forEach(c => n += (c.words?.length||0));
    });
    return n;
  }
  function renderVocabulary() {
    const list = document.getElementById("vocabulary-list");
    if (!list) return;
    list.innerHTML = "";
    const p = loadProgress();

    const catFilter = document.getElementById("category-filter").value;
    const level = p.level;

    // Fill category filter
    const select = document.getElementById("category-filter");
    const cats = new Set(["all"]);
    (window.vocabularyData[level]||[]).forEach(c => cats.add(c.category));
    const prevVal = select.value;
    select.innerHTML = [...cats].map(c => `<option value="${c}">${c==="all"?"Toutes les catégories":c}</option>`).join("");
    if ([...cats].includes(prevVal)) select.value = prevVal;

    (window.vocabularyData[level]||[]).forEach(cat => {
      if (catFilter !== "all" && cat.category !== catFilter) return;
      cat.words.forEach(w => {
        const card = document.createElement("div");
        card.className = "card vocab-card";
        card.setAttribute("data-word-id", w.id);
        card.innerHTML = `
          <div class="card__body">
            <div class="vocab-head">
              <h3>${w.german}</h3>
              <span class="muted">🇫🇷 ${w.french || ""}</span>
            </div>
            <div class="vocab-meta">
              <button class="btn btn--sm btn--secondary" data-action="learn">Marquer appris</button>
            </div>
          </div>
        `;
        if (w.examples && w.examples[0]) {
          const exBox = document.createElement("div");
          exBox.className = "vocab-examples";
          exBox.innerHTML = `<p class="de">🇩🇪 ${w.examples[0].de}</p><p class="fr">🇫🇷 ${w.examples[0].fr}</p>`;
          card.appendChild(exBox);
        }
        card.querySelector('[data-action="learn"]').addEventListener("click", () => {
          markWordLearned(w.id);
          flashToast(`✅ ${w.german} appris`);
        });
        list.appendChild(card);
      });
    });
  }
  function flashToast(msg, isError=false) {
    const box = document.getElementById("achievement-toast");
    const span = document.getElementById("achievement-message");
    if (!box || !span) return;
    span.textContent = msg;
    box.style.background = isError ? "rgba(192,21,47,0.95)" : "";
    box.classList.add("show");
    setTimeout(()=> box.classList.remove("show"), 2500);
  }

  /* ------------------ Mount Settings Extras ------------------ */
  function mountSettingsTools() {
    const settings = document.getElementById("settings-view");
    if (!settings) return;
    const wrap = settings.querySelector(".settings-content");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card__body">
        <h3>Importer des mots (CSV/JSON) & Packs</h3>
        <p>Ajoutez rapidement des mots : CSV/JSON personnalisé ou packs prêts (A1/A2/B1).</p>
        <div class="form-group">
          <label class="form-label">Fichier CSV/JSON</label>
          <input id="file-input" class="form-control" type="file" accept=".csv,application/json" />
        </div>
        <div class="form-group">
          <button id="btn-import" class="btn btn--primary">Importer maintenant</button>
          <button id="btn-template" class="btn btn--secondary">Modèle CSV</button>
        </div>
        <div class="form-group">
          <button id="btn-pack" class="btn btn--secondary">Charger le pack du niveau sélectionné</button>
        </div>
      </div>
    `;
    wrap.appendChild(card);

    card.querySelector("#btn-template").addEventListener("click", () => {
      const csv = [
        "level,category,id,german,french,english,example_de,example_fr",
        "A1,Base,,Haus,maison,house,Das Haus ist groß.,La maison est grande.",
        "A1,Verbes,,gehen,aller,to go,Ich gehe nach Hause.,Je rentre à la maison.",
        "A2,Objets,,Tasche,sac,bag,Die Tasche ist neu.,Le sac est neuf.",
        "B1,Idées,,beschreiben,décrire,to describe,Er beschreibt den Plan.,Il décrit le plan."
      ].join("\\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "vocab_template.csv"; a.click();
      URL.revokeObjectURL(url);
    });

    card.querySelector("#btn-import").addEventListener("click", async () => {
      const fileEl = card.querySelector("#file-input");
      if (!fileEl.files || !fileEl.files.length) { flashToast("Sélectionnez un fichier CSV/JSON", true); return; }
      const file = fileEl.files[0];
      try {
        const text = await file.text();
        let entries = [];
        if (file.type === "application/json" || file.name.endsWith(".json")) {
          const data = JSON.parse(text);
          const items = Array.isArray(data) ? data : (data.items || []);
          entries = items.map(x => ({
            level: (x.level || "A1").toUpperCase(),
            category: x.category || "Divers",
            word: Object.assign({ examples: [] }, x.word || {})
          }));
        } else {
          entries = parseCSV(text);
        }
        integrateImported(entries);
        flashToast(`Import réussi : ${entries.length} mots`);
      } catch (e) {
        console.error(e);
        flashToast("Échec import, vérifiez le format.", true);
      }
    });

    card.querySelector("#btn-pack").addEventListener("click", () => {
      const p = loadProgress();
      loadPackForLevel(p.level);
    });

    // Reset progress
    const resetBtn = document.getElementById("reset-progress");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        localStorage.removeItem(STORAGE_KEY);
        flashToast("Progression réinitialisée");
        updateStatsUI();
      });
    }

    // Level radio persistence
    document.querySelectorAll('input[name="difficulty"]').forEach(r => {
      r.addEventListener("change", () => {
        setLevel(r.value);
        renderVocabulary();
      });
    });
  }

  /* ------------------ Navigation ------------------ */
  function setupNavigation() {
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const view = btn.getAttribute("data-view");
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
        document.getElementById(`${view}-view`).classList.add("active");
        if (view === "vocabulary") renderVocabulary();
      });
    });
  }

  /* ------------------ App Bootstrap ------------------ */
  function hydrateLevelRadio() {
    const p = loadProgress();
    const radio = document.querySelector(`input[name="difficulty"][value="${p.level}"]`);
    if (radio) radio.checked = true;
  }
  function bootstrap() {
    ensureExamples();
    updateDailyStreak();
    hydrateLevelRadio();
    setupNavigation();
    updateStatsUI();
    renderVocabulary();
    window.app = {
      navigateTo: (view) => {
        document.querySelector(`.nav-btn[data-view="${view}"]`)?.click();
      },
      refreshUI: () => {
        updateStatsUI();
        renderVocabulary();
      }
    };
    mountSettingsTools();
  }

  // Minimal styles for examples
  const css = document.createElement("style");
  css.textContent = `
    .vocab-examples { margin: 8px 12px 12px; padding: 10px; border-radius: 10px;
      background: rgba(33,128,141,0.08); border: 1px solid rgba(33,128,141,0.2); }
    .vocab-examples p { margin: 0 0 6px 0; font-size: 13px; line-height: 1.4; }
    .vocab-examples .de { font-weight: 600; }
    .achievement-toast { position: fixed; left: 50%; transform: translateX(-50%); bottom: 24px;
      padding: 10px 14px; border-radius: 10px; background: rgba(33,128,141,0.95); color: #fff;
      opacity: 0; transition: opacity .25s ease; pointer-events: none; }
    .achievement-toast.show { opacity: 1; }
    .vocab-card .vocab-head { display:flex; align-items: baseline; justify-content: space-between; gap: 10px; }
    .vocab-card .muted { opacity:.8; }
  `;
  document.head.appendChild(css);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
