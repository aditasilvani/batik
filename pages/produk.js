import React from 'react'
import Kolomproduk from '../componen/kolomproduk'
import Link from "next/link"

export default function produk() {
    const Isi=[
        {imgurl:'blarak.jpg',namaproduk:'Blarak Sempal', price2: 'Rp 699.000'},
        {imgurl:'Atasan.png',namaproduk:'Kemeja Batik Wanita', price: 'Rp 249.000', price2: 'Rp 150.000'},
        {imgurl:'dres.png',namaproduk:'Outer Batik', price: 'Rp 299.000', price2: 'Rp 199.000'},
        {imgurl:'bawahan.png',namaproduk:'Rok Batik', price2: 'Rp 99.000'},
        {imgurl:'bawahan.png',namaproduk:'Rok Batik', price2: 'Rp 99.000'},
        {imgurl:'bawahan.png',namaproduk:'Rok Batik', price2: 'Rp 99.000'},
        {imgurl:'bawahan.png',namaproduk:'Rok Batik', price2: 'Rp 99.000'},
        {imgurl:'bawahan.png',namaproduk:'Rok Batik', price2: 'Rp 99.000'}]
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="http://localhost:3000/">Suruh Temurose</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a></li>                      <li className="nav-item"><a className="nav-link" href="produk">All Product</a></li>
                    </ul>
                    <form className="d-flex">
                        <Link href="/cart">
                        <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1" />
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button></Link>
                    </form>
                    </div>
                </div>
                </nav>
                <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h3 className="display-4 fw-bolder">All Product</h3>
            </div>
          </div>
        </header> 
        <div className='row'>
        {Isi.map((kolom)=>(
          <Kolomproduk Imgurl={kolom.imgurl} NamaProduk={kolom.namaproduk} Price={kolom.price} Price2={kolom.price2}/>
        ))
      }
      </div>
      </div>
    )}