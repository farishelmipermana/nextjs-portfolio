import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import { GiChessKing } from "react-icons/gi";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, saya Faris Helmi Permana</h1>
            <p className="description">Saya seorang pekerja lepas pengembang web dan desainer antarmuka.</p>

            <Link href="/contact"><a className="cta">Kontak Saya</a></Link>
          </div>

          <div className="image-wrapper">
            <GiChessKing size={300}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;