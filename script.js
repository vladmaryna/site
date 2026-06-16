const products = [
  { id: 11, variantGroup: "iphone-17-pro", colorSlug: "cosmic-orange", name: "Apple iPhone 17 Pro 256GB Cosmic Orange", category: "phone", label: "Новинка", price: 71999, oldPrice: 75999, image: "images/products/iphone-17-pro/cosmic-orange/photo-1.png" },
  { id: 12, variantGroup: "iphone-17-pro", colorSlug: "deep-blue", name: "Apple iPhone 17 Pro 256GB Deep Blue", category: "phone", label: "Новинка", price: 71999, oldPrice: 75999, image: "images/products/iphone-17-pro/deep-blue/photo-1.png" },
  { id: 13, variantGroup: "iphone-17-pro", colorSlug: "silver", name: "Apple iPhone 17 Pro 256GB Silver", category: "phone", label: "Новинка", price: 71999, oldPrice: 75999, image: "images/products/iphone-17-pro/silver/photo-1.png" },
  { id: 20, variantGroup: "macbook-air-15-m4", colorSlug: "sky-blue", name: "Apple MacBook Air 15 M4 16GB 256GB Sky Blue", category: "laptop", label: "Топ", price: 46999, oldPrice: 52999, image: "images/products/macbook-air-15-m4/sky-blue/photo-1.png" },
  { id: 21, variantGroup: "macbook-air-15-m4", colorSlug: "midnight", name: "Apple MacBook Air 15 M4 16GB 256GB Midnight", category: "laptop", label: "Топ", price: 46999, oldPrice: 52999, image: "images/products/macbook-air-15-m4/midnight/photo-1.png" },
  { id: 22, variantGroup: "macbook-air-15-m4", colorSlug: "silver", name: "Apple MacBook Air 15 M4 16GB 256GB Silver", category: "laptop", label: "Топ", price: 46999, oldPrice: 52999, image: "images/products/macbook-air-15-m4/silver/photo-1.png" },
  { id: 23, variantGroup: "macbook-air-15-m4", colorSlug: "starlight", name: "Apple MacBook Air 15 M4 16GB 256GB Starlight", category: "laptop", label: "Топ", price: 46999, oldPrice: 52999, image: "images/products/macbook-air-15-m4/starlight/photo-1.png" },
  { id: 30, variantGroup: "airpods-max-2", colorSlug: "orange", name: "Apple AirPods Max 2 Orange", category: "audio", label: "Новинка", price: 29699, oldPrice: 31999, image: "images/products/airpods-max-2/orange/photo-1.png" },
  { id: 31, variantGroup: "airpods-max-2", colorSlug: "midnight", name: "Apple AirPods Max 2 Midnight", category: "audio", label: "Новинка", price: 29699, oldPrice: 31999, image: "images/products/airpods-max-2/midnight/photo-1.png" },
  { id: 32, variantGroup: "airpods-max-2", colorSlug: "starlight", name: "Apple AirPods Max 2 Starlight", category: "audio", label: "Новинка", price: 29699, oldPrice: 31999, image: "images/products/airpods-max-2/starlight/photo-1.png" },
  { id: 33, variantGroup: "airpods-max-2", colorSlug: "purple", name: "Apple AirPods Max 2 Purple", category: "audio", label: "Новинка", price: 29699, oldPrice: 31999, image: "images/products/airpods-max-2/purple/photo-1.png" },
  { id: 34, variantGroup: "airpods-max-2", colorSlug: "blue", name: "Apple AirPods Max 2 Blue", category: "audio", label: "Новинка", price: 29699, oldPrice: 31999, image: "images/products/airpods-max-2/blue/photo-1.png" },
  { id: 14, variantGroup: "iphone-17-pro-max", colorSlug: "cosmic-orange", name: "Apple iPhone 17 Pro Max 256GB Cosmic Orange", category: "phone", label: "Новинка", price: 77999, oldPrice: 81999, image: "images/products/iphone-17-pro-max/cosmic-orange/photo-1.png" },
  { id: 15, variantGroup: "iphone-17-pro-max", colorSlug: "deep-blue", name: "Apple iPhone 17 Pro Max 256GB Deep Blue", category: "phone", label: "Новинка", price: 77999, oldPrice: 81999, image: "images/products/iphone-17-pro-max/deep-blue/photo-1.png" },
  { id: 16, variantGroup: "iphone-17-pro-max", colorSlug: "silver", name: "Apple iPhone 17 Pro Max 256GB Silver", category: "phone", label: "Новинка", price: 77999, oldPrice: 81999, image: "images/products/iphone-17-pro-max/silver/photo-1.png" },
  { id: 24, variantGroup: "macbook-pro-16-m4-pro", colorSlug: "space-black", name: "Apple MacBook Pro 16 M4 Pro 24GB 512GB Space Black", category: "laptop", label: "Новинка", price: 123999, oldPrice: 156199, image: "images/products/macbook-pro-16-m4-pro/space-black/photo-1.png" },
  { id: 25, variantGroup: "macbook-pro-16-m4-pro", colorSlug: "silver", name: "Apple MacBook Pro 16 M4 Pro 24GB 512GB Silver", category: "laptop", label: "Новинка", price: 123999, oldPrice: 156199, image: "images/products/macbook-pro-16-m4-pro/silver/photo-1.png" },
  { id: 35, variantGroup: "airpods-pro-3", colorSlug: "white", name: "Apple AirPods Pro 3 White", category: "audio", label: "Новинка", price: 10899, oldPrice: 13199, image: "images/products/airpods-pro-3/white/photo-1.png" },
  { id: 7, name: "Apple AirPods 4 with Active Noise Cancellation", category: "audio", label: "Хіт", price: 9199, oldPrice: 9899, image: "images/products/airpods-4-anc/white/photo-1.png" },
  { id: 40, variantGroup: "apple-watch-ultra-3", colorSlug: "natural-titanium", name: "Apple Watch Ultra 3 GPS + LTE 49mm Natural Titanium Case with Ocean Band", category: "watch", label: "Новинка", price: 37999, oldPrice: 40949, image: "images/products/apple-watch-ultra-3/natural-titanium/photo-1.png" },
  { id: 41, variantGroup: "apple-watch-ultra-3", colorSlug: "black-titanium", name: "Apple Watch Ultra 3 GPS + LTE 49mm Black Titanium Case with Black Ocean Band", category: "watch", label: "Новинка", price: 37999, oldPrice: 40949, image: "images/products/apple-watch-ultra-3/black-titanium/photo-1.png" },
  { id: 42, variantGroup: "apple-watch-series-11", colorSlug: "rose-gold", name: "Apple Watch Series 11 GPS 46mm Rose Gold Aluminum Case with Sport Band", category: "watch", label: "Новинка", price: 18399, oldPrice: 19999, image: "images/products/apple-watch-series-11/rose-gold/photo-1.png" },
  { id: 43, variantGroup: "apple-watch-series-11", colorSlug: "jet-black", name: "Apple Watch Series 11 GPS 46mm Jet Black Aluminum Case with Black Sport Band", category: "watch", label: "Новинка", price: 18399, oldPrice: 19999, image: "images/products/apple-watch-series-11/jet-black/photo-1.png" },
  { id: 44, variantGroup: "apple-watch-series-11", colorSlug: "silver", name: "Apple Watch Series 11 GPS 46mm Silver Aluminum Case with Sport Band", category: "watch", label: "Новинка", price: 18399, oldPrice: 19999, image: "images/products/apple-watch-series-11/silver/photo-1.png" },
  { id: 90, variantGroup: "ipad-air-11-m4", colorSlug: "starlight", name: "Apple iPad Air 11 M4 128GB Wi-Fi Starlight", category: "tablet", label: "Новинка", price: 28999, oldPrice: 31999, image: "images/products/ipad-air-11-m4/starlight/photo-1.png" },
  { id: 91, variantGroup: "ipad-air-11-m4", colorSlug: "purple", name: "Apple iPad Air 11 M4 128GB Wi-Fi Purple", category: "tablet", label: "Новинка", price: 28999, oldPrice: 31999, image: "images/products/ipad-air-11-m4/purple/photo-1.png" },
  { id: 92, variantGroup: "ipad-air-11-m4", colorSlug: "space-gray", name: "Apple iPad Air 11 M4 128GB Wi-Fi Space Gray", category: "tablet", label: "Новинка", price: 28999, oldPrice: 31999, image: "images/products/ipad-air-11-m4/space-gray/photo-1.png" },
  { id: 9, variantGroup: "ipad-air-11-m4", colorSlug: "blue", name: "Apple iPad Air 11 M4 128GB Wi-Fi Blue", category: "tablet", label: "Новинка", price: 28999, oldPrice: 31999, image: "images/products/ipad-air-11-m4/blue/photo-1.png" },
  { id: 93, variantGroup: "ipad-pro-11-m5", colorSlug: "space-black", name: "Apple iPad Pro 11 M5 2025 256GB Wi-Fi Space Black", category: "tablet", label: "Новинка", price: 45199, oldPrice: 48399, image: "images/products/ipad-pro-11-m5/space-black/photo-1.png" },
  { id: 94, variantGroup: "ipad-pro-11-m5", colorSlug: "silver", name: "Apple iPad Pro 11 M5 2025 256GB Wi-Fi Silver", category: "tablet", label: "Новинка", price: 45199, oldPrice: 48399, image: "images/products/ipad-pro-11-m5/silver/photo-1.png" },
  { id: 95, variantGroup: "apple-pencil-pro", colorSlug: "white", name: "Apple Pencil Pro 2024", category: "accessory", label: "Apple", price: 6199, oldPrice: 7999, image: "images/products/apple-pencil-pro-white/photo-1.png" },
  { id: 10, variantGroup: "magic-keyboard-touch-id", colorSlug: "white", name: "Клавіатура Apple Magic Keyboard with Touch ID for Mac models with Apple silicon USB-C 2024", category: "accessory", label: "Apple", price: 7399, oldPrice: 7949, image: "images/products/magic-keyboard-touch-id-white/photo-1.png" }
];

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const categoryGrid = document.querySelector("#categoryGrid");
const emptyState = document.querySelector("#emptyState");
const cartDrawer = document.querySelector("#cartDrawer");
const favoritesDrawer = document.querySelector("#favoritesDrawer");
const favoritesItems = document.querySelector("#favoritesItems");
const favoritesCount = document.querySelector("#favoritesCount");
const overlay = document.querySelector("#overlay");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const megaCatalog = document.querySelector("#megaCatalog");
const megaProducts = document.querySelector("#megaProducts");
const catalogOverlay = document.querySelector("#catalogOverlay");

