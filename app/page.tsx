import "@/app/styles/components/home/styles.css"
import LeftSection from "@/app/components/home/LeftSection";
import MiddleSection from "@/app/components/home/MiddleSection";
import RightSection from "@/app/components/home/RightSection";
// import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function Home() {
  return (
    <main>
      <h1>Ourlime</h1>
      <LeftSection />
      <MiddleSection />
      <RightSection />

    </main>
  );
}
