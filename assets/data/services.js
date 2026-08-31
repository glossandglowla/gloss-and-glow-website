/* ==========================================================================
   GLOSS & GLOW — MASTER SERVICE MENU
   --------------------------------------------------------------------------
   THIS IS THE ONLY PLACE PRICES LIVE.

   Every service menu on the site is built from this file at page load:
   the Hair, Barber, Nails and Skin pages, and the featured services on the
   home page. No price is written into any HTML file. Change a number here
   and it updates everywhere.

   --------------------------------------------------------------------------
   SERVICE FIELDS

     name          required. Shown on the left of the menu row.
     price         number, or null when there is no fixed price.
     from          true  -> renders "$85+"  (a starting price)
                   false -> renders "$45"   (a fixed price)
     priceLabel    overrides the number entirely, e.g. "Consultation Required"
     unit          appended after the price, e.g. "per nail"
     description   optional. A short muted line under the service name.
     duration      optional. e.g. "60 min". Left empty until confirmed —
                   nothing is shown for a service with no duration set.
     includes      optional array of strings, listed under the name.
     addons        optional array of { name, price, from } shown as extras.
     featured      true puts the service in the home page featured list.
     bookingUrl    optional. A Square link for this one service. When empty,
                   the button uses the main Square link from config.js.
     order         optional number. Services render in array order unless set.

   --------------------------------------------------------------------------
   TO CHANGE A PRICE
     Find the service, edit its "price" number, save. Done.

   TO ADD A SERVICE
     Copy any { ... } block into the group you want and edit it.

   TO REMOVE A SERVICE
     Delete its { ... } block.

   TO REORDER
     Move blocks up or down, or give them an "order" number.
   ========================================================================== */