const themeToggle = document.querySelector("#themeToggle");
function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Увімкнути світлу тему" : "Увімкнути темну тему");
}
const savedTheme = localStorage.getItem("mobphone-theme") || "light";
applyTheme(savedTheme);
themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("mobphone-theme", nextTheme);
  applyTheme(nextTheme);
});

let activeCategory = "all";
let cart = JSON.parse(localStorage.getItem("mobphone-cart") || "[]");
let favoriteIds = JSON.parse(localStorage.getItem("mobphone-favorites") || "[]").map(Number);

const formatPrice = value => `${new Intl.NumberFormat("uk-UA").format(value)} ₴`;

const searchAliases = {
  phone: "ай айфон айфони iphone iphones смартфон смартфони телефон телефони мобільний мобільні про промакс про макс",
  laptop: "мак макбук макбуки mac macbook macbooks ноутбук ноутбуки ноут лептоп компютер компютери air pro еір",
  audio: "аір аірподс ейрподс airpods airpod навушники наушники аудіо вакуумні про макс max pro",
  watch: "вотч еплвотч applewatch apple watch годинник годинники смарт годинник часы",
  tablet: "айпад айпеди ipad ipads планшет планшети",
  accessory: "аксесуар аксесуари зарядка кабель клавіатура keyboard чохол кейс"
};
const keyboardLayoutMap = {
  q: "й", w: "ц", e: "у", r: "к", t: "е", y: "н", u: "г", i: "ш", o: "щ", p: "з", "[": "х", "]": "ї",
  a: "ф", s: "і", d: "в", f: "а", g: "п", h: "р", j: "о", k: "л", l: "д", ";": "ж", "\'": "є",
  z: "я", x: "ч", c: "с", v: "м", b: "и", n: "т", m: "ь", ",": "б", ".": "ю"
};
const switchKeyboardLayout = value => value.split("").map(char => keyboardLayoutMap[char] || keyboardLayoutMap[char.toLowerCase()] || char).join("");
const normalizeSearch = value => value
  .toLowerCase()
  .replace(/[’']/g, "")
  .replace(/ґ/g, "г")
  .replace(/ё/g, "е")
  .replace(/є/g, "е")
  .replace(/і/g, "и")
  .replace(/ї/g, "и")
  .replace(/й/g, "и")
  .replace(/[^a-zа-я0-9]+/g, " ")
  .trim();
const productSearchText = product => normalizeSearch(`${product.name} ${product.variantGroup || ""} ${product.colorSlug || ""} ${product.label || ""} ${searchAliases[product.category] || ""} apple епл`);

function renderProducts() {
  const rawQuery = searchInput.value.trim();
  const query = normalizeSearch(rawQuery);
  const switchedQuery = normalizeSearch(switchKeyboardLayout(rawQuery));
  const visible = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const searchText = productSearchText(product);
    return matchesCategory && (!query || searchText.includes(query) || (switchedQuery && searchText.includes(switchedQuery)));
  });

  productGrid.innerHTML = visible.map(product => `
    <article class="product-card" data-product-id="${product.id}" tabindex="0" aria-label="Відкрити ${product.name}">
      <span class="badge">${product.label}</span>
      <button class="favorite ${favoriteIds.includes(product.id) ? "active" : ""}" type="button" data-favorite-id="${product.id}" aria-label="${favoriteIds.includes(product.id) ? "Видалити з обраного" : "Додати в обране"}">${favoriteIds.includes(product.id) ? "♥" : "♡"}</button>
      <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='images/hero-iphone.png'"></div>
      <div class="product-info">
        <small>Apple</small>
        <h3>${product.name}</h3>
        <div class="product-bottom">
          <div class="price">
            <span class="old-price">${formatPrice(product.oldPrice)}</span>
            ${formatPrice(product.price)}
          </div>
          <button class="add-button" type="button" data-id="${product.id}" aria-label="Додати в кошик">+</button>
        </div>
      </div>
    </article>
  `).join("");

  emptyState.style.display = visible.length ? "none" : "block";
}

