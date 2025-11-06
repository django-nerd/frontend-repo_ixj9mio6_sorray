import { useMemo } from 'react';
import { StatusChip } from './StatusChips';

const columns = [
  { key: 'draft', title: 'Draft' },
  { key: 'submitted', title: 'Submitted' },
  { key: 'reviewing', title: 'Review' },
  { key: 'approved', title: 'Approved' },
];

const seedCards = [
  { id: 'RFQ-001', title: 'External Counsel – IP Portfolio', entity: 'Acme Ltd', status: 'draft', due: '2025-11-30' },
  { id: 'RFQ-002', title: 'Facilities – Cleaning Services', entity: 'Globex', status: 'submitted', due: '2025-12-02' },
  { id: 'RFQ-003', title: 'SaaS – eDiscovery Platform', entity: 'Initech', status: 'reviewing', due: '2025-12-05' },
  { id: 'RFQ-004', title: 'Panel Refresh – Litigation', entity: 'Stark Industries', status: 'approved', due: '2025-12-10' },
];

function Card({ item }) {
  return (
    <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.title}</p>
          <p className="mt-0.5 text-xs text-gray-500">{item.entity} • <span className="font-medium">{item.id}</span></p>
        </div>
        <StatusChip status={item.status.charAt(0).toUpperCase() + item.status.slice(1)} />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
        <p>Due {new Date(item.due).toLocaleDateString()}</p>
        <button className="rounded-md px-2 py-1 bg-blue-50 text-blue-700 font-medium hover:bg-blue-100">Open</button>
      </div>
    </div>
  );
}

export default function KanbanBoard() {
  const grouped = useMemo(() => {
    return columns.reduce((acc, col) => {
      acc[col.key] = seedCards.filter(c => c.status === col.key);
      return acc;
    }, {});
  }, []);

  return (
    <section id="dashboard" className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">RFQ Manager Board</h2>
          <div className="text-xs text-gray-500">Internal deadlines and approvals at a glance</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map(col => (
            <div key={col.key} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-700">{col.title}</h3>
                <span className="text-xs text-gray-500">{grouped[col.key]?.length || 0}</span>
              </div>
              <div className="space-y-3">
                {(grouped[col.key] || []).map(item => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
