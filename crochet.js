 const products = [
  {
    emoji: '🧶', label: 'Bolso tejido',
    title: 'Amigurumi\nHecho a Mano',
    category: '🧶 Crochet', price: 'Depende', stars: '💜💜💜💜💜',
    desc: 'Piezas únicas tejidas a mano con amor. Cada una es diferente y especial. Hilo 100% algodón orgánico.',
    details: [
      'Tejido a mano',
      'Disponible en varios colores a pedido'
    ],
    examples: ['amigurumi.png','Ajolote.png','menta.png','gato.png','cocodrilo.png','pato.png'],
    bg: 'radial-gradient(circle, rgba(200,216,192,0.7) 0%, rgba(228,238,224,0.3) 80%, transparent 100%)',
    exbg: 'var(--sage-light)',
    pill: 'background:var(--sage-light); color:var(--sage-dark);',
    btn: 'background:var(--sage-dark); color:white;'
  },
  {
    emoji: '⭐', label: 'Pack de stickers',
    title: 'Pack Stickers✦',
    category: '⭐ Stickers', price: '$1.500', stars: '🌸🌸🌸🌸🌸',
    desc: 'Diseños originales ilustrados a mano.n\Perfectos para personalizar todo.',
    details: [
      'Pack de stickers troquelados de alta calidad',
      'Perfectos para cuadernos, termos y laptops'
    ],
    examples: ['sticker1.png','sticker2.png','sticker3.png','sticker4.png','sticker5.png','sticker6.png'],
    bg: 'radial-gradient(circle, rgba(242,201,208,0.7) 0%, rgba(253,221,230,0.3) 80%, transparent 100%)',
    exbg: 'var(--blush)',
    pill: 'background:var(--blush); color:var(--blush-dark);',
    btn: 'background:var(--blush-dark); color:white;'
  },
  {
    emoji: '📓', label: 'Libreta artesanal',
    title: 'Libreta\nArtesanal A5',
    category: '📓 Libretas', price: '$8.000', stars: '🌿🌿🌿🌿🌿',
    desc: 'Encuadernadas a mano con tapa dura ilustrada. Papel reciclado suave al tacto, ideal para escribir y dibujar.',
    details: [
      'Tapa dura con diseño laminado en frio',
      '~100 páginas de papel reciclado 90gr',
    ],
    examples: ['portada.png','papel.png','ojalillo.png','elastico.png','dentro.png'],
    bg: 'radial-gradient(circle, rgba(245,237,202,0.7) 0%, rgba(250,245,220,0.3) 80%, transparent 100%)',
    exbg: 'var(--butter)',
    pill: 'background:var(--butter); color:var(--butter-dark);',
    btn: 'background:var(--butter-dark); color:white;'
  },
  {
    emoji: '🖼️', label: 'Poster decorativo',
    title: 'Poster\nIlustrado A4',
    category: '🖼️ Posters', price: '$1.000', stars: '💛💛💛💛💛',
    desc: 'Ilustraciones digitales artesanales impresas en papel premium. Llegan enrolladas listas para enmarcar.',
    details: [
      'Impresión de alta resolución en papel 70gr',
      'Plastificado',
      'Tamaño A4 o Carta',
    ],
    examples: ['🌙','🏔️','🌸','🦊','🌊','🌿'],
    bg: 'radial-gradient(circle, rgba(216,200,232,0.7) 0%, rgba(240,232,248,0.3) 80%, transparent 100%)',
    exbg: 'var(--lilac)',
    pill: 'background:var(--lilac); color:var(--lilac-dark);',
    btn: 'background:var(--lilac-dark); color:white;'
  },
    {
    "emoji": "🎗️",
    "label": "Llavero",
    "title": "Llavero",
    "desc": "Lindo llavero para colgar con tus llaves o en tu mochila",
    "price": "$2.000",
    "category": "Llavero",
    "stars": "👑👑👑👑👑",
    "theme": "blush",
    "details": [
      "Hecho a mano"
    ],
    "examples": ['fresa.png','bts.png','chinchilla1.png','chinchilla2.png','cruz.png','pinguino.png'],
    "bg": "radial-gradient(circle, rgba(242,201,208,0.7) 0%, rgba(253,221,230,0.3) 80%, transparent 100%)",
    "exbg": "var(--blush)",
    "pill": "background:var(--blush); color:var(--blush-dark);",
    "btn": "background:var(--blush-dark); color:white;",
    "order": 0
  },
  {
    emoji: '🪢', label: 'Pulsera',
    title: 'Pulsera',
    category: 'Pulsera', price: '$1.000', stars: '❤️❤️❤️❤️❤️',
    desc: 'Linda Pulsera',
    details: [
      'Hecha a mano'
    ],
    examples: [],
    bg: 'radial-gradient(circle, rgba(200,216,192,0.7) 0%, rgba(228,238,224,0.3) 80%, transparent 100%)',
    exbg: 'var(--sage-light)',
    pill: 'background:var(--sage-light); color:var(--sage-dark);',
    btn: 'background:var(--sage-dark); color:white;'
  }
];

  let current = 0, qty = 1, cartTotal = 0;
