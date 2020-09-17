import React from 'react';
import Card from 'react-bootstrap/Card'
import './DetalleNoticia.css'
// import {
//     EmailShareButton,
//     FacebookShareButton,
//     InstapaperShareButton,
//     LinkedinShareButton,
//     RedditShareButton,
//     TelegramShareButton,
//     TwitterShareButton,
//     ViberShareButton,
//     WhatsappShareButton,
//   } from "react-share";

const DetalleNoticia = (props) => {
    return (
        <div className="ml-3 mr-3 mt-5 mb-5 w-75">
        <div className="container">
            <h1>ADlal alsdl sjfdsafsda fdsfksa dkaldsadsadas danvcbnvzbxcvhjzxc vgzxhcvghjkda</h1>
            <h4>m,fgm,sdfgsdfdsaf  fdsafasdfasd  fdasfdasfdsfasdfa dfadsflfgj</h4>
            <p>Por: <strong>{props.autor}Carlitos Calvo</strong></p>
            <span>{props.fecha}25 de Mayo, de 1.810</span>
            
            <div>
                <Card className="bg-dark text-white">
                  <Card.Img src="https://i2.wp.com/marvin.com.mx/wp-content/uploads/2020/01/hide-the-pain-harold-meme-decada-encuesta-imgur-2020.jpg?fit=1200%2C600&ssl=1" alt="" />
                  <Card.ImgOverlay>
                    <Card.Text variant="bottom">©{props.fotografo1}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <span>Descripción de la Foto 1</span>
            </div>
            <div className="mt-3 mb-3">
                <p>Djkdslajdkslajdklsajdkaldskaldjksaljkdjsakdjsakdjskaldjskaldjksaljdkslajdklasjdklasjkdlasjdklajskldjaskldjksladjkslajdklsajdklsjakldjaskdjalsjkflasdfhasjkdfhjiyqrt08943y25nbhuihgfjkslhfjkdslhtrjewfdshafjkdhasjfkdhsajfklhdjskalfhdjanfhewqryqueurilqwhjfkldsfnajksdlfnuihu4il324jklrnejrklq fdhsajkfhajksdf ahsdjkfhjdksafhdjklashjk ldhfjkah jkdajslfhdsjkflhdjkalfhdjsakf hj ahjkldf hjaklhfjkaslhfjdklfhdjkalf hjkl fdjklsahjdkaahdjklahjfklhuiu4ifhdjkf vjfkn rhewu3i4hfjkhfjkdaslhfais 4jnjkfhsa dfhadjskfhasjkdfh ñjkhrbke akñrahdpf8´4  ioafd´sf nadofp´ fo fi adsufa.Ajdklajdklasndamklsvjio2rjioepsd fv djfhsdjkfhusdipfidw hrjltwuirt jkdfkl gnmxcvhjuipewrrwtp fdsjgp sjkdghusid´piwerpot pwj jk hjfhgpusdfgpis jrwl ethjkrlhwtuiusdoufhg j34rhuitpi´fg fjgkdfjshglksury.</p>
                <p>ABVcnmvpjdhfjskdfhjklwnjr34j524jrh j dfh adsuhfhdsjkafld k2jl3 4j5h23j4klhfudsild fjlekwhrtjknt 2jh45j2h34uoiudhf wilrutlh rewjklthrjklt3hjk45lnyfduigsfdg wljkrtjrwethwjekth ugfhsg7olfhusñk2l 345hulhjklrjkwlnbjklwte.</p>
                <p>Nnjkgnjfkdsjkgsfhdjp gwjklr thjwklrehtjkwhruitlfdsnjfpfvb cvj dfjkgnm,xnfjipvwurt jk fhjkvhcuixpovyuipwert jfklkjg xcvjgbcvh xjipiuqyer qjekrt sdfjkvl xp bvpsjfg wejkrtpwpriu2y i 25 tr ´zpocpg uivps dfj fdnmwgrt rwiept  p</p>
            </div>
            <div>
                <Card className="bg-dark text-white">
                  <Card.Img src="https://live.mrf.io/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/15e/a93/15ea930c9fe52d434437bbb9e44d56a6/mi-cara-es-un-meme-asi-vive-la-fama-en-primera-persona-hide-the-pain-harold.jpg?mtime=1579565836" alt="" />
                  <Card.ImgOverlay>
                    <Card.Text variant="bottom">©{props.fotografo1}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
                <span>Descripción de la Foto 2</span>
            </div>
            <div className="mt-3 mb-3">
                <p>Djkdslajdkslajdklsajdkaldskaldjksaljkdjsakdjsakdjskaldjskaldjksaljdkslajdklasjdklasjkdlasjdklajskldjaskldjksladjkslajdklsajdklsjakldjaskdjalsjkflasdfhasjkdfhjiyqrt08943y25nbhuihgfjkslhfjkdslhtrjewfdshafjkdhasjfkdhsajfklhdjskalfhdjanfhewqryqueurilqwhjfkldsfnajksdlfnuihu4il324jklrnejrklq fdhsajkfhajksdf ahsdjkfhjdksafhdjklashjk ldhfjkah jkdajslfhdsjkflhdjkalfhdjsakf hj ahjkldf hjaklhfjkaslhfjdklfhdjkalf hjkl fdjklsahjdkaahdjklahjfklhuiu4ifhdjkf vjfkn rhewu3i4hfjkhfjkdaslhfais 4jnjkfhsa dfhadjskfhasjkdfh ñjkhrbke akñrahdpf8´4  ioafd´sf nadofp´ fo fi adsufa.Ajdklajdklasndamklsvjio2rjioepsd fv djfhsdjkfhusdipfidw hrjltwuirt jkdfkl gnmxcvhjuipewrrwtp fdsjgp sjkdghusid´piwerpot pwj jk hjfhgpusdfgpis jrwl ethjkrlhwtuiusdoufhg j34rhuitpi´fg fjgkdfjshglksury.</p>
                <p>ABVcnmvpjdhfjskdfhjklwnjr34j524jrh j dfh adsuhfhdsjkafld k2jl3 4j5h23j4klhfudsild fjlekwhrtjknt 2jh45j2h34uoiudhf wilrutlh rewjklthrjklt3hjk45lnyfduigsfdg wljkrtjrwethwjekth ugfhsg7olfhusñk2l 345hulhjklrjkwlnbjklwte.</p>
                <p>Nnjkgnjfkdsjkgsfhdjp gwjklr thjwklrehtjkwhruitlfdsnjfpfvb cvj dfjkgnm,xnfjipvwurt jk fhjkvhcuixpovyuipwert jfklkjg xcvjgbcvh xjipiuqyer qjekrt sdfjkvl xp bvpsjfg wejkrtpwpriu2y i 25 tr ´zpocpg uivps dfj fdnmwgrt rwiept  p</p>
            </div>
        </div>
        </div>
    );
};

export default DetalleNoticia;