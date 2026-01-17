import { Client, Job, TimeEntry, LeaveRequest, Document } from './types';

export const demoClients: Client[] = [
  {
    id: '1',
    name: 'Tech Solutions Inc',
    contact_person: 'John Smith',
    email: 'john@techsolutions.com',
    phone: '+91 98765 43210',
    address: 'Sector 14, Gurgaon',
    status: 'active',
    created_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Global Manufacturing Ltd',
    contact_person: 'Sarah Johnson',
    email: 'sarah@globalmanufacturing.com',
    phone: '+91 98765 43211',
    address: 'Industrial Area, Baddi',
    status: 'active',
    created_at: '2024-01-10T10:00:00Z',
  },
];

export const demoJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    description: 'Looking for an experienced software engineer...',
    requirements: ['5+ years experience', 'React', 'Node.js'],
    location: 'Gurgaon',
    type: 'full-time',
    salary_range: '18-25 LPA',
    status: 'published',
    created_at: '2024-01-20T10:00:00Z',
    posted_by: '1',
  },
  {
    id: '2',
    title: 'HR Manager',
    description: 'Seeking an experienced HR professional...',
    requirements: ['7+ years experience', 'Recruitment', 'Employee Relations'],
    location: 'Delhi',
    type: 'full-time',
    salary_range: '15-20 LPA',
    status: 'published',
    created_at: '2024-01-18T10:00:00Z',
    posted_by: '1',
  },
];

export const demoTimeEntries: TimeEntry[] = [
  {
    id: '1',
    user_id: '1',
    project_id: '1',
    date: '2024-01-25',
    hours: 8,
    description: 'Development work',
    created_at: '2024-01-25T17:00:00Z',
  },
  {
    id: '2',
    user_id: '1',
    project_id: '1',
    date: '2024-01-24',
    hours: 7.5,
    description: 'Code review and meetings',
    created_at: '2024-01-24T17:00:00Z',
  },
];

export const demoLeaveRequests: LeaveRequest[] = [
  {
    id: '1',
    user_id: '1',
    start_date: '2024-02-01',
    end_date: '2024-02-03',
    type: 'annual',
    status: 'pending',
    reason: 'Family vacation',
    created_at: '2024-01-25T10:00:00Z',
  },
];

export const demoDocuments: Document[] = [
  {
    id: '1',
    user_id: '1',
    name: 'Employee Handbook 2024',
    type: 'pdf',
    url: '#',
    created_at: '2024-01-01T10:00:00Z',
  },
  {
    id: '2',
    user_id: '1',
    name: 'IT Security Policy',
    type: 'pdf',
    url: '#',
    created_at: '2024-01-15T10:00:00Z',
  },
];