"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, MapPin, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Über uns",
          id: "about",
        },
        {
          name: "Leistungen",
          id: "features",
        },
        {
          name: "Referenzen",
          id: "testimonials",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="PROTECH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Ihr Partner für moderne Haustechnik in Starnberg"
      description="PROTECH steht für hochwertige Handwerksleistungen bei Wärmepumpen, Fußbodenheizungen und Gebäudetechnik. Wir machen Ihr Zuhause zukunftssicher."
      buttons={[
        {
          text: "Jetzt anfragen",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/male-car-mechanic-using-tablet-device-car-repair-shop_23-2150367538.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Kompetenz, die überzeugt"
      metrics={[
        {
          label: "Jahre Erfahrung",
          value: "2+",
          icon: Award,
        },
        {
          label: "Kundenzufriedenheit",
          value: "5.0/5",
          icon: Star,
        },
        {
          label: "Einsatzgebiete",
          value: "Starnberg+",
          icon: MapPin,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Wärmepumpen",
          description: "Energieeffiziente Heizlösungen für Ihr Zuhause.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250247.jpg",
        },
        {
          id: "f2",
          title: "Fußbodenheizungen",
          description: "Gleichmäßige Wärme für maximalen Wohnkomfort.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-worker-tiling-floor_23-2149343998.jpg",
        },
        {
          id: "f3",
          title: "Sanitär & Armaturen",
          description: "Installation und Reparatur nach Maß.",
          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721571.jpg",
        },
      ]}
      title="Unsere Leistungen"
      description="Von der Beratung bis zur Installation – alles aus einer Hand."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Hervorragend",
          quote: "Sehr gute Beratung und effiziente Durchführung.",
          name: "Kunde Starnberg",
          role: "Hausbesitzer",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-house-model-t-shirt-jacket-cap-looking-amazed-front-view_176474-57861.jpg",
        },
        {
          id: "t2",
          title: "Perfekt",
          quote: "Ausgezeichnete Beratung und perfekter Service!",
          name: "Kunde Starnberg",
          role: "Hausbesitzer",
          imageSrc: "http://img.b2bpic.net/free-photo/box-pov-girl-parcel-unboxing-joy_169016-68951.jpg",
        },
        {
          id: "t3",
          title: "Empfehlung",
          quote: "Absolute Empfehlung – tolles Projekt mit Wärmepumpe.",
          name: "Kunde Starnberg",
          role: "Bauherr",
          imageSrc: "http://img.b2bpic.net/free-photo/two-people-working-warehouse_329181-12772.jpg",
        },
        {
          id: "t4",
          title: "Freundlich",
          quote: "Sehr freundlich und alles verständlich erklärt.",
          name: "Kunde Starnberg",
          role: "Hausbesitzer",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman-connects-video-chat-waves-digital-tablet-smiling-sits-hom_1258-182979.jpg",
        },
        {
          id: "t5",
          title: "Fachlich top",
          quote: "Super Qualität und absolut termingerecht.",
          name: "Kunde Starnberg",
          role: "Renovierer",
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-smiling-businessman-showing-thumbs-up-with-funny-faces-drawings-focus-hands-white-modern-office-interior_176420-6491.jpg",
        },
      ]}
      title="Was unsere Kunden sagen"
      description="5-Sterne-Service in Starnberg und Umgebung."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Bereit für Ihr Projekt?"
      description="Rufen Sie uns unter 089 255517199 an oder senden Sie uns eine Anfrage. Wir sind bis 17 Uhr für Sie da."
      buttons={[
        {
          text: "Jetzt anrufen",
          href: "tel:089255517199",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Über uns",
              href: "#about",
            },
            {
              label: "Leistungen",
              href: "#features",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "089 255517199",
              href: "tel:089255517199",
            },
            {
              label: "Starnberg & Umgebung",
              href: "#",
            },
          ],
        },
      ]}
      logoText="PROTECH"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
