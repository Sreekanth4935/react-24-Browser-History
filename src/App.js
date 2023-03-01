import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
const HistoryItem = props => {
  const {eachObject, deleteFuntion} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachObject

  const isDeleteFuntion = () => {
    deleteFuntion(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="button-container">
        <div className="history-details">
          <img src={logoUrl} alt="domain logo" className="image" />
          <div className="span-container">
            <p className="span-element">
              {title}
              <p className="span">{domainUrl}</p>
            </p>
          </div>
        </div>

        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={isDeleteFuntion}
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

class App extends Component {
  state = {searchValue: '', newList: initialHistoryList}

  deleteButtonClicked = id => {
    const {newList} = this.state
    const updatedSearchList = newList.filter(eachObject => eachObject.id !== id)
    this.setState({newList: updatedSearchList})
  }

  updateList = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue, newList} = this.state

    const searchResults = newList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="top">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="histroy"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              placeholder="search history"
              type="search"
              className="input"
              onChange={this.updateList}
              value={this.searchValue}
            />
          </div>
        </div>
        {newList.length === 0 || searchResults.length === 0 ? (
          <div className="text">
            <p className="text">There is no history to show</p>
          </div>
        ) : (
          <div className="history-container">
            <ul className="list-container">
              {searchResults.map(eachObject => (
                <HistoryItem
                  eachObject={eachObject}
                  key={eachObject.id}
                  deleteFuntion={this.deleteButtonClicked}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default App
