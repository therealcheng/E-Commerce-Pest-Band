// lib/dataHelpers.js
import data from './data';

const products = data.products;

export function getAllProductSlugs() {
  return products.map((product) => product.slug);
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}