import React from 'react'
import Card from '../Card/Card'
import './Berita-Indonesia.css'

export default function BeritaIndonesia () {
  return (
    <div className='news-container bg-light'>
      <h4>Berita Indonesia</h4><hr />
      <div className='news-scroll'>
        <Card
          link='https://amp.kompas.com/nasional/read/2020/10/13/15434751/update-kini-ada-340622-kasus-covid-19-indonesia-bertambah-3906'
          image='https://asset.kompas.com/crops/1CXz8zMutt39KaFJvPh4BO8DM3k=/0x0:800x533/750x500/data/photo/2020/10/07/5f7cf4fba74ab.jpg'
          reference='Nasional Kompas.com'
          title='UPDATE: Kini Ada 340.622 Kasus Covid-19 Indonesia, Bertambah 3.906'
          news='Ada 3.906 kasus baru Covid-19 dalam 24 jam terakhir, sehingga totalnya mencapai 340.622 orang.'
        />
        <Card
          link='https://www.pikiran-rakyat.com/internasional/amp/pr-01826732/update-virus-corona-di-dunia-13-oktober-2020-indonesia-ke-6-terbanyak-penambahan-kasus-positif-asia'
          image='https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/09/14/3417173964.jpg'
          reference='Pikiran Rakyat.com'
          title='Update Virus Corona di Dunia 13 Oktober 2020, Indonesia ke-6 Terbanyak Penambahan Kasus Positif Asia'
          news='Perkembangan kasus virus corona dunia per 13 Oktober 2020 kembali dilaporkan dengan AS sebagai negara tertinggi Covid-19.'
        />
        <Card
          link='https://ternate.tribunnews.com/amp/2020/10/13/update-sebaran-virus-corona-indonesia-selasa-1310-dki-papua-barat-catat-kasus-sembuh-terbanyak'
          image='https://cdn-2.tstatic.net/ternate/foto/bank/images/update-corona-di-indonesia-selasa-13102020.jpg'
          reference='Tribun Ternate.com'
          title='UPDATE Sebaran Virus Corona Indonesia Selasa (13/10): DKI dan Papua Barat Catat Kasus Sembuh Terbanyak'
          news='TRIBUNTERNATE.COM - Berikut update sebaran kasus virus corona (Covid-19) di Indonesia per Selasa (13/10/2020).'
        />
      </div>
    </div>
  )
}
