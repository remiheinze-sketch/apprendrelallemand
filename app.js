// German Learning App - JavaScript with Full A1/A2 Vocabulary Data (306 words)

// Complete Vocabulary Data with Difficulty Levels
const vocabularyData = {
  A1: [
    {
      category: "Pronouns",
      words: [
        {id: "p1", german: "ich", french: "je", english: "I"},
        {id: "p2", german: "du", french: "tu", english: "you (informal)"},
        {id: "p3", german: "er", french: "il", english: "he"},
        {id: "p4", german: "sie", french: "elle", english: "she"},
        {id: "p5", german: "es", french: "c'est/ça", english: "it"},
        {id: "p6", german: "wir", french: "nous", english: "we"},
        {id: "p7", german: "ihr", french: "vous (pl)", english: "you all"},
        {id: "p8", german: "Sie", french: "vous (formel)", english: "you (formal)"},
        {id: "p9", german: "sie", french: "ils/elles", english: "they"},
        {id: "p10", german: "mich", french: "me", english: "me (obj)"},
        {id: "p11", german: "dich", french: "te", english: "you (obj)"},
        {id: "p12", german: "mir", french: "à moi", english: "to me"},
        {id: "p13", german: "dir", french: "à toi", english: "to you"}
      ]
    },
    {
      category: "Articles",
      words: [
        {id: "a1", german: "der", french: "le", english: "the (masc)"},
        {id: "a2", german: "die", french: "la", english: "the (fem)"},
        {id: "a3", german: "das", french: "le", english: "the (neut)"},
        {id: "a4", german: "ein", french: "un", english: "a/an"},
        {id: "a5", german: "eine", french: "une", english: "a/an (fem)"},
        {id: "a6", german: "einen", french: "un (obj)", english: "a/an (obj)"},
        {id: "a7", german: "einem", french: "un (dat)", english: "a/an (dat)"},
        {id: "a8", german: "eines", french: "d'un", english: "of a/an"},
        {id: "a9", german: "dieser", french: "ce", english: "this (masc)"},
        {id: "a10", german: "diese", french: "cette", english: "this (fem)"},
        {id: "a11", german: "dieses", french: "ce", english: "this (neut)"}
      ]
    },
    {
      category: "Common Verbs",
      words: [
        {id: "v1", german: "sein", french: "être", english: "to be"},
        {id: "v2", german: "haben", french: "avoir", english: "to have"},
        {id: "v3", german: "werden", french: "devenir", english: "to become"},
        {id: "v4", german: "gehen", french: "aller", english: "to go"},
        {id: "v5", german: "kommen", french: "venir", english: "to come"},
        {id: "v6", german: "machen", french: "faire", english: "to do/make"},
        {id: "v7", german: "sagen", french: "dire", english: "to say"},
        {id: "v8", german: "sehen", french: "voir", english: "to see"},
        {id: "v9", german: "geben", french: "donner", english: "to give"},
        {id: "v10", german: "nehmen", french: "prendre", english: "to take"},
        {id: "v11", german: "essen", french: "manger", english: "to eat"},
        {id: "v12", german: "trinken", french: "boire", english: "to drink"},
        {id: "v13", german: "schlafen", french: "dormir", english: "to sleep"},
        {id: "v14", german: "arbeiten", french: "travailler", english: "to work"},
        {id: "v15", german: "spielen", french: "jouer", english: "to play"},
        {id: "v16", german: "lernen", french: "apprendre", english: "to learn"},
        {id: "v17", german: "lesen", french: "lire", english: "to read"},
        {id: "v18", german: "schreiben", french: "écrire", english: "to write"},
        {id: "v19", german: "sprechen", french: "parler", english: "to speak"},
        {id: "v20", german: "verstehen", french: "comprendre", english: "to understand"}
      ]
    },
    {
      category: "Family",
      words: [
        {id: "f1", german: "Mutter", french: "mère", english: "mother"},
        {id: "f2", german: "Vater", french: "père", english: "father"},
        {id: "f3", german: "Sohn", french: "fils", english: "son"},
        {id: "f4", german: "Tochter", french: "fille", english: "daughter"},
        {id: "f5", german: "Bruder", french: "frère", english: "brother"},
        {id: "f6", german: "Schwester", french: "sœur", english: "sister"},
        {id: "f7", german: "Großmutter", french: "grand-mère", english: "grandmother"},
        {id: "f8", german: "Großvater", french: "grand-père", english: "grandfather"},
        {id: "f9", german: "Ehemann", french: "mari", english: "husband"},
        {id: "f10", german: "Ehefrau", french: "femme", english: "wife"},
        {id: "f11", german: "Kind", french: "enfant", english: "child"},
        {id: "f12", german: "Baby", french: "bébé", english: "baby"}
      ]
    },
    {
      category: "Food",
      words: [
        {id: "fd1", german: "Brot", french: "pain", english: "bread"},
        {id: "fd2", german: "Wasser", french: "eau", english: "water"},
        {id: "fd3", german: "Milch", french: "lait", english: "milk"},
        {id: "fd4", german: "Käse", french: "fromage", english: "cheese"},
        {id: "fd5", german: "Ei", french: "œuf", english: "egg"},
        {id: "fd6", german: "Fleisch", french: "viande", english: "meat"},
        {id: "fd7", german: "Fisch", french: "poisson", english: "fish"},
        {id: "fd8", german: "Obst", french: "fruit", english: "fruit"},
        {id: "fd9", german: "Gemüse", french: "légumes", english: "vegetables"},
        {id: "fd10", german: "Apfel", french: "pomme", english: "apple"},
        {id: "fd11", german: "Banane", french: "banane", english: "banana"},
        {id: "fd12", german: "Orange", french: "orange", english: "orange"},
        {id: "fd13", german: "Tomate", french: "tomate", english: "tomato"},
        {id: "fd14", german: "Kartoffel", french: "pomme de terre", english: "potato"}
      ]
    },
    {
      category: "Drinks",
      words: [
        {id: "d1", german: "Kaffee", french: "café", english: "coffee"},
        {id: "d2", german: "Tee", french: "thé", english: "tea"},
        {id: "d3", german: "Wein", french: "vin", english: "wine"},
        {id: "d4", german: "Bier", french: "bière", english: "beer"},
        {id: "d5", german: "Saft", french: "jus", english: "juice"},
        {id: "d6", german: "Limonade", french: "limonade", english: "lemonade"},
        {id: "d7", german: "Mineralwasser", french: "eau minérale", english: "mineral water"}
      ]
    },
    {
      category: "Numbers",
      words: [
        {id: "n1", german: "null", french: "zéro", english: "zero"},
        {id: "n2", german: "eins", french: "un", english: "one"},
        {id: "n3", german: "zwei", french: "deux", english: "two"},
        {id: "n4", german: "drei", french: "trois", english: "three"},
        {id: "n5", german: "vier", french: "quatre", english: "four"},
        {id: "n6", german: "fünf", french: "cinq", english: "five"},
        {id: "n7", german: "sechs", french: "six", english: "six"},
        {id: "n8", german: "sieben", french: "sept", english: "seven"},
        {id: "n9", german: "acht", french: "huit", english: "eight"},
        {id: "n10", german: "neun", french: "neuf", english: "nine"},
        {id: "n11", german: "zehn", french: "dix", english: "ten"},
        {id: "n12", german: "elf", french: "onze", english: "eleven"},
        {id: "n13", german: "zwölf", french: "douze", english: "twelve"},
        {id: "n14", german: "dreizehn", french: "treize", english: "thirteen"},
        {id: "n15", german: "vierzehn", french: "quatorze", english: "fourteen"},
        {id: "n16", german: "fünfzehn", french: "quinze", english: "fifteen"},
        {id: "n17", german: "sechzehn", french: "seize", english: "sixteen"},
        {id: "n18", german: "siebzehn", french: "dix-sept", english: "seventeen"},
        {id: "n19", german: "achtzehn", french: "dix-huit", english: "eighteen"},
        {id: "n20", german: "neunzehn", french: "dix-neuf", english: "nineteen"}
      ]
    },
    {
      category: "Greetings",
      words: [
        {id: "g1", german: "Hallo", french: "bonjour", english: "hello"},
        {id: "g2", german: "Guten Morgen", french: "bon matin", english: "good morning"},
        {id: "g3", german: "Guten Tag", french: "bon jour", english: "good day"},
        {id: "g4", german: "Guten Abend", french: "bonsoir", english: "good evening"},
        {id: "g5", german: "Gute Nacht", french: "bonne nuit", english: "good night"},
        {id: "g6", german: "Auf Wiedersehen", french: "au revoir", english: "goodbye"},
        {id: "g7", german: "Tschüss", french: "salut", english: "bye"},
        {id: "g8", german: "Danke", french: "merci", english: "thank you"},
        {id: "g9", german: "Danke schön", french: "merci beaucoup", english: "thank you very much"},
        {id: "g10", german: "Bitte", french: "s'il vous plaît", english: "please"},
        {id: "g11", german: "Ja", french: "oui", english: "yes"},
        {id: "g12", german: "Nein", french: "non", english: "no"},
        {id: "g13", german: "Vielleicht", french: "peut-être", english: "maybe"},
        {id: "g14", german: "Entschuldigung", french: "excuses", english: "excuse me"},
        {id: "g15", german: "Sorry", french: "désolé", english: "sorry"}
      ]
    },
    {
      category: "Adjectives",
      words: [
        {id: "adj1", german: "groß", french: "grand", english: "big"},
        {id: "adj2", german: "klein", french: "petit", english: "small"},
        {id: "adj3", german: "alt", french: "vieux", english: "old"},
        {id: "adj4", german: "neu", french: "nouveau", english: "new"},
        {id: "adj5", german: "schön", french: "beau", english: "beautiful"},
        {id: "adj6", german: "hässlich", french: "laid", english: "ugly"},
        {id: "adj7", german: "gut", french: "bon", english: "good"},
        {id: "adj8", german: "schlecht", french: "mauvais", english: "bad"},
        {id: "adj9", german: "schnell", french: "rapide", english: "fast"},
        {id: "adj10", german: "langsam", french: "lent", english: "slow"},
        {id: "adj11", german: "heiß", french: "chaud", english: "hot"},
        {id: "adj12", german: "kalt", french: "froid", english: "cold"},
        {id: "adj13", german: "warm", french: "tiède", english: "warm"},
        {id: "adj14", german: "hell", french: "clair", english: "light"},
        {id: "adj15", german: "dunkel", french: "sombre", english: "dark"}
      ]
    },
    {
      category: "House",
      words: [
        {id: "h1", german: "Haus", french: "maison", english: "house"},
        {id: "h2", german: "Wohnung", french: "appartement", english: "apartment"},
        {id: "h3", german: "Zimmer", french: "chambre", english: "room"},
        {id: "h4", german: "Schlafzimmer", french: "chambre à coucher", english: "bedroom"},
        {id: "h5", german: "Wohnzimmer", french: "salon", english: "living room"},
        {id: "h6", german: "Küche", french: "cuisine", english: "kitchen"},
        {id: "h7", german: "Badezimmer", french: "salle de bain", english: "bathroom"},
        {id: "h8", german: "Toilette", french: "toilettes", english: "toilet"},
        {id: "h9", german: "Flur", french: "couloir", english: "hallway"},
        {id: "h10", german: "Keller", french: "sous-sol", english: "basement"},
        {id: "h11", german: "Dachboden", french: "grenier", english: "attic"},
        {id: "h12", german: "Garten", french: "jardin", english: "garden"},
        {id: "h13", german: "Balkon", french: "balcon", english: "balcony"},
        {id: "h14", german: "Terrasse", french: "terrasse", english: "terrace"}
      ]
    },
    {
      category: "Furniture",
      words: [
        {id: "fur1", german: "Tisch", french: "table", english: "table"},
        {id: "fur2", german: "Stuhl", french: "chaise", english: "chair"},
        {id: "fur3", german: "Bett", french: "lit", english: "bed"},
        {id: "fur4", german: "Schrank", french: "armoire", english: "closet"},
        {id: "fur5", german: "Sofa", french: "canapé", english: "sofa"},
        {id: "fur6", german: "Sessel", french: "fauteuil", english: "armchair"},
        {id: "fur7", german: "Regal", french: "étagère", english: "shelf"},
        {id: "fur8", german: "Schreibtisch", french: "bureau", english: "desk"},
        {id: "fur9", german: "Fenster", french: "fenêtre", english: "window"},
        {id: "fur10", german: "Tür", french: "porte", english: "door"},
        {id: "fur11", german: "Vorhang", french: "rideau", english: "curtain"},
        {id: "fur12", german: "Spiegel", french: "miroir", english: "mirror"},
        {id: "fur13", german: "Lampe", french: "lampe", english: "lamp"},
        {id: "fur14", german: "Bild", french: "tableau", english: "picture"}
      ]
    },
    {
      category: "Colors",
      words: [
        {id: "c1", german: "rot", french: "rouge", english: "red"},
        {id: "c2", german: "blau", french: "bleu", english: "blue"},
        {id: "c3", german: "gelb", french: "jaune", english: "yellow"},
        {id: "c4", german: "grün", french: "vert", english: "green"},
        {id: "c5", german: "schwarz", french: "noir", english: "black"},
        {id: "c6", german: "weiß", french: "blanc", english: "white"},
        {id: "c7", german: "grau", french: "gris", english: "gray"},
        {id: "c8", german: "braun", french: "brun", english: "brown"},
        {id: "c9", german: "orange", french: "orange", english: "orange"},
        {id: "c10", german: "rosa", french: "rose", english: "pink"},
        {id: "c11", german: "violett", french: "violet", english: "purple"},
        {id: "c12", german: "türkis", french: "turquoise", english: "turquoise"}
      ]
    },
    {
      category: "Body Parts",
      words: [
        {id: "b1", german: "Kopf", french: "tête", english: "head"},
        {id: "b2", german: "Auge", french: "œil", english: "eye"},
        {id: "b3", german: "Augen", french: "yeux", english: "eyes"},
        {id: "b4", german: "Ohr", french: "oreille", english: "ear"},
        {id: "b5", german: "Nase", french: "nez", english: "nose"},
        {id: "b6", german: "Mund", french: "bouche", english: "mouth"},
        {id: "b7", german: "Zahn", french: "dent", english: "tooth"},
        {id: "b8", german: "Zunge", french: "langue", english: "tongue"},
        {id: "b9", german: "Hals", french: "gorge", english: "throat"},
        {id: "b10", german: "Haar", french: "cheveu", english: "hair"},
        {id: "b11", german: "Arm", french: "bras", english: "arm"},
        {id: "b12", german: "Hand", french: "main", english: "hand"},
        {id: "b13", german: "Finger", french: "doigt", english: "finger"},
        {id: "b14", german: "Bein", french: "jambe", english: "leg"},
        {id: "b15", german: "Fuß", french: "pied", english: "foot"}
      ]
    },
    {
      category: "Clothing",
      words: [
        {id: "cl1", german: "Hemd", french: "chemise", english: "shirt"},
        {id: "cl2", german: "T-Shirt", french: "t-shirt", english: "t-shirt"},
        {id: "cl3", german: "Hose", french: "pantalon", english: "pants"},
        {id: "cl4", german: "Rock", french: "jupe", english: "skirt"},
        {id: "cl5", german: "Kleid", french: "robe", english: "dress"},
        {id: "cl6", german: "Mantel", french: "manteau", english: "coat"},
        {id: "cl7", german: "Schuhe", french: "chaussures", english: "shoes"},
        {id: "cl8", german: "Schuh", french: "chaussure", english: "shoe"},
        {id: "cl9", german: "Socke", french: "chaussette", english: "sock"},
        {id: "cl10", german: "Krawatte", french: "cravate", english: "tie"},
        {id: "cl11", german: "Mütze", french: "bonnet", english: "hat"},
        {id: "cl12", german: "Brille", french: "lunettes", english: "glasses"}
      ]
    },
    {
      category: "Days & Months",
      words: [
        {id: "dm1", german: "Montag", french: "lundi", english: "Monday"},
        {id: "dm2", german: "Dienstag", french: "mardi", english: "Tuesday"},
        {id: "dm3", german: "Mittwoch", french: "mercredi", english: "Wednesday"},
        {id: "dm4", german: "Donnerstag", french: "jeudi", english: "Thursday"},
        {id: "dm5", german: "Freitag", french: "vendredi", english: "Friday"},
        {id: "dm6", german: "Samstag", french: "samedi", english: "Saturday"},
        {id: "dm7", german: "Sonntag", french: "dimanche", english: "Sunday"},
        {id: "dm8", german: "Januar", french: "janvier", english: "January"},
        {id: "dm9", german: "Februar", french: "février", english: "February"},
        {id: "dm10", german: "März", french: "mars", english: "March"},
        {id: "dm11", german: "April", french: "avril", english: "April"},
        {id: "dm12", german: "Mai", french: "mai", english: "May"},
        {id: "dm13", german: "Juni", french: "juin", english: "June"}
      ]
    },
    {
      category: "Time",
      words: [
        {id: "t1", german: "Tag", french: "jour", english: "day"},
        {id: "t2", german: "Woche", french: "semaine", english: "week"},
        {id: "t3", german: "Monat", french: "mois", english: "month"},
        {id: "t4", german: "Jahr", french: "année", english: "year"},
        {id: "t5", german: "Stunde", french: "heure", english: "hour"},
        {id: "t6", german: "Minute", french: "minute", english: "minute"},
        {id: "t7", german: "Sekunde", french: "seconde", english: "second"},
        {id: "t8", german: "Morgen", french: "matin", english: "morning"},
        {id: "t9", german: "Mittag", french: "midi", english: "noon"},
        {id: "t10", german: "Nachmittag", french: "après-midi", english: "afternoon"},
        {id: "t11", german: "Abend", french: "soir", english: "evening"},
        {id: "t12", german: "Nacht", french: "nuit", english: "night"}
      ]
    }
  ],
  A2: [
    {
      category: "Advanced Verbs",
      words: [
        {id: "av1", german: "wissen", french: "savoir", english: "to know"},
        {id: "av2", german: "bleiben", french: "rester", english: "to stay"},
        {id: "av3", german: "stehen", french: "se tenir debout", english: "to stand"},
        {id: "av4", german: "sitzen", french: "s'asseoir", english: "to sit"},
        {id: "av5", german: "liegen", french: "être couché", english: "to lie"},
        {id: "av6", german: "fallen", french: "tomber", english: "to fall"},
        {id: "av7", german: "laufen", french: "courir", english: "to run"},
        {id: "av8", german: "fahren", french: "conduire", english: "to drive"},
        {id: "av9", german: "fliegen", french: "voler", english: "to fly"},
        {id: "av10", german: "schwimmen", french: "nager", english: "to swim"}
      ]
    },
    {
      category: "Advanced Adjectives",
      words: [
        {id: "aadj1", german: "schwer", french: "lourd", english: "heavy"},
        {id: "aadj2", german: "leicht", french: "léger", english: "light"},
        {id: "aadj3", german: "dünn", french: "fin", english: "thin"},
        {id: "aadj4", german: "dick", french: "épais", english: "thick"},
        {id: "aadj5", german: "tief", french: "profond", english: "deep"},
        {id: "aadj6", german: "flach", french: "plat", english: "flat"},
        {id: "aadj7", german: "hart", french: "dur", english: "hard"},
        {id: "aadj8", german: "weich", french: "mou", english: "soft"},
        {id: "aadj9", german: "trocken", french: "sec", english: "dry"},
        {id: "aadj10", german: "nass", french: "mouillé", english: "wet"}
      ]
    },
    {
      category: "School",
      words: [
        {id: "sc1", german: "Schule", french: "école", english: "school"},
        {id: "sc2", german: "Universität", french: "université", english: "university"},
        {id: "sc3", german: "Lehrer", french: "professeur", english: "teacher"},
        {id: "sc4", german: "Student", french: "étudiant", english: "student"},
        {id: "sc5", german: "Schüler", french: "élève", english: "student (primary)"},
        {id: "sc6", german: "Buch", french: "livre", english: "book"},
        {id: "sc7", german: "Heft", french: "cahier", english: "notebook"},
        {id: "sc8", german: "Stift", french: "stylo", english: "pen"},
        {id: "sc9", german: "Bleistift", french: "crayon", english: "pencil"},
        {id: "sc10", german: "Papier", french: "papier", english: "paper"}
      ]
    },
    {
      category: "Work",
      words: [
        {id: "w1", german: "Arbeit", french: "travail", english: "work"},
        {id: "w2", german: "Beruf", french: "profession", english: "profession"},
        {id: "w3", german: "Büro", french: "bureau", english: "office"},
        {id: "w4", german: "Fabrik", french: "usine", english: "factory"},
        {id: "w5", german: "Geschäft", french: "commerce", english: "business"},
        {id: "w6", german: "Chef", french: "patron", english: "boss"},
        {id: "w7", german: "Mitarbeiter", french: "collègue", english: "colleague"},
        {id: "w8", german: "Gehalt", french: "salaire", english: "salary"},
        {id: "w9", german: "Lohn", french: "salaire horaire", english: "wage"},
        {id: "w10", german: "Computer", french: "ordinateur", english: "computer"}
      ]
    },
    {
      category: "Transport",
      words: [
        {id: "tr1", german: "Auto", french: "voiture", english: "car"},
        {id: "tr2", german: "Wagen", french: "automobile", english: "automobile"},
        {id: "tr3", german: "Bus", french: "autobus", english: "bus"},
        {id: "tr4", german: "Zug", french: "train", english: "train"},
        {id: "tr5", german: "Straßenbahn", french: "tramway", english: "streetcar"},
        {id: "tr6", german: "U-Bahn", french: "métro", english: "subway"},
        {id: "tr7", german: "Flugzeug", french: "avion", english: "airplane"},
        {id: "tr8", german: "Schiff", french: "bateau", english: "ship"},
        {id: "tr9", german: "Fahrrad", french: "vélo", english: "bicycle"},
        {id: "tr10", german: "Motorrad", french: "moto", english: "motorcycle"},
        {id: "tr11", german: "Straße", french: "rue", english: "street"},
        {id: "tr12", german: "Weg", french: "chemin", english: "path"},
        {id: "tr13", german: "Bahnhof", french: "gare", english: "train station"},
        {id: "tr14", german: "Flughafen", french: "aéroport", english: "airport"}
      ]
    },
    {
      category: "Food A2",
      words: [
        {id: "fa2_1", german: "Salat", french: "salade", english: "salad"},
        {id: "fa2_2", german: "Suppe", french: "soupe", english: "soup"},
        {id: "fa2_3", german: "Huhn", french: "poulet", english: "chicken"},
        {id: "fa2_4", german: "Schwein", french: "porc", english: "pork"},
        {id: "fa2_5", german: "Rind", french: "bœuf", english: "beef"},
        {id: "fa2_6", german: "Butter", french: "beurre", english: "butter"},
        {id: "fa2_7", german: "Öl", french: "huile", english: "oil"},
        {id: "fa2_8", german: "Zucker", french: "sucre", english: "sugar"},
        {id: "fa2_9", german: "Salz", french: "sel", english: "salt"},
        {id: "fa2_10", german: "Pfeffer", french: "poivre", english: "pepper"}
      ]
    }
  ],
  B1: []
};

