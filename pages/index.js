import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
      <>
          <Header />
          <main>
              <Hero />
          </main>
          <Footer />
      </>
  )
}
