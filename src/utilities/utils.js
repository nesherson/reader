export const formatRedditPost = (post) => {
    return {
        id: post.data.id,
        type: 'Reddit',
        author: post.data.author,
        title: post.data.title,
        link: post.data.url,
        score: post.data.ups,
        comment_num: post.data.num_comments
    };
}

export const formatHackerNewsPost = (post) => {
    return {
        id: post.id,
        type: 'Hacker News',
        author: post.by,
        score: post.score,
        link: post.url,
        title: post.title,
        comment_num: post.descendants,
    };
}

export const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
 
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }