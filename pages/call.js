import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function about_us() {
  return (
    <>

    <Head><title>Meteor</title></Head>

<header>
<nav className="navbar navbar-expand-lg text-bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="."><img src="logo.png" alt="" width={70}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">หน้าหลัก</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">เกี่ยวกับเรา</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>

<br></br>
<br></br>
<main>
<center>
    <h1><b>เกี่ยวกับเรา</b></h1>
    <img src="N.jpg" width={445} height={550} />
    <br></br>
    <br></br> 
    <p><b>นายธีรพงษ์ อุกอาจ (นัท)</b></p>
    <p><b>เว็บไซต์นี้เป็นเว็บไซณ์การแนะนำ Channel Youtube ที่เจ้าของเว็บชื่นชอบเกี่ยวกับเพลงและการเล่นเกมต่างๆ </b></p>
</center>

</main>

<footer>
<section id="Contact" class="py-5"> 
            <div class="container">
                <footer class="py-3 my-4">
                  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link href="." class="nav-link px-2 text-muted"><i class="bi bi-house-heart-fill"></i> <b>Home</b></Link></li>
                    <li class="nav-item"><a href="https://web.facebook.com/Teerapong2545" target="blank" class="nav-link px-2 text-muted"><i class="bi bi-facebook"></i> <b>Facebook</b></a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/n_foolmoon/" target="blank" class="nav-link px-2 text-muted"><i class="bi bi-instagram"></i> <b>Instagram</b></a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="bi bi-telephone"></i> <b>097-996-2835</b></a></li>
                  </ul>
                  <p class="text-center text-muted">&copy; <b>2022 Center Game Company, Inc</b></p>
                </footer>
              </div>
</section>
</footer>

    </>
  )
}