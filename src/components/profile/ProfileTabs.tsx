
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface ProfileTabProps {
  tabs: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

const ProfileTabs = ({ tabs, defaultValue, children, className }: ProfileTabProps) => {
  return (
    <Tabs defaultValue={defaultValue} className={cn("w-full", className)}>
      <TabsList className="w-full justify-start mb-6 bg-transparent overflow-x-auto p-0 h-auto flex-wrap">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            className="flex items-center space-x-2 px-4 py-2 data-[state=active]:bg-runner/10 data-[state=active]:text-runner rounded-full"
          >
            {tab.icon && <span className="text-runner">{tab.icon}</span>}
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {children}
    </Tabs>
  );
};

export default ProfileTabs;
