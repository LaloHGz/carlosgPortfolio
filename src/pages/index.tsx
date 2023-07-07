import Biography from '@/components/Biography'
import Head from '@/components/Head'
import Sotavento from '@/components/Sotavento'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='m-5 text-[#383838]'>
      <Head />
      <Biography />
      <Sotavento />
    </main>
  )
}
