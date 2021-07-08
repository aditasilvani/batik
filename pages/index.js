//@ts-check
import Head from 'next/head' 
import Header from '../componen/header'
import Navigation from '../componen/navigation'
import Body from '../componen/body'
import Footer from '../componen/footer'
import Kolomproduk from '../componen/kolomproduk'


export default function Home() {
  <br/>
  const Isi=[
    {imgurl:'blarak.jpg',namaproduk:'Blarak Sempal', price2: 'Rp 699.000'},
    {imgurl:'Atasan.png',namaproduk:'Kemeja Batik Wanita', price: 'Rp 249.000', price2: 'Rp 150.000'},
    {imgurl:'dres.png',namaproduk:'Outer Batik', price: 'Rp 299.000', price2: 'Rp 199.000'},
    {imgurl:'bawahan.png',namaproduk:'Rok Batik', price2: 'Rp 99.000'}
  ]
  return (
    <div>
      <Head>
        <title>Batik</title>
      </Head>
      <Navigation/>
      <Header/>
     
      <div className="row">
      <section className="py-5">
<div className="container px-4 px-lg-5 mt-5">
<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


        {Isi.map((kolom)=>(
          <Kolomproduk Imgurl={kolom.imgurl} NamaProduk={kolom.namaproduk} Price={kolom.price} Price2={kolom.price2}/>
        ))
      }
    
    
      </div>
      </div>
      </section>
      </div>
   
      <Body/>
      <Footer/>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACsElEQVRoge2azWsTQRjGf7WY2KopeNI2NVrQ4sUcrB9H9SIKnlQ8iuBJPIn+D73o3+BBLxLUg3jy7Mmi+NEqSMEPKGorNDWirTYe5l3SJtlk39mdmYA+8JBs8r7zPs/OTGZ3NuAOo0AFqArvAeMO6znBKLAA1Ju4ABQD6lKjQquJiHcD6lKjSryRRRcFN7hotAvqLhp1ZeSx5XfBMQBcAybleJz4yb5HYiYlZ8Cr0g4oAzMYob+BCfm8iJnYi8IKDRMHJbYuuWWPetviOFBj/VmfxwiNwyFae6sGHHOqtAPKtJqIuALcAg4Dg8Ij8tlKTE4N2O/VAbAJmI4RlIbT0rY3XHdgIuJVXyY2Al8cGvksNZzjtEMTEU9pRdksiCcscrQ4qU2wMTLRPSQ1DmgTbIzssshxXqPPoshPIG+Rp62hunTRGskBv5Q5tshhFs9E0A6tLcr4NNisCf5vxAO2aoK1RkrK+DTYqQnWGvG5naOqpTWyVxmfBk5P2ivcX2dFfO7KRNGjiTqwCgwnFacZWmcVsVmgDziTdaP9wDv89kgdmJXameFiABMRL2RlYgT4FtDIPLAjrYkC8CygiYhPUa70azEGvOwBExFfALu1Jo5iujS0+GZ+FW2JcB5Y7gHRcVwGziUx8qkHxHbjx2bR7RZE60nlES0a2xl55EFIWjxMEjQMvCX88InjG2B7UseDwE3id9tDsAbcEG1qFIBLwANgLoD4OeC+aCh0EqrdDioB+zAbaCXM8/RtUmRIuPa+fojGPFxl/RPd7zSeZlUxl0EfgPfCGXn9t2Cz09gJY5iz+0eOf9DY0MvTGN/9mF6czbh+Zlgi+fjP9I8DWT9nf+0otiuyNnJHEXs749qZIk+y+5cpzCZ1T2OEzmamUOyOhEYOuAI8wfwALMn7yzjqib8v76Eh+HRjNAAAAABJRU5ErkJggg==" style={{}}/>

    </div>
  )
}
// <section className="py-5">
// <div className="container px-4 px-lg-5 mt-5">
// <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
//         <div className="col mb-5">
//             <div className="card h-100">
//             {/* Product image*/}
//             <img className="card-img-top" src={props.Imgurl} height={300} width={450}  alt="..." />
//             {/* Product details*/}
//             <div className="card-body p-4">
//                 <div className="text-center">
//                 {/* Product name*/}
//                 <h5 className="fw-bolder">{props.NamaProduk}</h5>
//                 {/* Product price*/}
//                 {props.Price2}
//                 </div>
//             </div>
//             {/* Product actions*/}
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                 <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View Detail</a></div>
//             </div>
//             </div>
//         </div>
//         </div>

// </div>
// </section>

// <section className="py-5">
// <div className="container px-4 px-lg-5 mt-5">
// <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
//         <div className="col mb-5">
//             <div className="card h-100">
//             {/* Product image*/}
//             <img className="card-img-top" src={props.Imgurl} height={300} width={450}  alt="..." />
//             {/* Product details*/}
//             <div className="card-body p-4">
//                 <div className="text-center">
//                 {/* Product name*/}
//                 <h5 className="fw-bolder">{props.NamaProduk}</h5>
//                 {/* Product price*/}
//                 {props.Price2}
//                 </div>
//             </div>
//             {/* Product actions*/}
//             <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                 <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View Detail</a></div>
//             </div>
//             </div>
//         </div>
//         </div>

// </div>
// </section>