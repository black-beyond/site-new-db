import React, { useEffect } from 'react'
// import Iframe from 'react-iframe'

/*** NOTES ON TURNING EMBEDS ***/
/***************
CASE #1: div + script embed
If you're trying different 3rd party sources for the live chat, and get an embed code that looks like this:

<div id="twitter-chat" className="arena-chat" data-publisher="black-beyond" data-chatroom="black-beyond-global" data-position="in-page"></div><script async src="https://go.arena.im/public/js/arenachatlib.js?p=black-beyond&e=black-beyond-global"/>
      * in that it's a div containing the embed element and a script tag that generates the chatroom into it

Then what we want to do is to take that script tag and set it dynamically into the STATIC part of the site, into our actual HTML file. That's what the function inside useEffect is doing, it's generating a script tag that uses the URL the embed code providese and then appending it into the body.
All you should need to do is change the URL into the URL in the script tag. If the script tag comes in with other attributes, just add them in like it's done with "script.async = true"

CASE #2: iframe embed
import the package "react-iframe" (it's already installed) or just uncomment line #2
See https://www.npmjs.com/package/react-iframe on how to use the component

***************/


function StreamChat() {
  useEffect(() => {
    //SETS UP ARENA.IM CHAT SCRIPT
    const script = document.createElement('script');
    script.src = "https://go.arena.im/public/js/arenachatlib.js?p=black-beyond&e=black-beyond-global";
    script.async = true;

    document.body.appendChild(script);

    return () => { document.body.removeChild(script) }

  }, [])

  return (
    <div id="stream-chat" className="arena-chat" data-publisher="black-beyond" data-chatroom="black-beyond-global" data-position="in-page"></div>
  )
}

export default StreamChat
