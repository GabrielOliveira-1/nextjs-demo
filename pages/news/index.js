import Link from "next/link";
import { Fragment } from "react";

// domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS Framework in a Nutshell
          </Link>
        </li>
        <li>Other Frameworks</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
