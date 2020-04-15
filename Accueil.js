import React from "react";

export default () => (
  <div>
    <div css={``}>
      <header
        css={`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h1>Un blog</h1>
        <p>A propos de plein de choses</p>
      </header>
    </div>
    <Liste />
  </div>
);

let Liste = () => (
  <main>
    <section
      css={`
        display: flex;
        flex-direction: column;
        align-items: center;
        aside {
          text-align: center;
        }
      `}
    >
      <header>
        <h2>Articles</h2>
      </header>
      <aside>
        <img
          css="width: 10rem"
          src="https://images.unsplash.com/photo-1559113202-ce42ff9be4b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        ></img>
        <h3>Premier article</h3>
        <p>
          Cet article parle de ci et de ça, et de tout et de rien, et plus
          encore.{" "}
        </p>
        <p>
          <a href="#">
            <em>Lire</em>
          </a>
        </p>
      </aside>
      <aside>
        <img
          css="width: 10rem"
          src="https://images.unsplash.com/photo-1531056756334-3dfa36204c1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        ></img>
        <h3>Premier article</h3>
        <p>
          Cet article parle de ci et de ça, et de tout et de rien, et plus
          encore.{" "}
        </p>
        <p>
          <a href="#">
            <em>Lire</em>
          </a>
        </p>
      </aside>
    </section>
  </main>
);