function saveFavorites() {
  localStorage.setItem("mobphone-favorites", JSON.stringify(favoriteIds));
}

function renderFavorites() {
  const favorites = favoriteIds.map(id => products.find(product => product.id === id)).filter(Boolean);
  favoritesCount.textContent = favorites.length;
  if (!favorites.length) {
    favoritesItems.innerHTML = '<p class="cart-empty">В обраному поки порожньо.<br>Натисни сердечко біля товару.</p>';
    return;
  }
  favoritesItems.innerHTML = favorites.map(item => `<div class="cart-item favorite-item" data-favorite-product="${item.id}">
    <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/hero-iphone.png'">
    <div><strong>${item.name}</strong>${item.details ? `<small>${item.details}</small>` : ""}<span>${formatPrice(item.price)}</span></div>
    <button type="button" data-remove-favorite="${item.id}" aria-label="Видалити з обраного">×</button>
  </div>`).join("");
}

function toggleFavorite(productId) {
  favoriteIds = favoriteIds.includes(productId) ? favoriteIds.filter(id => id !== productId) : [...favoriteIds, productId];
  saveFavorites();
  renderFavorites();
  renderProducts();
}

function toggleFavorites(open) {
  if (open) toggleCart(false);
  favoritesDrawer.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  favoritesDrawer.setAttribute("aria-hidden", String(!open));
}

