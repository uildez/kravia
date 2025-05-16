import imageUrlBuilder from '@sanity/image-url'
import { sanity } from './api'

const builder = imageUrlBuilder(sanity)

export function urlFor(source) {
  return builder.image(source)
}
