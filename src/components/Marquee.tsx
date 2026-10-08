//    1/ search npm react marquee text 
//    2/ inatall it
//    3/ import it in Marquee.tsx
//    4/ import import MarqueeText from "react-marquee-text"
//       import "MarqueeText/styles.css"
//    5/ change import "MarqueeText/styles.css" to import "react-marquee-text/dist/styles.css"
//    6/ use <MarqueeText>...........</MarqueeText>

import MarqueeText from "react-marquee-text"
// import "MarqueeText/styles.css"  change to 
import "react-marquee-text/dist/styles.css"







const Marquee = () => {
    return (
        <div>
            
<MarqueeText direction="right" duration={10}>

    
</MarqueeText>

        </div>
    );
};

export default Marquee;