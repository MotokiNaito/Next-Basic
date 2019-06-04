import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>Lorem iPsum</p>
  </Layout>
);

export default withRouter(Post);
