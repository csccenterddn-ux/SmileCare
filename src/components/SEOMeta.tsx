import React from 'react';
import { useTreatment } from '../context/TreatmentContext';

export default function SEOMeta() {
  const { activeTreatment } = useTreatment();

  // Baseline details
  let title = "SmileCare Dental | Premium Dental Care Clinic";
  let description = "SmileCare Dental is Dehradun's premium dental care clinic. Delivering advanced dental implants, smile makeovers, invisible aligners, and gentle treatments with leading edge technology.";
  let keywords = "SmileCare Dental, dental clinic Dehradun, dentist in Dehradun, dental implants Dehradun, smile makeover, invisible aligners, root canal treatment, cosmetic dentist, pediatric dentistry, teeth whitening";
  let image = "/public/before-after/allon4.jpg";

  // Dynamic overrides based on selected context/treatments
  if (activeTreatment) {
    const norm = activeTreatment.toLowerCase();
    if (norm.includes('implant')) {
      title = "Advanced Dental Implants | SmileCare Dental Clinic";
      description = "Premium implant treatments in Dehradun. Get natural-looking, durable dental implants, including All-on-4 and All-on-6, from top specialists at SmileCare.";
      keywords = "dental implants Dehradun, tooth implant, dental implant cost, All-on-4 implants, All-on-6 implants, SmileCare Dental implants";
      image = "/public/before-after/allon4.jpg";
    } else if (norm.includes('root') || norm.includes('canal') || norm.includes('rct')) {
      title = "Gentle Root Canal Treatment (RCT) | SmileCare Dental Clinic";
      description = "Painless and precise root canal treatments at SmileCare Dental. Save your natural tooth with our high-success therapy using modern techniques.";
      keywords = "root canal treatment Dehradun, RCT dentist, painless root canal, SmileCare Dental RCT, endodontist Dehradun";
      image = "/public/before-after/17.webp";
    } else if (norm.includes('whitening') || norm.includes('bleach')) {
      title = "Professional Teeth Whitening | SmileCare Dental Clinic";
      description = "Get a sparkling white smile with professional teeth whitening at SmileCare. Fast, safe, and long-lasting visible whitening treatments.";
      keywords = "teeth whitening Dehradun, teeth bleaching, cosmetic tooth whitening, SmileCare whitening, yellow teeth treatment";
      image = "/public/before-after/aliya.png";
    } else if (norm.includes('aligner') || norm.includes('invisalign') || norm.includes('brace')) {
      title = "Invisible Aligners & Invisalign | SmileCare Dental Clinic";
      description = "Straighten your teeth discreetly with dental-grade invisible aligners. Book a consultation at SmileCare for premium orthodontic aligners.";
      keywords = "invisible aligners Dehradun, Invisalign cost, clear aligners Dehradun, dental braces, straight teeth, SmileCare aligners";
      image = "/public/before-after/unnamed7.webp";
    } else if (norm.includes('makeover') || norm.includes('veneer')) {
      title = "Premium Smile Makeover & Veneers | SmileCare Dental Clinic";
      description = "Re-engineer your confidence. Get custom veneers and aesthetic enhancements designed specifically for your face at SmileCare Dental.";
      keywords = "smile makeover Dehradun, dental veneers, porcelain veneers, cosmetic dentistry Dehradun, composite bonding, SmileCare tooth aesthetic";
      image = "/public/before-after/88-2.webp";
    } else if (norm.includes('checkup') || norm.includes('clean') || norm.includes('general')) {
      title = "Comprehensive Dental Checkup & Cleaning | SmileCare";
      description = "Keep your teeth healthy. Schedule professional scaling, polishing, and comprehensive oral health assessment at SmileCare Dental.";
      keywords = "dental checkup Dehradun, teeth cleaning, dental scaling and polishing, preventive dentistry, oral health assessment";
      image = "/public/before-after/unnamed7.webp";
    } else if (norm.includes('pediatric') || norm.includes('child') || norm.includes('kids')) {
      title = "Gentle Pediatric & Kids Dentistry | SmileCare Dental Clinic";
      description = "Specialized, anxiety-free pediatric dental care for infants and children at SmileCare. Healthy smiles begin with happy childhood experiences.";
      keywords = "pediatric dentist Dehradun, kids dental clinic, children dentistry, painless kids dental treatments, tooth decay kids";
      image = "/public/before-after/unnamed7.webp";
    } else if (norm.includes('wisdom') || norm.includes('extraction') || norm.includes('removal')) {
      title = "Safe & Painless Wisdom Tooth Extraction | SmileCare Clinic";
      description = "Experienced dental surgeons for painless, surgical and non-surgical wisdom tooth extractions with complete post-care support at SmileCare.";
      keywords = "wisdom tooth removal Dehradun, wisdom tooth extraction cost, painless tooth extraction, oral surgeon Dehradun";
      image = "/public/before-after/unnamed7.webp";
    } else if (norm.includes('emergency')) {
      title = "24/7 Urgent Dental Emergency Treatment | SmileCare";
      description = "Urgent dental care for severe toothaches, custom scaling, knocked-out teeth, or dental trauma. Reach SmileCare Dental Clinic for immediate relief.";
      keywords = "emergency dentist Dehradun, 24 hour dental clinic, urgent dental care, acute toothache relief, broken tooth treatment";
      image = "/public/before-after/unnamed7.webp";
    }
  }

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SmileCare Dental" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </>
  );
}
