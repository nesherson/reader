import Styled from 'styled-components';

const PostTitle = Styled.h3`
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1.12rem;
    font-weight: normal;
`;

const Link = Styled.a`
    text-decoration: none;
    color: #000;
    font-size: 1.05rem;
`;

const PostDetails = Styled.div`
    display: flex;
    font-size: 0.92rem;
    color: #999;
`;

const StyledSpan = Styled.span`
    margin-right: 10px;
`;

export const Post = ({post}) => {
    const { type, author, link, title, score, comment_num } = post;
    return (
        <Link href={link} target='_blank' rel='noopener norefferer'>
            <PostTitle>{title}</PostTitle>
            <PostDetails>
                <StyledSpan>{type}</StyledSpan>
                <StyledSpan>{score} pts</StyledSpan>
                <StyledSpan>by {author}</StyledSpan>
                <StyledSpan>{comment_num} comments</StyledSpan>
            </PostDetails>
        </Link>
    );
}