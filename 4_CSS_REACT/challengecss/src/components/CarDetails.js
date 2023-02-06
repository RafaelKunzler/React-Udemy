import './CarDetails.css';

const CarDetails = ({brand, color, year, price, img}) => {
  return (
    <div className="car_details_card">
        <div className="img">
            <img className="car_img"  width={260} height={200} src={img} alt="foto do veiculo"/>
        </div>
        <div className="details">
            <h2 className="car_title">{brand}</h2>
            <p className="car_details">{color}</p>
            <p className="car_details">{year}</p>
            <h3 className="car_details">R$: {price}</h3>
            <button className="buy_car">Comprar</button>
        </div>
    </div>
  )
}

export default CarDetails