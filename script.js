document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

// ==================== 全局状态 ====================
let currentLightboxIndex = 0;
let currentDisplayData = [];
let toastTimeout = null;

// ==================== 数据层 ====================
const recommendationsData = [
  {
    id: 1,
    title: '千与千寻',
    tag: '动画电影',
    meta: '宫崎骏 / 日本 / 奇幻',
    description: '少女千寻意外闯入神灵世界，为了拯救变成猪的父母，她在汤屋努力工作，经历成长与蜕变，最终找回自我。',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600&fit=crop',
    rating: 9.4,
    likes: 128
  },
  {
    id: 2,
    title: '龙猫',
    tag: '动画电影',
    meta: '宫崎骏 / 日本 / 治愈',
    description: '小月和小梅跟随父亲搬到乡下，在神奇的森林中遇见了龙猫，展开了一段充满童趣与温暖的奇妙冒险。',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop',
    rating: 9.2,
    likes: 115
  },
  {
    id: 3,
    title: '星际穿越',
    tag: '科幻电影',
    meta: '克里斯托弗·诺兰 / 美国 / 科幻',
    description: '在地球面临末日危机时，前飞行员库珀穿越虫洞寻找新家园，跨越时空的父女情深令人动容。',
    image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?w=800&h=600&fit=crop',
    rating: 9.3,
    likes: 156
  },
  {
    id: 4,
    title: '黑客帝国',
    tag: '科幻电影',
    meta: '沃卓斯基姐妹 / 美国 / 动作',
    description: '黑客尼奥发现现实世界由人工智能控制，他加入反抗军，在虚拟与现实之间展开一场改变命运的战争。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    rating: 9.0,
    likes: 134
  },
  {
    id: 5,
    title: '进击的巨人',
    tag: '动漫',
    meta: '谏山创 / 日本 / 热血',
    description: '人类筑起高墙抵御巨人，少年艾伦目睹家园被毁后立下誓言，誓要驱逐所有巨人，揭开世界的真相。',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=600&fit=crop',
    rating: 9.5,
    likes: 189
  },
  {
    id: 6,
    title: '鬼灭之刃',
    tag: '动漫',
    meta: '吾峠呼世晴 / 日本 / 热血',
    description: '少年炭治郎为拯救变成鬼的妹妹，加入鬼杀队，在残酷的战斗中不断成长，谱写人与鬼的悲歌。',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
    rating: 9.1,
    likes: 167
  },
  {
    id: 7,
    title: '盗梦空间',
    tag: '悬疑电影',
    meta: '克里斯托弗·诺兰 / 美国 / 悬疑',
    description: '造梦师柯布接受一项不可能的任务：在他人潜意识中植入想法，层层梦境交织，虚实难辨。',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop',
    rating: 9.2,
    likes: 145
  },
  {
    id: 8,
    title: '看不见的客人',
    tag: '悬疑电影',
    meta: '奥里奥尔·保罗 / 西班牙 / 悬疑',
    description: '事业有成的艾德里安被卷入一桩谋杀案，为了洗清嫌疑，他与金牌律师展开了一场惊心动魄的博弈。',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop',
    rating: 8.8,
    likes: 98
  },
  {
    id: 9,
    title: '你的名字',
    tag: '动画电影',
    meta: '新海诚 / 日本 / 爱情',
    description: '男女高中生在梦中互换身体，跨越时空寻找彼此，彗星划过的那天，命运悄然改变。',
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&h=600&fit=crop',
    rating: 8.9,
    likes: 142
  },
  {
    id: 10,
    title: '银翼杀手2049',
    tag: '科幻电影',
    meta: '丹尼斯·维伦纽瓦 / 美国 / 科幻',
    description: '复制人K在追查一起神秘案件时，发现了可能动摇社会秩序的惊天秘密，踏上了寻找真相的旅程。',
    image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&h=600&fit=crop',
    rating: 8.7,
    likes: 112
  },
  {
    id: 11,
    title: '死亡笔记',
    tag: '动漫',
    meta: '大场鸫 / 日本 / 智斗',
    description: '天才少年夜神月捡到一本可以杀人的笔记本，与神秘侦探L展开了一场高智商的生死对决。',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop',
    rating: 9.0,
    likes: 154
  },
  {
    id: 12,
    title: '七宗罪',
    tag: '悬疑电影',
    meta: '大卫·芬奇 / 美国 / 犯罪',
    description: '老练警探萨默塞特与新人米尔斯联手追捕一名以七宗罪为蓝本连环杀人的凶手，结局令人震撼。',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop',
    rating: 8.8,
    likes: 105
  }
];

