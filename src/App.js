import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";
import wordsToNumbers from "words-to-numbers";
const alanKey =
  "d996a50d2e174ca6ad5c5eefadb641af2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const classes = useStyles();
  const [newsArticles, setnewsArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);

  useEffect(() => {
    
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setnewsArticles(articles);
          setactiveArticle(-1);
          console.log(articles);
        } else if (command === "highlight") {
          setactiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText(
              "Please try again. Maximum number of articles are 20"
            );
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening .... ");
          }
          // window.open(articles[number].url,'_blank')
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://alan.app/voice/images/previews/preview.jpg"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
