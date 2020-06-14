
const AUTH0_CLIENT_ID="QUT4y41xbqMKiXwq4dVOV9sfnmxLTp90"
const AUTH0_DOMAIN="dev--b-0t91c.au.auth0.com"
const AUTH0_API_AUDIENCE="jokeish-api"
const AUTH0_CALLBACK_URL = location.href;

class App extends React.Component {
    render() {
        if (this.loggedIn) {
            return (<LoggedIn />);
        } else {
            return (<Home />);
        }
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-xs-8 col-xs-offset-2 jumbotron text-center">
                    <h1>Jokeish</h1>
                    <p>A load of Dad jokes XD</p>
                    <p>Sign in to get access</p>
                    <a onClick={this.authenticate} className="btn btn-primary btn-login btn-block">Sign in</a>
                </div>
            </div>
        )
    }
}

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    render() {
        return(
            <div className="container">
                <div className="col-lg-12">
                    <br />
                    <span className="pull-right"><a onClick={this.logout}>Log out</a></span>
                    <h2>Jokeish</h2>
                    <p>Lets feed you with some funny jokes</p>
                    <div className="row">
                        {this.state.jokes.map(function(joke, i) {
                            return (<Joke key={i} joke={joke} />);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: ""
        }
        this.like = this.like.bind(this);
    }

    like() {

    }

    render() {
        return(
            <div className="col-xs-4">
                <div className="panel panel-default">
                    <div className="panel-heading">#{this.props.jokes.id} <span className="pull-right">{this.state.liked}</span></div>
                    <div className="panel-body">
                        {this.props.joke.joke}
                    </div>
                    <div className="panel-footer">
                        {this.props.joke.likes} Likes &nbsp;
                        <a onClick={this.like} className="btn btn-default">
                            <span className="glyphicon glyphicon-thumbs-up"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }   
}

ReactDOM.render(<App />, document.getElementById('app'));