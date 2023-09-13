import Hero from '@/components/Hero'
import Notice from '@/components/Notice'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Notice />
    </main>
  )
}
