export type UnitFit = {
  id: string;
  name: string;
  description: string;
};

export type StorageUnit = {
  id: string;
  accession: string;
  name: string;
  width: number; // feet
  depth: number; // feet
  tag: string;
  comparable: string;
  price: number; // $/month — PLACEHOLDER until confirmed against Storedge
  figure: string;
  fits: UnitFit[];
};

export const UNITS: StorageUnit[] = [
  {
    id: "0505",
    accession: "AS·U-0505",
    name: "The Locker",
    width: 5,
    depth: 5,
    tag: "Climate Controlled",
    comparable: "A large closet",
    price: 35,
    figure: "▮ closet",
    fits: [
      {
        id: "01",
        name: "Seasonal Items",
        description: "Holiday décor, winter coats, a few totes.",
      },
      {
        id: "02",
        name: "Small Furniture",
        description: "A chair or two, boxed books, lamps.",
      },
      {
        id: "03",
        name: "Business Records",
        description: "Document archives and file boxes.",
      },
      {
        id: "04",
        name: "Sports Gear",
        description: "Golf clubs, skis, camping equipment.",
      },
    ],
  },
  {
    id: "0510",
    accession: "AS·U-0510",
    name: "The Half-Room",
    width: 5,
    depth: 10,
    tag: "Climate Controlled · Drive-Up",
    comparable: "A walk-in closet",
    price: 55,
    figure: "▮ ½ room",
    fits: [
      {
        id: "01",
        name: "Studio Apartment",
        description: "Mattress set, dresser, and boxes.",
      },
      {
        id: "02",
        name: "Dorm Storage",
        description: "A full dorm room between semesters.",
      },
      {
        id: "03",
        name: "Appliances",
        description: "Fridge or washer plus surrounding boxes.",
      },
      {
        id: "04",
        name: "Motorcycle",
        description: "A bike with room left for gear.",
      },
    ],
  },
  {
    id: "1010",
    accession: "AS·U-1010",
    name: "The Standard",
    width: 10,
    depth: 10,
    tag: "Climate Controlled · Drive-Up",
    comparable: "A standard bedroom",
    price: 95,
    figure: "▮ ~1 room",
    fits: [
      {
        id: "01",
        name: "One-Bedroom Home",
        description: "Full furnishings of a 1-BR apartment.",
      },
      {
        id: "02",
        name: "Major Appliances",
        description: "Multiple appliances plus furniture.",
      },
      {
        id: "03",
        name: "Office Relocation",
        description: "Desks, chairs, and filing for a small office.",
      },
      {
        id: "04",
        name: "Renovation Overflow",
        description: "A whole room cleared during a remodel.",
      },
    ],
  },
  {
    id: "1015",
    accession: "AS·U-1015",
    name: "The Two-Room",
    width: 10,
    depth: 15,
    tag: "Climate Controlled · Drive-Up",
    comparable: "A two-bedroom home",
    price: 130,
    figure: "▮▮ ~2 rooms",
    fits: [
      {
        id: "01",
        name: "Two-Bedroom Home",
        description: "Furnishings of a 2-BR house with appliances.",
      },
      {
        id: "02",
        name: "Full Move",
        description: "A complete household between addresses.",
      },
      {
        id: "03",
        name: "Business Inventory",
        description: "Stock, displays, and seasonal merchandise.",
      },
      {
        id: "04",
        name: "Vehicle + Goods",
        description: "A compact car with boxes alongside.",
      },
    ],
  },
  {
    id: "1020",
    accession: "AS·U-1020",
    name: "The Household",
    width: 10,
    depth: 20,
    tag: "Drive-Up · Ground Floor",
    comparable: "A one-car garage",
    price: 165,
    figure: "▮▮▮ 3–4 rooms",
    fits: [
      {
        id: "01",
        name: "Three-Bedroom Home",
        description: "A full 3-BR household, appliances included.",
      },
      {
        id: "02",
        name: "Vehicle Storage",
        description: "A car, truck, or small boat under cover.",
      },
      {
        id: "03",
        name: "Contractor Equipment",
        description: "Tools, materials, and job-site gear.",
      },
      {
        id: "04",
        name: "Long-Term Move",
        description: "An entire home held during deployment or travel.",
      },
    ],
  },
  {
    id: "1030",
    accession: "AS·U-1030",
    name: "The Estate",
    width: 10,
    depth: 30,
    tag: "Drive-Up · Boat & RV",
    comparable: "A large garage",
    price: 240,
    figure: "▮▮▮▮ 4–5 rooms",
    fits: [
      {
        id: "01",
        name: "Large Household",
        description: "A 4–5 bedroom home with full furnishings.",
      },
      {
        id: "02",
        name: "RV or Boat",
        description: "Enclosed storage for a recreational vehicle.",
      },
      {
        id: "03",
        name: "Commercial Storage",
        description: "Bulk inventory or equipment for a business.",
      },
      {
        id: "04",
        name: "Multiple Vehicles",
        description: "Two vehicles, or one with workspace around it.",
      },
    ],
  },
];

export const DEFAULT_UNIT_INDEX = 2;
