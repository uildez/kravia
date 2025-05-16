import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'kxz751ml',
  dataset: 'production',
  useCdn: false, // usa a API principal, não cache
  apiVersion: '2024-05-01',
})

export async function getTrainings() {
  return sanity.fetch(`*[_type == "training"]`)
}

export const getCompanies = async () => {
  const query = `*[_type == "empresa"]{ _id, nome }`
  return await sanity.fetch(query)
}

export const getCoursesByCompany = async (companyId) => {
  const query = `*[_type == "treinamento" && empresa._ref == $companyId]{ _id, title, slug }`
  return await sanity.fetch(query, { companyId })
}

export const getAllPosts = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    slug,
    imagem {
      asset->{
        url
      },
      alt
    }
  }`;
  return await sanity.fetch(query);
};