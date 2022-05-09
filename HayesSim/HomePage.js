@font-face {
    font-family: Sailec;
    src: url('Resources/Fonts/Sailec-Regular.ttf');
    font-weight: 50;
}
@font-face {
    font-family: Sailec;
    src: url('Resources/Fonts/Sailec-Thin.ttf');
    font-weight: 30;
}
@font-face {
    font-family: Sailec;
    src: url('Resources/Fonts/Sailec-Light.ttf');
    font-weight: 40;
}
@font-face {
    font-family: Sailec;
    src: url('Resources/Fonts/Sailec-Medium.ttf');
    font-weight: 60;
}
@font-face {
    font-family: Sailec;
    src: url('Resources/Fonts/Sailec-Bold.ttf');
    font-weight: 70;
}

body {
    background-color: #303030;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 60px;
    margin-top: 0px;
}

.HeadIcon {
    padding-top: 12px;
    display: flex;
    justify-content: center;
}

h1 {
    font-family: 'Sailec', Arial, sans-serif;
    font-size: 40px;
    font-weight: 60;
    color: white;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
}

h2 {
    font-family: 'Sailec', Arial, sans-serif;
    text-align: center;
    font-size: 24px;
    font-weight: 60;
    color: white;
}

h3 {
    margin-bottom: 0px;
    font-family: 'Sailec', Arial, sans-serif;
    text-align: center;
    font-size: 20px;
    font-weight: 60;
    color: rgba(255, 255, 255, 0.8);
    padding-bottom: 18px;
}

.par {
    margin-top: 12px;
    text-align: center;
    font-family: 'Sailec', Arial, sans-serif;
    font-weight: 50;
    font-size: 16px;
    color: white;
}

.divider {
    height: 2px;
    background-color: white;
    margin-left: 24px;
    margin-right: 24px;
}

.subdivider {
    height: 2px;
    opacity: 0.4;
    background-color: white;
    margin-top: 12px;
    margin-left: 48px;
    margin-right: 48px;
}

.subtitle {
    margin-top: 8px;
    text-align: center;
    font-family: 'Sailec', Arial, sans-serif;
    padding-bottom: 16px;
    margin-bottom: 0px;
    font-weight: 50;
    color: rgba(255, 255, 255, 0.8);
}


.label {
    font-family: 'Sailec', Arial, sans-serif;
    font-weight: 50;
    font-size: 16;
    opacity: 1;
    color: white;
    margin-bottom: 8px;
    padding-bottom: 0px;
    margin-top: 12px;
}

.sublabel {
    font-family: 'Sailec', Arial, sans-serif;
    font-weight: 50;
    font-size: 14;
    margin-top: 0px;
    margin-bottom: 12px;
    opacity: 1;
    color: rgba(255, 255, 255, 0.54);
}

.container {
    margin-left: 16px;
}

.card {
    border-radius: 4px;
    max-width: 600px;
    min-height: 48px;
    background-color: #424242;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 12px auto 12px;
    display: flex;
}

.textbody {
    margin-left: 24px;
    margin-right: 24px;
    color: white;
}

.square {
    width: 112px;
    height: 112px;
    background-color: aqua;
}

.textbody {
    margin: 0px;
}

.footer {
    background: #303030;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: 'Sailec', Arial, sans-serif;
    font-weight: 50;
    font-size: 16px;
    color: white;
    height: 48px;
}

.footer-text {
    margin-top: 16px;
    text-align: center;
    font-family: 'Sailec', Arial, sans-serif;
    padding-bottom: 16px;
    margin-bottom: 0px;
    font-weight: 50;
    color: rgba(255, 255, 255, 0.8);
}


ul {
    color: white;
    font-family: 'Sailec', Arial, sans-serif;
    font-size: 16px;
    font-weight: 50;
}

.list {
    margin-top: 0px;
    display: flex;
    justify-content: center;

}

.topheader {
    background: #212121;
    margin-top: 0px;
}

.header {
    height: 56px;
    background: #303030;
    display: flex;
    justify-content: center;
    align-items: center;
}

.subheader {
    height: 48px;
    /*background-color: #434343;*/
    display: flex;
    justify-content: center;
    align-items: center;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%
}

.shadow{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.bottom-shadow{
    box-shadow: 4px 4px 4px 8px rgba(0, 0, 0, 0.2);
}
