import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CaseStudy } from "@/components/case-study";
import { GoldLoanCaseStudy } from "@/components/case-studies/gold-loan";
import { EasyPayCaseStudy } from "@/components/case-studies/easy-pay";
import { projects } from "@/lib/projects";

const detailedCaseStudies: Record<
  string,
  typeof GoldLoanCaseStudy
> = {
  "gold-loan-origination-system": GoldLoanCaseStudy,
  "easy-pay-parking-app": EasyPayCaseStudy,
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sachin Sanas`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const DetailedCaseStudy = detailedCaseStudies[project.slug];

  return (
    <>
      <Nav />
      {DetailedCaseStudy ? (
        <DetailedCaseStudy project={project} next={next} />
      ) : (
        <CaseStudy project={project} next={next} />
      )}
      <Footer />
    </>
  );
}
