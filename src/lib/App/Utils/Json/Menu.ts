import { Menu } from '@/lib/Domain/Entity'

export const menu: Array<Menu> = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image:
      'https://img.freepik.com/free-photo/authentic-italian-pasta_24972-2334.jpg?w=1060&t=st=1695260902~exp=1695261502~hmac=648e941ed4113c74f9ff232bc99fa0dbc9af4fc05177516e80cd7b2fa00b4c12',
    type: 'Main Course',
    description: 'Delicious creamy pasta with pancetta and eggs.',
    rate: 4,
  },
  {
    id: 2,
    name: 'Tiramisu',
    image:
      'https://img.freepik.com/free-photo/layered-chocolate-tiramisu-cake-with-mascarpone-cream-generated-by-ai_188544-18033.jpg?t=st=1695260938~exp=1695264538~hmac=894f0da8529c0dc982048567fe5395f2c6c9a6aa1bf21d1cf668d205af4e603d&w=1380',
    type: 'Dessert',
    description:
      'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.',
    rate: 4,
  },
  {
    id: 3,
    name: 'Margarita Pizza',
    image:
      'https://img.freepik.com/free-photo/close-up-delicious-pizza_23-2150702803.jpg?t=st=1695260971~exp=1695264571~hmac=7c18834f74734349258b102dc409b347572092cba91fd246e8b2df625c36583c&w=360',
    type: 'Main Course',
    description: 'Thin-crust pizza topped with tomato sauce, fresh mozzarella, and basil leaves.',
    rate: 3,
  },
  {
    id: 4,
    name: 'Chocolate Milkshake',
    image:
      'https://img.freepik.com/free-photo/front-view-chocolate-dessert-glass-with-straw_23-2148603311.jpg?w=360&t=st=1695261027~exp=1695261627~hmac=2fb436de8daf37a93db98ed4994f5eb20b6eee191bd2b0a8aa245a8b558f8a9f',
    type: 'Beverage',
    description: 'Rich and creamy chocolate milkshake topped with whipped cream.',
    rate: 4,
  },
  {
    id: 5,
    name: 'Bruschetta',
    image:
      'https://img.freepik.com/free-photo/tasty-bruschetta-with-tomatoes-basil_1220-7130.jpg?w=1060&t=st=1695261055~exp=1695261655~hmac=87f4131596b0ae974ae70c67e131072c102c8ac4c9455e7de00c6f0e2fd858e1',
    type: 'Appetizer',
    description: 'Toasted bread topped with diced tomatoes, garlic, basil, and olive oil.',
    rate: 5,
  },
  {
    id: 6,
    name: 'Chicken Alfredo',
    image:
      'https://img.freepik.com/free-photo/side-view-pasta-with-sauce-parmesan-mushrooms-lettuce_176474-2504.jpg?w=740&t=st=1695261078~exp=1695261678~hmac=6541d1678468b9a97fad41d19c49bcf50fc2b9e0d10ee8193f7dc03887c74c1c',
    type: 'Main Course',
    description: 'Creamy pasta with tender chicken, parmesan cheese, and Alfredo sauce.',
    rate: 5,
  },
]
