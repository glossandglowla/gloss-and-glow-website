/* ==========================================================================
   GLOSS & GLOW — BUSINESS CONFIGURATION
   --------------------------------------------------------------------------
   One of only two files you should ever need to edit:

     assets/data/config.js     business, contact and booking details  ← this file
     assets/data/services.js   every service, description and price

   Change a value here and it updates on every page automatically.
   ========================================================================== */

const glossConfig = {

  /* ---------------------------------------------------------------- brand */
  businessName: "Gloss & Glow",
  categoriesLine: "Hair \u00b7 Barber \u00b7 Nails \u00b7 Skin",
  shortDescription:
    "Gloss & Glow is a modern beauty and grooming studio in Glendale, California " +
    "offering professional hair, barber, nail and skincare services.",

  /* -------------------------------------------------------------- contact */
  address: {
    street: "103 S Kenwood St",
    city: "Glendale",
    state: "CA",
    zip: "91205",
    country: "US"
  },

    email: {
      display: "glossandglowla@gmail.com",
      link: "mailto:glossandglowla@gmail.com"
    },
  phone: {
    display: "(916) 813-1283",
    /* E.164 form used by every Call button — digits only, no spaces */
    link: "+19168131283"
  },

  /* ================================================================ BOOKING
     Square Appointments is the booking system. Paste the salon's Square
     booking link here ONCE and every "Book Appointment" button on the site
     points to it — home, all four service pages, contact, header and footer.

     Find it in Square Dashboard → Appointments → Online Booking → Booking site,
     then copy the public URL. It usually looks like:

       https://squareup.com/appointments/book/xxxxxxxx/start
       https://book.squareup.com/appointments/xxxxxxxx/location/xxxx/services

     UNTIL THIS IS SET: booking buttons fall back to the phone number rather
     than sending anyone to a dead link, and a short line appears explaining
     that online booking is opening soon.
     ==================================================================== */
  squareBookingUrl: "https://book.squareup.com/appointments/jscy93pnetrwc7/location/LRZZM52B8VKMM",

  /* --------------------------------------------------------------- maps
     Leave directionsUrl empty and the site builds a Google Maps directions
     link from the address above. To use a specific Google Business listing
     instead, paste its share link here. */
  directionsUrl: "",

  /* Set to false to remove the embedded map from the contact page. */
  showMapEmbed: true,

  /* ------------------------------------------------------------- social
     Left empty on purpose — no accounts have been supplied. Paste real
     profile URLs here and the icons appear in the footer. While a value is
     empty its icon stays hidden rather than linking nowhere. */
  social: {
    instagram: "",
    facebook: ""
  },

  /* --------------------------------------------------------------- site
     PLACEHOLDER — replace with the live address once deployed, e.g.
     "https://username.github.io/gloss-and-glow". Used for sharing links.
     The same value also appears in the <head> of each page; see README §12. */
  siteUrl: "https://glossandglowla.com"
};

/* ---- derived values, no need to edit ---------------------------------- */
glossConfig.cityStateZip =
  glossConfig.address.city + ", " + glossConfig.address.state + " " + glossConfig.address.zip;

glossConfig.fullAddress = glossConfig.address.street + ", " + glossConfig.cityStateZip;

glossConfig.mapsQuery = encodeURIComponent(glossConfig.fullAddress);

glossConfig.resolvedDirectionsUrl =
  glossConfig.directionsUrl ||
  "https://www.google.com/maps/dir/?api=1&destination=" + glossConfig.mapsQuery;

glossConfig.mapEmbedUrl =
  "https://www.google.com/maps?q=" + glossConfig.mapsQuery + "&output=embed";

/* True once a real Square link has been pasted in above. */
glossConfig.bookingReady =
  !!glossConfig.squareBookingUrl &&
  glossConfig.squareBookingUrl.indexOf("PASTE_") !== 0;

/* Top-level `const` does not attach to window in a classic script, so the
   configuration is published explicitly for the site scripts to read. */
window.glossConfig = glossConfig;
