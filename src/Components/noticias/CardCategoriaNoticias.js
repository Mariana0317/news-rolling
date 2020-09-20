import React from 'react';

import Card from "react-bootstrap/Card";

const CardCategoriaNoticias = () => {
    return (
        
     
        <Card className="mx-auto mt-3 ">
          <Card.Img
            variant="top"
            src="https://www.infobae.com/new-resizer/GVSCX3D10xycaOcXy8fgw15WRBg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/P46MBKQGPBHP7ISLFR4IGONWJY.jpg"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small classNameName="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        
    
    );
};

export default CardCategoriaNoticias;