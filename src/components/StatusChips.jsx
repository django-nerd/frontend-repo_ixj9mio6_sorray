const chipStyles = {
  draft: 'bg-slate-100 text-slate-700 ring-slate-200',
  submitted: 'bg-blue-100 text-blue-700 ring-blue-200',
  reviewing: 'bg-amber-100 text-amber-800 ring-amber-200',
  approved: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  rejected: 'bg-rose-100 text-rose-700 ring-rose-200',
};

export function StatusChip({ status }) {
  const key = (status || '').toLowerCase();
  const cls = chipStyles[key] || chipStyles.draft;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${cls}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export default function StatusChipsShowcase() {
  const list = ['Draft', 'Submitted', 'Reviewing', 'Approved', 'Rejected'];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {list.map(s => (
        <StatusChip key={s} status={s} />
      ))}
    </div>
  );
}
