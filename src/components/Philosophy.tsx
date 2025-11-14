import { Lightbulb, Target, Users, Code } from "lucide-react";

const philosophyItems = [
  {
    id: 1,
    icon: Target,
    title: "Ownership & Mission-Driven Work",
    description:
      "I like owning the work and pushing on missions that matter. AI removes bottlenecks, but taste and judgment still separate good teams from forgettable ones.",
  },
  {
    id: 2,
    icon: Code,
    title: "Clean, Scalable Code",
    description:
      "Clean, scalable code matters. I work closely with designers and PMs so the product feels right, not just functional.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Thinking Beyond the Ticket",
    description:
      "Think beyond the ticket. What are we actually improving for people? How does this fit into a system that rarely puts users first? That's where I try to operate.",
  },
  {
    id: 4,
    icon: Users,
    title: "Learning & Mentorship",
    description:
      "I like to learn and mentor. User-centric design isn't a buzzword—it's how I approach building products that people actually want to use.",
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
            How I Work
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A few things that matter to me when building software.
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
