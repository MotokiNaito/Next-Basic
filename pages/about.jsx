import Link from "next/link";
import Layout from "../components/Layout";
import { Component } from "react";
import fetch from "isomorphic-fetch";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/reedbarger");
    const data = await res.json();

    return { user: data };
  }

  render() {
    const { user } = this.props;

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <Link href="/">
          <a>Top</a>
        </Link>
        <div>hyyiiiiii</div>
        <img src={user.avatar_url} />
      </Layout>
    );
  }
}
