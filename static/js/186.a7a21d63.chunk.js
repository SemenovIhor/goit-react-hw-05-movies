"use strict";(self.webpackChunkgoit_react_hw_05_movies2=self.webpackChunkgoit_react_hw_05_movies2||[]).push([[186],{186:function(n,t,e){e.r(t);var r=e(689),u=e(486),a=e(184);t.default=function(){var n=(0,r.UO)().movieId,t=(0,u.PM)(n).movieReviews;return(0,a.jsxs)("div",{children:[0===(null===t||void 0===t?void 0:t.length)&&(0,a.jsx)("p",{children:"We don't have any reviews for this movies"}),(0,a.jsx)("ul",{children:t.map((function(n){return(0,a.jsxs)("li",{children:[(0,a.jsxs)("p",{children:["Author: ",n.author]}),(0,a.jsx)("p",{children:n.content})]},n.id)}))})]})}},963:function(n,t,e){e.d(t,{Hg:function(){return o},TP:function(){return f},q5:function(){return v},z1:function(){return s},zv:function(){return p}});var r=e(861),u=e(757),a=e.n(u),c=e(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="fd58d78770f5e002deebabf4164f4fc6",o=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results.map((function(n){return{id:n.id,title:n.title}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast.map((function(n){return{name:n.name,character:n.character,profile_path:n.profile_path,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id}})));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},486:function(n,t,e){e.d(t,{Bm:function(){return i},Hn:function(){return o},PM:function(){return s},tk:function(){return c}});var r=e(439),u=e(963),a=e(791),c=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],c=t[1];return(0,a.useEffect)((function(){u.Hg().then((function(n){return c(n)}))}),[]),{trendingMovies:e}},i=function(n){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),c=e[0],i=e[1];return(0,a.useEffect)((function(){u.TP(n).then((function(n){return i(n)}))}),[n]),{movieDetails:c}},o=function(n){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),c=e[0],i=e[1];return(0,a.useEffect)((function(){u.zv(n).then((function(n){return i(n)}))}),[n]),{movieCredits:c}},s=function(n){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),c=e[0],i=e[1];return(0,a.useEffect)((function(){u.q5(n).then((function(n){return i(n)}))}),[n]),{movieReviews:c}}}}]);
//# sourceMappingURL=186.a7a21d63.chunk.js.map