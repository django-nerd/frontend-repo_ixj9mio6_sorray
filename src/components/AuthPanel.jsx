import { useState } from 'react';
import { Eye, EyeOff, Lock, User } from 'lucide-react';

const SEED_USERS = [
  { email: 'super@rfq.app', role: 'Super Admin' },
  { email: 'manager@rfq.app', role: 'RFQ Manager' },
  { email: 'user@rfq.app', role: 'User' },
];

export default function AuthPanel() {
  const [email, setEmail] = useState(SEED_USERS[0].email);
  const [password, setPassword] = useState('arshad13');
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('Use any seed user below. Password is arshad13.');

  function handleSubmit(e) {
    e.preventDefault();
    if (password === 'arshad13') {
      const found = SEED_USERS.find(u => u.email === email);
      setMessage(found ? `Signed in as ${found.role}` : 'Signed in');
    } else {
      setMessage('Invalid password');
    }
  }

  return (
    <section id="login" className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-base font-semibold text-gray-900">Sign in</h3>
            <p className="mt-1 text-sm text-gray-600">Password is <span className="font-mono">arshad13</span> for all seed users.</p>
            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700">Email</label>
                <div className="mt-1 relative">
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    className="w-full rounded-md border-slate-200 focus:border-blue-400 focus:ring-blue-400 text-sm pl-9"
                    placeholder="you@company.com"
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Password</label>
                <div className="mt-1 relative">
                  <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={show ? 'text' : 'password'}
                    className="w-full rounded-md border-slate-200 focus:border-blue-400 focus:ring-blue-400 text-sm pl-9 pr-9"
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700">
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full rounded-md bg-blue-600 text-white py-2 text-sm font-medium hover:bg-blue-700">Sign in</button>
              <p className="text-xs text-gray-600">{message}</p>
            </div>
          </form>

          <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
            <h3 className="text-base font-semibold text-gray-900">Seed users</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {SEED_USERS.map(u => (
                <li key={u.email} className="flex items-center justify-between rounded-md bg-white px-3 py-2 ring-1 ring-slate-100">
                  <span className="text-gray-800">{u.email}</span>
                  <span className="rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-medium ring-1 ring-violet-200">{u.role}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-gray-500">Role-based views are previewed in the dashboard mock below.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