// ==================== localStorage 工具 ====================
function getStorageItem(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn('Storage save failed:', err);
  }
}

// ==================== 点赞功能 ====================
function getLikesState() {
  return getStorageItem('wallLikes', {});
}

function getLikeCounts() {
  return getStorageItem('wallLikeCounts', {});
}

function getLikeCount(id, defaultLikes) {
  const counts = getLikeCounts();
  return counts.hasOwnProperty(id) ? counts[id] : defaultLikes;
}

function isLiked(id) {
  return !!getLikesState()[id];
}

function toggleLike(id) {
  const state = getLikesState();
  const counts = getLikeCounts();
  const item = recommendationsData.find(d => d.id === id);
  const base = item ? item.likes : 0;

  if (!counts.hasOwnProperty(id)) counts[id] = base;

  if (state[id]) {
    state[id] = false;
    counts[id]--;
  } else {
    state[id] = true;
    counts[id]++;
  }

  setStorageItem('wallLikes', state);
  setStorageItem('wallLikeCounts', counts);
}

function updateLikeButton(btn) {
  const id = Number(btn.dataset.id);
  const liked = isLiked(id);
  const item = recommendationsData.find(d => d.id === id);
  const count = getLikeCount(id, item ? item.likes : 0);

  btn.classList.toggle('liked', liked);
  const icon = btn.querySelector('.like-icon');
  const countEl = btn.querySelector('.like-count');
  if (icon) icon.innerHTML = liked ? '&#10084;' : '&#9825;';
  if (countEl) countEl.textContent = count;
}

function handleLikeClick(e) {
  const btn = e.currentTarget;
  const id = Number(btn.dataset.id);
  toggleLike(id);
  updateLikeButton(btn);
}

function attachLikeListeners() {
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', handleLikeClick);
  });
}

function initLikeStorage() {
  const counts = getLikeCounts();
  let changed = false;
  recommendationsData.forEach(item => {
    if (!counts.hasOwnProperty(item.id)) {
      counts[item.id] = item.likes;
      changed = true;
    }
  });
  if (changed) setStorageItem('wallLikeCounts', counts);
}

