import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { nome, email, phone } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "contato@kravia.com.br", 
      pass: "pnyb xqev rsum wnpx"  
    }
  })

  const mailOptions = {
    from: email,
    to: 'contato@kravia.com.br',
    subject: 'Lead | Lista de Espera Kravia',
    text: `
      Nome: ${nome}
      Email: ${email}
      phone: ${phone}
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error: any) {
  console.error('Erro ao enviar email:', error.message, error)
  return NextResponse.json({ success: false, error: error.message }, { status: 500 })
}
}
