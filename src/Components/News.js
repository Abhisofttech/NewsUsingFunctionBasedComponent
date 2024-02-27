import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor() {
        super();
        this.state = {

            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
          let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&q=apple&from=2024-02-20&to=2024-02-20&sortBy=popularity&apiKey=8d1873f9d3874c80b082088cc2ea7746&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // let url = "https://api.currentsapi.services/v1/search?&keywords=technology&language=en&country=us&apiKey=BfDpappHxpCNG_F72gb85bvNSFkkpYUY9OCOOV39XtvHQQae&page_number=4&limit=180";
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading:false
        })
        console.log(this.props.pageSize);
    }
    nextButton = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&q=apple&from=2024-02-20&to=2024-02-20&sortBy=popularity&apiKey=8d1873f9d3874c80b082088cc2ea7746&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            })
        }


    }

    prevButton = async () => {
        let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&q=apple&from=2024-02-20&to=2024-02-20&sortBy=popularity&apiKey=8d1873f9d3874c80b082088cc2ea7746&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading:false
        })

    }

    render() {
        return (
            < >
                <div className="container ">
                    <h1 className="text-center mx-5 my-5">This is News Components</h1>
                   { this.state.loading && <Spinner />} 
                   
                    {!(this.state.loading) && <div className="row" >
                        {this.state.articles.map((elem) => {
                            return <div className="col-md-4" key={elem.url}>
                            <NewsItem title={elem.title.slice(0,40)} description={elem.description ? elem.description : 'Description is not Available'} imageUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} />
                            </div>

                        })}
                    </div>}
                    <div className="container d-flex justify-content-between my-5">

                        <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.prevButton}> &larr; Previous</button>
                        <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.nextButton} className="btn btn-primary">Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News
