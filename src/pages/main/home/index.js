import React, { Component } from 'react'
import axios from 'axios'
import './home.css'
import CardStatus from '../../../components/CardStatus'
import CardInfo from '../../../components/CardInfo'
class Home extends Component {
    constructor(){
        super()
        this.state = {
            globalStatus: {
                NewConfirmed: 0,
                TotalConfirmed: 0,
                NewDeaths: 0,
                TotalDeaths: 0,
                NewRecovered: 0,
                TotalRecovered: 0
            },
            contries : [],
            isLoading: false
        }
    }

    getGlobalStatus(){
         this.setState({
           isLoading: true,
         });
         axios.get("https://api.covid19api.com/summary").then((res) => {
           this.setState({
             globalStatus: res.data.Global,
             contries: res.data.Countries,
             isLoading: false,
           });
         });
    }
    componentDidMount(){
       this.getGlobalStatus()
    }

    render() {
        return (
          <div className="bg-dark home">
            <div className="container">
              {/* {this.state.isLoading && <h1>loading......</h1>} */}
              <header>
                <div className="text mb-5">
                  <h1 className="text-white mb-3">Kawal informasi seputar COVID-19</h1>
                  <h6 className="text-white">Situs ini merupakan sumber informasi inisiatif sukarela warganet Indonesia pro-data, terdiri dari praktisi kesehatan, akademisi & profesional.</h6>
                </div>
                
                <h2 className="text-white mb-4">Jumlah Kasus di Dunia Saat Ini</h2>
                <div className="row mb-5">
                  <div className="col-md-3">
                    <CardStatus
                      title="New Confirmed"
                      data={this.state.globalStatus.NewConfirmed}
                      color="orange"
                    />
                  </div>
                  <div className="col-md-3">
                    <CardStatus
                      title="Total Confirmed"
                      data={this.state.globalStatus.TotalConfirmed}
                      color="blue"
                    />
                  </div>
                  <div className="col-md-3">
                    <CardStatus
                      title="Total Deaths"
                      data={this.state.globalStatus.TotalDeaths}
                      color="red"
                    />
                  </div>
                  <div className="col-md-3">
                    <CardStatus
                      title="Total Recovered"
                      data={this.state.globalStatus.TotalRecovered}
                      color="green"
                    />
                  </div>
                </div>

                <h2 className="text-white mb-4">Informasi Terkini</h2>
                  <div className="row">
                    <div className="col-md-11">
                      <CardInfo
                        info="MPASI Anak dalam Kondisi Darurat"
                        desc="Di Indonesia, kematian anak di bawah usia 3 tahun dan 5 tahun akibat terserang COVID-19 sangat tinggi, yakni 3% dan 5% untuk masing-masing kelompok usia, tertinggi di ASEAN. Sementara itu, di negara lain, terutama negara maju, tingkat kematian anak nyaris nol. Mengapa demikian?


                        Ternyata, setelah diselidiki, mayoritas anak yang meninggal karena COVID-19 ini mengalami gizi buruk, atau malnutrisi, terutama mikronutrien alias mineral dan vitamin. Menurut catatan Kementerian Kesehatan yang terbaru, mayoritas anak mengalami anemia akibat defisiensi zat besi dan defisiensi vitamin D sehingga daya tahan tubuh mereka pun tidak cukup kuat untuk melawan penyakit.
                        
                        Jadi bagaimana? Apakah anak harus diberi tambahan vitamin? Menjawab ini, riset membuktikan bahwa suplementasi vitamin, apalagi bila diberikan secara tidak rutin, tidak berpengaruh pada kebutuhan mikronutrien anak. Selain itu, suplemen vitamin semakin sulit didapat dan mahal harganya. Yang paling berpengaruh, dan yang terbaik, adalah memastikan bahwa anak, terutama bayi di bawah usia 24 bulan, mendapatkan Menu 4 Bintang.
                        
                        Jadi apakah Menu 4 Bintang itu?
                        
                        Makanan Pendamping 4 Bintang adalah makanan yang seimbang gizi dan porsinya. Bintang melambangkan kandungan gizi yang wajib ada dalam menu makanan anak, yakni:
                        
                        Karbohidrat
                        Lemak
                        Protein
                        Mineral
                        Nah, bagaimana caranya kita membuat makanan 4 bintang ini, terutama untuk bayi di bawah usia 24 bulan?
                        
                        Caranya mudah. Pastikan menu makanan anak lengkap. Ada makanan pokok, ada lauk, ada sayuran dan buah. Itu saja sudah cukup."
                      />
                    </div>
                    <div className="col-md-11">
                      <CardInfo
                        info="Kisah Mila: Perjuangan di Ruang Isolasi dengan Status PDP"
                        desc="28 Mei 2020

                        Saya mulai tidak enak badan: meriang, badan sakit semua, tiba-tiba ada demam tinggi. Saya minum obat penurun panas, tapi demam tetap naik turun. Saya coba banyak istirahat, banyak makan dan minum juga. Dua hari kemudian mulai mual dan diare, tapi masih saya tahan untuk tidak ke dokter.
                        
                        1 Juni 2020
                        
                        Malam hari saya memutuskan ke RS Permata Pamulang melalui IGD karena kondisi memburuk: demam naik turun, mual, muntah, lemas, diare, dan kini ada pendarahan dari hidung. Saya langsung ditangani tenaga medis: pasang infus, obat anti pendarahan, cek darah, dan ditanya kronologi gejalanya. Setelah hasil cek darah keluar, terlihat bahwa trombosit saya rendah (hanya sekitar 35.000, normalnya 150-400 ribu). Saya didiagnosa demam berdarah dan perlu menginap.
                        
                        Saya juga diberi info bahwa harus rapid tes COVID-19 untuk prasyarat rawat inap. Beberapa jam kemudian diberi tahu bahwa hasilnya reaktif sehingga saya harus dirawat di ruang isolasi."
                      />
                    </div>
                    <div className="col-md-11">
                      <CardInfo
                        info="Kisah Dania: Berjuang Sembuh dengan Diagnosa Tidak Pasti"
                        desc="Saya konsultasi online dengan dokter.  Saya diminta untuk tes DB kembali di hari ketiga demam, yaitu hari Minggu pagi. Di tes ulang ini hasil DB kembali negatif. Linu badan dan sakit kepala semakin tidak tertahankan. Nafsu makan hilang. Dokter meminta lagi untuk tes darah ulang di hari kelima (Selasa), dan saya langsung bawa hasilnya ke dokter internis yang sudah mendampingi saya dari hari pertama.

                        “Sudah pasti ini ruam karena virus,” ujar dokter yang memeriksa saya sembari berkata kemungkinan diagnosanya banyak. Setelah dia memeriksa tenggorokan saya, dia berkata ada infeksi sekunder. “Karena badan kamu sedang lemah, akhirnya mudah terkena infeksi lainnya, radang tenggorokannya parah ini,” tambahnya.
                        
                        Dokter memberi saya antibiotika untuk radang tenggorokan. Ketika saya tanya mengapa tidak sekalian diberikan obat anti radang, dia berkata lebih baik tidak pakai anti radang dulu untuk jaga-jaga jika ternyata saya terkena COVID-19. “Antibiotika tiga hari saja. Kalau setelah dua hari antibiotika tidak ada perbaikan, lebih baik tes semuanya saja ya, termasuk swab (COVID-19),” ujarnya. Saya mengangguk.
                        
                        Selama di rumah, saya memberlakukan protokol seakan-akan terkena COVID-19. Saya mengurung diri di kamar, mencuci alat makan saya sendiri, minum hanya dari botol minum saya, dan sanitasi barang-barang sesudah saya pakai karena di rumah ada lansia. 

                        Saya minum vitamin dan air putih yang banyak, serta memaksakan makan walaupun sengsara di lidah maupun leher. Selain antibiotika dari dokter, gejala lainnya hanya pakai obat turun panas dan vitamin B kompleks. Setelah hari kedua, dokter menanyakan perkembangan kondisi saya. Saya utarakan bahwa radang tenggorokannya masih sakit untuk menelan ludah sekalipun. “Kalau sampai besok masih sakit, langsung tes lab ya,” ujarnya.

                        Saya tidur malam itu dengan sudah menyiapkan baju ganti jika besoknya perlu langsung rawat inap bila positif COVID-19. 

                        Keesokan paginya, saya bangun dan langsung mencoba menelan ludah. Anehnya, ternyata tidak sakit. Saya coba minum air yang biasanya sakit, juga bisa. Saya langsung memberitahu dokter, “Dok, ini kondisi saya pagi ini. Apakah masih perlu pergi tes?” 

                        “Kalau sudah sembuh ya tidak perlu tes. Istirahat saja plus vitamin supaya cepat pulih,” ujarnya. Saya sumringah. Sisa sakit leher masih ada, tetapi yang pasti sudah jauh lebih baik. Nafsu makan saya sudah mulai kembali. Total masa sakit hingga pulih total: 11 hari. "
                      />
                    </div>
                  </div>
              </header>
            </div>
          </div>
        );
    }
}
export default Home