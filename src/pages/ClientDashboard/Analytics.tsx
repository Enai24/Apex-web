import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { Calendar, Download } from 'lucide-react';

const campaignData = [
  { name: 'Jan', sent: 400, opened: 240, clicked: 100 },
  { name: 'Feb', sent: 300, opened: 180, clicked: 80 },
  { name: 'Mar', sent: 500, opened: 350, clicked: 150 },
  { name: 'Apr', sent: 450, opened: 270, clicked: 120 },
  { name: 'May', sent: 600, opened: 420, clicked: 200 },
];

const leadSourceData = [
  { name: 'Apollo', value: 400 },
  { name: 'LinkedIn', value: 300 },
  { name: 'Website', value: 200 },
  { name: 'Referral', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Campaign Performance</h2>
          <p className="text-sm text-gray-500">Track and analyze your campaign metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Leads', value: '2,543', change: '+12%' },
          { label: 'Email Open Rate', value: '68%', change: '+5%' },
          { label: 'Click-through Rate', value: '24%', change: '+2%' },
          { label: 'Conversion Rate', value: '12%', change: '+3%' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 truncate">{stat.label}</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className="ml-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Campaign Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Campaign Performance</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sent" fill="#0088FE" name="Sent" />
                <Bar dataKey="opened" fill="#00C49F" name="Opened" />
                <Bar dataKey="clicked" fill="#FFBB28" name="Clicked" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Sources Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Lead Sources</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {leadSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}