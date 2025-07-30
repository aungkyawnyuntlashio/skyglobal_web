import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RippleButton from './components/RippleButton'
import { useScreenWidth } from './hooks/useScreenSize'

const sections = [
  {
    title: "Information We Collect",
    content: `We collect personal information you provide directly, such as name, email, and usage data. Additionally, device and analytics data may be collected automatically to improve services.`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used to personalize your experience, communicate important updates, and analyze usage to improve our applications.`,
  },
  {
    title: "Sharing and Disclosure",
    content: `We never sell your personal data. Sharing is limited to trusted partners who comply with strict confidentiality obligations to help deliver services.`,
  },
  {
    title: "Data Security",
    content: `We use state-of-the-art security practices to protect your data from unauthorized access, alteration, disclosure, or destruction.`,
  },
  {
    title: "Your Rights and Choices",
    content: `You may request access, correction, or deletion of your personal information at any time by contacting our support team.`,
  },
  {
    title: "Cookies and Tracking",
    content: `We use cookies to enhance functionality and analyze traffic. You can manage cookie preferences through your browser settings.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy periodically. We recommend reviewing it regularly to stay informed about how we protect your data.`,
  },
];

const PrivacyPolicy = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleSection = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const sWidth = useScreenWidth()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-24 font-sans text-gray-900 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 border-b-4 border-green-600 inline-block pb-2">
        Privacy Policy
      </h1>

      <p className="mb-10 text-lg leading-relaxed">
        Your privacy is a priority. This policy describes how we handle your
        data across our multiple applications. Please read carefully.
      </p>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <RippleButton
              setId={setExpandedIndex}
              index={index}
              onClick={() => toggleSection(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-expanded={expandedIndex === index}
              aria-controls={`section-content-${index}`}
              id={`section-header-${index}`}
            >
              <span className="text-xl font-semibold">{section.title}</span>
              <motion.span
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="ml-2"
              >
                ▼
              </motion.span>
            </RippleButton>


            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.div
                  key="content"
                  id={`section-content-${index}`}
                  role="region"
                  aria-labelledby={`section-header-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: sWidth >= 768 ? 60 : 140, opacity: 1 }}//height 80 for screen size md and larger for md under 160
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.5 },
                    opacity: { duration: 0.3 },
                  }}
                  className={` px-4   text-gray-700 text-base`}
                >
                  {section.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <p className="mt-16 text-sm text-gray-500 text-center">
        Last updated: July 2025
      </p>
    </div >
  );
};

export default PrivacyPolicy;
