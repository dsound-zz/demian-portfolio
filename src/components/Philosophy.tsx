import { Lightbulb, Target, Users, Code } from "lucide-react";

const philosophyItems = [
  {
    id: 1,
    icon: Target,
    title: "Ownership & Mission-Driven Work",
    description:
      "I like owning the work and pushing on missions that matter. AI has taken a lot of the old bottlenecks out of engineering, but taste and judgment still separate good teams from forgettable ones.",
  },
  {
    id: 2,
    icon: Code,
    title: "Clean, Scalable Code",
    description:
      "I care about clean, scalable code, and I like working closely with great designers and project managers so the product feels right, not just built.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Thinking Beyond the Ticket",
    description:
      "Developers should think beyond the ticket. What are we actually improving for people? How does this fit into a system that rarely puts users first? That's the level I try to operate on.",
  },
  {
    id: 4,
    icon: Users,
    title: "Learning & Mentorship",
    description:
      "I like to learn and mentor. User-centric design is at the core of how I approach building products.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="font-bold mb-4 text-slate-900 dark:text-slate-100"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            My Philosophy
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Core principles that guide my approach to development and shape how
            I work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {philosophyItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-8 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30 group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl mb-3 text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>

                <p className="text-base text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
