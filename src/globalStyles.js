import { createGlobalStyle } from 'styled-components';
import GilroyHeavy from './assets/fonts/gilroy-heavy.ttf'
import GilroyBold from './assets/fonts/gilroy-bold.ttf'
import GilroySemiBold from './assets/fonts/gilroy-semibold.ttf'
import GilroyRegular from './assets/fonts/gilroy-regular.ttf'
import GilroyMedium from './assets/fonts/gilroy-medium.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Gilroy Heavy';
    src: url('${GilroyHeavy}');
  }
@font-face {
    font-family: 'Gilroy Bold';
    src: url('${GilroyBold}');
  }
@font-face {
    font-family: 'Gilroy Semibold';
    src: url('${GilroySemiBold}');
  }
@font-face {
    font-family: 'Gilroy Regular';
    src: url('${GilroyRegular}')
  }
@font-face {
    font-family: 'Gilroy Medium';
    src: url('${GilroyMedium}');
  }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	/* font-family: "Gilroy Heavy"; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

`;

export default GlobalStyle;
