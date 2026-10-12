import { PageHeader, Quote, Faq } from "../components/site";

export const metadata = {
  title: "Contact",
  description: "Call, WhatsApp or send an enquiry to Asmi Enterprises for bulk orders, wholesale prices and private labelling.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in touch"
        title="Contact us"
        sub="Call, WhatsApp or send us your requirement — we'll get back with the best price."
      />
      <Quote showHead={false} />
      <Faq />
    </>
  );
}
