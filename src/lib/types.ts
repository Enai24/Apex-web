export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'manager' | 'employee';
  department: string;
  two_factor_enabled: boolean;
  avatar_url?: string;
}

export interface Client {
  id: string;
  email: string;
  company_name: string;
  contact_person: string;
  role: 'client';
  subscription_status: 'active' | 'inactive' | 'pending';
}

export interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'temporary';
  salary_range: string;
  status: 'draft' | 'published' | 'closed';
  created_at: string;
  posted_by: string;
}

export interface TimeEntry {
  id: string;
  user_id: string;
  project_id: string;
  date: string;
  hours: number;
  description: string;
  created_at: string;
}

export interface LeaveRequest {
  id: string;
  user_id: string;
  start_date: string;
  end_date: string;
  type: 'annual' | 'sick' | 'personal' | 'other';
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
  created_at: string;
}

export interface Document {
  id: string;
  user_id: string;
  name: string;
  type: string;
  url: string;
  created_at: string;
}