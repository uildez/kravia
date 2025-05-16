export default {
  name: 'empresa',
  type: 'document',
  title: 'Empresa',
  fields: [
    { name: 'nome', type: 'string', title: 'Nome da Empresa' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'nome' } }
  ]
}
