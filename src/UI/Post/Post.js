import Styled from 'styled-components';

const PostTitle = Styled.h3`
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1.12rem;
    font-weight: normal;
`;

const Link = Styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    font-size: 1.05rem;
`;

const PostDetails = Styled.div`
    display: flex;
    font-size: 0.92rem;
    color: ${(props) => props.theme.secondary};
    
`;

const StyledSpan = Styled.span`
    margin-right: 10px;
`;

export const Post = ({ post }) => {
  const { type, author, link, title, score, comment_num } = post;
  return (
    <Link href={link} target='_blank' rel='noopener norefferer'>
      <PostTitle>{title}</PostTitle>
      <PostDetails>
        {type ? <StyledSpan>{type}</StyledSpan> : null}
        <StyledSpan>{score} pts</StyledSpan>
        <StyledSpan>by {author}</StyledSpan>
        <StyledSpan>{comment_num} comments</StyledSpan>
      </PostDetails>
    </Link>
  );
};
