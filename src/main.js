const html = htm.bind(React.createElement);
const { Fragment } = React;

const contacts = [
  {
    label: 'Email',
    value: 'pivo@valsoray.dev',
    href: 'mailto:pivo@valsoray.dev'
  },
  {
    label: 'Telegram',
    value: '@metodist_cs',
    href: 'https://t.me/metodist_cs'
  },
  {
    label: 'Телефон',
    value: '+380662860769',
    href: 'tel:+380662860769'
  }
];

const positions = [
  {
    title: 'Методист факультету ІТК',
    org: 'ДУІТЗ',
    text:
      'Підтримую студентів у навчальних і організаційних питаннях, допомагаю розібратися з правилами, дедлайнами та тим, куди звертатися в різних ситуаціях.'
  },
  {
    title: 'Заступник голови студентського самоврядування',
    org: 'ДУІТЗ',
    text:
      'Представляю інтереси студентів, долучаюся до ініціатив самоврядування та допомагаю робити студентське життя більш зручним, зрозумілим і живим.'
  }
];

const duties = [
  'координую інформацію між студентами, викладачами та адміністрацією факультету;',
  'пояснюю організаційні правила, процедури та навчальні алгоритми простими словами;',
  'стежу за важливими оголошеннями, дедлайнами, змінами та студентськими подіями;',
  'допомагаю оформлювати звернення, пропозиції й ініціативи від студентів;',
  'підтримую спільні проєкти, події та активності студентського самоврядування;',
  'створюю більш зрозумілий і передбачуваний простір для комунікації на факультеті.'
];

const help = [
  'адаптуватися першокурсникам і швидше зорієнтуватися в навчальному процесі;',
  'знайти потрібного викладача, кафедру, службу або правильний канал комунікації;',
  'розібратися з навчальними, організаційними та побутовими питаннями;',
  'передати пропозицію, скаргу або ідею щодо покращення студентського життя;',
  'підтримати участь у подіях, волонтерстві, проєктах і самоврядуванні;',
  'не загубитися в дедлайнах, повідомленнях і великих списках інструкцій.'
];

const quickFacts = [
  'Оперативна комунікація',
  'Пояснення без зайвої бюрократії',
  'Підтримка студентських ініціатив'
];

function App() {
  return html`
    <${Fragment}>
      <div className="page">
        <main>
          <section className="hero">
            <div className="hero__content">
              <p className="eyebrow">ДУІТЗ • факультет ІТК • студентська підтримка</p>
              <h1 className="hero__title">
                Методична підтримка, студентське самоврядування і живий зв'язок зі студентами
              </h1>
              <p className="hero__lead">
                Я — <strong>методист факультету ІТК</strong> та${' '}
                <strong>заступник голови студентського самоврядування ДУІТЗ</strong>.
                Моя задача — бути людиною, до якої можна звернутися, коли потрібно
                розібратися з навчанням, організаційними питаннями або студентськими
                ініціативами.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="mailto:pivo@valsoray.dev">
                  Написати на email
                </a>
                <a
                  className="button button--secondary"
                  href="https://t.me/metodist_cs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Написати в Telegram
                </a>
              </div>

              <div className="facts" aria-label="Ключові переваги">
                ${quickFacts.map(
                  (item) => html`<span key=${item} className="fact">${item}</span>`
                )}
              </div>
            </div>

            <figure className="hero__photoCard">
              <img
                className="hero__photo"
                src="./public/photo.JPG"
                alt="Фото"
              />
              <figcaption className="hero__caption">
                Завжди відкритий до діалогу та студентських звернень
              </figcaption>
            </figure>
          </section>

          <section className="section">
            <div className="section__head">
              <p className="section__eyebrow">Контакти</p>
              <h2 className="section__title">Зв'язатися зі мною</h2>
            </div>

            <div className="contactGrid">
              ${contacts.map(
                (item) => html`
                  <a
                    key=${item.label}
                    className="contactCard"
                    href=${item.href}
                    target=${item.label === 'Telegram' ? '_blank' : undefined}
                    rel=${item.label === 'Telegram' ? 'noreferrer' : undefined}
                  >
                    <span className="contactCard__label">${item.label}</span>
                    <span className="contactCard__value">${item.value}</span>
                  </a>
                `
              )}
            </div>
          </section>

          <section className="section">
            <div className="section__head">
              <p className="section__eyebrow">Посади</p>
              <h2 className="section__title">Мої ролі в ДУІТЗ</h2>
            </div>

            <div className="roleGrid">
              ${positions.map(
                (item) => html`
                  <article className="panel" key=${item.title}>
                    <p className="panel__org">${item.org}</p>
                    <h3 className="panel__title">${item.title}</h3>
                    <p className="panel__text">${item.text}</p>
                  </article>
                `
              )}
            </div>
          </section>

          <section className="section section--split">
            <article className="panel panel--tall">
              <p className="section__eyebrow">Обов'язки</p>
              <h2 className="section__title section__title--compact">Що я роблю</h2>
              <ul className="list">
                ${duties.map((item) => html`<li key=${item}>${item}</li>`)}
              </ul>
            </article>

            <article className="panel panel--tall">
              <p className="section__eyebrow">Допомога</p>
              <h2 className="section__title section__title--compact">
                З чим я можу допомогти студентам
              </h2>
              <ul className="list">
                ${help.map((item) => html`<li key=${item}>${item}</li>`)}
              </ul>
            </article>
          </section>

          <section className="section">
            <article className="callout">
              <div>
                <p className="section__eyebrow">Для студентів</p>
                <h2 className="section__title section__title--compact">
                  Якщо є питання, краще написати одразу
                </h2>
                <p className="callout__text">
                  Я допоможу розібратися з навчальними деталями, підкажу потрібний
                  маршрут комунікації та підтримаю, якщо потрібна студентська
                  ініціатива або просто нормальна людська відповідь без зайвого шуму.
                </p>
              </div>

              <div className="callout__actions">
                <a className="button button--primary" href="mailto:pivo@valsoray.dev">
                  Email
                </a>
                <a className="button button--secondary" href="tel:+380662860769">
                  Подзвонити
                </a>
              </div>
            </article>
          </section>
        </main>

        <footer className="footer">
          <p>© ДУІТЗ • факультет ІТК</p>
        </footer>
      </div>
    </${Fragment}>
  `;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  html`<${App} />`
);
