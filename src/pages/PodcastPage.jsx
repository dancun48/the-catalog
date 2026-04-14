import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Calendar, Clock, Mic, Headphones, Users, Heart, 
  Share2, Download, Youtube, ExternalLink, ThumbsUp, Award, 
  Zap, Brain, TrendingUp, Sparkles, ArrowRight, Pause, Volume2, VolumeX
} from 'lucide-react';
import { Helmet } from 'react-helmet';

// Import placeholder images (keep your existing imports)
import podcastCover1 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover2 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover3 from '../assets/images/podcasts/doc1.jpeg';
import podcastCover4 from '../assets/images/podcasts/doc1.jpeg';
import host1 from '../assets/images/hosts/doc1.jpeg';
import host2 from '../assets/images/hosts/doc1.jpeg';

// YouTube channel details
const CHANNEL_URL = 'https://www.youtube.com/@TheCatalogtzPodcast';
const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/';

// Video IDs from The Catalog Podcast channel (as of March 2026)
const EPISODE_VIDEOS = {
  // Latest episode
  latest: '5il-wuEu-m0',  // "Mental Health: Workplace Stress & Burnout | The Catalog Podcast"
  
  // Past episodes (in order from newest to older)
  past: [
    { id: '5il-wuEu-m0', title: 'Diabetes and Nutrition Seminar: Are You Eating Right or Harming Yourself?⚠️' },
    { id: 'uOuYHfnjh1o', title: 'Detox 101: What It Really Means & How to support your natural detox systems.' },
    { id: 'fROzoSLO1EM', title: 'Workplace Wellness Matters 🧠 | Boost Mental Health at Work' },
    { id: '-Y_JBCrQIa0', title: 'The Real Secret to Effective Weight Loss (No Crash Diets!).' },
    { id: 'bt14azhGkBk', title: 'Eating with Diabetes: What to Eat & Why 🥗' }
  ],
  
  // Upcoming episodes (you can update these when dates are confirmed)
  future: [
    { id: 'upcoming1', title: 'The Future of Workplace Wellness in Africa', isUpcoming: true },
    { id: 'upcoming2', title: 'Breaking the Stigma: Mental Health Conversations', isUpcoming: true }
  ]
};

