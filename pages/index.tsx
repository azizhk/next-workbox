import * as React from "react";
import Link from "next/link";

export default class Index extends React.PureComponent {
  render() {
    return (
      <>
        <h2>Hello World</h2>
        <div>This is index</div>
        <div>{`Build ID: ${process.env.NEXT_BUILD_ID}`}</div>
        <div>
          <Link href="/a">
            <a>Go to /a</a>
          </Link>
        </div>
      </>
    );
  }
}
