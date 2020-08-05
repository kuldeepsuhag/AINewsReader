import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./style.js";

const infoCards = [
  {
    color: "#00838f",
    title: "Latest News",
    text: "Give me the latest news",
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Technology",
    text: "Show me the latest Technology News",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: " Bitcoin, Playstation 5, Smartphones, Donal Trump ",
    text: "What's up with Playstation5?",
  },
  {
    color: "#283593",
    title: "News by Source",
    info: "CNN, Wired, BBC News, Time, IGN, BuzzFeed, ABC News .... ",
    text: "Give me the news from BBC News",
  },
];

const NewsCards = ({ articles,activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <stong>{infoCard.title.split(" ")[2]} : </stong> <br />{" "}
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Try Saying : <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} activeArticle={activeArticle}/>{" "}
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
