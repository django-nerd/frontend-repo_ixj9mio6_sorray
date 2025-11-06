import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl backdrop-blur-[2px]">
            <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium ring-1 ring-blue-100">
              RFQ Management • Modern • Secure
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Plan, collaborate, and approve RFQs across all entities
            </h1>
            <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base">
              A clean, Google‑Material‑style workspace inspired by LawVu. Submit tenders, manage documents, track approvals, and keep work moving with pastel statuses and Kanban views.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#login" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors">
                Sign in
              </a>
              <a href="#dashboard" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-blue-700 font-medium ring-1 ring-blue-200 hover:bg-blue-50 transition-colors">
                Explore dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
