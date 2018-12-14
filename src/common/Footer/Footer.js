import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="footer-cont">
                <ul>
                    <li><a href='#'>About us</a></li>
                    {/* <li><a href='#'>Support</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>Jobs</a></li>
                    <li><a href='#'>Privacy</a></li>
                    <li><a href='#'>Terms</a></li>
                    <li><a href='#'>Directory</a></li>
                    <li><a href='#' onclick='return false;'>Language</a></li> */}
                </ul>
                <span className='copyright'>© 2018 DEV-F. INSTAGRAM</span>
            </div>
        </footer>
    )
  }
}
