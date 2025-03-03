import {
  Accordion,
  AccordionItem,
  AccordionTriggerPlus,
  AccordionContent,
} from "@workspace/ui/components/accordion";
import React from "react";

export default function FooterListMobile() {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value="item-1">
        <AccordionTriggerPlus className="font-normal">
          Resources
        </AccordionTriggerPlus>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTriggerPlus className="font-normal">
          About
        </AccordionTriggerPlus>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTriggerPlus className="font-normal">
          Explore
        </AccordionTriggerPlus>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTriggerPlus className="font-normal">
          Company
        </AccordionTriggerPlus>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
