import Image from 'next/image';
import { sanity } from '../../../sanity/api'
import { urlFor } from '../../../sanity/image'

export default async function CursoPage({ params }) {
  const { slug } = params; 

  const treinamento = await sanity.fetch(
    `*[_type == "treinamento" && slug.current == $slug][0]{..., empresa->, imagem}`,
    { slug }
  );

  if (!treinamento) return <p>Treinamento não encontrado.</p>;

  return (
    <div>
      <Image
        src={urlFor(treinamento.imagem).width(1200).url()}
        width={1200}
        height={1200}
        className="min-w-full h-[40vh] object-cover object-center bg-purple-light"
        alt={treinamento.imagem.alt || 'Imagem do treinamento'}
      />
      <div className='flex flex-col w-full mt-12 px-8 lg:px-20 2xl:px-40 min-h-[60vh]'>
        <div className='flex flex-col items-start gap-4'>
          <p className="text-3xl font-bold font-grotesk trackin-[3px] gradient-text uppercase text-center">Empresa: {treinamento.empresa?.nome}</p>
          <h1 className="text-3xl lg:text-5xl font-bold font-aeonik text-center">{treinamento.title}</h1>
          <p style={{ whiteSpace: 'pre-wrap' }}>{treinamento.descricao}</p>
        </div>
      </div>
    </div>
  );
}