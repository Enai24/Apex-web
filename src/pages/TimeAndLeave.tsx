import React from 'react';
import { useQuery } from 'react-query';
import { Clock, Calendar, Plus } from 'lucide-react';
import { mockDB } from '../lib/supabase';

export default function TimeAndLeave() {
  const { data: timeEntries, isLoading: timeLoading } = useQuery('timeEntries', async () => {
    const { data, error } = await mockDB
      .from('time_entries')
      .select()
      .order('date');

    if (error) throw error;
    return data;
  });

  const { data: leaveRequests, isLoading: leaveLoading } = useQuery('leaveRequests', async () => {
    const { data, error } = await mockDB
      .from('leave_requests')
      .select()
      .order('created_at');

    if (error) throw error;
    return data;
  });

  return (
    <div className="space-y-6">
      {/* Time Tracking Section */}
      <div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Time Tracking
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Log and manage your working hours
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              <Clock className="h-4 w-4 mr-2" />
              Log Time
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
          {timeLoading ? (
            <div className="p-4 text-center text-gray-500">Loading time entries...</div>
          ) : !timeEntries?.length ? (
            <div className="p-4 text-center text-gray-500">No time entries found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Hours</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Project</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {timeEntries.map((entry) => (
                    <tr key={entry.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900">
                        {new Date(entry.date).toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{entry.hours}</td>
                      <td className="px-3 py-4 text-sm text-gray-500">{entry.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Project {entry.project_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Leave Management Section */}
      <div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Leave Management
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Request and track your leave
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Request Leave
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
          {leaveLoading ? (
            <div className="p-4 text-center text-gray-500">Loading leave requests...</div>
          ) : !leaveRequests?.length ? (
            <div className="p-4 text-center text-gray-500">No leave requests found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Start Date</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">End Date</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leaveRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 capitalize">
                        {request.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(request.start_date).toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {new Date(request.end_date).toLocaleDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          request.status === 'approved' ? 'bg-green-100 text-green-800' :
                          request.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">{request.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}