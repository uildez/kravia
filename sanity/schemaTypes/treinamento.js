export default {
  name: 'treinamento',
  type: 'document',
  title: 'Treinamento',
  fields: [
    { name: 'title', type: 'string', title: 'Nome do Treinamento' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'descricao', type: 'text', title: 'Descrição' },
    { name: 'empresa', type: 'reference', to: [{ type: 'empresa' }] },
    {
      name: 'imagem',
      type: 'image',
      title: 'Imagem do Treinamento',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Importante para SEO e acessibilidade'
        }
      ]
    }
  ]
}
