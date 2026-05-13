import React, { useState } from "react";

const session = {
  client: "Мария Орлова",
  coach: "Наталья Космачёва",
  date: "11 мая 2026",
  documentName: "Личная стратегическая сессия",
  subtitle: "",
};

const sections = [
  {
    id: "01",
    number: "1",
    title: "Вход в СС",
    items: [
      { question: "Что сейчас важное в жизни / где фокус внимания?", answer: "Ответ клиента" },
      { question: "С каким состоянием входишь в сессию?", answer: "Ответ клиента" },
      { question: "Какой результат сессии будет ценным?", answer: "Ответ клиента" },
    ],
  },
  {
    id: "02",
    number: "2",
    title: "Ретро",
    items: [
      { question: "Какие важные события были в прошедшем году?", answer: "Ответ клиента" },
      { question: "Что не получилось?", answer: "Ответ клиента" },
      { question: "Что получилось?", answer: "Ответ клиента" },
      { question: "Где был подъём энергии?", answer: "Ответ клиента" },
      { question: "Какой главный вывод года?", answer: "Ответ клиента" },
    ],
  },
  {
    id: "03",
    number: "3",
    title: "Настоящее / точка А",
    items: [
      { question: "Как сейчас выглядит образ и окружение?", answer: "Ответ клиента" },
      { question: "Какая сейчас деятельность?", answer: "Ответ клиента" },
      { question: "Какие навыки и способности уже есть?", answer: "Ответ клиента" },
      { question: "Где есть неудовлетворённость?", answer: "Ответ клиента" },
      { question: "Какие убеждения и ценности сейчас важны?", answer: "Ответ клиента" },
      { question: "Какая сейчас идентичность?", answer: "Ответ клиента" },
      { question: "Как формулируется миссия?", answer: "Ответ клиента" },
    ],
  },
  {
    id: "04",
    number: "4",
    title: "Видение будущего через 10 лет",
    items: [
      { question: "Как выглядит образ и окружение через 10 лет?", answer: "Ответ клиента" },
      { question: "Какая деятельность в этом будущем?", answer: "Ответ клиента" },
      { question: "Чем это отличается от настоящего?", answer: "Ответ клиента" },
      { question: "Какова цена бездействия?", answer: "Ответ клиента" },
      { question: "Какие барьеры видишь?", answer: "Ответ клиента" },
      { question: "Что даёт мотивацию идти туда?", answer: "Ответ клиента" },
      { question: "Какие этапы пути видишь?", answer: "Ответ клиента" },
    ],
  },
  {
    id: "05",
    number: "5",
    title: "Видение через 3/5 лет",
    items: [
      { question: "Как выглядит образ и окружение через 3/5 лет?", answer: "Ответ клиента" },
      { question: "Какая деятельность в этом периоде?", answer: "Ответ клиента" },
      { question: "Какие маршруты стоит исследовать?", answer: "Ответ клиента" },
      { question: "Какие главные цели появляются?", answer: "Ответ клиента" },
    ],
  },
  {
    id: "06",
    number: "6",
    title: "Видение на год",
    items: [
      { question: "Как выглядит образ и окружение на горизонте года?", answer: "Ответ клиента" },
      { question: "Какие главные цели на год?", answer: "Ответ клиента" },
      { question: "Какие сомнения есть?", answer: "Ответ клиента" },
      { question: "Какие опоры и поддержка уже есть?", answer: "Ответ клиента" },
    ],
  },
  {
    id: "07",
    number: "7",
    title: "Три месяца / квартал",
    items: [
      { question: "Какие цели на квартал?", answer: "Ответ клиента" },
      { question: "Какая карта гипотез?", answer: "Ответ клиента" },
      { question: "Какой результат нужен к 4-й и 8-й неделе?", answer: "Ответ клиента" },
      { question: "Какие регулярные рутинные действия важны?", answer: "Ответ клиента" },
      { question: "Какие ключевые действия нужно сделать?", answer: "Ответ клиента" },
      { question: "Какая награда за достижение?", answer: "Ответ клиента" },
      { question: "Кто или что поддержит на этом пути?", answer: "Ответ клиента" },
    ],
  },
  {
    id: "08",
    number: "8",
    title: "Финал",
    items: [
      { question: "Что было ценным в стратегической сессии?", answer: "Ответ клиента" },
      { question: "Какое состояние после сессии?", answer: "Ответ клиента" },
      { question: "Какая метафора описывает итог?", answer: "Ответ клиента" },
      { question: "Какое запускающее действие?", answer: "Ответ клиента" },
    ],
  },
];

