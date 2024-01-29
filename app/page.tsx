import HomeContent from './Home/page'
import Navbar from './Navbar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-neutral-900'>
      <Navbar/>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HomeContent/>
      </div>
    </main>
  )
}
