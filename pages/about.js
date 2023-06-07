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
      <img src="wall4.png" className="d-block w-100" alt="wall.png" />
    </div>
    <div className="carousel-item" data-bs-interval={1200}>
      <img src="wall5.png" className="d-block w-100" alt="wall.png" />
    </div>
    <div className="carousel-item" data-bs-interval={1200}>
    <img src="wall6.png" className="d-block w-100" alt="wall.png" />
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
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="about1.png" className="card-img-top" alt="about1" />
      <div className="card-body">
        <h5 className="card-title">เกาะล้าน</h5>
        <p className="card-text">เกาะล้าน เป็นแขวงหนึ่งในเมืองพัทยา จังหวัดชลบุรี โดยเป็นเกาะขนาด 4.7 ตารางกิโลเมตร กลางอ่าวไทย มีเกาะครกและเกาะสากเป็นบริวาร ใน พ.ศ. 2562 มีประชากร 2,958 คน เกาะล้านห่างจากเมืองพัทยาเพียง 7.5 กิโลเมตร มีชื่อเสียงจากการเป็นแหล่งท่องเที่ยวทางทะเลใกล้พัทยา โดยสามารถเดินทางได้ทั้งจากเรือสปีดโบ้ท หรือเรือเฟอร์รี่ที่ท่าเรือแหลมบาลีฮาย ซึ่งจะไปเทียบท่าที่ท่าเรือหน้าบ้านและหาดตาแหวน.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about2.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ภูลังกา</h5>
        <p className="card-text">อุทยานแห่งชาติภูลังกา ครอบคลุมพื้นที่อำเภอบ้านแพง จังหวัดนครพนม และอำเภอเซกา อำเภอบึงโขงหลง จังหวัดบึงกาฬ มีเนื้อที่ประมาณ 31,250 ไร่ หรือประมาณ 50 ตารางกิโลเมตร จุดเด่นที่น่าสนใจ คือ น้ำตกตาดขาม (อำเภอบ้านแพง จังหวัดนครพนม), น้ำตกตาดโพธิ์ (อำเภอบ้านแพง จังหวัดนครพนม), น้ำตกตาดวิมานทิพย์ (อำเภอบึงโขงหลง จังหวัดบึงกาฬ), น้ำตกกินนรี (อำเภอบึงโขงหลง จังหวัดบึงกาฬ)</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about5.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">เลย</h5>
        <p className="card-text">เลย เป็นจังหวัดหนึ่งในภาคตะวันออกเฉียงเหนือตอนบนของประเทศไทย ตั้งอยู่ในแอ่งสกลนครและอยู่ในกลุ่มจังหวัดภาคตะวันออกเฉียงเหนือตอนบน 1 (กลุ่มจังหวัดสบายดี) ห่างจากกรุงเทพมหานครประมาณ 540 กิโลเมตร มีสภาพภูมิประเทศที่งดงาม อากาศหนาวเย็น เป็นแหล่งเพาะปลูกไม้ดอกไม้ประดับที่สำคัญแห่งหนึ่งของประเทศ และยังเป็นจังหวัดท่องเที่ยวที่สำคัญหลายแห่ง</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="about3.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ระยอง</h5>
        <p className="card-text">ระยอง เป็นจังหวัดหนึ่งในภาคตะวันออกของประเทศไทย เป็นจังหวัดที่มีรายได้ประชากรต่อหัวสูงที่สุดในประเทศ และผลิตภัณฑ์รวมจังหวัดอยู่ในอันดับที่ 2 ของประเทศไทย เป็นเมืองท่องเที่ยวที่มีแหล่งท่องเที่ยวที่มีชื่อเสียงมากมาย และเป็นเมืองที่มีความสำคัญทางเศรษฐกิจเป็นอย่างมาก ทั้งทางด้านอุตสาหกรรม การท่องเที่ยว และการเกษตรกรรม</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about4.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">นครพนม</h5>
        <p className="card-text">นครพนม เป็นจังหวัดในกลุ่มจังหวัดภาคตะวันออกเฉียงเหนือตอนบน 2 นับเป็นเมืองชายแดนที่มีความอุดมสมบูรณ์ ความสวยงามของทิวทัศน์ และมีความหลากหลายของวัฒนธรรมและชาติพันธุ์ รวมทั้งประวัติศาสตร์ที่ยาวนานมีพระธาตุพนมเป็นปูชนียสถานคู่บ้านคู่เมืองพื้นที่ด้านเหนือและตะวันออกของจังหวัดติดกับแม่น้ำโขงโดยตลอด</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about6.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">น่าน</h5>
        <p className="card-text">น่าน เป็นจังหวัดหนึ่งในประเทศไทย ตั้งอยู่ทางทิศตะวันออกสุดของภาคเหนือ เป็นที่ตั้งของเมืองที่สำคัญในอดีต เช่น เวียงวรนคร (เมืองพลัว) เวียงศีรษะเกษ (เมืองงั่ว) เวียงภูเพียงแช่แห้ง อีกทั้งยังเป็นแหล่งต้นน้ำของแม่น้ำน่าน</p>
      </div>
    </div>
  </div>