// Practice Sentences by Level
const practiceSentences = {
  A1: [
    {french: "Je suis heureux", german: "Ich bin glücklich"},
    {french: "Tu as un livre", german: "Du hast ein Buch"},
    {french: "Il joue au football", german: "Er spielt Fußball"},
    {french: "Elle boit du café", german: "Sie trinkt Kaffee"},
    {french: "La maison est grande", german: "Das Haus ist groß"},
    {french: "Nous allons à la maison", german: "Wir gehen nach Hause"},
    {french: "Vous devenez élèves", german: "Ihr werdet Schüler"},
    {french: "Ils mangent du pain", german: "Sie essen Brot"}
  ],
  A2: [
    {french: "Je suis resté à la maison", german: "Ich bin zu Hause geblieben"},
    {french: "Tu as conduit la voiture", german: "Du hast das Auto gefahren"},
    {french: "Il a volé en avion", german: "Er ist mit dem Flugzeug geflogen"},
    {french: "Elle a nagé dans la mer", german: "Sie ist im Meer geschwommen"},
    {french: "Nous étudions à l'université", german: "Wir studieren an der Universität"},
    {french: "Vous travaillez au bureau", german: "Ihr arbeitet im Büro"},
    {french: "Ils voyagent en train", german: "Sie fahren mit dem Zug"},
    {french: "Je connais la réponse", german: "Ich weiß die Antwort"}
  ],
  B1: []
};

