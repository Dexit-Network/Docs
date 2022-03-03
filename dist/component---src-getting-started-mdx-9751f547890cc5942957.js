(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{T0dp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n("Fcif"),a=n("+I+c"),r=(n("mXGw"),n("/FXl")),i=n("TjRS"),s=(n("aD51"),["components"]),c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!Object.prototype.hasOwnProperty.call(c,"__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/getting-started.mdx"}});var l={_frontmatter:c},u=i.a;function p(e){var t=e.components,n=Object(a.a)(e,s);return Object(r.b)(u,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"Thanks for your interest in DeXit Chain. In this technical documentation, we have covered node setup instructions, our all-in-one command-line interface , and different SDK modules we utilized in the DeXit Chain"),Object(r.b)("h2",{id:"running-node"},"Running Node:"),Object(r.b)("p",null,"This is a detailed documentation for setting up a Validator or a full node on DeXit Network. "),Object(r.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("p",null,"We officially support macOS, and Linux only. Other platforms may work but there is no guarantee. We will extend our support to other platforms after we have stabilized our current architecture."),Object(r.b)("h2",{id:"prepare-your-node"},"Prepare your Node"),Object(r.b)("p",null,"To run DeXit nodes, you will need least with the following minimum requirements:"),Object(r.b)("p",null,"8-core, x86_64 architecture processor"),Object(r.b)("p",null,"32GB RAM "),Object(r.b)("p",null,"1 TB of SSD storage space"),Object(r.b)("p",null,"A broadband Internet connection with up/down 10Mbps\nNote: If you are running a node in Testnet, 120GB SSD, 2CPU/8GB of RAM is sufficient.\ninstall DeXit Fullnode you can download the pre-build binaries from release page or follow the instructions to set up a full node."),Object(r.b)("p",null,"Compilation\nRequirements\n• Linux or Mac\n• golang >= 1.13\n• git"),Object(r.b)("p",null,"Download the config files genesis.json and config.toml by:"),Object(r.b)("h2",{id:"testnet"},"testnet"),Object(r.b)("p",null,"wget --no-check-certificate  $(curl -s ",Object(r.b)("a",{parentName:"p",href:"https://api.github.com/repos/DeXit-Network/Dxt/releases/latest"},"https://api.github.com/repos/DeXit-Network/Dxt/releases/latest")," |grep browser_ |grep testnet |cut -d\\\" -f4)\nunzip testnet.zip\nLaunch your node and wait for it to get synced\nCreate your Private Key to setup Node account\nYou need to create an account that represents a validator's Account information. Use the following command to create a new account and set a password for that account:\ngeth account new --datadir ./node\necho {your-password} > password.txt"),Object(r.b)("p",null,"Warning "),Object(r.b)("p",null,"Please do not expose your RPC endpoints to public network.\ngeth --config ./config.toml --datadir ./node --syncmode snap -unlock {your-validator-address} --password password.txt  --mine  --allow-insecure-unlock --cache 18000"),Object(r.b)("p",null,"Network Params\nCommunity users can use any Ethereum compatible wallet to configure with DeXit network params, like metamask etc."),Object(r.b)("p",null,"MainNet Chain Name:\nChain Name: DeXit\nChain ID: 999\nSymbol: DXT\nRPC URL: ",Object(r.b)("a",{parentName:"p",href:"https://datafeed.dexit.network"},"https://datafeed.dexit.network"),"\nExplorer URL: ",Object(r.b)("a",{parentName:"p",href:"https://dxtscan.com"},"https://dxtscan.com"),"\nWebSocket RPC URL: wss://dxtscan.network"),Object(r.b)("p",null,"TestNet Chain Name:\nChain Name: DeXit\nChain ID: 899\nSymbol: DXT\nRPC URL: ",Object(r.b)("a",{parentName:"p",href:"https://testnet.dexit.network"},"https://testnet.dexit.network"),"\nExplorer URL: ",Object(r.b)("a",{parentName:"p",href:"https://testnet.dxtscan.com"},"https://testnet.dxtscan.com"),"\nWebSocket RPC URL: wss://testnet.dxtscan.network"))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/getting-started.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-getting-started-mdx-9751f547890cc5942957.js.map