import React from 'react';
import { 
  Mail, Plus, Search, Filter, 
  Play, Pause, Edit, Trash2, 
  BarChart2, Users, Clock 
} from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  type: 'single' | 'sequence';
  recipients: number;
  openRate: number;
  clickRate: number;
  replies: number;
  lastModified: string;
}

export default function EmailCampaigns() {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>([]);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const handleCreateCampaign = () => {
    // Implement campaign creation
  };

  const handleStatusChange = (campaignId: string, status: Campaign['status']) => {
    // Implement status change
  };

  return (
    <div className="space-y-6">
      {/* Actions Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleCreateCampaign}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Campaign
          </button>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        <div className="relative">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All Status</option>
                <option>Draft</option>
                <option>Active</option>
                <option>Paused</option>
                <option>Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Campaign Type</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All Types</option>
                <option>Single Email</option>
                <option>Sequence</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Performance</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All</option>
                <option>High Performing</option>
                <option>Average</option>
                <option>Low Performing</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Campaigns Table */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Campaign Name
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Type
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Recipients
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Performance
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Last Modified
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                  {campaign.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                    campaign.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {campaign.type === 'sequence' ? 'Email Sequence' : 'Single Email'}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-400" />
                    {campaign.recipients}
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Open Rate</span>
                      <span className="text-xs font-medium">{campaign.openRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Click Rate</span>
                      <span className="text-xs font-medium">{campaign.clickRate}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Replies</span>
                      <span className="text-xs font-medium">{campaign.replies}</span>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-400" />
                    {campaign.lastModified}
                  </div>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    {campaign.status === 'active' ? (
                      <button
                        onClick={() => handleStatusChange(campaign.id, 'paused')}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <Pause className="h-5 w-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStatusChange(campaign.id, 'active')}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <Play className="h-5 w-5" />
                      </button>
                    )}
                    <button className="text-gray-400 hover:text-gray-500">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <BarChart2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}