(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{102:function(n,e,r){var t=r(52);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},s=r(36)(t,o);t.locals&&(n.exports=t.locals),n.hot.accept(52,function(){var e=r(52);if("string"==typeof e&&(e=[[n.i,e,""]]),!function(n,e){var r,t=0;for(r in n){if(!e||n[r]!==e[r])return!1;t++}for(r in e)t--;return 0===t}(t.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)}),n.hot.dispose(function(){s()})},111:function(n,e,r){"use strict";r.r(e);var t=r(21),o=r(17),s=r(2),a=r(96),i=(r(102),r(49),r(40)),c=r(41),l=r(38),p=r(39);r(31);const u=Object(t.b)(n=>n.channelUsers,n=>({fetchData:(e,r)=>n(o.a(e,r))}))(class extends s.Component{constructor(...n){var e;return e=super(...n),this.textInput=s.createRef(),this.render=(()=>s.createElement(p.a,{state:this.props.state},s.createElement("div",{className:"channel-users"},s.createElement("hgroup",{className:"channel-users__hgroup"},s.createElement("div",{className:"channel-users__header"},c.a.formatString(c.a.USER_LIST,this.renderChannelName())),s.createElement("div",{className:"channel-users__search-input"},s.createElement("input",{ref:this.textInput,defaultValue:this.props.userName,placeholder:c.a.USER_LIST_INPUT_PLACEHOLDER}),s.createElement("div",{onClick:this.search,className:"channel-users__search-input-button"},"🔍"))),this.generateUserList()))),this.search=(()=>{const n=this.textInput.current.value;this.props.fetchData(this.props.match.params.channelID,n)}),this.generateUserList=(()=>this.props.users&&0!==this.props.users.length?s.createElement("div",{className:"channel-users__container"},this.props.users.map(this.generateUserLink)):null),this.generateUserLink=(n=>s.createElement(a.a,{className:"channel-users__user-link",to:l.g(this.props.match.params.channelID,n.userID)},n.user)),this.renderChannelName=(()=>s.createElement(i.a,{channelID:this.props.match.params.channelID})),e}componentDidMount(){this.props.fetchData(this.props.match.params.channelID)}componentDidUpdate(n){n.match.params.channelID!==this.props.match.params.channelID&&this.props.fetchData(this.props.match.params.channelID)}});e.default=u},52:function(n,e,r){(n.exports=r(35)(!0)).push([n.i,".channel-users > * + * {\n  margin-top: 0.6rem; }\n\n.channel-users__description {\n  display: none; }\n  @media (min-width: 1024px) {\n    .channel-users__description {\n      display: inline-flex; } }\n\n.channel-users__hgroup {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap; }\n  .channel-users__hgroup > * {\n    line-height: 2.25rem; }\n  @media (min-width: 1024px) {\n    .channel-users__hgroup {\n      flex-direction: row;\n      justify-content: space-between; } }\n\n.channel-users__search-input-button {\n  cursor: pointer;\n  background-color: #0078e7;\n  padding-left: 0.6rem;\n  padding-right: 0.6rem; }\n  .channel-users__search-input-button:hover, .channel-users__search-input-button:focus {\n    background-color: #005aad; }\n\n.channel-users__search-input {\n  display: inline-flex;\n  margin-top: 0.6rem; }\n  @media (min-width: 1024px) {\n    .channel-users__search-input {\n      margin-top: 0px; } }\n  .channel-users__search-input input {\n    flex-grow: 2;\n    width: 20rem; }\n\n.channel-users__header {\n  font-weight: bolder;\n  font-size: 1.6rem;\n  line-height: 2.25rem;\n  text-shadow: 2px 2px 0px white; }\n\n.channel-users__container {\n  margin-left: -0.2rem;\n  margin-right: -0.2rem;\n  display: flex;\n  flex-wrap: wrap; }\n\n.channel-users__user-link {\n  font-family: inherit;\n  font-size: 100%;\n  padding: 0.4em 0.8em;\n  transition: background-color 0.3s ease-in-out;\n  color: white;\n  text-shadow: 1px 1px 0px #00488b;\n  text-decoration: none;\n  border-radius: 2px;\n  border: 0px;\n  cursor: pointer;\n  background-color: #0078e7;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.11);\n  margin: 0.2rem;\n  display: inline-flex;\n  flex-grow: 2;\n  justify-content: center; }\n  .channel-users__user-link:hover, .channel-users__user-link:focus {\n    background-color: #005aad; }\n  .channel-users__user-link > * {\n    font-weight: bolder; }\n","",{version:3,sources:["D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/_channel-users.scss","D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/utils/_variables.scss","D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/node_modules/breakpoint-sass/stylesheets/_breakpoint.scss","D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/node_modules/bourbon/core/bourbon/library/_shade.scss","D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/utils/_header.scss","D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/utils/_button.scss","D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/modules/D:/projects/servbot-react-frontend/scss/utils/_breakpoints.scss"],names:[],mappings:"AAEA;EAEQ,mBCQgB,EDPnB;;AAED;EACI,cAAa,EAKhB;EEmDD;IFzDA;MAIQ,qBACJ,EACH,EAAA;;AAED;EAKI,cAAa;EACb,uBAAsB;EACtB,kBAAgB,EAOnB;EAdA;IAEO,qBAAoB,EACvB;EE8CL;IFjDA;MAUQ,oBAAmB;MACnB,+BAA8B,EAGrC,EAAA;;AAED;EACI,gBAAe;EACf,0BC3BY;EDkCZ,qBC5BgB;ED6BhB,sBC7BgB,ED8BnB;EAXA;IAMO,0BGR2B,EHS9B;;AAML;EACI,qBAAoB;EACpB,mBClCgB,ED8CnB;EEMD;IFpBA;MAKQ,gBAAe,EAStB,EAAA;EAdA;IASO,aAAY;IACZ,aAAY,EAEf;;AAIL;EIjDA,oBAAmB;EACnB,kBAAiB;EACjB,qBAAmB;EACnB,+BAA8B,EJgD7B;;AAED;EACI,qBAAoB;EACpB,sBAAqB;EACrB,cAAa;EACb,gBAAe,EAElB;;AAED;EKvEA,qBAAoB;EACpB,gBAAe;EACf,qBAAoB;EACpB,8CAA6C;EAC7C,aALuD;EAOvD,iCFsBmC;EErBnC,sBAAqB;EACrB,mBAAkB;EAClB,YAAU;EACV,gBAAc;EACd,0BJNgB;EIYhB,cAAa;EACb,oBAAmB;ECuBrB,4EAAqE;ENgC/D,eAAc;EACd,qBAAoB;EACpB,aAAY;EACZ,wBAAuB,EAK1B;EAVA;IKxDG,0BFa+B,EEZlC;ELuDA;IAQO,oBAAmB,EACtB",file:"_channel-users.scss",sourcesContent:["@import '../utils/index';\r\n\r\n.channel-users {\r\n    >*+* {\r\n        margin-top: $element-spacing;\r\n    }\r\n\r\n    &__description {\r\n        display: none;\r\n\r\n        @include breakpoint($desktop-width) {\r\n            display: inline-flex\r\n        }\r\n    }\r\n\r\n    &__hgroup {\r\n        >* {\r\n            line-height: 2.25rem;\r\n        }\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-wrap:nowrap;\r\n\r\n        @include breakpoint($desktop-width) {\r\n            flex-direction: row;\r\n            justify-content: space-between;\r\n        }\r\n\r\n    }\r\n\r\n    &__search-input-button {\r\n        cursor: pointer;\r\n        background-color: $color-main;\r\n\r\n        &:hover,\r\n        &:focus {\r\n            background-color: shade($color-main, 25%);\r\n        }\r\n\r\n        padding-left: $element-spacing;\r\n        padding-right: $element-spacing;\r\n    }\r\n\r\n    &__search-input {\r\n        display: inline-flex;\r\n        margin-top: $element-spacing;\r\n\r\n        @include breakpoint($desktop-width) {\r\n            margin-top: 0px;\r\n        }\r\n\r\n        input {\r\n            flex-grow: 2;\r\n            width: 20rem;\r\n\r\n        }\r\n\r\n    }\r\n\r\n    &__header {\r\n        @include header-nm;\r\n    }\r\n\r\n    &__container {\r\n        margin-left: -0.2rem;\r\n        margin-right: -0.2rem;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n\r\n    }\r\n\r\n    &__user-link {\r\n        @include button;\r\n        margin: 0.2rem;\r\n        display: inline-flex;\r\n        flex-grow: 2;\r\n        justify-content: center;\r\n\r\n        >* {\r\n            font-weight: bolder;\r\n        }\r\n    }\r\n}","$background-main-color: #3c3c3c;\r\n$background-color: #f0f0f0;\r\n$color-error: #ff5a5f;\r\n$color-ok: #087e8b;\r\n$color-active: #c1839f;\r\n\r\n$color-main: #0078e7;\r\n$color-blue: rgb(66, 184, 221);\r\n$color-green: rgb(28, 184, 65);\r\n$color-red: rgb(202, 60, 60);\r\n$color-orange: rgb(223, 117, 20);\r\n$color-grey: #aaaaaa;\r\n$element-spacing: 0.6rem;\r\n$content-spacing: 2.5rem;\r\n$container-spacing: 1.5rem;\r\n$tablet-width: 480px;\r\n$desktop-width: 1024px;","//////////////////////////////\n// Default Variables\n//////////////////////////////\n$Breakpoint-Settings: (\n  'default media': all,\n  'default feature': min-width,\n  'default pair': width,\n\n  'force all media type': false,\n  'to ems': false,\n  'transform resolutions': true,\n\n  'no queries': false,\n  'no query fallbacks': false,\n\n  'base font size': 16px,\n\n  'legacy syntax': false\n);\n\n$breakpoint: () !default;\n\n//////////////////////////////\n// Imports\n//////////////////////////////\n@import \"breakpoint/settings\";\n@import 'breakpoint/context';\n@import 'breakpoint/helpers';\n@import 'breakpoint/parsers';\n@import 'breakpoint/no-query';\n\n@import 'breakpoint/respond-to';\n\n@import \"breakpoint/legacy-settings\";\n\n//////////////////////////////\n// Breakpoint Mixin\n//////////////////////////////\n\n@mixin breakpoint($query, $no-query: false) {\n  @include legacy-settings-warning;\n\n  // Reset contexts\n  @include private-breakpoint-reset-contexts();\n\n  $breakpoint: breakpoint($query, false);\n\n  $query-string: map-get($breakpoint, 'query');\n  $query-fallback: map-get($breakpoint, 'fallback');\n\n  $private-breakpoint-context-holder: map-get($breakpoint, 'context holder') !global;\n  $private-breakpoint-query-count: map-get($breakpoint, 'query count') !global;\n\n  // Allow for an as-needed override or usage of no query fallback.\n  @if $no-query != false {\n    $query-fallback: $no-query;\n  }\n\n  @if $query-fallback != false {\n    $context-setter: private-breakpoint-set-context('no-query', $query-fallback);\n  }\n\n  // Print Out Query String\n  @if not breakpoint-get('no queries') {\n    @media #{$query-string} {\n      @content;\n    }\n  }\n\n  @if breakpoint-get('no query fallbacks') != false or breakpoint-get('no queries') == true {\n\n    $type: type-of(breakpoint-get('no query fallbacks'));\n    $print: false;\n\n    @if ($type == 'bool') {\n      $print: true;\n    }\n    @else if ($type == 'string') {\n      @if $query-fallback == breakpoint-get('no query fallbacks') {\n        $print: true;\n      }\n    }\n    @else if ($type == 'list') {\n      @each $wrapper in breakpoint-get('no query fallbacks') {\n        @if $query-fallback == $wrapper {\n          $print: true;\n        }\n      }\n    }\n\n    // Write Fallback\n    @if ($query-fallback != false) and ($print == true) {\n      $type-fallback: type-of($query-fallback);\n\n      @if ($type-fallback != 'bool') {\n        #{$query-fallback} & {\n          @content;\n        }\n      }\n      @else {\n        @content;\n      }\n    }\n  }\n\n  @include private-breakpoint-reset-contexts();\n}\n\n\n@mixin mq($query, $no-query: false) {\n  @include breakpoint($query, $no-query) {\n    @content;\n  }\n}\n",'@charset "UTF-8";\n\n/// Mixes a color with black.\n///\n/// @argument {color} $color\n///\n/// @argument {number (percentage)} $percent\n///   The amount of black to be mixed in.\n///\n/// @return {color}\n///\n/// @example scss\n///   .element {\n///     background-color: shade(#ffbb52, 60%);\n///   }\n///\n///   // CSS Output\n///   .element {\n///     background-color: #664a20;\n///   }\n\n@function shade(\n  $color,\n  $percent\n) {\n  @if not _is-color($color) {\n    @error "`#{$color}` is not a valid color for the `$color` argument in " +\n           "the `shade` mixin.";\n  } @else {\n    @return mix(#000, $color, $percent);\n  }\n}\n',"@mixin header() {\r\n    font-weight: bolder;\r\n    font-size: 1.6rem;\r\n    line-height:2.25rem;\r\n    text-shadow: 2px 2px 0px white;\r\n    & + * {\r\n        margin-top: $container-spacing;\r\n    }\r\n}\r\n\r\n@mixin header-nm() {\r\n    font-weight: bolder;\r\n    font-size: 1.6rem;\r\n    line-height:2.25rem;\r\n    text-shadow: 2px 2px 0px white;\r\n}\r\n\r\n@mixin subheader() {\r\n    font-weight: bolder;\r\n    font-size: 1.3rem;\r\n    text-shadow: 2px 2px 0px white;\r\n    & + * {\r\n        margin-top: $container-spacing;\r\n    }\r\n}","@mixin button($color: $color-main, $foreground-color: white) {\r\n    font-family: inherit;\r\n    font-size: 100%;\r\n    padding: 0.4em 0.8em;\r\n    transition: background-color 0.3s ease-in-out;\r\n    color: $foreground-color; // color: rgba(0, 0, 0, 0.8);\r\n  //  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.10));\r\n    text-shadow: 1px 1px 0px  shade($color, 40%);\r\n    text-decoration: none;\r\n    border-radius: 2px;\r\n    border:0px;\r\n    cursor:pointer;\r\n    background-color: $color;\r\n\r\n    &:hover,\r\n    &:focus {\r\n        background-color: shade($color, 25%);\r\n    }\r\n    display: flex;\r\n    align-items: center;\r\n    @include mshadow;\r\n}","@import 'variables';\r\n@import '../../node_modules/breakpoint-sass/stylesheets/_breakpoint.scss';\r\n@mixin autoflex {\r\n  display: flex;\r\n  flex-direction: column;\r\n  >*+* {\r\n    margin-top: $element-spacing;\r\n    @include breakpoint($desktop-width) {\r\n      margin-top: 0px;\r\n      margin-left: $element-spacing;\r\n    }\r\n  }\r\n  @include breakpoint($desktop-width) {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n@mixin stretchedflex {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  >*+* {\r\n    margin-top: $element-spacing;\r\n    @include breakpoint($desktop-width) {\r\n      margin-top: 0px;\r\n    }\r\n  }\r\n  @include breakpoint($desktop-width) {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n@mixin flexlist {\r\n  >*+* {\r\n    margin-top: $element-spacing;\r\n  }\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n@mixin mshadow {\r\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 8px 0 rgba(0,0,0,0.11);\r\n}"],sourceRoot:""}])}}]);