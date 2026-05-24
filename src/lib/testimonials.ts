export type Testimonial = {
  id: string;
  date: string;
  quote: string;
  author: string;
  stars: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "AS·R-01",
    date: "05 / 2025",
    quote:
      "We needed a place for our RV on Memorial Day. Melissa returned my call right away, let us view the property, and got us stored that same day.",
    author: "Steve",
    stars: 5,
  },
  {
    id: "AS·R-02",
    date: "01 / 2025",
    quote:
      "Super clean, secure facility. Management is really helpful and super friendly. I referred a friend and she got a unit as well.",
    author: "Jason",
    stars: 5,
  },
  {
    id: "AS·R-03",
    date: "07 / 2024",
    quote:
      "After the tornado destroyed our building, Melissa stepped up and gave our business a space to keep going. Clean and so accommodating.",
    author: "Tracy J.",
    stars: 5,
  },
];
