import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import { NewsCards } from './components';
import useStyles from './styles';
const Services = () => {
  const [activeArticle, setActiveArticle] = useState(-1);
  const [newsArticles, setNewsArticles] = useState([]);
  const [ isopen,setIsOpen] = useState(false);

  const classes = useStyles();

  const alanKey='580526a64dc544ca9f22ebd661f157922e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          console.log('these are the articles:', articles)
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
      onConnectionStatus: async function (status) {
        if (status === 'authorized'){
          await alanBtnInstance.activate();
          alanBtnInstance.playText(
              'Welcome to the News App'
          );
        }
      }
    });
  }, []);

  return (
   <div>
     <div className={classes.logoContainer}>
      {newsArticles.length ? (
        <div className={classes.infoContainer}>
          <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
          <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
        </div>
      ) : null}
     </div>
     <NewsCards articles={newsArticles} activeArticle={activeArticle} />
   </div>
  );
};

export default Services;