function saveCart() {
  localStorage.setItem("mobphone-cart", JSON.stringify(cart));
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartTotal.textContent = formatPrice(cart.reduce((sum, item) => sum + item.price, 0));

  if (!cart.length) {
    cartItems.innerHTML = '<p class="cart-empty">Кошик поки порожній.<br>Саме час це виправити.</p>';
    return;
  }

  cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='images/hero-iphone.png'">
      <div><strong>${item.name}</strong>${item.details ? `<small>${item.details}</small>` : ""}<span>${formatPrice(item.price)}</span></div>
      <button type="button" data-remove="${index}" aria-label="Видалити">×</button>
    </div>
  `).join("");
}

function toggleCart(open) {
  cartDrawer.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  cartDrawer.setAttribute("aria-hidden", String(!open));
}

categoryGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  document.querySelectorAll("[data-category]").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  activeCategory = button.dataset.category;
  renderProducts();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
});

productGrid.addEventListener("click", event => {
  const addButton = event.target.closest("[data-id]");
  const favorite = event.target.closest(".favorite");
  if (favorite) {
    toggleFavorite(Number(favorite.dataset.favoriteId));
    return;
  }
  if (!addButton) {
    const card = event.target.closest("[data-product-id]");
    if (card) openProductPage(card.dataset.productId);
    return;
  }
  const product = products.find(item => item.id === Number(addButton.dataset.id));
  cart.push(product);
  saveCart();
  renderCart();
  toggleCart(true);
});

function openProductPage(productId) {
  const url = new URL("product.html", location.href);
  url.searchParams.set("id", productId);
  url.searchParams.set("from", activeCategory);
  window.location.href = url;
}

productGrid.addEventListener("keydown", event => {
  if (event.key !== "Enter") return;
  const card = event.target.closest("[data-product-id]");
  if (card) openProductPage(card.dataset.productId);
});

favoritesItems.addEventListener("click", event => {
  const removeButton = event.target.closest("[data-remove-favorite]");
  if (removeButton) { toggleFavorite(Number(removeButton.dataset.removeFavorite)); return; }
  const item = event.target.closest("[data-favorite-product]");
  if (item) openProductPage(item.dataset.favoriteProduct);
});

cartItems.addEventListener("click", event => {
  const removeButton = event.target.closest("[data-remove]");
  if (!removeButton) return;
  cart.splice(Number(removeButton.dataset.remove), 1);
  saveCart();
  renderCart();
});

function renderMegaProducts(category = "all") {
  const visible = products.filter(product => category === "all" || product.category === category);
  megaProducts.innerHTML = visible.map(product => `<article class="mega-product" data-mega-id="${product.id}"><img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='images/hero-iphone.png'"><small>Apple</small><strong>${product.name}</strong><em>${formatPrice(product.price)}</em></article>`).join("");
}
function toggleCatalog(open) {
  megaCatalog.classList.toggle("open", open);
  catalogOverlay.classList.toggle("open", open);
  megaCatalog.setAttribute("aria-hidden", String(!open));
}
document.querySelector("#catalogButton").addEventListener("click", () => { renderMegaProducts(); toggleCatalog(!megaCatalog.classList.contains("open")); });
document.querySelector("#closeCatalog").addEventListener("click", () => toggleCatalog(false));
catalogOverlay.addEventListener("click", () => toggleCatalog(false));
megaCatalog.addEventListener("click", event => {
  const category = event.target.closest("[data-mega-category]");
  const product = event.target.closest("[data-mega-id]");
  if (category) {
    megaCatalog.querySelectorAll("[data-mega-category]").forEach(item => item.classList.remove("active"));
    category.classList.add("active");
    renderMegaProducts(category.dataset.megaCategory);
  }
  if (product) openProductPage(product.dataset.megaId);
});

document.querySelectorAll("[data-footer-category]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    activeCategory = link.dataset.footerCategory;
    searchInput.value = "";
    document.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("active", item.dataset.category === activeCategory));
    renderProducts();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector("#showAllButton").addEventListener("click", () => {
  activeCategory = "all";
  searchInput.value = "";
  document.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("active", item.dataset.category === "all"));
  renderProducts();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim()) {
    activeCategory = "all";
    document.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("active", item.dataset.category === "all"));
    renderProducts();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  renderProducts();
});
document.querySelector("#favoritesButton").addEventListener("click", () => toggleFavorites(true));
document.querySelector("#closeFavorites").addEventListener("click", () => toggleFavorites(false));
document.querySelector("#cartButton").addEventListener("click", () => { toggleFavorites(false); toggleCart(true); });
document.querySelector("#closeCart").addEventListener("click", () => toggleCart(false));
overlay.addEventListener("click", () => { toggleCart(false); toggleFavorites(false); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { toggleCart(false); toggleFavorites(false); toggleCatalog(false); }
});

function updateCategoryCounts() {
  document.querySelectorAll("[data-count-category]").forEach(element => {
    const category = element.dataset.countCategory;
    const count = category === "all" ? products.length : products.filter(product => product.category === category).length;
    element.textContent = `${count} ${count === 1 ? "позиція" : count < 5 ? "позиції" : "позицій"}`;
  });
}
updateCategoryCounts();
renderFavorites();
renderCart();
renderProducts();
if (location.hash === "#cart") toggleCart(true);
if (location.hash === "#catalog") { renderMegaProducts(); toggleCatalog(true); }
const initialParams = new URLSearchParams(location.search);
const initialCategory = initialParams.get("category");
if (initialCategory && ["all", ...Object.keys(searchAliases)].includes(initialCategory)) {
  activeCategory = initialCategory;
  searchInput.value = "";
  document.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("active", item.dataset.category === activeCategory));
  renderProducts();
  document.querySelector("#products").scrollIntoView();
}
const initialSearch = initialParams.get("search");
if (initialSearch) { searchInput.value = initialSearch; renderProducts(); document.querySelector("#products").scrollIntoView(); }


(() => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const playTokens = new WeakMap();
  const visibleSections = new WeakSet();

  function resetLine(line) {
    line.querySelectorAll("[data-type-text]").forEach(part => {
      part.textContent = "";
    });
    line.classList.remove("typing-done");
  }

  async function typeLine(line, token) {
    const parts = Array.from(line.querySelectorAll("[data-type-text]"));
    if (!parts.length) return;
    const speed = Number(line.dataset.typeSpeed) || 28;
    resetLine(line);
    line.classList.add("typing-active");

    for (const part of parts) {
      const text = part.dataset.typeText || "";
      for (const char of text) {
        if (playTokens.get(token.section) !== token.id) return;
        part.textContent += char;
        await wait(char === " " ? speed * .35 : speed);
      }
    }

    line.classList.remove("typing-active");
    line.classList.add("typing-done");
  }

  function restartMotion(section) {
    section.classList.remove("is-animated", "is-burst");
    section.offsetHeight;
    section.classList.add("is-animated", "is-burst");
    window.setTimeout(() => section.classList.remove("is-burst"), 900);
  }

  async function playSection(section) {
    if (!section) return;
    const token = { section, id: (playTokens.get(section) || 0) + 1 };
    playTokens.set(section, token.id);
    restartMotion(section);

    const lines = Array.from(section.querySelectorAll("[data-type-sequence]"));
    lines.forEach(resetLine);
    for (const line of lines) {
      if (playTokens.get(section) !== token.id) return;
      await typeLine(line, token);
      await wait(120);
    }
  }

  function initTypingAnimations() {
    const sections = Array.from(document.querySelectorAll("[data-animate-section]"));
    const hero = document.querySelector('[data-animate-section="hero"]');
    requestAnimationFrame(() => playSection(hero));

    sections.forEach(section => {
      section.addEventListener("pointerenter", () => playSection(section));
      section.addEventListener("click", () => playSection(section));
      section.addEventListener("touchstart", () => playSection(section), { passive: true });
      section.addEventListener("focusin", () => playSection(section));
    });

    if (!("IntersectionObserver" in window)) {
      sections.forEach(section => playSection(section));
      return;
    }

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!visibleSections.has(entry.target)) playSection(entry.target);
          visibleSections.add(entry.target);
          return;
        }
        visibleSections.delete(entry.target);
      });
    }, { threshold: .38 });

    sections.forEach(section => sectionObserver.observe(section));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTypingAnimations, { once: true });
  } else {
    initTypingAnimations();
  }
})();
