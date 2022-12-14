import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/previousHealthRecords.module.css'
import mypic from '../public/blackboxgraph.png'
import home from '../public/home.png'
import notf from '../public/notf.png'
import search from '../public/search.png'
import prof from '../public/prof.png'
import done from '../public/done.png'
import Link from 'next/link'

function previousHealthRecords() {
  return (
    <div>

<Head>
        <title>Emergent</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
       
      <div className={styles.Topbar} >

            <div className={styles.Searchbox}>

              <div className={styles.homebox3}>
                <Image
                    src={search}
                />
              </div>
              
              <p  className={styles.Searchboxtext}>Search</p>
            </div>


     <div className={styles.Topbar2}>

     <Link href="/"><div className={styles.homebox}> 
             <Image
             src={home}
             />
             </div></Link>
             <div className={styles.homebox2}>
              <Image
              src={notf}
              />
              
               </div>
               <div className={styles.homebox4}>
                <Image
                src={prof}
                />
               </div>
             <p className={styles.hometxt}>Surya Narayanan</p>
             <div className={styles.homebox2}> 
             <Image
             src={done}
             />
             </div>

     </div>    
    </div>

    <div className={styles.backgroundBox}>
        <h1 className={styles.heading}>Surya’s Health Records</h1>

        <div className={styles.dataGrid}>
            <div className={styles.liveDataCard}>
                <div className={styles.flexRow}>
                    <div className={styles.dataName}>Hematology Report</div>
                    <div className={styles.dataTime}>25-MAY-2022</div>
                </div>

                <div className={styles.recordID}>Test ID: SURYANAYA0004</div>

                <div className={styles.detailsData}>Hosp/Lab: Graham Nursing Home</div>
                <div className={styles.detailsData}>Ref. By: Dr. Sankar M.S.,M.Ch(Uro)</div>

                <Link href="/detailedReport"><div className={styles.getDetails}>Get Details</div></Link>
            </div>

            <div className={styles.liveDataCard}>
                <div className={styles.flexRow}>
                    <div className={styles.dataName}>Culture Report</div>
                    <div className={styles.dataTime}>25-MAY-2022</div>
                </div>

                <div className={styles.recordID}>Test ID: SURYANAYA0004</div>

                <div className={styles.detailsData}>Hosp/Lab: Graham Nursing Home</div>
                <div className={styles.detailsData}>Ref. By: Dr. Sankar M.S.,M.Ch(Uro)</div>

                <div className={styles.getDetails}>Get Details</div>
            </div>

            <div className={styles.liveDataCard}>
                <div className={styles.flexRow}>
                    <div className={styles.dataName}>Culture Report</div>
                    <div className={styles.dataTime}>07-DEC-2021</div>
                </div>

                <div className={styles.recordID}>Test ID: 2200228447</div>

                <div className={styles.detailsData}>Hosp/Lab: Graham Nursing Home</div>
                <div className={styles.detailsData}>Ref. By: Dr. Sankar M.S.,M.Ch(Uro)</div>

                <div className={styles.getDetails}>Get Details</div>
            </div>

            <div className={styles.liveDataCard}>
                <div className={styles.flexRow}>
                    <div className={styles.dataName}>Abdominal Ultrasonogram</div>
                    <div className={styles.dataTime}>07-DEC-2021</div>
                </div>

                <div className={styles.recordID}>Test ID: SURYANAYA0004</div>

                <div className={styles.detailsData}>Hosp/Lab: Graham Nursing Home</div>
                <div className={styles.detailsData}>Ref. By: Dr. Sankar M.S.,M.Ch(Uro)</div>

                <div className={styles.getDetails}>Get Details</div>
            </div>

            <div className={styles.liveDataCard}>
                <div className={styles.flexRow}>
                    <div className={styles.dataName}>Hematology Report</div>
                    <div className={styles.dataTime}>07-DEC-2021</div>
                </div>

                <div className={styles.recordID}>Test ID: SURYANAYA0004</div>

                <div className={styles.detailsData}>Hosp/Lab: Graham Nursing Home</div>
                <div className={styles.detailsData}>Ref. By: Dr. Sankar M.S.,M.Ch(Uro)</div>

                <div className={styles.getDetails}>Get Details</div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default previousHealthRecords