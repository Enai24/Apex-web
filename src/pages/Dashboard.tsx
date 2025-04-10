import React from 'react';
import { useQuery } from 'react-query';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import {
  Users,
  Briefcase,
  Clock,
  Calendar,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import { mockDB } from '../lib/supabase';

const stats = [
  { name: 'Active Clients', value: '45', icon: Users, change: '+5%', changeType: 'increase' },
  { name: 'Open Positions', value: '12', icon: Briefcase, change: '+2%', changeType: 'increase' },
  { name: 'Hours Logged', value: '1,240', icon: Clock, change: '+12%', changeType: 'increase' },
  { name: 'Leave Requests', value: '8', icon: Calendar, change: '-3%', changeType: 'decrease' },
];

export default function Dashboard() {
  const { data: timeEntries } = useQuery('timeEntries', async () => {
    const { data, error } = await mockDB
      .from('time_entries')
      .select()
      .order('date');

    if (error) throw error;
    return data;
  });

  const { data: projects } = useQuery('projects', async () => {
    // Since we don't have projects in our mock DB yet, return demo data
    return [
      { name: 'Project A', progress: 75 },
      { name: 'Project B', progress: 45 },
      { name: 'Project C', progress: 90 },
    ];
  });

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-blue-500 rounded-md p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{stat.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.changeType === 'increase' ? (
                  <TrendingUp className="self-center flex-shrink-0 h-5 w-5 text-green-500" />
                ) : (
                  <TrendingUp className="self-center flex-shrink-0 h-5 w-5 text-red-500 transform rotate-180" />
                )}
                <span className="ml-1">{stat.change}</span>
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Time Tracking Chart */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900">Time Tracking</h3>
          <div className="mt-6" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={timeEntries}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Status Chart */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900">Project Status</h3>
          <div className="mt-6" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={projects}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="progress" stroke="#3B82F6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-500">New client project started</span>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-500">Leave request approved</span>
              <span className="text-xs text-gray-400">4 hours ago</span>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-gray-500">New job posting published</span>
              <span className="text-xs text-gray-400">6 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}