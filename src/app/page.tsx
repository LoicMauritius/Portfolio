import { redirect } from "next/navigation";

export default function Home() {
  redirect("/accueil");
  return null; // On ne retourne rien car la redirection est immédiate
}