import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function about_us() {
  return (
    <>
    <Head><title>Go Went Go</title></Head>

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
    <img src="n.jpg" width={445} height={550} />
    <br></br>
    <br></br> 
    <p><b>นางสาวเบญจรัตน์ เมืองแสน</b></p>
    <p><b>เว็บไซต์นี้เป็นเว็บไซณ์การแนะนำ สถานที่ท่องเที่ยว ภายในประเทศไทย</b></p>
</center>

</main>

<footer>
    <div className="b-example-divider" />
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="#" className="nav-light px-2 text-body-light">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-light px-2 text-body-light">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-light px-2 text-body-light">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-light px-2 text-body-light">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-light px-2 text-body-light">About</a></li>
        </ul>
        <p className="text-center text-body-light ">© 2023 Company, Inc</p>
      </footer>
    </div>
  </footer>

    </>
  )
}