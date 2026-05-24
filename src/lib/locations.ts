export type Amenity = { id: string; name: string; description: string };
export type Direction = { from: string; step: string };
export type Nearby = { name: string; kind: string; distance: string };

export type Location = {
  slug: string;
  facilityNumber: string; // "01" .. "03"
  accession: string; // e.g. AS·S-325
  name: string; // e.g. "45th Street"
  fullName: string; // e.g. "45th Street Facility"
  tagline: string; // headline lower line e.g. "Facility."
  tag: string; // chip under name in index e.g. "Climate Controlled · Now Open"
  status: string; // "Now Open" / "Operating"
  isNew?: boolean;
  address: {
    street: string;
    cityStateZip: string;
  };
  phone: string; // formatted
  phoneHref: string; // tel: link
  priceFrom: number; // $/mo starting
  hero: {
    image: string;
    imageAlt: string;
    plate: string; // e.g. "Plate II · 45th Street Facility"
    plateMeta: string;
  };
  thumbnail: string;
  thumbnailAlt: string;
  reservePitch: {
    heading: string; // e.g. "Claim a unit at 45th Street."
    body: string;
  };
  hours: {
    office: string;
    gate: string;
    note: string;
  };
  amenities: Amenity[];
  approach: {
    coordinates: string; // "36.31° N · Rogers, Arkansas"
    googleMapsHref: string;
    directions: Direction[];
  };
  why: {
    heading: string;
    body: string;
    nearby: Nearby[];
  };
  topline: string[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "nursery-road",
    facilityNumber: "01",
    accession: "AS·N-416",
    name: "Nursery Road",
    fullName: "Nursery Road Facility",
    tagline: "Facility.",
    tag: "Boat · RV · Vehicle",
    status: "Operating",
    address: {
      street: "416 E Nursery Rd",
      cityStateZip: "Rogers, Arkansas 72758",
    },
    phone: "(479) 323-3885",
    phoneHref: "tel:+14793233885",
    priceFrom: 18,
    hero: {
      image:
        "https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/img_7039_05102024130759809.jpg",
      imageAlt: "Nursery Road boat and RV storage",
      plate: "Plate I · Nursery Road Facility",
      plateMeta: "Boat & RV / Vehicle Storage",
    },
    thumbnail:
      "https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/img_7039_05102024130759809.jpg",
    thumbnailAlt: "Nursery Road boat and RV storage",
    reservePitch: {
      heading: "Claim a bay at <em>Nursery Road.</em>",
      body: "Reserve covered or enclosed parking for your boat, RV, or vehicle. Lock in tonight's honest rate, no obligation, no surprise spikes.",
    },
    hours: {
      office: "Mon–Fri 9:00 AM – 5:00 PM / Sat 9:00 AM – 2:00 PM",
      gate: "Open 24 Hours",
      note: "Round-the-clock access, every day of the year. Drop by during office hours to meet our on-site management.",
    },
    amenities: [
      {
        id: "01",
        name: "Enclosed Bays",
        description:
          "Fully enclosed bays with double-door access for your largest holdings.",
      },
      {
        id: "02",
        name: "Covered Parking",
        description:
          "Canopy-covered parking that shields paint and gel-coat from Arkansas sun.",
      },
      {
        id: "03",
        name: "Uncovered Parking",
        description:
          "Outdoor parking spaces at a budget-friendly monthly rate.",
      },
      {
        id: "04",
        name: "Pull-Through Aisles",
        description:
          "Wide aisles built for big rigs, no tight angles, no reversing through gates.",
      },
      {
        id: "05",
        name: "24-Hour Access",
        description:
          "Secure gate access any hour, any day, early launches and late returns covered.",
      },
      {
        id: "06",
        name: "Fenced Perimeter",
        description:
          "Fully fenced grounds with controlled gate entry and well-lit aisles.",
      },
      {
        id: "07",
        name: "24/7 Cameras",
        description:
          "Camera coverage across the entire facility, recording day and night.",
      },
      {
        id: "08",
        name: "On-Site Management",
        description:
          "Family-owned management that knows the regulars and answers the phone.",
      },
      {
        id: "09",
        name: "Boat & RV Sized",
        description:
          "Bays sized for everything from a bass boat to a Class A motorhome.",
      },
      {
        id: "10",
        name: "Vehicle Storage",
        description:
          "Cars, trucks, and trailers, short term or long term, indoor or out.",
      },
      {
        id: "11",
        name: "Online Bill Pay",
        description:
          "Manage and pay your account online from any device, anytime.",
      },
      {
        id: "12",
        name: "Long-Term Rates",
        description:
          "Honest, transparent rates that don't jump after the first few months.",
      },
    ],
    approach: {
      coordinates: "36.31° N · Rogers, Arkansas",
      googleMapsHref:
        "https://www.google.com/maps?q=416+E+Nursery+Rd+Rogers+AR+72758",
      directions: [
        {
          from: "From Bentonville",
          step: "Take I-49 South to Exit 86 (Pleasant Grove Rd). Head east, then south on S Dixieland Rd to E Nursery Rd. The facility is about 0.5 miles down on your right.",
        },
        {
          from: "From Pinnacle Hills",
          step: "Head east on Pauline Whitaker Pkwy, turn south on S Dixieland Rd, then east on E Nursery Rd, under 5 minutes from the Promenade.",
        },
        {
          from: "From Beaver Lake",
          step: "Take AR-12 W toward Rogers, continue onto W Walnut St, then south on S 2nd St to E Nursery Rd, about 20 minutes from Rocky Branch.",
        },
      ],
    },
    why: {
      heading: "Built for the weekend you've been <em>waiting for.</em>",
      body: "Our Nursery Road facility was purpose-built for the big holdings, extra-large enclosed bays, tall canopy parking, and pull-through aisles wide enough that the approach never costs you a thought. Minutes from I-49 and on the way to Beaver Lake.",
      nearby: [
        {
          name: "Beaver Lake",
          kind: "Recreation",
          distance: "~25 min",
        },
        {
          name: "Interstate 49",
          kind: "Highway Access",
          distance: "~4 min",
        },
        {
          name: "Pinnacle Hills Promenade",
          kind: "Shopping & Dining",
          distance: "~5 min",
        },
        {
          name: "Downtown Rogers",
          kind: "City Center",
          distance: "~7 min",
        },
      ],
    },
    topline: [
      "Facility 01 · Nursery Road",
      "Boat & RV Storage",
      "Enclosed Bays",
      "Pull-Through Aisles",
      "24/7 Gate Access",
      "Honest Pricing. No Surprise Spikes.",
    ],
  },
  {
    slug: "45th-street",
    facilityNumber: "02",
    accession: "AS·S-325",
    name: "45th Street",
    fullName: "45th Street Facility",
    tagline: "Facility.",
    tag: "Climate Controlled · Now Open",
    status: "Now Open",
    isNew: true,
    address: {
      street: "325 S. 45th Street",
      cityStateZip: "Rogers, Arkansas 72756",
    },
    phone: "(479) 333-9177",
    phoneHref: "tel:+14793339177",
    priceFrom: 25,
    hero: {
      image:
        "https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/dc_photography-13_08072025110246067.jpg",
      imageAlt: "Artifacts Self Storage 45th Street drone view",
      plate: "Plate II · 45th Street Facility",
      plateMeta: "Brand-New / Climate Controlled",
    },
    thumbnail:
      "https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/dc_photography-13_08072025110246067.jpg",
    thumbnailAlt: "45th Street storage facility drone view",
    reservePitch: {
      heading: "Claim a unit at <em>45th Street.</em>",
      body: "Browse live availability and lock in your space online. Reserve now, rent when you're ready, at the honest rate we quote, with no surprise spikes.",
    },
    hours: {
      office: "Sun – Sat / 9:00 AM – 5:00 PM",
      gate: "Open 24 Hours",
      note: "Round-the-clock access, every day of the year. Stop in during office hours to meet our on-site management, the people who'll actually answer when you call.",
    },
    amenities: [
      {
        id: "01",
        name: "Climate Controlled",
        description:
          "Temperature-managed units that protect against Arkansas heat and humidity.",
      },
      {
        id: "02",
        name: "24-Hour Access",
        description:
          "Secure gate access any hour, any day, your schedule, not ours.",
      },
      {
        id: "03",
        name: "Drive-Up Units",
        description:
          "Pull right to your door for fast, effortless loading and unloading.",
      },
      {
        id: "04",
        name: "Elevator Access",
        description:
          "Easy elevator service to upper-floor units for larger moves.",
      },
      {
        id: "05",
        name: "Security Cameras",
        description:
          "24/7 camera coverage across a well-lit, monitored facility.",
      },
      {
        id: "06",
        name: "Secure Units",
        description:
          "Individually secured spaces with controlled facility access.",
      },
      {
        id: "07",
        name: "Ground Floor",
        description:
          "Ground-level units available for the simplest possible access.",
      },
      {
        id: "08",
        name: "Interior Storage",
        description:
          "Fully enclosed interior units, sheltered from the elements.",
      },
      {
        id: "09",
        name: "Dollies & Handcarts",
        description:
          "Moving equipment on hand to make your move-in painless.",
      },
      {
        id: "10",
        name: "Boxes & Supplies",
        description:
          "Packing materials available on-site so you can pack as you go.",
      },
      {
        id: "11",
        name: "Truck Rental",
        description:
          "Moving truck rental available to handle the heavy haul.",
      },
      {
        id: "12",
        name: "Online Bill Pay",
        description:
          "Manage and pay your account online, anytime, in a few clicks.",
      },
    ],
    approach: {
      coordinates: "36.31° N · Rogers, Arkansas",
      googleMapsHref:
        "https://www.google.com/maps?q=325+S.+45th+Street+Rogers+AR+72756",
      directions: [
        {
          from: "From Bentonville",
          step: "Take I-49 South toward Fayetteville for roughly 8 miles. Exit 85 toward Rogers, merge onto W Walnut Street, then turn onto S. 45th Street, the facility is about 1.2 miles down on your left.",
        },
        {
          from: "From Springdale",
          step: "Head north on US-71B, merge onto I-49 North for about 10 miles, take Exit 85, then follow W Walnut Street east to S. 45th Street.",
        },
        {
          from: "From Fayetteville",
          step: "Take I-49 North toward Rogers for roughly 20 miles, exit at 85, and continue via W Walnut Street to S. 45th Street.",
        },
      ],
    },
    why: {
      heading: "Right in the heart of <em>Rogers.</em>",
      body: "Our 45th Street facility is brand-new and built for the way Northwest Arkansas actually moves, minutes from I-49 and easy to reach from downtown Rogers, Bentonville, and Fayetteville alike. Swing by on your way to shop, work, or the lake.",
      nearby: [
        {
          name: "Pinnacle Hills Promenade",
          kind: "Shopping & Dining",
          distance: "~6 min",
        },
        {
          name: "Mercy Hospital NWA",
          kind: "Medical Campus",
          distance: "~7 min",
        },
        {
          name: "Interstate 49",
          kind: "Highway Access",
          distance: "~4 min",
        },
        {
          name: "Beaver Lake",
          kind: "Recreation",
          distance: "~15 min",
        },
      ],
    },
    topline: [
      "Facility 02 · 45th Street",
      "Now Open",
      "Climate Controlled",
      "Drive-Up Access",
      "24/7 Gate Access",
      "Honest Pricing. No Surprise Spikes.",
    ],
  },
  {
    slug: "1st-street",
    facilityNumber: "03",
    accession: "AS·S-1911",
    name: "1st Street",
    fullName: "1st Street Facility",
    tagline: "Facility.",
    tag: "Drive-Up · Ground Floor",
    status: "Operating",
    address: {
      street: "1911 S 1st Street",
      cityStateZip: "Rogers, Arkansas 72758",
    },
    phone: "(479) 662-0711",
    phoneHref: "tel:+14796620711",
    priceFrom: 19,
    hero: {
      image:
        "https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/f4a50e95-c09c-477d-9347-7e7a9756e072_12082023104757271.jpeg",
      imageAlt: "1st Street drive-up storage facility",
      plate: "Plate III · 1st Street Facility",
      plateMeta: "Drive-Up / Ground-Floor Storage",
    },
    thumbnail:
      "https://uploads.website.storedge.com/7957be7a-7d25-4f0d-ad22-40229ca92b95/f4a50e95-c09c-477d-9347-7e7a9756e072_12082023104757271.jpeg",
    thumbnailAlt: "1st Street drive-up storage",
    reservePitch: {
      heading: "Claim a unit at <em>1st Street.</em>",
      body: "Drive-up, ground-floor units sized for everything from a closet of seasonal items to a full household move. Reserve online and move in today.",
    },
    hours: {
      office: "Mon–Fri 9:00 AM – 5:00 PM / Sat 9:00 AM – 2:00 PM",
      gate: "Open 24 Hours",
      note: "Round-the-clock access, every day of the year. Stop by during office hours to meet our on-site management.",
    },
    amenities: [
      {
        id: "01",
        name: "Drive-Up Units",
        description:
          "Pull right to your door for fast, effortless loading and unloading.",
      },
      {
        id: "02",
        name: "Ground Floor",
        description:
          "All ground-level units, no elevators, no stairs, no second-floor scramble.",
      },
      {
        id: "03",
        name: "24-Hour Access",
        description:
          "Secure gate access any hour, any day, early mornings, late nights, weekends.",
      },
      {
        id: "04",
        name: "Security Cameras",
        description:
          "24/7 camera coverage across a well-lit, monitored facility.",
      },
      {
        id: "05",
        name: "Secure Units",
        description:
          "Individually secured spaces with controlled facility access.",
      },
      {
        id: "06",
        name: "Wide Aisles",
        description:
          "Aisles wide enough for trucks and trailers to load straight from the door.",
      },
      {
        id: "07",
        name: "Vehicle Storage",
        description:
          "Storage for cars, trucks, and smaller trailers on-site.",
      },
      {
        id: "08",
        name: "Boxes & Supplies",
        description:
          "Packing materials available so you can pack as you go.",
      },
      {
        id: "09",
        name: "Online Bill Pay",
        description:
          "Manage and pay your account online from any device, anytime.",
      },
      {
        id: "10",
        name: "On-Site Management",
        description:
          "Family-owned management, the kind that answers the phone.",
      },
      {
        id: "11",
        name: "Honest Pricing",
        description:
          "The rate we quote is the rate you pay. No teaser specials, no rate spikes.",
      },
      {
        id: "12",
        name: "Long-Term Rates",
        description:
          "Transparent monthly pricing for whatever length you need to stay.",
      },
    ],
    approach: {
      coordinates: "36.31° N · Rogers, Arkansas",
      googleMapsHref:
        "https://www.google.com/maps?q=1911+S+1st+Street+Rogers+AR+72758",
      directions: [
        {
          from: "From Bentonville",
          step: "Take I-49 South to Exit 85 (W Walnut Street). Head east, then south on S 8th St to W Cherry St. Turn east, then south on S 1st St, the facility is about a mile down on the right.",
        },
        {
          from: "From Downtown Rogers",
          step: "Head south on N 2nd St, continue onto S 2nd St, then west on W Cherry St and south on S 1st St. About 5 minutes total.",
        },
        {
          from: "From Lowell / Springdale",
          step: "Take I-49 North to Exit 83 (Pleasant Grove Rd), head east, then north on S 1st Street, the facility is about a mile up on your left.",
        },
      ],
    },
    why: {
      heading: "Simple, fast, and close to <em>everything.</em>",
      body: "Our 1st Street facility keeps things simple: drive-up doors, all ground floor, sized for everything from seasonal storage to a full household move. Close to downtown Rogers, the highway, and the shops along Walnut Street.",
      nearby: [
        {
          name: "Downtown Rogers",
          kind: "City Center",
          distance: "~5 min",
        },
        {
          name: "Interstate 49",
          kind: "Highway Access",
          distance: "~5 min",
        },
        {
          name: "Walnut Street Shops",
          kind: "Shopping",
          distance: "~3 min",
        },
        {
          name: "Mercy Hospital NWA",
          kind: "Medical Campus",
          distance: "~9 min",
        },
      ],
    },
    topline: [
      "Facility 03 · 1st Street",
      "Drive-Up Units",
      "Ground-Floor Access",
      "24/7 Gate Access",
      "Family Owned & Operated",
      "Honest Pricing. No Surprise Spikes.",
    ],
  },
];

export function findLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
