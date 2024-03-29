import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./SearchResult.css"
import { FaArrowUp, FaArrowDown  } from 'react-icons/fa';

const SearchResult = () => {
    const [searchResult, setSearchResult] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchSearchResult = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${query}`);
                setSearchResult(response.data);
            } catch (error) {
                console.log("ocorreu um erro...", error);
            }
        };

        if (query) {
            fetchSearchResult();
        }
    }, [query]);

    return (
        <div>
            {searchResult ? (
                <div className='result'>
                    <div className="coin-info">
                        <img src={searchResult.image.large} alt="searchResult.name"/>
                        <h2>{searchResult.name}</h2>
                        <p>Abreviação: {searchResult.symbol}</p>
                        <p>Preço em USD: ${searchResult.market_data.current_price.usd.toFixed(2)}</p>
                        <p>Variação nas últimas 24h: ${searchResult.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p>
                        {parseFloat(searchResult.market_data.price_change_percentage_24h_in_currency.usd) > 0 ? (
                            <FaArrowUp className="arrow-icon green" />
                        ) : (
                            <FaArrowDown className="arrow-icon red" />
                        )}
                    </div>
                </div>
            ) : ("Ops, algo deu errado... :(")}
        </div>
    );
};

export default SearchResult;
