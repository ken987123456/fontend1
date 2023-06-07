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
          <a className="nav-link active" aria-current="page" href=".">หน้าหลัก</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">เกี่ยวกับเรา</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">ที่พัก</a></li>
            <li><a className="dropdown-item" href="#">ตั๋วเครื่องบิน</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">อาหาร</a></li>
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
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={1200}>
      <img src="wall1.png" className="d-block w-100" alt="wall.png" />
    </div>
    <div className="carousel-item" data-bs-interval={1200}>
      <img src="wall2.png" className="d-block w-100" alt="wall.png" />
    </div>
    <div className="carousel-item" data-bs-interval={1200}>
    <img src="wall3.png" className="d-block w-100" alt="wall.png" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br></br>
<div class="container marketing">
<div>
  <div className="row">
    <div className="col-lg-4">
      <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/338585293_239829545128899_4220305952545380222_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGzYyEPVneLzutQt1uQLiO3NzdZQocZNG83N1lChxk0b966mGHCMmXjtByxHYaUMDEHzLIl-3INubQv2_XgYqKd&_nc_ohc=prsgU_8XIOoAX_blz4U&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBKCNpblXCIWxWBjolMaDdXmnixkt-BG_uZsGYNxWyjTQ&oe=6484518F"/>
      <h2 className="fw-normal">ทะเล</h2></center> 
      <p></p>
      <center><p><a className="btn btn-secondary" href="#">View details »</a></p></center>
    </div>
    <div className="col-lg-4">
    <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/294666886_5270433536380653_8262167781483113888_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEHq06TVT52Avb4UpF5IHds3O0g1pbXZSfc7SDWltdlJz6UHXpbZbd6zTto8MET4-MAOF-vr-Gc-JVFdk4R4xob&_nc_ohc=E9PbOYxYZJMAX_JMU1h&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfBGRiS-FhcsgqXiEOrj2pcNprreJWnM6WjwHh2bCeP9cA&oe=64841D22"/>
    <h2 className="fw-normal">ภูเขา</h2></center>
      <p></p>
      <center><p><a className="btn btn-secondary" href="#">View details »</a></p></center>
    </div>
    <div className="col-lg-4">
    <center><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/294507498_5270433143047359_6697456741612438194_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEdz-HY68xGe6YKH6I39Ys1x5yW9J9wI4fHnJb0n3Ajh6uh0Cr945_HVlJ_5M-dLs9BMW3_5lzVNfam_zYmb3Q3&_nc_ohc=oIZFROQWpSUAX9dYdv8&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfAcZ7gk-UKTc9jZk6O17Vie6TpHj1m2DM7UFpWRBiYhag&oe=6485CA75"/>
    <h2 className="fw-normal">วัด</h2></center>
      <p></p>
      <center><p><a className="btn btn-secondary" href="#">View details »</a></p></center>
    </div>
  </div>
</div>
</div>

<div>
<footer>
    <div className="b-example-divider" />
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="https://www.facebook.com/buabenjarat3009" className="nav-light px-2 text-body-light">facebook</a></li>
          <li className="nav-item"><a href="https://www.instagram.com/buabenjax._/?hl=th" className="nav-light px-2 text-body-light">Instagram</a></li>
        </ul>
        <p className="text-center text-body-light ">Go Went Gone</p>
      </footer>
    </div>
  </footer>
</div>
    </>
  )
}
