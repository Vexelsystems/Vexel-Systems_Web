/**
 * Seasonal Offers Configuration
 * 
 * This file contains all festival and promotional campaign configurations.
 * Technicians can easily update dates, messages, and discount ranges here.
 * 
 * Date Format: "MM-DD" (e.g., "01-14" for January 14)
 * For lunar calendar festivals, update dates annually.
 */

export interface SeasonalOffer {
  id: string;
  name: string;
  startDate: string; // MM-DD format
  endDate: string;   // MM-DD format
  emoji: string;
  color: string;
  gradient: string;
  imageUrl?: string; // Festival-specific image
  greetingMessage?: string; // Personalized greeting
  message?: string; // Custom message for this festival
  discountMin?: number; // Minimum discount percentage (default: 10)
  discountMax?: number; // Maximum discount percentage (default: 40)
  enabled: boolean; // Set to false to temporarily disable
}

export const seasonalOffers: SeasonalOffer[] = [
  // 🇱🇰 SRI LANKA - NATIONAL & CULTURAL FESTIVALS
  {
    id: "independence-day",
    name: "Independence Day",
    startDate: "02-01",
    endDate: "02-04",
    emoji: "🇱🇰",
    color: "#8B0000",
    gradient: "from-red-700 to-yellow-600",
    imageUrl: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800",
    greetingMessage: "Happy Independence Day, Sri Lanka!",
    message: "Celebrate Sri Lanka's Independence with exclusive tech solutions!",
    enabled: true
  },
  {
    id: "sinhala-tamil-new-year",
    name: "Sinhala & Tamil New Year",
    startDate: "04-12",
    endDate: "04-15",
    emoji: "🎊",
    color: "#E63946",
    gradient: "from-red-500 to-pink-500",
    imageUrl: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=800",
    greetingMessage: "Subha Aluth Avuruddak Vewa!",
    message: "Start the New Year with cutting-edge technology!",
    enabled: true
  },
  {
    id: "thai-pongal",
    name: "Thai Pongal",
    startDate: "01-13",
    endDate: "01-15",
    emoji: "🌾",
    color: "#FF6B35",
    gradient: "from-orange-500 to-yellow-500",
    imageUrl: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=800",
    greetingMessage: "Pongal Nalvazhthukkal!",
    message: "Harvest success with our technology solutions!",
    enabled: true
  },
  {
    id: "national-heroes-day",
    name: "National Heroes Day",
    startDate: "05-20",
    endDate: "05-22",
    emoji: "🎖️",
    color: "#2A9D8F",
    gradient: "from-teal-600 to-green-600",
    imageUrl: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800",
    greetingMessage: "Honoring Our Heroes!",
    message: "Honoring heroes with heroic discounts!",
    enabled: true
  },


  // 🛕 HINDU FESTIVALS
  
 
  {
    id: "deepavali",
    name: "Deepavali",
    startDate: "10-20", // Update annually
    endDate: "10-24",
    emoji: "🪔",
    color: "#FFB703",
    gradient: "from-yellow-500 to-orange-600",
    imageUrl: "https://images.unsplash.com/photo-1605548230272-a5cd6f87a2d1?w=800",
    greetingMessage: "Happy Deepavali!",
    message: "Light up your business with our technology!",
    enabled: true
  },

  // ☪️ MUSLIM FESTIVALS (Update dates annually - Lunar Calendar)
  {
    id: "ramadan",
    name: "Ramadan Kareem",
    startDate: "03-01", // Update annually
    endDate: "03-30",
    emoji: "🌙",
    color: "#2E8B57",
    gradient: "from-green-600 to-teal-600",
    imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
    greetingMessage: "Ramadan Kareem!",
    message: "Blessed Ramadan offers for your business growth!",
    discountMin: 20,
    discountMax: 40,
    enabled: true
  },
  {
    id: "eid-ul-fitr",
    name: "Eid-ul-Fitr",
    startDate: "03-31", // Update annually (End of Ramadan)
    endDate: "04-02",
    emoji: "🌙",
    color: "#228B22",
    gradient: "from-green-500 to-emerald-600",
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
    greetingMessage: "Eid Mubarak!",
    message: "Celebrate with exclusive tech deals!",
    enabled: true
  },
  {
    id: "eid-ul-adha",
    name: "Eid-ul-Adha",
    startDate: "06-15", // Update annually
    endDate: "06-18",
    emoji: "🕌",
    color: "#006400",
    gradient: "from-green-700 to-teal-700",
    imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
    greetingMessage: "Eid Mubarak!",
    enabled: true
  },

  // ✝️ CHRISTIAN FESTIVALS
  {
    id: "good-friday",
    name: "Good Friday",
    startDate: "04-18", // Update annually
    endDate: "04-18",
    emoji: "✝️",
    color: "#8B4789",
    gradient: "from-purple-700 to-indigo-700",
    imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800",
    greetingMessage: "Good Friday",
    enabled: true
  },
  {
    id: "easter",
    name: "Easter Sunday",
    startDate: "04-20", // Update annually
    endDate: "04-21",
    emoji: "🐣",
    color: "#FFB6C1",
    gradient: "from-pink-400 to-purple-400",
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
    greetingMessage: "Happy Easter!",
    message: "Resurrect your business with new technology!",
    enabled: true
  },
  {
    id: "christmas",
    name: "Christmas",
    startDate: "12-20",
    endDate: "12-26",
    emoji: "🎄",
    color: "#2A9D8F",
    gradient: "from-green-600 to-red-600",
    imageUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800",
    greetingMessage: "Merry Christmas!",
    message: "Gift your business the best tech!",
    discountMin: 25,
    discountMax: 50,
    enabled: true
  },

  // 🌍 INTERNATIONAL FESTIVALS
  {
    id: "new-year",
    name: "New Year",
    startDate: "12-28",
    endDate: "01-05",
    emoji: "🎆",
    color: "#FFD700",
    gradient: "from-yellow-400 to-orange-500",
    imageUrl: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800",
    greetingMessage: "Happy New Year 2026!",
    message: "Start 2026 with the best technology solutions!",
    discountMin: 20,
    discountMax: 45,
    enabled: true
  },
  {
    id: "valentines-day",
    name: "Valentine's Day",
    startDate: "02-12",
    endDate: "02-14",
    emoji: "💝",
    color: "#FF1493",
    gradient: "from-pink-500 to-red-500",
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800",
    greetingMessage: "Happy Valentine's Day!",
    message: "Fall in love with our technology solutions!",
    enabled: true
  },
  {
    id: "womens-day",
    name: "International Women's Day",
    startDate: "03-07",
    endDate: "03-08",
    emoji: "👩",
    color: "#9370DB",
    gradient: "from-purple-500 to-pink-500",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    greetingMessage: "Happy Women's Day!",
    message: "Empowering businesses, celebrating women!",
    enabled: true
  },

  

  // 🛍️ BUSINESS & SALES FESTIVALS
  {
    id: "black-friday",
    name: "Black Friday",
    startDate: "11-28", // Update annually (Last Friday of November)
    endDate: "11-29",
    emoji: "🛍️",
    color: "#000000",
    gradient: "from-gray-900 to-gray-700",
    imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
    greetingMessage: "Black Friday Mega Sale!",
    message: "Biggest tech deals of the year!",
    discountMin: 30,
    discountMax: 60,
    enabled: true
  },
  {
    id: "cyber-monday",
    name: "Cyber Monday",
    startDate: "12-01", // Update annually (Monday after Black Friday)
    endDate: "12-01",
    emoji: "💻",
    color: "#0066CC",
    gradient: "from-blue-600 to-cyan-600",
    imageUrl: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800",
    greetingMessage: "Cyber Monday Deals!",
    message: "Digital transformation deals!",
    discountMin: 30,
    discountMax: 55,
    enabled: true
  },
  {
    id: "year-end-sale",
    name: "Year-End Mega Sale",
    startDate: "12-15",
    endDate: "12-31",
    emoji: "🎁",
    color: "#DC143C",
    gradient: "from-red-600 to-pink-600",
    imageUrl: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
    greetingMessage: "Year-End Mega Sale!",
    message: "End the year with the best tech investments!",
    discountMin: 25,
    discountMax: 50,
    enabled: true
  },

  // 🌏 ASIAN FESTIVALS
  

  



];

