import { useInView } from "framer-motion";
import { Fragment, useRef } from "react";

const SectionPerso = ({ id, children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.05 });

  return (
    <Fragment>
      <section
        id={id}
        ref={ref}
        className={`section ${inView ? "section-visible" : "section-hidden"}`}
      >
        {children}
      </section> 

    </Fragment>
  );
};

export default SectionPerso;