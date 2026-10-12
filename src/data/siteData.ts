import heroChildrenImg from '../assets/images/hero_happy_children_1791809674699.jpg';
import caregiverStoryImg from '../assets/images/caregiver_reading_story_1791809688395.jpg';
import creativeArtImg from '../assets/images/creative_art_class_1791809700095.jpg';
import outdoorPlaygroundImg from '../assets/images/outdoor_playground_garden_1791809711966.jpg';
import indoorPlayImg from '../assets/images/indoor_play_sanctuary_1791809721685.jpg';

export const IMAGES = {
  heroChildren: heroChildrenImg,
  caregiverStory: caregiverStoryImg,
  creativeArt: creativeArtImg,
  outdoorPlayground: outdoorPlaygroundImg,
  indoorPlay: indoorPlayImg,
};

export interface ProgramItem {
  id: string;
  number: string;
  title: string;
  ageGroup: string;
  schedule: string;
  ratio: string;
  accentColor: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  learningActivities: string[];
  dailyRoutine: { time: string; activity: string }[];
}

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'early-childhood-care',
    number: '01',
    title: 'Early Childhood Care',
    ageGroup: '6 Months – 24 Months',
    schedule: 'Mon – Fri · 7:30 AM – 5:30 PM',
    ratio: '1:3 Caregiver Ratio',
    accentColor: '#FFDCE5',
    shortDesc:
      'Gentle sensory discovery, individualized sleep rhythms, and responsive attachment care in a calm nursery sanctuary.',
    fullDesc:
      'Our Early Childhood Care sanctuary is thoughtfully designed to mirror the warmth and serenity of home. Infants and young toddlers thrive through unhurried one-on-one bonding, tactile treasure baskets, soft musical lullabies, and milestone motor support.',
    image: caregiverStoryImg,
    learningActivities: [
      'Tactile sensory baskets with natural wood, silk, and woven textures',
      'Baby sign language and early vocalization storytelling circles',
      'Supported tummy time, rolling, and baby-safe balance exploration',
      'Daily outdoor stroller walks in our shaded botanical courtyard',
    ],
    dailyRoutine: [
      { time: '07:30 AM', activity: 'Warm welcome, parent check-in & gentle floor play' },
      { time: '09:00 AM', activity: 'Organic morning puree/milk feeding & sensory song circle' },
      { time: '10:00 AM', activity: 'Individualized morning nap & quiet nursery rest' },
      { time: '11:30 AM', activity: 'Tactile exploration & shaded garden discovery' },
      { time: '01:30 PM', activity: 'Afternoon rest, cuddle storytime & family pickup updates' },
    ],
  },
  {
    id: 'learning-through-play',
    number: '02',
    title: 'Learning Through Play',
    ageGroup: '2 – 3.5 Years',
    schedule: 'Mon – Fri · 8:00 AM – 4:30 PM',
    ratio: '1:5 Caregiver Ratio',
    accentColor: '#D8F1FF',
    shortDesc:
      'Montessori-inspired block engineering, dramatic roleplay, early numeracy, and joyful social cooperation.',
    fullDesc:
      'Curiosity leads every morning in our Learning Through Play studios. Toddlers and young preschoolers build foundational language, spatial reasoning, and emotional self-regulation by experimenting with open-ended wooden materials, water tables, and group storytelling.',
    image: heroChildrenImg,
    learningActivities: [
      'Architectural block building & geometric sorting puzzles',
      'Interactive puppet theater & emotional vocabulary games',
      'Practical life skills: pouring, flower arranging, and table setting',
      'Outdoor mud kitchen & cooperative sandcastle engineering',
    ],
    dailyRoutine: [
      { time: '08:00 AM', activity: 'Arrival, free choice Montessori shelf exploration' },
      { time: '09:30 AM', activity: 'Morning greeting circle, weather calendar & fruit snack' },
      { time: '10:15 AM', activity: 'Guided discovery stations & outdoor playground adventure' },
      { time: '12:00 PM', activity: 'Family-style warm organic lunch & cozy cot rest' },
      { time: '02:45 PM', activity: 'Cooperative story acting, music & afternoon reflection' },
    ],
  },
  {
    id: 'creative-activities',
    number: '03',
    title: 'Creative Activities',
    ageGroup: '3 – 5 Years',
    schedule: 'Mon – Fri · 8:30 AM – 4:30 PM',
    ratio: '1:6 Caregiver Ratio',
    accentColor: '#FFF0B3',
    shortDesc:
      'Sunlit atelier workshops featuring watercolor painting, clay sculpture, acoustic rhythm, and botanical crafts.',
    fullDesc:
      'Inspired by the Reggio Emilia atelier philosophy, our Creative Activities program invites children to express their observations through a hundred expressive languages—from natural pigment painting and potter’s clay to percussion ensembles and collaborative murals.',
    image: creativeArtImg,
    learningActivities: [
      'Easel painting with non-toxic watercolors and botanical dyes',
      'Beeswax modeling, natural clay pottery, and paper collage',
      'Rhythm instruments, xylophone circles, and movement storytelling',
      'Nature journaling with pressed leaves and magnifying glasses',
    ],
    dailyRoutine: [
      { time: '08:30 AM', activity: 'Morning studio warm-up & sketchbook drawing' },
      { time: '09:45 AM', activity: 'Featured Atelier Workshop: Clay, Paint, or Collage' },
      { time: '11:15 AM', activity: 'Botanical garden color hunt & outdoor movement' },
      { time: '12:15 PM', activity: 'Nourishing lunch followed by acoustic listening rest' },
      { time: '02:30 PM', activity: 'Music & theatrical expression before family gallery walk' },
    ],
  },
  {
    id: 'health-and-wellness',
    number: '04',
    title: 'Health and Wellness',
    ageGroup: 'All Ages (1 – 6 Years)',
    schedule: 'Integrated Daily Curriculum',
    ratio: '1:6 Caregiver Ratio',
    accentColor: '#D8F4E5',
    shortDesc:
      'Seed-to-table organic gardening, mindful breathing, children’s yoga, and active outdoor gross-motor play.',
    fullDesc:
      'Healthy bodies and peaceful minds grow together. Our Health and Wellness curriculum integrates daily seed-to-table harvesting in our raised vegetable beds, playful animal yoga poses, nutritious chef-prepared meals, and joyful outdoor climbing challenges.',
    image: outdoorPlaygroundImg,
    learningActivities: [
      'Planting, watering, and harvesting herbs and strawberries in our garden',
      'Playful children’s yoga, balance beams, and obstacle courses',
      'Mindful belly-breathing with pinwheels and calm-down sensory jars',
      'Hands-on culinary prep: washing berries, kneading whole-grain dough',
    ],
    dailyRoutine: [
      { time: '08:30 AM', activity: 'Morning sun stretches & mindful breathing circle' },
      { time: '10:00 AM', activity: 'Raised-bed garden tending & fresh herb tasting' },
      { time: '11:00 AM', activity: 'Timber climbing structures & gross-motor games' },
      { time: '12:00 PM', activity: 'Chef-prepared seasonal organic lunch & hydration' },
      { time: '03:00 PM', activity: 'Restorative quiet reading & afternoon smoothie prep' },
    ],
  },
  {
    id: 'after-school-support',
    number: '05',
    title: 'After-School Support',
    ageGroup: '4 – 7 Years',
    schedule: 'Mon – Fri · 2:30 PM – 6:00 PM',
    ratio: '1:7 Caregiver Ratio',
    accentColor: '#E8DDFB',
    shortDesc:
      'Unhurried afternoon decompression, reading mentorship, STEAM tinkering clubs, and wholesome afternoon snacks.',
    fullDesc:
      'After a busy school day, older children need a welcoming harbor that balances relaxation with engaging enrichment. We provide nutritious warm snacks, patient reading and homework companionship, board game clubs, and outdoor free play.',
    image: indoorPlayImg,
    learningActivities: [
      'One-on-one early reading mentorship and phonics games',
      'Hands-on STEAM challenges: wooden marble runs & simple circuits',
      'Cooperative board games, chess basics, and friendship circles',
      'Unstructured outdoor playground recreation and garden care',
    ],
    dailyRoutine: [
      { time: '02:30 PM', activity: 'Warm arrival, wholesome snack bar & decompression chat' },
      { time: '03:15 PM', activity: 'Reading nook companionship & guided homework support' },
      { time: '04:00 PM', activity: 'STEAM tinkering club or outdoor timber playground' },
      { time: '05:00 PM', activity: 'Quiet board games, reading teepee & parent pickup' },
    ],
  },
];

