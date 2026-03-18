import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play,
  Calendar,
  Clock,
  Mic,
  Headphones,
  Users,
  Heart,
  Share2,
  Download,
  Youtube,
  ExternalLink,
  ThumbsUp,
  Award,
  Zap,
  Brain,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Import images
import podcastCover1 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover2 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover3 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover4 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover5 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover6 from '../assets/images/podcasts/doc1.jpeg';
import host1 from '../assets/images/hosts/doc1.jpeg';
import host2 from '../assets/images/hosts/doc1.jpeg';

const PodcastPage = () => {
  const [activeTab, setActiveTab] = useState('latest');

  // YouTube embed base URL
  const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/';
  
  // YouTube video IDs for episodes
  const episodeVideos = {
    latest: 'dQw4w9WgXcQ', // Replace with actual IDs
    future1: 'future1_id',
    future2: 'future2_id',
    past1: 'past1_id',
    past2: 'past2_id',
    past3: 'past3_id',
  };

  // Podcast episodes data
  const episodes = {
    latest: [
      {
        id: 'ep1',
        title: 'Building Emotionally Intelligent Workforces',
        description: 'Dr. Erick Otieno discusses the science behind emotional intelligence and how it transforms workplace dynamics. Learn practical strategies for developing EQ in leadership.',
        date: 'March 15, 2026',
        duration: '45:22',
        host: 'Dr. Erick Otieno',
        hostImage: host1,
        guest: 'Sarah Mwangi - HR Director',
        videoId: 'dQw4w9WgXcQ',
        image: podcastCover1,
        views: '12.4K',
        likes: '2.1K',
        categories: ['Leadership', 'Emotional Intelligence'],
        youtubeUrl: 'https://youtu.be/dQw4w9WgXcQ'
      }
    ],
    future: [
      {
        id: 'ep2',
        title: 'The Future of Workplace Wellness in Africa',
        description: 'A preview of upcoming trends and innovations shaping employee wellness across the continent. Exclusive insights from industry leaders.',
        date: 'March 28, 2026',
        duration: '50:00',
        host: 'James Omondi',
        hostImage: host2,
        guest: 'Multiple Speakers',
        image: podcastCover2,
        categories: ['Wellness', 'Trends'],
        isUpcoming: true,
        reminderLink: '#'
      },
      {
        id: 'ep3',
        title: 'Mental Health: Breaking the Stigma',
        description: 'An important conversation about mental health in the workplace. Join us for this crucial discussion with mental health professionals.',
        date: 'April 5, 2026',
        duration: '55:00',
        host: 'Dr. Amina Hassan',
        hostImage: host1,
        guest: 'Mental Health Experts',
        image: podcastCover3,
        categories: ['Mental Health', 'Wellness'],
        isUpcoming: true,
        reminderLink: '#'
      }
    ],
    past: [
      {
        id: 'ep4',
        title: 'Burnout Prevention Strategies for Executives',
        description: 'Deep dive into identifying and preventing burnout at the leadership level. Practical frameworks for sustainable performance.',
        date: 'March 1, 2026',
        duration: '48:15',
        host: 'Dr. Erick Otieno',
        hostImage: host1,
        guest: 'John Mbeki - CEO',
        videoId: 'past1_id',
        image: podcastCover4,
        views: '8.2K',
        likes: '1.4K',
        categories: ['Executive', 'Burnout Prevention'],
        youtubeUrl: 'https://youtu.be/past1_id'
      },
      {
        id: 'ep5',
        title: 'Data-Driven Wellness: Measuring What Matters',
        description: 'How analytics and data are transforming workplace wellness programs. Learn about ROI measurements and impact assessment.',
        date: 'February 15, 2026',
        duration: '52:30',
        host: 'Sarah Mwangi',
        hostImage: host2,
        guest: 'Data Scientists',
        videoId: 'past2_id',
        image: podcastCover5,
        views: '6.7K',
        likes: '982',
        categories: ['Analytics', 'ROI'],
        youtubeUrl: 'https://youtu.be/past2_id'
      },
      {
        id: 'ep6',
        title: 'Wellness Hive: The Pilot Lab Story',
        description: 'Behind the scenes of our innovative wellness program. Hear from organizations that have transformed their workforce.',
        date: 'February 1, 2026',
        duration: '44:50',
        host: 'James Omondi',
        hostImage: host2,
        guest: 'Client Success Stories',
        videoId: 'past3_id',
        image: podcastCover6,
        views: '5.3K',
        likes: '876',
        categories: ['Case Studies', 'Success Stories'],
        youtubeUrl: 'https://youtu.be/past3_id'
      }
    ]
  };

  // Hosts/Team
  const hosts = [
    {
      name: 'Dr. Erick Otieno',
      role: 'Lead Host & Preventive Health Physician',
      image: host1,
      episodes: 24,
      expertise: ['Metabolic Health', 'Executive Wellness']
    },
    {
      name: 'Sarah Mwangi',
      role: 'Co-Host & Wellness Coordinator',
      image: host2,
      episodes: 18,
      expertise: ['HR Strategy', 'Workplace Culture']
    }
  ];

  // Reasons to listen
  const reasonsToListen = [
    {
      icon: Brain,
      title: 'Expert Insights',
      description: 'Learn from leading physicians, HR experts, and industry leaders about workplace wellness and performance optimization.'
    },
    {
      icon: TrendingUp,
      title: 'Actionable Strategies',
      description: 'Get practical frameworks and tools you can implement immediately to improve your organization\'s wellness outcomes.'
    },
    {
      icon: Users,
      title: 'Real Success Stories',
      description: 'Hear from organizations that have transformed their workforce through data-driven wellness initiatives.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Research',
      description: 'Stay updated with the latest research in preventive health, emotional intelligence, and workplace performance.'
    },
    {
      icon: Heart,
      title: 'Holistic Approach',
      description: 'Understand the connection between physical health, mental wellness, and organizational performance.'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Content that has been recognized by leading wellness organizations and industry bodies.'
    }
  ];

  // Stats
  const stats = [
    { label: 'Episodes', value: '50+' },
    { label: 'Monthly Listeners', value: '100K+' },
    { label: 'Expert Guests', value: '75+' },
    { label: 'Countries', value: '15+' }
  ];

  return (
    <main className="pt-16 md:pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-12 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Mic className="h-5 w-5" />
                <span><span className="text-secondary">The </span>Catalog<span className="text-secondary"> Podcast</span></span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                Where Wellness Meets 
                <span className="text-primary"> Performance</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-lg">
                Join us weekly for deep-dive conversations with industry leaders about workplace wellness, emotional intelligence, and building high-performance cultures.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://youtube.com/@thecatalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2 group"
                >
                  <Youtube className="h-5 w-5" />
                  Subscribe on YouTube
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="btn-outline px-8 py-4 text-base inline-flex items-center gap-2">
                  <Headphones className="h-5 w-5" />
                  Listen on Spotify
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-1">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <img 
                      src={podcastCover1} 
                      alt="Podcast Cover" 
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badges - fixed positioning */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
                <Sparkles className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">New Episode Weekly</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">45-60 min episodes</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Listen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
              Why Tune In?
            </h2>
            <p className="text-lg text-secondary font-medium max-w-2xl mx-auto">
              The Catalog Podcast delivers actionable insights for leaders, HR professionals, and anyone passionate about workplace wellness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonsToListen.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl p-6 card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Episode Feature */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary mb-2 block">Latest Episode</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-secondary mb-4">
              Featured This Week
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Video Player */}
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${YOUTUBE_BASE_URL}${episodes.latest[0].videoId}?autoplay=0&rel=0`}
                  title={episodes.latest[0].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Episode Info */}
              <div className="p-8">
                <EpisodeDetails episode={episodes.latest[0]} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Episode Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {[
                { id: 'latest', label: 'Latest Episode', icon: Play },
                { id: 'future', label: 'Upcoming', icon: Calendar },
                { id: 'past', label: 'Past Episodes', icon: Clock }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Episodes Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Latest Tab */}
            {activeTab === 'latest' && (
              <div className="grid md:grid-cols-1 gap-6">
                {episodes.latest.map((episode, index) => (
                  <motion.div
                    key={episode.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1 aspect-video md:aspect-square bg-black">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${YOUTUBE_BASE_URL}${episode.videoId}?autoplay=0&rel=0`}
                          title={episode.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <EpisodeDetails episode={episode} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Future Tab */}
            {activeTab === 'future' && (
              <div className="grid md:grid-cols-2 gap-6">
                {episodes.future.map((episode, index) => (
                  <motion.div
                    key={episode.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden border border-gray-100 relative"
                  >
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                      Upcoming
                    </div>
                    <div className="p-6">
                      <div className="aspect-video bg-gray-200 rounded-xl mb-4 overflow-hidden">
                        <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span>{episode.date}</span>
                        <span className="flex-shrink-0">•</span>
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{episode.duration}</span>
                      </div>
                      <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 line-clamp-2">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {episode.description}
                      </p>
                      <a
                        href={episode.reminderLink}
                        className="btn-primary w-full py-3 text-sm inline-flex items-center justify-center gap-2"
                      >
                        <Bell className="h-4 w-4" />
                        Set Reminder
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Past Tab */}
            {activeTab === 'past' && (
              <div className="space-y-6">
                {episodes.past.map((episode, index) => (
                  <motion.div
                    key={episode.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
                  >
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="md:col-span-1 aspect-video bg-black">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`${YOUTUBE_BASE_URL}${episode.videoId}?autoplay=0&rel=0`}
                          title={episode.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <div className="md:col-span-3 p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 flex-wrap">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          <span>{episode.date}</span>
                          <span className="flex-shrink-0">•</span>
                          <Clock className="h-3 w-3 flex-shrink-0" />
                          <span>{episode.duration}</span>
                        </div>
                        <h3 className="text-base font-display font-semibold text-gray-900 mb-1 line-clamp-1">
                          {episode.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                          {episode.description}
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                          <a
                            href={episode.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            Watch on YouTube
                            <ExternalLink className="h-3 w-3" />
                          </a>
                          <span className="text-xs text-gray-400">•</span>
                          <button className="text-gray-600 text-sm font-medium inline-flex items-center gap-1 hover:text-primary transition-colors">
                            <ThumbsUp className="h-3 w-3" />
                            {episode.likes}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Meet the Hosts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
              Meet Your Hosts
            </h2>
            <p className="text-lg text-secondary font-medium max-w-2xl mx-auto">
              Industry experts passionate about transforming workplace wellness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hosts.map((host, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                    <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-900">{host.name}</h3>
                    <p className="text-sm text-primary">{host.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">{host.episodes} episodes</span> • Expertise in {host.expertise.join(', ')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-10 bg-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mic className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe now and join thousands of professionals transforming their approach to workplace wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@thecatalog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                Subscribe on YouTube
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                <Headphones className="h-5 w-5" />
                Follow on Spotify
              </button>
            </div>

            {/* Release Schedule */}
            <div className="mt-8 flex items-center justify-center gap-4 text-white/80 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span>New episodes every Friday</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>45-60 minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

// Episode Details Component - Fixed to use episode props
const EpisodeDetails = ({ episode }) => (
  <>
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 flex-wrap">
      <Calendar className="h-4 w-4 flex-shrink-0" />
      <span>{episode.date}</span>
      <span className="flex-shrink-0">•</span>
      <Clock className="h-4 w-4 flex-shrink-0" />
      <span>{episode.duration}</span>
    </div>

    <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3">
      {episode.title}
    </h3>

    <p className="text-gray-600 mb-4">
      {episode.description}
    </p>

    <div className="flex items-center gap-4 mb-4 flex-wrap">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
          <img src={episode.hostImage} alt={episode.host} className="w-full h-full object-cover" />
        </div>
        <span className="text-sm text-gray-700">{episode.host}</span>
      </div>
      <span className="text-gray-300 hidden sm:inline">|</span>
      <span className="text-sm text-gray-600">Guest: {episode.guest}</span>
    </div>

    {/* Engagement Stats */}
    <div className="flex items-center gap-6 mb-6">
      <div className="flex items-center gap-2">
        <ThumbsUp className="h-4 w-4 text-primary flex-shrink-0" />
        <span className="text-sm text-gray-600">{episode.likes} likes</span>
      </div>
      <div className="flex items-center gap-2">
        <Play className="h-4 w-4 text-primary flex-shrink-0" />
        <span className="text-sm text-gray-600">{episode.views} views</span>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      {episode.categories.map(cat => (
        <span key={cat} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
          {cat}
        </span>
      ))}
    </div>

    {/* Action Buttons */}
    <div className="flex flex-wrap gap-3">
      <a
        href={episode.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 btn-primary py-3 text-sm inline-flex items-center justify-center gap-2"
      >
        <Youtube className="h-4 w-4" />
        Watch on YouTube
        <ExternalLink className="h-3 w-3" />
      </a>
      <button className="flex-1 btn-outline py-3 text-sm inline-flex items-center justify-center gap-2">
        <Download className="h-4 w-4" />
        Download Audio
      </button>
    </div>
  </>
);

// Bell icon for reminders
const Bell = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export default PodcastPage;