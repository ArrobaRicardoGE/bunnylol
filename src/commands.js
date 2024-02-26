// @flow strict

// export type CommandType = {|
//     name: string, 
//     url: string, 
//     searchurl?: string,
// |};

// export type CommandNames = 'fb' | 'm' | 'mw' | 'wa' | 'waw' | 'gm' | 'sis' | 'col' | 'yt' | 'tv' | 'gh' | 'r' | 'l' | 'me' | 'ig' | 'tw' | 'tr' | 'vs' | 'todo' |
//                            'c' | 'wf' | '$' | 'cal' | 'uvacovid' | 'hs' | 'p' | 'n' | 'h' | 'pv' | 'gd' | 'wp' | 'wsj' | 'cnn' | 'wiki' | 'g' | 'DEFAULT';

// export type CommandDataTableType = {|
//     name: string, 
//     url: string, 
//     command: CommandNames
// |};

// export type ColumnDataTableType = {| 
//     data: string, 
//     title: string 
// |};

export const COMMANDS = {
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    m: {
        name: "Messenger Desktop App",
        url: "messenger://",
    },
    mw: {
        name: "Messenger Web",
        url: "https://www.messenger.com/"
    },
    wa: {
        name: "WhatsApp Desktop App",
        url: "whatsapp://",
    },
    waw: {
        name: "WhatsApp Web",
        url: "https://web.whatsapp.com/"
    },
    gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    r: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.reddit.com/search?q="
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    ig: {
        name: "Instagram",
        url: "https://instagram.com/",
        searchurl: "https://instagram.com/"
    },
    tw: {
        name: "Twitter",
        url: "https://twitter.com/",
        searchurl: "https://twitter.com/search?q="
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    wp: {
        name: "Washington Post",
        url: "https://www.washingtonpost.com/regional/"
    },
    n: {
        name: "Netflix",
        url: "https://netflix.com/",
        searchurl: "https://www.netflix.com/search?q="
    },
    vs: {
        name: "VS Code",
        url: "vscode://",
    },
    $: {
        name: "Robinhood",
        url: "https://robinhood.com/", 
        searchurl: "https://robinhood.com/stocks/"
    },
    c: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r", 
        searchurl: "https://calendar.google.com/calendar/u/"
    },
    wiki: {
        name: "Wikipedia",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/wiki/"
    },
    up4u: {
        name: "UP4U",
        url: "https://up4u.up.edu.mx/p/inicio"
    },
    moodle: {
        name: "UP Moodle",
        url: "https://upmoodlecloud.up.edu.mx"
    },
    chat: {
        name: "ChatGPT",
        url: "https://chat.openai.com"
    },
    etn: {
        name: "ETN Autobuses",
        url: "https://etn.com.mx/"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
