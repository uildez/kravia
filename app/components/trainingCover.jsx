'use client'

import React, { useState, useEffect } from 'react'
import { getCompanies, getCoursesByCompany } from '../../sanity/api'
import { useRouter } from 'next/navigation'

export const TrainingCover = () => {
  const [step, setStep] = useState('intro')
  const [companies, setCompanies] = useState([])
  const [courses, setCourses] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (step === 'companies') {
      getCompanies().then(setCompanies)
    }
  }, [step])

  const handleSelectCompany = async (company) => {
    setLoading(true)
    setSelectedCompany(company)
    const courses = await getCoursesByCompany(company._id)
    setCourses(courses)
    setLoading(false)
    setStep('courses')
  }

  if (step === 'intro') {
    return (
      <div className="flex flex-col w-full h-full items-center gap-8">
        <h2 className='w-full lg:w-3/4 text-3xl lg:text-5xl font-aeonik font-bold text-center'>
          Confira as próximas turmas para os treinamentos <span className="gradient-text">CISCO, FORTINET e AWS</span> com instrutores certificados.
        </h2>
        <p className='w-full lg:w-2/4 text-center font-aeonik text-xl mb-8'>
          A KRAVIA combina conteúdo técnico de ponta com uma abordagem prática, ideal para profissionais e empresas que exigem excelência.
        </p>
        <button
          onClick={() => setStep('companies')}
          className="bg-purple-light text-white px-8 lg:px-12 py-4 rounded-lg font-bold hover:scale-105 transition-all"
        >
          Confira a agenda de treinamentos
        </button>
      </div>
    )
  }

  if (step === 'companies') {
    return (
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl lg:text-5xl font-bold font-aeonik text-center">Escolha seu treinamento</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {companies.map((company) => (
            <button
              key={company._id}
              onClick={() => handleSelectCompany(company)}
              className="bg-[#d9d9d9] min-w-full lg:min-w-[300px] font-aeonik py-8 lg:px-10 lg:py-20 text-3xl lg:text-5xl font-bold text-[#333333] rounded-full hover:bg-[#b5b5b5] hover:scale-105 transition-all duration-500"
            >
              {company.nome}
            </button>
          ))}
        </div>
        <button
          onClick={() => setStep('intro')}
          className="mt-10 bg-purple-dark text-white w-[70%] lg:w-[50%] text-center py-3 rounded-md font-bold hover:scale-105 transition-all"
        >
          Voltar
        </button>
      </div>
    )
  }

  if (step === 'courses') {
    return (
      <div className="flex flex-col items-center gap-6 w-full">
        <h2 className="text-3xl lg:text-5xl font-bold font-aeonik text-center">{selectedCompany?.nome}</h2>
        <div className="w-full max-w-3xl">
          {courses.length > 0 ? 
          courses.map((course) => (
            <div key={course._id} className="flex justify-between items-center border-b py-4">
              <span className="font-semibold text-[#333] text-lg lg:text-3xl font-aeonik">{course.title}</span>
              <button
                onClick={() => router.push(`/treinamento/${course.slug.current}`)}
                className="flex items-center justify-center font-aeonik gap-2 text-sm font-medium tracking-[3px] text-[#333]/80 hover:text-[#333] hover:scale-105 transition-all duration-500"
              >
                PRÓXIMAS TURMAS
                <span className="flex items-center justify-center pl-1 pt-1 text-2xl pb-2 bg-[#333]/50 text-white h-[30px] w-[30px] rounded-full">▶</span>
              </button>
            </div>
          )) : <h3 className="text-2xl lg:text-3xl font-bold font-aeonik text-center">Nenhum treinamento encontrado</h3>
        }
        </div>
        <button
          onClick={() => setStep('companies')}
          className="mt-10 bg-purple-dark text-white w-[70%] lg:w-[50%] text-center py-3 rounded-md font-bold hover:scale-105 transition-all"
        >
          Voltar
        </button>
      </div>
    )
  }

  return null
}