const glossServices = {

  /* Shown in small type beneath menus that contain starting prices. */
  startingPriceNote:
    "Prices shown are starting prices and may vary based on service complexity, " +
    "hair length or density, product requirements, and selected professional. " +
    "Final pricing is confirmed during consultation or before service.",

  categories: [

    /* ==================================================================== */
    {
      id: "hair",
      order: 1,
      label: "Hair",
      page: "hair.html",
      image: "home-hair.png",
      badge: "badge-hair.png",
      tagline: "Cuts, color and styling for women and men",
      intro:
        "Cutting, color and finishing for every length and texture. Tell your " +
        "stylist what you want at the start and you will get a straight answer " +
        "about what it takes to get there.",
      bookingCategory: "hair",
      groups: [
        {
          id: "hair-cuts",
          title: "Cuts",
          services: [
            { name: "Women's Haircut & Style", price: 85, from: true, featured: true,
              description: "Consultation, shampoo, cut and finish." },
            { name: "Men's Salon Haircut", price: 50, from: true },
            { name: "Children's Haircut", price: 40, from: true },
            { name: "Bang / Fringe Trim", price: 20, from: true }
          ]
        },
        {
          id: "hair-styling",
          title: "Styling",
          services: [
            { name: "Blowout", price: 55, from: true,
              description: "Wash and blow-dry with a smooth or soft finish." },
            { name: "Blowout \u2014 Long / Thick Hair", price: 70, from: true },
            { name: "Flat Iron / Curl Styling Add-On", price: 20, from: true },
            { name: "Special Occasion Styling", price: 125, from: true },
            { name: "Updo", price: 150, from: true }
          ]
        },
        {
          id: "hair-color",
          title: "Color",
          services: [
            { name: "Root Touch-Up", price: 110, from: true },
            { name: "All-Over Color", price: 140, from: true },
            { name: "Gloss / Toner", price: 65, from: true,
              description: "Refreshes tone and adds shine between appointments." },
            { name: "Partial Highlights", price: 140, from: true },
            { name: "Full Highlights", price: 180, from: true },
            { name: "Partial Balayage", price: 165, from: true },
            { name: "Full Balayage", price: 220, from: true,
              description: "Hand-painted, lived-in lightening." },
            { name: "Color Correction", price: null, priceLabel: "Consultation Required",
              description: "Booked after an in-person assessment." }
          ]
        },
        {
          id: "hair-treatments",
          title: "Treatments",
          services: [
            { name: "Deep Conditioning Treatment", price: 35, from: true },
            { name: "Bond Repair Treatment", price: 40, from: true },
            { name: "Scalp Treatment", price: 45, from: true },
            { name: "Keratin / Smoothing Treatment", price: 200, from: true }
          ]
        }
      ]
    },

    /* ==================================================================== */
    {
      id: "barber",
      order: 2,
      label: "Barber",
      page: "barber.html",
      image: "home-barber.png",
      badge: "badge-barber.png",
      tagline: "Precision cuts, fades, beard work and hot towel shaves",
      intro:
        "A dedicated barber chair inside the studio. Clippers, scissors, " +
        "straight razor and hot towels, with the time to get the line right.",
      bookingCategory: "barber",
      groups: [
        {
          id: "barber-cuts",
          title: "Cuts",
          services: [
            { name: "Classic Haircut", price: 45, from: false },
            { name: "Skin / Mid / Low Fade", price: 50, from: false, featured: true,
              description: "Blended to the height you want." },
            { name: "Scissor Cut", price: 50, from: false },
            { name: "Haircut + Beard Trim", price: 65, from: false },
            { name: "Kids Barber Cut", price: 35, from: false }
          ]
        },
        {
          id: "barber-beard",
          title: "Beard & Shave",
          services: [
            { name: "Beard Trim", price: 25, from: false },
            { name: "Beard Shape & Line-Up", price: 30, from: false },
            { name: "Hot Towel Shave", price: 40, from: false,
              description: "Traditional straight-razor shave with hot towels." },
            { name: "Line-Up / Cleanup", price: 25, from: false }
          ]
        },
        {
          id: "barber-packages",
          title: "Packages",
          services: [
            { name: "Premium Grooming Package", price: 85, from: false,
              includes: ["Haircut", "Beard detailing", "Hot towel finish"] }
          ]
        }
      ]
    },

    /* ==================================================================== */
    {
      id: "nails",
      order: 3,
      label: "Nails",
      page: "nails.html",
      image: "home-nails.png",
      badge: "badge-nails.png",
      tagline: "Manicures, pedicures, enhancements and detailed nail work",
      intro:
        "Careful prep, clean shaping and finishes that hold up. Structured " +
        "Russian-style work is available for anyone who wants a longer-lasting, " +
        "more precise result.",
      bookingCategory: "nails",
      groups: [
        {
          id: "nails-manicure",
          title: "Manicure",
          services: [
            { name: "Classic Manicure", price: 30, from: false },
            { name: "Gel Manicure", price: 45, from: false, featured: true,
              description: "Long-wear gel color, cured and finished." },
            { name: "Russian / Detailed Manicure", price: 50, from: true,
              description: "Detailed cuticle work for a closer, cleaner finish." },
            { name: "Russian Gel Manicure", price: 65, from: true }
          ]
        },
        {
          id: "nails-pedicure",
          title: "Pedicure",
          services: [
            { name: "Classic Pedicure", price: 40, from: false },
            { name: "Gel Pedicure", price: 55, from: false },
            { name: "Deluxe Pedicure", price: 65, from: false,
              description: "Adds exfoliation and an extended massage." },
            { name: "Russian / Detailed Pedicure", price: 60, from: true },
            { name: "Russian Gel Pedicure", price: 75, from: true }
          ]
        },
        {
          id: "nails-enhancements",
          title: "Enhancements",
          services: [
            { name: "Gel-X Full Set", price: 75, from: true },
            { name: "Hard Gel Full Set", price: 75, from: true },
            { name: "Hard Gel Fill", price: 60, from: true },
            { name: "Acrylic Full Set", price: 70, from: true },
            { name: "Acrylic Fill", price: 55, from: true },
            { name: "Dip Powder", price: 55, from: true }
          ]
        },
        {
          id: "nails-addons",
          title: "Add-Ons",
          services: [
            { name: "French Tips", price: 10, from: true },
            { name: "Chrome / Cat Eye", price: 15, from: true },
            { name: "Nail Art", price: 5, from: true, unit: "per nail" },
            { name: "Gel Removal With Service", price: 5, from: true },
            { name: "Gel Removal Without Service", price: 15, from: true },
            { name: "Extension Removal", price: 20, from: true },
            { name: "Nail Repair", price: 7, from: true }
          ]
        }
      ]
    },

    /* ==================================================================== */
    {
      id: "skin",
      order: 4,
      label: "Skin",
      page: "skin.html",
      image: "home-skin.png",
      badge: "badge-skin.png",
      tagline: "Facials and personalized skincare",
      intro:
        "Time set aside to refresh, hydrate, clarify and restore. Every " +
        "appointment opens with a short consultation so the treatment matches " +
        "how your skin feels that week.",
      bookingCategory: "skin",
      groups: [
        {
          id: "skin-facials",
          title: "Facials",
          services: [
            { name: "Express Facial", price: 75, from: false,
              description: "A short cleanse, exfoliation and hydration reset." },
            { name: "Signature Facial", price: 110, from: false, featured: true,
              description: "Our standard facial, adjusted to how your skin feels that day." },
            { name: "Deep Cleansing Facial", price: 125, from: false,
              description: "A longer cleanse for skin that feels congested." },
            { name: "Hydrating Facial", price: 125, from: false,
              description: "Layered hydration for skin that feels tight or dry." }
          ]
        },
        {
          id: "skin-targeted",
          title: "Targeted Treatments",
          services: [
            { name: "Brightening Facial", price: 135, from: false,
              description: "Focused on overall tone and radiance." },
            { name: "Anti-Aging Facial", price: 150, from: false,
              description: "Firming and smoothing focused, finished with massage." },
            { name: "Acne / Clarifying Facial", price: 135, from: false,
              description: "A gentle clarifying approach for breakout-prone skin." },
            { name: "Dermaplaning Facial", price: 150, from: false,
              description: "Surface exfoliation that also removes fine vellus hair." }
          ]
        },
        {
          id: "skin-custom",
          title: "Customized",
          services: [
            { name: "Premium Customized Facial", price: 175, from: true,
              description: "Built around your skin at consultation." }
          ]
        }
      ],
      /* Shown only on the Skin page, under the menu. */
      note:
        "Our skin services are cosmetic and relaxation focused. They are not " +
        "medical treatments and are not intended to diagnose or treat any " +
        "condition. Please tell your esthetician about any products, " +
        "medications or allergies before your appointment."
    }

  ]
};

/* Published for assets/js/services.js to read. Leave this line in place. */
window.glossServices = glossServices;
