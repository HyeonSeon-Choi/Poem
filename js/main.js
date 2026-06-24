/* =========================================================
   다정한 침입 — 최현선 시집  ·  main.js
   옥스블러드 양장 3D 플립북 + 시별 커스텀 일러스트 + 라인 마스크 등장
   앞·뒤표지 동일 클로스로 봉인 · 면지(endpaper) 2장 · 가름끈
   ========================================================= */
(function () {
  "use strict";

  /* ------------------------------------------------------ data */
  const META = { title: "다정한 침입", sub: "속수무책의 성실", by: "최현선" };

  const POEMS = [
    { key: "stain", title: "선명한 얼룩",
      body: "일과 속에 너를 묻으려\n분주히 몸을 놀렸건만,\n\n이상하게도 치열했던 나의 시간마다\n성실히 생을 일궈가던\n\n네 뒷모습이\n선명한 얼룩처럼 번져왔다." },
    { key: "galaxy", title: "관측할 수 없는 밤",
      body: "나의 사랑은\n쏟아지는 은하수 같아서,\n\n고독이 칠흑처럼 깊어질수록\n내 마음 속 가장 깊은 곳에서\n\n속수무책으로\n반짝이고 만다." },
    { key: "gravity", title: "종이 위의 중력",
      body: "무심코 책장을 넘기는데\n마른 종이 냄새 사이로\n스며든 너의 체취가,\n\n문장 끝에 걸린\n마침표보다 더 길게\n\n내 발등 위로\n툭, 떨어졌다." },
    { key: "delay", title: "연착 (延着)",
      body: "사랑인 줄 몰랐던 게 아니라\n사랑이 아닌 줄 알았던 시간이\n너무 길었을 뿐이다.\n\n내 진심은 항상 한 계절씩 늦어\n네가 머물던 자리마다\n이미 시든 꽃잎들만 가득하다.\n\n이제야 내뱉는 고백은\n누구에게도 닿지 못하는\n이기적인 메아리.\n\n너라는 문장이 마침표를 찍고 나서야\n나는 비로소\n첫 문장을 읽기 시작했다." },
    { key: "comma", title: "마침표 뒤의 쉼표",
      body: "마침표는 이미 오래전에 찍혔으나\n나의 몸은 여전히 쉼표를 찍으며 걷는다.\n\n분명 너라는 문장은 끝이 났는데,\n내 하루의 여백 위로\n무심코 너의 흔적이 번져온다.\n\n함께 걷던 보폭에 맞추어\n느릿하게 발을 떼는 일이나,\n네가 좋아하던 창가 자리를\n나도 모르게 비워둔 채 앉는 일.\n\n이별은 이미 완성되었는데\n몸에 밴 너라는 다정한 버릇들은\n오늘도 나를 데리고\n우리의 계절로 돌아가려 한다." },
    { key: "season", title: "계절의 까닭",
      body: "세상이 기어이 모든 잎을 떨구고\n차가운 겨울을 부르는 까닭은,\n모든 것이 얼어붙은 삭막함 속에서만\n네가 남겼던 온기가 비로소 선명해지기 때문이고.\n\n다시 얼음이 녹고\n어김없이 봄이 찾아오는 까닭은,\n네가 머물다 간 나의 메마른 여백 위로\n기어코 돋아나는 너라는 습관들을\n차마 다 숨길 수 없었기 때문이다.\n\n피고 지는 일에 무던해지려 했건만,\n결국 나에게 돌고 도는 모든 계절의 이유는\n끝내 시들지 않는 너라는 기억을\n오래도록, 기꺼이 앓기 위함이었다." },
    { key: "lily", title: "은방울꽃",
      body: "틀림없이 행복해진다니,\n그토록 잔인한 꽃말을\n너는 왜 하필\n그토록 흰 얼굴로 피웠을까.\n\n희고 낮은 종들이\n바람도 없이 고개를 숙인 밤,\n\n나는 알았다.\n\n다정한 것들은 때때로\n제 안에 가장 깊은 독을\n아무렇지 않게 품는다는 걸." },
  ];
  const POEM_COUNT = POEMS.length;

  /* ------------------------------------------------------ illustrations (hand-drawn SVG) */
  const svg = (vb, inner) =>
    '<svg viewBox="' + vb + '" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' + inner + "</svg>";
  const dot = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="currentColor" stroke="none"/>';

  const ILLUS = {
    /* 시별 정서 accent hue — 겨울(차가운)→봄(따뜻한) */
    /* 선명한 얼룩 — 번지는 잉크 자국 */
    stain: () => svg("0 0 280 150",
      '<ellipse cx="140" cy="80" rx="44" ry="32" fill="currentColor" stroke="none" opacity="0.10"/>' +
      '<path d="M104 72 C100 50 130 40 152 49 C177 59 184 82 173 100 C162 118 124 118 109 103 C98 92 99 84 104 72 Z" opacity="0.85"/>' +
      '<ellipse cx="140" cy="80" rx="62" ry="46" opacity="0.16"/>' +
      dot(198, 56, 3.2) + dot(92, 112, 2.4) + dot(188, 106, 2) +
      '<path d="M152 49 C153 38 150 30 144 24" opacity="0.5"/>'),
    /* 관측할 수 없는 밤 — 은하수와 별 */
    galaxy: () => svg("0 0 280 150",
      '<path d="M150 80 C150 67 167 67 169 82 C171 101 141 103 137 81 C132 53 175 51 179 86"/>' +
      dot(153, 80, 2.6) + dot(80, 48, 1.7) + dot(212, 46, 1.5) + dot(96, 108, 1.9) +
      dot(202, 112, 1.6) + dot(58, 82, 1.3) + dot(228, 86, 1.4) +
      '<path d="M112 34 v9 M107.5 38.5 h9" opacity="0.7"/>' +
      '<path d="M188 120 v9 M183.5 124.5 h9" opacity="0.7"/>'),
    /* 종이 위의 중력 — 떨어지는 꽃잎과 마침표 */
    gravity: () => svg("0 0 280 150",
      '<line x1="52" y1="122" x2="228" y2="122"/>' +
      '<path d="M150 26 Q118 74 132 114" stroke-dasharray="1.5 7" opacity="0.7"/>' +
      '<path d="M150 26 C159 20 169 25 166 35 C163 45 151 46 147 38 C145 32 146 28 150 26 Z" opacity="0.85"/>' +
      dot(132, 118, 3.4) +
      '<path d="M116 122 q16 -9 32 0" opacity="0.4"/>'),
    /* 연착 — 시든 꽃 */
    delay: () => svg("0 0 280 150",
      '<line x1="118" y1="126" x2="172" y2="126"/>' +
      '<path d="M146 126 C146 98 152 80 132 67"/>' +
      '<ellipse cx="125" cy="60" rx="14" ry="8.5" transform="rotate(-30 125 60)" opacity="0.85"/>' +
      '<path d="M132 67 l-5 -6" opacity="0.55"/>' +
      '<path d="M176 90 c6 -4 12 0 9 7 c-3 6 -12 4 -11 -3 z" opacity="0.6"/>' +
      '<path d="M192 108 c6 -4 12 0 9 7 c-3 6 -12 4 -11 -3 z" opacity="0.45"/>'),
    /* 마침표 뒤의 쉼표 — 문장부호 */
    comma: () => svg("0 0 280 150",
      dot(116, 86, 8.5) + dot(170, 76, 8.5) +
      '<path d="M170 84.5 C172 97 165 105 155 108"/>' +
      '<path d="M128 86 H158" stroke-dasharray="1.5 7" opacity="0.55"/>'),
    /* 계절의 까닭 — 잎이 지는 가지 */
    season: () => svg("0 0 280 150",
      '<path d="M44 62 C104 54 152 72 234 56"/>' +
      '<path d="M94 60 c5 -11 16 -11 19 -3 c-7 5 -15 5 -19 3 z" opacity="0.85"/>' +
      '<path d="M150 67 c8 -8 18 -3 16 5 c-8 2 -13 -1 -16 -5 z" opacity="0.85"/>' +
      '<path d="M198 58 c5 -11 16 -11 19 -3 c-7 5 -15 5 -19 3 z" opacity="0.8"/>' +
      '<path d="M118 104 c7 -10 18 -4 15 5 c-8 3 -13 0 -15 -5 z" opacity="0.55"/>' +
      '<path d="M166 118 c7 -10 18 -4 15 5 c-8 3 -13 0 -15 -5 z" opacity="0.4"/>' +
      '<path d="M120 88 q3 9 0 15" stroke-dasharray="1.5 6" opacity="0.4"/>'),
    /* 은방울꽃 — 고개 숙인 흰 종 모양 꽃 */
    lily: () => svg("0 0 280 150",
      '<path d="M118 134 C90 104 98 54 126 40 C132 74 131 108 118 134 Z" opacity="0.4"/>' +
      '<path d="M146 134 C146 100 157 60 126 42"/>' +
      '<path d="M143 107 q7 2 11 8" opacity="0.8"/>' +
      '<ellipse cx="156" cy="120" rx="6.5" ry="6" opacity="0.9"/>' +
      '<path d="M150.5 123 q5.5 4 11 0" opacity="0.65"/>' +
      '<path d="M141 90 q7 1 11 6" opacity="0.8"/>' +
      '<ellipse cx="154" cy="102" rx="5.6" ry="5.2" opacity="0.9"/>' +
      '<path d="M149 105 q5 3.5 10 0" opacity="0.65"/>' +
      '<path d="M138 74 q6 0 10 5" opacity="0.8"/>' +
      '<ellipse cx="150" cy="85" rx="4.6" ry="4.3" opacity="0.88"/>' +
      '<ellipse cx="144" cy="66" rx="3.6" ry="3.4" opacity="0.82"/>' +
      '<ellipse cx="138" cy="54" rx="2.8" ry="2.6" opacity="0.75"/>' +
      dot(174, 100, 1.5) + dot(108, 64, 1.4)),
    /* 표지용 은방울꽃 — 부드럽게 채운 흰 종 + 와인 윤곽 + 연한 잎 (다색) */
    coverArt: () =>
      '<svg viewBox="-6 4 200 200" fill="none" stroke="#9a554c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M90 190 C58 152 64 82 100 60 C108 104 104 156 90 190 Z" fill="#cfd4bd" fill-opacity="0.5" stroke="#94a07a" stroke-width="1.2"/>' +
      '<path d="M106 192 C106 148 120 92 90 62"/>' +
      '<path d="M106 160 q9 2 13 9"/>' +
      '<ellipse cx="123" cy="178" rx="9" ry="8" fill="#fbf4ea"/>' +
      '<path d="M114.5 181 q8.5 6 17 0"/>' +
      '<path d="M108 138 q9 1 13 8"/>' +
      '<ellipse cx="124" cy="155" rx="7.6" ry="6.9" fill="#fbf4ea"/>' +
      '<path d="M117 158 q7 5 14 0"/>' +
      '<path d="M109 116 q8 0 12 6"/>' +
      '<ellipse cx="122" cy="131" rx="6.4" ry="5.9" fill="#fbf4ea"/>' +
      '<path d="M116.5 134 q5.5 4 11 0"/>' +
      '<path d="M107 97 q7 0 10 5"/>' +
      '<ellipse cx="118" cy="110" rx="5.3" ry="4.9" fill="#fbf4ea"/>' +
      '<path d="M101 81 q6 0 8 4"/>' +
      '<ellipse cx="111" cy="92" rx="4.3" ry="4" fill="#fbf4ea"/>' +
      '<ellipse cx="103" cy="74" rx="3.4" ry="3.2" fill="#fbf4ea"/>' +
      "</svg>",
    /* 표지/히어로 — 스며드는 선과 얼룩 */
    hero: () => svg("0 0 320 320",
      '<path d="M36 70 C120 90 92 158 162 168 C232 178 206 244 286 262" opacity="0.85"/>' +
      '<ellipse cx="162" cy="168" rx="42" ry="32" fill="currentColor" stroke="none" opacity="0.08"/>' +
      '<ellipse cx="162" cy="168" rx="64" ry="50" opacity="0.16"/>' +
      '<ellipse cx="162" cy="168" rx="90" ry="70" opacity="0.09"/>' +
      dot(162, 168, 3.2) + dot(36, 70, 2.6) + dot(286, 262, 2.6)),
    /* 뒤표지 박 엠블럼 — 작은 별 한 점 (제목 반복 대신) */
    emblem: () => svg("0 0 48 48",
      '<path d="M24 8 L26.6 20.4 L38 24 L26.6 27.6 L24 40 L21.4 27.6 L10 24 L21.4 20.4 Z" opacity="0.9"/>' +
      dot(24, 24, 1.6)),
  };

  /* ------------------------------------------------------ utils */
  const $ = (s, r) => (r || document).querySelector(s);
  const clamp = (lo, hi, n) => Math.max(lo, Math.min(hi, n));
  const pad2 = (n) => String(n).padStart(2, "0");
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stanzas = (body) => body.split(/\n\s*\n/).map((st) =>
    '<p class="st">' + st.split("\n").map((l) => esc(l.trim())).join("<br>") + "</p>").join("");

  /* ------------------------------------------------------ state / dom */
  let leaves = [], total = 0, current = 0, animating = false;
  const bookEl = $("#book-el"), stage = $("#stage");
  const prevBtn = $("#prevBtn"), nextBtn = $("#nextBtn"), indicator = $("#indicator"), indexList = $("#indexList");
  const ribbon = $("#ribbon");

  /* ------------------------------------------------------ page templates */
  const folioEl = (f) => '<p class="pg-no">' + (f || "") + "</p>";

  const coverFront = () =>
    '<p class="cover__no">詩集</p>' +
    '<div class="ill cover__ill">' + ILLUS.coverArt() + "</div>" +
    '<h2 class="cover__title">' + esc(META.title) + "</h2>" +
    '<span class="cover__rule"></span>' +
    '<p class="cover__sub">' + esc(META.sub) + "</p>" +
    '<p class="cover__by">' + esc(META.by) + "</p>";

  /* 뒤표지 — 앞표지와 동일한 클로스, 제목/지은이 반복 금지. 박 시구 한 줄 + No.01 */
  const backCoverFront = () =>
    '<div class="ill backcover__emblem">' + ILLUS.coverArt() + "</div>" +
    '<p class="backcover__line">오래도록, 기꺼이<br>앓기 위함이었다.</p>';

  const titleFront = () =>
    '<div class="pg-body titlepage">' +
      '<div class="ill titlepage__ill">' + ILLUS.lily() + "</div>" +
      '<h2 class="titlepage__title">' + esc(META.title) + "</h2>" +
      '<span class="titlepage__rule"></span>' +
      '<p class="titlepage__sub">' + esc(META.sub) + "</p>" +
      '<p class="titlepage__by">지은이 · ' + esc(META.by) + "</p>" +
    "</div>";

  function contentsFront(list) {
    let rows = "";
    list.forEach((p) => {
      rows += '<li class="toc__item" data-leaf="' + p.leafIndex + '">' +
        '<span class="toc__num">' + p.numeral + "</span>" +
        '<span class="toc__name">' + esc(p.title) + "</span>" +
        '<span class="toc__dots"></span>' +
        '<span class="toc__pg">' + p.folio + "</span></li>";
    });
    return '<div class="pg-body"><h3 class="toc__title">목차</h3><ol class="toc__list">' + rows + "</ol></div>" + folioEl("");
  }

  /* 시별 정서 accent — 겨울(차가운 자주)→봄(따뜻한 테라코타)으로의 미세 hue 변주 */
  const ACCENT = {
    stain:   "#7d4a52",  /* 얼룩 — 차분한 자줏빛 */
    galaxy:  "#5f5277",  /* 은하수 — 차가운 인디고-플럼 */
    gravity: "#8a4a47",  /* 중력 — 중립 옥스블러드 */
    delay:   "#94504a",  /* 연착 — 시든 로즈 */
    comma:   "#9a5547",  /* 쉼표 — 따뜻한 적갈 */
    season:  "#a85f44",  /* 계절 — 가장 따뜻한 테라코타(봄) */
  };

  const poemFront = (p) =>
    '<div class="pg-body"><div class="poem">' +
      '<div class="ill"' + (ACCENT[p.key] ? ' style="color:' + ACCENT[p.key] + '"' : "") + ">" + (ILLUS[p.key] ? ILLUS[p.key]() : "") + "</div>" +
      '<div class="poem__head">' +
        '<h3 class="poem__title">' + esc(p.title) + "</h3>" +
      "</div>" +
      '<div class="poem__body">' + stanzas(p.body) + "</div>" +
    "</div></div>" + folioEl(p.folio);

  const versoBack = () => '<div class="pg-body verso"></div>';

  /* ------------------------------------------------------ build */
  function build() {
    const poems = POEMS.map((p, i) => ({ key: p.key, title: p.title, body: p.body, numeral: pad2(i + 1) }));
    const pages = [];
    /* 양장 시퀀스: 표지 → 앞면지 → 속표지 → 목차 → 시6 → 뒷면지 → 뒤표지 */
    pages.push({ type: "cover",     label: "표지" });
    pages.push({ type: "endpaper",  label: "면지" });
    pages.push({ type: "title",     label: "속표지" });
    pages.push({ type: "contents",  label: "목차" });
    poems.forEach((p) => pages.push({ type: "poem", label: p.title, poem: p }));
    pages.push({ type: "endpaper",  label: "면지" });
    pages.push({ type: "backcover", label: "뒤표지" });

    /* folio: 표지/뒤표지/면지는 쪽수 없음 */
    let f = 0;
    pages.forEach((pg, i) => {
      pg.leafIndex = i;
      const noFolio = pg.type === "cover" || pg.type === "backcover" || pg.type === "endpaper";
      pg.folio = noFolio ? "" : ++f;
      if (pg.type === "poem") { pg.poem.folio = pg.folio; pg.poem.leafIndex = i; }
    });
    total = pages.length;

    leaves = [];
    const tocList = poems.map((p) => ({ key: p.key, numeral: p.numeral, title: p.title, folio: p.folio, leafIndex: p.leafIndex }));

    pages.forEach((pg) => {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      const front = document.createElement("div");
      let faceMod = "";
      if (pg.type === "cover" || pg.type === "backcover") faceMod = " leaf__face--cover";
      else if (pg.type === "endpaper") faceMod = " leaf__face--endpaper";
      front.className = "leaf__face leaf__face--front" + faceMod;
      if (pg.type === "cover") front.innerHTML = coverFront();
      /* 뒤표지 leaf: 닫힘 시 정면을 향하는 건 BACK face이므로 front는 빈 클로스로 둠 */
      else if (pg.type === "backcover") front.innerHTML = "";
      /* 면지(endpaper): 실제 양장 면지처럼 무지 패턴지(CSS) — 중앙 마크 제거 */
      else if (pg.type === "endpaper") front.innerHTML = "";
      else if (pg.type === "title") front.innerHTML = titleFront();
      else if (pg.type === "contents") front.innerHTML = contentsFront(tocList);
      else if (pg.type === "poem") front.innerHTML = poemFront(pg.poem);

      const back = document.createElement("div");
      /* 뒤표지/면지 leaf의 뒷면은 클로스/rust로, 그 외는 종이 verso */
      let backMod = "";
      if (pg.type === "backcover" || pg.type === "cover") backMod = " leaf__face--cover";
      else if (pg.type === "endpaper") backMod = " leaf__face--endpaper";
      back.className = "leaf__face leaf__face--back" + backMod;
      /* 책을 끝까지 넘기면 backcover leaf가 flip되어 BACK face가 viewer를 향한다.
         → emblem+박 시구를 BACK face에 렌더해 진짜 양장 뒤표지로 닫히게 함 */
      if (pg.type === "backcover") back.innerHTML = backCoverFront();
      else if (pg.type === "endpaper") back.innerHTML = "";
      else back.innerHTML = (backMod ? "" : versoBack());

      leaf.appendChild(front); leaf.appendChild(back);
      bookEl.appendChild(leaf);
      leaves.push({ el: leaf, label: pg.label, folio: pg.folio });
    });

    buildIndex(tocList);
    layout();
  }

  function buildIndex(list) {
    indexList.innerHTML = "";
    list.forEach((p) => {
      const li = document.createElement("li");
      li.className = "index-list__item";
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");
      li.setAttribute("aria-label", p.title + " — " + p.folio + "쪽 펼치기");
      li.innerHTML =
        '<span class="index-list__num">' + p.numeral + "</span>" +
        '<span class="index-list__ill ill" aria-hidden="true"' + (ACCENT[p.key] ? ' style="--ill:' + ACCENT[p.key] + '"' : "") + ">" + (ILLUS[p.key] ? ILLUS[p.key]() : "") + "</span>" +
        '<span class="index-list__name">' + esc(p.title) + "</span>" +
        '<span class="index-list__dots"></span>' +
        '<span class="index-list__pg">' + p.folio + "쪽</span>";
      const act = () => jumpTo(p.leafIndex, true);
      li.addEventListener("click", act);
      li.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); }
      });
      indexList.appendChild(li);
    });
  }

  /* ------------------------------------------------------ flip */
  function layout() {
    leaves.forEach((lf, i) => {
      const flipped = i < current;
      lf.el.classList.toggle("is-flipped", flipped);
      lf.el.style.zIndex = flipped ? i : total - i;
    });
    bookEl.classList.toggle("is-closed", current === 0);
    bookEl.classList.toggle("is-end", current === total);
    placeRibbon();
    updateControls();
  }

  /* 가름끈은 책등에 고정 — 위치/표시는 CSS가 담당(넘길 때 좌우로 흔들리지 않음) */
  function placeRibbon() {}

  function updateControls() {
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total;
    let txt;
    if (current === 0) txt = '<span class="ind__label">표지</span>';
    else if (current === total) txt = '<span class="ind__label">뒤표지</span>';
    else { const lf = leaves[current]; txt = '<span class="ind__label">' + esc(lf.label) + "</span>" + (lf.folio ? '<span class="ind__pg">' + lf.folio + "쪽</span>" : ""); }
    /* 동일 상태 중복 낭독 방지 (aria-live) */
    if (indicator.dataset.last === txt) return;
    indicator.dataset.last = txt;
    indicator.innerHTML = txt;
  }
  function go(dir) {
    if (animating) return;
    let moved = null;
    if (dir > 0 && current < total) { moved = leaves[current]; current += 1; }
    else if (dir < 0 && current > 0) { current -= 1; moved = leaves[current]; }
    else return;
    layout();
    if (moved) {
      moved.el.style.zIndex = 999;
      moved.el.classList.add("is-turning");
      animating = true;
      const done = () => { moved.el.removeEventListener("transitionend", done); moved.el.classList.remove("is-turning"); animating = false; layout(); };
      moved.el.addEventListener("transitionend", done);
      setTimeout(() => { if (animating) done(); }, 1250);
    }
  }
  function jumpTo(leafIndex, scroll) {
    bookEl.classList.add("no-anim");
    current = clamp(0, total, leafIndex);
    layout();
    void bookEl.offsetWidth;
    requestAnimationFrame(() => bookEl.classList.remove("no-anim"));
    if (scroll) $("#book").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ------------------------------------------------------ interactions */
  bookEl.addEventListener("click", (e) => {
    const item = e.target.closest(".toc__item");
    if (item) { jumpTo(parseInt(item.dataset.leaf, 10), false); return; }
    const rect = bookEl.getBoundingClientRect();
    const rel = (e.clientX - rect.left) / rect.width;
    go(rel < (window.matchMedia("(max-width: 760px)").matches ? 0.34 : 0.5) ? -1 : 1);
  });
  document.addEventListener("keydown", (e) => {
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    /* ←/→ 만 플립에 사용. 위/아래는 페이지 스크롤로 남겨둠(접근성) */
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    /* 책이 화면 밖이면 좌우키도 무시해 다른 섹션에서의 의도치 않은 플립 방지 */
    const r = stage.getBoundingClientRect();
    if (r.bottom < 80 || r.top > window.innerHeight - 80) return;
    go(e.key === "ArrowRight" ? 1 : -1);
  });
  let sx = 0, sy = 0;
  stage.addEventListener("touchstart", (e) => { sx = e.changedTouches[0].clientX; sy = e.changedTouches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    /* 세로 스크롤 제스처와의 오인 방지: 수평 우위를 더 엄격히 */
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
  }, { passive: true });
  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));
  const openCta = $("[data-open-book]");
  if (openCta) openCta.addEventListener("click", () => { setTimeout(() => { if (current === 0) go(1); }, 720); });

  /* ------------------------------------------------------ chrome */
  const nav = $("#nav"), progress = $("#progress");
  const parEls = Array.prototype.slice.call(document.querySelectorAll("[data-par]"));
  let parTick = false;
  function parallax() {
    if (window.innerWidth <= 860) { parTick = false; return; }
    const y = window.scrollY;
    if (y < window.innerHeight * 1.5) parEls.forEach((el) => {
      el.style.transform = "translateY(calc(-50% + " + (y * parseFloat(el.dataset.par)).toFixed(1) + "px))";
    });
    parTick = false;
  }
  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    nav.classList.toggle("is-scrolled", y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    if (!reduceMotion && !parTick) { parTick = true; requestAnimationFrame(parallax); }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal, .reveal-lines").forEach((el) => { if (!el.closest(".hero") && !el.closest(".preloader")) io.observe(el); });

  const navToggle = $("#navToggle"), navLinks = $(".nav__links");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { navLinks.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }));

  /* ------------------------------------------------------ preloader + hero reveal */
  const pre = $("#preloader");
  function revealHero() {
    const h = $(".hero"); if (h) h.classList.add("is-in");
    document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("is-visible"));
  }
  let done = false;
  function hidePre() { if (done) return; done = true; pre.classList.add("is-hidden"); setTimeout(revealHero, 220); }
  window.addEventListener("load", () => setTimeout(hidePre, reduceMotion ? 0 : 600));
  setTimeout(hidePre, reduceMotion ? 400 : 2000);

  /* ------------------------------------------------------ fit each poem to its page (no scroll) */
  function fitPoems() {
    bookEl.querySelectorAll(".poem__body").forEach((el) => {
      el.style.fontSize = "";
      el.style.lineHeight = "";
      let fs = parseFloat(getComputedStyle(el).fontSize);
      let g = 0;
      /* 1차: 폰트 축소 (하한 11.5px) */
      while (el.scrollHeight > el.clientHeight + 1 && fs > 11.5 && g < 80) { fs -= 0.5; el.style.fontSize = fs + "px"; g++; }
      /* 2차: 그래도 넘치면 행간을 2.0→1.7까지 축소 (Gowun Batang 가독성 하한 1.7) */
      if (el.scrollHeight > el.clientHeight + 1) {
        let lh = 2.0, g2 = 0;
        while (el.scrollHeight > el.clientHeight + 1 && lh > 1.7 && g2 < 12) { lh -= 0.05; el.style.lineHeight = lh.toFixed(2); g2++; }
      }
    });
  }
  let rT;
  window.addEventListener("resize", () => { clearTimeout(rT); rT = setTimeout(fitPoems, 220); });

  /* ------------------------------------------------------ go */
  const heroArt = $("#heroArt");
  if (heroArt) heroArt.innerHTML = ILLUS.hero();
  build();
  requestAnimationFrame(fitPoems);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(fitPoems));
  window.addEventListener("load", fitPoems);

  /* -------- deep-link / screenshot hook: #shot, #shotleafN -------- */
  (function () {
    const h = (location.hash || "").toLowerCase();
    if (h.indexOf("shot") < 0) return;
    const st = document.createElement("style");
    st.textContent = ".hero{min-height:660px!important}";
    document.head.appendChild(st);
    if (pre) pre.classList.add("is-hidden");
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.add("is-in");
    document.querySelectorAll(".reveal, .reveal-lines").forEach((el) => el.classList.add("is-visible"));
    const m = h.match(/leaf(\d+)/);
    if (m) { jumpTo(parseInt(m[1], 10), false); setTimeout(() => { const b = document.getElementById("book"); if (b) b.scrollIntoView({ block: "center" }); }, 80); }
    requestAnimationFrame(fitPoems);
  })();
})();