export interface FacilityItem {
  id: string;
  number: string;
  name: string;
  zone: string;
  capacity: string;
  accentColor: string;
  description: string;
  features: string[];
  safetyStandard: string;
  image: string;
}

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'activity-rooms',
    number: '01',
    name: 'Activity Rooms',
    zone: 'Main Learning Wing',
    capacity: '14 Children per Studio',
    accentColor: '#D8F1FF',
    description:
      'Flooded with natural southern daylight, our main activity rooms feature low solid-birch Montessori shelving, acoustic timber ceilings, and radiant warm hardwood floors.',
    features: ['HEPA H13 medical-grade air purification', 'Ergonomic child-height solid birch furniture', 'Direct walk-out access to sensory courtyard'],
    safetyStandard: 'Finger-safe door hinges & zero-VOC organic wall finishes',
    image: heroChildrenImg,
  },
  {
    id: 'reading-corner',
    number: '02',
    name: 'Reading Corner',
    zone: 'Quiet Literacy Nook',
    capacity: '8 Children',
    accentColor: '#FFF0B3',
    description:
      'A serene sanctuary lined with front-facing picture book displays, organic cotton floor cushions, and a canvas reading teepee for unhurried storytelling.',
    features: ['Over 450 curated classic and bilingual picture books', 'Soft acoustic felt wall panels for quiet focus', 'Warm 2700K circadian-friendly reading lamps'],
    safetyStandard: 'Anchored low-profile bookcases & hypoallergenic washable textiles',
    image: caregiverStoryImg,
  },
  {
    id: 'indoor-play-area',
    number: '03',
    name: 'Indoor Play Area',
    zone: 'Atrium Movement Hall',
    capacity: '16 Children',
    accentColor: '#FFDCE5',
    description:
      'Designed for rainy-day gross-motor joy, featuring Pikler climbing triangles, soft pastel shock-absorbing mats, wooden balance beams, and imaginative playhouses.',
    features: ['Custom birch Pikler climbing arches and ramps', '40mm dual-density impact-absorbing pastel play mats', 'Dramatic play wooden market & kitchen studio'],
    safetyStandard: 'ASTM F1487 certified indoor climbing heights & rounded corners',
    image: indoorPlayImg,
  },
  {
    id: 'outdoor-playground',
    number: '04',
    name: 'Outdoor Playground',
    zone: 'South Botanical Garden',
    capacity: '24 Children',
    accentColor: '#D8F4E5',
    description:
      'An eco-friendly outdoor wonderland with Robinia timber climbing forts, UV-protective shade sails, raised organic vegetable gardens, and a natural stone water pump.',
    features: ['UPF 50+ architectural shade sails over play zones', 'EPDM poured-in-place safety turf & sand discovery pit', 'Child-height raised organic herb and berry beds'],
    safetyStandard: 'Fully enclosed 6-foot perimeter fencing with biometric gate locks',
    image: outdoorPlaygroundImg,
  },
  {
    id: 'dining-area',
    number: '05',
    name: 'Dining Area',
    zone: 'Harvest Commons',
    capacity: '20 Children',
    accentColor: '#E8DDFB',
    description:
      'A bright, communal dining room where children share warm, chef-prepared organic meals family-style, practicing gratitude, conversation, and self-serving skills.',
    features: ['Commercial allergy-safe organic prep kitchen', 'Child-height handwashing sinks at entrance', 'Porcelain and tempered glass child-sized tableware'],
    safetyStandard: '100% nut-free facility with color-coded allergy protocols',
    image: heroChildrenImg,
  },
  {
    id: 'rest-areas',
    number: '06',
    name: 'Rest Areas',
    zone: 'Dream Sanctuary',
    capacity: '12 Cots / Cribs',
    accentColor: '#D8F1FF',
    description:
      'Calm, dimmable sleeping suites with breathable organic cotton cots, gentle white-noise acoustics, and continuous visual supervision by certified caregivers.',
    features: ['GREENGUARD Gold certified solid wood cribs & cots', 'Individual linen cubbies washed daily at 60°C', 'Dimmable indirect cove lighting & gentle soundscapes'],
    safetyStandard: 'Safe-sleep infant monitoring & 5-minute physical check logs',
    image: indoorPlayImg,
  },
  {
    id: 'creative-learning-spaces',
    number: '07',
    name: 'Creative Learning Spaces',
    zone: 'Sunlit Atelier',
    capacity: '12 Young Artists',
    accentColor: '#FFDCE5',
    description:
      'Our dedicated art and STEAM studio equipped with double-sided wooden easels, clay wheels, light tables, and washable porcelain sinks for messy creative discovery.',
    features: ['Natural north-facing studio window light', 'Backlit sensory exploration tables & magnifiers', 'Drying racks and gallery display rails for student work'],
    safetyStandard: '100% AP-certified non-toxic, plant-based pigments and clays',
    image: creativeArtImg,
  },
  {
    id: 'safety-facilities',
    number: '08',
    name: 'Safety Facilities',
    zone: 'Campus-Wide Infrastructure',
    capacity: 'Full Campus Coverage',
    accentColor: '#D8F4E5',
    description:
      'Comprehensive safety architecture integrated seamlessly into our warm home aesthetic, including biometric check-in kiosks, pediatric nurse station, and radiant floor heating.',
    features: ['Encrypted parent PIN & biometric lobby vestibule', 'Dedicated pediatric first-aid & wellness isolation suite', 'Automated air quality, CO2, and temperature sensors'],
    safetyStandard: '24/7 monitored perimeter security & Pediatric CPR-certified staff',
    image: outdoorPlaygroundImg,
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Learning' | 'Playtime' | 'Activities' | 'Events' | 'Facilities';
  caption: string;
  date: string;
  aspect: 'wide' | 'tall' | 'square';
  image: string;
  accentColor: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Morning Wooden Block Architecture',
    category: 'Learning',
    caption: 'Preschoolers collaborating on a multi-tower bridge in our sunlit main studio.',
    date: 'October 2026',
    aspect: 'wide',
    image: heroChildrenImg,
    accentColor: '#D8F1FF',
  },
  {
    id: 'gal-2',
    title: 'Storybook Circle in the Reading Nook',
    category: 'Learning',
    caption: 'Interactive picture book reading with expressive character voices and cozy cushions.',
    date: 'September 2026',
    aspect: 'square',
    image: caregiverStoryImg,
    accentColor: '#FFF0B3',
  },
  {
    id: 'gal-3',
    title: 'Watercolor Botanical Painting',
    category: 'Activities',
    caption: 'Young artists mixing primary watercolors inspired by autumn leaves from our garden.',
    date: 'October 2026',
    aspect: 'tall',
    image: creativeArtImg,
    accentColor: '#FFDCE5',
  },
  {
    id: 'gal-4',
    title: 'Timber Fort & Sensory Garden Harvest',
    category: 'Facilities',
    caption: 'Our UPF-50 shaded outdoor playground and raised organic vegetable beds.',
    date: 'August 2026',
    aspect: 'wide',
    image: outdoorPlaygroundImg,
    accentColor: '#D8F4E5',
  },
  {
    id: 'gal-5',
    title: 'Scandinavian Indoor Play Sanctuary',
    category: 'Facilities',
    caption: 'Our calm reading teepee, birch Montessori shelves, and pastel cushioned play floor.',
    date: 'September 2026',
    aspect: 'square',
    image: indoorPlayImg,
    accentColor: '#E8DDFB',
  },
  {
    id: 'gal-6',
    title: 'Cooperative Puzzle & Geometry Hour',
    category: 'Playtime',
    caption: 'Developing spatial reasoning and turn-taking through tactile wooden toys.',
    date: 'October 2026',
    aspect: 'square',
    image: indoorPlayImg,
    accentColor: '#D8F1FF',
  },
  {
    id: 'gal-7',
    title: 'Autumn Harvest Family Festival',
    category: 'Events',
    caption: 'Parents and children tending the garden beds during our seasonal community open house.',
    date: 'September 2026',
    aspect: 'wide',
    image: outdoorPlaygroundImg,
    accentColor: '#FFF0B3',
  },
  {
    id: 'gal-8',
    title: 'Mixed-Media Collage & Paper Craft',
    category: 'Activities',
    caption: 'Small-group table crafting focused on fine-motor scissor skills and color harmony.',
    date: 'October 2026',
    aspect: 'square',
    image: creativeArtImg,
    accentColor: '#FFDCE5',
  },
  {
    id: 'gal-9',
    title: 'Afternoon Storytelling & Puppet Show',
    category: 'Events',
    caption: 'Friday afternoon literary celebration with families and educators.',
    date: 'August 2026',
    aspect: 'tall',
    image: caregiverStoryImg,
    accentColor: '#E8DDFB',
  },
  {
    id: 'gal-10',
    title: 'Morning Circle & Friendship Games',
    category: 'Playtime',
    caption: 'Building empathy, joyful laughter, and communication on our woven classroom rug.',
    date: 'October 2026',
    aspect: 'wide',
    image: heroChildrenImg,
    accentColor: '#D8F4E5',
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  qualifications: string;
  specialty: string;
  bio: string;
  favoriteBook: string;
  accentColor: string;
  image: string;
}

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'claire-bennett',
    name: 'Dr. Clara Vance (Sample Profile)',
    role: 'Founder & Early Childhood Director',
    experience: '16 Years in Early Education',
    qualifications: 'Ed.D. in Early Childhood Development · AMI Montessori Diploma',
    specialty: 'Reggio Emilia & Attachment-Led Pedagogy',
    bio: 'Clara founded Little Hearts with a vision to blend the gentle warmth of a family home with research-backed Montessori and Reggio Emilia learning studios.',
    favoriteBook: 'The Wonderful Things You Will Be',
    accentColor: '#FFDCE5',
    image: caregiverStoryImg,
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova (Sample Profile)',
    role: 'Lead Montessori & Play Educator',
    experience: '11 Years Experience',
    qualifications: 'M.A. Early Childhood Education · Pediatric CPR & First Aid',
    specialty: 'Emergent Literacy & Spatial Block Play',
    bio: 'Elena creates deeply engaging morning discovery invitations that spark natural mathematical thinking, storytelling, and kindness among toddlers and preschoolers.',
    favoriteBook: 'Frederick by Leo Lionni',
    accentColor: '#D8F1FF',
    image: heroChildrenImg,
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin-Holloway (Sample Profile)',
    role: 'Creative Atelierista & Art Specialist',
    experience: '8 Years Experience',
    qualifications: 'B.F.A. Fine Arts & Child Art Therapy Certification',
    specialty: 'Botanical Watercolors, Clay & Sensory Arts',
    bio: 'Maya guides our sunlit art studio, helping children explore natural pigments, potter’s clay, and acoustic rhythm instruments without pressure or templates.',
    favoriteBook: 'Ish by Peter H. Reynolds',
    accentColor: '#FFF0B3',
    image: creativeArtImg,
  },
  {
    id: 'hannah-osei',
    name: 'Hannah Osei, RN (Sample Profile)',
    role: 'Child Wellness & Nutrition Coordinator',
    experience: '10 Years Pediatric Nursing',
    qualifications: 'Registered Pediatric Nurse (BSN) · Certified Child Nutritionist',
    specialty: 'Allergy-Safe Organic Menus & Outdoor Wellness',
    bio: 'Hannah oversees our campus safety protocols, seed-to-table organic harvest menus, and daily outdoor gross-motor wellness routines.',
    favoriteBook: 'Up in the Garden and Down in the Dirt',
    accentColor: '#D8F4E5',
    image: outdoorPlaygroundImg,
  },
  {
    id: 'sophie-laurent',
    name: 'Sophie Laurent (Sample Profile)',
    role: 'Infant & Nursery Sanctuary Lead',
    experience: '9 Years Infant Care',
    qualifications: 'RIE Certified Infant Specialist · Baby Sign Language Instructor',
    specialty: 'Responsive Infant Attachment & Sensory Care',
    bio: 'Sophie brings calm, unhurried attentiveness to our nursery wing, partnering closely with parents to honor each baby’s natural sleep and feeding rhythms.',
    favoriteBook: 'Everywhere Babies by Susan Meyers',
    accentColor: '#E8DDFB',
    image: indoorPlayImg,
  },
  {
    id: 'lucas-meyer',
    name: 'Lucas Meyer (Sample Profile)',
    role: 'After-School & Outdoor Naturalist',
    experience: '7 Years Youth Mentorship',
    qualifications: 'B.S. Environmental Education · Forest School Level 3 Leader',
    specialty: 'Botanical Gardening & STEAM Tinkering',
    bio: 'Lucas leads our afternoon outdoor explorations and after-school STEAM club, teaching children how to tend vegetable beds and build wooden marble runs.',
    favoriteBook: 'Miss Rumphius by Barbara Cooney',
    accentColor: '#D8F1FF',
    image: outdoorPlaygroundImg,
  },
];

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Upcoming' | 'Past Activity';
  audience: string;
  accentColor: string;
  summary: string;
  fullDescription: string;
  highlights: string[];
  image: string;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'autumn-lantern-walk',
    title: 'Autumn Garden Harvest & Lantern Open House',
    date: 'Saturday, October 24, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'South Botanical Garden & Atelier',
    category: 'Upcoming',
    audience: 'Prospective & Enrolled Families',
    accentColor: '#FFF0B3',
    summary:
      'Join us for pumpkin harvesting, handmade paper lantern crafting, warm organic apple cider, and guided tours of our classrooms.',
    fullDescription:
      'Experience the seasonal magic of Little Hearts during our annual Autumn Harvest Open House. Children will harvest late-season herbs and miniature pumpkins from our raised garden beds, craft translucent watercolor paper lanterns in the Atelier, and enjoy freshly baked cinnamon oat scones prepared by our kitchen.',
    highlights: [
      'Guided small-group tour with Director Dr. Clara Vance at 10:30 AM & 11:45 AM',
      'Hands-on watercolor lantern workshop for children ages 1–6',
      'Tasting table featuring our autumn organic lunch menu',
    ],
    image: outdoorPlaygroundImg,
  },
  {
    id: 'parent-montessori-workshop',
    title: 'Calm Mornings: Montessori At-Home Workshop',
    date: 'Thursday, November 5, 2026',
    time: '5:30 PM – 7:00 PM',
    location: 'Main Learning Wing & Reading Sanctuary',
    category: 'Upcoming',
    audience: 'Parents & Caregivers (Childcare Provided)',
    accentColor: '#D8F1FF',
    summary:
      'An interactive evening workshop on setting up child-accessible home spaces that foster independence and peaceful transitions.',
    fullDescription:
      'Led by Lead Educator Elena Rostova, this practical evening session walks parents through simple, low-cost ways to arrange entryways, wardrobes, and play shelves at home so toddlers feel capable and calm during busy weekday mornings.',
    highlights: [
      'Complimentary evening storytime childcare provided in the Indoor Play Sanctuary',
      'Take-home illustrated guide: "10 Practical Life Invitations for Ages 1–5"',
      'Q&A on positive boundary setting and emotional co-regulation',
    ],
    image: indoorPlayImg,
  },
  {
    id: 'winter-storylight-concert',
    title: 'Winter Solstice Acoustic Story & Lullaby Morning',
    date: 'Saturday, December 12, 2026',
    time: '9:30 AM – 11:30 AM',
    location: 'Reading Corner & Atrium Hall',
    category: 'Upcoming',
    audience: 'All Enrolled Families & Grandparents',
    accentColor: '#FFDCE5',
    summary:
      'A cozy morning of acoustic cello melodies, shadow-puppet folktales, and student clay ornament displays.',
    fullDescription:
      'We celebrate the cozy winter season with an unhurried morning concert designed specifically for young ears. Children and grandparents gather on woven rugs for live acoustic folk melodies, interactive shadow puppetry, and an exhibition of student beeswax and clay sculptures.',
    highlights: [
      'Live acoustic quartet performing gentle childhood folk songs',
      'Student ceramic and watercolor exhibition across all studios',
      'Warm chamomile-pear tea and organic shortbread reception',
    ],
    image: caregiverStoryImg,
  },
  {
    id: 'summer-water-atelier',
    title: 'Midsummer Botanical Dye & Water Discovery Day',
    date: 'Saturday, August 15, 2026',
    time: '10:00 AM – 12:30 PM',
    location: 'Outdoor Playground & Sunlit Atelier',
    category: 'Past Activity',
    audience: 'Community Families',
    accentColor: '#D8F4E5',
    summary:
      'Children explored natural flower-petal bundle dyeing on organic cotton bandanas alongside stone stream water play.',
    fullDescription:
      'Over 35 local families joined our educators to experiment with marigold, hibiscus, and blueberry natural dyes on organic cotton kerchiefs, followed by cooperative water-channel building at our outdoor hand-pump stream.',
    highlights: [
      'Each child dyed and took home a custom organic cotton sun kerchief',
      'Interactive seed-saving station with our garden naturalist',
      'Fresh watermelon and mint Agua Fresca picnic on the lawn',
    ],
    image: creativeArtImg,
  },
  {
    id: 'spring-grandparents-tea',
    title: 'Spring Blossom Intergenerational Story & Tea',
    date: 'Friday, May 22, 2026',
    time: '2:30 PM – 4:30 PM',
    location: 'Harvest Commons & Classroom Studios',
    category: 'Past Activity',
    audience: 'Grandparents & Special Family Friends',
    accentColor: '#E8DDFB',
    summary:
      'Preschoolers welcomed their grandparents for student-poured herbal tea, wooden block demonstrations, and shared reading.',
    fullDescription:
      'Our preschoolers proudly hosted their grandparents and special elders, demonstrating how they set tables, arrange fresh garden flowers, and build architectural block structures together.',
    highlights: [
      'Handmade pressed-flower bookmarks gifted by students',
      'Recorded oral family stories added to our classroom library',
      'Collaborative wooden block city built by children and grandparents',
    ],
    image: heroChildrenImg,
  },
];