function ChevronIcon({ open }) {
  return (
    <svg className={open ? "chevron chevronOpen" : "chevron"} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg className="sparkIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M19 15l.8 2.7L22 18.5l-2.2.8L19 22l-.8-2.7-2.2-.8 2.2-.8L19 15z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="lockIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AnswerBlock({ sectionNumber, question, answer, index }) {
  return (
    <div className="answerCard">
      <div className="answerGlow" />
      <div className="answerInner">
        <div className="answerNumber">{sectionNumber}.{index + 1}</div>
        <div className="answerContent">
          <h3>{question}</h3>
          <div className="thinLine" />
          <div className="clientAnswer">{answer}</div>
        </div>
      </div>
    </div>
  );
}

function Section({ section, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="section" id={`section-${section.id}`}>
      <button className="sectionHead" type="button" onClick={() => setOpen(!open)}>
        <div className="sectionHeadGlass" />
        <div className="sectionHeadContent">
          <div className="sectionNumber">{section.id}</div>
          <div className="sectionTitleWrap">
            <h2>{section.title}</h2>
          </div>
          <div className="chevronBox">
            <ChevronIcon open={open} />
          </div>
        </div>
      </button>

      <div className={open ? "sectionBody open" : "sectionBody"}>
        <div className="sectionBodyInner">
          {section.items.map((item, index) => (
            <AnswerBlock key={item.question} sectionNumber={section.number} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <main className="page">
      <style>{css}</style>

      <div className="background" aria-hidden="true">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
        <div className="grid" />
      </div>

      <article className="documentShell">
        <div className="shellGlass" />
        <div className="documentContent">
          <header className="topLine">
            <span>личная стратегическая сессия</span>
            <span className="confidential"><LockIcon /> confidential</span>
          </header>

          <section className="hero">
            <div className="pill"><SparkIcon /> протокол сессии</div>

            <div className="heroGrid single">
              <div>
                <h1>{session.documentName}</h1>
                
              </div>
            </div>

            <div className="clientCard">
              <div className="clientGrid">
                <div>
                  <p>клиент</p>
                  <strong>{session.client}</strong>
                </div>
                <div>
                  <p>ведущая</p>
                  <strong>{session.coach}</strong>
                </div>
                <div>
                  <p>дата</p>
                  <strong>{session.date}</strong>
                </div>
              </div>
            </div>
          </section>

          <nav className="navBar">
            <div className="navLinks">
              {sections.map((section) => (
                <a key={section.id} href={`#section-${section.id}`}>{section.title}</a>
              ))}
            </div>
            <button type="button" onClick={() => setAllOpen(!allOpen)}>
              {allOpen ? "режим просмотра" : "раскрыть всё"}
            </button>
          </nav>

          <div className="sectionsList">
            {sections.map((section) => (
              <Section key={`${section.id}-${allOpen}`} section={section} defaultOpen={allOpen || section.id === "01"} />
            ))}
          </div>

          <footer className="footer">
            <span>{session.coach} · итоги стратсессии</span>
            <span>«Личная СС» — {session.client} / {session.date}</span>
          </footer>
        </div>
      </article>
    </main>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

:root {
  --bg: #F4F8FE;
  --card: #FFFFFF;
  --navy: #061A3F;
  --secondary: #2E4A72;
  --accent: #8FAED8;
  --line: #C9D9EE;
  --border: #BFD3EC;
  --pill: #EEF4FB;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--bg); color: var(--navy); }
button, input, textarea { font: inherit; }
::selection { background: rgba(143,174,216,.35); color: var(--navy); }

.page {
  min-height: 100vh;
  position: relative;
  padding: 20px 12px;
  overflow: hidden;
  font-family: 'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.background { position: fixed; inset: 0; pointer-events: none; overflow: hidden; }
.orb { position: absolute; border-radius: 999px; filter: blur(70px); }
.orbOne { left: -12%; top: -14%; width: 560px; height: 560px; background: rgba(143,174,216,.24); }
.orbTwo { right: -14%; bottom: -16%; width: 620px; height: 620px; background: rgba(255,255,255,.96); }
.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(201,217,238,.22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201,217,238,.18) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: .42;
}

.documentShell {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 34px;
  background: rgba(244,248,254,.72);
  box-shadow: 0 30px 120px rgba(6,26,63,.10);
  backdrop-filter: blur(28px);
}
.shellGlass {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, rgba(255,255,255,.92), rgba(255,255,255,.42) 42%, rgba(143,174,216,.10));
  pointer-events: none;
}
.shellGlass:before {
  content: '';
  position: absolute;
  left: 32px;
  right: 32px;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, white, transparent);
}
.documentContent { position: relative; padding: 32px 26px; }

.topLine {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--line);
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: 12px;
  font-weight: 700;
  color: var(--secondary);
}
.confidential { display: inline-flex; align-items: center; gap: 8px; color: var(--accent); }
.lockIcon { width: 15px; height: 15px; }

.hero { padding-top: 58px; }
.pill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 20px;
  border: 1px solid rgba(255,255,255,.7);
  border-radius: 999px;
  background: rgba(238,244,251,.9);
  color: var(--navy);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.8);
  font-size: 13px;
  font-weight: 700;
  text-transform: lowercase;
}
.sparkIcon { width: 17px; height: 17px; color: var(--accent); }

.heroGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 34px;
  align-items: end;
  margin-top: 42px;
}
h1 {
  max-width: 940px;
  margin: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(58px, 9vw, 112px);
  line-height: .88;
  font-weight: 600;
  letter-spacing: -.045em;
  color: var(--navy);
}
.heroStatement {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
  padding: 18px 22px;
  border: 1px solid rgba(201,217,238,.82);
  border-radius: 24px;
  background: rgba(255,255,255,.62);
  box-shadow: 0 18px 60px rgba(6,26,63,.06);
  backdrop-filter: blur(24px);
}
.heroStatement span {
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: 11px;
  font-weight: 800;
}
.heroStatement strong {
  color: var(--navy);
  font-size: clamp(20px, 3vw, 28px);
  line-height: 1.15;
  font-weight: 700;
}

.clientCard {
  margin-top: 42px;
  padding: 22px;
  border: 1px solid rgba(255,255,255,.74);
  border-radius: 28px;
  background: rgba(255,255,255,.78);
  box-shadow: 0 22px 80px rgba(6,26,63,.08);
  backdrop-filter: blur(28px);
}
.clientGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-left: 28px;
  border-left: 7px solid var(--accent);
}
.clientGrid p {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: .16em;
  font-size: 11px;
  font-weight: 700;
  color: var(--secondary);
}
.clientGrid strong {
  display: block;
  margin-top: 13px;
  font-size: 22px;
  line-height: 1.2;
  color: var(--navy);
}

.navBar {
  position: sticky;
  top: 16px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 34px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,.74);
  border-radius: 24px;
  background: rgba(255,255,255,.58);
  box-shadow: 0 16px 60px rgba(6,26,63,.08);
  backdrop-filter: blur(28px);
  overflow: hidden;
}
.navLinks {
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  min-width: 0;
  flex: 1;
  overflow-x: auto;
  scrollbar-width: none;
}
.navLinks::-webkit-scrollbar { display: none; }
.navLinks a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  padding: 9px 12px;
  border: 1px solid rgba(201,217,238,.84);
  border-radius: 999px;
  background: rgba(248,251,255,.75);
  color: var(--secondary);
  text-decoration: none;
  font-size: 11px;
  font-weight: 800;
  transition: .2s ease;
  white-space: nowrap;
}
.navLinks a:hover { border-color: var(--accent); color: var(--navy); transform: translateY(-1px); }
.navBar button {
  border: 1px solid rgba(201,217,238,.9);
  border-radius: 999px;
  background: var(--navy);
  color: white;
  padding: 12px 18px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  box-shadow: 0 12px 30px rgba(6,26,63,.16);
  transition: .2s ease;
  white-space: nowrap;
}
.navBar button:hover { transform: translateY(-1px); }

