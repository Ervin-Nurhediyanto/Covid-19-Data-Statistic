import React, { Component } from 'react'
import './Koping.css'

export default class Koping extends Component {
  constructor () {
    super()
    this.state = {
      line01: '',
      line02: '',
      line03: '',
      line04: '',
      ul01: '',
      li01: '',
      li02: '',
      li03: '',
      li04: '',
      li05: '',
      li06: '',
      li07: '',
      ul02: '',
      li08: '',
      display: 'hiden',
      display02: 'hiden',
      display03: 'hiden'
    }
    this.handleLine01 = this.handleLine01.bind(this)
    this.handleLine02 = this.handleLine02.bind(this)
    this.handleLine03 = this.handleLine03.bind(this)
    this.handleLine04 = this.handleLine04.bind(this)
    this.handleLine05 = this.handleLine05.bind(this)
  }

  handleLine01 () {
    if (this.state.line01) {
      this.setState({
        line01: '',
        line02: '',
        line03: ''
      })
    } else {
      this.setState({
        line01: 'Ambil napas pelan-pelan: melalui hidung, lalu embuskan secara perlahan.',
        line02: 'Bernapas secara perlahan merupakan salah satu cara terbaik untuk menurunkan tingkat stres, karena memberi sinyal kepada otak Anda untuk mengistirahatkan tubuh Anda.',
        line03: 'Perhatikan bagaimana perasaan Anda dan apa saja yang Anda pikirkan, tanpa melakukan penilaian. Daripada menanggapi atau bereaksi terhadap pikiran dan perasaan tersebut, cukup akui bahwa Anda memilikinya, lalu lepaskan.'
      })
    }
  }

  handleLine02 () {
    if (this.state.line04) {
      this.setState({
        line04: ''
      })
    } else {
      this.setState({
        line04: 'Berbicara kepada orang yang Anda percayai dapat membantu. Terus jalin komunikasi dengan orang terdekat Anda. Beri tahu mereka bagaimana perasaan Anda dan apa saja yang mengganggu pikiran Anda.'
      })
    }
  }

  handleLine03 () {
    if (this.state.ul01) {
      this.setState({
        ul01: '',
        li01: '',
        li02: '',
        li03: '',
        li04: '',
        li05: '',
        li06: '',
        li07: '',
        ul02: '',
        li08: '',
        display: 'hiden'
      })
    } else {
      this.setState({
        ul01: 'Lakukan:',
        li01: 'Bangun dan tidur pada waktu yang sama setiap hari.',
        li02: 'Jaga kebersihan diri.',
        li03: 'Makan makanan yang sehat dengan waktu yang teratur.',
        li04: 'Olahraga teratur. Olahraga ringan selama 3-4 menit, seperti berjalan atau peregangan, akan membantu.',
        li05: 'Bagi waktu untuk bekerja dan beristirahat.',
        li06: 'Sisihkan waktu untuk melakukan hal-hal yang Anda sukai.',
        li07: 'Istirahat secara teratur dari aktivitas yang berkaitan dengan layar.',
        ul02: 'Hindari:',
        li08: 'Menggunakan alkohol dan obat-obatan sebagai cara untuk mengatasi ketakutan, kegelisahan, kebosanan, dan isolasi sosial.',
        display: ''
      })
    }
  }

  handleLine04 () {
    if (this.state.display02) {
      this.setState({
        display02: ''
      })
    } else {
      this.setState({
        display02: 'hiden'
      })
    }
  }

  handleLine05 () {
    if (this.state.display03) {
      this.setState({
        display03: ''
      })
    } else {
      this.setState({
        display03: 'hiden'
      })
    }
  }

  render () {
    return (
      <article className='bg-light p-2'>
        <h5>Jaga Kesehatan Mental</h5>
        <h6>Dari <a href='https://www.who.int/teams/mental-health-and-substance-use/covid-19'>who.int</a></h6>
        <p>Masalah kesehatan mental merupakan hal yang umum. Berikut beberapa tips untuk mengurangi stres dan meningkatkan kebugaran</p>
        <hr />
        <div className='scroll'>
          <h4 className='koping' onClick={this.handleLine01}>Berhenti sejenak dan bernapaslah</h4>
          <p>{this.state.line01}</p>
          <p>{this.state.line02}</p>
          <p>{this.state.line03}</p>
          <hr />

          <h4 className='koping' onClick={this.handleLine02}>Tetap terhubung dengan orang terdekat</h4>
          <p>{this.state.line04}</p>
          <hr />

          <h4 className='koping' onClick={this.handleLine03}>Jaga rutinitas yang sehat</h4>
          <h5>{this.state.ul01}</h5>
          <div className={`${this.state.display}`}>
            <ul>
              <li>{this.state.li01}</li>
              <li>{this.state.li01}</li>
              <li>{this.state.li01}</li>
              <li>{this.state.li01}</li>
              <li>{this.state.li01}</li>
              <li>{this.state.li01}</li>
              <li>{this.state.li01}</li>
            </ul>
            <h5>{this.state.ul02}</h5>
            <ul>
              <li>{this.state.li08}</li>
            </ul>
          </div>
          <hr />

          <h4 className='koping' onClick={this.handleLine04}>Berbaik hati kepada diri sendiri dan orang lain</h4>
          <div className={`${this.state.display02}`}>
            <p>Mengharapkan terlalu banyak hal dari diri Anda saat merasa kesulitan. Akui bahwa pada waktu-waktu tertentu Anda lebih produktif daripada biasanya.</p>
            <p>Coba untuk kurangi waktu menonton, membaca, dan mendengarkan berita yang membuat Anda merasa gelisah atau tidak nyaman. Cari informasi terbaru dari sumber tepercaya pada waktu tertentu saja dalam sehari.</p>
            <p>Membantu orang lain juga dapat memberi pengaruh yang baik untuk Anda. Jika Anda mampu, tawarkan dukungan kepada orang-orang yang mungkin memerlukannya di komunitas Anda.</p>
          </div>
          <hr />

          <h4 className='koping' onClick={this.handleLine05}>Cari bantuan jika diperlukan</h4>
          <div className={`${this.state.display03}`}>
            <p>Jangan ragu untuk mencari bantuan tenaga profesional jika Anda merasa membutuhkannya. Mencari bantuan dari petugas kesehatan lokal merupakan awal yang bagus. Saluran bantuan juga dapat menjadi sumber dukungan.</p>
          </div>
          <hr />
        </div>
      </article>
    )
  }
}
