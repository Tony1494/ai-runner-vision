
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
