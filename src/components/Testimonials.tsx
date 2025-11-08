import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Aanya Sharma, B.Com Graduate",
    text:
      "Leaving my hostel after final exams, I had years' worth of B.Com books. I didn't have the time or energy to find individual buyers. My friends and I took everything to the main Bhatia Educational store in Parade Market. They took the entire lot in one go and gave us a great combined price. We actually used the money for our farewell dinner! It made clearing out my room so much easier.",
  },
  {
    name: "Vikram Singh, NEET Aspirant",
    text:
      "Honestly, I used to think selling old books wasn't worth the effort. But my NEET preparation modules are expensive, and I needed the latest editions. A senior recommended Bhatia, and I was genuinely impressed. They gave me a very fair price for my old physics and chemistry materials. Now, it's my go-to place at the end of every study cycle. It seriously helps manage my budget.",
  },
  {
    name: "Rohan Gupta, B.Tech Student, Kanpur",
    text:
      "My shelf was overflowing with last semester's engineering books. I took them to the Bhatia Educational outlet in Kakadeo, and the process was incredibly fast. I was honestly surprised by the great price they offered. It's the smartest way to clear clutter and get some cash back for your next set of books. Highly recommend!",
  },
  {
    name: "Priya Singh, Homemaker, Tilak Nagar",
    text:
      "Every year, the pile of my kids' old school books and storybooks would just get bigger. It felt wrong to throw them away. A friend suggested Bhatia Educational, and I'm so glad she did. It felt wonderful knowing these books will go to another family. The staff were courteous, and we got a fair amount for them, which was a lovely bonus!",
  },
  {
    name: "Alok Tripathi, Writer, Nayaganj",
    text:
      "I've been buying books from Bhatia's Parade Market store since I was in school. It's a Kanpur institution. So when my library at home got too full, there was no other place I'd trust. They understand the value of books, and you always get an honest price. They respect the books and the reader.",
  },
  {
    name: "Sneha Verma, UPSC Aspirant",
    text:
      "Preparing for government exams means constantly updating your study materials. I sold my old SSC preparation set to Bhatia Educational and used that exact money to buy the books I needed for my next exam. It's the best way to recycle your knowledge and your budget. They really understand the market for competition books.",
  },
];

const Testimonials = () => {
  const duplicated = [...testimonials, ...testimonials];
  return (
    <section className="bg-[hsl(var(--features-bg))] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Success Stories
        </h2>
        <div className="relative overflow-hidden group">
          <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 animate-[marquee-right_45s_linear_infinite] group-hover:[animation-play-state:paused] will-change-transform">
            {duplicated.map((t, idx) => (
              <Card
                key={idx}
                className="min-w-[220px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px] bg-card border-none shadow-md hover:shadow-lg transition-shadow ring-1 ring-border/60"
              >
                <CardContent className="p-3 sm:p-4 md:p-5">
                  <p className="text-sm sm:text-base text-muted-foreground leading-snug">{`"${t.text}"`}</p>
                  <p className="mt-2 sm:mt-3 font-semibold text-primary text-sm sm:text-base">— {t.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
