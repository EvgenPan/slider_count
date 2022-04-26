import './styles/App.css';
import PostItem from "./components/postitem/postItem";
import {useState} from "react";
import Counter from "./components/counter";
function App() {
    const [posts] = useState([
        {id:1, title:'Javascript', description: ' its programming language' },
        {id:2, title:'Nodejs', description: ' its programming language' },
        {id:3, title:'Java', description: ' its programming language' }
    ]);
  return (
      <div className="App">
          {/*{posts.map(post =>*/}
          {/*    <PostItem post={post} key={post.id} />*/}
          {/*)*/}
          {/*}*/}
           <Counter/>
      </div>

  );
}

export default App;
