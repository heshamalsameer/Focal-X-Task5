import card1 from "./assets/most trending/card1.png";
import card2 from "./assets/most trending/card2.png";
import card3 from "./assets/most trending/card3.png";
import card4 from "./assets/most trending/card4.png";
import card5 from "./assets/most trending/card5.png";
import card6 from "./assets/most trending/card6.png";
import image1 from "./assets/Image1.jpg";
import card02 from "./assets/Card02.png";
import card03 from "./assets/Card03.png";

// Sample listings — replace with real data from your API.
export const listings = [
  { id: 1, img: card1, title: "Poolside Modern Villa", type: "Villa", category: "Residential", city: "California", address: "1901 Thornridge Cir. Shiloh, Hawaii 81063", price: 1250000, beds: 5, baths: 4, area: 420, year: 2021, tag: "New" },
  { id: 2, img: card2, title: "Sage Loft Apartment", type: "Apartment", category: "Residential", city: "Austin", address: "4140 Parker Rd. Allentown, New Mexico 31134", price: 300000, beds: 2, baths: 1, area: 96, year: 2019, tag: "Hot" },
  { id: 3, img: card3, title: "Arched Window Residence", type: "House", category: "Residential", city: "Chicago", address: "2715 Ash Dr. San Jose, South Dakota 83475", price: 685000, beds: 4, baths: 3, area: 210, year: 2016 },
  { id: 4, img: card4, title: "Nordic Kitchen Studio", type: "Apartment", category: "Commercial", city: "Seattle", address: "8502 Preston Rd. Inglewood, Maine 98380", price: 245000, beds: 1, baths: 1, area: 64, year: 2022, tag: "New" },
  { id: 5, img: card5, title: "Terracotta Living Condo", type: "Condo", category: "Commercial", city: "Miami", address: "3517 W. Gray St. Utica, Pennsylvania 57867", price: 410000, beds: 3, baths: 2, area: 128, year: 2020 },
  { id: 6, img: card6, title: "Bright Corner Apartment", type: "Apartment", category: "Industrial", city: "New York", address: "2464 Royal Ln. Mesa, New Jersey 45463", price: 520000, beds: 2, baths: 2, area: 110, year: 2018, tag: "Hot" },
  { id: 7, img: image1, title: "Autumn Cottage", type: "House", category: "Agriculture", city: "Vermont", address: "6391 Elgin St. Celina, Delaware 10299", price: 365000, beds: 3, baths: 2, area: 150, year: 1998 },
  { id: 8, img: card02, title: "Cedar Family Home", type: "House", category: "Agriculture", city: "Oregon", address: "3891 Ranchview Dr. Richardson, California 62639", price: 590000, beds: 4, baths: 3, area: 240, year: 2012 },
  { id: 9, img: card03, title: "Olive Ranch House", type: "House", category: "Industrial", city: "Texas", address: "1901 Thornridge Cir. Shiloh, Hawaii 81063", price: 445000, beds: 3, baths: 2, area: 185, year: 2010 },
];

export const categories = ["Residential", "Commercial", "Agriculture", "Industrial"];

export const formatPrice = (n) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
