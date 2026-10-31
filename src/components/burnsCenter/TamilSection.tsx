import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function TamilSection() {
  return (
    <section id="tamil" className="section-container py-10 bg-[#080808]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-orange-600 mb-12">தீக்காய சிகிச்சை வழிகாட்டி</h2>

        <div className="max-w-5xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full space-y-4">

            <AccordionItem value="causes" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">காரணங்கள்?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-white/80">எங்கு, எதனால் ஏற்படுகிறது?</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="severity" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">காயத்தின் அளவு எவ்வாறு நிர்ணையிக்கப்படுகிறது?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="text-orange-600 mb-2">காயத்தின் ஆழம்?</h4>
                    <p>தீக்காயத்தின் ஆழத்தை அடிப்படையாகக் கொண்டு மதிப்பீடு செய்யப்படுகிறது.</p>
                  </div>
                  <div>
                    <h4 className="text-orange-600 mb-2">பரப்பளவு எவ்வாறு தீர்மானிக்கப்படுகிறது?</h4>
                    <p>உடலின் மொத்த பரப்பளவில் எவ்வளவு சதவீதம் பாதிக்கப்பட்டுள்ளது என்பதை அடிப்படையாகக் கொண்டு தீர்மானிக்கப்படுகிறது.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="lung-injury" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">நுரையீரல் காயம் என்றால் என்ன?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="text-orange-600 mb-2">கார்பன் மோனாக்ஸைடு வாயுவினால் ஏற்படும் சேதம்?</h4>
                    <p>கார்பன் மோனாக்ஸைடு விஷவாயு உள்ளிழுப்பதால் நுரையீரல் மற்றும் உடலுக்கு கடுமையான பாதிப்பு ஏற்படலாம்.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="symptoms" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">தீக்காயம் உண்டானதற்கான அறிகுறிகள்?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="text-orange-600 mb-2">நுரையீரலில் காயங்கள் ஏற்பட்டவர்களுக்கு உண்டான அறிகுறிகள்?</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>மூச்சு விடுவதில் சிரமம்</li>
                      <li>இருமல் மற்றும் மூச்சுத்திணறல்</li>
                      <li>கரகரப்பான குரல்</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-orange-600 mb-2">வாய் மற்றும் உதடுகளில் தீக்காயங்கள்?</h4>
                    <p>வாய் மற்றும் உதடுகளில் தீக்காயம் இருப்பது நுரையீரல் பாதிப்பின் அறிகுறியாக இருக்கலாம்.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="determinants" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">தீர்மானிக்கக்கூடியவை</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>காயத்தின் ஆழம்</li>
                  <li>காயத்தின் பரப்பளவு</li>
                  <li>நுரையீரல் காயம்</li>
                  <li>கார்பன் மோனாக்ஸைடு விஷவாயுவின் அளவு</li>
                  <li>நீரிழிவு</li>
                  <li>HIV</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stages" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">தீக்காயத்தின் நிலைகள்?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="text-orange-600 mb-2">மருத்துவ உதவி?</h4>
                    <p>தீக்காயத்தின் தீவிரத்தை பொறுத்து மருத்துவ உதவி அவசியம்.</p>
                  </div>
                  <div>
                    <h4 className="text-orange-600 mb-2">ஆபத்து குறைந்த தீக்காயம் (Minor Burns)?</h4>
                    <p>சிறிய அளவிலான தீக்காயங்களுக்கு முதலுதவி மற்றும் வெளிநோயாளர் சிகிச்சை போதுமானது.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hospital-treatment" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">மருத்துவமனையில் செய்ய வேண்டியவை?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="text-orange-600 mb-2">தீக்காய சிகிச்சை (Burns Management)?</h4>
                    <p>மருத்துவமனையில் முறையான சிகிச்சை மற்றும் கண்காணிப்பு அவசியம்.</p>
                  </div>
                  <div>
                    <h4 className="text-orange-600 mb-2">அறுவை சிகிச்சை</h4>
                    <p>கடுமையான தீக்காயங்களுக்கு தோல் மாற்று அறுவை சிகிச்சை தேவைப்படலாம்.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mortality" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">உயிர்சேதம் உண்டாவதற்கான காரணங்கள்?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-white/80">
                  <div>
                    <h4 className="text-orange-600 mb-2">பின்விளைவுகள்?</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>நோய்த்தொற்று</li>
                      <li>திரவ இழப்பு</li>
                      <li>உறுப்பு செயலிழப்பு</li>
                      <li>வடு உருவாதல்</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-orange-600 mb-2">வடு ஏற்படுவதை எவ்வாறு குறைக்கலாம்?</h4>
                    <p>முறையான சிகிச்சை, பிசியோதெரபி மற்றும் வடு மேலாண்மை மூலம் வடு உருவாவதை குறைக்கலாம்.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="first-aid" className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-md">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-orange-700">முதல்உதவி</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-6 text-white">
                  <Card className="bg-green-500/10 border-green-500/30 text-white">
                    <CardHeader>
                      <CardTitle className="text-green-400">ஆபத்து குறைந்த தீக்காயம் (Minor Burns)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="list-disc list-inside space-y-2">
                        <li>குளிர்ந்த நீரினால் காயம் பட்ட இடத்தை கழுவி சுத்தம் செய்யவும் (ஐஸ் தண்ணீர் உபயோகிக்கக்கூடாது)</li>
                        <li>தீக்காயம் பட்டவுடன் பாதிக்கப்பட்ட இடத்தை குறைந்தது 5 நிமிடமாவது நீரில் வைத்திருக்க வேண்டும்</li>
                        <li>சுத்தமான ஈரமான துணியை காயத்தின்மேல் சுற்றுவது வலியை குறைக்கும்</li>
                        <li>பாதிப்பு ஏற்பட்டவரை அமைதி படுத்தவும்</li>
                        <li>சுத்தமான துணிகட்டு (Bandage) துணியை சுற்றலாம்</li>
                        <li>Paracetamol மாத்திரை வலியை குறைக்கும்</li>
                        <li>Tetanus ஊசி தேவைப்படலாம்</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-red-500/10 border-red-500/30 text-white">
                    <CardHeader>
                      <CardTitle className="text-red-400">ஆபத்தான தீக்காயம் (Major Burns)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="list-disc list-inside space-y-2">
                        <li>தீப்பிடித்து எரிந்து கொண்டு இருப்பவரை ஓடாமல் தரையில் படுத்து உருளும்படி கூறவேண்டும்</li>
                        <li>கனமான போர்வை அல்லது சாக்கு உடன் இருந்தால் அதை உடம்பில் சுற்றி தீயை அணைக்கலாம்</li>
                        <li>தண்ணீரை ஊற்றி தீயை அணைக்கலாம்</li>
                        <li>விபத்து நடந்த இடத்திலிருந்து தீக்காயத்தால் பாதிக்கப்பட்டவரை உடனடியாக அகற்ற வேண்டும்</li>
                        <li>அவர் மேல் எரிந்து ஒட்டி உள்ள துணிகளை அகற்ற கூடாது</li>
                        <li>சுத்தமான Bandage கிடைக்கும் பட்சத்தில் அதைவைத்து சுற்றிக் கட்டலாம்</li>
                        <li>நீர் குமிழிகள் இருந்தால் அதை உடைக்ககூடாது</li>
                        <li>எந்த ஒரு மருந்து திரவங்களையும் தீக்காயத்தின் மேல் தடவக்கூடாது</li>
                        <li>பாதிக்கப்பட்ட பகுதியை இருதயத்திற்கு மேல் அளவு வரை உயர்த்தி வைக்கவும்</li>
                        <li>மின்சாரத்தினால் பாதிக்கப்பட்டவரை காப்பாற்றும்போது முதலில் மின்சாரம் ஊடுருவாத பொருளால் அகற்ற வேண்டும்</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-yellow-500/10 border-yellow-500/30 text-white">
                    <CardHeader>
                      <CardTitle className="text-yellow-400">Shock (இரத்த அழுத்த குறைவு) உண்டான முதல் உதவி</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="text-yellow-400 mb-2">செய்ய வேண்டியவை:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          <li>பாதிக்கப்பட்டவரை படுக்க வைக்கவும்</li>
                          <li>கால்கள் 12 அங்குலம் உயர்த்தி பிடிக்கவும்</li>
                          <li>ஒரு போர்வை வைத்து தீக்காயம் ஏற்ப்பட்டவரை மூடவும்</li>
                          <li>நாடிதுடிப்பு மற்றும் மூச்சுவிடும் தன்மையை நோக்க வேண்டும்</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-400 mb-2">செய்யக்கூடாதவை:</h4>
                        <ul className="list-disc list-inside space-y-2 text-red-400">
                          <li>மாவு மற்றும் மை போன்ற எந்த ஒரு பொருளையும் தீக்காயத்தின் மேல் தடவவோ, ஊற்றவோ கூடாது</li>
                          <li>நீர்குமிழ்கள் மற்றும் உறிந்த தோல் பகுதிகளை அகற்றக் கூடாது</li>
                          <li>குடிப்பதற்காக எந்தவிதமான திரவங்களும் கொடுக்கக் கூடாது</li>
                          <li>தலைக்கு அடியில் தலையனையை வைக்காதீர்கள்</li>
                        </ul>
                      </div>
                      <div className="bg-orange-500/20 p-4 rounded-lg mt-4">
                        <p className="text-orange-400">
                          <strong>அவசர உதவி:</strong> உதவிக்கு உடனடியாக 108 ஆம்புலன்ஸை அனுகவும்.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4">அவசர தொடர்பு எண்</h3>
              <div className="space-y-2">
                <p className="text-2xl">📞 108 - ஆம்புலன்ஸ்</p>
                <p>தீக்காயம் ஏற்பட்டால் உடனடியாக மருத்துவ உதவி பெறுங்கள்</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
