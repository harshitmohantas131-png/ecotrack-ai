import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import Home from './components/Home';
import Alerts from './components/Alerts';
import CarbonAssistant from './components/CarbonAssistant';
import Recommendation from './components/Recommendation';
import CarbonScore from './components/CarbonScore';
import EcoTips from './components/EcoTips';
import EcoBadges from './components/EcoBadges';
import EcoChallenges from './components/EcoChallenges';
import ProgressTracker from './components/ProgressTracker';
import DailyHabits from './components/DailyHabits';
import Timeline from './components/Timeline';
import ImpactComparison from './components/ImpactComparison';
import SustainabilityMythsFacts from './components/SustainabilityMythsFacts';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LoadingState from './components/LoadingState';
import { calculateCarbonScore } from './utils/score';

const translations = {
  en: {
    homeSubtitle: "Understand, track, and reduce your carbon footprint through simple everyday choices.",
    alertTips: [
      "Carry reusable bottles instead of single-use plastics.",
      "Switch off appliances when not in use.",
      "Using public transport can significantly reduce emissions.",
      "Small sustainable actions create big impacts."
    ],
    footerText1: "Built for sustainability awareness and climate literacy 🌱",
    footerText2: "Designed with React and beginner-friendly interactive logic.",
    footerText3: "Prepared for future Gemini AI and Google Services integration.",
    carbonScoreTitle: "Carbon Score",
    ecoChallengesTitle: "Weekly Eco Challenges",
    faqTitle: "Frequently Asked Questions"
  },
  hi: {
    homeSubtitle: "सरल रोजमर्रा के विकल्पों के माध्यम से अपने कार्बन फुटप्रिंट को समझें, ट्रैक करें और कम करें।",
    alertTips: [
      "सिंगल-यूज़ प्लास्टिक के बजाय दोबारा इस्तेमाल होने वाली बोतलें रखें।",
      "उपयोग में न होने पर उपकरणों को बंद कर दें।",
      "सार्वजनिक परिवहन का उपयोग उत्सर्जन को काफी कम कर सकता है।",
      "छोटे टिकाऊ कार्य बड़े प्रभाव पैदा करते हैं।"
    ],
    footerText1: "स्थिरता जागरूकता और जलवायु साक्षरता के लिए निर्मित 🌱",
    footerText2: "React और शुरुआती-अनुकूल इंटरैक्टिव लॉजिक के साथ डिज़ाइन किया गया।",
    footerText3: "भविष्य के Gemini AI और Google सेवाओं के एकीकरण के लिए तैयार।",
    carbonScoreTitle: "कार्बन स्कोर",
    ecoChallengesTitle: "साप्ताहिक पर्यावरण चुनौतियाँ",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न"
  },
  od: {
    homeSubtitle: "ସରଳ ଦୈନନ୍ଦିନ ପସନ୍ଦ ମାଧ୍ୟମରେ ଆପଣଙ୍କର କାର୍ବନ ଫୁଟପ୍ରିଣ୍ଟକୁ ବୁଝନ୍ତୁ, ଟ୍ରାକ୍ କରନ୍ତୁ ଏବଂ କମ କରନ୍ତୁ।",
    alertTips: [
      "ଥରେ ବ୍ୟବହାର ହେଉଥିବା ପ୍ଲାଷ୍ଟିକ ବଦଳରେ ପୁନଃ ବ୍ୟବହାରଯୋଗ୍ୟ ବୋତଲ ନିଅନ୍ତୁ।",
      "ବ୍ୟବହାର ନହେବା ସମୟରେ ଉପକରଣଗୁଡ଼ିକୁ ବନ୍ଦ କରନ୍ତୁ।",
      "ସାର୍ବଜନୀନ ପରିବହନ ବ୍ୟବହାର ଦ୍ୱାରା ନିର୍ଗମନ ଯଥେଷ୍ଟ କମିପାରେ।",
      "ଛୋଟ ସ୍ଥାୟୀ ପଦକ୍ଷେପ ବଡ଼ ପ୍ରଭାବ ସୃଷ୍ଟି କରେ।"
    ],
    footerText1: "ସ୍ଥାୟୀତ୍ୱ ସଚେତନତା ଏବଂ ଜଳବାୟୁ ସାକ୍ଷରତା ପାଇଁ ନିର୍ମିତ 🌱",
    footerText2: "ରିଆକ୍ଟ ଏବଂ ପ୍ରାରମ୍ଭିକ-ଅନୁକୂଳ ଇଣ୍ଟରାକ୍ଟିଭ୍ ଲଜିକ୍ ସହିତ ଡିଜାଇନ୍ ହୋଇଛି।",
    footerText3: "ଭବିଷ୍ୟତର ଜେମିନି AI ଏବଂ ଗୁଗୁଲ୍ ସେବା ଏକୀକରଣ ପାଇଁ ପ୍ରସ୍ତୁତ।",
    carbonScoreTitle: "କାର୍ବନ ସ୍କୋର",
    ecoChallengesTitle: "ସାପ୍ତାହିକ ଇକୋ ଚ୍ୟାଲେଞ୍ଜ",
    faqTitle: "ବାରମ୍ବାର ପଚରାଯାଉଥିବା ପ୍ରଶ୍ନ"
  }
};

function App() {
  const [analysisData, setAnalysisData] = useState(null);
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setAnalysisData(data);
      setIsLoading(false);
    }, 1500);
  };

  const currentTranslations = translations[language];
  const score = calculateCarbonScore(analysisData);

  return (
    <>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <Alerts tips={currentTranslations.alertTips} />
      <Home subtitle={currentTranslations.homeSubtitle} />
      <CarbonAssistant onAnalyze={handleAnalyze} />
      {isLoading ? (
        <LoadingState />
      ) : (
        <>
          <Recommendation data={analysisData} />
          <CarbonScore data={analysisData} score={score} title={currentTranslations.carbonScoreTitle} />
          <EcoTips data={analysisData} score={score} />
          <EcoBadges data={analysisData} score={score} />
        </>
      )}
      <EcoChallenges title={currentTranslations.ecoChallengesTitle} />
      <ProgressTracker />
      <DailyHabits />
      <Timeline />
      <ImpactComparison />
      <SustainabilityMythsFacts />
      <FAQ titleText={currentTranslations.faqTitle} />
      <Footer />
    </>
  );
}

export default App;
