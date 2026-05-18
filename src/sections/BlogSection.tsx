import React, { useCallback } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import ContentShuffleStack from '../components/ContentShuffleStack';
import { FadeInSection } from '../components/FadeInSection';

export type BlogCardData = {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
};

const BLOG_INTERVAL_MS = 2500;

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  const blogs: BlogCardData[] = [
    {
      id: 'why-uae-companies-switching-corporate-travel-management-2026',
      image: '/corporate-travel-management-card.png',
      title: 'Why Companies in the UAE Are Switching to Corporate Travel Management in 2026',
      excerpt:
        'Discover why businesses in Dubai, Abu Dhabi, and across the UAE are moving from DIY booking to corporate travel management—to cut hidden costs, save time, and gain control over travel spend.',
      author: 'Corporate Team',
      date: 'May 18, 2026',
      category: 'Corporate Travel',
    },
    {
      id: 'top-european-destinations-schengen-visa-guide-pluto-travels',
      image: '/blog-european-schengen-destinations.png',
      title:
        'Top European Destinations to Explore with a Schengen Visa – Your Ultimate Guide from Pluto Travels',
      excerpt:
        'UAE residents can explore multiple European countries on one trip with a Schengen visa. Discover Italy, Greece, Spain, Austria, and hidden gems—with holiday packages and visa help from Pluto Travels.',
      author: 'Travel Team',
      date: 'Apr 8, 2026',
      category: 'Visa & Travel',
    },
    {
      id: 'uae-resilience-in-action-navigating-regional-challenges',
      image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=600&q=80',
      title: 'UAE Resilience in Action: How Government, Community, and Businesses Navigate Regional Challenges',
      excerpt:
        'How the UAE government, private sector, and community worked together to protect residents, support stranded travelers, and maintain national stability during regional uncertainty.',
      author: 'Corporate Team',
      date: 'Mar 2, 2026',
      category: 'Travel Insights',
    },
    {
      id: 'experiencing-ramadan-in-the-uae-customs-tips-travel-guide',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
      title: 'Experiencing Ramadan in the UAE: Customs, Tips, and Travel Guide',
      excerpt:
        'A guide to Ramadan in the UAE—local customs, fasting etiquette, Iftar and Suhoor, dress codes, and practical tips for a respectful and enjoyable visit.',
      author: 'Travel Team',
      date: 'Mar 2, 2026',
      category: 'Travel Guide',
    },
    {
      id: 'top-visa-free-visa-on-arrival-destinations-uae-residents-2026',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
      title: 'Top Visa Free and Visa on Arrival Destinations for UAE Residents in 2026',
      excerpt:
        'A guide for UAE residents on visa-free entry, visa on arrival, and e-visa options—Maldives, Georgia, Thailand, Sri Lanka, Oman, and more for easy travel in 2026.',
      author: 'Travel Team',
      date: 'Mar 2, 2026',
      category: 'Visa & Travel',
    },
    {
      id: 'ultimate-travel-guide-best-things-to-do-dubai-2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
      title: 'Ultimate Travel Guide: Best Things to Do in Dubai in 2026',
      excerpt:
        'A comprehensive guide to Dubai’s top attractions, beaches, desert safaris, culture, shopping, dining, and events—everything you need to plan the perfect trip.',
      author: 'Travel Team',
      date: 'Mar 2, 2026',
      category: 'Destinations',
    },
    {
      id: 'eid-al-fitr-travel-top-destinations-2026',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      title: 'Eid Al Fitr Travel: Top Destinations to Explore in 2026',
      excerpt:
        'Discover the best destinations for Eid Al Fitr travel in 2026, from Azerbaijan and Georgia to Kenya and Russia, with cultural experiences and festive celebrations.',
      author: 'Travel Team',
      date: 'Jan 20, 2026',
      category: 'Destinations',
    },
    {
      id: '5-unique-corporate-team-building-ideas-that-actually-work',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      title: '5 Unique Corporate Team-Building Ideas That Actually Work',
      excerpt:
        'Discover proven corporate team-building ideas that go beyond routine activities, improve employee engagement, and create meaningful connections.',
      author: 'Corporate Team',
      date: 'Jan 18, 2026',
      category: 'Corporate Travel',
    },
    {
      id: 'best-affordable-travel-destinations-2026',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
      title: 'Best Affordable Travel Destinations for 2026',
      excerpt: 'Discover budget-friendly international destinations that offer excellent value for money in 2026.',
      author: 'Travel Team',
      date: 'Jan 15, 2026',
      category: 'Destinations',
    },
    {
      id: 'corporate-travel-management-best-practices-2026-part1',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
      title: 'Corporate Travel Management Best Practices for 2026 - Part 1',
      excerpt:
        'Essential strategies for optimizing corporate travel spend, improving employee satisfaction, and maintaining compliance.',
      author: 'Corporate Team',
      date: 'Jan 12, 2026',
      category: 'Corporate Travel',
    },
    {
      id: 'corporate-travel-management-best-practices-2026-part2',
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600&q=80',
      title: 'Corporate Travel Management Best Practices for 2026 - Part 2',
      excerpt:
        'Advanced strategies for 24/7 support, data-driven decisions, and sustainable corporate travel programs.',
      author: 'Corporate Team',
      date: 'Jan 10, 2026',
      category: 'Corporate Travel',
    },
  ];

  const renderBlogCard = useCallback(
    (blog: BlogCardData) => (
      <div className="whitespace-normal bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-coral text-white px-3 py-1 rounded-full text-xs font-semibold">
              {blog.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-luxury-darkBlue mb-3 group-hover:text-primary-coral transition-colors break-words text-pretty">
            {blog.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{blog.date}</span>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-primary-teal font-semibold group-hover:gap-4 transition-all cursor-pointer text-left w-full"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <span>Read More</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    ),
    [navigate]
  );

  return (
    <FadeInSection className="py-12 bg-luxury-canvas">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">BLOGS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest travel insights and tips from our experts
          </p>
        </div>

        <ContentShuffleStack
          items={blogs}
          renderItem={renderBlogCard}
          intervalMs={BLOG_INTERVAL_MS}
          maxWidthClass="max-w-2xl"
          stackMinHeightClass="min-h-[min(480px,62vh)]"
        />
      </Container>
    </FadeInSection>
  );
};

export default BlogSection;
