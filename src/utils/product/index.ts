export const getPriceBeforeDiscount = (price: number, discount: number) => {
  return price + (price * discount) / 100
}

export const formatPrice = (price: number) => {
  return price.toLocaleString('en-EN', {
    style: 'currency',
    currency: 'USD',
  })
}

export const formatRating = (rating: number) => {
  return rating.toFixed(1)
}
