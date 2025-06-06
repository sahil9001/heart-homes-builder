
export const buildPackages = [
  { 
    tier: 'Starter', 
    rate: 1600, 
    features: [
      'RCC frame structure',
      'Standard fittings',
      'Regular tiles',
      'Basic paint finish',
      'Standard wiring & fixtures',
      '10-year structural warranty'
    ],
    recommended: false
  },
  { 
    tier: 'Classic', 
    rate: 1900, 
    features: [
      'Premium tiles in all rooms',
      'Modular kitchen with granite',
      'Premium sanitary fixtures',
      'Weather-proof paint',
      'Concealed wiring & LED lighting',
      '15-year structural warranty'
    ],
    recommended: true
  },
  { 
    tier: 'Premium', 
    rate: 2300, 
    features: [
      'Italian marble flooring',
      'Full smart-home integration',
      'Designer kitchen & bathrooms',
      'Premium woodwork & finishes',
      'Advanced insulation & acoustics',
      '20-year comprehensive warranty'
    ],
    recommended: false
  }
];

export const renovatePackages = [
  { 
    tier: 'Lite', 
    rate: 600, 
    features: [
      'Interior painting',
      'Floor polishing',
      'Minor repairs',
      'Basic fixture upgrades',
      '2-year warranty'
    ],
    recommended: false
  },
  { 
    tier: 'Plus', 
    rate: 1100, 
    features: [
      'Wall modification/removal',
      'Complete plumbing overhaul',
      'Electrical system upgrade',
      'Flooring replacement',
      'Cabinet & fixture modernization',
      '5-year warranty'
    ],
    recommended: true
  }
];
