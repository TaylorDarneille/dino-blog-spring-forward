import Comment from './Comment'

const Post = ({ comments, title, author, body }) => {
    // use the function body to do what ever calculation you like
    // mapping an array of jsx components
    const commentParagraphs = comments.map((burrito, index) => {
        return <Comment key={`Comment-${index}`} content={burrito} />
    })

    return (
        <article>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{body}</p>
            <hr />
            <h3>Comments:</h3>
            {commentParagraphs}
        </article>
    )
}

export default Post

// import React, { Component } from 'react'
// import Comment from './Comment'

// class Post extends Component {
//     render() {
//         const commentParagraphs = this.props.comments.map((burrito, index)=>{
//             return <Comment key={`Commment-${index}`} content={burrito} />
//         })
//         return(
//             <article>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.author}</h2>
//                 <p>{this.props.body}</p>
//                 <hr></hr>
//                 <h3>Comments:</h3>
//                 {commentParagraphs}
//                 {/* <Comment content={this.props.comments[0]} />
//                 <Comment content={this.props.comments[1]} />
//                 <Comment content={this.props.comments[2]} /> */}
//             </article>
//         )
//     }
// }

// export default Post