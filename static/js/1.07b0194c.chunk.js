webpackJsonp([1],{349:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var i=t[o](a),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(352),c=r.n(s),l=r(0),u=r.n(l),h=r(92),p=r(355),f=r.n(p),y=r(358),d=r(359),m=(r(147),r(360)),v=(r.n(m),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),b=function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=r.charAt(Math.floor(Math.random()*r.length));return t},g=function(e,t,r,n){console.log("does this appear in displayTracks?",r);var o=[];if(!0===e)for(var a in t)o.push(u.a.createElement(y.a,{onTrackClick:r,trackInfo:t[a],clickable:n}));return o},w={panelDark:{backgroundImage:"none",backgroundColor:"#191414"},centerWhiteBold:{color:"white",textAlign:"center",fontSize:"20px"}},E=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={headerText:"",userData:{},view:"",sessionName:"",sessionDescription:"",sessionData:{collaborative:!1,description:"This is made from our app!!!",external_urls:{spotify:"http://open.spotify.com/user/thelinmichael/playlist/7d2D2S200NyUE5KYs80PwO"},followers:{href:null,total:0},href:"https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO",id:"7d2D2S200NyUE5KYs80PwO",images:[],name:"A New Playlist",owner:{external_urls:{spotify:"http://open.spotify.com/user/thelinmichael"},href:"https://api.spotify.com/v1/users/thelinmichael",id:"thelinmichael",type:"user",uri:"spotify:user:thelinmichael"},public:!1,snapshot_id:"s0o3TSuYnRLl2jch+oA4OEbKwq/fNxhGBkSPnvhZdmWjNV0q3uCAWuGIhEx8SHIx",tracks:{href:"https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO/tracks",items:[],limit:100,next:null,offset:0,previous:null,total:0},type:"playlist",uri:"spotify:user:thelinmichael:playlist:7d2D2S200NyUE5KYs80PwO"},playlistContent:[],tracksInPlaylist:[],gotTracks:!1,gotSearch:!1,searchResults:[],query:"",trackToAdd:"",sessionGraph:{},sessionGraphAdd:[],updatePlayer:!1},r.handleTrackClick=r.handleTrackClick.bind(r),r}return i(t,e),v(t,[{key:"componentDidMount",value:function(){this.getHashParams()}}]),v(t,[{key:"handleTrackClick",value:function(e){console.log(e),this.addTrackToSession(this.state.headerText,e)}},{key:"getHashParams",value:function(){var e,t={},r=/([^&;=]+)=?([^&;]*)/g,n=window.location.href.split("#")[1];if(console.log(window.location.href.split("#")),1!==window.location.href.split("#").length){for(;e=r.exec(n);)t[e[1]]=decodeURIComponent(e[2]);console.log(t);var o=t.token_type+" "+t.access_token;return this.setState({headerText:o}),this.callApi(o),t}}},{key:"callApi",value:function(){function e(e){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t){var r,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=4,fetch("https://api.spotify.com/v1/me",{headers:{Authorization:t}});case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,this.setState({userData:n});case 9:console.log(this.state.userData);case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"createPlaylist",value:function(){function e(e,r,n){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t,r,n){var o,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({view:"player"}),e.next=3,fetch("https://api.spotify.com/v1/users/"+this.state.userData.id+"/playlists",{method:"POST",headers:{Authorization:t,"Content-type":"application/json"},body:JSON.stringify({collaborative:!0,name:r,description:n,public:!1})});case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,this.setState({sessionData:a}),this.createSessionGraph(this.state.sessionData.id),this.state.sessionData=a,console.log(a);case 11:case"end":return e.stop()}},e,this)}));return e}()},{key:"getPlaylistTracks",value:function(){function e(e){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t){var r,n,o,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/users/"+this.state.userData.id+"/playlists/"+this.state.sessionData.id+"/tracks",{method:"GET",headers:{Authorization:t}});case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,this.state.playlistContent=n.items,this.state.tracksInPlaylist=[];for(o in this.state.playlistContent)a=this.state.playlistContent[o].track,this.state.tracksInPlaylist.push(a),console.log(a);this.setState({gotTracks:!0});case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"searchTrack",value:function(){function e(e,r){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t,r){var n,o,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(r),e.next=3,fetch("https://api.spotify.com/v1/search?q="+n+"&type=track",{method:"GET",headers:{Authorization:t},accept:"application/json"});case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,this.setState({searchResults:a.tracks.items}),console.log(this.state.searchResults),this.setState({gotSearch:!0});case 10:case"end":return e.stop()}},e,this)}));return e}()},{key:"addTrackToSession",value:function(){function e(e,r){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t,r){var n,o,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(r),e.next=3,fetch("https://api.spotify.com/v1/users/"+this.state.userData.id+"/playlists/"+this.state.sessionData.id+"/tracks?uris="+n,{method:"POST",headers:{Authorization:t},"Content-Type":"application/json"});case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,console.log(a);case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"fetchGraph",value:function(){function e(e){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t){var r,n,o,a,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="query getSession($graphID: ID!) {\n            Session(id: $graphID) {\n                id \n                trackses {\n                    trackID\n                    id\n                }\n            }\n        }",console.log("this is in fetchgraph",t),e.next=4,Object(m.request)("https://api.graph.cool/simple/v1/cjgww71fd4nfp018700vpvkmi",r,{graphID:t});case 4:if(n=e.sent,o=n.Session.trackses,console.log(n.Session.trackses),console.log(o),o.length>1)for(a in o)i=o[a].trackID,console.log(i),this.removeTrackGraph(i),this.addTrackToSession(this.state.headerText,i);case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"removeTrackGraph",value:function(){function e(e){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t){var r,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="mutation delSession($trackGID: ID!) {\n            deleteTracks(id: $trackGID) {\n                id\n                trackID\n            }\n        }",e.next=3,Object(m.request)("https://api.graph.cool/simple/v1/cjgww71fd4nfp018700vpvkmi",r,{trackGID:t});case 3:n=e.sent,console.log(n);case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"createSessionGraph",value:function(){function e(e){return t.apply(this,arguments)}var t=n(c.a.mark(function e(t){var r,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="mutation($sessionID: String!){\n            createSession(\n                sessionID: $sessionID\n            ){\n                id\n            }\n        }",e.next=3,Object(m.request)("https://api.graph.cool/simple/v1/cjgww71fd4nfp018700vpvkmi",r,{sessionID:t});case 3:n=e.sent,this.setState({sessionGraph:n.createSession}),console.log(n),console.log(this.state.sessionGraph.id);case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this,t=b(16);if(Object.keys(this.state.userData).length>0)switch(this.state.view){case"player":return u.a.createElement("div",null,u.a.createElement(d.a,{sessionInfo:this.state.sessionData,viewPlayer:!0}),u.a.createElement(h.e,{style:{padding:"30px"}},u.a.createElement(h.l,{style:{padding:"15px"}},u.a.createElement(h.b,{bsSize:"large",style:{paddingBottom:"10px"},onClick:function(){console.log(e.state.sessionGraph.id),e.fetchGraph(e.state.sessionGraph.id)},block:!0},u.a.createElement("p",null,"Add Requests"))),u.a.createElement(h.l,null,u.a.createElement(h.k,{accordion:!0,id:"accordion-example",defaultActiveKey:"2"},u.a.createElement(h.j,{eventKey:"1",onClick:function(){e.getPlaylistTracks(e.state.headerText)}},u.a.createElement(h.j.Heading,{style:w.panelDark},u.a.createElement(h.j.Title,{style:w.centerWhiteBold,toggle:!0},"Playlist")),u.a.createElement(h.j.Body,{collapsible:!0},g(this.state.gotTracks,this.state.tracksInPlaylist,this.handleTrackClick,!1))),u.a.createElement(h.j,{eventKey:"2"},u.a.createElement(h.j.Heading,{style:w.panelDark},u.a.createElement(h.j.Title,{style:w.centerWhiteBold,toggle:!0},"Add a Song")),u.a.createElement(h.j.Body,{collapsible:!0},u.a.createElement(h.e,null,u.a.createElement(h.l,null,u.a.createElement(h.c,{sm:10,xs:10,style:{paddingLeft:"0px"}},u.a.createElement(h.d,{bsSize:"lg",type:this.state.sessionName,label:"Search Query",placeholder:"Enter a Song Name",onChange:function(t){e.state.query=t.target.value,console.log(e.state.query)}})),u.a.createElement(h.c,{sm:2,xs:2,style:{padding:"0px"}},u.a.createElement(h.b,{bsStyle:"primary",onClick:function(){e.searchTrack(e.state.headerText,e.state.query)}},u.a.createElement("p",null,"Enter")))),u.a.createElement(h.l,null,g(this.state.gotTracks,this.state.searchResults,this.handleTrackClick,!0)))))))));default:return u.a.createElement("div",{style:{backgroundColor:"#ecebe8",height:window.innerHeight}},u.a.createElement(h.e,{style:{padding:"30px"}},u.a.createElement(h.l,null,u.a.createElement(h.j,null,u.a.createElement(h.j.Heading,{style:{backgroundImage:"none",backgroundColor:"#191414"}},u.a.createElement(h.j.Title,{componentClass:"h",style:{color:"white",textAlign:"left",fontSize:"20px"}},u.a.createElement("h2",null,"Create A Session"))),u.a.createElement(h.j.Body,null,u.a.createElement("form",null,u.a.createElement("h3",null,"Name:"),u.a.createElement(h.d,{bsSize:"large",id:"formControlsSessionName",type:this.state.sessionName,label:"Session Name",placeholder:"Enter A Session Name",onChange:function(t){e.setState({sessionName:t.target.value}),console.log(e.state.sessionName)}}),u.a.createElement("h3",null,"Description:"),u.a.createElement(h.d,{bsSize:"large",id:"formControlsSessionDescription",type:this.state.sessionDescription,label:"Session Description",placeholder:"Enter A Description",onChange:function(t){e.setState({sessionDescription:t.target.value}),console.log(e.state.sessionDescription)}}),u.a.createElement("div",{style:{padding:"20px"}},u.a.createElement(h.b,{bsSize:"large",style:{padding:"10px"},onClick:function(){e.state.sessionData.length<1?console.log("Need name"):(e.createPlaylist(e.state.headerText,e.state.sessionName,e.state.sessionDescription),console.log(e.state.sessionData),console.log("after create playlist"),e.setState({view:"player"}))},block:!0},u.a.createElement("p",null,"create")))))))))}return u.a.createElement(h.e,null,u.a.createElement(h.g,null,u.a.createElement("h1",null,"Sign Into Your Spotify Account To Begin A Session"),u.a.createElement("p",null,"This App Needs You To Log In To Access Your Playlists."),u.a.createElement("p",null,u.a.createElement(h.b,{href:"https://accounts.spotify.com/authorize?"+f.a.stringify({response_type:"token",client_id:"f18adfa22eb64b1b9a74ce823ca80b3b",scope:"user-read-private user-read-email playlist-modify-public playlist-modify-private playlist-read-collaborative",redirect_uri:"http://localhost:3000/CreateSession",state:t}),bsStyle:"primary"},"Learn more"))))}}]),t}(u.a.Component);t.default=E},351:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(r,n){var o=this,a=t.extractMessage(r)+": "+JSON.stringify({response:r,request:n});return o=e.call(this,a)||this,o.response=r,o.request=n,"function"===typeof Error.captureStackTrace&&Error.captureStackTrace(o,t),o}return n(t,e),t.extractMessage=function(e){try{return e.errors[0].message}catch(t){return"GraphQL Error (Code: "+e.status+")"}},t}(Error);t.ClientError=o},352:function(e,t,r){e.exports=r(353)},353:function(e,t,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(354),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},354:function(e,t){!function(t){"use strict";function r(e,t,r,n){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),s=new f(n||[]);return i._invoke=l(e,r,s),i}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(r,o,a,i){var s=n(e[r],e,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&b.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(l).then(function(e){c.value=e,a(c)},i)}i(s.arg)}function r(e,r){function n(){return new Promise(function(n,o){t(e,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function l(e,t,r){var o=_;return function(a,i){if(o===j)throw new Error("Generator is already running");if(o===T){if("throw"===a)throw i;return d()}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var c=u(s,r);if(c){if(c===P)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===_)throw o=T,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=j;var l=n(e,t,r);if("normal"===l.type){if(o=r.done?T:O,l.arg===P)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=T,r.method="throw",r.arg=l.arg)}}}function u(e,t){var r=e.iterator[t.method];if(r===m){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=m,u(e,t),"throw"===t.method))return P;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,P;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=m),t.delegate=null,P):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,P)}function h(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function f(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(h,this),this.reset(!0)}function y(e){if(e){var t=e[w];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(b.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=m,t.done=!0,t};return n.next=n}}return{next:d}}function d(){return{value:m,done:!0}}var m,v=Object.prototype,b=v.hasOwnProperty,g="function"===typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",E=g.asyncIterator||"@@asyncIterator",x=g.toStringTag||"@@toStringTag",k="object"===typeof e,S=t.regeneratorRuntime;if(S)return void(k&&(e.exports=S));S=t.regeneratorRuntime=k?e.exports:{},S.wrap=r;var _="suspendedStart",O="suspendedYield",j="executing",T="completed",P={},A={};A[w]=function(){return this};var C=Object.getPrototypeOf,D=C&&C(C(y([])));D&&D!==v&&b.call(D,w)&&(A=D);var I=i.prototype=o.prototype=Object.create(A);a.prototype=I.constructor=i,i.constructor=a,i[x]=a.displayName="GeneratorFunction",S.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},S.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,x in e||(e[x]="GeneratorFunction")),e.prototype=Object.create(I),e},S.awrap=function(e){return{__await:e}},s(c.prototype),c.prototype[E]=function(){return this},S.AsyncIterator=c,S.async=function(e,t,n,o){var a=new c(r(e,t,n,o));return S.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},s(I),I[x]="Generator",I[w]=function(){return this},I.toString=function(){return"[object Generator]"},S.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},S.values=y,f.prototype={constructor:f,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&b.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=m)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return a.type="throw",a.arg=e,r.next=t,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=b.call(o,"catchLoc"),s=b.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),P},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),P}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:y(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=m),P}}}(function(){return this}()||Function("return this")())},355:function(e,t,r){"use strict";t.decode=t.parse=r(356),t.encode=t.stringify=r(357)},356:function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,a){t=t||"&",r=r||"=";var i={};if("string"!==typeof e||0===e.length)return i;var s=/\+/g;e=e.split(t);var c=1e3;a&&"number"===typeof a.maxKeys&&(c=a.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var h,p,f,y,d=e[u].replace(s,"%20"),m=d.indexOf(r);m>=0?(h=d.substr(0,m),p=d.substr(m+1)):(h=d,p=""),f=decodeURIComponent(h),y=decodeURIComponent(p),n(i,f)?o(i[f])?i[f].push(y):i[f]=[i[f],y]:i[f]=y}return i};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},357:function(e,t,r){"use strict";function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,s){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?n(i(e),function(i){var s=encodeURIComponent(o(i))+r;return a(e[i])?n(e[i],function(e){return s+encodeURIComponent(o(e))}).join(t):s+encodeURIComponent(o(e[i]))}).join(t):s?encodeURIComponent(o(s))+r+encodeURIComponent(o(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},358:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=(r(147),r(92)),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),l(t,[{key:"render",value:function(){var e=this,t=this.props,r=(t.loading,t.trackInfo),n=t.clickable;return s.a.createElement(c.j,{style:{padding:"0px"},onClick:function(t){n&&e.props.onTrackClick(r.uri)}},s.a.createElement(c.e,{style:{padding:"0px"}},s.a.createElement(c.c,{sm:2,xs:2,lg:1,style:{padding:"0px"}},s.a.createElement(c.f,{style:{padding:"0px"},src:r.album.images[2].url,responsive:!0})),s.a.createElement(c.c,{sm:9,xs:9,ls:11,fluid:"true",style:{padding:"0px"}},s.a.createElement(c.h,{style:{border:"0px"},header:r.name},r.artists[0].name))))}}]),t}(s.a.Component);t.a=u},359:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=r(0),s=r.n(i),c=r(92),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u={JammJumbo:{backgroundColor:"rgb(45, 45, 45)",color:"#84bd00",position:"relative",width:"100%",marginBottom:"0px",padding:"20px"},centerWhiteBold:{color:"white",textAlign:"center",fontSize:"20px"}},h=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={updatePlayer:!1,playerURL:""},r}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.sessionInfo,r=e.viewPlayer;return console.log("INSIDE SESSIOBABBER",r),r?(this.state.playerURL="https://open.spotify.com/embed?uri=spotify:user:"+t.owner.id+":playlist:"+t.id+"&view=coverart",console.log(this.state.playerURL),this.state.updatePlayer&&(console.log(document.getElementById("player").src),document.getElementById("player").src=document.getElementById("player").src),this.state.updatePlayer=!0,s.a.createElement("div",null,s.a.createElement(c.g,{style:u.JammJumbo},s.a.createElement(c.e,null,s.a.createElement(c.l,null,s.a.createElement(c.c,{lg:6,sm:6},s.a.createElement("h1",{style:{textAlign:"left",fontSize:"60px",color:"#1db954"}}," ",s.a.createElement("b",null,t.name)),s.a.createElement("p",{style:{textAlign:"left",fontSize:"30px",color:"white"}},t.description),s.a.createElement("p",{style:{textAlign:"left",fontSize:"20px",color:"white"}},"Code: ",s.a.createElement("b",null,t.id)),s.a.createElement("p",{style:{textAlign:"left",fontSize:"15px",color:"white"}},"Created by ",s.a.createElement("b",null,t.owner.id))),s.a.createElement(c.c,{lg:6,sm:6,style:{alignContent:"center",height:"auto",position:"relative"}},s.a.createElement(c.c,{lg:4}),s.a.createElement(c.c,{lg:4},s.a.createElement("div",{class:"embed-container",style:{alignContent:"center",position:"responsive"}},s.a.createElement("iframe",{id:"player",src:this.state.playerURL,width:"300",height:"380",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))),s.a.createElement(c.c,{lg:4}))))))):s.a.createElement("div",null,s.a.createElement(c.g,{style:u.JammJumbo},s.a.createElement(c.e,null,s.a.createElement(c.l,null,s.a.createElement(c.c,{lg:12,sm:12},s.a.createElement("h1",{style:{textAlign:"left",fontSize:"60px",color:"#1db954"}}," ",s.a.createElement("b",null,t.name)),s.a.createElement("p",{style:{textAlign:"left",fontSize:"30px",color:"white"}},t.description),s.a.createElement("p",{style:{textAlign:"left",fontSize:"20px",color:"white"}},"Code: ",s.a.createElement("b",null,t.id)),s.a.createElement("p",{style:{textAlign:"left",fontSize:"15px",color:"white"}},"Created by ",s.a.createElement("b",null,t.owner.id)))))))}}]),t}(s.a.Component);t.a=h},360:function(e,t,r){"use strict";function n(e,t,r){return s(this,void 0,void 0,function(){var n;return c(this,function(o){return n=new p(e),[2,n.rawRequest(t,r)]})})}function o(e,t,r){return s(this,void 0,void 0,function(){var n;return c(this,function(o){return n=new p(e),[2,n.request(t,r)]})})}function a(e){return s(this,void 0,void 0,function(){var t;return c(this,function(r){return t=e.headers.get("Content-Type"),t&&t.startsWith("application/json")?[2,e.json()]:[2,e.text()]})})}var i=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,s)}c((n=n.apply(e,t||[])).next())})},c=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,a&&(i=a[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,a=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],a=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,a,i,s,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},l=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0});var u=r(351),h=r(351);t.ClientError=h.ClientError,r(361);var p=function(){function e(e,t){this.url=e,this.options=t||{}}return e.prototype.rawRequest=function(e,t){return s(this,void 0,void 0,function(){var r,n,o,s,h,p,f,y,d;return c(this,function(c){switch(c.label){case 0:return r=this.options,n=r.headers,o=l(r,["headers"]),s=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,i({method:"POST",headers:Object.assign({"Content-Type":"application/json"},n),body:s},o))];case 1:return h=c.sent(),[4,a(h)];case 2:if(p=c.sent(),h.ok&&!p.errors&&p.data)return f=h.headers,y=h.status,[2,i({},p,{headers:f,status:y})];throw d="string"===typeof p?{error:p}:p,new u.ClientError(i({},d,{status:h.status,headers:h.headers}),{query:e,variables:t})}})})},e.prototype.request=function(e,t){return s(this,void 0,void 0,function(){var r,n,o,s,h,p,f;return c(this,function(c){switch(c.label){case 0:return r=this.options,n=r.headers,o=l(r,["headers"]),s=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,i({method:"POST",headers:Object.assign({"Content-Type":"application/json"},n),body:s},o))];case 1:return h=c.sent(),[4,a(h)];case 2:if(p=c.sent(),h.ok&&!p.errors&&p.data)return[2,p.data];throw f="string"===typeof p?{error:p}:p,new u.ClientError(i({},f,{status:h.status}),{query:e,variables:t})}})})},e.prototype.setHeaders=function(e){return this.options.headers=e,this},e.prototype.setHeader=function(e,t){var r=this.options.headers;return r?r[e]=t:this.options.headers=(n={},n[e]=t,n),this;var n},e}();t.GraphQLClient=p,t.rawRequest=n,t.request=o,t.default=o},361:function(e,t){!function(e){function t(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function r(e){return"string"!==typeof e&&(e=String(e)),e}function n(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function a(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function i(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function s(e){var t=new FileReader,r=i(t);return t.readAsArrayBuffer(e),r}function c(e){var t=new FileReader,r=i(t);return t.readAsText(e),r}function l(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function u(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"===typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&g(e))this._bodyArrayBuffer=u(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!w(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=u(e)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=a(this);if(e)return e;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(e){var t=e.toUpperCase();return E.indexOf(t)>-1?t:e}function f(e,t){t=t||{};var r=t.body;if(e instanceof f){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=p(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function d(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t}function m(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(e){return e&&DataView.prototype.isPrototypeOf(e)},w=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,n){e=t(e),n=r(n);var o=this.map[e];this.map[e]=o?o+","+n:n},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,n){this.map[t(e)]=r(n)},o.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),n(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),n(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),n(e)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];f.prototype.clone=function(){return new f(this,{body:this._bodyInit})},h.call(f.prototype),h.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var x=[301,302,303,307,308];m.redirect=function(e,t){if(-1===x.indexOf(t))throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=f,e.Response=m,e.fetch=function(e,t){return new Promise(function(r,n){var o=new f(e,t),a=new XMLHttpRequest;a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:d(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;r(new m(t,e))},a.onerror=function(){n(new TypeError("Network request failed"))},a.ontimeout=function(){n(new TypeError("Network request failed"))},a.open(o.method,o.url,!0),"include"===o.credentials&&(a.withCredentials=!0),"responseType"in a&&v.blob&&(a.responseType="blob"),o.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),a.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)}});
//# sourceMappingURL=1.07b0194c.chunk.js.map