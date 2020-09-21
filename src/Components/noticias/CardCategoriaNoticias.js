import React from 'react';

import Card from "react-bootstrap/Card";

const CardCategoriaNoticias = (props) => {
    return (
        
     
        <Card className=" mt-3 ">
          <Card.Img
            variant="top"
            src="https://www.infobae.com/new-resizer/GVSCX3D10xycaOcXy8fgw15WRBg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/P46MBKQGPBHP7ISLFR4IGONWJY.jpg"
          />
          <Card.Body>
            <Card.Title>{props.categoriaEncontrada.titulo} </Card.Title>
            <Card.Text>
              {props.noticiasxSeccion}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small classNameName="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        
    
    );
};

export default CardCategoriaNoticias;