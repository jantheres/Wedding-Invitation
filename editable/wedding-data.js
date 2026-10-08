/**
 * wedding-data.js — Customer-facing editable data layer for rajwada-royale
 * Edit this file to update couple names, parents, dates, love story, events, venue, gallery, contacts, and media.
 */

window.WEDDING_DATA = {
  ogMeta: {
    title: "Rupali & Rohan — Wedding Invitation",
    description: "You are cordially invited to celebrate the auspicious wedding ceremony of Rupali & Rohan on Friday, 11 December 2026 in Lucknow.",
    image: "./editable/assets/couple.png",
  },

  couple: {
    groom: "Rohan",
    bride: "Rupali",
    monogram: "R ♡ R",
    hashtag: "#RupaliWedsRohan",
  },

  mainEvent: {
    title: "Rupali & Rohan — Wedding Ceremony",
    startsAt: "2026-12-11T19:00:00+05:30",
    durationMinutes: 240,
    dateLabel: "Friday, 11 December 2026",
    timeLabel: "07:00 PM onwards",
  },

  families: {
    groomSide: {
      parents: "Mr. Rakesh Bali & Mrs. Anita Bali",
      line: "Son of Rakesh Bali & Anita Bali",
    },
    brideSide: {
      parents: "Mr. Hemender Sharma & Dr. Prerna Sharma",
      line: "Daughter of Hemender Sharma & Dr. Prerna Sharma",
    },
  },

  invitationNote: "ॐ श्री गणेशाय नमः\n\n॥ शुभ विवाह ॥\n\nWith the blessings of our beloved elders Dr. G. D. Sharma (Babaji) & Prem Lata Tejpal (Nani), along with the blessings of our Paternal & Maternal Families, joyfully invite you to celebrate the auspicious union of Rupali & Rohan as they embark upon their beautiful journey of love, companionship and togetherness.",

  story: [
    {
      year: "2022",
      title: "First Meeting",
      text: "A beautiful introduction that marked the start of a lifetime of togetherness.",
      image: "./editable/assets/story-1.jpg",
    },
    {
      year: "2025",
      title: "Roka & Blessings",
      text: "Two families coming together with love, laughter, and endless blessings.",
      image: "./editable/assets/story-2.jpg",
    },
    {
      year: "2026",
      title: "The Auspicious Union",
      text: "Embarking upon their beautiful journey of love, companionship and togetherness.",
      image: "./editable/assets/story-3.jpg",
    },
  ],

  events: [
    {
      key: "shagun",
      name: "Shagun",
      startsAt: "2026-12-10T18:00:00+05:30",
      durationMinutes: 180,
      venue: "Holiday Inn Lucknow",
      address: "Transport Nagar, Kanpur Road, Lucknow, Uttar Pradesh",
      dressCode: "Traditional Festive",
      dressCodeColor: "#C9A84C",
      note: "Join us for evening celebrations starting at 6:00 PM.",
    },
    {
      key: "wedding",
      name: "Shaadi (Wedding)",
      startsAt: "2026-12-11T19:00:00+05:30",
      durationMinutes: 240,
      venue: "Holiday Inn Lucknow",
      address: "Transport Nagar, Kanpur Road, Lucknow, Uttar Pradesh",
      dressCode: "Royal Traditional / Formals",
      dressCodeColor: "#9B111E",
      note: "Baraat & Wedding Ceremony starting at 7:00 PM.",
    },
  ],

  venue: {
    name: "Holiday Inn Lucknow",
    address: "Transport Nagar, Kanpur Road, Lucknow, Uttar Pradesh 226012",
    lat: 26.7788,
    lng: 80.8875,
    directionsNote: "Conveniently located on Kanpur Road near Transport Nagar Metro Station. Valet parking available at venue entrance.",
  },

  gallery: [
    { src: "./editable/assets/gallery-1.jpg", alt: "Pre-wedding celebrations and festive moments" },
    { src: "./editable/assets/gallery-2.jpg", alt: "Sangeet & Shagun evening festivities" },
    { src: "./editable/assets/gallery-3.jpg", alt: "Decorated royal wedding venue setup" },
    { src: "./editable/assets/gallery-4.jpg", alt: "Baraat and traditional ceremony preparations" },
  ],

  closing: {
    blessing: "With the warmth and blessings of the entire Bali • Sharma • Tejpal Family • Satsangi family",
    signOff: "With love and blessings from Rahul Bali, Deepankar D Sharma & Jain Serrao",
  },

  contacts: [
    { name: "Rahul Bali (Groom's Family)", phone: "+919876543210" },
    { name: "Deepankar D Sharma (Bride's Family)", phone: "+919812345678" },
  ],

  media: {
    doorPanel: "./editable/assets/door-panel.png",
    couple: "./editable/assets/couple.png",
    floralCorner: "./editable/assets/floral-corner.png",
    garland: "./editable/assets/garland.png",
    lantern: "./editable/assets/lantern.png",
    footerFloral: "./editable/assets/footer-floral.jpg",
    ambientAudio: "./editable/assets/ambient-shehnai.mp3",
  },
};

