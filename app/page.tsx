import "@/styles/components/home/styles.css"
import LeftSection from "@/components/home/LeftSection";
import MiddleSection from "@/components/home/MiddleSection";
import RightSection from "@/components/home/RightSection";
/* 
  TODO: 
      -ADMIN PAGE: 
        - SETTINGS [Profile Background Change, USER INVITE SYSTEM, GOOGLE AUTH, ACCOUNT VALIDATION, NOTIFICATIONS] 
        - MANAGE FEATURES[STORE, FORUMS, GAMES, CATEGORIES]
        - USERS[Affiliates System]
*/

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
