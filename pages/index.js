import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';

export default function index() {
  return (
    <>
    <Head>
      <title>Hello Guys</title>
    </Head>
    <Image src="/monk.png" className="rounded" alt="monk" width={400} height={400}/>
    <div className="text-center"><button type="button" className="btn btn-info">index</button></div>
    </>
  )
}
