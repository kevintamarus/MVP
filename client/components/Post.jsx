import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h2>Submit Your Hours Here:</h2>
        <div>
          <form id="form-post">
            Date: <input className="form-post" type="text" name="date" onChange={(input) => this.props.handleInputPost(input, 'date')}/>
            Arrived: <input className="form-post" type="text" name="arrived" onChange={(input) => this.props.handleInputPost(input, 'arrived')}/>
            Left: <input className="form-post" type="text" name="left" onChange={(input) => this.props.handleInputPost(input, 'left')}/>
            <input className="form-post" type="submit" onClick={this.props.handleClickPost}/>
          </form>
        </div>
      </div>
    );
  }
}

export default Post;