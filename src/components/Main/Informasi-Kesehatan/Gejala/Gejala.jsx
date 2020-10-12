import React from 'react'
import './Gejala.css'

export default function Gejala () {
  return (
    <article className='bg-light p-2'>
      <h5>Masing-masing orang memiliki respons yang berbeda terhadap COVID-19. Sebagian besar orang yang terpapar virus ini akan mengalami gejala ringan hingga sedang, dan akan pulih tanpa perlu dirawat di rumah sakit.</h5>
      <hr />
      <div className='scroll'>
        <h5>Gejala yang paling umum:</h5>
        <ul>
          <li>demam</li>
          <li>batuk kering</li>
          <li>kelelahan</li>
        </ul>

        <h5>Gejala yang sedikit tidak umum:</h5>
        <ul>
          <li>rasa tidak nyaman dan nyeri</li>
          <li>nyeri tenggorokan</li>
          <li>diare</li>
          <li>konjungtivitis (mata merah)</li>
          <li>sakit kepala</li>
          <li>hilangnya indera perasa atau penciuman</li>
          <li>ruam pada kulit, atau perubahan warna pada jari tangan atau jari kaki</li>
        </ul>

        <h5>Gejala serius:</h5>
        <ul>
          <li>kesulitan bernapas atau sesak napas</li>
          <li>nyeri dada atau rasa tertekan pada dada</li>
          <li>hilangnya kemampuan berbicara atau bergerak</li>
        </ul>

        <p>Segera cari bantuan medis jika Anda mengalami gejala serius. Selalu hubungi dokter atau fasilitas kesehatan yang ingin Anda tuju sebelum mengunjunginya.</p>
        <p>Orang dengan gejala ringan yang dinyatakan sehat harus melakukan perawatan mandiri di rumah.</p>
        <p>Rata-rata gejala akan muncul 5–6 hari setelah seseorang pertama kali terinfeksi virus ini, tetapi bisa juga 14 hari setelah terinfeksi.</p>
      </div>
    </article>
  )
}
