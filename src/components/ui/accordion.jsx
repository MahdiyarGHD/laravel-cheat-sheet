import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import "../../assets/fonts/Icomoon/style.css"
import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, isBarHidden = false, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn((isBarHidden ? "border-none" : "") + `border-b border-gray-300/20`, className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between font-light py-2 pt-2 data-[state=open]:text-[#5890FF] text-sm transition-all [&[data-state=open]>.icon-chevron-thin-down]:rotate-180 group",
        className
      )}
      {...props}>
      <span className="group-hover:underline">{children}</span>
      <span className="h-4 w-4 shrink-0 transition-transform duration-200 icon-chevron-thin-down hover:no-underline"></span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header> 
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