</div>
<br></br>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="about7.png" className="card-img-top" alt="about1" />
      <div className="card-body">
        <h5 className="card-title">เวียงแหง</h5>
        <p className="card-text">เชียงดาว  เป็นหนึ่งในอำเภอของจังหวัดเชียงใหม่ เป็นต้นกำเนิดของแม่น้ำปิงซึ่งเป็นแม่น้ำสายสำคัญของประเทศไทย และเป็นหนึ่งในสองของแม่น้ำที่บรรจบมาเป็นแม่น้ำเจ้าพระยา และอำเภอเชียงดาวมีอายุในการจัดตั้งเป็นอำเภอครบ 100 ปี ในปี พ.ศ. 2551 (ตั้งเป็นอำเภออย่างเป็นทางการในวันที่ 12 กรกฎาคม พ.ศ. 2451) และในวันที่ 15 กันยายน พ.ศ. 2564 ยูเนสโกได้ประกาศตั้งพื้นที่สงวนชีวมณฑลแห่งใหม่ของโลก คือ พื้นที่สงวนชีวมณฑลดอยเชียงดาว นับเป็นพื้นที่สงวนชีวมณฑลลำดับที่ 5 ของประเทศไทย</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about8.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ทุ่งแสลงหลวง</h5>
        <p className="card-text">ทุ่งแสลงหลวง หรือที่รู้จักกันดีในนาม “ทุ่งหญ้าสะวันนาแห่งเมืองไทย” เป็นอุทยานแห่งชาติที่มีขนาดใหญ่เป็นอันดับ 3 ของประเทศ มีเนื้อที่ประมาณ 789,000 ไร่หรือ 1,262.40 ตารางกิโลเมตร ทุ่งแสลงหลวงมีพื้นที่ครอบคลุม อ.วังทอง อ.นครไทย อ.เนินมะปราง จ.พิษณุโลก และใน อ.เขาค้อ อ.วังโป่ง จ.เพชรบูรณ์ สำหรับชื่อของอุทยานแห่งชาติมีการสันนิษฐานว่ามีการตั้งชื่อตามพันธุ์ไม้ชนิดหนึ่งที่มีอยู่ในพื้นที่ป่าแห่งนี้ คือ ต้นแสลงใจ</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about9.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ลพบุรี</h5>
        <p className="card-text">ลพบุรี เป็นจังหวัดในภาคกลางของประเทศไทย แบ่งการปกครองออกเป็น 11 อำเภอ มีอาณาเขตติดต่อกับจังหวัดอื่นจำนวน 8 จังหวัด  ลพบุรีเป็นจังหวัดที่มีพื้นที่ยุทธศาสตร์ทางการทหารที่สำคัญแห่งหนึ่งของประเทศ เนื่องจากตั้งอยู่ตรงกึ่งกลางของประเทศไทย มีพื้นที่ที่อุดมสมบูรณ์เหมาะแก่การประกอบอาชีพเกษตรกรรมและการเพาะปลูก ลพบุรีเป็นจังหวัดที่มีความสำคัญในด้านประวัติศาสตร์ โดยมีการค้นพบโบราณสถาน โบราณวัตถุและการตั้งถิ่นฐานของคนยุคก่อนประวัติศาสตร์และในอดีตเคยเป็นที่ตั้งเมืองหลวงของอาณาจักรละโว้</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="about10.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">ขอนแก่น</h5>
        <p className="card-text">ขอนแก่น (เดิมชื่อ ขามแก่น) เป็นจังหวัดที่มีขนาดพื้นที่ใหญ่เป็นอันดับที่ 6 ของภาคตะวันออกเฉียงเหนือ และมีประชากรมากเป็นอันดับที่ 3 ของภาคตะวันออกเฉียงเหนือ อยู่ในกลุ่มจังหวัดภาคตะวันออกเฉียงเหนือตอนกลาง คือ จังหวัดร้อยเอ็ด ขอนแก่น มหาสารคาม กาฬสินธุ์ โดยขอนแก่นเป็นจังหวัดที่เป็นศูนย์ปฏิบัติการของกลุ่ม</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about11.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">โคราช</h5>
        <p className="card-text">นครราชสีมา หรือรู้จักในชื่อ โคราช เป็นจังหวัดหนึ่งในภาคตะวันออกเฉียงเหนือของประเทศไทย เป็นจังหวัดที่มีพื้นที่มากที่สุดในประเทศไทย และมีประชากรมากเป็นอันดับ 2 ของประเทศ รองจากกรุงเทพฯ ชื่อเมืองนครราชสีมาปรากฏที่เป็นบทความเป็นครั้งแรกเป็นเมืองพระยามหานครในการปฏิรูปการปกครองในรัชสมัยสมเด็จพระบรมไตรโลกนาถ (ตั้งอยู่ในพื้นที่อำเภอสูงเนิน จังหวัดนครราชสีมา)</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="about12.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">เลย</h5>
        <p className="card-text">เลย เป็นจังหวัดหนึ่งในภาคตะวันออกเฉียงเหนือตอนบนของประเทศไทย ตั้งอยู่ในแอ่งสกลนครและอยู่ในกลุ่มจังหวัดภาคตะวันออกเฉียงเหนือตอนบน 1 (กลุ่มจังหวัดสบายดี) ห่างจากกรุงเทพมหานครประมาณ 540 กิโลเมตร มีสภาพภูมิประเทศที่งดงาม อากาศหนาวเย็น เป็นแหล่งเพาะปลูกไม้ดอกไม้ประดับที่สำคัญแห่งหนึ่งของประเทศ และยังเป็นจังหวัดท่องเที่ยวที่สำคัญหลายแห่ง</p>
      </div>
    </div>
  </div>
</div>

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
  )
    </>
  )
}