/**
 * Get active seasonal offer for current date
 * Popup will show 5 days before the festival starts until the festival ends
 * @param currentDate - Optional date to check (defaults to today)
 * @returns Active seasonal offer or null
 */
export function getActiveSeasonalOffer(currentDate?: Date): SeasonalOffer | null {
  const now = currentDate || new Date();
  
  // Find the first enabled offer that matches the current date
  const activeOffer = seasonalOffers.find(offer => {
    if (!offer.enabled) return false;
    
    // Parse start and end dates
    const [startMonth, startDay] = offer.startDate.split('-').map(Number);
    const [endMonth, endDay] = offer.endDate.split('-').map(Number);
    
    // Create date objects for comparison (using current year)
    const currentYear = now.getFullYear();
    const startDate = new Date(currentYear, startMonth - 1, startDay);
    const endDate = new Date(currentYear, endMonth - 1, endDay);
    
    // Subtract 5 days from start date for early popup
    const earlyStartDate = new Date(startDate);
    earlyStartDate.setDate(earlyStartDate.getDate() - 5);
    
    // Handle year-wrap scenarios (e.g., Dec 28 - Jan 5)
    if (startMonth > endMonth) {
      // Year wrap case - adjust end date to next year
      endDate.setFullYear(currentYear + 1);
    }
    
    // Check if current date is within the range (5 days before start to end)
    return now >= earlyStartDate && now <= endDate;
  });

  return activeOffer || null;
}

/**
 * Generate random discount within offer's range
 * @param offer - Seasonal offer configuration
 * @returns Random discount percentage
 */
export function generateDiscount(offer: SeasonalOffer): number {
  const min = offer.discountMin || 10;
  const max = offer.discountMax || 40;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
