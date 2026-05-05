export const mockCategories = [
  {
    uuid: "1a2b3c4d-0001",
    title: "Корпусная мебель",
    main_media_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
  },
  {
    uuid: "1a2b3c4d-0002",
    title: "Столы",
    main_media_url: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800",
  },
  {
    uuid: "1a2b3c4d-0003",
    title: "Кухни",
    main_media_url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
  },
  {
    uuid: "1a2b3c4d-0004",
    title: "Декор",
    main_media_url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800",
  },
];

export const mockCategoryDetails = {
  "1a2b3c4d-0001": {
    uuid: "1a2b3c4d-0001",
    title: "The Cabinetry Collection",
    paragraph: "Корпусная мебель",
    description:
      'Our "Cabinet Furniture" category encompasses a wide range of storage solutions designed for the modern home and office. We focus on monolithic forms, matte finishes, and tactile materials. From floating consoles to floor-to-ceiling wardrobes, every piece is designed to hide clutter while standing out as a piece of art.',
    first_media_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    second_media_url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600",
    marks: [
      { image: "", title: "Wardrobes", subtitle: "Modular systems." },
      { image: "", title: "Consoles", subtitle: "Media & entry units." },
      { image: "", title: "Shelving", subtitle: "Open & closed display." },
      { image: "", title: "Side Tables", subtitle: "Compact storage." },
    ],
    items: [
      { uuid: "p-001", title: "Книжный шкаф", main_media_url: "", subtitle: "Дуб сонома", price: "300" },
      { uuid: "p-002", title: "Шкаф-купе", main_media_url: "", subtitle: "Венге", price: "450" },
      { uuid: "p-003", title: "Тумба под ТВ", main_media_url: "", subtitle: "Белый матовый", price: "180" },
      { uuid: "p-004", title: "Комод", main_media_url: "", subtitle: "Дуб натуральный", price: "220" },
      { uuid: "p-005", title: "Полка настенная", main_media_url: "", subtitle: "Сосна", price: "90" },
      { uuid: "p-006", title: "Стеллаж", main_media_url: "", subtitle: "Металл + дерево", price: "310" },
    ],
  },
  "1a2b3c4d-0002": {
    uuid: "1a2b3c4d-0002",
    title: "The Table Collection",
    paragraph: "Столы",
    description:
      "Our table collection combines functionality with timeless aesthetics. Whether you need a dining centerpiece or a compact workspace, every table is crafted with precision and quality materials.",
    first_media_url: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600",
    second_media_url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600",
    marks: [
      { image: "", title: "Dining", subtitle: "For 4–12 persons." },
      { image: "", title: "Desk", subtitle: "Ergonomic workspace." },
      { image: "", title: "Coffee", subtitle: "Living room accent." },
      { image: "", title: "Console", subtitle: "Hallway statement." },
    ],
    items: [
      { uuid: "p-101", title: "Обеденный стол", main_media_url: "", subtitle: "Дуб + металл", price: "520" },
      { uuid: "p-102", title: "Рабочий стол", main_media_url: "", subtitle: "ЛДСП белый", price: "280" },
      { uuid: "p-103", title: "Журнальный стол", main_media_url: "", subtitle: "Стекло + хром", price: "190" },
    ],
  },
  "1a2b3c4d-0003": {
    uuid: "1a2b3c4d-0003",
    title: "The Kitchen Collection",
    paragraph: "Кухни",
    description:
      "Custom kitchens built for real life. From minimalist handleless facades to rich wood-tone cabinetry, our kitchen solutions are designed around your space and daily rituals.",
    first_media_url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    second_media_url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600",
    marks: [
      { image: "", title: "Facades", subtitle: "Matt & gloss finishes." },
      { image: "", title: "Islands", subtitle: "Open layout focus." },
      { image: "", title: "Storage", subtitle: "Smart solutions." },
      { image: "", title: "Worktops", subtitle: "Stone & composite." },
    ],
    items: [
      { uuid: "p-201", title: "Кухня Loft", main_media_url: "", subtitle: "Бетон + дерево", price: "1200" },
      { uuid: "p-202", title: "Кухня Minimal", main_media_url: "", subtitle: "Белый матовый", price: "980" },
    ],
  },
  "1a2b3c4d-0004": {
    uuid: "1a2b3c4d-0004",
    title: "The Decor Collection",
    paragraph: "Декор",
    description:
      "Finishing touches that define a space. Our decor range spans sculptural objects, curated textiles, and bespoke lighting — each piece selected to complement our furniture collections.",
    first_media_url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600",
    second_media_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    marks: [
      { image: "", title: "Objects", subtitle: "Sculptural accents." },
      { image: "", title: "Textiles", subtitle: "Throws & cushions." },
      { image: "", title: "Lighting", subtitle: "Ambient & task." },
      { image: "", title: "Greenery", subtitle: "Living elements." },
    ],
    items: [],
  },
};

