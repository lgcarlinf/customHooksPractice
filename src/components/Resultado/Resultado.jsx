import { Precio, Result, Texto } from "./style";

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Result>
      <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="" />
      <div>
        <Precio>
          El precio es de : <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio mas alto del dia : <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Precio mas bajo del dia : <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas : <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima Actualizacion : <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Result>
  );
};

export default Resultado;
