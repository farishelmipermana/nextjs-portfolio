import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
				  Nama saya Faris Helmi Permana, Mahasiswa Sistem Informasi
					UNJANI. Saya familiar dan berpengalaman degan bahasa
					pemrograman website, pengujian penetrasi, maupun bahasa
					pembangun database. Saya minat berkarir sebagai
					pengembangan front end dan mahir menggunakan visual
					studio code dan alat kali linux serta beberapa bahasa
					pemrograman.

			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;