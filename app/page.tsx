import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Location chalet à Anglès – Lac de la Raviège - Lac du saint peyres - Haut-Languedoc",
    description:
        "Découvrez notre chalet à Anglès, dans le Tarn 81260. Location de vacances, nature, activités et découverte de la région au bord du l'étang du salvant dans le haut-languedoc.",
};

export default function Home() {
  redirect("/chalet");
}
