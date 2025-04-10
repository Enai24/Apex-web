import React from 'react';
import { useQuery } from 'react-query';
import { FileText, Upload, Download, Trash2, Search } from 'lucide-react';
import { mockDB } from '../lib/supabase';

export default function Documents() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const { data: documents, isLoading } = useQuery('documents', async () => {
    const { data, error } = await mockDB
      .from('documents')
      .select()
      .order('created_at');

    if (error) throw error;
    return data;
  });

  const filteredDocuments = documents?.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Documents
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Access and manage your documents
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex-1">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Document List */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
        <ul role="list" className="divide-y divide-gray-100">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading documents...</div>
          ) : filteredDocuments?.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No documents found</div>
          ) : (
            filteredDocuments?.map((doc) => (
              <li key={doc.id} className="relative flex justify-between gap-x-6 p-5 hover:bg-gray-50">
                <div className="flex min-w-0 gap-x-4">
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-100 rounded-lg">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {doc.name}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Uploaded on {new Date(doc.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-gray-400 hover:text-gray-500">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <Trash2 className="h-5 w-5" />
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