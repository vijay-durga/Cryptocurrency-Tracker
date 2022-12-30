import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, currencyUrl, usdValue, euroValue} = eachItem
  return (
    <div className="bg-container">
      <div className="img-name-cont">
        <div className="avt">
          <img src={currencyUrl} alt={currencyName} className="avatar" />
        </div>
        <p className="head">{currencyName}</p>
      </div>

      <div className="values-cont">
        <p className="usd-item">{usdValue}</p>
        <p className="euro-item">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