const PodcastPage = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  // Format date for display
  const formatDate = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Episode data from actual channel content
  const episodes = {
    latest: [
      {
        id: 'ep-latest',
        title: 'Diabetes and Nutrition Seminar: Are You Eating Right or Harming Yourself?⚠️',
        description: 'A deep dive into understanding diabetes management, recognizing poor eating habits, and practical strategies for managing the lifestyle disease, diabetes.',
        date: formatDate(7),
        duration: '32:15',
        host: 'Dr. Erick Otieno',
        hostImage: host1,
        // guest: 'Mental Health Expert',
        videoId: EPISODE_VIDEOS.latest,
        image: podcastCover1,
        views: '1.2K',
        likes: '48',
        categories: ['Diabetes Management', 'Eating Right'],
        youtubeUrl: `https://youtu.be/${EPISODE_VIDEOS.latest}`
      }
    ],
    future: EPISODE_VIDEOS.future.map((ep, index) => ({
      id: `future-${index}`,
      title: ep.title,
      description: 'An upcoming episode exploring critical topics in workplace wellness and performance optimization.',
      date: 'Coming Soon',
      duration: '45:00',
      host: index === 0 ? 'Dr. Erick Otieno' : 'Sarah Mwangi',
      hostImage: index === 0 ? host1 : host2,
      guest: 'Industry Experts',
      image: index === 0 ? podcastCover2 : podcastCover3,
      categories: index === 0 ? ['Wellness', 'Trends'] : ['Mental Health'],
      isUpcoming: true,
      reminderLink: '#'
    })),
    past: EPISODE_VIDEOS.past.map((ep, index) => ({
      id: `past-${index}`,
      title: ep.title,
      description: `Expert insights on ${ep.title.toLowerCase().replace(' | the catalog podcast', '')}. Practical advice for building healthier workplace cultures.`,
      date: formatDate(14 + index * 7),
      duration: ['28:45', '35:20', '42:10', '31:55', '38:30'][index],
      host: index % 2 === 0 ? 'Dr. Erick Otieno' : 'Sarah Mwangi',
      hostImage: index % 2 === 0 ? host1 : host2,
      guest: index === 0 ? 'HR Leaders Panel' : index === 1 ? 'Wellness Coach' : 'Industry Expert',
      videoId: ep.id,
      image: [podcastCover1, podcastCover2, podcastCover3, podcastCover4, podcastCover1][index],
      views: ['1.2K', '856', '2.1K', '943', '678'][index],
      likes: ['48', '32', '76', '41', '29'][index],
      categories: index === 0 ? ['Emotional Intelligence'] : index === 1 ? ['Wellness'] : index === 2 ? ['Preventive Health'] : index === 3 ? ['Leadership'] : ['Team Building'],
      youtubeUrl: `https://youtu.be/${ep.id}`
    }))
  };

  // Reasons to listen
  const reasonsToListen = [
    { icon: Brain, title: 'Expert Insights', description: 'Learn from leading physicians, HR experts, and industry leaders about workplace wellness and performance optimization.' },
    { icon: TrendingUp, title: 'Actionable Strategies', description: 'Get practical frameworks and tools you can implement immediately to improve your organization\'s wellness outcomes.' },
    { icon: Users, title: 'Real Success Stories', description: 'Hear from organizations that have transformed their workforce through data-driven wellness initiatives.' },
    { icon: Zap, title: 'Cutting-Edge Research', description: 'Stay updated with the latest research in preventive health, emotional intelligence, and workplace performance.' },
    { icon: Heart, title: 'Holistic Approach', description: 'Understand the connection between physical health, mental wellness, and organizational performance.' },
    { icon: Award, title: 'Industry Recognition', description: 'Content that has been recognized by leading wellness organizations and industry bodies.' }
  ];

  const stats = [
    { label: 'Episodes', value: '20+' },
    { label: 'Monthly Listeners', value: '5K+' },
    { label: 'Expert Guests', value: '15+' },
    { label: 'Countries', value: '8+' }
  ];

  return (
    <>
    <Helmet>
      <title>The Catalog - Podcast</title>
      <meta name="description" content="Join us for deep-dive conversations about workplace wellness, emotional intelligence, and building high-performance cultures." />
    </Helmet>
    <main className="pt-16 md:pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-12 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-primary font-medium mb-4">
                <Mic className="h-5 w-5" />
                <span><span className="text-secondary">The </span>Catalog<span className="text-secondary"> Podcast</span></span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                Where Wellness Meets 
                <span className="text-primary"> Performance</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-lg">
                Join us for deep-dive conversations about workplace wellness, emotional intelligence, and building high-performance cultures.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base inline-flex items-center gap-2 group">
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

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden relative group">
                    <div className="relative aspect-video">
                      <iframe
                        ref={videoRef}
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${EPISODE_VIDEOS.latest}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&loop=1&playlist=${EPISODE_VIDEOS.latest}`}
                        title="Podcast Episode Preview"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
                <Sparkles className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">New Episode Weekly</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">25-45 min episodes</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Listen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">Why Tune In?</h2>
            <p className="text-lg text-secondary font-medium max-w-2xl mx-auto">
              The Catalog Podcast delivers actionable insights for leaders, HR professionals, and anyone passionate about workplace wellness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasonsToListen.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-gray-50 rounded-2xl p-6 card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Episode Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {[
                { id: 'latest', label: 'Latest Episode', icon: Play },
                { id: 'future', label: 'Upcoming', icon: Calendar },
                { id: 'past', label: 'Past Episodes', icon: Clock }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'}`}>
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              {/* Latest Tab */}
              {activeTab === 'latest' && (
                <div className="grid md:grid-cols-1 gap-6">
                  {episodes.latest.map((episode, index) => (
                    <div key={episode.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-1 aspect-video md:aspect-square bg-black">
                          <iframe width="100%" height="100%" src={`${YOUTUBE_BASE_URL}${episode.videoId}?autoplay=0&rel=0`} title={episode.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <EpisodeDetails episode={episode} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Future Tab */}
              {activeTab === 'future' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {episodes.future.map((episode, index) => (
                    <div key={episode.id} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden border border-gray-100 relative">
                      <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium z-10">Upcoming</div>
                      <div className="p-6">
                        <div className="aspect-video bg-gray-200 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                          <Mic className="h-12 w-12 text-primary/40" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4" /><span>{episode.date}</span><span>•</span><Clock className="h-4 w-4" /><span>{episode.duration}</span>
                        </div>
                        <h3 className="text-lg font-display font-semibold text-gray-900 mb-2">{episode.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{episode.description}</p>
                        <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3 text-sm inline-flex items-center justify-center gap-2">
                          <Bell className="h-4 w-4" /> Subscribe for Updates
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Past Tab */}
              {activeTab === 'past' && (
                <div className="space-y-6">
                  {episodes.past.map((episode, index) => (
                    <div key={episode.id} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="md:col-span-1 aspect-video bg-black">
                          <iframe width="100%" height="100%" src={`${YOUTUBE_BASE_URL}${episode.videoId}?autoplay=0&rel=0`} title={episode.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
                        </div>
                        <div className="md:col-span-3 p-4">
                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <Calendar className="h-3 w-3" /><span>{episode.date}</span><span>•</span><Clock className="h-3 w-3" /><span>{episode.duration}</span>
                          </div>
                          <h3 className="text-base font-display font-semibold text-gray-900 mb-1">{episode.title}</h3>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{episode.description}</p>
                          <div className="flex items-center gap-4">
                            <a href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                              Watch on YouTube <ExternalLink className="h-3 w-3" />
                            </a>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-gray-600 text-sm inline-flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> {episode.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-10 bg-secondary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Mic className="h-16 w-16 text-white/90 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">Never Miss an Episode</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe now and join professionals transforming their approach to workplace wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                <Youtube className="h-5 w-5" /> Subscribe on YouTube
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                <Headphones className="h-5 w-5" /> Follow on Spotify
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 text-white/80 text-sm flex-wrap">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /><span>New episodes regularly</span></div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>25-45 minutes</span></div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    </>
  );
};

// Episode Details Component
const EpisodeDetails = ({ episode }) => (
  <>
    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 flex-wrap">
      <Calendar className="h-4 w-4" /><span>{episode.date}</span><span>•</span><Clock className="h-4 w-4" /><span>{episode.duration}</span>
    </div>
    <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3">{episode.title}</h3>
    <p className="text-gray-600 mb-4">{episode.description}</p>
    <div className="flex items-center gap-4 mb-4 flex-wrap">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden"><img src={episode.hostImage} alt={episode.host} className="w-full h-full object-cover" /></div>
        <span className="text-sm text-gray-700">{episode.host}</span>
      </div>
      {/* <span className="text-gray-300">|</span>
      <span className="text-sm text-gray-600">Guest: {episode.guest}</span> */}
    </div>
    <div className="flex items-center gap-6 mb-6">
      <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4 text-primary" /><span className="text-sm text-gray-600">{episode.likes} likes</span></div>
      <div className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" /><span className="text-sm text-gray-600">{episode.views} views</span></div>
    </div>
    <div className="flex flex-wrap gap-2 mb-6">
      {episode.categories.map(cat => (<span key={cat} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{cat}</span>))}
    </div>
    <div className="flex flex-wrap gap-3">
      <a href={episode.youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary py-3 text-sm inline-flex items-center justify-center gap-2">
        <Youtube className="h-4 w-4" /> Watch on YouTube <ExternalLink className="h-3 w-3" />
      </a>
      <button className="flex-1 btn-outline py-3 text-sm inline-flex items-center justify-center gap-2">
        <Download className="h-4 w-4" /> Download Audio
      </button>
    </div>
  </>
);

// Bell icon component
const Bell = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export default PodcastPage;