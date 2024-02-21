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
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "General",
      question: "Why do we use it?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "General",
      question: "Where does it come from?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Events",
      question: "How do I create an event?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Events",
      question: "How do I manage attendees?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Events",
      question: "Can I customize event notifications?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Accommodation",
      question: "What types of accommodation are available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Accommodation",
      question: "How do I book accommodation?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Accommodation",
      question: "Can I cancel my accommodation booking?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Shows",
      question: "How do I book tickets for a show?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Shows",
      question: "Is there a minimum age for attending shows?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Shows",
      question: "Are there any discounts for group bookings?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Others",
      question: "How can I cancel my subscription?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Others",
      question: "How do I contact customer support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      category: "Others",
      question: "What payment methods are accepted?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [category, setCategory] = useState("General");

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqList = qna.filter((item) => item.category === category);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <ImgElement />
      <Card className="px-20 bg-color3 bg-opacity-80 w-100 mx-auto my-auto py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-3xl font-bold text-center mb-3">FAQs</h1>
          <h1 className="text-xl font-bold text-center mb-8">
            Have a Question
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mr-10 md:mb-0">
              {["General", "Events", "Accommodation", "Shows", "Others"].map(
                (cat) => (
                  <Button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    color="secondary"
                    className="px-8 font-bold mb-2"
                  >
                    {cat}
                  </Button>
                )
              )}
            </div>
            <div className="md:w-3/4">
              {faqList.map((item, index) => (
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
