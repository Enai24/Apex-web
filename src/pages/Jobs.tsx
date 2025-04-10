import React from 'react';
import { useQuery } from 'react-query';
import { Briefcase, MapPin, DollarSign, Calendar, Plus, Search, Filter } from 'lucide-react';
import { mockDB } from '../lib/supabase';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('all');

  const { data: jobs, isLoading } = useQuery('jobs', async () => {
    const { data, error } = await mockDB
      .from('jobs')
      .select()
      .order('created_at');

    if (error) throw error;
    return data;
  });

  const filteredJobs = jobs?.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Jobs
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage job postings and applications
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Plus className="h-4 w-4 mr-2" />
            Post Job
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:w-48">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Job List */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
        <ul role="list" className="divide-y divide-gray-100">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading jobs...</div>
          ) : filteredJobs?.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No jobs found</div>
          ) : (
            filteredJobs?.map((job) => (
              <li key={job.id} className="relative flex justify-between gap-x-6 p-5 hover:bg-gray-50">
                <div className="flex min-w-0 gap-x-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-full">
                    <Briefcase className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {job.title}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                        <MapPin className="mr-1 h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                        <DollarSign className="mr-1 h-3 w-3" />
                        {job.salary_range}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(job.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                    job.status === 'published' ? 'bg-green-50 text-green-700' :
                    job.status === 'draft' ? 'bg-gray-50 text-gray-700' :
                    'bg-red-50 text-red-700'
                  }`}>
                    {job.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Filter className="h-5 w-5" />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}