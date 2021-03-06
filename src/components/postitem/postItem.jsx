import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
          <div className="post_btns">
              <button>Clear</button>
          </div>
        </div>
    );
};

export default PostItem;