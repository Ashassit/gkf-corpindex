import { useEffect } from "react";

interface JobListing {
  id: string;
  position: string;
  salary: string;
  profile: string;
  description: string;
  responsibilities: string[];
  qualities: string[];
}

interface JobStructuredDataProps {
  jobs: JobListing[];
}

export function JobStructuredData({ jobs }: JobStructuredDataProps) {
  useEffect(() => {
    // Remove any existing job posting scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => {
      if (script.textContent?.includes('"@type":"JobPosting"')) {
        script.remove();
      }
    });

    // Add structured data for each job
    jobs.forEach((job) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      
      const structuredData = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        title: job.position,
        description: `${job.description}\n\nKey Responsibilities:\n${job.responsibilities.join("\n")}\n\nIdeal Candidate:\n${job.qualities.join("\n")}`,
        datePosted: "2026-02-24",
        validThrough: "2026-05-24", // 3 months validity
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@type": "Organization",
          name: "GKF Hospital (Mazhalai Illam)",
          sameAs: window.location.origin,
          logo: `${window.location.origin}/logo.png`,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            streetAddress: "GKF Hospital",
            addressLocality: "Madurai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        },
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: "INR",
          value: {
            "@type": "QuantitativeValue",
            value: job.salary.includes("20,000") ? 25000 : job.salary.includes("18,000") ? 23000 : 18500,
            unitText: "MONTH",
          },
        },
        identifier: {
          "@type": "PropertyValue",
          name: "GKF Hospital",
          value: job.id,
        },
        jobBenefits: "Professional growth opportunities, Learning environment, Career advancement",
      };

      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach((script) => {
        if (script.textContent?.includes('"@type":"JobPosting"')) {
          script.remove();
        }
      });
    };
  }, [jobs]);

  return null;
}
