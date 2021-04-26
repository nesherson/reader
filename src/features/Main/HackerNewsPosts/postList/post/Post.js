import Styled from 'styled-components';

const PostItem = Styled.li`
    padding: 10px 10px 10px 17px;
    margin: 0 0 7px 15px;
    &:hover {
        background-color: #EEE;
    } 
`;

const PostTitle = Styled.h3`
    margin-top: 0;
    margin-bottom: 5px;
`;

const Link = Styled.a`
    text-decoration: none;
    color: #000;
    font-size: 1.05rem;
    font-weight: normal;
`;

const PostDetails = Styled.div`
    display: flex;
    font-size: 0.92rem;
    color: #999;
`;

const Span = Styled.span`
    margin-right: 10px;
`;

export const Post = ({post}) => {
    const { id, author, link, title, score, comment_num } = post;
    return (
        <PostItem key={id}>
            <PostTitle><Link href={link} target='_blank' rel='noopener norefferer'>{title}</Link></PostTitle>
            <PostDetails>
                <Span>{score} pts</Span><Span>by {author}</Span><Span>{comment_num} comments</Span>
            </PostDetails>
        </PostItem>
    );
}