// App State - All stored in memory (no localStorage)
const appState = {
  currentView: 'dashboard',
  difficulty: 'A1',
  sessionLength: 'medium',
  streak: 0,
  lastVisit: new Date().toDateString(),
  wordProgress: {}, // { "word-id": { mastery: 0|25|50|75|100, lastReviewed: Date } }
  exerciseHistory: [],
  currentExercise: null
};

// Initialize word progress for all words across all levels
function initializeWordProgress() {
  console.log('Initializing word progress...');
  ['A1', 'A2', 'B1'].forEach(level => {
    if (vocabularyData[level]) {
      vocabularyData[level].forEach((category) => {
        category.words.forEach((word) => {
          if (!appState.wordProgress[word.id]) {
            appState.wordProgress[word.id] = {
              mastery: 0, // 0%, 25%, 50%, 75%, 100%
              lastReviewed: null,
              level: level
            };
          }
        });
      });
    }
  });
  console.log(`Initialized ${Object.keys(appState.wordProgress).length} words`);
}

// Get all words for current difficulty level
function getAllWords(filterLevel = null) {
  const level = filterLevel || appState.difficulty;
  console.log(`Getting words for level: ${level}`);
  const words = [];
  
  if (vocabularyData[level]) {
    vocabularyData[level].forEach((category) => {
      category.words.forEach((word) => {
        words.push({
          ...word,
          category: category.category,
          level: level,
          progress: appState.wordProgress[word.id] || { mastery: 0, lastReviewed: null, level: level }
        });
      });
    });
  }
  
  console.log(`Found ${words.length} words for level ${level}`);
  return words;
}

