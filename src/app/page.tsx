const capabilities = [
  "Technology Consulting",
  "Enterprise Systems",
  "SAP",
  "Business Process Analysis",
  "AI & Automation",
  "Technical Communication",
  "Client-Facing Communication",
];

const experience = [
  {
    dates: "Jun 2026 — Jul 2026",
    role: "Consulting Intern",
    company: "Revelation Technologies",
    location: "Saginaw, TX",
    description:
      "Completed a consulting internship focused on SAP, enterprise technology,and professional consulting practices. Gained exposure to enterprise systems and consulting workflows while developing resources to help Completed a consulting internship focused on SAP, enterprise technology, and professional consulting practices. Gained exposure to SAP Project Systems (PS), Finance and Controlling (FI/CO), government contracting, and enterprise business processes while developing resources to help prepare new consultants for effective client interactions.prepare new consultants for effective client interactions.",
    tags: ["SAP", "SAP PS", "SAP FiCo", "Government Contracting", "Consulting"],
  },
  {
    dates: "Feb 2024 — Present",
    role: "Field Director",
    company: "Triple Play Sports",
    location: "Flowood, MS",
    description:
      "Coordinate game-day operations while communicating with officials, coaches, event personnel, players, and spectators. Maintain accurate game records and reporting while resolving operational issues in a fast-paced environment.",
    tags: ["Operations", "Stakeholder Communication", "Problem Solving", "Reporting",],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080808]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            RM<span className="text-blue-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#skills">
              Capabilities
            </a>
            <a
              className="transition hover:text-white"
              href="/Ryan-Moore-Resume.pdf"
              target="_blank"
              rel="noreferrer">
              Resume
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-8"
      >
        <div className="max-w-5xl">
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.35em] text-blue-400 sm:text-sm">
            Technology Consulting • Enterprise Technology
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Technology that solves{" "}
            <span className="text-zinc-500">business problems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I&apos;m Ryan Moore, a Computer Science student focused on the
            intersection of technology, business, and people. I'm building experience in enterprise systems, SAP, technology consulting,
            data analytics, and business-focused technology solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Explore My Work
            </a>

            <a
              href="/Ryan-Moore-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white/50 hover:bg-white/5"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-blue-400">
              About
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Business thinking.
              <br />
              <span className="text-zinc-500">Technical foundation.</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I&apos;m a Computer Science student at the University of South Alabama
              interested in using technology to solve real business problems.
            </p>

            <p>
              My experience spans SAP and technology consulting, technical projects,
              operations, and client-facing roles. I&apos;m particularly interested in
              enterprise systems, business process improvement, data analytics, and
              solutions that connect technical capabilities with business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="mb-16 text-4xl font-semibold tracking-tight sm:text-5xl">
            Where I&apos;ve worked.
          </h2>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="grid gap-6 py-10 lg:grid-cols-[1fr_2fr]"
              >
                <div>
                  <p className="text-sm text-zinc-500">{item.dates}</p>
                  <p className="mt-1 text-sm text-zinc-500">{item.location}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-medium">{item.role}</h3>
                  <p className="mt-1 text-blue-400">{item.company}</p>

                  <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-400">
            Selected Work
          </p>

          <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Work with a purpose.
            </h2>

            <p className="max-w-md text-zinc-500">
              Projects focused on solving problems, improving processes, and
              applying technology in practical ways.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="group min-h-[420px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05] sm:p-10">
              <div className="flex h-full flex-col">
                <p className="text-sm text-blue-400">01 / Consulting Enablement</p>

                <div className="mt-auto pt-24">
                  <h3 className="text-3xl font-medium">
                    Consultant Training Platform
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                    Independently developed an interactive training platform during my
                    consulting internship to prepare new consultants for professional
                    client interactions. Used AI-assisted development to build a structured
                    learning experience combining instructional content, video-based
                     training, and a knowledge-check quiz for virtual and in-person meetings.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["AI-Assisted Development", "Web Development", "Consulting", "Training Design"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </article>

            <article className="group min-h-[420px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05] sm:p-10">
              <div className="flex h-full flex-col">
                <p className="text-sm text-blue-400">02 / Machine Learning</p>

                <div className="mt-auto pt-24">
                  <h3 className="text-3xl font-medium">
                    NFL Quarterback Performance Analysis
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                    Analyzed historical NFL quarterback data using machine learning
                    to predict high-performance games based on past performance.
                    Compared Decision Tree and Random Forest classification models
                    to explore different approaches to sports performance prediction.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Machine Learning",
                      "Decision Trees",
                      "Random Forest",
                      "Data Analysis",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-400">
            Capabilities
          </p>

          <h2 className="mb-14 text-4xl font-semibold tracking-tight sm:text-5xl">
            What I bring to the table.
          </h2>

          <div className="flex flex-wrap gap-3">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300"
              >
                {capability}
              </span>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
              Professional Development
            </p>

            <h3 className="mt-4 text-3xl font-medium">
              Currently developing.
            </h3>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  Enterprise Systems
                </p>
                <h4 className="mt-4 text-xl font-medium">
                  SAP Project Systems (PS)
                </h4>
                <p className="mt-3 leading-7 text-zinc-400">
                  Building deeper knowledge of SAP Project Systems and enterprise
                  project processes after studying SAP modules and consulting practices
                  during my internship.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  Data
                </p>
                <h4 className="mt-4 text-xl font-medium">
                  Microsoft Excel
                </h4>
                <p className="mt-3 leading-7 text-zinc-400">
                  Developing stronger skills in data organization, analysis,
                  formulas, PivotTables, and business-focused spreadsheet
                  workflows.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
                  Analytics
                </p>
                <h4 className="mt-4 text-xl font-medium">
                  Microsoft Power BI
                </h4>
                <p className="mt-3 leading-7 text-zinc-400">
                  Beginning to develop skills in data visualization, dashboard
                  creation, and communicating business insights through data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-400">
              Education
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Computer Science
              <br />
              <span className="text-zinc-500">+ Mathematics.</span>
            </h2>
          </div>

          <div>
            <h3 className="text-2xl font-medium">
              University of South Alabama
            </h3>

            <p className="mt-2 text-zinc-400">
              B.S. Computer Science • Minor in Mathematics
            </p>

            <p className="mt-5 text-sm uppercase tracking-[0.15em] text-blue-400">
              Expected Graduation — December 2026
            </p>

            <p className="mt-3 text-zinc-500">
              Mobile, Alabama
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-blue-400">
            Let&apos;s Connect
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Interested in working together?
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            I&apos;m currently exploring opportunities in technology consulting,
            enterprise systems, business technology, and related roles. Feel free to
            reach out or connect with me.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:jamesryanmoore2005@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Moores-Codes"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-white/50 hover:bg-white/5"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-moore-21602a277/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-white/50 hover:bg-white/5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>Ryan Moore</p>
          <p>Technology Consulting • Enterprise Technology</p>
        </div>
      </footer>
    </main>
  );
}