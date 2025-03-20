import { useState } from 'react';
import { Calendar, Edit2, MapPin, Save, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface ProfileInfo {
  [key: string]: string;
}

interface UserProfile {
  personal: ProfileInfo;
  athletic: ProfileInfo;
  stats: ProfileInfo;
  settings?: ProfileInfo;
}

interface ProfileCardProps {
  profile: UserProfile;
  className?: string;
}

type SectionKey = keyof UserProfile;

const ProfileCard = ({ profile, className }: ProfileCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleSave = () => {
    // Here you would typically save the profile to your backend
    console.log('Saving profile:', editedProfile);
    setIsEditing(false);
  };
  
  const handleChange = (section: string, field: string, value: string) => {
    const sectionKey = section as SectionKey;
    
    if (editedProfile[sectionKey]) {
      setEditedProfile({
        ...editedProfile,
        [sectionKey]: {
          ...editedProfile[sectionKey],
          [field]: value
        }
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
            <Input
              type="text"
              name="name"
              value={editedProfile.personal.name}
              onChange={(e) => handleChange('personal', 'name', e.target.value)}
              className="text-xl font-semibold text-center border-b border-border focus:outline-none focus:border-runner"
            />
          ) : (
            <h3 className="text-xl font-semibold">{profile.personal.name}</h3>
          )}
          
          <div className="flex justify-center items-center space-x-2 mt-1 text-sm text-muted-foreground">
            <MapPin size={14} />
            {isEditing ? (
              <Input
                type="text"
                name="location"
                value={editedProfile.personal.location}
                onChange={(e) => handleChange('personal', 'location', e.target.value)}
                className="w-40 text-center border-b border-border focus:outline-none focus:border-runner"
              />
            ) : (
              <span>{profile.personal.location}</span>
            )}
          </div>
          
          <div className="flex justify-center items-center space-x-2 mt-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            <span>Runner dal {profile.personal.since}</span>
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
                value={editedProfile.personal.bio}
                onChange={(e) => handleChange('personal', 'bio', e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner resize-none"
                rows={3}
              />
            ) : (
              <p className="text-sm text-muted-foreground">{profile.personal.bio}</p>
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
                    value={editedProfile.settings?.distanceUnit}
                    onChange={(e) => handleChange('settings', 'distanceUnit', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner"
                  >
                    <option value="km">Chilometri (km)</option>
                    <option value="mi">Miglia (mi)</option>
                  </select>
                ) : (
                  <p className="text-sm font-medium">
                    {profile.settings?.distanceUnit === 'km' ? 'Chilometri (km)' : 'Miglia (mi)'}
                  </p>
                )}
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Unità di passo</p>
                {isEditing ? (
                  <select
                    name="preferences.paceUnit"
                    value={editedProfile.settings?.paceUnit}
                    onChange={(e) => handleChange('settings', 'paceUnit', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner"
                  >
                    <option value="min/km">min/km</option>
                    <option value="min/mi">min/mi</option>
                  </select>
                ) : (
                  <p className="text-sm font-medium">{profile.settings?.paceUnit}</p>
                )}
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground mb-1">Inizio settimana</p>
                {isEditing ? (
                  <select
                    name="preferences.weekStart"
                    value={editedProfile.settings?.weekStart}
                    onChange={(e) => handleChange('settings', 'weekStart', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner"
                  >
                    <option value="monday">Lunedì</option>
                    <option value="sunday">Domenica</option>
                  </select>
                ) : (
                  <p className="text-sm font-medium">
                    {profile.settings?.weekStart === 'monday' ? 'Lunedì' : 'Domenica'}
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
