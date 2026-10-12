import { PageHeader, About, Stats, Process, Lab, Industries, Testimonials, CtaBand } from "../components/site";

export const metadata = {
  title: "About Us",
  description:
    "Asmi Enterprises has manufactured and supplied housekeeping, personal-care and industrial cleaning chemicals from Delhi since 2017, with an in-house quality control lab.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Who we are"
        title="About Asmi Enterprises"
        sub="Manufacturer and wholesaler of housekeeping, personal-care and industrial cleaning chemicals since 2017."
      />
      <About />
      <Stats />
      <Process />
      <Lab />
      <Industries />
      <Testimonials />
      <CtaBand />
    </>
  );
}
