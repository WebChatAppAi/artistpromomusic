// Defining package type locally instead of importing to avoid conflicts
export type Package = {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular: boolean;
};

export const placeholderPackages: Package[] = [
  {
    id: 1,
    title: "Basic Promotion",
    description: "Entry-level promotion for emerging artists looking to gain initial traction.",
    price: "$99.99",
    features: [
      "Spotify playlist placements",
      "7-day promotion period",
      "300+ potential listeners",
      "Weekly performance report"
    ],
    isPopular: false
  },
  {
    id: 2,
    title: "Standard Promotion",
    description: "Our most popular package for artists ready to expand their audience.",
    price: "$199.99",
    features: [
      "Spotify & Apple Music placements",
      "14-day promotion period",
      "1,000+ potential listeners",
      "Social media feature",
      "Detailed analytics dashboard"
    ],
    isPopular: true
  },
  {
    id: 3,
    title: "Premium Promotion",
    description: "Comprehensive promotion for artists looking for significant exposure.",
    price: "$299.99",
    features: [
      "Multi-platform placement",
      "30-day promotion period",
      "3,000+ potential listeners",
      "Featured artist spotlight",
      "Personalized promotion strategy",
      "Priority support"
    ],
    isPopular: false
  },
  {
    id: 4,
    title: "Pro Promotion",
    description: "Advanced promotion package for professional artists and labels.",
    price: "$499.99",
    features: [
      "All platforms placement",
      "45-day promotion period",
      "10,000+ potential listeners",
      "Music blog features",
      "Radio promotion opportunity",
      "Dedicated promotion manager",
      "Full analytics & reporting"
    ],
    isPopular: false
  }
];
