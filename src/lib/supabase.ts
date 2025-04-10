import { Client, Job, TimeEntry, LeaveRequest, Document } from './types';
import { demoClients, demoJobs, demoTimeEntries, demoLeaveRequests, demoDocuments } from './demo-data';

// Mock database interface
interface Database {
  clients: Client[];
  jobs: Job[];
  time_entries: TimeEntry[];
  leave_requests: LeaveRequest[];
  documents: Document[];
}

// In-memory database
const db: Database = {
  clients: demoClients,
  jobs: demoJobs,
  time_entries: demoTimeEntries,
  leave_requests: demoLeaveRequests,
  documents: demoDocuments,
};

// Mock database operations
export const mockDB = {
  from: (table: keyof Database) => ({
    select: () => ({
      order: (column: string, { ascending = true } = {}) => {
        const data = [...db[table]];
        return Promise.resolve({
          data: data.sort((a, b) => {
            const aVal = (a as any)[column];
            const bVal = (b as any)[column];
            return ascending ? 
              aVal.localeCompare(bVal) :
              bVal.localeCompare(aVal);
          }),
          error: null
        });
      }
    }),
    insert: (data: any) => {
      const newItem = { id: String(db[table].length + 1), ...data };
      db[table].push(newItem as any);
      return Promise.resolve({ data: newItem, error: null });
    },
    update: (data: any) => {
      const index = db[table].findIndex((item: any) => item.id === data.id);
      if (index !== -1) {
        db[table][index] = { ...db[table][index], ...data };
        return Promise.resolve({ data: db[table][index], error: null });
      }
      return Promise.resolve({ data: null, error: 'Item not found' });
    },
    delete: (id: string) => {
      const index = db[table].findIndex((item: any) => item.id === id);
      if (index !== -1) {
        db[table].splice(index, 1);
        return Promise.resolve({ error: null });
      }
      return Promise.resolve({ error: 'Item not found' });
    }
  })
};

export type Tables = Database;