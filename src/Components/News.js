import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {
    
    const [articles , setArticles] = useState([]);
    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(1);
    const [totalResults , setTotalResults] = useState();
        
    // useEffect( async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${props.category}&q=apple&from=2024-02-20&to=2024-02-20&sortBy=popularity&apiKey=8d1873f9d3874c80b082088cc2ea7746&page=${page}&pageSize=${props.pageSize}`;
       
    //     setLoading(true)
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     setArticles( parsedData.articles)
    //     setTotalResults(parsedData.totalResults)
    //     setLoading(false)
        
    //     console.log(props.pageSize);
    // },[])
    useEffect(() => {
        const fetchData = async () => {
            let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${props.category}&q=apple&from=2024-02-20&to=2024-02-20&sortBy=popularity&apiKey=8d1873f9d3874c80b082088cc2ea7746&page=${page}&pageSize=${props.pageSize}`;
    
            setLoading(true);
            try {
                let data = await fetch(url);
                let parsedData = await data.json();
                console.log(parsedData);
                setArticles(parsedData.articles);
                setTotalResults(parsedData.totalResults);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };
    
        fetchData(); // Call the function immediately
    
    }, [props.category, page, props.pageSize]); // Include dependencies
    

   const nextButton = async () => {
        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&q=apple&from=2024-02-20&to=2024-02-20&sortBy=popularity&apiKey=8d1873f9d3874c80b082088cc2ea7746&page=${page + 1}&pageSize=${props.pageSize}`;
            
            setLoading(true)
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            setPage(page+1)
            setArticles( parsedData.articles)
            setLoading(false)
           }


    }

   const  prevButton = async () => {
        let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&q=apple&from=2024-02-20&to=2024-02-20&sortBy=popularity&apiKey=8d1873f9d3874c80b082088cc2ea7746&page=${page - 1}&pageSize=${props.pageSize}`;
         setLoading(false)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setPage(page-1)
        setArticles( parsedData.articles)
        setLoading(false)
     }

   
        return (
            < >
                <div className="container ">
                    <h1 className="text-center mx-5 my-5">This is News Components</h1>
                   { loading && <Spinner />} 
                   
                    {!(loading) && <div className="row" >
                        {articles.map((elem) => {
                            return <div className="col-md-4" key={elem.url}>
                            <NewsItem title={elem.title.slice(0,40)} description={elem.description ? elem.description : 'Description is not Available'} imageUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} />
                            </div>

                        })}
                    </div>}
                    <div className="container d-flex justify-content-between my-5">

                        <button type="button" disabled={page <= 1} className="btn btn-primary" onClick={prevButton}> &larr; Previous</button>
                        <button type="button" disabled={(page + 1 > Math.ceil(totalResults / props.pageSize))} onClick={nextButton} className="btn btn-primary">Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    
}

export default News
