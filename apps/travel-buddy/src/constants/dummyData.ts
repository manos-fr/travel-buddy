import { ActivityItem } from '../types/ActivityItem';
import { Place } from '../types/Place';

export const recentActivity: ActivityItem[] = [
  {
    id: '1',
    username: 'John',
    avatarUrl:
      'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
    text: 'saved Restaurant A in Berlin',
    date: '2023-10-15',
  },
  {
    id: '2',
    username: 'You',
    avatarUrl:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww',
    text: 'saved Cafe B in Paris',
    date: '2023-10-14',
  },
  {
    id: '3',
    username: 'Sarah',
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
    text: 'saved Monument C in Rome',
    date: '2023-10-13',
  },
  {
    id: '4',
    username: 'You',
    avatarUrl:
      'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww',
    text: 'rated Bar D in London',
    date: '2023-10-12',
  },
  {
    id: '5',
    username: 'Mike',
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww',
    text: 'saved Park E in New York',
    date: '2023-10-11',
  },
];

export const savedPlaces: Place[] = [
  { id: '1', name: 'Eiffel Tower', type: 'Monument' },
  { id: '2', name: 'Cafe de Flore', type: 'Cafe' },
  { id: '3', name: 'The Louvre', type: 'Museum' },
  { id: '4', name: 'Le Chateaubriand', type: 'Restaurant' },
  { id: '5', name: 'Luxembourg Gardens', type: 'Park' },
];
