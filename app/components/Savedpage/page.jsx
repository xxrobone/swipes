import SavedJobs from "../savedJobs/savedJobs";
import Header from '@/components/header/Header.jsx'
import Footer from '@/components/footer/Footer.jsx'

export default function Savedpage() {
  return (
    <>
      <main>
        <Header />
        <SavedJobs />
        <Footer />
      </main>
    </>
  );
}