.sectionsList { display: grid; gap: 22px; margin-top: 34px; }
.section { scroll-margin-top: 112px; }
.sectionHead {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(191,211,236,.86);
  border-radius: 32px;
  background: rgba(255,255,255,.62);
  box-shadow: 0 24px 80px rgba(6,26,63,.075);
  backdrop-filter: blur(28px);
  cursor: pointer;
  text-align: left;
  padding: 24px 28px;
  transition: .22s ease;
}
.sectionHead:hover { transform: translateY(-2px); box-shadow: 0 28px 92px rgba(6,26,63,.10); }
.sectionHeadGlass {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 0%, rgba(143,174,216,.20), transparent 34%),
    linear-gradient(135deg, rgba(255,255,255,.9), rgba(255,255,255,.46));
  pointer-events: none;
}
.sectionHeadGlass:before {
  content: '';
  position: absolute;
  left: 28px;
  right: 28px;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, white, transparent);
}
.sectionHeadContent { position: relative; display: flex; align-items: center; gap: 22px; }
.sectionNumber {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 54px;
  line-height: .9;
  font-weight: 600;
  color: var(--accent);
}
.sectionTitleWrap { min-width: 0; flex: 1; }
.section h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(30px, 4.5vw, 46px);
  line-height: .95;
  letter-spacing: -.012em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--navy);
}
.chevronBox {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  border: 1px solid rgba(201,217,238,.86);
  border-radius: 18px;
  background: rgba(255,255,255,.66);
  color: var(--navy);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.7);
}
.chevron { width: 22px; height: 22px; transition: transform .28s ease; }
.chevronOpen { transform: rotate(180deg); }