export interface TestimonialItem {
  id: string;
  parentName: string;
  role: string;
  childInfo: string;
  program: string;
  rating: number;
  outcomeMetric: string;
  beforeAfterQuote: string;
  accentColor: string;
  initials: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    parentName: 'Amara & Julian Okafor (Sample Demonstration)',
    role: 'Parents of Maya (Age 3) · Enrolled 18 Months',
    childInfo: 'Learning Through Play Program',
    program: 'Learning Through Play',
    rating: 5,
    outcomeMetric: 'Transitioned from shy separation to joyful morning independence in 3 weeks',
    beforeAfterQuote:
      'Before finding Little Hearts, Maya experienced intense separation anxiety at drop-off. Within three weeks of Elena’s gentle morning greeting ritual and cozy reading corner check-ins, she began running inside with a huge smile and now narrates her block-building projects every evening at dinner.',
    accentColor: '#D8F1FF',
    initials: 'AO',
  },
  {
    id: 'test-2',
    parentName: 'Dr. Henrik & Claire Lindqvist (Sample Demonstration)',
    role: 'Pediatrician & Architect · Parents of Leo (Age 14 Months)',
    childInfo: 'Early Childhood Care Sanctuary',
    program: 'Early Childhood Care',
    rating: 5,
    outcomeMetric: 'Consistent 2-hour restorative naps & 100% allergy-safe organic nutrition',
    beforeAfterQuote:
      'As a pediatrician, I scrutinized every safety detail—from the HEPA H13 air filtration to the 1:3 infant caregiver ratio. Our son Leo went from fragmented naps at home to peaceful two-hour rests in the Dream Sanctuary, and we receive thoughtful photo journals every afternoon.',
    accentColor: '#FFDCE5',
    initials: 'HL',
  },
  {
    id: 'test-3',
    parentName: 'Priya & Devansh Patel (Sample Demonstration)',
    role: 'Parents of Aarav (Age 4.5) · Enrolled 2 Years',
    childInfo: 'Creative Activities & Health Program',
    program: 'Creative Activities',
    rating: 5,
    outcomeMetric: 'Tries 12+ new garden vegetables & reads 20 minutes daily with excitement',
    beforeAfterQuote:
      'Aarav used to be a very selective eater and hesitant with pencils. After harvesting snap peas in the Little Hearts garden and painting daily at the sunlit easels, he eagerly asks for green salads at home and writes his own illustrated storybooks every weekend.',
    accentColor: '#FFF0B3',
    initials: 'PP',
  },
  {
    id: 'test-4',
    parentName: 'Sarah Jenkins-Morales (Sample Demonstration)',
    role: 'Working Mother of Twins Noah & Sofia (Age 5)',
    childInfo: 'After-School Support Club',
    program: 'After-School Support',
    rating: 5,
    outcomeMetric: 'Stress-free evenings with reading practice completed before 5:30 PM pickup',
    beforeAfterQuote:
      'Our weekday evenings used to be a rushed blur of tired meltdowns and unfinished reading folders. Now, Noah and Sofia decompress in the timber garden, enjoy warm organic snacks, and finish their reading mentorship with Lucas before I pick them up at 5:30 PM.',
    accentColor: '#D8F4E5',
    initials: 'SJ',
  },
  {
    id: 'test-5',
    parentName: 'Marcus & Evelyn Thorne (Sample Demonstration)',
    role: 'Parents of Beatrix (Age 2.5)',
    childInfo: 'Learning Through Play Program',
    program: 'Learning Through Play',
    rating: 5,
    outcomeMetric: 'Expanded bilingual vocabulary & compassionate sharing skills',
    beforeAfterQuote:
      'The calm, screen-free atmosphere at Little Hearts feels like an extension of our living room. Beatrix has blossomed from playing solo to inviting her friends into imaginative puppet stories and singing gentle cleanup songs at home.',
    accentColor: '#E8DDFB',
    initials: 'MT',
  },
];

