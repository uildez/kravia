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
    },
    { name: 'versao', type: 'string', title: 'Versão' },
    { name: 'linguagem', type: 'string', title: 'Linguagem' },
    { name: 'preRequisitos', type: 'array', title: 'Pré-requisitos', of: [{ type: 'block' }] },
    { name: 'indicadoPara', type: 'array', title: 'Indicado para', of: [{ type: 'block' }] },
    { name: 'conteudo', type: 'array', title: 'Conteúdo', of: [{ type: 'block' }] },
    {
      name: 'calendario',
      type: 'array',
      title: 'Calendário',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'data',
              type: 'date',
              title: 'Data'
            },
            {
              name: 'localizacao',
              type: 'string',
              title: 'Localização'
            },
            {
              name: 'cargaHoraria',
              type: 'string',
              title: 'Carga Horária'
            },
            {
              name: 'investimento',
              type: 'string',
              title: 'Investimento'
            }
          ]
        }
      ]
    }
  ]
}
