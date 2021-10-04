import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import { Container, List } from "./styles";

const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <div className="catalogue">
        {type === "catalogue" && <h2>catalogo</h2>}

        <ul>
          {type === "catalogue" &&
            catalogue.map((item, index) => (
              <List>
                <p key={index}>{item.name}</p>
                <p> R$ {item.price}</p>
                <Button type={type} item={item} />
              </List>
            ))}
        </ul>
      </div>
      <div className="cart">
        {type === "cart" && <h2>Carrinho</h2>}
        <ul>
          {type === "cart" &&
            cart.map((item, index) => (
              <List key={index}>
                <p>{item.name}</p>
                <p>R$ {item.price}</p>
                <Button type={type} item={item} />
              </List>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default ProductList;
