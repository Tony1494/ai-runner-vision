
export interface ProfileInfo {
  [key: string]: string;
}

export interface UserProfile {
  personal: ProfileInfo;
  athletic: ProfileInfo;
  stats: {
    runs: number;
    distance: number;
    achievements: number;
  };
  settings: ProfileInfo;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  date: string;
  category: 'distanza' | 'velocità' | 'costanza' | 'miglioramento';
  level: 'bronze' | 'silver' | 'gold' | 'platinum';
}

export interface Equipment {
  id: number;
  name: string;
  type: 'scarpe' | 'abbigliamento' | 'accessori' | 'tecnologia';
  brand: string;
  model: string;
  purchaseDate: string;
  distance?: number;
  sessions?: number;
  wearPercentage?: number;
  notes?: string;
}

// Nuove interfacce per le funzionalità avanzate richieste

export interface RunningSignature {
  id: number;
  userId: string;
  strengthPoints: {
    category: string;
    value: number;
    percentile: number;
  }[];
  weaknessPoints: {
    category: string;
    value: number;
    percentile: number;
  }[];
  technicalProfile: {
    cadence: number;
    strideLength: number;
    groundContactTime: number;
    verticalOscillation: number;
  };
  energyProfile: {
    aerobicEfficiency: number;
    anaerobicCapacity: number;
    endurance: number;
    powerOutput: number;
  };
  lastUpdated: string;
}

export interface PerformanceMetrics {
  vo2max: number;
  ftpWatts?: number;
  lactateThreshold?: number;
  runningEconomy?: number;
  trainingLoad: {
    acute: number;
    chronic: number;
    ratio: number;
  };
  fitnessScore: number;
  fatigueScore: number;
  formScore: number;
}

export interface RacePrediction {
  distance: string;
  predictedTime: string;
  confidence: number;
  paceStrategy: {
    segments: {
      distance: string;
      targetPace: string;
    }[];
  };
  environmentalFactors: {
    temperature: number;
    humidity: number;
    elevation: number;
    wind: number;
    impact: number;
  };
}

export interface TrainingRecommendation {
  id: number;
  type: string;
  title: string;
  description: string;
  targetMetrics: string[];
  expectedBenefits: string[];
  priority: 'alta' | 'media' | 'bassa';
  timeframe: string;
}

