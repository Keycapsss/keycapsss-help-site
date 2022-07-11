import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// Helper to add scripts to our page
const insertScript = (id, parentElement) => {
  const script = window.document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.id = id

  /* For Gatsby it's important to manually provide the URL
  and make sure it does not contain a trailing slash ("/").
  Because otherwise the comments for paths with/without
  the trailing slash are stored separately in the BoltDB database.
  When following a Gatsby Link a page is loaded without the trailing slash,
  but when refreshing the page (F5) it is loaded with the trailing slash.
  So essentially every URL can become duplicated in the DB and you may not see
  your comments from the inverse URL at your present URL.
  Making sure url is provided without the trailing slash
  in the remark42 config solves this. */
  let url = window.location.origin + window.location.pathname
  if (url.endsWith('/')) {
    url = url.slice(0, -1)
  }

  script.innerHTML = `
    var remark_config = {
    host: 'https://comments.keycapsss.com',
    site_id: 'keycapsss.com',
    url: '${url}',   // optional param; if it isn't defined
                     // 'window.location.origin + window.location.pathname' will be used
                     //
                     // Note that if you use query parameters as significant part of URL
                     // (the one that actually changes content on page)
                     // you will have to configure URL manually to keep query params, as
                     // 'window.location.origin + window.location.pathname' doesn't contain query params and
                     // hash. For example, default URL for 'https://example/com/example-post?id=1#hash'
                     // would be 'https://example/com/example-post'
                     //
                     // The problem with query params is that they often contain useless params added by
                     // various trackers (utm params) and doesn't have defined order, so Remark42 treats differently
                     // all this examples:
                     // https://example.com/?postid=1&date=2007-02-11
                     // https://example.com/?date=2007-02-11&postid=1
                     // https://example.com/?date=2007-02-11&postid=1&utm_source=google
                     //
                     // If you deal with query parameters make sure you pass only significant part of it
                     // in well defined order
    max_shown_comments: 10, // optional param; if it isn't defined default value (15) will be used
    theme: 'light', // optional param; if it isn't defined default value ('light') will be used
    // page_title: 'Moving to Remark42', // optional param; if it isn't defined 'document.title' will be used
    locale: 'en', // set up locale and language, if it isn't defined default value ('en') will be used
    show_email_subscription: true, // optional param; by default it is 'true' and you can see email subscription feature
                                    // in interface when enable it from backend side
                                    // if you set this param in 'false' you will get notifications email notifications as admin
                                    // but your users won't have interface for subscription
    //simple_view: true, // optional param; overrides the parameter from the backend
                        // minimized UI with basic info only
    components: ['embed'],
  };
  !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);
  `
  parentElement.appendChild(script)
  return script
}

// Helper to remove scripts from our page
const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id)
  if (script) {
    parentElement.removeChild(script)
  }
}

const Comments = ({ commentsId }) => {
  useEffect(() => {
    // If there's no window there's nothing to do for us
    if (!window) {
      return
    }
    const document = window.document
    // In case our #remark42 container exists we can add our commento script
    if (document.getElementById('remark42')) {
      insertScript('comments-script', document.body)
    }
    // Reload the Remark42 script
    const remark42 = window.REMARK42
    if (remark42) {
      remark42.destroy()
      remark42.createInstance(window.remark_config)
    }

    // Cleanup when the component unmounts
    return () => removeScript('comments-script', document.body)
  }, [commentsId])

  return (
    <>
      <div className="prose prose-slate prose-img:rounded-md dark:prose-invert lg:prose-lg">
        <h2 id="comments" tabIndex="-1" className="text-lg dark:text-slate-300">
          Comments
          <a
            href="#comments"
            aria-label="schematic permalink"
            className="anchorIcon after">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </a>
        </h2>
        <div id="remark42"></div>
      </div>
    </>
  )
}

Comments.propTypes = {
  commentsId: PropTypes.string,
}

export default Comments
