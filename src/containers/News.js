import React from 'react';
import { connect } from 'react-redux'

import { getNews } from "../store/News/newsAction"

// MaterialUi
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const newsStyle = {
  width: '50%',
  margin: '0 auto',
}

let NewsItem = ({ news, loading,error, getNews }) => (
  <div>
    <Button variant="contained" color="secondary" onClick={getNews}>
      Press to see news
  </Button>

    {loading ?
      <div style={{ textAlign: 'center' }}>
        <h1>LOADING ... </h1>
        <CircularProgress color="secondary" />
      </div> 
      :
      news && news.length ?
      news.map(news => (
        <article style={newsStyle} >
          <div>
            <h1>{news.title}</h1>
            <h4>{news.body}</h4>
          </div>
        </article> ))
        :error?
        <h1>{error}</h1>
        :
        null}

  </div>
);

const mapStateToProps = (state) => ({
  news: state.news.news,
  loading: state.news.loading,
  error : state.news.error
})

const mapDispatchToProps = {
  getNews: getNews,
};

NewsItem = connect(mapStateToProps, mapDispatchToProps)(NewsItem)

export default NewsItem;