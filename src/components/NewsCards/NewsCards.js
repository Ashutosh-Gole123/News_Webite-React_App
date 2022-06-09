import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';
// commands and card design
const infoCards = [
  { color: '#83BFA6', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#9377F2', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports', text: 'Give me the latest Business news' },
  { color: '#76F144', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#fd7014', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
// NewsCards that giving more info about commands
const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5 " className='title' component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6"  component="h6"><strong className='detail'>{infoCard.title.split(' ')[2]}</strong>: <br /><i className='cardtext1'> {infoCard.info }</i></Typography> : null}
                <Typography variant="h6" component="h6"  color="textPrimary">Try saying: <br /> <i className='cardtext2'>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;