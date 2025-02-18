/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ArticleCard from '../../components/cards/ArticleCard';
import './HomeScreen.css';

function HomeScreen() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const url = "http://api.php-blog-project.loc/article";
                const response = await fetch(url);
                console.log(response);
                if (!response.ok) {
                    throw new Error('Erreur de réseau');
                }
                const result = await response.json();
                const lastPublishedArticles = result.sort((a,b) => {
                    return new Date(b.published_at) - new Date(a.published_at)
                }).slice(0,12)
                console.log(lastPublishedArticles);
                setData(lastPublishedArticles || []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 
    
    return ( 
        <main className="mt-5 pt-3 row">
            {loading && 
                <p className='col-12 text-center'>
                    Chargement des données ...
                </p>} 
            {(data.length > 0)
                ? (data.map((item, i) => <ArticleCard key={i} article={item} />))
                : !loading && <p className='col-12 text-center'>
                    Aucun article trouvé ...
                </p>}
        </main>
    );
}
export default HomeScreen;