import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
    <br> Esta linea es insertada desde un browser en el editor de github</br>
    Ya hice un <code>commit</code> pero creo que me falta un <code>push</code>, que no he sabido encontrar si es que hay que hacerlo
        </p>
      </main>

      <Footer />
    </div>
  )
}
