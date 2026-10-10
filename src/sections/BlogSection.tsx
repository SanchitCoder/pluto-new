import { Calendar, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import BlogCarousel from '../components/BlogCarousel';
import { FadeInSection } from '../components/FadeInSection';

import { BLOG_POSTS, type BlogCardData } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const blogs: BlogCardData[] = BLOG_POSTS;

  const renderBlogCard = (blog: BlogCardData) => (
    <article
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
      onClick={() => navigate(`/blog/${blog.id}`)}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/blog/${blog.id}`)}
      role="link"
      tabIndex={0}
    >
      <div className="relative h-44 shrink-0 overflow-hidden sm:h-48">
        <img decoding="async"
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
    <FadeInSection className="bg-luxury-canvas py-12 cv-auto">
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