export interface FaqItem {
  id: string;
  category:
    | 'Admission'
    | 'Care Programs'
    | 'Opening Hours'
    | 'Child Safety'
    | 'Meals'
    | 'Activities'
    | 'Parent Communication';
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Admission',
    question: 'What ages do you accept and how does the enrollment process work?',
    answer:
      'We welcome children from 6 months to 7 years old across our five specialized programs. Our enrollment process begins with an online application or campus tour request, followed by a 45-minute private family visit with our Director, and a gentle 3-day "warm transition" schedule tailored to your child’s comfort.',
  },
  {
    id: 'faq-2',
    category: 'Admission',
    question: 'Can we schedule an in-person tour before submitting an application?',
    answer:
      'Yes! We host private family tours Tuesday through Thursday mornings at 9:30 AM and 10:30 AM so you can observe our studios in action, meet our lead educators, and explore our outdoor botanical playground.',
  },
  {
    id: 'faq-3',
    category: 'Care Programs',
    question: 'What are your caregiver-to-child ratios in each classroom?',
    answer:
      'We maintain intentionally small groups that exceed state licensing standards: 1:3 in our Infant Nursery (6–24 months), 1:5 in Learning Through Play (2–3.5 years), 1:6 in Creative Preschool (3–5 years), and 1:7 in our After-School Club (4–7 years).',
  },
  {
    id: 'faq-4',
    category: 'Care Programs',
    question: 'Do you offer both full-time and part-time schedules?',
    answer:
      'We offer 5-day full-time care, 3-day (Mon/Wed/Fri) schedules, and 2-day (Tue/Thu) schedules for toddlers and preschoolers, as well as afternoon-only enrollment for our After-School Support program.',
  },
  {
    id: 'faq-5',
    category: 'Opening Hours',
    question: 'What are your daily operating hours and holiday closures?',
    answer:
      'Little Hearts Children’s Care Home is open Monday through Friday from 7:30 AM to 6:00 PM year-round. We close only on major public holidays and for two professional educator development days per year, announced 6 months in advance.',
  },
  {
    id: 'faq-6',
    category: 'Child Safety',
    question: 'What physical security and emergency medical protocols are in place?',
    answer:
      'Our campus features a double-vestibule biometric and PIN-controlled lobby, 6-foot enclosed perimeter garden fencing, finger-safe door guards, and HEPA H13 medical air filtration. Every educator holds current Pediatric CPR/First Aid certification, and our full-time Registered Pediatric Nurse is on-site daily.',
  },
  {
    id: 'faq-7',
    category: 'Meals',
    question: 'Are meals included, and how do you handle food allergies or dietary preferences?',
    answer:
      'All morning snacks, warm organic lunches, and afternoon whole-food snacks are prepared fresh daily in our 100% nut-free commercial kitchen at no additional cost. We gladly accommodate vegetarian, vegan, dairy-free, gluten-free, and religious dietary needs with individualized color-coded serving protocols.',
  },
  {
    id: 'faq-8',
    category: 'Activities',
    question: 'Is Little Hearts a screen-free environment?',
    answer:
      'Yes, our classrooms and play spaces are 100% screen-free. Children spend their days engaged in hands-on wooden block architecture, watercolor painting, outdoor gardening, acoustic music, and live storytelling.',
  },
  {
    id: 'faq-9',
    category: 'Parent Communication',
    question: 'How do parents receive updates during the day?',
    answer:
      'Caregivers log nap times, organic meal portions, diaper/potty updates, and curated photo moments in our secure parent journal app. Importantly, educators only update journals during rest hours so their eyes and hearts remain 100% present with the children during active play.',
  },
];
