import React, { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from "reactstrap";
import question from "../../assets/fake-data/dataQuestion";

const Question = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <section className="question_answer mt-5">
      <Container>
        <Row>
          <Col md="6" className="d-flex justify-content-center">
            <div>
              <h3>Bạn hỏi, Ví MoMo trả lời</h3>
              <h5>Những câu hỏi thường gặp khi đặt vé máy bay trên MoMo</h5>
            </div>
          </Col>
          <Col md="6" className="d-flex justify-content-center">
            <Accordion flush open={open} toggle={toggle} className="w-100">
              {question.map((item) => (
                <AccordionItem key={item.targetId}>
                  <AccordionHeader targetId={item.targetId}>{item.question}</AccordionHeader>
                  <AccordionBody accordionId={item.targetId}>{item.answer}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Question;
