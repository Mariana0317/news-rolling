import React from "react";
import { Card } from "react-bootstrap";

const CardGrandeNotDest = () => {
  return (
    <Card className="mt-3">
      <Card.Img
        variant="top"
        src="https://www.infobae.com/new-resizer/GVSCX3D10xycaOcXy8fgw15WRBg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/P46MBKQGPBHP7ISLFR4IGONWJY.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardGrandeNotDest;
