"use client"
import { Fragment } from 'react'
import Image from "next/image";
import '../../css/blocImagePrincipale.css'

const BlocImagePrincipale = () => {
    const openRouteMap = () => {
        const destination = encodeURIComponent("43.568676, 2.569415"); // Chalet 1
        const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
    
        window.open(url, "_blank");
    };

    const openRouteWaze = () => {
        const lat = 43.568676;
        const lng = 2.569415;
    
        const url = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    
        window.open(url, "_blank");
    };

    return (
        <Fragment>
            {/* HERO — Bienvenue */}
            <section id="bienvenue" className="hero">
                {/* Background image */}
                <div className="hero__bg">
                    <Image
                        src={"/images/chalet1/chalet1.png"}
                        width={1920}
                        height={1080}
                        alt="Chalet  Anglès"
                        className="hero__img"
                        priority
                    />
                    <div className="hero__overlay" />
                </div>

                

                {/* Content */}
                <div className="container hero__content">
                    <div className="hero__inner">
                        {/* Title */}
                        <h1 className="hero__title">Location de chalet à Anglès dans le Tarn</h1>
                        {/* Title */}
                        <h2 style={{color: "white"}}>
                            🎉 Bienvenue dans <em>notre chalet</em>
                        </h2>

                        {/* Text */}
                        <p className="hero__text">
                        Nous sommes ravis de vous accueillir dans notre logement et espérons
                        que vous passerez un séjour{" "}
                        <strong>agréable, reposant et plein de bons souvenirs</strong>.
                        </p>

                        {/* Features */}
                        <div className="hero__features">
                        {[
                            "Trouver les informations utiles",
                            "Profiter pleinement du logement",
                            "Découvrir les bonnes adresses",
                        ].map((item) => (
                            <div key={item} className="hero__feature">
                            <span className="hero__star">✦</span>
                            {item}
                            </div>
                        ))}
                        </div>

                        
                        {/* Réservation */}
                        <div className='contentBtnDirection'>
                            <button className="btn-direction btnLeboncoin" style={{width: '80%'}} onClick={() => window.open("https://www.leboncoin.fr/ad/locations_saisonnieres/3200067393", "_blank")}>
                                <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEX/////7+j/mm3/eDD/ei/Xbjf/YQD/aQD/bA3/bgzbZBuMOwD/bhT/cBPbZSCMPQmWQQrNV4v2AAAAQUlEQVR4AWJhwANGJQFdzaEBACAABCE/uP/KVo9MANz20/bhbnDF3RiI5dTAGBgLYkEsiAWxIAZiIAZiIAZioHYeIfcAyUnhYGEAAAAASUVORK5CYII="}/>
                                Réservation le bon coin ➤
                            </button>
                            
                            <button className="btn-direction btnAirBnb" style={{width: '80%'}} onClick={() => window.open("https://www.airbnb.fr/rooms/1506519373244027742", "_blank")}>
                                <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIACAAIAMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAAFBgIB/8QALBAAAgIABAQDCQEAAAAAAAAAAQIDBAAFERITITFBBoGRFCIyUVNhcXKhFf/EABoBAAIDAQEAAAAAAAAAAAAAAAIEAAEDBQf/xAAlEQACAQQBAgcBAAAAAAAAAAABAgADESExBBJREyJBYXGBkQX/2gAMAwEAAhEDEQA/AAYSnp0fyzL0tRz2bU/s9SuBxJdm4lj0VR3J/mCAvmK8jkGmVRF6mbQ1rZPtPMyoJVjgsVZ/aKlgHhybNpDDqrDsR/cQi2RJx+QahZHXpZdje9EHtEcDGpOZ5AEnsB3xJU01qii1Rlslla1bL0E16UJvLTycgoA6kD3fXGpGLTj065L+OF6mfCjXlHrf0vv8nNaghrf50VlbNbMVM1KUpsKzx8ipB6Ej3fTFAYtLqcgh/GK9LU8MN+U+vvbf7M3zHIgg9we2M515a+F41kzqFmQSNEryxxfUdVJVfUa+WDTcS/osV4xANr2BPYE2JhfDzyZhet0pw8i5gh48gHONgdwkP2DdfziLk2gc4LQppVXBTQ7jXT9jUniNnoXKlGAPGlBBwZCNOIxO4yD7E9PxiNg2lcACtTeq2S+x2Ggv0NwXieNY85lYII3lRJpIvpuygsPU6+eKfc0/nMW44F7gEgHuAbAysikeGRZYnZJEOqsp0IPzGBjjKrAqwuDH7ee5pcgeCxbJjf41VFTf+xUDXzwRcmK0uBxqTB0XI1km3xc4kqZ7mdOBIK9siJPgVkV9n67gdPLEDESVeBxqrF3XJ3ki/wA2OYhLJJNK8szs8jnVmY6knAxpVVFCqLAT/9k="}/> 
                                Réservation Airbnb ➤
                            </button>
                        </div>


                        {/* Direction */}
                        <div className='contentBtnDirection' style={{paddingTop: '3%'}}>
                            <button className="btn-direction" style={{width: '80%'}} onClick={openRouteMap}>
                                🚗 Direction le chalet ➤ Map
                            </button>
                            
                            <button className="btn-direction" style={{width: '80%'}} onClick={openRouteWaze}>
                                🚗 Direction le chalet ➤ Waze
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default BlocImagePrincipale
