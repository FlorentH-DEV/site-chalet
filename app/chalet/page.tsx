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
    title: "Location de chalet à Anglès | Chalet avec vue sur l'étang du salvant",
    description:
        "Découvrez notre chalet à Anglès, dans le Tarn. Location de vacances, nature, activités et découverte de la région.",
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
