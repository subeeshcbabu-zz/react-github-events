const GITHUB_API = 'https://api.github.com/users/';
const GitHubEvents = React.createClass({
  getInitialState () {
    return {};
  },
  componentDidMount () {
    //TODO store to localStorage.
    $.get(`${GITHUB_API}${this.props.username}/events/${this.props.type}`, data => {
     
     this.setState({
        count: data.length
     });
   });
  },
  render () {
    return (
      <div>
        <div>Github activity count : {this.state.count}</div>
        
      </div>
    );
  }
  
});

ReactDOM.render(<GitHubEvents type='public' username='subeeshcbabu'/>, document.getElementById('main'));
