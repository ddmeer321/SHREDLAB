import './styles.css';

const products = [
  {
    name: 'SHREDLAB DENIM — BLACK',
    color: 'BLACK WASH',
    tone: 'black',
    note: 'Relaxed baggy fit · DROP 001',
  },
  {
    name: 'SHREDLAB DENIM — BLUE',
    color: 'CLASSIC BLUE',
    tone: 'blue',
    note: 'Relaxed baggy fit · DROP 001',
  },
  {
    name: 'SHREDLAB DENIM — DARK BLUE',
    color: 'DEEP INDIGO',
    tone: 'indigo',
    note: 'New colour concept · DROP 001',
  },
];

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <div class="announcement"><span>MTB / STREETWEAR</span><span>BUILT TO SHRED.</span><span>DROP 001 — COMING SOON</span></div>
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="SHREDLAB Startseite">SHRED<span>LAB</span><sup>®</sup></a>
      <button class="menu-toggle" aria-label="Menü öffnen" aria-expanded="false">☰</button>
      <nav class="main-nav" aria-label="Hauptnavigation">
        <a href="#drop">DROP 001</a><a href="#categories">CATEGORIES</a><a href="#about">ABOUT US</a><a href="#riders">RIDER CULTURE</a>
      </nav>
      <a class="header-cta" href="#drop">EXPLORE DROP <span>↗</span></a>
    </header>
    <main id="top">
      <section class="hero">
        <div class="hero-image" role="img" aria-label="Mountainbiker in einer actionreichen Berglandschaft"></div>
        <div class="hero-shade"></div>
        <div class="hero-content">
          <p class="eyebrow">MADE FOR THE RIDE. BUILT FOR EVERY DAY.</p>
          <h1>RIDE HARD.<br><span>WEAR SHREDLAB.</span></h1>
          <p class="hero-copy">MTB attitude. Streetwear identity.<br>Dein nächster Ride beginnt hier.</p>
          <a class="button button-light" href="#drop">SHOP DROP 001 <span>↘</span></a>
        </div>
        <div class="hero-index"><span>01 / 03</span><span>SHRED YOUR OWN LINE</span></div>
      </section>
      <div class="ticker"><div>NO LIMITS&nbsp; ✳ &nbsp;NO FEAR&nbsp; ✳ &nbsp;JUST SHRED&nbsp; ✳ &nbsp;NO LIMITS&nbsp; ✳ &nbsp;NO FEAR&nbsp; ✳ &nbsp;JUST SHRED&nbsp; ✳ &nbsp;</div></div>
      <section class="drop-intro">
        <p class="eyebrow dark-eyebrow">THE FIRST RELEASE</p>
        <h2>SHREDLAB <span>DROP 001</span></h2>
        <p>MTB FUNCTION. STREETWEAR ATTITUDE.</p>
        <a class="button button-dark" href="#drop">DISCOVER THE DROP <span>↘</span></a>
      </section>
      <section class="category-section section-wrap" id="categories">
        <div class="section-heading"><div><p class="eyebrow dark-eyebrow">FIND YOUR STYLE</p><h2>SHOP BY <span>CATEGORY</span></h2></div><p class="section-note">MADE FOR THE RIDE.<br>READY FOR EVERY DAY.</p></div>
        <div class="category-grid">
          <a class="category-card category-denim" href="#drop"><span>01 / DROP 001</span><strong>BAGGY DENIM</strong><em>EXPLORE ↗</em></a>
          <a class="category-card category-ride" href="#details"><span>02 / DETAILS</span><strong>RIDE-READY</strong><em>DISCOVER ↗</em></a>
          <a class="category-card category-brand" href="#about"><span>03 / THE BRAND</span><strong>OUR CULTURE</strong><em>GET TO KNOW US ↗</em></a>
        </div>
      </section>
      <section class="drop-section section-wrap" id="drop">
        <div class="section-heading"><div><p class="eyebrow dark-eyebrow">FIRST RELEASE / 2026</p><h2>DROP <span>001</span></h2></div><p class="section-note">THE FIRST SHRED.<br>MORE THAN JUST CLOTHING.</p></div>
        <div class="product-grid">
          ${products
            .map(
              (p, i) => `
            <article class="product-card product-card-clickable" data-product="${i}" tabindex="0" role="button" aria-label="Produktdetails für ${p.name} öffnen">
              <div class="product-art ${p.tone}">
                <span class="product-number">SL — 00${i + 1}</span>
                <div class="jeans-shape"><i></i><b></b></div>
                <span class="art-label">SHREDLAB®</span>
                <span class="coming-tag">COMING SOON</span>
              </div>
              <div class="product-info"><div><p class="product-color">${p.color}</p><h3>${p.name}</h3><p class="product-note">${p.note}</p></div><span class="detail-button" aria-hidden="true">↗</span></div>
            </article>
          `
            )
            .join('')}
        </div>
        <p class="preview-note">Produktkonzepte für DROP 001 · Bilder, Größen und Preise werden vor Verkaufsstart ergänzt.</p>
      </section>
      <section class="manifesto" id="about">
        <div class="manifesto-image"></div>
        <div class="manifesto-copy"><p class="eyebrow">MORE THAN A CLOTHING BRAND</p><h2>BUILT TO<br><span>SHRED.</span></h2><p>SHREDLAB verbindet Mountainbike-Kultur mit Streetwear. Gemacht für lange Tage auf dem Trail und jeden Tag danach.</p><a href="#details" class="text-link">GET TO KNOW US <span>↗</span></a></div>
      </section>
      <section class="details-section section-wrap" id="details">
        <p class="eyebrow dark-eyebrow">DESIGNED AROUND THE RIDE</p><h2>FUNCTION MEETS<br><span>STREET STYLE.</span></h2>
        <div class="detail-points"><div><b>01</b><h3>RELAXED FIT</h3><p>Baggy Silhouette mit Bewegungsfreiheit auf und neben dem Bike.</p></div><div><b>02</b><h3>RIDE-READY DETAILS</h3><p>Geplante Reißverschlusstaschen für sichere Essentials unterwegs.</p></div><div><b>03</b><h3>ADJUST YOUR LINE</h3><p>Verstellbare Beinabschlüsse als Teil unseres Jeans-Konzepts.</p></div></div>
      </section>
      <section class="rider-section" id="riders">
        <div class="rider-copy"><p class="eyebrow">SHREDLAB COMMUNITY</p><h2>REAL RIDERS.<br><span>REAL LINES.</span></h2><p>Unsere Marke kommt aus der MTB-Kultur. Hier zeigen wir bald Clips, Tricks und Momente aus unserer Crew.</p><a href="#about" class="text-link">MORE ABOUT SHREDLAB <span>↗</span></a></div>
        <div class="rider-image" role="img" aria-label="SHREDLAB Mountainbike Rider"></div>
      </section>
      <section class="closing">
        <p class="eyebrow">THE FIRST DROP IS COMING</p><h2>FIND YOUR<br><span>LINE.</span></h2><a class="button button-light" href="#drop">DISCOVER DROP 001 <span>↗</span></a>
      </section>
    </main>
    <footer class="footer"><a class="wordmark" href="#top">SHRED<span>LAB</span><sup>®</sup></a><p>BUILT TO SHRED.</p><div><a href="#about">ABOUT</a><a href="#drop">SHOP</a><a href="mailto:hello@shredlab.de">CONTACT</a></div><small>© 2026 SHREDLAB. ALL RIGHTS RESERVED. · PREVIEW SHOP</small></footer>
    <dialog class="product-dialog product-detail-dialog" aria-label="Produktdetails">
      <button class="dialog-close" aria-label="Schließen">×</button>
      <div class="product-detail-layout">
        <div class="detail-gallery">
          <div class="detail-main-frame">
            <img class="detail-gallery-main" src="/resources/shredlab-black-jeans-gallery.png" alt="SHREDLAB schwarze Baggy Jeans – Vorderseite">
          </div>
          <div class="detail-gallery-caption"><span>SHREDLAB® / DROP 001</span><span>BLACK WASH / FRONT VIEW</span></div>
          <div class="detail-gallery-statement"><p class="eyebrow dark-eyebrow">MADE FOR MOVEMENT</p><h3>READY FOR<br>THE NEXT LINE.</h3><p>Jedes Detail hat seinen Zweck. Entwickelt für Bewegung auf dem Bike und einen Look, der auch danach funktioniert.</p></div>
        </div>
        <div class="product-detail-info">
          <p class="eyebrow dark-eyebrow">SHREDLAB® / DROP 001</p>
          <h2 class="dialog-title"></h2>
          <p class="detail-price">PRICE TO BE ANNOUNCED</p>
          <div class="detail-size-heading"><strong>SIZE</strong><button class="size-guide-toggle" type="button">SIZE GUIDE</button></div>
          <div class="size-options" role="group" aria-label="Größe auswählen">
            <button type="button" data-size="XS">XS</button><button type="button" data-size="S">S</button><button type="button" data-size="M">M</button><button type="button" data-size="L">L</button><button type="button" data-size="XL">XL</button>
          </div>
          <div class="size-guide-panel" hidden><strong>SHREDLAB SIZE GUIDE</strong><p>Die genauen Maße für Bundweite und Beinlänge ergänzen wir, sobald das Produktionsmuster vorliegt.</p><div><span>XS – XL</span><span>Maße folgen</span></div></div>
          <button type="button" class="find-size-toggle">♧ &nbsp; FIND MY SIZE</button>
          <div class="find-size-panel" hidden>Unser Größenberater kommt, sobald die finalen Jeans-Maße feststehen.</div>
          <p class="detail-availability"><span></span> DROP 001 — COMING SOON</p>
          <div class="detail-buy-row"><div class="quantity-control"><button type="button" data-quantity="-1" aria-label="Menge verringern">−</button><span class="quantity-value">1</span><button type="button" data-quantity="1" aria-label="Menge erhöhen">+</button></div><button class="detail-buy-button" type="button" disabled>COMING SOON</button></div>
          <div class="detail-benefits"><span>↔ &nbsp; RIDER-FOCUSED FIT</span><span>⌁ &nbsp; SECURE ZIP POCKETS</span><span>＋ &nbsp; ADJUSTABLE HEM</span></div>
          <table class="model-size-table"><thead><tr><th>FIT</th><th>STYLE</th><th>DROP</th></tr></thead><tbody><tr><td>Baggy</td><td>MTB / Streetwear</td><td>001</td></tr></tbody></table>
          <div class="detail-description"><h3>BAGGY FIT. BUILT TO SHRED.</h3><p class="dialog-description"></p><ul><li>Relaxed baggy silhouette</li><li>Planned zip pockets for riding essentials</li><li>Adjustable leg openings</li><li>SHREDLAB logo on the back right pocket</li></ul></div>
          <p class="detail-small-note">Produktkonzept – noch nicht bestellbar. Preis, Größenmaße und Verfügbarkeit werden vor dem Verkaufsstart ergänzt.</p>
        </div>
      </div>
      <section class="detail-editorial">
        <div class="detail-editorial-heading"><p class="eyebrow dark-eyebrow">SHREDLAB / PRODUCT STORY</p><h2>BUILT TO<br><span>SHRED.</span></h2></div>
        <div class="detail-editorial-copy"><h3>NOT JUST ANOTHER JEAN.</h3><p>Eine lockere Baggy-Silhouette trifft auf funktionale Details: sichere Taschen mit Reißverschluss, ein SHREDLAB-Logo auf der hinteren Tasche und verstellbare Beinabschlüsse.</p><p>Ein Jeans-Konzept für Bikepark-Laps, Street Sessions und alles dazwischen.</p></div>
      </section>
    </dialog>
  `;

  const menuToggle = app.querySelector<HTMLButtonElement>('.menu-toggle');
  const nav = app.querySelector<HTMLElement>('.main-nav');
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    nav?.classList.toggle('nav-open', !isOpen);
  });

  const dialog = app.querySelector<HTMLDialogElement>('.product-dialog');
  const openProduct = (index: number) => {
    const product = products[index];
    if (!product || !dialog) return;
    dialog.querySelector('.dialog-title')!.textContent = product.name;
    dialog.querySelector('.dialog-description')!.textContent =
      product.note +
      '. Geplant sind ein SHREDLAB-Logo auf der hinteren rechten Tasche, obere Zip-Pockets und praktische Details fürs Biken.';
    const mainArt = dialog.querySelector<HTMLElement>('.detail-main-art');
    if (mainArt) {
      mainArt.classList.remove('black', 'blue', 'indigo');
      mainArt.classList.add(product.tone);
    }
    dialog.querySelectorAll<HTMLButtonElement>('[data-size]').forEach(sizeButton => sizeButton.classList.remove('selected'));
    dialog.querySelector('.quantity-value')!.textContent = '1';
    dialog.showModal();
  };
  app.querySelectorAll<HTMLElement>('.product-card-clickable').forEach(card => {
    card.addEventListener('click', () => openProduct(Number(card.dataset.product)));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProduct(Number(card.dataset.product));
      }
    });
  });
  dialog?.querySelectorAll<HTMLButtonElement>('[data-size]').forEach(button => {
    button.addEventListener('click', () => {
      dialog.querySelectorAll('[data-size]').forEach(item => item.classList.remove('selected'));
      button.classList.add('selected');
    });
  });
  dialog?.querySelector('.size-guide-toggle')?.addEventListener('click', () => {
    const panel = dialog.querySelector<HTMLElement>('.size-guide-panel');
    if (panel) panel.hidden = !panel.hidden;
  });
  dialog?.querySelector('.find-size-toggle')?.addEventListener('click', () => {
    const panel = dialog.querySelector<HTMLElement>('.find-size-panel');
    if (panel) panel.hidden = !panel.hidden;
  });
  dialog?.querySelectorAll<HTMLButtonElement>('[data-quantity]').forEach(button => {
    button.addEventListener('click', () => {
      const value = dialog.querySelector<HTMLElement>('.quantity-value');
      if (!value) return;
      const next = Math.max(1, Math.min(10, Number(value.textContent) + Number(button.dataset.quantity)));
      value.textContent = String(next);
    });
  });
  app.querySelector('.dialog-close')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
}
