import dynamic from "next/dynamic";
import { Metadata } from 'next'//dynamic
import { NextSeo } from "next-seo";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import Hero from "@/components/heros/Hero";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import EmailSection from "@/components/email/EmailSection"
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Project = dynamic(() => import("@/components/ProjectShowcase"), {
  ssr: true,
});
/*<Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head> */
      
 
// either Static metadata
export const metadata: Metadata = {
  title: '...',
  description: `Joshua Bridgemohan's Homepage. Here you are welcomed to see just a bit of who I am and what I aim to achieve`
}
 

export default function Home() {
  return (
    <>
      <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <NextSeo
        title="Joshua Bridgemohan | React and Frontend Developer"
        description="Explore the professional portfolio of Joshua Bridgemohan, a skilled React and Frontend Developer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Joshua Bridgemohan - React and Frontend Developer Portfolio",
          description:
            "Dive into the world of web development with Joshua Bridgemohan. Discover a React and Frontend Developer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Joshua Bridgemohan - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      
      <Hero />
      <Skills />
      <Project projects={PROJECT_SHOWCASE} />
          <EmailSection />
    </>
  );
}
