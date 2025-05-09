import { useRouter } from "next/router";

export const metaTags = (
  <>
    <link rel="stylesheet" href="" />
    <meta property="og:type" content="Website" />
    <meta property="og:title" content="Problem Solving" />
    <meta
      property="og:description"
      content="A Curated Lists for understanding and solving DSA Problems for cracking interviews"
    />
    <meta name="author" content="Sathiyapramod KR" />
  </>
);

export default config = {
  head: metaTags,
  logo: <div>Problem Solving</div>,
  feedback: {
    content: null,
  },
  gitTimestamp: null,
  feedback: { content: null },
  toc: { component: null },
};
