import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Input, Button } from 'react-materialize'
import ReactHtmlParser from 'react-html-parser';

import './Chat.css'

class Chat extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s5 chat-details">
          <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45621095%2F249823435796%2F1%2Foriginal.jpg?auto=compress&s=e7e4655e7497202560dde4b889fecc83" alt="liked event" className="responsive-img chat-event-image" />
          <h1 className="chat-event-title">BREATHE CAROLINA</h1>
          <h1 className="chat-event-date">Sat, 21 Jul 2018</h1>
          <div className="chat-event-description">
            {ReactHtmlParser("<P><SPAN>On July 21st we welcome\u00a0<\/SPAN><A HREF=\"https://www.facebook.com/breathecarolina/\" TARGET=\"_blank\" REL=\"noreferrer noopener nofollow noopener noreferrer nofollow\">Breathe Carolina<\/A><SPAN>\u00a0for their debut at\u00a0<\/SPAN><A HREF=\"https://www.facebook.com/harboureventcentre/\" TARGET=\"_blank\" REL=\"noreferrer noopener nofollow noopener noreferrer nofollow\">Harbour Event Centre<\/A><SPAN>. Get your FREE RSVP (Before 11:30PM) at\u00a0<\/SPAN><A HREF=\"https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.solidevents.ca%2F&h=ATPt0SZex_4hgJ6nbRBzdB2vHn8sEr1V0OZeX7WzUXqaBkS5DEUU3n5EP7Kzseqq_wvnlyySudBin5aMAdxKR2UEnvhrTwAdoDWZUlpMG2Zmyg&s=1\" TARGET=\"_blank\" REL=\"noreferrer noopener nofollow noopener noreferrer nofollow\">www.solidevents.ca<\/A><BR><BR><SPAN>\u2742 Lineup: Breathe Carolina<\/SPAN><BR><SPAN>\u2742 Date: Saturday, July 21.2018<\/SPAN><BR><SPAN>\u2742 Venue: Harbour Event Centre\u00a0<\/SPAN><BR><SPAN>750 Pacific BLVD. Vancouver. BC<\/SPAN><BR><SPAN>\u2742 Info: 19+ ID Required // Doors 10PM<\/SPAN><BR><SPAN>\u2742 Contact: info@solidevents.ca<\/SPAN><\/P>")}
          </div>
        </div>
        <div className="col s7 chatbox">
          <div className="chat-contacts">
            <Link to={'/app/events'} className="back-link">
              Back
          </Link>
          </div>
          <div className="chat-messages">
            <h1 className="center-align chat-message">Send your friends a message and starting planning your event!</h1>
          </div>
          <div className="chat-input card-panel">
            <Row>
              <div className="col s10">
                <Input type="text" placeholder="Type a message..." s={12} />
              </div>
              <div className="col s2">
                <Button>Send</Button>
              </div>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;