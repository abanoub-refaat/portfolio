import React from "react";
import { SectionHeading } from "./SectionHeading";

export const GraphicDesignSection: React.FC = () => {
  return (
    <section className="panel-section graphic" id="design">
      <div className="page-shell">
        <SectionHeading
          number="03"
          title="GRAPHIC DESIGN PROS"
          subtitle="VISUAL EXPLORATIONS"
        />

        <div className="design-grid">
          <div className="design-tile tall coral">
            <small>POSTER SERIES</small>
            <strong>
              MAKE
              <br />
              ROOM
            </strong>
            <span>FOR IDEAS</span>
          </div>

          <div className="design-tile type">
            <small>TYPE STUDY 07</small>
            <strong>Aa</strong>
            <span>Neue modernism</span>
          </div>

          <div className="design-tile circle">
            <i />
            <strong>FORM</strong>
            <span>&amp; FUNCTION</span>
          </div>

          <div className="design-tile photo">
            <span>
              OBJECTS
              <br />
              IN MOTION
            </span>
          </div>

          <div className="design-tile cobalt">
            <small>ISSUE / 26</small>
            <strong>
              NEW
              <br />
              WAVE
            </strong>
          </div>

          <div className="design-tile grid-type">
            <span>A</span>
            <span>R</span>
            <span>2</span>
            <span>6</span>
          </div>

          <div className="design-tile manifesto">
            <small>MANIFESTO</small>
            <strong>Design is how it works.</strong>
            <i>Not only how it looks.</i>
          </div>

          <div className="design-tile mono">
            <strong>NO. 09</strong>
            <span>EVERYDAY / SYSTEMS</span>
          </div>

          <div className="design-tile clay-art">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </section>
  );
};
