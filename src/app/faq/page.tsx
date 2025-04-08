"use client";

import React from "react";
import { FadeInUp } from "@/components/animations/fade-in-up";
import { AnimatedText } from "@/components/animations/animated-text";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does your music promotion process work?",
    answer: "Our music promotion process starts with a careful evaluation of your track to identify the right playlists and audience. We then place your music on carefully curated playlists, promote it to our network, and provide detailed performance reports so you can track your growth."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most artists start seeing an increase in streams within the first week of promotion. However, the full impact typically develops over 2-4 weeks as your music reaches more listeners across our network. Our more comprehensive packages offer longer-term growth."
  },
  {
    question: "What genres do you support?",
    answer: "We support a wide range of genres including Hip-Hop, R&B, Pop, Electronic/EDM, Rock, Indie, Alternative, Jazz, Classical, and many more. If you're unsure whether your genre fits our promotion network, feel free to contact us."
  },
  {
    question: "Do you guarantee a specific number of streams?",
    answer: "Yes, our packages come with guaranteed minimum stream counts. This means your track will receive at least the specified number of streams during the promotion period, though many artists experience even higher numbers."
  },
  {
    question: "Can I submit unreleased music?",
    answer: "Absolutely! We can work with unreleased music to help build pre-release momentum. However, we'll need your track to be accessible via a private link for evaluation before we can proceed with promotion planning."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "If we fail to deliver the guaranteed stream count specified in your package, we'll extend your promotion period at no additional cost until we meet the guarantee. For other concerns about our services, please contact our support team."
  },
  {
    question: "How do I track the performance of my promotion?",
    answer: "Each promotion package includes detailed reporting. For basic packages, you'll receive a comprehensive report at the end of your campaign. Premium packages include interim updates and more detailed analytics about listener demographics and engagement."
  },
  {
    question: "Can I choose which playlists my music appears on?",
    answer: "While we carefully curate playlist placements based on your music style for optimal results, our Ultimate Exposure package does offer some customization options. Contact us after purchase to discuss specific playlist preferences."
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <FadeInUp>
        <div className="text-center mb-16">
          <AnimatedText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-bold mb-4"
            animation="typewriter"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our music promotion services. 
            Can&apos;t find what you&apos;re looking for? <a href="/contact" className="text-primary hover:underline">Contact us</a>.
          </p>
        </div>
      </FadeInUp>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FadeInUp key={index} delay={index * 0.1} distance={20}>
            <div
              className={`glass-card rounded-lg overflow-hidden transition-all ${
                activeIndex === index ? "shadow-lg" : "shadow"
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.span
                  initial={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                >
                  {activeIndex === index ? (
                    <Minus className="h-4 w-4 text-primary" />
                  ) : (
                    <Plus className="h-4 w-4 text-primary" />
                  )}
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-muted-foreground border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeInUp>
        ))}
      </div>

      <FadeInUp delay={0.5}>
        <div className="mt-16 p-6 glass-card rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Our team is ready to help you with any specific questions about our promotion services.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Support
          </motion.a>
        </div>
      </FadeInUp>
    </div>
  );
} 