// Get words by mastery percentage
function getWordsByMastery(masteryPercent) {
  return getAllWords().filter(word => word.progress.mastery === masteryPercent);
}

// Get mastery level label from percentage
function getMasteryLabel(percent) {
  if (percent === 0) return 'Nouveau';
  if (percent === 25) return 'Vu';
  if (percent === 50) return 'Connu';
  if (percent === 75) return 'Compétent';
  if (percent === 100) return 'Maîtrisé';
  return 'Nouveau';
}

// Get mastery CSS class from percentage
function getMasteryClass(percent) {
  if (percent === 0) return 'mastery-new';
  if (percent === 25) return 'mastery-seen';
  if (percent === 50) return 'mastery-known';
  if (percent === 75) return 'mastery-proficient';
  if (percent === 100) return 'mastery-mastered';
  return 'mastery-new';
}

// Update word mastery (now uses percentage: 0, 25, 50, 75, 100)
function updateWordMastery(wordId, newMasteryPercent) {
  if (appState.wordProgress[wordId]) {
    const oldMastery = appState.wordProgress[wordId].mastery;
    appState.wordProgress[wordId].mastery = newMasteryPercent;
    appState.wordProgress[wordId].lastReviewed = new Date();
    
    console.log(`Updated word ${wordId}: ${oldMastery}% → ${newMasteryPercent}%`);
    
    // Check for achievements
    if (newMasteryPercent === 100 && oldMastery !== 100) {
      const masteredCount = getWordsByMastery(100).length;
      if (masteredCount === 10) {
        showAchievement('🎉 10 mots maîtrisés!');
      } else if (masteredCount === 25) {
        showAchievement('⭐ 25 mots maîtrisés!');
      } else if (masteredCount === 50) {
        showAchievement('🏆 50 mots maîtrisés!');
      } else if (masteredCount === 100) {
        showAchievement('🌟 100 mots maîtrisés!');
      }
    }
  }
}

