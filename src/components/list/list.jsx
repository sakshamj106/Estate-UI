import './list.scss';
import Card from '../card/card';
import { listData } from '../../lib/dummydata';

function List({ posts = [] }) {
  return (
    <div className='list'>
      {posts.length > 0 ? (
        posts.map(item => (
          <Card key={item.id} item={item} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default List;
