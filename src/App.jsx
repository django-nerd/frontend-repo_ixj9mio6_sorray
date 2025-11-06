import HeroCover from './components/HeroCover';
import DashboardSummary from './components/DashboardSummary';
import KanbanBoard from './components/KanbanBoard';
import AuthPanel from './components/AuthPanel';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-blue-600" />
            <span className="font-semibold tracking-tight">RFQ Workspace</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#dashboard" className="hover:text-slate-900">Dashboard</a>
            <a href="#login" className="hover:text-slate-900">Login</a>
            <a href="#board" className="hover:text-slate-900">Kanban</a>
          </nav>
          <a href="#login" className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-white text-sm font-medium shadow-sm hover:bg-blue-700">Sign in</a>
        </div>
      </header>

      <main>
        <HeroCover />
        <DashboardSummary />
        <AuthPanel />
        <div id="board">
          <KanbanBoard />
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-slate-500">
        Built with a white‑card layout, blue accent, and pastel status chips.
      </footer>
    </div>
  );
}

export default App;
