import React from 'react';
import { 
  Users, Filter, Download, Upload, Search, 
  Plus, Tag, Star, MoreVertical 
} from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  industry: string;
  score: number;
  status: 'new' | 'contacted' | 'qualified' | 'converted';
  lastContact: string;
}

export default function LeadManagement() {
  const [leads, setLeads] = React.useState<Lead[]>([]);
  const [selectedLeads, setSelectedLeads] = React.useState<string[]>([]);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const handleImportFromApollo = () => {
    // Implement Apollo import logic
  };

  const handleExportLeads = () => {
    // Implement export logic
  };

  const handleLeadSelection = (leadId: string) => {
    setSelectedLeads(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Actions Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleImportFromApollo}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <Upload className="h-4 w-4 mr-2" />
            Import from Apollo
          </button>
          <button
            onClick={handleExportLeads}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Leads
          </button>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Industry</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All Industries</option>
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Finance</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Size</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All Sizes</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lead Score</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All Scores</option>
                <option>High (80-100)</option>
                <option>Medium (50-79)</option>
                <option>Low (0-49)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>All Status</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Converted</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Leads Table */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Name & Company
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Contact Info
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Industry
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Lead Score
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Last Contact
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(lead.id)}
                    onChange={() => handleLeadSelection(lead.id)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div className="font-medium text-gray-900">{lead.name}</div>
                  <div className="text-gray-500">{lead.company}</div>
                  <div className="text-gray-500">{lead.title}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div>{lead.email}</div>
                  <div>{lead.phone}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {lead.industry}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{lead.score}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                    lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {lead.lastContact}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}