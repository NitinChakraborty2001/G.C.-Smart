import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Gift,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/Hero.jpg";
import goldImage from "@/assets/Gold.jpg";
import oxidizedImage from "@/assets/Dokra.jpg";
import beautyImage from "@/assets/Beauty.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const whatsappBase = "https://wa.me/919433167181?text=";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Vivekananda+Road%2C+Bansberia%2C+Hooghly%2C+West+Bengal%2C+India";

const messageLink = (message: string) => `${whatsappBase}${encodeURIComponent(message)}`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "G.C. Smart | Jewellery & Fashion Accessories In Bansberia!" },
      {
        name: "description",
        content:
          "Explore imitation, gold-plated and oxidized jewellery, Dokra products and cosmetics at G.C. Smart on Vivekananda Road, Bansberia, Hooghly.",
      },
      { property: "og:title", content: "G.C. Smart — Jewellery, Beauty & Style!" },
      {
        property: "og:description",
        content:
          "A local destination in Bansberia for jewellery, fashion accessories, Dokra and cosmetics for every occasion.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "G.C. Smart",
          description:
            "Jewellery and fashion accessories store offering imitation jewellery, gold-plated jewellery, oxidized jewellery, Dokra products and cosmetics.",
          telephone: ["+91 94331 67181", "+91 87778 23100"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vivekananda Road",
            addressLocality: "Bansberia",
            addressRegion: "West Bengal",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

const categories = [
  {
    name: "Gold-Plated Jewellery",
    note: "Traditional radiance for celebrations and special days.",
    image: goldImage,
    position: "object-center",
  },
  {
    name: "Oxidized Jewellery",
    note: "Bold silver-toned details for contemporary ethnic style.",
    image: oxidizedImage,
    position: "object-center",
  },
  {
    name: "Imitation Jewellery",
    note: "Versatile pieces for everyday looks, parties and gifting.",
    image: heroImage,
    position: "object-[72%_center]",
  },
  {
    name: "Traditional Dokra",
    note: "Distinctive craft-inspired pieces with an earthy character.",
    image: oxidizedImage,
    position: "object-[82%_center]",
  },
  {
    name: "Cosmetics",
    note: "Beauty essentials to bring your complete look together.",
    image: beautyImage,
    position: "object-center",
  },
];

const occasions = [
  ["Everyday Style", "Easy-to-pair accents for work, outings and daily wear."],
  ["Durga Puja & Festive", "Jewellery that brings warmth and celebration to festive dressing."],
  ["Weddings & Functions", "Traditional and statement options for your special invitations."],
  ["Parties & Birthdays", "Fashion-forward pieces made for dressing up and standing out."],
  ["Thoughtful Gifting", "Discover jewellery, accessories and Dokra ideas for someone special."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-16 text-foreground md:pb-0">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-foreground/25 text-hero-foreground">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" aria-label="G.C. Smart home">
            <span className="flex size-10 items-center justify-center rounded-full border border-gold font-display text-xl font-semibold text-gold">
              G
            </span>
            <span>
              <span className="block font-display text-2xl font-semibold leading-none">
                G.C. Smart
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Bansberia
              </span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            {[
              ["Collections", "#collections"],
              ["Occasions", "#occasions"],
              ["Our Story", "#about"],
              ["Visit Us", "#visit"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold transition-colors hover:text-gold"
              >
                {label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg">
              <a
                href={messageLink("Hello G.C. Smart, I would like to explore your collections.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> Chat On WhatsApp
              </a>
            </Button>
          </nav>
          <Button
            variant="heroOutline"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-hero-foreground/20 bg-berry px-5 py-5 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {[
                ["Collections", "#collections"],
                ["Occasions", "#occasions"],
                ["Our Story", "#about"],
                ["Visit Us", "#visit"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 font-semibold"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-190 overflow-hidden bg-berry text-hero-foreground image-wash md:min-h-195">
          <img
            src={heroImage}
            alt="Festive jewellery styling inspiration"
            width={1920}
            height={1200}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
          />
          <div className="relative z-10 mx-auto flex min-h-190 max-w-7xl items-end px-5 pb-14 pt-32 md:min-h-195 md:items-center md:pb-0 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                <span className="h-px w-10 bg-gold" /> Everything For Your Look
              </p>
              <h1 className="max-w-xl text-5xl font-semibold leading-[0.92] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Jewelry, Beauty <span className="text-gold">& Style</span>!
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-hero-foreground/85 md:text-lg">
                All in one place—discover jewellery, traditional Dokra and beauty essentials for
                everyday style and every celebration.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <a href="#collections">
                    Explore Collections <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <a
                    href={messageLink("Hello G.C. Smart, please help me find a festive look.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Find Your Festive Look
                  </a>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-hero-foreground/80">
                <span className="flex items-center gap-2">
                  <Sparkles className="size-4 text-gold" /> 5 Distinct Collections
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="size-4 text-gold" /> Easy WhatsApp Enquiries
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Curated for your style
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-none text-berry md:text-6xl">
                Explore Our Collections &rarr;
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              From effortless everyday pieces to festive favourites, discover styles across
              jewellery, traditional craft and beauty.
            </p>
          </div>
          <div className="mt-12 grid auto-rows-77.5 gap-4 md:grid-cols-2 md:auto-rows-100 lg:grid-cols-12">
            {categories.map((category, index) => (
              <article
                key={category.name}
                className={`group relative overflow-hidden rounded-sm bg-berry ${index < 2 ? "lg:col-span-6" : index === 2 ? "lg:col-span-5" : index === 3 ? "lg:col-span-3" : "lg:col-span-4"}`}
              >
                <img
                  src={category.image}
                  alt={`${category.name} styling inspiration`}
                  loading="lazy"
                  width={index === 2 ? 1920 : 1200}
                  height={index === 2 ? 1200 : 1504}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] ${category.position}`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-berry via-berry/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-hero-foreground md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                    Collection 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{category.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-hero-foreground/80">
                    {category.note}
                  </p>
                  <a
                    href={messageLink(
                      `Hello G.C. Smart, I would like to know about your ${category.name} collection, availability and current prices.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold"
                  >
                    Ask About This Collection <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Images are editorial styling inspiration and may not show current store inventory.
            Please enquire for availability.
          </p>
        </section>

        <section id="occasions" className="bg-forest py-20 text-hero-foreground lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                Made For The Moment
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-none md:text-6xl">
                Find Your Look By Occasion!
              </h2>
              <p className="mt-5 leading-7 text-hero-foreground/75">
                Tell us where you are going, what you love and the budget you have in mind. We’ll
                help you explore suitable options in store.
              </p>
            </div>
            <div className="mt-12 divide-y divide-hero-foreground/20 border-y border-hero-foreground/20">
              {occasions.map(([title, copy], index) => (
                <a
                  key={title}
                  href={messageLink(
                    `Hello G.C. Smart, please help me explore options for ${title}. Please share current availability and prices.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-3 py-6 transition-colors hover:text-gold md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-8"
                >
                  <span className="text-sm text-gold">0{index + 1}</span>
                  <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
                  <p className="text-sm leading-6 text-hero-foreground/65 group-hover:text-gold/80">
                    {copy}
                  </p>
                  <ChevronRight className="hidden md:block" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-ivory-deep py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative">
              <img
                src={beautyImage}
                alt="Coordinated jewellery and beauty look inspiration"
                loading="lazy"
                width={1200}
                height={1504}
                className="aspect-4/5 w-full object-cover"
              />
              <div className="absolute -bottom-5 -right-1 bg-berry px-6 py-5 text-hero-foreground sm:right-6">
                <span className="block font-display text-2xl font-semibold text-gold">
                  One Look!..
                </span>
                <span className="text-sm">Thoughtfully brought together.</span>
              </div>
            </div>
            <div className="lg:pl-12">
              <span className="inline-flex border border-primary/30 bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Proposed Promotional Concept
              </span>
              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] text-berry md:text-6xl">
                The Complete-Look Collection!
              </h2>
              <p className="mt-6 text-lg leading-8">
                A simpler way to coordinate jewellery, accessories and beauty essentials for your
                outfit and occasion.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: Heart,
                    title: "Coordinated Combinations",
                    copy: "Explore jewellery and beauty pairings chosen around your look.",
                  },
                  {
                    icon: Sparkles,
                    title: "In-store Styling Suggestions",
                    copy: "A proposed complimentary way to help you compare suitable options.",
                  },
                  {
                    icon: Gift,
                    title: "Selected Bundle Possibilities",
                    copy: "Potential savings only where product availability and shop margins permit.",
                  },
                ].map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="grid grid-cols-[42px_1fr] gap-4">
                    <span className="flex size-10 items-center justify-center rounded-full border border-gold text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-bold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 border-l-2 border-gold pl-4 text-sm leading-6 text-muted-foreground">
                This concept is not yet an active offer. Product combinations, prices, savings and
                availability will be confirmed by the shop before launch.
              </p>
              <Button asChild variant="default" size="lg" className="mt-8">
                <a
                  href={messageLink(
                    "Hello G.C. Smart, I am interested in coordinated jewellery and beauty options. Please share current products and prices.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask About Complete Looks <MessageCircle />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Your Local Style Destination
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-none text-berry md:text-6xl">
                A Little More of What You Love, In One Place!
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-8 text-muted-foreground md:col-span-2">
                G.C. Smart brings contemporary fashion and traditional Indian aesthetics together
                for customers in Bansberia and the surrounding areas. Explore jewellery,
                accessories, Dokra and cosmetics for personal style, celebrations and thoughtful
                gifts.
              </p>
              <div className="border-t border-gold pt-5">
                <h3 className="font-sans text-base font-bold text-berry">
                  Style For Different Budgets
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Ask the team to help you explore currently available options around the budget you
                  share.
                </p>
              </div>
              <div className="border-t border-gold pt-5">
                <h3 className="font-sans text-base font-bold text-berry">Easy Local Enquiries</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Check availability, current prices, new arrivals and gift ideas through WhatsApp
                  or a quick call.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-berry py-20 text-hero-foreground lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                  Style inspiration
                </p>
                <h2 className="mt-3 text-4xl font-semibold md:text-6xl">A Glimpse Of The Mood!</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-hero-foreground/65">
                Editorial inspiration shown here is illustrative. Authentic new-arrival and in-store
                photographs can be added as they become available.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { src: goldImage, alt: "Gold-toned jewellery inspiration", label: "Gold-toned" },
                {
                  src: oxidizedImage,
                  alt: "Oxidized jewellery and Dokra inspiration",
                  label: "Oxidized & Dokra",
                },
                {
                  src: beautyImage,
                  alt: "Jewellery and beauty styling inspiration",
                  label: "Beauty & Styling",
                },
              ].map(({ src, alt, label }) => (
                <figure
                  key={src}
                  className="overflow-hidden rounded-2xl border border-gold/30 bg-berry-soft"
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="aspect-4/5 w-full object-cover"
                  />
                  <figcaption className="flex items-center gap-3 px-5 py-4">
                    <span className="h-px flex-1 bg-gold/30" />
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-gold">
                      {label}
                    </span>
                    <span className="h-px flex-1 bg-gold/30" />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
              Good to know
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-none text-berry md:text-6xl">
              Frequently Asked Questions &rarr;
            </h2>
          </div>
          <Accordion type="single" collapsible className="border-t border-border">
            {[
              [
                "Can I check product availability before visiting?",
                "Yes. Send G.C. Smart a WhatsApp message or call the store with the type of product you are looking for. Availability can then be confirmed directly.",
              ],
              [
                "Are prices available online?",
                "Prices are not listed on this website because current products and availability may change. Please enquire for accurate, current prices.",
              ],
              [
                "What products can I find at G.C. Smart?",
                "The store offers imitation jewellery, gold-plated jewellery, oxidized jewellery, traditional Dokra products and cosmetics.",
              ],
              [
                "Can I ask for gift or occasion ideas?",
                "Yes. Share the occasion, preferred style and budget on WhatsApp so the store can suggest currently available options to explore.",
              ],
              [
                "Where is the shop located?",
                "G.C. Smart is on Vivekananda Road, Bansberia, Hooghly, West Bengal, India. Use the directions link below to open the address in Google Maps.",
              ],
            ].map(([question, answer], index) => (
              <AccordionItem key={question} value={`item-${index}`}>
                <AccordionTrigger className="py-6 text-base text-berry md:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="visit" className="bg-ivory-deep py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid overflow-hidden bg-berry text-hero-foreground lg:grid-cols-2">
              <div className="p-8 md:p-14 lg:p-16">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                  Visit or get in touch
                </p>
                <h2 className="mt-4 text-4xl font-semibold leading-none md:text-6xl">
                  Your Next Look Starts Here!
                </h2>
                <p className="mt-6 max-w-md leading-7 text-hero-foreground/75">
                  Ask about availability, current prices, new arrivals or gift ideas—then visit the
                  shop on Vivekananda Road.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="hero" size="lg">
                    <a
                      href={messageLink(
                        "Hello G.C. Smart, I would like to enquire about your products and current prices.",
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle /> Chat On WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="heroOutline" size="lg">
                    <a href="tel:+919433167181">
                      <Phone /> Call The Store
                    </a>
                  </Button>
                </div>
              </div>
              <div className="border-t border-hero-foreground/20 p-8 md:p-14 lg:border-l lg:border-t-0 lg:p-16">
                <div className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-gold">
                      G.C. Smart
                    </h3>
                    <address className="mt-3 max-w-sm font-display text-2xl not-italic leading-8">
                      Vivekananda Road, Bansberia, Hooghly, West Bengal, India.
                    </address>
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold"
                    >
                      Open Directions <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="editorial-rule my-8" />
                <div className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-gold" />
                  <div className="space-y-2">
                    <a href="tel:+919433167181" className="block text-lg font-semibold">
                      (+91) 9433167181
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-berry px-5 py-10 text-hero-foreground lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-hero-foreground/20 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">G.C. Smart</p>
            <p className="mt-1 text-xs text-hero-foreground/60">
              Jewellery, Beauty & Style — All In One Place!
            </p>
          </div>
          <p className="text-xs text-hero-foreground/60">
            Powered By <a href="https://www.nexadigitalservices.agency">Nexa</a>, A Digital Agency
            By <a href="https://www.linkedin.com/in/NitinChakraborty2001/">Nitin Chakraborty</a>
            .{" "}
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background p-2 md:hidden">
        <Button asChild variant="default" size="lg" className="rounded-none">
          <a
            href={messageLink("Hello G.C. Smart, I would like to enquire about your products.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle /> WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-none">
          <a href="tel:+919433167181">
            <Phone /> Call Store
          </a>
        </Button>
      </div>
    </div>
  );
}
