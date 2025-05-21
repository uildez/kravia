export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    { name: 'title', type: 'string', title: 'Título' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'body', type: 'array', title: 'Conteúdo', of: [{ type: 'block' }] },
    {
      name: 'imagem',
      type: 'image',
      title: 'Imagem da Postagem',
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
    },
    {
      name: 'seoTitle',
      type: 'string',
      title: 'Título SEO',
      description: 'Título para aparecer nos mecanismos de busca'
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'Descrição SEO',
      description: 'Descrição curta para Google e redes sociais'
    },
    {
      name: 'seoKeywords',
      type: 'array',
      title: 'TAGS Palavras-chave',
      of: [{ type: 'string' }],
      description: 'Palavras-chave relacionadas ao post'
    }
  ],
}
