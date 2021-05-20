import{o as s,c as n,a,b as e}from"./404.md.515a3b07.js";const t='{"title":"Tellraw","description":"","frontmatter":{"layout":"page","title":"Tellraw","parent":"Documentation"},"headers":[{"level":2,"title":"Line breaks","slug":"line-breaks"},{"level":2,"title":"Displaying entities / player","slug":"displaying-entities-player"},{"level":2,"title":"Displaying scores","slug":"displaying-scores"},{"level":2,"title":"Translate text","slug":"translate-text"},{"level":2,"title":"Translate text with selectors/scores","slug":"translate-text-with-selectors-scores"}],"relativePath":"documentation/tellraw.md","lastUpdated":1621513528534}',l={},o=a("h1",{id:"what-is-tellraw"},[a("a",{class:"header-anchor",href:"#what-is-tellraw","aria-hidden":"true"},"#"),e(" What is tellraw")],-1),p=a("p",null,"tellraw sends a JSON message to selected or all players being usefull for sending plain messages to players ingame",-1),r=a("p",null,[a("strong",null,"The titleraw command follows the same theme")],-1),c=a("p",null,[a("img",{src:"/bedrock-wiki-vite/assets/images/documentation/tellrawshow.png",alt:""})],-1),u=a("h1",{id:"format"},[a("a",{class:"header-anchor",href:"#format","aria-hidden":"true"},"#"),e(" Format")],-1),i=a("p",null,"this is how the tell raw command is formated",-1),k=a("div",{class:"language-"},[a("pre",null,[a("code",null,"tellraw <target: target> <raw json message: json>\n")]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),d=a("ul",null,[a("li",null,[a("code",null," <target: target>"),e(": The target is expressed as a playername or player groups such as "),a("code",null,"@a"),e(),a("code",null,"@r"),e(),a("code",null,"@s"),e(),a("code",null,"@p")]),a("li",null,[a("code",null,"<raw json message: json>"),e(": This is a json schema that tells how the message is structured or constructured. expressed with for example: "),a("code",null,'{"rawtext":[{"text":""}]}')])],-1),h=a("h1",{id:"examples"},[a("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),e(" Examples")],-1),m=a("p",null,"This sends the words in the last set of quotes",-1),g=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[e("/tellraw @a "),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"rawtext"'),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),a("span",{class:"token string"},'"Hello"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),w=a("p",null,"To use quotations in a tellraw message place a backslash to the left side of the quotation mark.",-1),b=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[e("/tellraw @a "),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"rawtext"'),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),a("span",{class:"token string"},'"Quote me: \\"I am here\\"."'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),y=a("h2",{id:"line-breaks"},[a("a",{class:"header-anchor",href:"#line-breaks","aria-hidden":"true"},"#"),e(" Line breaks")],-1),x=a("p",null,[e("To insert a line break use "),a("code",null,"\\n")],-1),v=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[e("/tellraw @a "),a("span",{class:"token punctuation"},"{"),e(),a("span",{class:"token property"},'"rawtext"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"["),e(),a("span",{class:"token punctuation"},"{"),e(),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),a("span",{class:"token string"},'"I am line one\\nI am line two"'),e(),a("span",{class:"token punctuation"},"}"),e(),a("span",{class:"token punctuation"},"]"),e(),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),f=a("h2",{id:"displaying-entities-player"},[a("a",{class:"header-anchor",href:"#displaying-entities-player","aria-hidden":"true"},"#"),e(" Displaying entities / player")],-1),T=a("p",null,"You can use the following to use selector to display names.",-1),j=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[e("/tellraw @a "),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"rawtext"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"§6The winner is: §a"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"selector"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"@a[r=5,c=1]"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),D=a("h2",{id:"displaying-scores"},[a("a",{class:"header-anchor",href:"#displaying-scores","aria-hidden":"true"},"#"),e(" Displaying scores")],-1),I=a("p",null,"You can use the following to use selector to display names.",-1),W=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[e("/tellraw @a "),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"rawtext"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"§6The winner is: §a"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"selector"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"@a[r=5,c=1]"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"§6With a score of: "'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"score"'),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"name"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"@s"'),a("span",{class:"token punctuation"},","),a("span",{class:"token property"},'"objective"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"value"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),q=a("h2",{id:"translate-text"},[a("a",{class:"header-anchor",href:"#translate-text","aria-hidden":"true"},"#"),e(" Translate text")],-1),L=a("p",null,[e("To have a language changing text you can use the translate component. please note you will need to edit each languages files for this to work. In the "),a("code",null,"resource pack / texts / all languages files"),e(":")],-1),Y=a("div",{class:"language-lang line-numbers-mode"},[a("pre",null,[a("code",null,"example.line.1=I am line 1\n")]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),E=a("p",null,"The command:",-1),F=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[e("tellraw @a "),a("span",{class:"token punctuation"},"{"),e(),a("span",{class:"token property"},'"rawtext"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"["),e(),a("span",{class:"token punctuation"},"{"),e(),a("span",{class:"token property"},'"translate"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"example.line.1"'),e(),a("span",{class:"token punctuation"},"}"),e(),a("span",{class:"token punctuation"},"]"),e(),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),H=a("h2",{id:"translate-text-with-selectors-scores"},[a("a",{class:"header-anchor",href:"#translate-text-with-selectors-scores","aria-hidden":"true"},"#"),e(" Translate text with selectors/scores")],-1),J=a("p",null,"language files:",-1),N=a("div",{class:"language-lang line-numbers-mode"},[a("pre",null,[a("code",null,"example.ine.1=The winner is: %%s. With a score of %%s\n")]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),O=a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[e("/tellraw @a "),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"translate"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"example.ine.1"'),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token property"},'"with"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"rawtext"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"selector"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"@a[r=5,c=1]"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"text"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"§6With a score of: "'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"score"'),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"{"),a("span",{class:"token property"},'"name"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"@s"'),a("span",{class:"token punctuation"},","),a("span",{class:"token property"},'"objective"'),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},'"value"'),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"}"),e("\n")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1);l.render=function(a,e,t,l,P,Q){return s(),n("div",null,[o,p,r,c,u,i,k,d,h,m,g,w,b,y,x,v,f,T,j,D,I,W,q,L,Y,E,F,H,J,N,O])};export default l;export{t as __pageData};