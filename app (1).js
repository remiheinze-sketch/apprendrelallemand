
/* =======================================================
   German Learning App (Enhanced)
   - One logical example sentence per word (auto-generated fallback)
   - CSV/JSON importer to add up to 3000 words (A1/A2/B1)
   - Non-breaking: if a global `vocabularyData` exists, we extend it.
   - Adds "Importer des mots" controls into Settings view at runtime.
   ======================================================= */

(function () {
  const hasExistingData = typeof window.vocabularyData !== "undefined";

  // --- Base structure if not existing (keeps app workable) ---
  const baseVocabulary = hasExistingData ? window.vocabularyData : {
    A1: [
      {
        category: "Essentiels",
        words: [
          { id: "a1_ich", german: "ich", french: "je", english: "I" },
          { id: "a1_du", german: "du", french: "tu", english: "you (informal)" },
          { id: "a1_gehen", german: "gehen", french: "aller", english: "to go" },
          { id: "a1_Brot", german: "Brot", french: "pain", english: "bread" },
          { id: "a1_gut", german: "gut", french: "bon", english: "good" }
        ]
      }
    ],
    A2: [
      {
        category: "Courant",
        words: [
          { id: "a2_wissen", german: "wissen", french: "savoir", english: "to know" },
          { id: "a2_fahren", german: "fahren", french: "conduire", english: "to drive" }
        ]
      }
    ],
    B1: [
      {
        category: "Intermédiaire",
        words: [
          { id: "b1_beschreiben", german: "beschreiben", french: "décrire", english: "to describe" }
        ]
      }
    ]
  };

  // Make sure the object exists globally
  window.vocabularyData = baseVocabulary;

  // --- Helpers ---
  const isUpper = (s) => /^[A-ZÄÖÜ]/.test(s);
  const isLikelyNoun = (de) => isUpper(de);
  const isLikelyVerb = (en) => /^to\s/i.test(en || "");
  const isLikelyAdj  = (en) => !isLikelyVerb(en) && !/ /.test((en||"").trim()) && !isUpper((en||"")[0]);

  // Deterministic article guess for German nouns (very rough heuristic)
  function guessArticle(word) {
    // fallback patterns (far from perfect but serviceable for examples)
    const endingsDas = ["chen","lein","ment","um","ma","tum"];
    const endingsDie = ["heit","keit","schaft","ung","tät","ion","ik","ur","ei"];
    const lower = word.toLowerCase();
    if (endingsDas.some(e => lower.endsWith(e))) return "das";
    if (endingsDie.some(e => lower.endsWith(e))) return "die";
    return "der"; // default
  }

  // Very light conjugation for present tense (ich/du/er/wir/ihr/sie)
  function conjVerbInf(infinitive) {
    // separable prefix detection (z.B. "aufmachen")
    const m = infinitive.match(/^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zurück|zusammen)(.+)$/);
    const prefix = m ? m[1] : "";
    const stemInf = m ? m[2] : infinitive;
    const base = stemInf.replace(/en$/,"");
    function attach(personEnding) {
      const verb = base + personEnding;
      return prefix ? `${prefix} ${verb}` : verb;
    }
    return {
      ich: attach("e"),
      du: attach("st"),
      er: attach("t"),
      wir: infinitive,
      ihr: attach("t"),
      sie: infinitive
    };
  }

  // Example generator: returns {de, fr}
  function generateExample({ german, french, english }) {
    try {
      if (!german) return null;
      const de = german.trim();
      const fr = (french || "").trim();
      const en = (english || "").trim();

      if (isLikelyVerb(en)) {
        const inf = de.toLowerCase();
        const c = conjVerbInf(inf);
        // Patterns: ich..., wir..., er...
        const patterns = [
          { de: `Ich ${c.ich} heute früh.`, fr: `Je ${fr orVerb(fr, "vais")} tôt aujourd'hui.` },
          { de: `Wir ${c.wir} oft zusammen.`, fr: `Nous ${fr orVerb(fr, "allons")} souvent ensemble.` },
          { de: `Er ${c.er} jetzt nach Hause.`, fr: `Il ${fr orVerb(fr, "rentre")} à la maison maintenant.` }
        ];
        return pickStable(patterns, de);
      }

      if (isLikelyNoun(de)) {
        const article = guessArticle(de);
        const patterns = [
          { de: `${article} ${de} ist neu.`, fr: `${cap(articleFR(article))} ${fr} est nouveau/nouvelle.` },
          { de: `Ich brauche ${article} ${de}.`, fr: `J'ai besoin de ${detFR(article)} ${fr}.` },
          { de: `${article} ${de} steht im Zimmer.`, fr: `${cap(detFR(article))} ${fr} est dans la chambre.` }
        ];
        return pickStable(patterns, de);
      }

      // Adjectives or others
      if (isLikelyAdj(en)) {
        const patterns = [
          { de: `Das ist sehr ${de}.`, fr: `C'est très ${fr}.` },
          { de: `Heute ist es ${de}.`, fr: `Aujourd'hui, il fait ${fr}.` },
          { de: `Der Film war ${de}.`, fr: `Le film était ${fr}.` }
        ];
        return pickStable(patterns, de);
      }

      // Fallback neutral example
      return { de: `Ich benutze "${de}" jeden Tag.`, fr: `J'utilise « ${fr orDefault(fr, de)} » chaque jour.` };
    } catch(e) {
      return { de: `Ich lerne das Wort "${german}".`, fr: `J'apprends le mot « ${french || german} ». ` };
    }
  }

  // Helpers for French rendering
  function orDefault(value, def) { return value && value.trim() ? value : def; }
  function orVerb(fr, alt) { return (fr && fr.split(" ")[0]) || alt; }
  function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
  function detFR(article) {
    switch (article) {
      case "der": return "le";
      case "die": return "la";
      case "das": return "le";
      default: return "le/la";
    }
  }
  function articleFR(article){
    switch(article){
      case "der": return "le";
      case "die": return "la";
      case "das": return "le";
      default: return "le/la";
    }
  }
  function pickStable(list, seedStr){
    // deterministic pick based on seed
    let h=0;
    for (let i=0;i<seedStr.length;i++){ h = ((h<<5)-h) + seedStr.charCodeAt(i); h|=0; }
    const idx = Math.abs(h) % list.length;
    return list[idx];
  }

  // Inject examples if missing (one per word)
  function ensureExamples() {
    ["A1","A2","B1"].forEach(level => {
      (window.vocabularyData[level] || []).forEach(cat => {
        cat.words.forEach(w => {
          if (!w.examples || !w.examples.length) {
            const ex = generateExample(w);
            if (ex) w.examples = [ex];
          } else if (w.examples.length > 1) {
            // keep only one as requested
            w.examples = [w.examples[0]];
          }
        });
      });
    });
  }

  // ---- Importer (CSV/JSON) ----
  // CSV columns required:
  // level (A1|A2|B1), category, id (optional), german, french, english
  // Optional: example_de, example_fr
  function parseCSV(text) {
    const rows = text.split(/\r?\n/).filter(Boolean);
    const header = rows.shift().split(",").map(h => h.trim());
    const idx = (name) => header.findIndex(h => h.toLowerCase() === name);
    const iLevel = idx("level");
    const iCat   = idx("category");
    const iId    = idx("id");
    const iDe    = idx("german");
    const iFr    = idx("french");
    const iEn    = idx("english");
    const iExDe  = idx("example_de");
    const iExFr  = idx("example_fr");

    const out = [];
    for (const line of rows) {
      const cells = line.split(",").map(c => c.trim());
      const level = (cells[iLevel] || "A1").toUpperCase();
      const category = cells[iCat] || "Divers";
      const id = cells[iId] || `${level}_${cells[iDe]}`.replace(/\s+/g,"_").toLowerCase();
      const german = cells[iDe];
      if (!german) continue;
      const french = cells[iFr] || "";
      const english = cells[iEn] || "";
      const example_de = cells[iExDe] || "";
      const example_fr = cells[iExFr] || "";

      out.append = out.push({
        level, category,
        word: {
          id, german, french, english,
          examples: (example_de || example_fr) ? [{de: example_de || "", fr: example_fr || ""}] : []
        }
      });
    }
    return out;
  }

  function integrateImported(entries) {
    const perLevel = { A1:{}, A2:{}, B1:{} };
    // group by level + category
    entries.forEach(item => {
      const lvl = (item.level in perLevel) ? item.level : "A1";
      if (!perLevel[lvl][item.category]) perLevel[lvl][item.category] = [];
      perLevel[lvl][item.category].push(item.word);
    });

    Object.keys(perLevel).forEach(level => {
      const bucket = perLevel[level];
      Object.keys(bucket).forEach(catName => {
        const words = bucket[catName];
        // find existing category or create
        const existing = (window.vocabularyData[level] || []).find(c => c.category === catName);
        if (existing) {
          existing.words.push(...words);
        } else {
          if (!window.vocabularyData[level]) window.vocabularyData[level] = [];
          window.vocabularyData[level].push({ category: catName, words });
        }
      });
    });

    ensureExamples(); // make sure each added word has 1 example
  }

  // Create and inject importer UI into Settings view
  function mountImporterUI() {
    const settings = document.getElementById("settings-view");
    if (!settings) return;

    // create card
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card__body">
        <h3>Importer des mots (CSV/JSON)</h3>
        <p>Ajoutez jusqu'à 3000 mots répartis par niveaux (A1/A2/B1). Une phrase d'exemple est générée automatiquement si elle est absente.</p>
        <div class="form-group">
          <label class="form-label">Fichier CSV ou JSON</label>
          <input id="vocab-file-input" class="form-control" type="file" accept=".csv,application/json" />
        </div>
        <div class="form-group">
          <button id="import-vocab-btn" class="btn btn--primary">Importer maintenant</button>
          <button id="download-template-btn" class="btn btn--secondary">Télécharger le modèle CSV</button>
        </div>
        <p id="import-status" class="status" style="display:none;"></p>
      </div>
    `;
    settings.querySelector(".settings-content").appendChild(card);

    const fileInput = card.querySelector("#vocab-file-input");
    const btn = card.querySelector("#import-vocab-btn");
    const statusEl = card.querySelector("#import-status");
    const dlBtn = card.querySelector("#download-template-btn");

    dlBtn.addEventListener("click", () => {
      const csv = [
        "level,category,id,german,french,english,example_de,example_fr",
        "A1,Base,,Haus,maison,house,Das Haus ist neu.,La maison est neuve.",
        "A1,Verbes,,gehen,aller,to go,Ich gehe nach Hause.,Je rentre à la maison.",
        "A2,Objets,,Tasche,sac,bag,Die Tasche ist groß.,Le sac est grand.",
        "B1,Idées,,beschreiben,décrire,to describe,Er beschreibt die Situation.,Il décrit la situation."
      ].join("\\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "vocab_template.csv";
      a.click();
      URL.revokeObjectURL(url);
    });

    btn.addEventListener("click", async () => {
      if (!fileInput.files || !fileInput.files.length) {
        flashStatus("Veuillez sélectionner un fichier.", "error"); return;
      }
      const file = fileInput.files[0];
      try {
        const text = await file.text();
        let entries = [];
        if (file.type === "application/json" || file.name.endsWith(".json")) {
          const data = JSON.parse(text);
          // expect {items:[{level, category, word:{id,german,french,english,examples?}}]}
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
        if (window.app && typeof window.app.refreshUI === "function") {
          window.app.refreshUI(); // optional hook to redraw lists/progress if app defines it
        }
        flashStatus(`Import réussi : ${entries.length} mots ajoutés.`, "success");
      } catch (e) {
        console.error(e);
        flashStatus("Échec de l'import. Vérifiez le format du fichier.", "error");
      }
    });

    function flashStatus(msg, kind) {
      statusEl.style.display = "inline-flex";
      statusEl.textContent = msg;
      statusEl.className = `status status--${kind}`;
      setTimeout(() => { statusEl.style.display = "none"; }, 5000);
    }
  }

  // Enhance vocabulary view rendering to show examples if the app exposes a hook point
  function monkeyPatchRenderer() {
    // If the app has a function renderVocabularyItem(g) we can patch it to show examples.
    // Otherwise, we observe DOM mutations and decorate cards.
    if (!window.__vocabExampleDecorator) {
      const style = document.createElement("style");
      style.textContent = `
        .vocab-examples { margin-top: 8px; padding: 8px; border-radius: 8px; background: rgba(33,128,141,0.08); border: 1px solid rgba(33,128,141,0.2); }
        .vocab-examples p { margin: 0 0 6px 0; font-size: 13px; line-height: 1.4; }
        .vocab-examples .de { font-weight: 600; }
        .vocab-examples .fr { opacity: 0.9; }
      `;
      document.head.appendChild(style);
      window.__vocabExampleDecorator = true;
    }

    const observer = new MutationObserver(() => {
      // decorate any vocabulary cards with examples
      document.querySelectorAll("[data-word-id]").forEach(card => {
        if (card.querySelector(".vocab-examples")) return;
        const id = card.getAttribute("data-word-id");
        const w = findWordById(id);
        if (w && w.examples && w.examples.length) {
          const box = document.createElement("div");
          box.className = "vocab-examples";
          const ex = w.examples[0];
          box.innerHTML = `<p class="de">🇩🇪 ${ex.de}</p><p class="fr">🇫🇷 ${ex.fr}</p>`;
          card.appendChild(box);
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function findWordById(targetId) {
    for (const level of ["A1","A2","B1"]) {
      for (const cat of (window.vocabularyData[level] || [])) {
        for (const w of cat.words) {
          if (w.id === targetId) return w;
        }
      }
    }
    return null;
  }

  // Boot
  ensureExamples();
  // mount importer after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      mountImporterUI();
      monkeyPatchRenderer();
    });
  } else {
    mountImporterUI();
    monkeyPatchRenderer();
  }

  // Expose small API
  window.vocabTools = {
    add: integrateImported,
    ensureExamples,
    generateExample
  };

})();
