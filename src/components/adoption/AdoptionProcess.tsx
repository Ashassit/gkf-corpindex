import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Button } from "../ui/button";
import { ExternalLink, FileText } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AdoptionProcess() {
  const { ref, inView } = useInView();

  const stages = [
    {
      step: "1",
      title: "Online registration",
      content: "Any individual or couple who want to adopt have to apply online under CARINGS through the website www.cara.nic.in. The Prospective Adoptive Parent(s) (PAPs) will be given a User id and Password on registration. Then they must select the nearest Specialized Adoption Agency (SAA) for a Home Study Report (HSR). State and child preferences are given. After registration, the PAPs will receive an acknowledgment message and an email."
    },
    {
      step: "2",
      title: "Document Upload",
      content: "Documents including PAN Card are to be uploaded with the User id & Pass Word."
    },
    {
      step: "3",
      title: "Home Study Report",
      content: "A social worker from the selected agency will visit the house of the PAPs and prepare a HSR."
    },
    {
      step: "4",
      title: "Seniority Number",
      content: "After uploading the HSR on the CARINGS website, the PAPs will get their seniority number."
    },
    {
      step: "5",
      title: "Child Referral",
      content: "A maximum of three children may be referred to Prospective Adoptive Parent(s) (PAPs) based on their seniority, with a one-month gap separating any consecutive referrals that include the child's photo, Child Study Report (CSR), and Medical Examination Report (MER)."
    },
    {
      step: "6",
      title: "Child Reservation",
      content: "Within 48 hours, the PAPs have to reserve a child and should contact the agency concerned for further procedures."
    },
    {
      step: "7",
      title: "Pre-Adoption Foster Care",
      content: "The child will be placed in Pre-Adoption Foster Care following adoption committee approval."
    },
    {
      step: "8",
      title: "Legal Process",
      content: "For the legalisation of adoption, the Specialised Adoption Agency (SAA) shall submit an application to the District Magistrate. Order for adoption is issued by the District Magistrate. The child's birth certificate is ,thereafter, requested by the SAA and acquired."
    },
    {
      step: "9",
      title: "Post-Adoption Follow-up",
      content: "For two years, the SAA who prepared the HSR is required to make post-adoption follow-up visits and reports on a six-monthly basis."
    }
  ];

  return (
    <section ref={ref} className="section-container py-16 md:py-24 px-4 bg-[#080808]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-white">To Adopt a Child</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <p className="text-white/80">For adoption eligibility criteria and other details, please</p>
            <a href="https://cara.wcd.gov.in/Parents/eg_ri.html" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-orange-500/30 text-orange-400 hover:bg-orange-500/10 bg-[#111111]">
                <ExternalLink className="w-4 h-4" />
                Click Here
              </Button>
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://cara.wcd.gov.in/" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-orange-600 hover:bg-orange-700 text-white">
                <FileText className="w-4 h-4" />
                Online Registration
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-[#111111] rounded-lg shadow-lg overflow-hidden border border-white/[0.07]">
            {/* Header with Image */}
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudHMlMjBwYXBlcndvcmslMjBzaWduaW5nfGVufDF8fHx8MTc1OTk4NDU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Adoption process documentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                <h3 className="text-3xl text-white p-8">Adoption Stages – In – Country</h3>
              </div>
            </div>

            {/* Accordion Content */}
            <div className="p-8">
              <Accordion type="single" collapsible className="space-y-3">
                {stages.map((stage, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/[0.07] rounded-lg px-4 bg-[#111111] hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                          {stage.step}
                        </div>
                        <span className="text-left">{stage.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-14 pr-4 pb-4 text-white/80">
                      {stage.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden rounded-lg shadow-xl"
        >
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-gray-900"></div>

          {/* Content */}
          <div className="relative p-12 text-white text-center">
            <h3 className="text-3xl mb-4">Inter Country Adoption</h3>
            <p className="mb-6 text-white/80 max-w-2xl mx-auto">
              For inter-country adoptions, click here for more information on countries and their respective agencies
            </p>
            <a href="https://cara.wcd.gov.in/Stakeholders/AFAA.html" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2 bg-orange-600 hover:bg-orange-700">
                <ExternalLink className="w-4 h-4" />
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
