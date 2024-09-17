import NavbarComponent from "./components/FarmerNav"
import HeroSection from "./components/FarmerHero"
import GovtSchemes from "./components/FarmerGovt"
import CompanyAnnouncements from "./components/FarmerCompany"
import FarmingUpdates from "./components/FarmingTweets"
export default function FDashboard(){
    return<>
        <NavbarComponent/>
        <HeroSection />
        <GovtSchemes />
        <CompanyAnnouncements/>
        <FarmingUpdates/>
    </>
}