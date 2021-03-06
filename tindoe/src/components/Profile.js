import React, { Component }  from 'react';
import { Button, Image } from 'reactbulma'

class Profile extends Component {
  state = {
    user: null
  }

  getNextUser = () => {

    this.setState({
      user: null
    })

    fetch(`https://randomuser.me/api/?gender=female`)
      .then((response) => {
        return response.json()
      }).then(users => {
        this.setState({
          user: users.results[0]
        })
        this.props.incrementViewed()
      })
  }

  render() {
    const {user} = this.state
    return (
      <div>
        { !user ? (<p>Loading...</p>) : (
          <div>
            <Image is="128x128" src={user.picture.medium} level-item/>
            <p>
              {user.name.first.replace(user.name.first.charAt(0), user.name.first.charAt(0).toUpperCase())}
            </p>
        { this.props.viewed < this.props.maxViews ? (
          <Button info onClick={this.props.incrementViewed}>
            Next
          </Button>
          ) : (
          <p>
            Max Views Reached
          </p>
          )
        }

          </div>
        )}

      </div>
    );
  }
  componentDidMount() {
    this.getNextUser()
  }
}

export default Profile;
