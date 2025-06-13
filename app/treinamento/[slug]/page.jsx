import Image from 'next/image';
import { sanity } from '../../../sanity/api';
import { urlFor } from '../../../sanity/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import ContactForm from '../../components/contactForm';

export default async function CursoPage({ params }) {
  const { slug } = await params;

  const treinamento = await sanity.fetch(
    `*[_type == "treinamento" && slug.current == $slug][0]{
      ...,
      empresa->,
      imagem,
      selo,
      versao,
      linguagem,
      preRequisitos,
      indicadoPara,
      conteudo,
      calendario
    }`,
    { slug }
  );

  if (!treinamento) return <p>Treinamento não encontrado.</p>;

  return (
    <div>
      {treinamento.imagem ?
        <Image
          src={urlFor(treinamento.imagem).width(1200).url()}
          width={1200}
          height={1200}
          className="min-w-full h-[40vh] object-cover object-center bg-purple-light"
          alt={treinamento.imagem?.alt || 'Imagem do treinamento'}
        />

        : <div className="min-w-full h-[40vh] object-cover object-center bg-purple-light" />
      }

      <div className="flex flex-col w-full mt-12 px-8 lg:px-20 2xl:px-40 min-h-[60vh] space-y-6">
        <div className="flex items-center justify-between w-full text-center space-y-2">
          {/* <p className="text-xl font-semibold gradient-text uppercase">Empresa: {treinamento.empresa?.nome}</p> */}
          <h1 className="text-3xl lg:text-5xl text-left font-bold font-aeonik">{treinamento.title}</h1>
          {treinamento.selo && (
            <Image
              src={urlFor(treinamento.selo).width(500).url()}
              width={500}
              height={500}
              className="max-w-[100px] lg:max-w-[200px] object-cover"
              alt={treinamento.selo?.alt || `Selo do Treinamento ${treinamento.title}`}
            />
          )}
        </div>

        {treinamento.descricao && (
          <div className='flex flex-col bg-[#DDDDDD] rounded-4xl gap-4 w-full items-start justify-center p-4 lg:p-8 my-4 lg:my-8'>
            <h2 className="text-xl lg:text-3xl text-left font-bold font-aeonik">Descrição</h2>
            <p style={{ whiteSpace: 'pre-wrap' }}>{treinamento.descricao}</p>
          </div>
        )}
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 my-4 lg:my-8'>
          {treinamento.versao && <p className='w-full lg:w-2/4 bg-white border-3 border-purple-medium p-4 lg:p-8 rounded-2xl'><strong className='font-aeonik'>Versão:</strong> {treinamento.versao}</p>}
          {treinamento.linguagem && <p className='w-full lg:w-2/4 bg-white border-3 border-purple-medium p-4 lg:p-8 rounded-2xl'><strong className='font-aeonik'>Linguagem:</strong> {treinamento.linguagem}</p>}
        </div>

        {treinamento.preRequisitos && (
          <div className='my-4 lg:my-8 p-4 lg:p-0'>
            <h2 className="text-xl lg:text-2xl text-left font-bold font-aeonik mb-2 text-purple-medium">Pré-requisitos:</h2>
            <PortableText value={treinamento.preRequisitos} />
          </div>
        )}

        {treinamento.indicadoPara && (
          <div className='my-4 lg:my-8 p-4 lg:p-0'>
            <h2 className="text-xl lg:text-2xl text-left font-bold font-aeonik mb-2 text-purple-medium">Indicado para:</h2>
            <PortableText value={treinamento.indicadoPara} />
          </div>
        )}

        {treinamento.conteudo && (
          <div className='bg-[#DDDDDD] p-4 lg:p-8 rounded-4xl my-4 lg:my-8'>
            <h2 className="text-xl lg:text-2xl text-left font-bold font-aeonik mb-2">Conteúdo:</h2>
            <PortableText value={treinamento.conteudo} />
          </div>
        )}

        {treinamento.calendario?.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-3xl lg:text-5xl text-left font-bold font-aeonik">Próximas Datas</h2>
            <div className="space-y-4 mt-4">
              {treinamento.calendario.map((item, index) => {
                const data = new Date(item.data);
                const dia = data.toLocaleDateString('pt-BR', { day: '2-digit' });
                const mes = data.toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase();

                return (
                  <div key={index} className="flex flex-col lg:flex-row bg-[#DDDDDD] rounded-4xl gap-4 w-full items-center justify-between p-8 lg:p-12 group hover:bg-purple-light hover:scale-[102%] transition-all duration-500">
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-12'>
                      <div className="text-center">
                        <p className="text-6xl font-aeonik font-bold group-hover:text-white">{dia}</p>
                        <p className="text-3xl font-aeonik uppercase group-hover:text-white">{mes}</p>
                      </div>
                      <div className="flex flex-col items-center lg:items-start justify-center gap-1 pl-4">
                        {item.localizacao && <p className='group-hover:text-white'><strong className='font-aeonik text-lg'>Localização:</strong> {item.localizacao}</p>}
                        {item.cargaHoraria && <p className='group-hover:text-white'><strong className='font-aeonik text-lg'>Carga horária:</strong> {item.cargaHoraria}</p>}
                        {item.investimento && <p className='group-hover:text-white'><strong className='font-aeonik text-lg'>Investimento:</strong> R${item.investimento}</p>}
                      </div>
                    </div>
                    <Link
                      // href={`https://wa.me/1154201220?text=${encodeURIComponent(`Olá, tenho interesse no treinamento ${treinamento.title}`)}`}
                      href="tel:(11) 5420-1220"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`z-2 relative group-hover:scale-100 hover:scale-105 min-h-[50px] group text-white font-bold group-hover:bg-white group-hover:text-purple-light bg-purple-light rounded-lg px-12 py-4 w-full lg:w-[20%] font-grotesk overflow-hidden transition-transform ease-in-out duration-500`}
                    >
                      <span
                        className="absolute flex gap-2 top-0 left-0 w-full h-full items-center justify-center translate-y-0 hover:text-purple-light group-hover:-translate-y-full transition-transform duration-300 ease-in-out"
                      >
                        <span className="text-lg">Garanta sua vaga</span>
                      </span>
                      <span
                        className="absolute flex gap-2 top-0 left-0 w-full h-full items-center justify-center translate-y-10 text-purple-light group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                      >
                        <span className="text-lg">Garanta sua vaga</span>
                      </span>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>)
          :
          <div className='flex flex-col w-full lg:flex-row items-center justify-between gap-8 lg:gap-20 mt-8'>
            <div className='flex flex-col w-full lg:w-2/5 gap-4 lg:gap-8'>
              <h2 className="text-3xl lg:text-5xl text-left font-bold font-aeonik">Entre na lista de espera</h2>
              <p style={{ whiteSpace: 'pre-wrap' }}>Preencha o formulário e entraremos em contato assim que o treinamento de {treinamento.title} estiver disponível.</p>
            </div>
            <div className='w-full lg:w-3/6'>
              <ContactForm />
            </div>
          </div>
        }
      </div>
    </div>
  );
}
