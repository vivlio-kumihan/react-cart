import { useCallback, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import styles from "../styles/containers/AccordionMenu.module.sass";

const AccordionMenu = () => {
  const controls = useAnimationControls();
  const [isOpen, setIsOpen] = useState(false);

  const openDetails = useCallback(() => {
    setIsOpen(true);

    controls.start({
      height: "auto",
    });
  }, [controls]);

  const closeDetails = useCallback(() => {
    controls
      .start({
        height: 0,
      })
      .then(() => {
        setIsOpen(false);
      });
  }, [controls]);

  const handleClickDetails = useCallback(
    (e) => {
      e.preventDefault();

      if (isOpen) return closeDetails();
      openDetails();
    },
    [closeDetails, openDetails, isOpen]
  );

  return (
    <>
      <details className={styles["accordion-component"]} open={isOpen}>
        <summary
          className={styles["summary-main"]}
          onClick={handleClickDetails}
        >
          The Constitution of the United States of America
        </summary>
        <motion.div
          className={styles["details-main"]}
          animate={controls}
          initial={{
            height: 0,
          }}
          transition={{
            ease: [0.4, 0.0, 0.2, 1],
            duration: 0.4,
          }}
        >
          <div className={styles["content"]}>
            <h3>The Constitution of the United States of America (1787)</h3>
            <span>
              <p>
                We the People of the United States, in Order to form a more
                perfect Union, establish Justice, insure domestic Tranquility,
                provide for the common defence, promote the general Welfare, and
                secure the Blessings of Liberty to ourselves and our Posterity,
                do ordain and establish this Constitution for the United States
                of America.
              </p>
              <strong>Section 1.</strong>
              <br />
              <p>
                All legislative Powers herein granted shall be vested in a
                Congress of the United States, which shall consist of a Senate
                and House of Representatives.
              </p>
            </span>
          </div>
        </motion.div>
      </details>
    </>
  );
};

export default AccordionMenu;