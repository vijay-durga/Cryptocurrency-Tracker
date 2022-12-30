import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoBlog: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedCrypto = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyUrl: each.currency_logo,
    }))
    this.setState({cryptoBlog: updatedCrypto, isLoading: false})
  }

  render() {
    const {cryptoBlog, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div className="loader-cont" testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg-cont">
            <h1 className="header">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency"
            />
            <div className="div-cont-list">
              <nav className="nav-cont">
                <h1 className="head-nav">Coin Type</h1>
                <ul className="list-cont">
                  <li className="usd">USD</li>
                  <li className="euro">EURO</li>
                </ul>
              </nav>
              <div>
                {cryptoBlog.map(each => (
                  <CryptocurrencyItem key={each.id} eachItem={each} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
