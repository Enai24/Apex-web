import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import LeadManagement from './LeadManagement';
import EmailCampaigns from './EmailCampaigns';
import Analytics from './Analytics';
import ContactManagement from './ContactManagement';
import { Users, Mail, BarChart2, Phone, Search, Bell, Calendar, Bot, Settings, ChevronRight, Clock } from 'lucide-react';
import { AI_SOLUTIONS } from '../../utils/ai-workforce';

const stats = [
  { name: 'Total Leads', value: '2,543', change: '+12%', icon: Users },
  { name: 'Active Campaigns', value: '8', change: '+2', icon: Mail },
  { name: 'Conversion Rate', value: '12%', change: '+3%', icon: BarChart2 },
  { name: 'Total Contacts', value: '1,234', change: '+15%', icon: Phone },
];

const upcomingTasks = [
  { id: 1, title: 'Follow up with TechCorp', time: '2:00 PM', type: 'call' },
  { id: 2, title: 'Send proposal to InnoSys', time: '4:30 PM', type: 'email' },
  { id: 3, title: 'Review campaign metrics', time: '5:00 PM', type: 'task' },
];

const recentActivities = [
  { id: 1, type: 'lead', message: 'New lead captured from website', time: '10 mins ago' },
  { id: 2, type: 'email', message: 'Campaign "Q1 Outreach" completed', time: '1 hour ago' },
  { id: 3, type: 'contact', message: 'Updated 5 contact records', time: '2 hours ago' },
];

// AI agent usage statistics
const aiAgentStats = [
  { name: 'Conversations Handled', value: '1,256', change: '+18%', icon: Bot },
  { name: 'Tasks Automated', value: '876', change: '+24%', icon: Settings },
  { name: 'Time Saved (hrs)', value: '320', change: '+35%', icon: Clock },
];

export default function ClientDashboard() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [notifications, setNotifications] = React.useState(3);
  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              )}
            </button>
            <div className="border-l border-gray-200 h-6" />
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`${
                  activeTab === 'overview'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={`${
                  activeTab === 'ai-agents'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                onClick={() => setActiveTab('ai-agents')}
              >
                <Bot className="mr-2 h-4 w-4" />
                AI Workforce
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'overview' ? (
          <div className="grid grid-cols-12 gap-6">
            {/* Main Content Area */}
            <div className="col-span-12 lg:col-span-9">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat) => (
                  <div key={stat.name} className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-2">
                        <stat.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-sm font-medium text-green-600">{stat.change}</span>
                      <span className="text-sm text-gray-500"> vs last month</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Tabs */}
              <div className="bg-white rounded-lg shadow">
                <Tabs defaultValue="leads" className="w-full">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-gray-100 p-1">
                      <TabsTrigger value="leads" className="rounded-md px-3 py-1">
                        <Users className="h-4 w-4 mr-2" />
                        Lead Management
                      </TabsTrigger>
                      <TabsTrigger value="campaigns" className="rounded-md px-3 py-1">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Campaigns
                      </TabsTrigger>
                      <TabsTrigger value="contacts" className="rounded-md px-3 py-1">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Management
                      </TabsTrigger>
                      <TabsTrigger value="analytics" className="rounded-md px-3 py-1">
                        <BarChart2 className="h-4 w-4 mr-2" />
                        Analytics
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <div className="p-4">
                    <TabsContent value="leads">
                      <LeadManagement />
                    </TabsContent>
                    <TabsContent value="campaigns">
                      <EmailCampaigns />
                    </TabsContent>
                    <TabsContent value="contacts">
                      <ContactManagement />
                    </TabsContent>
                    <TabsContent value="analytics">
                      <Analytics />
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              {/* Upcoming Tasks */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Upcoming Tasks</h3>
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {upcomingTasks.map((task) => (
                      <div key={task.id} className="flex items-center">
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full ${
                          task.type === 'call' ? 'bg-green-400' :
                          task.type === 'email' ? 'bg-blue-400' :
                          'bg-yellow-400'
                        }`} />
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-medium text-gray-900">{task.title}</p>
                          <p className="text-sm text-gray-500">{task.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          activity.type === 'lead' ? 'bg-green-100' :
                          activity.type === 'email' ? 'bg-blue-100' :
                          'bg-yellow-100'
                        }`}>
                          {activity.type === 'lead' ? (
                            <Users className={`h-4 w-4 text-green-600`} />
                          ) : activity.type === 'email' ? (
                            <Mail className={`h-4 w-4 text-blue-600`} />
                          ) : (
                            <Phone className={`h-4 w-4 text-yellow-600`} />
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // AI Agents Dashboard View
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI Workforce Solutions</h2>
              <p className="text-gray-600 mt-1">
                Access and manage your AI agents to automate tasks and improve efficiency
              </p>
            </div>

            {/* AI Agent Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {aiAgentStats.map((stat) => (
                <div key={stat.name} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                      <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-2">
                      <stat.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500"> this month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Agents List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Your AI Solutions</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {AI_SOLUTIONS.map((agent) => (
                  <li key={agent.id}>
                    <div className="p-5 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <agent.icon className="h-6 w-6 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{agent.title}</h4>
                            <p className="mt-1 text-sm text-gray-600">{agent.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {agent.benefits.slice(0, 2).map((benefit, idx) => (
                                <span 
                                  key={idx} 
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                >
                                  {benefit}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center text-sm">
                            Configure <ChevronRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow p-5 text-white">
                <h3 className="text-lg font-semibold mb-2">Launch AI Assistant</h3>
                <p className="text-indigo-100 mb-4">Start a conversation with your AI assistant to help with tasks</p>
                <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-md text-sm font-medium">
                  Start Chat
                </button>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow p-5 text-white">
                <h3 className="text-lg font-semibold mb-2">Schedule Voice Calls</h3>
                <p className="text-blue-100 mb-4">Set up your AI voice agent to make calls to leads and contacts</p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm font-medium">
                  Setup Calls
                </button>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow p-5 text-white">
                <h3 className="text-lg font-semibold mb-2">AI Analytics Report</h3>
                <p className="text-purple-100 mb-4">Generate a comprehensive report of your AI workforce performance</p>
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-md text-sm font-medium">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}