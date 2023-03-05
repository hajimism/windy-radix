"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const accordionProps = [
  {
    key: "item-1",
    label: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    key: "item-2",
    label: "Is it styled?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    key: "item-3",
    label: "Is it animated?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

const SampleComponent = () => {
  return (
    <Accordion type="single" collapsible>
      {accordionProps.map(({ key, label, content }) => (
        <AccordionItem value={key} key={key}>
          <AccordionTrigger>{label}</AccordionTrigger>
          <AccordionContent>{content} </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default function Home() {
  return (
    <main className="dark:bg-tertiary-300">
      <h1 className="text-6xl font-bold dark:text-white">Radix UI</h1>
      <SampleComponent />
    </main>
  );
}
