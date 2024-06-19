import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "./faq.css";

export default function IndexSectionFaqsWhitePattern6() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <React.Fragment>
      <>
        <section
          className="py-24 bg-white"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-20 md:mb-0">
                <div className="max-w-md">
                  <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-yellow-500 bg-yellow-100 font-medium rounded-full shadow-sm">
                    FAQ
                  </span>
                  <h2 className="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
                    Foire Aux Questions
                  </h2>
                  <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                    AGV est une entreprise spécialisée dans l'image de marque
                    d'une entreprise voulant s'implanter dans son marché local.
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-4 card-container">
                <Accordion open={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)}>
                    Pourquoi avoir des avis Google MyBusiness ?
                  </AccordionHeader>
                  <AccordionBody>
                    Il est important d'avoir des avis positifs sur sa page Google myBusiness car ils permettent de bien vous placer par rapport à vos concurrents, et naturellement un client ira là ou le service est meilleur.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                  <AccordionHeader onClick={() => handleOpen(2)}>
                    Ou acheter des avis Google?
                  </AccordionHeader>
                  <AccordionBody>
                    Vous pouvez ici payer la prestation d'un excellent service ou produit qui incitera naturellement vos clients à laisser des avis positifs.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 3}>
                  <AccordionHeader onClick={() => handleOpen(3)}>
                    Comment acheter des avis Google ?
                  </AccordionHeader>
                  <AccordionBody>
                  Vous pouvez acheter de vraie avis google ci-dessus, nous serions honoré de pouvoir vous aider dans cette étape du référencement.
                  </AccordionBody>
                </Accordion>
                <Accordion open={open === 4}>
                  <AccordionHeader onClick={() => handleOpen(4)}>
                    Acheter des avis négatifs?
                  </AccordionHeader>
                  <AccordionBody>
                    Ne ne vendons pas ce genre de prestation.
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
