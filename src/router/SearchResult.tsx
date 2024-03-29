import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./SearchResult.css"
import { FaArrowUp, FaArrowDown  } from 'react-icons/fa';
import mainIcon from '../assets/artificial-intelligence.png'

const SearchResult = () => {
    const [searchResult, setSearchResult] = useState({
        image: { large: '' },
        name: '',
        symbol: '',
        market_data: { current_price: { usd: 0 }, price_change_percentage_24h_in_currency: { usd: 0 } }
    });
    const [error, setError] = useState<string | null>(null); // Ajuste do tipo de estado para string | null
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchSearchResult = async () => {
            try {
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${query}`);
                setSearchResult(response.data);
                setError(null); // Limpar o estado de erro se a busca for bem-sucedida
            } catch (error) {
                console.log("ocorreu um erro...", error);
                setError("Ocorreu um erro ao buscar os dados. Por favor, tente novamente mais tarde."); // Define a mensagem de erro
            }
        };

        if (query) {
            fetchSearchResult();
        }
    }, [query]);

    return (
        <div>
            {error ? ( // Renderizar a mensagem de erro se houver um erro
                <div className="error-message">{error}</div>
            ) : (
                searchResult && Object.keys(searchResult).length !== 0 ? (
                    <div className='result'>
                        <div className="coin-info">
                            <img src={searchResult.image.large} alt={searchResult.name}/>
                            <h2>{searchResult.name}</h2>
                            <p>Abreviação: {searchResult.symbol}</p>
                            <p>Preço em USD: ${searchResult.market_data.current_price.usd.toFixed(2)}</p>
                            <p>Variação nas últimas 24h: ${(searchResult.market_data.price_change_percentage_24h_in_currency.usd).toFixed(2)}%</p>
                            {searchResult.market_data.price_change_percentage_24h_in_currency.usd > 0 ? (
                                <FaArrowUp className="arrow-icon green" />
                            ) : (
                                <FaArrowDown className="arrow-icon red" />
                            )}

                            <div className="img2">
                                <img src={mainIcon} alt="" />
                            </div>
                        </div>
                    </div>
                ) : ("Ops, algo deu errado... :(")
            )}
        </div>
    );
};

export default SearchResult;
