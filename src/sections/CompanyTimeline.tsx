import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Star, Building, Plane } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import { FadeInSection } from '../components/FadeInSection';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: 'milestone' | 'achievement' | 'expansion' | 'innovation';
}

function buildSmoothPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const dy = (p1.y - p0.y) / 3;
    d += ` C ${p0.x} ${p0.y + dy} ${p1.x} ${p1.y - dy} ${p1.x} ${p1.y}`;
  }
  return d;
}

type ScrollLinkedCardProps = {
  event: TimelineEvent;
  index: number;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  getCategoryColor: (category: string) => string;
  getCategoryLabel: (category: string) => string;
};

const scrollSpring = { stiffness: 64, damping: 28, mass: 0.45 };

/**
 * Scroll-linked card with eased fade-in / fade-out: spring-smoothed progress
 * plus dedicated opacity ramps at enter and exit.
 */
function ScrollLinkedTimelineCard({
  event,
  index,
  itemRefs,
  getCategoryColor,
  getCategoryLabel,
}: ScrollLinkedCardProps) {
  const localRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, scrollSpring);

  const side = index % 2 === 0 ? -1 : 1;
  // Fade in (bottom → center), hold, fade out (center → top)
  const opacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.22, 0.78, 0.9, 1],
    [0, 0, 1, 1, 0, 0]
  );
  const x = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [side * 52, 0, 0, side * -40]);
  const y = useTransform(smoothProgress, [0, 0.18, 0.82, 1], [40, 0, 0, -36]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.78, 1], [0.93, 1, 1, 0.94]);

  const setRefs = (node: HTMLDivElement | null) => {
    localRef.current = node;
    itemRefs.current[index] = node;
  };

  return (
    <motion.div
      ref={setRefs}
      style={
        reduceMotion
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : { opacity, x, y, scale }
      }
      className={`relative flex items-center will-change-[transform,opacity] ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div
        className={`w-full md:w-1/2 ${
          index % 2 === 0 ? 'md:pr-10 lg:pr-14' : 'md:pl-10 lg:pl-14'
        } max-md:pl-[4.25rem]`}
      >
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${getCategoryColor(event.category)}`}>
              <event.icon size={20} />
            </div>
            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}
              >
                {getCategoryLabel(event.category)}
              </span>
              <div className="text-2xl font-bold text-primary-navy mt-1">{event.year}</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-primary-navy mb-3">{event.title}</h3>
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const CompanyTimeline: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      year: '2007',
      title: 'Pluto Travels Founded',
      description:
        'Founded as a boutique travel agency in Dubai with a vision to create extraordinary travel experiences that go beyond the ordinary.',
      icon: Building,
      category: 'milestone',
    },
    {
      id: '2',
      year: '2010',
      title: 'First Corporate Partnership',
      description:
        'Established our first major corporate client relationship, marking the beginning of our corporate travel management services.',
      icon: Users,
      category: 'expansion',
    },
    {
      id: '3',
      year: '2012',
      title: 'IATA Accreditation',
      description:
        'Achieved IATA accreditation, solidifying our position as a trusted and certified travel agency in the industry.',
      icon: Award,
      category: 'achievement',
    },
    {
      id: '4',
      year: '2015',
      title: 'Luxury Travel Division Launch',
      description:
        'Launched our dedicated luxury travel division, offering bespoke experiences and exclusive access to premium destinations.',
      icon: Star,
      category: 'innovation',
    },
    {
      id: '5',
      year: '2018',
      title: 'ISO 9001 Certification & ICV Certified',
      description:
        'Achieved ISO 9001 certification, demonstrating our commitment to quality management and continuous improvement. Also certified as ICV (In-Country Value) certified, supporting local economic development and Emiratization initiatives.',
      icon: Award,
      category: 'achievement',
    },
    {
      id: '6',
      year: '2020',
      title: 'Digital Transformation',
      description:
        'Implemented comprehensive digital solutions and 24/7 concierge services, adapting to the new travel landscape.',
      icon: TrendingUp,
      category: 'innovation',
    },
    {
      id: '7',
      year: '2022',
      title: 'Global Expansion',
      description:
        'Expanded our services to serve clients across 150+ destinations worldwide, becoming a truly global travel concierge.',
      icon: Globe,
      category: 'expansion',
    },
    {
      id: '8',
      year: '2023',
      title: 'Industry Recognition',
      description:
        'Received multiple industry awards including Dubai Tourism Excellence Award and Best Corporate Travel Agency 2024.',
      icon: Award,
      category: 'achievement',
    },
    {
      id: '9',
      year: '2024',
      title: '50,000+ Happy Travelers',
      description:
        'Celebrated serving over 50,000 satisfied travelers with 98% satisfaction rate and 47,000+ flawlessly executed journeys.',
      icon: Plane,
      category: 'milestone',
    },
    {
      id: '10',
      year: '2025',
      title: 'Arabian Travel Awards Recognition',
      description:
        'Honored with prestigious awards from Arabian Travel Awards, recognizing our excellence in corporate travel management and outstanding service delivery in the Middle East region.',
      icon: Award,
      category: 'achievement',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [roadmap, setRoadmap] = useState<{
    points: { x: number; y: number }[];
    connectors: { x1: number; y1: number; x2: number; y2: number }[];
  } | null>(null);

  const measureRoadmap = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cw = container.offsetWidth;
    const ch = container.offsetHeight;
    if (ch < 8) return;

    const isMd = window.matchMedia('(min-width: 768px)').matches;
    /** Desktop: weave around viewport center. Mobile: keep path in a left gutter so it isn’t covered by full-width cards */
    const centerX = isMd ? cw / 2 : Math.min(56, Math.max(44, cw * 0.14));
    /** Horizontal offset from center so the path weaves toward the side where each card sits */
    const amp = isMd ? Math.min(72, cw * 0.09) : Math.min(18, cw * 0.06);
    const connLen = isMd ? 40 : 22;

    const points: { x: number; y: number }[] = [];
    const connectors: { x1: number; y1: number; x2: number; y2: number }[] = [];

    timelineEvents.forEach((_, i) => {
      const el = itemRefs.current[i];
      if (!el) return;
      const y = el.offsetTop + el.offsetHeight / 2;
      const towardLeft = i % 2 === 0;
      const side = towardLeft ? -1 : 1;
      const x = centerX + side * amp;
      points.push({ x, y });

      const x2 = x + (towardLeft ? -connLen : connLen);
      connectors.push({ x1: x, y1: y, x2, y2: y });
    });

    if (points.length === 0) return;
    setRoadmap({ points, connectors });
  }, []);

  useLayoutEffect(() => {
    measureRoadmap();
    const container = containerRef.current;
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(measureRoadmap);
    });
    if (container) ro.observe(container);
    window.addEventListener('resize', measureRoadmap);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measureRoadmap);
    };
  }, [measureRoadmap]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'milestone':
        return 'bg-primary-gold text-primary-navy';
      case 'achievement':
        return 'bg-primary-coral text-white';
      case 'expansion':
        return 'bg-primary-teal text-white';
      case 'innovation':
        return 'bg-primary-navy text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'milestone':
        return 'Milestone';
      case 'achievement':
        return 'Achievement';
      case 'expansion':
        return 'Expansion';
      case 'innovation':
        return 'Innovation';
      default:
        return 'Event';
    }
  };

  const pathD = roadmap && roadmap.points.length > 1 ? buildSmoothPath(roadmap.points) : '';

  return (
    <FadeInSection className="py-24 bg-luxury-pearl" id="company-timeline">
      <Container>
        <SectionHeader
          title="Our Journey Through Time"
          subtitle="18 years of excellence and innovation"
          description="From a small boutique agency to Dubai's premier travel concierge, discover the key moments that shaped our success."
        />

        <div ref={containerRef} className="relative mt-16">
          {/* Curvy roadmap (SVG measured to real row positions) */}
          {roadmap && pathD ? (
            <svg
              className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-visible"
              aria-hidden
            >
              <defs>
                <linearGradient id="timeline-road-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="45%" stopColor="#E8A598" />
                  <stop offset="100%" stopColor="#2A9D8F" />
                </linearGradient>
                <filter id="timeline-road-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d={pathD}
                fill="none"
                stroke="url(#timeline-road-gradient)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#timeline-road-glow)"
                className="opacity-90"
              />

              {roadmap.connectors.map((c, i) => (
                <line
                  key={`conn-${timelineEvents[i]?.id ?? i}`}
                  x1={c.x1}
                  y1={c.y1}
                  x2={c.x2}
                  y2={c.y2}
                  stroke="url(#timeline-road-gradient)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  opacity={0.65}
                />
              ))}

              {roadmap.points.map((p, i) => {
                const ev = timelineEvents[i];
                if (!ev) return null;
                return (
                  <g key={`node-${ev.id}`}>
                    <circle cx={p.x} cy={p.y} r={10} fill="white" opacity={0.95} />
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={6}
                      className="fill-primary-gold stroke-primary-navy"
                      strokeWidth={2}
                    />
                  </g>
                );
              })}
            </svg>
          ) : null}

          <div className="relative z-[1] space-y-12">
            {timelineEvents.map((event, index) => (
              <ScrollLinkedTimelineCard
                key={event.id}
                event={event}
                index={index}
                itemRefs={itemRefs}
                getCategoryColor={getCategoryColor}
                getCategoryLabel={getCategoryLabel}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-navy to-luxury-darkBlue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Our Impact Today</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-gold mb-2">18+</div>
                <div className="text-white/90">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-gold mb-2">50,000+</div>
                <div className="text-white/90">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-gold mb-2">150+</div>
                <div className="text-white/90">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-gold mb-2">98%</div>
                <div className="text-white/90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </FadeInSection>
  );
};

export default CompanyTimeline;
