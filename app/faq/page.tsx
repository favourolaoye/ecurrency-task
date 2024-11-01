"use client";

import React, { useState } from 'react';
import FaqHero from '../components/faqHero';

export default function FAQ() {
  const faqData = [
    {
      question: 'How does it work?',
      answer: 'Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.'
    },
    {
      question: 'Why inhale melatonin?',
      answer: 'Inhaling melatonin allows it to enter your bloodstream more quickly than taking a pill. This can help you fall asleep faster and benefit from the calming effects of aromatherapy ingredients like lavender and chamomile.'
    },
    {
      question: 'How much melatonin is there per inhale?',
      answer: 'Each inhale delivers approximately 0.5 mg of melatonin, which is a small dose intended to help you relax and fall asleep without feeling groggy the next day.'
    },
    {
      question: 'Is it an e-cigarette or tobacco product?',
      answer: 'No, it is not an e-cigarette or tobacco product. Our diffuser contains no nicotine, tobacco, or harmful chemicals. It is designed solely for aromatherapy and relaxation purposes.'
    },
    {
      question: "What is in it?",
      answer: 'The diffuser contains a blend of melatonin, lavender, and chamomile, all of which are known for their relaxing and sleep-inducing properties. These ingredients are combined in a base of vegetable glycerin and propylene glycol to create the inhalable mist.'
    },
    {
      question: "What is not in it?",
      answer: 'Our diffuser does not contain nicotine, tobacco, vitamin E acetate, or any harmful chemicals commonly found in e-cigarettes and vaping products.'
    },
    {
      question: "How long does it last?",
      answer: 'Each diffuser is designed to last for approximately 300 inhales. This duration may vary depending on how frequently and deeply you inhale.'
    },
    {
      question: 'How do I know it has run out/died?',
      answer: 'You will notice a significant decrease in the mist produced, or it may stop producing mist altogether. Additionally, the flavor and aroma might diminish, indicating that the diffuser is empty or the battery has died.'
    },
  ];

  const sideBar = [
    { label: 'Sleepstiq product' },
    { label: 'Melatonin' },
    { label: 'Order' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FaqHero />
      <div className="w-full max-w-6xl p-4 md:p-8 text-sm">
        <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
          <div className='w-full md:w-1/6 mb-4 md:mb-0'>
            <ul className='flex md:flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-x-visible'>
              {sideBar.map((b, id) => (
                <li
                  key={id}
                  onClick={() => setActive(id)}
                  className={`${
                    active === id
                      ? 'font-semibold border-b-2 md:border-b-0 md:border-l-4 border-blueShade bg-gray-300'
                      : ''
                  } hover:bg-gray-200 p-2 cursor-pointer whitespace-nowrap md:whitespace-normal`}
                >
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 w-full md:w-5/6">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-3">
                <button
                  className="w-full text-left flex justify-between items-center py-2"
                  onClick={() => handleToggle(index)}
                >
                  <span className={`${openIndex === index ? 'font-semibold' : 'font-medium'} text-gray-700 pr-2`}>
                    Q{index + 1}: {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openIndex === index && <div className="mt-2 text-gray-600">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}