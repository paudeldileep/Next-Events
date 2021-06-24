
const CommentList = (props) => {
    
    const {comments}=props;
    
    return (
        <div>{comments.map(comment=><p key={comment.id}>{comment.comment}</p>)}</div>
    );
}

export default CommentList;