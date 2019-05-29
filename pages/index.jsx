import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Home">
    <Link href="/about">
      <a>About</a>
    </Link>
    <div>hyyiiiiii</div>
  </Layout>
);

export default Index;
