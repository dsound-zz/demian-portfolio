import { Lightbulb, Target, Users, Code } from "lucide-react";

const philosophyItems = [
  {
    id: 1,
    icon: Target,
    title: "Ownership & Mission-Driven Work",
    description:
      "I like owning the work and pushing on missions that matter. AI helps with boilerplate, but judgment still matters. That's what separates good teams from forgettable ones.",
  },
  {
    id: 2,
    icon: Code,
    title: "Clean, Scalable Code",
    description:
      "If something's confusing, I simplify it. I work closely with designers and PMs so the product feels right, not just functional.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Thinking Beyond the Ticket",
    description:
      "I like when developers think about the user, not just the ticket. What are we actually improving? How does this fit into a system that rarely puts users first? That's where I try to operate.",
  },
  {
    id: 4,
    icon: Users,
    title: "Learning & Mentorship",
    description:
      "I like to learn and mentor. User-centric design isn't a buzzword—it's just how I approach building things people actually want to use.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 bg-warm-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="font-heading font-semibold mb-4 text-warm-brown"
            style={{ fontSize: "clamp(2.188rem, 6vw, 3.938rem)" }}
          >
            How I Work
          </h2>
          <p
            className="text-3xl text-warm-taupe max-w-2xl mx-auto font-body font-normal leading-relaxed"
            style={{ fontSize: "17.5px" }}
          >
            A few things that matter to me when building software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {philosophyItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-8 bg-warm-cream rounded-xl shadow-warm-card transition-all duration-300 border border-warm-beige group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-warm-sage rounded-xl group-hover:scale-110 transition-transform shadow-warm-card">
                    <Icon className="w-6 h-6 text-warm-brown" />
                  </div>
                </div>

                <h3 className="text-2xl mb-3 text-warm-brown font-heading font-semibold">
                  {item.title}
                </h3>

                <p className="text-2xl text-warm-taupe font-body font-normal leading-relaxed">
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
