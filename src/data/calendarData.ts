const now = new Date(); 

// Types
 export interface CalendarEvent {
  id: string | number;
  title: string;
  start: Date;
  end: Date;
  resource?: any;
  allDay?: boolean;
  description?: string;
  color?: string;
}

export const dateData :CalendarEvent[]  = [
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    description: 'A long scheduled event across several days',
    color: '#FF5733',
  },
  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    description: 'Start of DTS program',
    color: '#33A1FF',
  },
  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    description: 'End of DTS program',
    color: '#28A745',
  },
  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 9, 0, 0, 0),
    allDay: true,
    description: 'A single day all-day event',
    color: '#FFC300',
  },
  {
    id: 92,
    title: 'Some Other Event',
    start: new Date(2015, 3, 9, 8, 0, 0),
    end: new Date(2015, 3, 10, 11, 30, 0),
    description: 'Another random event with multiple days',
    color: '#C70039',
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    description: 'Networking and talks with industry experts',
    color: '#900C3F',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    description: 'Internal strategy meeting',
    color: '#581845',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    description: 'Team lunch gathering',
    color: '#2ECC71',
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    description: 'Ongoing event happening right now',
    color: '#1ABC9C',
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
    description: 'Instant event at current time',
    color: '#9B59B6',
  },
];