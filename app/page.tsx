import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { Fragment } from "react/jsx-runtime";
import Navbar from "@/component/ui/Navbar";
import ImageCarouselModal from "@/component/chaletOne/ImageCarrousselModal";
import BlocImagePrincipale from "@/component/chaletOne/BlocImagePrincipale";
import ArrivalSection from "@/component/chaletOne/ArrivalSection";
import { EquipmentSection } from "@/component/chaletOne/EquipementSection";
import { AdressesSection } from "@/component/chaletOne/AdresseSection";
import DecouvrirSection from "@/component/chaletOne/DecouvrirSection";
import DepartSection from "@/component/chaletOne/DepartSection";
import Footer from "@/component/ui/Footer";

export const metadata: Metadata = {
    title: "Location chalet à Anglès – Lac de la Raviège - Lac du saint peyres - Haut-Languedoc",
    description:
        "Découvrez notre chalet à Anglès, dans le Tarn 81260. Location de vacances, nature, activités et découverte de la région au bord du l'étang du salvant dans le haut-languedoc.",
};

export default function Home() {
  return(
    <Fragment>  
        <Navbar/> 

        <ImageCarouselModal/>

        <BlocImagePrincipale/>

        <ArrivalSection/>

        <EquipmentSection/>

        <AdressesSection/> 
        
        <DecouvrirSection/>

        <DepartSection/>
        
        <Footer/> 
    </Fragment>
  )
}
