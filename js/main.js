// Overlay navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navOverlay = document.querySelector('.nav-overlay');

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('active');
  navOverlay.classList.toggle('open', isOpen);
  navOverlay.setAttribute('aria-hidden', !isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close overlay when a nav link is clicked
navOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navOverlay.classList.remove('open');
    navOverlay.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Scroll-triggered fade-in
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// Fetch Substack RSS feed and update post lists
const FEED_URL = 'https://www.futurefilmcoalition.org/feed';
const TAG_KEYWORDS = {
  merger: 'Advocacy', action: 'Advocacy', advocate: 'Advocacy',
  policy: 'Policy', regulation: 'Policy', antitrust: 'Policy', acquisition: 'Policy',
  event: 'Event', register: 'Event', session: 'Event', webinar: 'Event',
  digest: 'News Digest', roundup: 'News Digest',
  voices: 'Coalition', coalition: 'Coalition', collective: 'Coalition',
  community: 'Community', filmmaker: 'Community',
  streaming: 'Industry', distribution: 'Industry', netflix: 'Industry',
};

function deriveTag(title, categories) {
  const text = (title + ' ' + categories.join(' ')).toLowerCase();
  for (const [keyword, tag] of Object.entries(TAG_KEYWORDS)) {
    if (text.includes(keyword)) return tag;
  }
  return 'News';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function renderPosts(posts, container, limit) {
  const items = posts.slice(0, limit);
  container.innerHTML = items.map(post => `
    <li class="post-item">
      <a href="${post.link}" target="_blank" rel="noopener">
        <span class="post-tag">${post.tag}</span>
        <h3 class="post-title">${post.title}</h3>
        <time class="post-date">${post.date}</time>
      </a>
    </li>
  `).join('');
}

async function loadSubstackPosts() {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return;
    const text = await res.text();
    const doc = new DOMParser().parseFromString(text, 'application/xml');
    if (doc.querySelector('parsererror')) return;

    const items = doc.querySelectorAll('item');
    const posts = Array.from(items).map(item => {
      const title = item.querySelector('title')?.textContent || '';
      const link = item.querySelector('link')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      const categories = Array.from(item.querySelectorAll('category')).map(c => c.textContent);
      return {
        title,
        link,
        date: formatDate(pubDate),
        tag: deriveTag(title, categories),
      };
    });

    if (posts.length === 0) return;

    const heroList = document.getElementById('hero-posts');
    const newsList = document.getElementById('news-posts');
    if (heroList) renderPosts(posts, heroList, 4);
    if (newsList) renderPosts(posts, newsList, 6);
  } catch (e) {
    // Fallback to hardcoded posts in HTML
  }
}

loadSubstackPosts();