// ==================== 内容渲染与分类筛选 ====================
function createCardHtml(item, index) {
  const count = getLikeCount(item.id, item.likes);
  const liked = isLiked(item.id) ? 'liked' : '';
  const icon = isLiked(item.id) ? '&#10084;' : '&#9825;';

  return `
    <div class="card">
      <div class="card-image">
        <img data-src="${item.image}" data-index="${index}" alt="${item.title}" loading="lazy">
      </div>
      <div class="card-content">
        <span class="card-tag">${item.tag}</span>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-meta">${item.meta}</p>
        <p class="card-description">${item.description}</p>
        <div class="card-rating">
          <span class="rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span class="rating-score">${item.rating}</span>
        </div>
        <div class="card-actions">
          <button class="like-btn ${liked}" data-id="${item.id}" aria-label="点赞">
            <span class="like-icon">${icon}</span>
            <span class="like-count">${count}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderCards(data) {
  const grid = document.getElementById('card-grid');
  if (!grid) return;

  currentDisplayData = data;
  grid.innerHTML = data.map((item, index) => createCardHtml(item, index)).join('');

  attachLikeListeners();
  attachImageClickListeners();
  initLazyLoad();
  initCardAnimations();
}

function attachImageClickListeners() {
  document.querySelectorAll('.card-image img').forEach(img => {
    img.addEventListener('click', () => {
      const index = Number(img.dataset.index);
      openLightbox(index);
    });
  });
}

function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const filtered = filter === 'all'
        ? recommendationsData
        : recommendationsData.filter(item => item.tag === filter);
      renderCards(filtered);
    });
  });
}

// ==================== 图片懒加载 ====================
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  if (!images.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;
        if (src) {
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.3s ease';
          img.src = src;
          img.removeAttribute('data-src');
          img.addEventListener('load', function onLoad() {
            img.classList.add('loaded');
            img.style.opacity = '1';
            img.removeEventListener('load', onLoad);
          });
          img.addEventListener('error', function onError() {
            img.alt = '图片加载失败';
            img.style.opacity = '1';
            img.removeEventListener('error', onError);
          });
        }
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '0px 0px 50px 0px' });

  images.forEach(img => observer.observe(img));
}

// ==================== 卡片入场动画 ====================
function initCardAnimations() {
  const cards = document.querySelectorAll('.card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

// ==================== 图片 Lightbox ====================
function openLightbox(index) {
  currentLightboxIndex = index;
  showImage(index);
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.add('active');
  document.addEventListener('keydown', handleLightboxKey);
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('active');
  document.removeEventListener('keydown', handleLightboxKey);
}

function showImage(index) {
  const img = document.getElementById('lightbox-img');
  if (!img || !currentDisplayData[index]) return;
  img.src = currentDisplayData[index].image;
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentDisplayData.length) % currentDisplayData.length;
  showImage(currentLightboxIndex);
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentDisplayData.length;
  showImage(currentLightboxIndex);
}

function handleLightboxKey(e) {
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') prevLightboxImage();
  else if (e.key === 'ArrowRight') nextLightboxImage();
}

function initLightboxEvents() {
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev')?.addEventListener('click', prevLightboxImage);
  document.getElementById('lightbox-next')?.addEventListener('click', nextLightboxImage);
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox-overlay')) closeLightbox();
  });
}

// ==================== 留言板系统 ====================
function getMessages() {
  return getStorageItem('wallMessages', []);
}

function saveMessages(messages) {
  setStorageItem('wallMessages', messages);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatTime(timestamp) {
  const d = new Date(timestamp);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function createMessageHtml(msg) {
  return `
    <div class="guestbook-item">
      <div class="guestbook-name">${escapeHtml(msg.name)}</div>
      <div class="guestbook-text">${escapeHtml(msg.content)}</div>
      <div class="guestbook-time">${formatTime(msg.time)}</div>
    </div>
  `;
}

function renderMessages() {
  const list = document.getElementById('guestbook-list');
  if (!list) return;
  const messages = getMessages().slice().reverse();
  list.innerHTML = messages.map(createMessageHtml).join('');
}

function addMessage(name, content) {
  const messages = getMessages();
  messages.push({ name, content, time: Date.now() });
  saveMessages(messages);
  renderMessages();
}

function handleSubmitMessage() {
  const nameInput = document.getElementById('guest-name');
  const contentInput = document.getElementById('guest-content');
  const name = (nameInput?.value || '').trim();
  const content = (contentInput?.value || '').trim();

  if (!name || !content) {
    showToast('请填写昵称和留言内容');
    return;
  }

  addMessage(name, content);
  nameInput.value = '';
  contentInput.value = '';
  showToast('留言提交成功');
}

function initGuestbookEvents() {
  document.getElementById('submit-message')?.addEventListener('click', handleSubmitMessage);
}

// ==================== 返回顶部与页面进度条 ====================
function updateProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  bar.style.width = percent + '%';
}

function updateBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > 300) btn.classList.add('visible');
  else btn.classList.remove('visible');
}

function handleScroll() {
  updateProgressBar();
  updateBackToTop();
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initScrollEffects() {
  window.addEventListener('scroll', handleScroll);
  document.getElementById('back-to-top')?.addEventListener('click', scrollToTop);
  handleScroll();
}

// ==================== 分享与 Toast ====================
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2500);
}

async function sharePage() {
  const url = window.location.href;
  const title = document.title;
  try {
    if (navigator.share) {
      await navigator.share({ title, url });
      showToast('分享成功');
      return;
    }
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      showToast('链接已复制');
      return;
    }
    showToast('您的浏览器不支持分享功能');
  } catch {
    showToast('分享失败');
  }
}

function initShareButton() {
  document.getElementById('share-btn')?.addEventListener('click', sharePage);
}

// ==================== 应用初始化 ====================
function initApp() {
  initLikeStorage();
  renderCards(recommendationsData);
  renderMessages();
  initFilterButtons();
  initLightboxEvents();
  initGuestbookEvents();
  initShareButton();
  initScrollEffects();
}