.sectionBody {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows .38s cubic-bezier(.22,1,.36,1), opacity .28s ease;
}
.sectionBody.open { grid-template-rows: 1fr; opacity: 1; }
.sectionBodyInner {
  overflow: hidden;
  display: grid;
  gap: 16px;
  padding-left: 74px;
}
.sectionBody.open .sectionBodyInner { padding-top: 16px; }

.answerCard {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(221,232,246,.85);
  border-radius: 24px;
  background: rgba(255,255,255,.74);
  box-shadow: 0 18px 50px rgba(6,26,63,.06);
  backdrop-filter: blur(28px);
}
.answerCard:before {
  content: '';
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, white, transparent);
}
.answerGlow {
  position: absolute;
  right: -48px;
  top: -64px;
  width: 150px;
  height: 150px;
  border-radius: 999px;
  background: rgba(143,174,216,.16);
  filter: blur(36px);
  pointer-events: none;
}
.answerInner { display: flex; gap: 18px; padding: 24px; }
.answerNumber {
  display: grid;
  place-items: center;
  min-width: 46px;
  height: 38px;
  padding: 0 10px;
  flex: 0 0 auto;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--bg);
  color: var(--accent);
  font-size: 14px;
  font-weight: 800;
}
.answerContent { min-width: 0; flex: 1; }
.answerContent h3 {
  margin: 0;
  font-size: 20px;
  line-height: 1.35;
  font-weight: 700;
  color: var(--navy);
}
.thinLine {
  height: 1px;
  margin: 20px 0;
  background: linear-gradient(90deg, var(--line), rgba(201,217,238,.7), transparent);
}
.clientAnswer {
  margin-top: 12px;
  padding: 16px;
  border: 1px solid rgba(201,217,238,.82);
  border-radius: 18px;
  background: rgba(248,251,255,.82);
  color: var(--navy);
  font-size: 16px;
  line-height: 1.75;
}

.footer {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 52px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  color: var(--secondary);
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .navBar { align-items: center; flex-direction: row; }
  .navBar button { padding: 10px 13px; font-size: 10px; letter-spacing: .08em; }
}

@media (max-width: 820px) {
  .documentContent { padding: 28px 18px; }
  .topLine { font-size: 10px; letter-spacing: .12em; }
  .hero { padding-top: 42px; }
  .clientGrid { grid-template-columns: 1fr; }
  .sectionHead { padding: 22px 18px; }
  .sectionHeadContent { gap: 14px; }
  .sectionNumber { font-size: 44px; }
  .sectionBodyInner { padding-left: 0; }
  .answerInner { padding: 20px; flex-direction: column; }
  .footer { flex-direction: column; }
}

@media print {
  .navBar { display: none; }
  .page { padding: 0; }
  .documentShell { box-shadow: none; border-radius: 0; }
  .section, .answerCard, .clientCard { break-inside: avoid; page-break-inside: avoid; }
}
`;