let lbQty = 1;
let cartItems = [];
// ── CÓDIGOS DE DESCUENTO ──
// Para agregar o cambiar códigos, edita este objeto:
const DISCOUNT_CODES = {
  'ARTSAM10': 10,   // 10% off
  'ARTSAM15': 15,   // 15% off
  'BIENVENIDA': 5, // 5% off
};
let appliedDiscount = 0;
let appliedCode = '';
function addToCartItem(product, qty) {
  const existing = cartItems.find(i => i.label === product.label);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({ ...product, qty });
  }
  cartTotal = cartItems.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = cartTotal;
}

function removeFromCart(label) {
  cartItems = cartItems.filter(i => i.label !== label);
  cartTotal = cartItems.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = cartTotal;
  renderCart();
}

function changeCartQty(label, dir) {
  const item = cartItems.find(i => i.label === label);
  if (item) {
    item.qty = Math.max(1, item.qty + dir);
    cartTotal = cartItems.reduce((s, i) => s + i.qty, 0);
    document.getElementById('cartCount').textContent = cartTotal;
    renderCart();
  }
}

function parsePrice(str) {
  return parseInt(str.replace(/[^0-9]/g, '')) || 0;
}

function renderCart() {
  const empty   = document.getElementById('cartEmpty');
  const list    = document.getElementById('cartItems');
  const bottom  = document.getElementById('cartBottom');

  if (cartItems.length === 0) {
    empty.style.display  = 'flex';
    list.style.display   = 'none';
    bottom.style.display = 'none';
    return;
  }

  empty.style.display  = 'none';
  list.style.display   = 'flex';
  bottom.style.display = 'flex';

  list.innerHTML = cartItems.map(item => {
    const isUrl = item.emoji.startsWith('http') || item.emoji.startsWith('imagenes/');
    const imgHtml = isUrl
      ? `<img src="${item.emoji}" alt="${item.label}">`
      : item.emoji;
    return `
      <div class="cart-item">
        <div class="cart-item-img">${imgHtml}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.label}</div>
          <div class="cart-item-price">${item.price} c/u</div>
          <div class="cart-item-controls">
            <button class="cart-item-btn" onclick="changeCartQty('${item.label}', -1)">−</button>
            <span class="cart-item-qty">${item.qty}</span>
            <button class="cart-item-btn" onclick="changeCartQty('${item.label}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.label}')">🗑️</button>
      </div>`;
  }).join('');

const subtotal = cartItems.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
  const discount = Math.round(subtotal * appliedDiscount / 100);
  const total = subtotal - discount;
  const totalEl = document.getElementById('cartTotalPrice');
  if (appliedDiscount > 0) {
    totalEl.innerHTML = `
      <span style="text-decoration:line-through; font-size:1.1rem; color:var(--ink-light);">$${subtotal.toLocaleString('es-CL')}</span><br>
      <span style="color:var(--sage-dark); font-size:0.85rem; font-weight:700;">−${appliedDiscount}% (${appliedCode})</span><br>
      $${total.toLocaleString('es-CL')}`;
  } else {
    totalEl.textContent = '$' + total.toLocaleString('es-CL');
  }
}
// Guardar código usado en Firebase
  if (appliedDiscount > 0 && auth.currentUser) {
    db.collection('usedCodes').add({
      userId: auth.currentUser.uid,
      code: appliedCode,
      usedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }


async function sendOrder() {

  const name    = document.getElementById('buyerName').value.trim();
  const phone   = document.getElementById('buyerPhone').value.trim();
  const address = document.getElementById('buyerAddress').value.trim();
  const note    = document.getElementById('buyerNote').value.trim();

  if (!name || !phone || !address) {
    alert("Completa todos los datos");
    return;
  }

const subtotal = cartItems.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);
  const discount = Math.round(subtotal * appliedDiscount / 100);
  const total = subtotal - discount;

  const order = {
    name: name,
    phone: phone,
    address: address,
    note: note,
    items: cartItems,
    total: total,
    date: new Date()
  };

  try {

    await db.collection("orders").add(order);

    console.log("Pedido guardado");

  } catch (error) {

    console.error("Error guardando pedido:", error);

  }

  const itemsList = cartItems.map(i =>
    `• ${i.label} x${i.qty} — ${i.price}`
  ).join('\n');

  const msg = `🛍️ *Nuevo pedido ArtSam*

👤 *Nombre:* ${name}
📞 *Teléfono:* ${phone}
📍 *Dirección:* ${address}
${note ? `📝 *Nota:* ${note}` : ''}

🧾 *Productos:*
${itemsList}

${appliedDiscount > 0 ? `🏷️ *Descuento (${appliedCode}):* −${appliedDiscount}% ($${Math.round(subtotal * appliedDiscount / 100).toLocaleString('es-CL')})\n` : ''}💰 *Total: $${total.toLocaleString('es-CL')}*`;

  const tuNumero = '56945216603';

  const url = `https://wa.me/${tuNumero}?text=${encodeURIComponent(msg)}`;

  window.open(url, '_blank');

}
function openLightbox() {
  const p = products[current];
  document.getElementById('lbMainImg').textContent = p.emoji;
  document.getElementById('lbMainImg').style.background = p.exbg;
  document.getElementById('lbPill').textContent = p.category;
  document.getElementById('lbPill').setAttribute('style', p.pill);
  document.getElementById('lbTitle').innerHTML = p.title.replace('\n','<br>');
  document.getElementById('lbDesc').textContent = p.desc;
  document.getElementById('lbPrice').textContent = p.price;
  document.getElementById('lbStars').textContent = p.stars;
  document.getElementById('lbBtn').setAttribute('style', p.btn);

  // Ejemplos
const grid = document.getElementById('lbExamples');
grid.innerHTML = p.examples.map(e =>
  `<div class="lb-example" style="background:${p.exbg}">
    <img src="${e}" alt="ejemplo" onerror="this.parentElement.innerHTML='📷'">
  </div>`
).join('');

  // Miniaturas
  const thumbs = document.getElementById('lbThumbs');
  thumbs.innerHTML = products.map((pr, i) =>
    `<div class="lb-thumb ${i === current ? 'active' : ''}" onclick="changeLbProduct(${i})">${pr.emoji}</div>`
  ).join('');

  lbQty = 1;
  document.getElementById('lbQty').textContent = lbQty;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function changeLbProduct(idx) {
  current = idx;
  updateUI(true);
  openLightbox();
}

function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox')) {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function changeLbQty(dir) {
  lbQty = Math.max(1, lbQty + dir);
  document.getElementById('lbQty').textContent = lbQty;
}

function addFromLightbox() {
  addToCartItem(products[current], lbQty);
  const toast = document.getElementById('toast');
  toast.textContent = `${lbQty}x ${products[current].label} agregado/s 🛍️`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
  const btn = document.getElementById('lbBtn');
  btn.textContent = '¡Listo! ✔';
  setTimeout(() => btn.textContent = 'Agregar al carrito ✦', 1200);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox({ target: document.getElementById('lightbox') });
});
  function updateUI(animate) {
    const p = products[current];
    const stage = document.getElementById('stageEmoji');
    if (animate) {
      stage.style.transform = 'scale(0.7) rotate(10deg)';
      stage.style.opacity = '0';
      setTimeout(() => {
        stage.textContent = p.emoji;
        stage.style.transform = '';
        stage.style.opacity = '1';
      }, 200);
    } else {
      stage.textContent = p.emoji;
    }
    document.getElementById('stageBg').style.background = p.bg;
    document.getElementById('heroLabel').textContent = p.label;
    document.getElementById('catPill').textContent = p.category;
    document.getElementById('catPill').setAttribute('style', p.pill);
    document.getElementById('cardTitle').innerHTML = p.title.replace('\n', '<br>');
    document.getElementById('cardPrice').textContent = p.price;
    document.getElementById('cardStars').textContent = p.stars;
    document.getElementById('cardDeco').textContent = p.emoji;
    document.getElementById('detailsList').innerHTML = p.details.map(d => `<li>${d}</li>`).join('');
    document.getElementById('addBtn').setAttribute('style', p.btn);
    document.querySelectorAll('.thumb').forEach((t,i) => t.classList.toggle('active', i === current));
    qty = 1;
    document.getElementById('qtyNum').textContent = qty;
  }

  function changeProduct(dir) {
    current = (current + dir + products.length) % products.length;
    updateUI(true);
  }

  function selectProd(idx) { current = idx; updateUI(true); }

  function selectCategory(idx) {
    selectProd(idx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function changeQty(dir) {
    qty = Math.max(1, qty + dir);
    document.getElementById('qtyNum').textContent = qty;
  }

function addToCart() {
  addToCartItem(products[current], qty);
  const toast = document.getElementById('toast');
  toast.textContent = `${qty}x ${products[current].label} agregado/s 🛍️`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
  const btn = document.getElementById('addBtn');
  btn.textContent = '¡Listo! ✔';
  setTimeout(() => btn.textContent = 'Agregar al carrito ✦', 1200);
}
function openCart() {
  renderCart();
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeCartOutside(e) {
  if (e.target === document.getElementById('cartOverlay')) closeCart();
}

  updateUI(false);
  let authMode = 'login';

function openAuthModal() {
  const user = document.querySelector('#authBtn span');
  if (document.getElementById('authBtn').textContent.includes('Salir')) return;
  document.getElementById('authOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('authOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('authError').classList.remove('show');
  document.getElementById('authEmail').value = '';
  document.getElementById('authPass').value  = '';
  document.getElementById('authName').value  = '';
}

function closeAuthOutside(e) {
  if (e.target === document.getElementById('authOverlay')) closeAuthModal();
}

function switchTab(mode) {
  authMode = mode;
  document.getElementById('tabLogin').classList.toggle('active',    mode === 'login');
  document.getElementById('tabRegister').classList.toggle('active', mode === 'register');
  document.getElementById('authNameField').classList.toggle('show', mode === 'register');
  document.getElementById('authTitle').textContent = mode === 'login' ? 'Bienvenida a ArtSam' : 'Crear cuenta';
  document.getElementById('authError').classList.remove('show');

  const btn = document.getElementById('authMainBtn');
  if (mode === 'login') {
    btn.textContent = 'Iniciar sesión';
    btn.onclick = () => window.loginEmail();
  } else {
    btn.textContent = 'Registrarse';
    btn.onclick = () => window.registerEmail();
  }
}
function showAuthError(msg) {
  const el = document.getElementById('authError');
  el.textContent = msg;
  el.classList.add('show');
}

function showToastMsg(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
  function cotizar(){

let producto = document.getElementById("cardTitle").innerText;
let precio = document.getElementById("cardPrice").innerText;

let mensaje = `Hola! Me gustaría cotizar este producto:
${producto}
Precio: ${precio}`;

let telefono = "56945216603"; // tu numero

let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

window.open(url, "_blank");

}
function searchProduct() {

  const text = document.getElementById("searchInput").value.toLowerCase();

  const index = products.findIndex(p =>
    p.label.toLowerCase().includes(text) ||
    p.category.toLowerCase().includes(text) ||
    p.title.toLowerCase().includes(text)
  );

  if (index !== -1) {
    current = index;
    updateUI(true);
  }

}
/* ── NOSOTRAS ── */
function openNosotras() {
  document.getElementById('nosotrasOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNosotras() {
  document.getElementById('nosotrasOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeNosotrasOutside(e) {
  if (e.target === document.getElementById('nosotrasOverlay')) closeNosotras();
}
/* ── CONTACTO ── */
function openContacto() {
  document.getElementById('contactoOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeContacto() {
  document.getElementById('contactoOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
/* ── RESEÑAS ── */
let reviewProductLabel = '';
let selectedStars = 0;

function addReviewsButton() {
  const card = document.getElementById('productCard');
  if (!card || document.getElementById('reviewsBtn')) return;
  const btn = document.createElement('button');
  btn.className = 'btn-reviews';
  btn.id = 'reviewsBtn';
  btn.innerHTML = '⭐ Ver reseñas';
  btn.onclick = openReviews;
  card.appendChild(btn);
}
addReviewsButton();

const _origUpdateUI = updateUI;
updateUI = function(animate) {
  _origUpdateUI(animate);
  loadReviewsSummary(products[current].label);
};

async function loadReviewsSummary(label) {
  try {
    const snap = await db.collection('reviews')
      .where('productLabel', '==', label).get();
    const btn = document.getElementById('reviewsBtn');
    
    if (snap.size === 0) {
      if (btn) btn.innerHTML = '⭐ Ver reseñas · ¡Sé la primera!';
      // Sin reseñas: mostrar estrellas vacías
      document.getElementById('cardStars').textContent = '☆☆☆☆☆';
      return;
    }

    const avg = snap.docs.reduce((s, d) => s + d.data().stars, 0) / snap.size;
    const rounded = Math.round(avg);
    const starsText = '★'.repeat(rounded) + '☆'.repeat(5 - rounded);

    // Actualizar botón
    if (btn) btn.innerHTML = `${starsText} ${avg.toFixed(1)} · ${snap.size} reseña${snap.size !== 1 ? 's' : ''}`;

    // Actualizar estrellas en la card principal
    document.getElementById('cardStars').textContent = starsText;

  } catch(e) {}
}

function openReviews() {
  reviewProductLabel = products[current].label;
  document.getElementById('reviewsProductName').textContent = reviewProductLabel + ' · Reseñas';
  selectedStars = 0;
  resetStarPicker();
  document.getElementById('reviewText').value = '';
  const user = auth.currentUser;
  document.getElementById('reviewForm').style.display     = user ? 'block' : 'none';
  document.getElementById('reviewLoginMsg').style.display = user ? 'none'  : 'block';
  document.getElementById('reviewsOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  loadReviews();
}

function closeReviews() {
  document.getElementById('reviewsOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function resetStarPicker() {
  document.querySelectorAll('.star-pick').forEach(s => s.classList.remove('active'));
  selectedStars = 0;
}

document.querySelectorAll('.star-pick').forEach(star => {
  star.addEventListener('mouseover', () => {
    const v = parseInt(star.dataset.v);
    document.querySelectorAll('.star-pick').forEach(s => s.classList.toggle('active', parseInt(s.dataset.v) <= v));
  });
  star.addEventListener('mouseleave', () => {
    document.querySelectorAll('.star-pick').forEach(s => s.classList.toggle('active', parseInt(s.dataset.v) <= selectedStars));
  });
  star.addEventListener('click', () => {
    selectedStars = parseInt(star.dataset.v);
    document.querySelectorAll('.star-pick').forEach(s => s.classList.toggle('active', parseInt(s.dataset.v) <= selectedStars));
  });
});

async function submitReview() {
  const user = auth.currentUser;
  if (!user) return;
  if (selectedStars === 0) { showToastMsg('Elige cuántas estrellas ⭐'); return; }
  const text = document.getElementById('reviewText').value.trim();
  if (!text) { showToastMsg('Escribe un comentario 📝'); return; }
  const btn = document.querySelector('.review-submit-btn');
  btn.disabled = true; btn.textContent = 'Publicando...';
  const existing = await db.collection('reviews')
    .where('productLabel', '==', reviewProductLabel)
    .where('userId', '==', user.uid).get();
  if (!existing.empty) {
    showToastMsg('Ya dejaste una reseña para este producto 💜');
    btn.disabled = false; btn.textContent = 'Publicar reseña ✦';
    return;
  }
  await db.collection('reviews').add({
    productLabel: reviewProductLabel,
    userId:   user.uid,
    userName: user.displayName || user.email.split('@')[0],
    stars:    selectedStars,
    text:     text,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  showToastMsg('¡Reseña publicada! 🌟');
  document.getElementById('reviewText').value = '';
  resetStarPicker();
  btn.disabled = false; btn.textContent = 'Publicar reseña ✦';
  loadReviews();
  loadReviewsSummary(reviewProductLabel);
}

async function loadReviews() {
  const list = document.getElementById('reviewsList');
  list.innerHTML = '<div style="text-align:center;padding:20px;color:var(--ink-light);">Cargando...</div>';
  try {
const snap = await db.collection('reviews')
      .where('productLabel', '==', reviewProductLabel).get();
    if (snap.empty) {
      list.innerHTML = '<div class="reviews-empty">¡Sé la primera en dejar una reseña! 🌸</div>';
      document.getElementById('reviewsAvgStars').textContent = '☆☆☆☆☆';
      document.getElementById('reviewsAvgNum').textContent = '';
      return;
    }
const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    const avg = docs.reduce((s, d) => s + d.stars, 0) / docs.length;
    document.getElementById('reviewsAvgStars').textContent = '★'.repeat(Math.round(avg)) + '☆'.repeat(5 - Math.round(avg));
    document.getElementById('reviewsAvgNum').textContent = `${avg.toFixed(1)} (${docs.length} reseña${docs.length !== 1 ? 's' : ''})`;
const user = auth.currentUser;
    const isAdmin = user?.email?.toLowerCase() === 'samiramirezgonzalez@gmail.com';
    list.innerHTML = docs.map((d, i) => {
      const date = d.createdAt?.toDate ? d.createdAt.toDate().toLocaleDateString('es-CL', { day:'2-digit', month:'short', year:'numeric' }) : '';
      const canDelete = isAdmin || (user && user.uid === d.userId);
      return `
        <div class="review-item" id="review-${i}">
          <div class="review-item-top">
            <span class="review-item-user">👤 ${d.userName}</span>
            <span class="review-item-stars">${'★'.repeat(d.stars)}${'☆'.repeat(5-d.stars)}</span>
          </div>
          <p class="review-item-text">${d.text}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
            <div class="review-item-date">${date}</div>
            ${canDelete ? `<button onclick="deleteReview('${d.id}')" style="background:var(--blush);color:var(--blush-dark);border:none;border-radius:50px;padding:4px 12px;font-family:'Quicksand',sans-serif;font-size:0.75rem;font-weight:700;cursor:pointer;" onmouseover="this.style.background='var(--blush-dark)';this.style.color='white'" onmouseout="this.style.background='var(--blush)';this.style.color='var(--blush-dark)'">🗑️ Eliminar</button>` : ''}
          </div>
        </div>`;
    }).join('');
  } catch(e) {
    list.innerHTML = '<div class="reviews-empty">Error al cargar reseñas 😞</div>';
  }
}
async function deleteReview(id) {
  if (!confirm('¿Eliminar esta reseña?')) return;
  await db.collection('reviews').doc(id).delete();
  showToastMsg('Reseña eliminada 🗑️');
  loadReviews();
  loadReviewsSummary(reviewProductLabel);
}
/* ── MENÚ HAMBURGUESA ── */
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburgerBtn').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburgerBtn').classList.remove('open');
}
document.addEventListener('click', e => {
  const nav = document.getElementById('mainNav');
  if (nav && !nav.contains(e.target)) closeMobileMenu();
});
auth.onAuthStateChanged(user => {
  const mobileBtn = document.getElementById('mobileAuthBtn');
  if (!mobileBtn) return;
  if (user) {
    mobileBtn.textContent = '👤 ' + (user.displayName || user.email.split('@')[0]) + ' · Salir';
    mobileBtn.onclick = () => { window.logOut(); closeMobileMenu(); };
  } else {
    mobileBtn.textContent = '👤 Ingresar / Mi cuenta';
    mobileBtn.onclick = () => { openAuthModal(); closeMobileMenu(); };
  }
});
/* ── GALERÍA ── */
function filterGallery(type, btn) {
  document.querySelectorAll('.gallery-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gallery-item').forEach(item => {
    if (type === 'all' || item.dataset.type === type) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    document.getElementById('galleryLbImg').src = img.src;
    document.getElementById('galleryLightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeGalleryLb(e) {
  if (!e || e.target === document.getElementById('galleryLightbox') || e.target.classList.contains('gallery-lb-close')) {
    document.getElementById('galleryLightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
}
async function applyDiscount() {
  const user = auth.currentUser;
  const input = document.getElementById('discountInput');
  const code  = input.value.trim().toUpperCase();
  const msgEl = document.getElementById('discountMsg');

  if (!code) return;

  // Verificar si está logueada
  if (!user) {
    msgEl.textContent = '❌ Debes iniciar sesión para usar un código';
    msgEl.style.color = 'var(--blush-dark)';
    input.style.borderColor = 'var(--blush-dark)';
    return;
  }

  // Verificar si el código existe
  if (!DISCOUNT_CODES[code]) {
    appliedDiscount = 0;
    appliedCode = '';
    input.style.borderColor = 'var(--blush-dark)';
    msgEl.textContent = '❌ Código incorrecto';
    msgEl.style.color = 'var(--blush-dark)';
    return;
  }

  // Verificar en Firebase si ya lo usó
  const btn = document.getElementById('discountBtn');
  btn.disabled = true;
  btn.textContent = 'Verificando...';

  try {
    const snap = await db.collection('usedCodes')
      .where('userId', '==', user.uid)
      .where('code', '==', code)
      .get();

    if (!snap.empty) {
      input.style.borderColor = 'var(--blush-dark)';
      msgEl.textContent = '❌ Ya usaste este código anteriormente';
      msgEl.style.color = 'var(--blush-dark)';
      btn.disabled = false;
      btn.textContent = 'Aplicar';
      return;
    }

// Código válido y no usado — guardar en Firebase y aplicar
    await db.collection('usedCodes').add({
      userId: user.uid,
      code: code,
      usedAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    appliedDiscount = DISCOUNT_CODES[code];
    appliedCode = code;
    input.style.borderColor = 'var(--sage-dark)';
    msgEl.textContent = `✅ ¡${appliedDiscount}% de descuento aplicado!`;
    msgEl.style.color = 'var(--sage-dark)';
    input.disabled = true;
    btn.textContent = '✔ Aplicado';
    renderCart();

  } catch(e) {
    msgEl.textContent = '❌ Error al verificar el código';
    msgEl.style.color = 'var(--blush-dark)';
    btn.disabled = false;
    btn.textContent = 'Aplicar';
  }
}