// Progress word to next mastery level
function progressWordMastery(wordId) {
  if (appState.wordProgress[wordId]) {
    const current = appState.wordProgress[wordId].mastery;
    let next = current;
    
    if (current === 0) next = 25;
    else if (current === 25) next = 50;
    else if (current === 50) next = 75;
    else if (current === 75) next = 100;
    
    updateWordMastery(wordId, next);
  }
}

// Calculate progress statistics for current level
function getProgressStats() {
  const allWords = getAllWords();
  const total = allWords.length;
  const mastered = allWords.filter(w => w.progress.mastery === 100).length;
  const proficient = allWords.filter(w => w.progress.mastery === 75).length;
  const known = allWords.filter(w => w.progress.mastery === 50).length;
  const seen = allWords.filter(w => w.progress.mastery === 25).length;
  const newWords = allWords.filter(w => w.progress.mastery === 0).length;
  
  // Calculate weighted completion percentage
  let totalProgress = 0;
  allWords.forEach(word => {
    totalProgress += word.progress.mastery;
  });
  const percentage = total > 0 ? Math.round(totalProgress / (total * 100) * 100) : 0;
  
  return {
    total,
    mastered,
    proficient,
    known,
    seen,
    newWords,
    percentage
  };
}

// Update streak
function updateStreak() {
  const today = new Date().toDateString();
  const lastVisit = appState.lastVisit;
  
  if (lastVisit !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastVisit === yesterday.toDateString()) {
      appState.streak += 1;
      if (appState.streak === 7) {
        showAchievement('🔥 Série de 7 jours!');
      }
    } else {
      appState.streak = 1;
    }
    
    appState.lastVisit = today;
  }
}

