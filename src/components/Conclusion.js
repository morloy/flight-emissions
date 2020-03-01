import React from "react"

import { Media } from "./Media"
import { Image } from "./Image"

export const Conclusion = () => (
  <div className="container conclusion">
    <h1>What now?</h1>
    <Media image="savings.svg" alt="Savings" large reverse>
      <p>
        <strong>It is up to you to take action now.</strong>
      </p>
      <p>You can ignore what you learnt here and keep going as usual.</p>
      <p>
        But when you plan your next vacation, business trip, or want to visit
        your family—think twice if you would still go if you had to pay the real
        price.
      </p>
      <p>
        If you do take an airplane, consider donating the amount from this
        calculator to a climate compensation organization.
      </p>
      <p>
        We recommend <strong>atmosfair</strong> from Germany. This calculator is
        based on their work.
      </p>
      <p>
        <strong>Donate here:</strong>
      </p>
      <a
        href="https://www.atmosfair.de/en/donate/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="atmosfair.svg" alt="Atmosfair" />
      </a>
    </Media>
  </div>
)
