import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowLeft, Users, Calendar, Plane, Hotel, Utensils, Camera } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import ConsultationModal from '../components/ConsultationModal';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import { FadeInSection } from '../components/FadeInSection';

interface PackageData {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  discount: number;
  description: string;
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    activities: string[];
  }>;
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
  groupSize: string;
}

const PackageDetailPage: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const [consultOpen, setConsultOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [packageId]);

  // Mock data - in a real app, this would come from an API
  const packages: PackageData[] = [
    {
      id: 'eid-armenia-2026',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
      title: 'Eid Al Fitr Package to Armenia',
      location: 'Armenia, Yerevan',
      duration: '4 Days / 3 Nights',
      rating: 4.8,
      reviews: 156,
      price: 3299,
      discount: 9,
      description: 'Explore the ancient monasteries, stunning landscapes, and rich history of Armenia during Eid Al Fitr. Visit Yerevan, Garni Temple, Geghard Monastery, Lake Sevan, and Tsaghkadzor Ski Resort. Fixed departure from Sharjah on 19th March - 22nd March 2026.',
      highlights: [
        'Visit Garni Pagan Temple from 1st century - the only Hellenistic temple in Armenia',
        'Explore Geghard Monastery - UNESCO World Heritage site hewn from caves',
        'Experience Lake Sevan - one of the largest sweet lakes in the world',
        'City tour of Yerevan with Republic Square and Cascade Monument',
        'Tsaghkadzor Ski Resort ropeway with breathtaking mountain views',
        'Armenian flat bread "lavash" baking ceremony in traditional tonir',
        'Visit Vernissage flea market for local crafts and souvenirs'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival + City Tour',
          description: 'Arrive at Zvartnots International Airport. Meet and greet. Transfer to Yerevan for a comprehensive city tour including Republic Square, Northern Avenue, Opera House, Swam Lake, and Cascade Monument.',
          activities: [
            '11:20 Arrival in Zvartnots International Airport (G9 244)',
            'Meet and greet at airport',
            'Transfer to Yerevan',
            'City tour: Republic Square with singing fountains',
            'Visit Northern Avenue and Opera House',
            'Explore Cascade Monument - center of art',
            'Hotel check-in',
            'Overnight in Yerevan'
          ]
        },
        {
          day: 2,
          title: 'Garni - Geghard – Vernissage Market',
          description: 'Visit the ancient Garni Pagan Temple, Arch of Charents with stunning views of Mount Ararat, UNESCO-listed Geghard Monastery, and experience traditional Armenian lavash bread baking ceremony.',
          activities: [
            'Breakfast at hotel',
            'Trip to Garni Pagan Temple (1st century)',
            'Visit Arch of Charents - view of Mount Ararat',
            'Explore Geghard Monastery (13th century) - UNESCO World Heritage',
            'Visit Vernissage flea market',
            'Armenian flat bread "lavash" baking ceremony in tonir',
            'Learn to make Armenian local sandwiches',
            'Overnight in Yerevan'
          ]
        },
        {
          day: 3,
          title: 'Yerevan - Tsaghkadzor - Lake Sevan – Yerevan',
          description: 'Visit Tsaghkadzor winter resort town, ride the ropeway to Mount Teghenis peak, and explore the stunning Lake Sevan - one of the largest sweet lakes in the world at 1897 meters altitude.',
          activities: [
            'Breakfast at hotel',
            'Trip to Tsaghkadzor - well-known winter resort',
            'Ropeway ride to Mount Teghenis peak',
            'Breathtaking views from the fortress town',
            'Visit Lake Sevan - "blue-eyed" lake',
            'Climb stairs on peninsula for fascinating views',
            'Sightseeing tour on the peninsula',
            'Overnight in Yerevan'
          ]
        },
        {
          day: 4,
          title: 'Departure',
          description: 'After breakfast, check-out from hotel and transfer to Zvartnots International Airport for departure.',
          activities: [
            'Breakfast at hotel',
            'Hotel check-out',
            'Transfer to Zvartnots International Airport',
            '12:10 Departure (G9 245) to Sharjah'
          ]
        }
      ],
      inclusions: [
        'Return Economy Airfare with current taxes (Air Arabia G9 244/245)',
        '20 kg Check-in Baggage and 10 kg Hand Baggage allowance',
        '3 Nights accommodation in President Hotel 4* (Local) or similar in Yerevan',
        'Daily Breakfast at hotel',
        'Round Airport Transfers by Big Bus',
        'All Tours & Transfers on Private Basis by Big Bus',
        'English Speaking guide/driver service',
        'Sightseeing as per the itinerary',
        'Entrance fees where necessary',
        'Tsaghkadzor Ski Resort Ropeway – one station',
        'Bottle of water for each day',
        'Local Taxes & Charges'
      ],
      exclusions: [
        'Visa fees',
        'Tips for guide and driver',
        'Extras at hotels',
        'Travel Insurance',
        'Services not mentioned in the program',
        'Meals (except breakfast)',
        'Personal expenses',
        'Optional activities'
      ],
      bestTime: 'March 2026 (Eid Al Fitr)',
      groupSize: 'Fixed Departure'
    },
    {
      id: 'eid-almaty-2026',
      image: 'https://images.unsplash.com/photo-1503221017520-7b0e2c5e4e5a?w=800&q=80',
      title: 'Eid Al Adha Package to Almaty',
      location: 'Almaty, Kazakhstan',
      duration: '4 Days / 3 Nights',
      rating: 4.7,
      reviews: 142,
      price: 3629,
      discount: 11,
      description: 'Discover the stunning natural beauty of Kazakhstan during Eid Al Adha. Explore Charyn Canyon, Kolsai Lake, Shymbulak Ski Resort, and experience the vibrant culture of Almaty. Fixed departure from Sharjah on 19th March - 23rd March 2026.',
      highlights: [
        'Explore Charyn Red Canyon - stunning "Valley of Castles" landscapes',
        'Visit Kolsai Lake - tranquil alpine lake surrounded by Tian Shan Mountains',
        'Cable car ride to Shymbulak Ski Resort at 3200 meters above sea level',
        'Excursion to Kok-Tobe Park with panoramic city views and attractions',
        'Visit Almarasan Gorge and hike to Ayusai Waterfall',
        'Explore Old Green Bazaar and Rakhat Chocolate Factory',
        'Evening Celebration of Nauryz on Arbat Square with national treats and traditions',
        'Visit Park of 28 Panfilov Guardsmen with eternal fire'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival Day',
          description: 'Arrive at Almaty International Airport. Meet and greet by our representative. Transfer to hotel for check-in and relaxation.',
          activities: [
            '14:10 Arrival at Almaty International Airport (G9 251)',
            'Meet and greet by representative',
            'Transfer to hotel',
            'Hotel check-in',
            'Free time to relax',
            'Overnight stay in Almaty city'
          ]
        },
        {
          day: 2,
          title: 'Almarasan Gorge & Kok-Tobe Park',
          description: 'Explore the beautiful Almarasan Gorge, visit Ayusai Waterfall, First President\'s Park, Old Green Bazaar, and enjoy Kok-Tobe Park with panoramic views.',
          activities: [
            '08:00 Breakfast at hotel',
            '10:00 Excursion to Almarasan Gorge',
            'Visit Ayusai Center and hike to Ayusai Waterfall',
            '14:00 Return to city',
            'Visit First President\'s Park',
            '15:00 Time for lunch (on own)',
            '16:00 Explore Old Green Bazaar',
            'Visit Rakhat Chocolate Factory Shop',
            '18:00 Excursion to Kok-Tobe Park by car',
            'Panoramic city views, fast coaster, Ferris wheel, mini zoo',
            '20:00 Transfer back to hotel',
            'Overnight stay in Almaty'
          ]
        },
        {
          day: 3,
          title: 'Charyn Red Canyon & Kolsai Lake Adventure',
          description: 'Full day adventure to Charyn Red Canyon and Kolsai Lake - two of Kazakhstan\'s most stunning natural wonders.',
          activities: [
            '06:00 Pack breakfast',
            '07:00 Departure to Charyn Canyon (3-hour drive)',
            '10:00 Arrival at Charyn Red Canyon',
            'Explore "Valley of Castles" with walking and photography',
            '12:00 Departure to Kolsai Lake',
            '14:00 Arrival at Kolsai Lake',
            'Enjoy tranquil beauty of alpine lake',
            'Time for lunch at local café or picnic',
            '17:00 Departure back to Almaty',
            'Time for dinner at local restaurant',
            '22:00 Arrival at hotel',
            'Overnight in Almaty'
          ]
        },
        {
          day: 4,
          title: 'Shymbulak Ski Resort & Nauryz Celebration',
          description: 'Visit Shymbulak Ski Resort via cable car, then experience the vibrant Nauryz celebration on Arbat Square before departure.',
          activities: [
            '08:00 Breakfast at hotel',
            '10:00 Hotel checkout',
            'Excursion to Shymbulak Ski Resort',
            'Cable car ride to 3200 meters above sea level',
            'Breathtaking mountain views and photography',
            '14:00 Time for lunch at Shymbulak or on way back',
            '15:00 Return to city',
            '17:00 Evening Celebration of Nauryz on Arbat',
            'National treats, yurts, folk games, music, dances',
            '21:00 Time for dinner in restaurant',
            '23:00 Transfer to Almaty International Airport',
            '02:55 Departure (G9 254) to Sharjah'
          ]
        }
      ],
      inclusions: [
        'Return Economy Airfare with current taxes (Air Arabia G9 251/254)',
        '20 kg Check-in Baggage and 10 kg Hand Baggage allowance',
        '3 Nights accommodation in The Plaza Hotel 4* or similar in Almaty',
        'Daily Breakfast at hotel',
        'Explore Charyn Canyon and Kolsay Lake in National Park',
        'Cable car ride to Kok-Tobe Mountain Park',
        'Cable car ride to Shymbulak Ski Resort at 3200 meters',
        'Visit to Park of 28 Panfilov Guardsmen (historical place with eternal fire)',
        'Visit to Old Green Bazaar and Rakhat Chocolate Factory',
        'Entrance tickets included & Environmental fees for national parks',
        'English Speaking Tour Guide for 3 Days',
        'All tours and transfers on Private Basis (Mid Bus)'
      ],
      exclusions: [
        'Visa fees',
        'Tips for guide and driver',
        'Extras at hotels',
        'Travel Insurance',
        'Services not mentioned in the program',
        'Meals (except breakfast)',
        'Personal expenses',
        'Optional activities'
      ],
      bestTime: 'March 2026 (Eid Al Adha)',
      groupSize: 'Fixed Departure'
    },
    {
      id: 'eid-kenya-2026',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
      title: 'Eid Al Fitr Package to Kenya',
      location: 'Kenya (Nairobi, Maasai Mara, Lake Naivasha)',
      duration: '5 Days / 4 Nights',
      rating: 4.9,
      reviews: 287,
      price: 5499,
      discount: 17,
      description: 'Experience the ultimate African safari adventure during Eid Al Fitr. Explore Maasai Mara National Reserve, witness the Big Five, visit Giraffe Centre, and enjoy a boat ride on Lake Naivasha. Fixed departure from Dubai on 19th March - 23rd March 2026.',
      highlights: [
        'Full-day game drives in Maasai Mara National Reserve',
        'Witness the Big Five: lions, elephants, buffalo, leopards, and rhinos',
        'Visit Giraffe Centre for close encounter with Rothschild\'s giraffes',
        'Boat ride on Lake Naivasha spotting hippos and abundant birdlife',
        'Game drives in Safari Land Cruiser with pop-up roof hatch',
        'Scenic drive through Great Rift Valley',
        'Stay in authentic safari lodges in Maasai Mara',
        'Experience Kenya\'s diverse wildlife and landscapes'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Nairobi & Giraffe Centre Visit',
          description: 'Arrive at Jomo Kenyatta International Airport. Visit the Giraffe Centre for a close encounter with endangered Rothschild\'s giraffes and learn about conservation efforts.',
          activities: [
            'Arrival at Jomo Kenyatta International Airport (JKIA)',
            'Meet and greet at airport',
            'Transfer to Giraffe Centre',
            'Visit Giraffe Centre - close encounter with Rothschild\'s giraffes',
            'Learn about conservation efforts in Kenya',
            'Transfer to hotel in Nairobi',
            'Hotel check-in',
            'Lunch and dinner at own cost',
            'Overnight in Nairobi (Golden Tulip Nairobi Hotel or similar)'
          ]
        },
        {
          day: 2,
          title: 'Nairobi to Maasai Mara – Journey into the Wild',
          description: 'Scenic drive to Maasai Mara National Reserve through Great Rift Valley. Afternoon game drive to spot lions, elephants, giraffes, cheetahs, and herds of plains game.',
          activities: [
            'Breakfast at hotel',
            'Depart Nairobi for Maasai Mara (5-6 hours drive)',
            'Scenic drive through Great Rift Valley',
            'Picturesque viewpoints along the way',
            'Arrival at lodge/camp in time for hot lunch',
            'Short rest after lunch',
            'Afternoon game drive across vast savannah',
            'Spot lions, elephants, giraffes, cheetahs, and plains game',
            'Return to camp at sunset',
            'Dinner and overnight in Maasai Mara (Muthu Keekorok Lodge or similar)'
          ]
        },
        {
          day: 3,
          title: 'Full Day in Maasai Mara – Classic Safari Experience',
          description: 'Full-day game drive exploring different wildlife-rich areas of Maasai Mara. Packed lunch at scenic picnic spot inside the park.',
          activities: [
            'Breakfast at lodge',
            'Full-day game drive in Maasai Mara',
            'Explore different wildlife-rich areas of the reserve',
            'Observe predators, large herbivore herds, and birdlife',
            'Packed lunch at scenic picnic spot inside the park',
            'Continued game viewing throughout the day',
            'Return to lodge in the evening',
            'Dinner and overnight in Maasai Mara'
          ]
        },
        {
          day: 4,
          title: 'Maasai Mara to Lake Naivasha – Savannah to Lakeside',
          description: 'Depart Maasai Mara for Lake Naivasha. Enjoy a relaxing boat ride on the lake spotting hippos and abundant birdlife.',
          activities: [
            'Breakfast at lodge',
            'Check-out from Maasai Mara',
            'Drive to Lake Naivasha (5-6 hours)',
            'Transition from open savannahs to lush highlands',
            'Arrival at Lake Naivasha',
            'Hot lunch at lodge',
            'Afternoon boat ride on Lake Naivasha',
            'Spot hippos and abundant birdlife',
            'Enjoy peaceful surroundings',
            'Return to lodge in the evening',
            'Dinner and overnight at Lake Naivasha (Lake Naivasha Country Club or similar)'
          ]
        },
        {
          day: 5,
          title: 'Lake Naivasha to Nairobi & Departure',
          description: 'After breakfast, transfer back to Nairobi and connect with your onward flight back home.',
          activities: [
            'Breakfast at lodge',
            'Check-out from hotel',
            'Transfer back to Nairobi (2-2.5 hours)',
            'Arrival at Jomo Kenyatta International Airport',
            '18:15 Departure (KQ 310) to Dubai',
            'End of journey with wonderful memories'
          ]
        }
      ],
      inclusions: [
        'Return Economy Airfare with current taxes (Kenya Airways KQ 305/310)',
        '20 kg Check-in Baggage and 7 kg Hand Baggage allowance',
        '1 Night in Nairobi Hotel (Golden Tulip Nairobi Hotel or similar)',
        '2 Nights in Maasai Mara (Muthu Keekorok Lodge or similar)',
        '1 Night in Lake Naivasha (Lake Naivasha Country Club or similar)',
        'Standard Room with Daily Buffet Breakfast',
        '03 Lunches & 03 Dinners',
        'Giraffe Centre visit in Nairobi',
        'Game Drives in Safari Land Cruiser as per itinerary',
        'Boat ride on Lake Naivasha',
        'All Airport Taxes',
        'English speaking tour guide',
        'Transport and transfers in safari 4x4 land cruiser with pop-up game-viewing roof hatch (Non A/C)',
        'Water during safari'
      ],
      exclusions: [
        'Entrance fees if any applicable',
        'Meals where not mentioned',
        'Tips (Tipping Guideline: USD 10 Per Person Per Day)',
        'Late Check-out',
        'Visa fees (ETA approximately USD 55 per person)',
        'Optional tours and add-on services',
        'Travel Insurance',
        'Flight\'s Seat Assignment, meals and Entertainment',
        'Maasai Village Visit ($25pp)',
        'Crescent Island visit ($35pp)',
        'Hot Air Balloon Safari ($505pp)',
        'Packed lunch ($25pp)',
        'Carnivore Dinner ($45pp)'
      ],
      bestTime: 'March 2026 (Eid Al Fitr)',
      groupSize: 'Fixed Departure'
    },
    {
      id: 'paris-adventure',
      image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800&q=80',
      title: 'Paris Adventure',
      location: 'France',
      duration: '5 Days / 4 Nights',
      rating: 4.8,
      reviews: 245,
      price: 1299,
      discount: 20,
      description: 'Experience the magic of Paris with our carefully curated 5-day adventure. From the iconic Eiffel Tower to charming Montmartre, discover the City of Light like never before.',
      highlights: [
        'Visit the iconic Eiffel Tower and enjoy panoramic city views',
        'Explore the world-famous Louvre Museum',
        'Stroll through the charming streets of Montmartre',
        'Take a romantic Seine River cruise',
        'Discover the artistic treasures of Musée d\'Orsay'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & City Orientation',
          description: 'Welcome to Paris! Arrive at your hotel and take some time to settle in.',
          activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'Evening stroll along Champs-Élysées']
        },
        {
          day: 2,
          title: 'Iconic Landmarks Tour',
          description: 'Discover Paris\' most famous landmarks and monuments.',
          activities: ['Eiffel Tower visit', 'Arc de Triomphe', 'Notre-Dame Cathedral', 'Lunch in Latin Quarter']
        },
        {
          day: 3,
          title: 'Art & Culture Day',
          description: 'Immerse yourself in Paris\' rich artistic heritage.',
          activities: ['Louvre Museum tour', 'Musée d\'Orsay visit', 'Art workshop', 'Evening at Montmartre']
        },
        {
          day: 4,
          title: 'Seine River & Gardens',
          description: 'Enjoy the natural beauty of Paris along the Seine.',
          activities: ['Seine River cruise', 'Jardin des Tuileries', 'Luxembourg Gardens', 'Shopping at Galeries Lafayette']
        },
        {
          day: 5,
          title: 'Departure',
          description: 'Bid farewell to the City of Light.',
          activities: ['Last-minute shopping', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '4 nights accommodation in 4-star hotel',
        'Daily breakfast',
        'Airport transfers',
        'All entrance fees to mentioned attractions',
        'Professional English-speaking guide',
        'Seine River cruise ticket',
        'Public transport pass'
      ],
      exclusions: [
        'International flights',
        'Travel insurance',
        'Personal expenses',
        'Lunch and dinner (except welcome dinner)',
        'Optional activities',
        'Tips and gratuities'
      ],
      bestTime: 'April to October',
      groupSize: '2-12 people'
    },
    {
      id: 'italian-heritage-tour',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
      title: 'Italian Heritage Tour',
      location: 'Italy',
      duration: '7 Days / 6 Nights',
      rating: 4.9,
      reviews: 312,
      price: 1899,
      discount: 15,
      description: 'Discover the rich cultural heritage of Italy on this comprehensive 7-day journey through Rome, Florence, and Venice.',
      highlights: [
        'Explore ancient Rome and the Colosseum',
        'Visit the Vatican City and Sistine Chapel',
        'Discover Renaissance art in Florence',
        'Experience the romance of Venice',
        'Taste authentic Italian cuisine'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Rome Arrival',
          description: 'Begin your Italian adventure in the Eternal City.',
          activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'Evening walk in Trastevere']
        },
        {
          day: 2,
          title: 'Ancient Rome',
          description: 'Step back in time to the glory of the Roman Empire.',
          activities: ['Colosseum tour', 'Roman Forum', 'Palatine Hill', 'Traditional Roman lunch']
        },
        {
          day: 3,
          title: 'Vatican City',
          description: 'Explore the spiritual heart of Catholicism.',
          activities: ['Vatican Museums', 'Sistine Chapel', 'St. Peter\'s Basilica', 'Vatican Gardens']
        },
        {
          day: 4,
          title: 'Florence Transfer',
          description: 'Travel to the birthplace of the Renaissance.',
          activities: ['High-speed train to Florence', 'Hotel check-in', 'Duomo visit', 'Uffizi Gallery']
        },
        {
          day: 5,
          title: 'Florence Exploration',
          description: 'Discover the artistic treasures of Florence.',
          activities: ['Accademia Gallery', 'Ponte Vecchio', 'Palazzo Pitti', 'Cooking class']
        },
        {
          day: 6,
          title: 'Venice Adventure',
          description: 'Experience the magic of the Floating City.',
          activities: ['Train to Venice', 'Gondola ride', 'St. Mark\'s Square', 'Doge\'s Palace']
        },
        {
          day: 7,
          title: 'Departure',
          description: 'End your Italian journey.',
          activities: ['Last-minute shopping', 'Airport transfer', 'Departure']
        }
      ],
      inclusions: [
        '6 nights accommodation in 4-star hotels',
        'Daily breakfast',
        'All transfers and transportation',
        'Entrance fees to all mentioned attractions',
        'Professional English-speaking guide',
        'High-speed train tickets',
        'Gondola ride in Venice'
      ],
      exclusions: [
        'International flights',
        'Travel insurance',
        'Personal expenses',
        'Lunch and dinner (except welcome dinner)',
        'Optional activities',
        'Tips and gratuities'
      ],
      bestTime: 'April to June, September to October',
      groupSize: '2-15 people'
    },
    {
      id: 'swiss-alps-escape',
      image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=800&q=80',
      title: 'Swiss Alps Escape',
      location: 'Switzerland',
      duration: '6 Days / 5 Nights',
      rating: 4.7,
      reviews: 189,
      price: 2199,
      discount: 10,
      description: 'Escape to the breathtaking Swiss Alps for an unforgettable mountain adventure filled with stunning landscapes and outdoor activities.',
      highlights: [
        'Scenic train journey on the Glacier Express',
        'Visit the charming town of Zermatt',
        'Explore the Jungfrau region',
        'Experience traditional Swiss culture',
        'Enjoy panoramic mountain views'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Zurich Arrival',
          description: 'Begin your Swiss adventure in Zurich.',
          activities: ['Airport pickup', 'Hotel check-in', 'City walking tour', 'Welcome dinner']
        },
        {
          day: 2,
          title: 'Lucerne & Mount Pilatus',
          description: 'Discover the beauty of Lucerne and its surrounding mountains.',
          activities: ['Lucerne city tour', 'Cogwheel train to Mount Pilatus', 'Mountain hiking', 'Traditional Swiss lunch']
        },
        {
          day: 3,
          title: 'Interlaken & Jungfrau',
          description: 'Explore the heart of the Swiss Alps.',
          activities: ['Train to Interlaken', 'Jungfraujoch excursion', 'Aletsch Glacier', 'Mountain village visit']
        },
        {
          day: 4,
          title: 'Zermatt Adventure',
          description: 'Visit the iconic Matterhorn region.',
          activities: ['Train to Zermatt', 'Matterhorn viewing', 'Gornergrat railway', 'Alpine hiking']
        },
        {
          day: 5,
          title: 'Glacier Express',
          description: 'Experience one of the world\'s most scenic train journeys.',
          activities: ['Glacier Express journey', 'Mountain scenery', 'Traditional Swiss dinner', 'Return to Zurich']
        },
        {
          day: 6,
          title: 'Departure',
          description: 'End your Swiss adventure.',
          activities: ['Last-minute shopping', 'Airport transfer', 'Departure']
        }
      ],
      inclusions: [
        '5 nights accommodation in 4-star hotels',
        'Daily breakfast',
        'All train tickets and transportation',
        'Mountain excursion fees',
        'Professional English-speaking guide',
        'Glacier Express ticket',
        'Swiss Travel Pass'
      ],
      exclusions: [
        'International flights',
        'Travel insurance',
        'Personal expenses',
        'Lunch and dinner (except welcome dinner)',
        'Optional activities',
        'Tips and gratuities'
      ],
      bestTime: 'June to September',
      groupSize: '2-10 people'
    },
    {
      id: 'amsterdam-explorer',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
      title: 'Amsterdam Explorer',
      location: 'Netherlands',
      duration: '4 Days / 3 Nights',
      rating: 4.6,
      reviews: 156,
      price: 999,
      discount: 25,
      description: 'Discover the charming canals, rich history, and vibrant culture of Amsterdam in this comprehensive 4-day exploration.',
      highlights: [
        'Canal cruise through historic waterways',
        'Visit the world-famous Anne Frank House',
        'Explore the Van Gogh Museum',
        'Discover the vibrant Jordaan district',
        'Experience Dutch culture and cuisine'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Amsterdam Arrival',
          description: 'Welcome to the Venice of the North.',
          activities: ['Airport pickup', 'Hotel check-in', 'City orientation', 'Welcome dinner']
        },
        {
          day: 2,
          title: 'Historic Amsterdam',
          description: 'Explore the rich history of Amsterdam.',
          activities: ['Anne Frank House', 'Jewish Historical Museum', 'Canal cruise', 'Traditional Dutch lunch']
        },
        {
          day: 3,
          title: 'Art & Culture',
          description: 'Immerse yourself in Dutch art and culture.',
          activities: ['Van Gogh Museum', 'Rijksmuseum', 'Jordaan district tour', 'Local market visit']
        },
        {
          day: 4,
          title: 'Departure',
          description: 'End your Amsterdam adventure.',
          activities: ['Last-minute shopping', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '3 nights accommodation in 4-star hotel',
        'Daily breakfast',
        'Airport transfers',
        'All entrance fees to mentioned attractions',
        'Professional English-speaking guide',
        'Canal cruise ticket',
        'Public transport pass'
      ],
      exclusions: [
        'International flights',
        'Travel insurance',
        'Personal expenses',
        'Lunch and dinner (except welcome dinner)',
        'Optional activities',
        'Tips and gratuities'
      ],
      bestTime: 'April to October',
      groupSize: '2-12 people'
    }
  ];

  const packageData = packages.find(pkg => pkg.id === packageId);

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Package Not Found</h1>
          <Button variant="gold" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const discountedPrice = Math.round(packageData.price * (1 - packageData.discount / 100));

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-96 overflow-hidden">
        <img
          src={packageData.image}
          alt={packageData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{packageData.title}</h1>
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{packageData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{packageData.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
      </FadeInSection>

      <Container>
        {/* Package Info */}
        <FadeInSection className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-luxury-darkBlue mb-4">About This Package</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{packageData.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">Package Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-coral rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-luxury-darkBlue mb-6">Detailed Itinerary</h3>
                <div className="space-y-6">
                  {packageData.itinerary.map((day, index) => (
                    <div key={index} className="border-l-4 border-primary-coral pl-6 pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary-coral text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </div>
                        <h4 className="text-xl font-bold text-luxury-darkBlue">{day.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      <div className="space-y-1">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6 sticky top-6"
              >
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="fill-accent-gold text-accent-gold" size={20} />
                    <span className="font-bold text-lg">{packageData.rating}</span>
                    <span className="text-gray-500">({packageData.reviews} reviews)</span>
                  </div>
                  {packageData.discount > 0 && (
                    <div className="bg-primary-coral text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                      {packageData.discount}% OFF
                    </div>
                  )}
                </div>

                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 line-through mb-1">
                    ${packageData.price}
                  </div>
                  <div className="text-3xl font-bold text-primary-coral mb-1">
                    ${discountedPrice}
                  </div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary-teal" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Best Time</div>
                      <div className="text-sm text-gray-600">{packageData.bestTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-primary-orange" size={20} />
                    <div>
                      <div className="font-semibold text-sm">Group Size</div>
                      <div className="text-sm text-gray-600">{packageData.groupSize}</div>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="gold" 
                  size="lg" 
                  fullWidth 
                  onClick={() => setConsultOpen(true)}
                >
                  Schedule Consultation
                </Button>
              </motion.div>

              {/* Inclusions & Exclusions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-luxury-darkBlue mb-4">What's Included</h4>
                <div className="space-y-2 mb-6">
                  {packageData.inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{inclusion}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-luxury-darkBlue mb-4">What's Not Included</h4>
                <div className="space-y-2">
                  {packageData.exclusions.map((exclusion, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{exclusion}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </FadeInSection>
      </Container>

      <Footer />
      <LunaAIChatButton />
      <MobileBottomCTA />
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
};

export default PackageDetailPage;
