import { Fragment, type ComponentType } from "react";
import { Card, CardContent } from "@/components/ui/card";
import shareBooksImg from "@/assets/share-books-illustration.png";

type Feature = {
  image?: string;
  icon?: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
};

const features: Feature[] = [
  {
    image: shareBooksImg,
    title: "You Share Your Books",
    description: "",
    iconBg: "bg-teal-100",
    iconColor: "text-accent",
  },
  {
    image: "/Gemini_Generated_Image_tczx1ktczx1ktczx.png",
    title: "We Evaluate & Offer Price",
    description: "",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    image: "/Gemini_Generated_Image_ax5sayax5sayax5s.png",
    title: "Pickup & Inspection",
    description: "",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    image: "/Gemini_Generated_Image_jov5axjov5axjov5.png",
    title: "You Get Paid",
    description: "",
    iconBg: "bg-teal-100",
    iconColor: "text-accent",
  },
  {
    image: "/Gemini_Generated_Image_oei0dgoei0dgoei0.png",
    title: "Books Get New Readers",
    description: "",
    iconBg: "bg-teal-100",
    iconColor: "text-accent",
  },
];

const Features = () => {
  return (
    <section className="bg-[hsl(var(--features-bg))] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Why Choose Bhatia Educational?
        </h2>
        <p className="text-center text-muted-foreground mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base md:text-lg animate-fade-in">
          Affordable learning, endless possibilities
        </p>
        <div className="flex flex-wrap items-stretch justify-center gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Fragment key={index}>
              <Card
                className="w-full max-w-xs sm:w-60 md:w-64 lg:w-60 xl:w-64 bg-card border-none shadow-md ring-1 ring-border/50 hover:ring-2 hover:ring-primary/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col items-center text-center">
                  {feature.image ? (
                    <>
                      <div className="w-full min-h-28 sm:min-h-32 md:min-h-36 lg:min-h-40 xl:min-h-44 mb-3 group-hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-[hsl(var(--features-bg))] to-[hsl(var(--hero-bg))] p-1 sm:p-1.5 lg:p-2 shadow-xl ring-2 ring-border/40 hover:ring-primary/50 flex items-center justify-center">
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-2xl drop-shadow-2xl transition-all duration-500 hover:scale-110" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-muted-foreground leading-relaxed mt-2">
                          {feature.description}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <div
                        className={`${feature.iconBg} ${feature.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary/15 via-primary/10 to-accent/15 border border-primary/10 text-sm font-medium mb-3 ring-1 ring-primary/20 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:ring-primary/35 hover:shadow-md">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-extrabold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                        <span className="text-foreground/70 tracking-wide">Step</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">
                        {feature.title}
                      </h3>
                      {feature.description && (
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
              {index < features.length - 1 && (
                <>
                  <div className="hidden md:flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow ring-1 ring-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M13.172 12 8.222 7.05a1 1 0 1 1 1.414-1.414l6.364 6.364a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 1 1-1.414-1.414L13.172 12z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex md:hidden w-full justify-center -mt-2 -mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow ring-1 ring-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 rotate-90"
                      >
                        <path d="M13.172 12 8.222 7.05a1 1 0 1 1 1.414-1.414l6.364 6.364a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 1 1-1.414-1.414L13.172 12z"/>
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
