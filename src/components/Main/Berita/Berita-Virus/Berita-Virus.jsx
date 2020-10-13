import React from 'react'
import Card from '../Card/Card'
import './Berita-Virus.css'

export default function BeritaVirus () {
  return (
    <div className='news-container bg-light'>
      <h4>Berita Virus</h4><hr />
      <div className='news-scroll'>
        <Card
          link='https://amp.kompas.com/tren/read/2020/10/13/093000665/studi-virus-corona-bisa-bertahan-hingga-28-hari-di-uang-kertas-hingga-layar'
          image='https://asset.kompas.com/crops/Amj-sCz1SZcERn9eGWOtS5HiWnU=/0x0:917x611/750x500/data/photo/2020/08/26/5f46597d6562d.jpg'
          reference='Kompas.com'
          title='Studi: Virus Corona Bisa Bertahan hingga 28 Hari di Uang Kertas hingga Layar Ponsel'
          news='Sebuah studi yang dilakukan Badan Sains Nasional Australia CSIRO menunjukkan bahwa virus corona dapat bertahan lebih lama di suatu benda dari yang diperkirakan.'
        />
        <Card
          link='https://news.detik.com/bbc-world/d-5209704/virus-corona-bisa-bertahan-28-hari-pada-uang-kertas-dan-layar-ponsel'
          image='https://akcdn.detik.net.id/community/media/visual/2020/10/12/virus-covid-bertahan-selama-28-hari-di-permukaan-uang-kertas-dan-layar-ponsel-dalam-kondisi-tertentu-kata-peneliti.jpeg?w=700&q=90'
          reference='detikNews'
          title='Virus Corona Bisa Bertahan 28 Hari pada Uang Kertas dan Layar Ponsel'
          news='Virus yang bertanggung jawab atas Covid-19 dapat tetap menular di permukaan seperti uang kertas, layar ponsel, dan baja tahan karat selama 28 hari, kata para peneliti.'
        />
      </div>
    </div>
  )
}