// Show achievement toast
function showAchievement(message) {
  const toast = document.getElementById('achievement-toast');
  const messageEl = document.getElementById('achievement-message');
  messageEl.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Navigation
function navigateTo(view) {
  // Hide all views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  
  // Show selected view
  document.getElementById(`${view}-view`).classList.add('active');
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
  
  appState.currentView = view;
  
  // Render view content
  if (view === 'dashboard') renderDashboard();
  if (view === 'vocabulary') renderVocabulary();
  if (view === 'exercises') renderExerciseMenu();
  if (view === 'settings') renderSettings();
}

// Render Dashboard
function renderDashboard() {
  const stats = getProgressStats();
  
  console.log('Rendering dashboard for level:', appState.difficulty, 'Stats:', stats);
  
  // Update header stats
  document.getElementById('streak-display').textContent = appState.streak;
  document.getElementById('words-learned-display').textContent = stats.mastered;
  
  // Update progress card
  document.getElementById('current-level').textContent = appState.difficulty;
  document.getElementById('current-level').className = `level-badge level-${appState.difficulty.toLowerCase()}`;
  document.getElementById('overall-progress').style.width = `${stats.percentage}%`;
  document.getElementById('progress-percentage').textContent = stats.percentage;
  
  // Update stats
  document.getElementById('words-mastered').textContent = stats.mastered;
  document.getElementById('daily-streak').textContent = `${appState.streak} jour${appState.streak > 1 ? 's' : ''}`;
  document.getElementById('total-words').textContent = stats.total;
  
  // Render category progress for current level
  const categoryListEl = document.getElementById('category-progress-list');
  categoryListEl.innerHTML = '';
  
  const currentLevelCategories = vocabularyData[appState.difficulty] || [];
  
  currentLevelCategories.forEach((categoryData) => {
    const categoryWords = categoryData.words.map(word => ({
      ...word,
      progress: appState.wordProgress[word.id] || { mastery: 0, lastReviewed: null }
    }));
    
    const mastered = categoryWords.filter(w => w.progress.mastery === 100).length;
    const total = categoryWords.length;
    const percentage = total > 0 ? Math.round((mastered / total) * 100) : 0;
    
    const categoryItem = document.createElement('div');
    categoryItem.className = 'category-item';
    categoryItem.innerHTML = `
      <div class="category-item-header">
        <span class="category-name">${categoryData.category}</span>
        <span class="category-count">${mastered}/${total}</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${percentage}%"></div>
      </div>
    `;
    
    categoryListEl.appendChild(categoryItem);
  });
}

// Render Vocabulary
function renderVocabulary() {
  const categoryFilter = document.getElementById('category-filter');
  const masteryFilter = document.getElementById('mastery-filter');
  
  // Repopulate category filter for current level
  categoryFilter.innerHTML = '<option value="all">Toutes les catégories</option>';
  const currentLevelCategories = vocabularyData[appState.difficulty] || [];
  currentLevelCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.category;
    option.textContent = category.category;
    categoryFilter.appendChild(option);
  });
  
  // Get filtered words (ONLY from current difficulty level)
  const filterCategory = categoryFilter.value;
  const filterMastery = masteryFilter.value;
  
  let words = getAllWords(); // Already filtered by current difficulty
  
  console.log(`Filtering vocabulary: Level=${appState.difficulty}, Category=${filterCategory}, Mastery=${filterMastery}`);
  
  if (filterCategory !== 'all') {
    words = words.filter(w => w.category === filterCategory);
  }
  
  if (filterMastery !== 'all') {
    const masteryMap = {'new': 0, 'seen': 25, 'known': 50, 'proficient': 75, 'mastered': 100};
    const targetMastery = masteryMap[filterMastery];
    words = words.filter(w => w.progress.mastery === targetMastery);
  }
  
  console.log(`Found ${words.length} words after filtering`);
  
  // Render vocabulary cards
  const vocabListEl = document.getElementById('vocabulary-list');
  vocabListEl.innerHTML = '';
  
  if (words.length === 0) {
    vocabListEl.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">Aucun mot trouvé pour ces filtres.</p>';
    return;
  }
  
  words.forEach(word => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    
    const exampleHTML = word.example ? `<div class="vocab-example">${word.example}</div>` : '';
    
    card.innerHTML = `
      <div class="vocab-card-header">
        <div class="vocab-german">${word.german}</div>
        <div class="mastery-badge ${getMasteryClass(word.progress.mastery)}">${getMasteryLabel(word.progress.mastery)} (${word.progress.mastery}%)</div>
      </div>
      <div class="vocab-translation">
        <div class="vocab-french">🇫🇷 ${word.french}</div>
        <div class="vocab-english">🇬🇧 ${word.english}</div>
      </div>
      ${exampleHTML}
      <div class="vocab-actions">
        <button class="btn btn--secondary btn--sm" onclick="app.setWordMastery('${word.id}', 25)">Vu (25%)</button>
        <button class="btn btn--secondary btn--sm" onclick="app.setWordMastery('${word.id}', 50)">Connu (50%)</button>
        <button class="btn btn--primary btn--sm" onclick="app.setWordMastery('${word.id}', 100)">Maîtrisé (100%)</button>
      </div>
    `;
    
    vocabListEl.appendChild(card);
  });
}

function setWordMastery(wordId, masteryPercent) {
  updateWordMastery(wordId, masteryPercent);
  renderVocabulary();
  renderDashboard();
}

// Exercise Functions
function renderExerciseMenu() {
  document.getElementById('exercise-menu').style.display = 'grid';
  document.getElementById('exercise-container').style.display = 'none';
  document.getElementById('results-screen').style.display = 'none';
}

function startExercise(type) {
  document.getElementById('exercise-menu').style.display = 'none';
  document.getElementById('results-screen').style.display = 'none';
  document.getElementById('exercise-container').style.display = 'block';
  
  appState.currentExercise = {
    type: type,
    currentQuestion: 0,
    totalQuestions: 10,
    score: 0,
    questions: []
  };
  
  // Generate questions based on type
  if (type === 'multiple-choice') {
    generateMultipleChoiceQuestions();
  } else if (type === 'flashcards') {
    generateFlashcardQuestions();
  } else if (type === 'translation') {
    generateTranslationQuestions();
  } else if (type === 'fill-blank') {
    generateFillBlankQuestions();
  }
  
  showNextQuestion();
}

