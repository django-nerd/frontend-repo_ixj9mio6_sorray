import { CheckCircle2, Clock, FileText, KanbanSquare } from 'lucide-react';
import StatusChipsShowcase from './StatusChips';

export default function DashboardSummary() {
  const stats = [
    { label: 'Active RFQs', value: 24, icon: KanbanSquare, color: 'bg-blue-50 text-blue-700 ring-blue-200' },
    { label: 'Due this week', value: 7, icon: Clock, color: 'bg-amber-50 text-amber-700 ring-amber-200' },
    { label: 'Awaiting approval', value: 5, icon: FileText, color: 'bg-violet-50 text-violet-700 ring-violet-200' },
    { label: 'Approved', value: 12, icon: CheckCircle2, color: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  ];

  return (
    <section className="-mt-8 md:-mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className={`rounded-xl bg-white p-4 shadow-sm ring-1 ${color.replace('text-', 'ring-')}`}>
              <div className={`inline-flex items-center justify-center rounded-md ${color} px-2 py-1 text-xs font-medium`}>{label}</div>
              <div className="mt-2 text-2xl font-semibold text-gray-900">{value}</div>
              <Icon className="mt-3 h-5 w-5 text-slate-400" />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Status palette</h3>
          <StatusChipsShowcase />
        </div>
      </div>
    </section>
  );
}
