import { useState } from 'react';
import { Calendar, Edit2, MapPin, Save, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserProfile {
  name: string;
  location: string;
  since: string;
  bio: string;
  stats: {
    runs: number;
    distance: number;
    achievements: number;
  };
  preferences: {
    distanceUnit: 'km' | 'mi';
    paceUnit: 'min/km' | 'min/mi';
    weekStart: 'monday' | 'sunday';
  };
}

interface ProfileCardProps {
  profile: UserProfile;
  className?: string;
}

const ProfileCard = ({ profile, className }: ProfileCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleSave = () => {
    // In un'app reale, qui ci sarebbe una chiamata API per salvare i dati
    setIsEditing(false);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setEditedProfile({
        ...editedProfile,
        [section]: {
          ...editedProfile[section as keyof typeof editedProfile],
          [field]: value
        }
      });
    } else {
      setEditedProfile({
        ...editedProfile,
        [name]: value
      });
    }
  };
  
  return (
    <div className={cn("glass-card overflow-hidden animate-fade-in", className)}>
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-600">
        <button 
          onClick={isEditing ? handleSave : handleEdit}
          className="absolute top-4 right-4 glass-card p-2 rounded-full text-white"
        >
          {isEditing ? <Save size={18} /> : <Edit2 size={18} />}
        </button>
      </div>
      
      <div className="px-6 py-8 flex flex-col items-center relative">
        <div className="absolute -top-16 w-32 h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <User size={64} />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedProfile.name}
              onChange={handleChange}
              className="text-xl font-semibold text-center border-b border-border focus:outline-none focus:border-runner"
            />
          ) : (
            <h3 className="text-xl font-semibold">{profile.name}</h3>
          )}
          
          <div className="flex justify-center items-center space-x-2 mt-1 text-sm text-muted-foreground">
            <MapPin size={14} />
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={editedProfile.location}
                onChange={handleChange}
                className="w-40 text-center border-b border-border focus:outline-none focus:border-runner"
              />
            ) : (
              <span>{profile.location}</span>
            )}
          </div>
          
          <div className="flex justify-center items-center space-x-2 mt-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            <span>Runner dal {profile.since}</span>
          </div>
        </div>
        
        <div className="w-full mt-6">
          <div className="grid grid-cols-3 text-center border-y border-border py-4">
            <div>
              <p className="text-2xl font-semibold">{profile.stats.runs}</p>
              <p className="text-xs text-muted-foreground">Corse</p>
            </div>
            <div className="border-x border-border">
              <p className="text-2xl font-semibold">{profile.stats.distance}</p>
              <p className="text-xs text-muted-foreground">Km totali</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">{profile.stats.achievements}</p>
              <p className="text-xs text-muted-foreground">Obiettivi</p>
            </div>
          </div>
          
          <div className="py-4">
            <h4 className="text-sm font-medium mb-2">Bio</h4>
            {isEditing ? (
              <textarea
                name="bio"
                value={editedProfile.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner resize-none"
                rows={3}
              />
            ) : (
              <p className="text-sm text-muted-foreground">{profile.bio}</p>
            )}
          </div>
          
          <div className="py-4 border-t border-border">
            <h4 className="text-sm font-medium mb-4">Preferenze</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Unità di distanza</p>
                {isEditing ? (
                  <select
                    name="preferences.distanceUnit"
                    value={editedProfile.preferences.distanceUnit}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner"
                  >
                    <option value="km">Chilometri (km)</option>
                    <option value="mi">Miglia (mi)</option>
                  </select>
                ) : (
                  <p className="text-sm font-medium">
                    {profile.preferences.distanceUnit === 'km' ? 'Chilometri (km)' : 'Miglia (mi)'}
                  </p>
                )}
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Unità di passo</p>
                {isEditing ? (
                  <select
                    name="preferences.paceUnit"
                    value={editedProfile.preferences.paceUnit}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner"
                  >
                    <option value="min/km">min/km</option>
                    <option value="min/mi">min/mi</option>
                  </select>
                ) : (
                  <p className="text-sm font-medium">{profile.preferences.paceUnit}</p>
                )}
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Inizio settimana</p>
                {isEditing ? (
                  <select
                    name="preferences.weekStart"
                    value={editedProfile.preferences.weekStart}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner"
                  >
                    <option value="monday">Lunedì</option>
                    <option value="sunday">Domenica</option>
                  </select>
                ) : (
                  <p className="text-sm font-medium">
                    {profile.preferences.weekStart === 'monday' ? 'Lunedì' : 'Domenica'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
