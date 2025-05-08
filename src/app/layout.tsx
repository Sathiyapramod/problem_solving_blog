import "nextra-theme-docs/style.css";
import { Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

const banner = <Banner storageKey="key">Problem Solving</Banner>;
const navbar = <Navbar logo={<i>Logo</i>}></Navbar>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:type" content="Website" />
        <meta property="og:title" content="Problem Solving" />
        <meta
          property="og:description"
          content="A Curated Lists for understanding and solving DSA Problems for cracking interviews"
        />
        <meta name="author" content="Sathiyapramod KR" />
      </Head>
      <body suppressHydrationWarning>
        <Layout banner={banner} navbar={navbar} pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
