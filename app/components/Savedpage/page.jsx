import SavedJobs from "../savedJobs/savedJobs";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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