export const mockItemDetails = {
  "p-001": {
    uuid: "p-001",
    title: "The Obsidian Archive",
    paragraph: "Книжный шкаф",
    description:
      "Мастер-класс по игре теней и форм. Изготовлено из обожженного дуба с модульными полками, которые адаптируются к вашей коллекции. Оснащено скрытыми отделениями и механизмами плавного закрывания.",
    price: "1 299",
    media_urls: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
    ],
    description_marks: [
      { title: "Высота", subtitle: "220 cm" },
      { title: "Ширина", subtitle: "140 cm" },
      { title: "Материал", subtitle: "Charred Oak" },
    ],
    marks: [
      {
        image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3"/></svg>`,
        title: "Sustainable Sourcing",
        subtitle: "100% FSC-certified oak from responsibly managed forests.",
      },
      {
        image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`,
        title: "Modular Assembly",
        subtitle: "Tool-free interlocking system for easy setup and expansion.",
      },
      {
        image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
        title: "White Glove Delivery",
        subtitle: "Includes in-room placement and packaging removal.",
      },
    ],
  },
  "p-002": {
    uuid: "p-002",
    title: "The Shadow Wardrobe",
    paragraph: "Шкаф-купе",
    description:
      "Минималистичный шкаф-купе с матовыми фасадами и скрытыми ручками. Система плавного хода дверей и внутренняя подсветка создают ощущение роскоши.",
    price: "450",
    media_urls: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    ],
    description_marks: [
      { title: "Высота", subtitle: "240 cm" },
      { title: "Ширина", subtitle: "200 cm" },
      { title: "Материал", subtitle: "Венге" },
    ],
    marks: [],
  },
  "p-003": {
    uuid: "p-003",
    title: "Тумба под ТВ Loft",
    paragraph: "Тумба под ТВ",
    description:
      "Лаконичная тумба с открытыми полками и закрытыми секциями. Идеально вписывается в современный интерьер.",
    price: "180",
    media_urls: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    ],
    description_marks: [
      { title: "Высота", subtitle: "50 cm" },
      { title: "Ширина", subtitle: "160 cm" },
      { title: "Материал", subtitle: "Белый матовый" },
    ],
    marks: [
      {
        image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/></svg>`,
        title: "Кабельный канал",
        subtitle: "Скрытая прокладка проводов.",
      },
    ],
  },
  "p-101": {
    uuid: "p-101",
    title: "The Oak Dining Table",
    paragraph: "Обеденный стол",
    description:
      "Массивный обеденный стол из натурального дуба. Металлические ножки придают индустриальный шарм, дубовая столешница — теплоту натурального дерева.",
    price: "520",
    media_urls: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800",
    ],
    description_marks: [
      { title: "Длина", subtitle: "220 cm" },
      { title: "Ширина", subtitle: "90 cm" },
      { title: "Материал", subtitle: "Дуб + металл" },
    ],
    marks: [],
  },
  "p-201": {
    uuid: "p-201",
    title: "Кухня Loft",
    paragraph: "Кухня",
    description:
      "Кухня в стиле лофт с бетонными фасадами и деревянными элементами. Открытые полки и стальные профили создают индустриальный характер.",
    price: "1 200",
    media_urls: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800",
    ],
    description_marks: [
      { title: "Стиль", subtitle: "Loft" },
      { title: "Фасады", subtitle: "Бетон" },
      { title: "Столешница", subtitle: "Дерево" },
    ],
    marks: [],
  },
};