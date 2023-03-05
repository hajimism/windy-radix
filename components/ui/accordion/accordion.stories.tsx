import { StoryObj, Meta } from "@storybook/react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from ".";

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

const SampleAccordion = () => {
  return (
    <div className="dark:bg-primary-700">
      <Accordion type="single" collapsible>
        {accordionProps.map(({ key, label, content }) => (
          <AccordionItem value={key} key={key}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>{content} </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const meta: Meta<typeof SampleAccordion> = {
  title: "components/Accordion",
  component: SampleAccordion,
};

export default meta;

type Story = StoryObj<typeof SampleAccordion>;

export const Primary: Story = {
  args: {},
};
