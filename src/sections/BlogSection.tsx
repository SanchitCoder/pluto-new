import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import BlogCarousel from '../components/BlogCarousel';
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

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  const blogs: BlogCardData[] = [
    {
      id: 'why-business-trips-more-expensive-2026-guide-uae-companies',
      image: '/Globla-business-solutiona.png',
      title: 'Why Are Business Trips Becoming More Expensive in 2026? A Guide for UAE Companies',
      excerpt:
        'Why business travel costs are rising in 2026 — airfare, fuel, hotel rates and capacity — and how UAE companies can control spend with better policy, planning and reporting.',
      author: 'Corporate Team',
      date: 'Sep 12, 2026',
      category: 'Corporate Travel',
    },
    {
      id: 'how-to-choose-corporate-travel-agency-dubai-10-questions',
      image: '/business-analytics-suite.png',
      title: 'How to Choose the Right Corporate Travel Agency in Dubai: 10 Questions to Ask',
      excerpt:
        'The 10 questions every UAE company should ask before signing with a corporate travel agency in Dubai — support, technology, cost control, reporting, and duty of care.',
      author: 'Corporate Team',
      date: 'Sep 11, 2026',
      category: 'Corporate Travel',
    },
    {
      id: 'schengen-visa-rejection-reasons-common-mistakes',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      title: 'Schengen Visa Rejection Reasons: 15 Common Mistakes and How to Avoid Them',
      excerpt:
        'The 15 most common reasons Schengen visa applications get refused — financial proof, unexplained deposits, weak itineraries, and insurance gaps — and how to avoid them.',
      author: 'Travel Team',
      date: 'Sep 10, 2026',
      category: 'Visa & Travel',
    },
    {
      id: 'best-eid-staycation-deals-uae-2026',
      image: '/eid-al-fitr-deals.gif',
      title: 'Best Eid Staycation Deals in the UAE',
      excerpt:
        'Top Eid staycation packages in the UAE for 2026 — Fujairah, Abu Dhabi, Dubai, and Ras Al Khaimah resorts with beach access, family perks, and great value.',
      author: 'Travel Team',
      date: 'Jun 5, 2026',
      category: 'Destinations',
    },
    {
      id: 'plan-unforgettable-luxury-celebrations-corporate-events-2026',
      image: '/mice-events-conference.png',
      title: 'How to Plan Unforgettable Luxury Celebrations & Corporate Events in 2026',
      excerpt:
        'From milestone birthdays to corporate galas and incentive trips — how Pluto Travels & Pluto Events create luxury celebrations and MICE experiences in the UAE.',
      author: 'Corporate Team',
      date: 'Jun 5, 2026',
      category: 'MICE & Events',
    },
    {
      id: '7-common-travel-booking-mistakes-how-to-avoid',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      title: '7 Common Travel Booking Mistakes and How to Avoid Them',
      excerpt:
        'Avoid the seven booking mistakes that cause missed flights, visa issues, and extra costs — expert tips for stress-free travel from Dubai and the UAE.',
      author: 'Travel Team',
      date: 'Jun 5, 2026',
      category: 'Travel Tips',
    },
    {
      id: 'what-happens-if-you-miss-your-flight-travel-guide',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      title: 'What Happens If You Miss Your Flight? Complete Guide for Travelers',
      excerpt:
        'Missed your flight? Stay calm and act fast — rebooking options, ticket types, costs, insurance, and how to avoid missing flights from Dubai and the UAE.',
      author: 'Travel Team',
      date: 'Jun 5, 2026',
      category: 'Travel Tips',
    },
    {
      id: 'luxury-travel-trends-2026-experiences-over-hotel-stays',
      image: 'https://images.unsplash.com/photo-1540541338287-41700907dda6?w=800&q=80',
      title: 'Luxury Travel Trends 2026: Why Experiences Are Replacing Traditional Hotel Stays',
      excerpt:
        'How luxury travel is shifting from five-star stays to curated experiences — personalization, private dining, yacht escapes, and what HNI travellers value in 2026.',
      author: 'Travel Team',
      date: 'Jun 5, 2026',
      category: 'Luxury Travel',
    },
    {
      id: 'how-to-find-cheap-flights-without-sacrificing-comfort',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      title: 'How to Find Cheap Flights Without Sacrificing Comfort: Proven Tips to Save Money on Airfare',
      excerpt:
        'Practical strategies to find affordable flights from the UAE without rough travel — timing, flexibility, smart search, hidden fees, and when expert help saves more.',
      author: 'Travel Team',
      date: 'Jun 5, 2026',
      category: 'Travel Tips',
    },
    {
      id: 'best-luxury-staycation-fujairah-48-hour-escape',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      title: 'Best Luxury Staycation in Fujairah: Your Perfect 48-Hour Escape',
      excerpt:
        'Discover Fujairah — the UAE\'s underrated luxury staycation. Beachfront resorts, mountain views, diving, wellness, and a complete 48-hour itinerary from Dubai.',
      author: 'Travel Team',
      date: 'Jun 5, 2026',
      category: 'Destinations',
    },
    {
      id: 'corporate-travel-policy-guide-uae-companies',
      image: '/corporate-travel-management.png',
      title: 'Corporate Travel Policy Guide for UAE Companies (2026)',
      excerpt:
        'Build a corporate travel policy that controls spend, ensures duty of care, and keeps UAE teams compliant — approvals, budgets, booking rules, and best practices.',
      author: 'Corporate Team',
      date: 'Jun 5, 2026',
      category: 'Corporate Travel',
    },
    {
      id: 'mice-dubai-planners-guide-2026',
      image: '/mice-events-conference.png',
      title: 'MICE in Dubai: A Planner\'s Guide (2026)',
      excerpt:
        'Plan successful MICE events in Dubai — venues, visas, incentives, logistics, and local regulations. A practical guide for corporate event teams.',
      author: 'Corporate Team',
      date: 'Jun 5, 2026',
      category: 'MICE & Events',
    },
    {
      id: 'best-time-plan-corporate-incentive-trips-uae',
      image: '/global-business-travel-package.png',
      title: 'Best Time to Plan Corporate Incentive Trips from the UAE',
      excerpt:
        'When to book corporate incentive travel from the UAE — seasons, lead times, budgeting cycles, and destination tips for HR and event planners.',
      author: 'Corporate Team',
      date: 'Jun 5, 2026',
      category: 'Corporate Travel',
    },
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

  const renderBlogCard = (blog: BlogCardData) => (
    <article
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
      onClick={() => navigate(`/blog/${blog.id}`)}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/blog/${blog.id}`)}
      role="link"
      tabIndex={0}
    >
      <div className="relative h-44 shrink-0 overflow-hidden sm:h-48">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary-coral px-3 py-1 text-xs font-semibold text-white">
          {blog.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-luxury-darkBlue transition-colors group-hover:text-primary-coral sm:text-xl">
          {blog.title}
        </h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600 sm:text-base">{blog.excerpt}</p>

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

        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-teal group-hover:gap-3 transition-all">
          Read More
          <ArrowRight size={16} />
        </span>
      </div>
    </article>
  );

  return (
    <FadeInSection className="bg-luxury-canvas py-12">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-luxury-darkBlue md:text-4xl">BLOGS</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Latest travel insights and tips from our experts
          </p>
        </div>

        <BlogCarousel items={blogs} getKey={(b) => b.id} renderItem={(blog) => renderBlogCard(blog)} />

        <p className="mt-4 text-center text-sm text-gray-500 md:hidden">Swipe to see more posts</p>
      </Container>
    </FadeInSection>
  );
};

export default BlogSection;
