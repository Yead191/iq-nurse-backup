import React from 'react';
import { Card, Avatar, Tag, Button } from 'antd';
import { 
  HeartPulse, 
  Users, 
  Baby, 
  Calendar,
  ChevronRight,
  Stethoscope,
  Pill,
  UserCheck
} from 'lucide-react';
import { FaHeart, FaTag, FaUser } from 'react-icons/fa';

const SideBar: React.FC = () => {
  const studyGroups = [
    {
      id: 1,
      name: 'Cardiology Scholars',
      members: 4,
      icon: <FaHeart />,
      color: 'bg-blue-50',
      subtitle: 'New Posts - 4 people'
    },
    {
      id: 2,
      name: 'Neuro Nursing Group',
      members: 4,
      subtitle: 'New Posts - 4 people',
      icon: <FaUser />,
      color: 'bg-green-50',
  
    },
    {
      id: 3,
      name: 'Pediatric Nursing',
      members: 0,
      icon: <Baby  />,
      color: 'bg-purple-50',
      subtitle: 'New Posts - 4 people'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'NCLEX Strategy Webinar',
      date: 'Oct 28th - 2:00 PM EST',
      icon: <Stethoscope className="w-5 h-5 text-blue-600" />,
      color: 'bg-blue-100'
    },
    {
      id: 2,
      title: 'Pharmacology Review Session',
      date: 'Nov 2nd - 7:00 PM EST',
      icon: <Pill className="w-5 h-5 text-green-600" />,
      color: 'bg-green-100'
    },
    {
      id: 3,
      title: 'Med-Surg Study Group Meeting',
      date: 'Nov 5th - 6:00 PM EST',
      icon: <UserCheck className="w-5 h-5 text-purple-600" />,
      color: 'bg-purple-100'
    }
  ];

  const popularTags = [
    'NCLEX', 'Pharmacology', 'Med-Surg', 'Oncology', 
    'Care Plans', 'Pathology'
  ];

  return (
    <div className="w-80 bg-white p-4 sticky top-0 space-y-6  h-full">
      {/* Active Study Groups */}
      <div>
        <div className="flex items-center mb-4">
          <Users className="w-5 h-5 text-purple-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Active Study Groups</h2>
        </div>
        
        <div className="space-y-3">
          {studyGroups.map((group) => (
            <Card 
              key={group.id} 
              className="!p-5 hover:shadow-md transition-shadow cursor-pointer !border-t-0 !border-l-0 !border-r-0 !border-b border-gray-100"
              bodyStyle={{ padding: 0 }}
            >
              <div className="flex items-center justify-between !gap-2.5">
                <div className="flex items-center space-x-3 gap-2">
                  <Avatar className={`!bg-blue-100 !text-blue-400 flex items-center justify-center`}>
                    {group.icon}
                  </Avatar>
                  <div>
                    <h3 className="font-medium mb-1 text-gray-800 text-sm">{group.name}</h3>
                    {group.subtitle && (
                      <p className="text-[11px] text-gray-500">{group.subtitle}</p>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
        
        <Button 
          type="link" 
          className="text-purple-500 p-0 h-auto mt-3 flex items-center"
        >
          View all groups <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 text-purple-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
        </div>
        
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <Card 
              key={event.id} 
              className="!p-5 hover:shadow-md transition-shadow cursor-pointer !border-t-0 !border-l-0 !border-r-0 !border-b border-gray-100"
              bodyStyle={{ padding: 0 }}
            >
              <div className="flex items-start !space-x-3">
                <Avatar className={`!bg-blue-900 flex items-center !flex-col !rounded-md justify-center `}>
                    <span className="text-white font-semibold block text-[10px]">{new Date().getDate()}</span>
                    <span className="text-white font-semibold block text-[10px]">{(new Date().toDateString()).slice(4, 7)}</span>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 text-sm leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Button 
          type="link" 
          className="text-purple-500 p-0 h-auto mt-3 flex items-center"
        >
          View all events <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Popular Tags */}
      <div>
        <div className="flex items-center mb-4">
          <div className=" bg-green-200 p-2 mr-2">
            <FaTag className=" text-green-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Popular Tags</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <Tag 
              key={index}
              className="!px-3 !py-1 !bg-gray-100 !text-gray-700 !border-gray-200 rounded-full cursor-pointer hover:!bg-gray-200 !transition-colors"
            >
              {tag}
            </Tag>
          ))}
        </div>
        
        <Button 
          type="link" 
          className="text-purple-500 p-0 h-auto mt-3 flex items-center"
        >
          View all <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default SideBar;