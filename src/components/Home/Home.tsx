import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LinkButton, ASH1 } from "../../layout";
import { motion } from "framer-motion";
import { contentVariants } from "../Type/Type";

export const Home: FC = () => (
  <motion.div variants={contentVariants} initial='hidden' animate='visible' exit='exit'>
    <ASH1
      animate={{ y: ["20px", "0px", "20px"] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Generate Mc'Donal coupon
    </ASH1>
    <p>
      Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Libero culpa eos
      ipsam eius fugit ut ipsum, illum quisquam illo ad reprehenderit rem praesentium,
      dicta adipisci
      {/* hic temporibus quasi, maxime facilis! Reprehenderit architecto ea enim explicabo,
      consequuntur facere tenetur itaque quisquam dolorem dicta dolorum est praesentium
      culpa ducimus esse quis provident modi ullam ut a ipsa quaerat aut officia! */}
    </p>
    <LinkButton as={Link} to='/step1'>
      Lets Start
    </LinkButton>
  </motion.div>
);
