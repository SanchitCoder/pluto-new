import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import { FadeInSection } from '../components/FadeInSection';
import { BLOG_POSTS } from '../data/blogPosts';

const ALL = 'All';

/** Working /blog index (previously missing — every post was reachable only via the sitemap). */
const BlogIndexPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const categories = useMemo(() => {
    const set = new Set<string>();
    BLOG_POSTS.forEach((post) => set.add(post.category));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const posts = useMemo(
    () => (activeCategory === ALL ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />

      <FadeInSection className="bg-gradient-to-br from-luxury-darkBlue via-primary-navy to-luxury-darkBlue py-20 text-white sm:py-28">
        <Container>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">Pluto Travels Blog</p>
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">Travel Insights &amp; Guides</h1>
          <p className="max-w-2xl text-lg text-white/80">
            Practical guides on corporate travel policy, visas, MICE planning and luxury holidays — from the Pluto
            Travels team in Dubai.
          </p>
        </Container>
      </FadeInSection>

      <FadeInSection className="py-12 sm:py-16">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary-coral text-white'
                    : 'bg-white text-luxury-darkBlue shadow-sm hover:bg-primary-coral/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((blog) => (
              <article
                key={blog.id}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
                onClick={() => navigate(`/blog/${blog.id}`)}
                onKeyDown={(e) => e.key === 'Enter' && navigate(`/blog/${blog.id}`)}
                role="link"
                tabIndex={0}
              >
                <div className="relative h-44 shrink-0 overflow-hidden sm:h-48">
                  <img
                    decoding="async"
                    loading="lazy"
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary-coral px-3 py-1 text-xs font-semibold text-white">
                    {blog.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="mb-2 line-clamp-2 text-lg font-bold text-luxury-darkBlue transition-colors group-hover:text-primary-coral sm:text-xl">
                    {blog.title}
                  </h2>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600 sm:text-base">{blog.excerpt}</p>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:text-sm">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blog.date}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-teal transition-all group-hover:gap-3">
                    Read More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="py-12 text-center text-gray-500">No posts in this category yet.</p>
          )}
        </Container>
      </FadeInSection>

      <LunaAIChatButton />
      <MobileBottomCTA />
      <Footer />
    </div>
  );
};

export default BlogIndexPage;
