import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowUp,
  faCircleArrowDown,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import ImgElement from "../../components/helpers/ImgElements";

export default function Index() {
  const qna = [
    {
      category: "General",
      question: "Is there any dress code for the event?",
      answer: "There is no as such dress code but participants or audience are advised to wear dress conservatively."
    },
    {
      category: "General",
      question: "What is ABHISARGA?",
      answer: "Abhisarga is an annual techno cultural fest of IIIT Sri City, where 'Abhisarga' means 'to create/ innovate' in Sanskrit."
    },
    {
      category: "General",
      question: "When is Abhisarga going to be held?",
      answer: "Abhisarga'24 lasts for 3 days, starting from March 1st till March 3rd."
    },
    {
      category: "General",
      question: "What is the theme of Abhisarga?",
      answer: "The theme of Abhisarga'24 is mythological mystique, inspired by numerous mythologies from around the world including Indian, Japanese, Chinese, Nordic, Greek, and Arabic."
    },
    {
      category: "General",
      question: "Will there be any merchandise or souvenirs available for purchase?",
      answer: "We are planning T-shirt merchandise of premium quality at a very minimal cost. You can buy them physically at our campus."
    },
    {
      category: "General",
      question: "Will there be food and beverages available?",
      answer: "A lot of varieties of food and beverages are arranged in stalls at minimal cost where attendees can enjoy during the fest."
    },
    {
      category: "General",
      question: "Are there any prizes for the events?",
      answer: "There is a huge prize pool awaiting for the students & participants. It's about 8,00,000 and each individual event has a prize pool of about 40,000."
    },
    {
      category: "General",
      question: "How can attendees provide feedback or ask questions before or after the event?",
      answer: "We are always happy to get feedback/suggestions from your side and improve our fest year by year gradually."
    },
    {
      category: "Events",
      question: "What would be the mode of participation?",
      answer: "Most of the events have a first stage where it's in online mode and those who are selected to next round can attend physically during the fest dates."
    },
    {
      category: "Events",
      question: "Who can participate in the events?",
      answer: "Any student of any background can apply and be part of our fest. You can register for our events on the Unstop website under Abhisarga festival."
    }
];


  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <ImgElement />
      <Card className="px-20 bg-color3 bg-opacity-80 mx-auto my-auto py-20 w-[1000px] relative">
        <div className="max-w-4xl mx-auto w-full">
          <div className="w-100 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center mb-3">FAQs</h1>
            <h1 className="text-xl font-bold text-center mb-8">
              Have a Question
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-full">
              {qna.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded shadow-md p-6 mb-4 cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-between">
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className="text-gray-600 mr-2"
                    />
                    <p className="font-bold">{item.question}</p>
                    <FontAwesomeIcon
                      icon={
                        activeIndex === index
                          ? faCircleArrowUp
                          : faCircleArrowDown
                      }
                      className="text-gray-600"
                    />
                  </div>
                  {activeIndex === index && (
                    <p className="text-gray-600 mt-2">{item.answer}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
