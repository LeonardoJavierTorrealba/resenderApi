let error403 = `'<!DOCTYPE html>\r\n' +
'<html>\r\n' +
'<head>\r\n' +
'    <title>Web App - Unavailable</title>\r\n' +
'    <style type="text/css">\r\n' +
'        html {\r\n' +
'            height: 100%;\r\n' +
'            width: 100%;\r\n' +
'        }\r\n' +
'\r\n' +
'        #feature {\r\n' +
'            width: 960px;\r\n' +
'            margin: 95px auto 0 auto;\r\n' +
'            overflow: auto;\r\n' +
'        }\r\n' +
'\r\n' +
'        #content {\r\n' +
'            font-family: "Segoe UI";\r\n' +
'            font-weight: normal;\r\n' +
'            font-size: 22px;\r\n' +
'            color: #ffffff;\r\n' +
'            float: left;\r\n' +
'            width: 460px;\r\n' +
'            margin-top: 68px;\r\n' +
'            margin-left: 0px;\r\n' +
'            vertical-align: middle;\r\n' +
'        }\r\n' +
'\r\n' +
'            #content h1 {\r\n' +
'                font-family: "Segoe UI Light";\r\n' +
'                color: #ffffff;\r\n' +
'                font-weight: normal;\r\n' +
'                font-size: 60px;\r\n' +
'                line-height: 48pt;\r\n' +
'                width: 800px;\r\n' +
'            }\r\n' +
'\r\n' +
'        p a, p a:visited, p a:active, p a:hover {\r\n' +
'            color: #ffffff;\r\n' +
'        }\r\n' +
'\r\n' +
'        #content a.button {\r\n' +
'            background: #0DBCF2;\r\n' +
'            border: 1px solid #FFFFFF;\r\n' +
'            color: #FFFFFF;\r\n' +
'            display: inline-block;\r\n' +
'            font-family: Segoe UI;\r\n' +
'            font-size: 24px;\r\n' +
'            line-height: 46px;\r\n' +
'            margin-top: 10px;\r\n' +
'            padding: 0 15px 3px;\r\n' +
'            text-decoration: none;\r\n' +
'        }\r\n' +
'\r\n' +
'            #content a.button img {\r\n' +
'                float: right;\r\n' +
'                padding: 10px 0 0 15px;\r\n' +
'            }\r\n' +
'\r\n' +
'            #content a.button:hover {\r\n' +
'                background: #1C75BC;\r\n' +
'            }\r\n' +
'    </style>\r\n' +
'</head>\r\n' +
'<body bgcolor="#00abec">\r\n' +
'    <div id="feature">\r\n' +
'        <div id="content">\r\n' +
'            <h1 id="unavailable">Error 403 - Forbidden</h1>\r\n' +
'            <p id="tryAgain">The web app you have attempted to reach has blocked your access.</p>\r\n' +
'        </div>\r\n' +
'    </div>\r\n' +
'</body>\r\n' +
'</html>\r\n`;

error403 = error403.text();
console.log(error403);

