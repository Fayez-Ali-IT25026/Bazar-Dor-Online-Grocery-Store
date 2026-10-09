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







const Marquee = async () => {

const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
const data = await res.json()
// console.log(data)


    return (
        <div>
            
<MarqueeText direction="right" duration={10}>


{data.map((p) => {
    if (p.change.dir === "flat") return null;
    const up = p.change.dir === "up";
    return (
      <div
        key={p.id}
        className="flex items-center gap-2 whitespace-nowrap border-r border-gray-200 px-6 py-3"
      >
        <span>{p.image}</span>
        <b>{p.nameBn}</b>
        <span>{p.today} টাকা/{p.unit}</span>
        <span className={up ? "text-red-600 font-semibold" : "text-green-600 font-semibold"}>
          {up ? "▲" : "▼"} {Math.abs(p.change.pct)}%
        </span>
      </div>
    );
  })}
    
</MarqueeText>

        </div>
    );
};

export default Marquee;