import React from 'react';
import { useQuery } from 'react-query';
import { Building2, Mail, Phone, MapPin, Plus, Search } from 'lucide-react';
import { mockDB } from '../lib/supabase';

export default function Clients() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const { data: clients, isLoading } = useQuery('clients', async () => {
    const { data, error } = await mockDB
      .from('clients')
      .select()
      .order('created_at');

    if (error) throw error;
    return data;
  });

  const filteredClients = clients?.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contact_person.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Clients
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and view all client information
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Client List */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
        <ul role="list" className="divide-y divide-gray-100">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading clients...</div>
          ) : filteredClients?.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No clients found</div>
          ) : (
            filteredClients?.map((client) => (
              <li key={client.id} className="relative flex justify-between gap-x-6 p-5 hover:bg-gray-50">
                <div className="flex min-w-0 gap-x-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {client.name}
                    </p>
                    <p className="mt-1 flex text-xs leading-5 text-gray-500">
                      <Mail className="mr-1 h-4 w-4" />
                      {client.email}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="flex items-center text-sm leading-6 text-gray-900">
                    <Phone className="mr-1 h-4 w-4" />
                    {client.phone}
                  </p>
                  <p className="mt-1 flex items-center text-xs leading-5 text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    {client.address}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}