function generateMultipleChoiceQuestions() {
  const words = getAllWords(); // Already filtered by current level
  console.log(`Generating multiple choice from ${words.length} words at level ${appState.difficulty}`);
  
  if (words.length < 4) {
    alert('Pas assez de mots pour ce niveau!');
    backToExerciseMenu();
    return;
  }
  
  const shuffled = words.sort(() => Math.random() - 0.5).slice(0, Math.min(10, words.length));
  
  appState.currentExercise.questions = shuffled.map(word => {
    const wrongOptions = words
      .filter(w => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.german);
    
    const options = [word.german, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    return {
      question: word.french,
      correctAnswer: word.german,
      options: options,
      wordId: word.id
    };
  });
  
  appState.currentExercise.totalQuestions = appState.currentExercise.questions.length;
}

function generateFlashcardQuestions() {
  const words = getAllWords(); // Already filtered by current level
  console.log(`Generating flashcards from ${words.length} words at level ${appState.difficulty}`);
  
  if (words.length === 0) {
    alert('Pas de mots disponibles pour ce niveau!');
    backToExerciseMenu();
    return;
  }
  
  const count = Math.min(15, words.length);
  const shuffled = words.sort(() => Math.random() - 0.5).slice(0, count);
  appState.currentExercise.totalQuestions = count;
  appState.currentExercise.questions = shuffled.map(word => ({
    german: word.german,
    french: word.french,
    wordId: word.id,
    flipped: false
  }));
}

function generateTranslationQuestions() {
  const levelSentences = practiceSentences[appState.difficulty] || [];
  console.log(`Generating translation from ${levelSentences.length} sentences at level ${appState.difficulty}`);
  
  if (levelSentences.length === 0) {
    alert('Pas de phrases disponibles pour ce niveau!');
    backToExerciseMenu();
    return;
  }
  
  const count = Math.min(8, levelSentences.length);
  const sentences = levelSentences.sort(() => Math.random() - 0.5).slice(0, count);
  appState.currentExercise.totalQuestions = count;
  appState.currentExercise.questions = sentences;
}

function generateFillBlankQuestions() {
  const words = getAllWords(); // Already filtered by current level
  console.log(`Generating fill-in-blank from ${words.length} words at level ${appState.difficulty}`);
  
  if (words.length < 3) {
    alert('Pas assez de mots pour ce niveau!');
    backToExerciseMenu();
    return;
  }
  
  const count = Math.min(10, words.length);
  const shuffled = words.sort(() => Math.random() - 0.5).slice(0, count);
  
  appState.currentExercise.questions = shuffled.map(word => {
    const sentence = word.example || `Das ist ${word.german}`;
    const blankSentence = sentence.replace(word.german, '____');
    
    const wrongOptions = words
      .filter(w => w.id !== word.id && w.category === word.category)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2)
      .map(w => w.german);
    
    const options = [word.german, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    return {
      sentence: blankSentence,
      correctAnswer: word.german,
      options: options,
      wordId: word.id
    };
  });
  
  appState.currentExercise.totalQuestions = appState.currentExercise.questions.length;
}

function showNextQuestion() {
  const exercise = appState.currentExercise;
  const contentEl = document.getElementById('exercise-content');
  
  if (exercise.currentQuestion >= exercise.totalQuestions) {
    showResults();
    return;
  }
  
  // Update progress
  document.getElementById('question-counter').textContent = 
    `Question ${exercise.currentQuestion + 1}/${exercise.totalQuestions}`;
  document.getElementById('exercise-progress-bar').style.width = 
    `${(exercise.currentQuestion / exercise.totalQuestions) * 100}%`;
  
  const question = exercise.questions[exercise.currentQuestion];
  
  if (exercise.type === 'multiple-choice') {
    renderMultipleChoiceQuestion(question, contentEl);
  } else if (exercise.type === 'flashcards') {
    renderFlashcard(question, contentEl);
  } else if (exercise.type === 'translation') {
    renderTranslationQuestion(question, contentEl);
  } else if (exercise.type === 'fill-blank') {
    renderFillBlankQuestion(question, contentEl);
  }
}

function renderMultipleChoiceQuestion(question, container) {
  container.innerHTML = `
    <div class="question-card">
      <div class="question-text">Traduisez: <strong>${question.question}</strong></div>
      <div class="answer-options">
        ${question.options.map((option, index) => 
          `<button class="answer-option" onclick="app.checkMultipleChoice('${option}', '${question.correctAnswer}', ${index})">
            ${option}
          </button>`
        ).join('')}
      </div>
      <div id="feedback"></div>
    </div>
  `;
}

function checkMultipleChoice(selected, correct, optionIndex) {
  const options = document.querySelectorAll('.answer-option');
  const feedbackEl = document.getElementById('feedback');
  
  // Disable all options
  options.forEach(opt => opt.style.pointerEvents = 'none');
  
  const isCorrect = selected === correct;
  
  if (isCorrect) {
    options[optionIndex].classList.add('correct');
    feedbackEl.innerHTML = '<div class="feedback-message correct">✓ Correct!</div>';
    appState.currentExercise.score++;
    
    // Progress word mastery
    const question = appState.currentExercise.questions[appState.currentExercise.currentQuestion];
    if (question.wordId) {
      progressWordMastery(question.wordId);
    }
  } else {
    options[optionIndex].classList.add('incorrect');
    // Show correct answer
    options.forEach((opt, idx) => {
      if (opt.textContent.trim() === correct) {
        opt.classList.add('correct');
      }
    });
    feedbackEl.innerHTML = `<div class="feedback-message incorrect">✗ Incorrect. La bonne réponse est: ${correct}</div>`;
  }
  
  // Show next button
  feedbackEl.innerHTML += '<button class="btn btn--primary next-question-btn" onclick="app.nextQuestion()">Question suivante →</button>';
}

function renderFlashcard(card, container) {
  const isFlipped = card.flipped;
  
  container.innerHTML = `
    <div class="flashcard" onclick="app.flipFlashcard()">
      <div class="flashcard-content">
        <div class="flashcard-label">${isFlipped ? 'Français' : 'Allemand'}</div>
        <div class="flashcard-word">${isFlipped ? card.french : card.german}</div>
        <div class="flashcard-hint">Cliquez pour retourner</div>
      </div>
    </div>
    <div class="flashcard-actions">
      <button class="btn btn--secondary" onclick="app.markFlashcard('practice')">Pratiquer encore</button>
      <button class="btn btn--primary" onclick="app.markFlashcard('mastered')">Je connais</button>
    </div>
  `;
}

function flipFlashcard() {
  const question = appState.currentExercise.questions[appState.currentExercise.currentQuestion];
  question.flipped = !question.flipped;
  showNextQuestion();
}

function markFlashcard(result) {
  const question = appState.currentExercise.questions[appState.currentExercise.currentQuestion];
  
  if (result === 'mastered') {
    appState.currentExercise.score++;
    if (question.wordId) {
      progressWordMastery(question.wordId);
    }
  }
  
  nextQuestion();
}

function renderTranslationQuestion(question, container) {
  container.innerHTML = `
    <div class="question-card">
      <div class="question-text">Traduisez en allemand:</div>
      <div class="question-text"><strong>${question.french}</strong></div>
      <input type="text" class="translation-input" id="translation-input" placeholder="Écrivez votre traduction...">
      <div class="hint-text">Indice: ${question.german.length} caractères</div>
      <button class="btn btn--primary submit-btn" onclick="app.checkTranslation('${question.german}')">Vérifier</button>
      <div id="feedback"></div>
    </div>
  `;
  
  // Focus input
  setTimeout(() => {
    document.getElementById('translation-input').focus();
  }, 100);
}

function checkTranslation(correct) {
  const input = document.getElementById('translation-input');
  const userAnswer = input.value.trim();
  const feedbackEl = document.getElementById('feedback');
  
  input.disabled = true;
  document.querySelector('.submit-btn').style.display = 'none';
  
  // Simple comparison (case-insensitive)
  const isCorrect = userAnswer.toLowerCase() === correct.toLowerCase();
  
  if (isCorrect) {
    feedbackEl.innerHTML = '<div class="feedback-message correct">✓ Parfait!</div>';
    appState.currentExercise.score++;
  } else {
    // Check for partial match
    const similarity = calculateSimilarity(userAnswer.toLowerCase(), correct.toLowerCase());
    if (similarity > 0.7) {
      feedbackEl.innerHTML = `<div class="feedback-message incorrect">Presque! La réponse correcte: <strong>${correct}</strong></div>`;
      appState.currentExercise.score += 0.5;
    } else {
      feedbackEl.innerHTML = `<div class="feedback-message incorrect">✗ Incorrect. La réponse correcte: <strong>${correct}</strong></div>`;
    }
  }
  
  feedbackEl.innerHTML += '<button class="btn btn--primary next-question-btn" onclick="app.nextQuestion()">Question suivante →</button>';
}

function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

function levenshteinDistance(str1, str2) {
  const matrix = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

function renderFillBlankQuestion(question, container) {
  container.innerHTML = `
    <div class="question-card">
      <div class="question-text">Complétez la phrase:</div>
      <div class="question-text"><strong>${question.sentence}</strong></div>
      <div class="answer-options">
        ${question.options.map((option, index) => 
          `<button class="answer-option" onclick="app.checkFillBlank('${option}', '${question.correctAnswer}', ${index})">
            ${option}
          </button>`
        ).join('')}
      </div>
      <div id="feedback"></div>
    </div>
  `;
}

function checkFillBlank(selected, correct, optionIndex) {
  checkMultipleChoice(selected, correct, optionIndex);
}

function nextQuestion() {
  appState.currentExercise.currentQuestion++;
  showNextQuestion();
}

function showResults() {
  document.getElementById('exercise-container').style.display = 'none';
  document.getElementById('results-screen').style.display = 'block';
  
  const score = Math.round(appState.currentExercise.score);
  const total = appState.currentExercise.totalQuestions;
  const percentage = Math.round((score / total) * 100);
  
  let title = 'Bien joué!';
  if (percentage >= 90) title = 'Excellent travail! 🌟';
  else if (percentage >= 70) title = 'Très bien! 👍';
  else if (percentage >= 50) title = 'Bon effort! 💪';
  
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-score').textContent = score;
  document.getElementById('correct-count').textContent = score;
  document.getElementById('incorrect-count').textContent = total - score;
  
  // Update streak
  updateStreak();
  
  // Save to exercise history
  appState.exerciseHistory.push({
    type: appState.currentExercise.type,
    score: score,
    total: total,
    date: new Date()
  });
}

function retryExercise() {
  const type = appState.currentExercise.type;
  startExercise(type);
}

function backToExerciseMenu() {
  renderExerciseMenu();
}

// Settings
function renderSettings() {
  // Set current values
  const difficultyRadio = document.querySelector(`input[name="difficulty"][value="${appState.difficulty}"]`);
  if (difficultyRadio) difficultyRadio.checked = true;
  
  const sessionRadio = document.querySelector(`input[name="session-length"][value="${appState.sessionLength}"]`);
  if (sessionRadio) sessionRadio.checked = true;
}

function changeDifficulty(newLevel) {
  console.log(`Changing difficulty from ${appState.difficulty} to ${newLevel}`);
  appState.difficulty = newLevel;
  
  // Refresh all views
  renderDashboard();
  
  // Show feedback
  showAchievement(`Niveau changé en ${newLevel}!`);
}

function resetProgress() {
  if (confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression? Cette action est irréversible.')) {
    appState.wordProgress = {};
    appState.streak = 0;
    appState.exerciseHistory = [];
    initializeWordProgress();
    renderDashboard();
    showAchievement('Progression réinitialisée');
  }
}

// Event Listeners
function initializeEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo(btn.dataset.view);
    });
  });
  
  // Exercise type cards
  document.querySelectorAll('.exercise-type-card button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const type = e.target.closest('.exercise-type-card').dataset.type;
      startExercise(type);
    });
  });
  
  // Back to menu
  document.getElementById('back-to-menu').addEventListener('click', backToExerciseMenu);
  document.getElementById('back-to-menu-results').addEventListener('click', backToExerciseMenu);
  document.getElementById('retry-exercise').addEventListener('click', retryExercise);
  
  // Vocabulary filters
  document.getElementById('category-filter').addEventListener('change', renderVocabulary);
  document.getElementById('mastery-filter').addEventListener('change', renderVocabulary);
  
  // Settings - Difficulty change with immediate effect
  document.querySelectorAll('input[name="difficulty"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      changeDifficulty(e.target.value);
    });
  });
  
  document.querySelectorAll('input[name="session-length"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.sessionLength = e.target.value;
    });
  });
  
  document.getElementById('reset-progress').addEventListener('click', resetProgress);
}

// Initialize app
function initializeApp() {
  initializeWordProgress();
  updateStreak();
  initializeEventListeners();
  renderDashboard();
}

// Global app object for inline event handlers
window.app = {
  navigateTo,
  setWordMastery,
  checkMultipleChoice,
  checkTranslation,
  checkFillBlank,
  nextQuestion,
  flipFlashcard,
  markFlashcard
};

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}