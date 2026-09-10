import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Star } from "lucide-react";

/**
 * Kinn Retreat & Massage - Home Page
 * Design: Zen Minimalism with Warm Earthy Tones
 * - Asymmetric layouts with generous whitespace
 * - Warm taupe and sage green color palette
 * - Smooth, gentle animations
 * - Typography: Playfair Display (headings), Lato (body), Caveat (accents)
 */

export default function Home() {
  const services = [
    {
      id: 1,
      name: "Thai Massage",
      duration: "60 min",
      price: "฿450",
      description: "Traditional Thai massage with pressure point techniques and yoga stretching to relieve muscle tension.",
      image: `${import.meta.env.BASE_URL}images/service-thai-massage.jpg`,
    },
    {
      id: 2,
      name: "Aromatherapy Massage",
      duration: "120 min",
      price: "฿1,250",
      description: "Relaxing oil massage with essential aromas to calm the mind and rejuvenate the body.",
      image: `${import.meta.env.BASE_URL}images/service-aromatherapy.jpg`,
    },
    {
      id: 3,
      name: "Foot Massage",
      duration: "60 min",
      price: "฿350",
      description: "Therapeutic foot massage with pressure points to release fatigue and improve circulation.",
      image: `${import.meta.env.BASE_URL}images/service-thai-massage.jpg`,
    },
    {
      id: 4,
      name: "Hot Stone Massage",
      duration: "60 min",
      price: "฿900",
      description: "Volcanic hot stones combined with massage to stimulate circulation and reduce muscle aches.",
      image: `${import.meta.env.BASE_URL}images/service-aromatherapy.jpg`,
    },
  ];

  const reviews = [
    {
      name: "Kyunghee",
      rating: 5,
      text: "The shop was very clean and quiet. Foot massage was excellent!",
    },
    {
      name: "Edoardo",
      rating: 5,
      text: "Very relaxing, quiet and good service. Highly recommend!",
    },
    {
      name: "Sarah",
      rating: 5,
      text: "Professional therapists and peaceful atmosphere. Best spa experience in Hua Hin!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary">
            <span className="accent-title text-3xl">Kinn</span> Retreat
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
          <Button className="btn-primary">Book Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-spa-zen.jpg`}
            alt="Spa hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="accent-title text-4xl md:text-5xl text-accent">
              Find Your Peace
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Kinn Retreat & Massage
            </h1>
            <p className="text-lg text-gray-100 max-w-md">
              Experience authentic Thai massage and wellness treatments in the heart of Hua Hin. Reconnect with nature and yourself.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="btn-primary">Book Appointment</Button>
              <Button className="btn-secondary">Learn More</Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p className="text-gray-100">Daily 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Reservation</p>
                    <p className="text-gray-100">062-994-6996</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-100">64 Phet Kasem Rd, Hua Hin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-divider py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="section-subtitle">Our Services</div>
            <h2 className="section-title">Massage & Wellness Treatments</h2>
            <p className="text-lg text-muted-foreground">
              From traditional Thai massage to aromatherapy, our professional therapists offer a range of treatments designed to relax your body and calm your mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card overflow-hidden group ${
                  index % 2 === 1 ? "md:mt-8" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
                  <span>{service.duration}</span>
                  <span className="text-accent font-semibold text-lg">{service.price}</span>
                </div>
                <p className="text-foreground/80 mb-4">{service.description}</p>
                <Button className="btn-primary w-full">Book This Service</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-divider py-20 md:py-32 bg-secondary/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/spa-interior.jpg`}
                alt="Spa interior"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="section-subtitle">About Kinn Retreat</div>
              <h2 className="section-title">Your Sanctuary of Wellness</h2>
              <p className="text-lg text-foreground/80">
                Located right in front of Hua Hin Night Market on Petchakasem Road, Kinn Retreat & Massage is your destination for authentic Thai wellness experiences.
              </p>
              <p className="text-lg text-foreground/80">
                Our team of professionally trained therapists combines traditional Thai massage techniques with modern wellness practices. We use carefully selected natural products and maintain the highest standards of cleanliness and hospitality.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Expert, trained therapists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Clean, peaceful environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Premium natural products</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Affordable pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-divider py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <div className="section-subtitle">Guest Reviews</div>
            <h2 className="section-title">What Our Guests Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="service-card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">{review.text}</p>
                <p className="font-semibold text-foreground">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-divider py-20 md:py-32 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="section-subtitle">Get In Touch</div>
                <h2 className="section-title">Visit Us Today</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p className="text-foreground/80">64 Phet Kasem Rd, Hua Hin District, Prachuap Khiri Khan 77110</p>
                    <p className="text-sm text-muted-foreground mt-2">In front of Hua Hin Night Market, opposite Swensens</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <p className="text-foreground/80">062-994-6996</p>
                    <p className="text-sm text-muted-foreground mt-2">For advance reservations</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Hours</p>
                    <p className="text-foreground/80">Daily 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              <Button className="btn-primary w-full md:w-auto">Book Appointment</Button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5890378895574!2d99.82829!3d12.60611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d5c9e5e5e5e5e5%3A0x0!2sKinn%20Retreat%20and%20Massage!5e0!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-2">
                <span className="accent-title text-2xl">Kinn</span> Retreat
              </div>
              <p className="text-sm text-muted-foreground">Your sanctuary of wellness in Hua Hin</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-3">Hours</p>
              <p className="text-sm text-muted-foreground">Daily</p>
              <p className="text-sm text-muted-foreground">12:00 PM - 11:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-3">Contact</p>
              <p className="text-sm text-muted-foreground">062-994-6996</p>
              <p className="text-sm text-muted-foreground">64 Phet Kasem Rd</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Kinn Retreat & Massage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
