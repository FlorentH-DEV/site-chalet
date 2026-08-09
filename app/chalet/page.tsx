import { Fragment } from "react/jsx-runtime"
import Navbar from '../../component/ui/Navbar'
import BlocImagePrincipale from '../../component/chaletOne/BlocImagePrincipale'
import ImageCarouselModal from '../../component/chaletOne/ImageCarrousselModal'
import ADecouvrir from '../../component/chaletOne/DecouvrirSection'
import ArrivalSection from '../../component/chaletOne/ArrivalSection'
import { EquipmentSection } from '../../component/chaletOne/EquipementSection'
import DepartSection from '../../component/chaletOne/DepartSection'
import Footer from '../../component/ui/Footer'
import { AdressesSection } from '../../component/chaletOne/AdresseSection'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Location chalet à Anglès – Lac de la Raviège - Lac du saint peyres - Haut-Languedoc",
    description:
        "Découvrez notre chalet à Anglès, dans le Tarn. Location de vacances, nature, activités et découverte de la région au bord du l'étang du salvant.",
};

export default function Chalet () {
    return (
        <Fragment>  
            <Navbar/> 

            <ImageCarouselModal/>

            <BlocImagePrincipale/>

            <ArrivalSection/>

            <EquipmentSection/>

            <AdressesSection/> 
            
            <ADecouvrir/>

            <DepartSection/>
            
            <Footer/> 
        </Fragment>
    )
}
