export const typeColorMapper = (type: string) => {
  let color = 'bg-green-600'
  switch (type) {
    case 'Dessert':
      color = 'bg-yellow-600'
      break
    case 'Appetizer':
      color = 'bg-violet-600'
      break
    case 'Beverage':
      color = 'bg-blue-600'
      break
    default:
      break
  }
  return color
}
